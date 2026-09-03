"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { HARGA_FAQS } from "./harga-faq-data";
import styles from "./HargaFaq.module.css";

export default function HargaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle(index);
    }
  };

  return (
    <AnimatedSection as="section" className={styles.section}>
      <div className="container">
        <div className={`stagger-item ${styles.header}`}>
          <h2 className={styles.title}>Pertanyaan Seputar Harga</h2>
        </div>

        <div className={styles.list}>
          {HARGA_FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `harga-faq-panel-${index}`;
            const buttonId = `harga-faq-button-${index}`;

            return (
              <div
                key={item.question}
                className={`${styles.item} stagger-item`}
              >
                <h3 className={styles.itemHeading}>
                  <button
                    id={buttonId}
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={item.question}
                    onClick={() => toggle(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    <span className={styles.question}>{item.question}</span>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`${styles.chevron} ${
                        isOpen ? styles.chevronOpen : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.panel}
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className={styles.panelInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
