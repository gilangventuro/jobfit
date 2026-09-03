import { test, expect, type Page } from "@playwright/test";
import sharp from "sharp";

const REPORTS_DIR =
  "C:\\Users\\LENOVO LOQ\\landings\\jobfit\\reports\\.preview";

/**
 * Why a manual "scroll + capture + stitch" instead of `page.screenshot({
 * fullPage: true })`:
 *
 * AnimatedSection (components/AnimatedSection.tsx) reveals a section via
 * IntersectionObserver against the REAL viewport, and — per AGENTS.md's
 * "no `once: true`" rule — resets a section back to hidden once it has
 * genuinely been shown and then leaves the real viewport, so the reveal can
 * replay on a later pass. That means at any single scroll position, only
 * the handful of sections near that position are "shown"; everything else
 * on the page is legitimately hidden at that instant, by design.
 *
 * `fullPage: true` asks Chromium to paint the ENTIRE document in one shot
 * via CDP, but it does that by rendering the page's *current* computed
 * styles beyond the real viewport — it does not simulate actually
 * scrolling through the page first. So whatever scroll position the test
 * happens to be at when the screenshot is taken determines which sections
 * are "shown" vs "reset to hidden", and a single-shot full-page capture can
 * only ever agree with one scroll position at a time. Scrolling to the top
 * before capturing (as this test previously did) left every section below
 * the fold correctly-but-unhelpfully reset to invisible in that captured
 * image, even though the markup, CSS and computed opacity were all fine.
 *
 * The fix: walk the page in real viewport-sized steps, and at EACH step —
 * while that slice is genuinely the on-screen viewport, so its sections are
 * genuinely intersecting and revealed — take a normal (non full-page)
 * screenshot of just that slice. Stitching those slices back together with
 * `sharp` produces one full-page image where every section is captured at
 * the moment it was actually visible, which is both a correct screenshot
 * and a faithful test of the real scroll-reveal behavior a user would see.
 */
async function captureStitchedFullPage(page: Page, outPath: string) {
  const viewport = page.viewportSize();
  if (!viewport) throw new Error("Viewport size is not set");

  // The header is `position: sticky` so it stays pinned within a single
  // viewport as a UX nicety, but that would make it repeat in every
  // captured slice once stitched together. Pin it to normal flow only for
  // the duration of this capture. Also hide the Next.js dev overlay
  // (`<nextjs-portal>`), which is `position: fixed` and would otherwise be
  // stamped into every slice too.
  await page.addStyleTag({
    content: `header{position:static !important;} nextjs-portal{display:none !important;}`,
  });

  const totalHeight = await page.evaluate(() => document.body.scrollHeight);

  const positions: number[] = [];
  for (let y = 0; y < totalHeight; y += viewport.height) {
    positions.push(Math.min(y, Math.max(totalHeight - viewport.height, 0)));
  }
  if (positions.length === 0) positions.push(0);

  const slices: { buffer: Buffer; top: number }[] = [];
  for (const y of positions) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    // Long enough for a section's reveal (800ms) plus its staggered
    // children, or the safety-net fallback timer, to fully settle.
    await page.waitForTimeout(900);
    const buffer = await page.screenshot();
    slices.push({ buffer, top: y });
  }

  await sharp({
    create: {
      width: viewport.width,
      height: totalHeight,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite(slices.map((s) => ({ input: s.buffer, top: s.top, left: 0 })))
    .png()
    .toFile(outPath);
}

test.describe("Beranda (/) smoke test", () => {
  test("navbar dan hero terlihat, screenshot desktop & mobile tersimpan", async ({
    page,
  }) => {
    // Desktop viewport screenshot
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/");

    const header = page.locator("header");
    await expect(header).toBeVisible();

    const heroHeading = page.getByRole("heading", {
      level: 1,
      name: /Rekrut Kandidat Terbaik dengan AI/i,
    });
    await expect(heroHeading).toBeVisible();

    const faqHeading = page.getByRole("heading", {
      level: 2,
      name: /Pertanyaan Seputar JobFit/i,
    });
    await faqHeading.scrollIntoViewIfNeeded();
    await expect(faqHeading).toBeVisible();
    await expect(
      page.getByRole("button", {
        name: /Apakah validitas tes psikologi online JobFit setara/i,
      })
    ).toBeVisible();

    await captureStitchedFullPage(page, `${REPORTS_DIR}\\beranda-desktop.png`);

    // Mobile viewport screenshot
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();

    await expect(header).toBeVisible();
    await expect(heroHeading).toBeVisible();
    await faqHeading.scrollIntoViewIfNeeded();
    await expect(faqHeading).toBeVisible();

    await captureStitchedFullPage(page, `${REPORTS_DIR}\\beranda-mobile.png`);
  });
});
