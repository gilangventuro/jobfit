# PLAN-USER-NEEDS.md — JobFit (Psikotes Online)

**Tanggal**: 2026-09-03
**Sumber data**: `intake/intake_compro.md` (PDF komprofil JobFit) + riset web (lihat sumber di tiap bagian relevan).

> **Catatan versi**: Dokumen ini menggantikan total versi lama yang keliru mengasumsikan JobFit sebagai "platform AI CV screening / ATS generik". Produk sebenarnya adalah platform **psikotes online (asesmen psikometrik)** dengan tiga modul: Psikotes Online (DISC, Papikostik, IQ), Employee Satisfaction Survey, dan Competency Assessment Survey. Seluruh analisis di bawah disusun ulang berdasarkan positioning yang benar ini.

---

## 1. Profil Psikografis Target User

Target utama adalah **staf/manajer HRD dan tim rekrutmen di perusahaan enterprise Indonesia** — lintas sektor swasta (manufaktur, hospitality, properti, ritel/FMCG), pendidikan, kesehatan, dan pemerintahan — yang menangani volume rekrutmen menengah-tinggi (puluhan hingga ratusan pelamar per periode) atau mengelola program pengembangan SDM/employee development.

Nilai dan gaya kerja yang menonjol:

- **Efisiensi berbasis bukti, bukan sekadar kecepatan.** HRD Indonesia terbiasa dengan tes psikologi berbasis kertas yang lambat dan melelahkan (dikonfirmasi sebagai pain point eksplisit di materi JobFit sendiri). Mereka mencari kecepatan, tetapi tetap menuntut hasil yang bisa dipertanggungjawabkan secara ilmiah — bukan sekadar "cepat tapi meragukan".
- **Kehati-hatian institusional.** Keputusan rekrutmen/psikotes menyangkut reputasi HRD di depan manajemen dan calon karyawan. Mereka cenderung konservatif terhadap alat baru, butuh validasi (angka statistik, testimoni, demo) sebelum berkomitmen — sejalan dengan temuan riset bahwa "skeptisisme mengenai akurasi tes daring sering kali muncul di kalangan praktisi HR konvensional" dan pertanyaan wajar soal kesetaraan tes dari rumah vs tatap muka.
- **Berorientasi dashboard dan data terstruktur.** HRD modern Indonesia semakin terbiasa dengan tools digital (HRIS, ATS, aplikasi feedback karyawan) — riset menunjukkan startup dan perusahaan yang mengadopsi HRM digital (onboarding digital, employee feedback apps) mencatat kepuasan dan retensi karyawan lebih tinggi. Target user JobFit sudah dalam mode "digital-ready" tetapi butuh keyakinan ekstra soal validitas psikometrik.
- **Multi-tasking dengan beban administratif tinggi.** Tim HRD di Indonesia sering menangani rekrutmen, administrasi kehadiran, survei kepuasan, dan pengembangan kompetensi sekaligus dengan tim kecil — mendorong preferensi terhadap platform "all-in-one" yang mengurangi jumlah tools terpisah.
- **Aspirasi: menjadi mitra strategis bisnis, bukan sekadar admin.** HRD ingin naik level dari "tukang seleksi berkas" ke "penasihat talent decision" — dashboard visual dan rekomendasi siap pakai dari psikotes online memberi mereka amunisi data untuk dibawa ke rapat manajemen.
- **Sensitif terhadap kepatuhan dan etika data.** Dengan berlakunya UU PDP (UU No. 27/2022), HRD kini punya kewajiban hukum langsung terkait pengelolaan data pribadi karyawan/kandidat, termasuk data psikometrik yang tergolong sensitif — ini menjadi pertimbangan psikografis baru: hati-hati, butuh kejelasan kebijakan privasi vendor.

Sumber: [Tes Psikotes Online: Lebih dari Sekadar Tools Rekrutmen](https://coding.id/blog/tes-psikotes/), [Strategies and challenges in Indonesia's HR landscape](https://journal.privietlab.org/index.php/JEBL/article/download/280/170/648), [UU PDP dan Pengelolaan Data Karyawan — GreatDay HR](https://greatdayhr.com/id-id/blog/uu-pdp-dan-pengelolaan-data-karyawan/).

---

## 2. Pain Points Utama

| # | Pain Point | Intensitas | Relevansi ke Layanan |
|---|---|---|---|
| 1 | Sulit menemukan kandidat yang benar-benar sesuai harapan — banyak kasus salah rekrut (mismatch kompetensi/kepribadian dengan posisi) | Tinggi | Modul Psikotes Online (DISC + Papikostik + IQ) langsung menjawab lewat profil kepribadian & kognitif kandidat sebelum keputusan hire |
| 2 | Proses seleksi lambat saat volume pelamar besar — tidak ada cara cepat menyaring banyak kandidat sekaligus | Tinggi | Input Bulk Koresponden via Excel + Share Tes otomatis via Email/WhatsApp memangkas waktu administrasi seleksi massal |
| 3 | Tes psikologi manual berbasis kertas melelahkan, proses koreksi manual, dan hasil baru bisa didapat setelah menunggu lama | Tinggi | Hasil real-time dengan analisis psikometrik otomatis menggantikan proses skoring manual yang berhari-hari |
| 4 | Perilaku kinerja bermasalah pada karyawan baru baru terlihat setelah masa percobaan berjalan — terlambat untuk mitigasi | Sedang | Data psikometrik (gaya kerja, motivasi via Papikostik) berfungsi sebagai sinyal antisipatif sebelum onboarding penuh |
| 5 | Minim visibilitas terhadap denyut kepuasan/keterlibatan karyawan aktif — keluhan/aspirasi karyawan tidak tersalurkan secara terstruktur | Sedang | Employee Satisfaction Survey dengan data anonim dan dashboard NPS/keterlibatan/pemberdayaan memberi saluran terukur |
| 6 | Keraguan terhadap keabsahan/validitas hasil tes psikologi yang dilakukan online dibanding tes tatap muka dengan psikolog | Tinggi | Perlu dijawab dengan bukti standar psikometrik, statistik validitas, dan transparansi metodologi (lihat Objection #1) |
| 7 | Sulit memantau kompetensi dan kehadiran/kinerja karyawan secara terintegrasi dalam satu laporan untuk evaluasi berkala | Rendah–Sedang | Competency Assessment Survey menggabungkan penilaian kompetensi dengan rekap kehadiran (masuk, sakit, izin, alpha, telat) |

Catatan: pain point #1–4 dan #7 diverifikasi langsung dari materi asli JobFit (intake); pain point #5 dan #6 ditambahkan berdasarkan inferensi kebutuhan pasar dan hasil riset validitas.

---

## 3. Jobs-to-be-Done

1. **Ketika** perusahaan membuka lowongan dengan jumlah pelamar besar dalam waktu terbatas, **saya ingin** menyaring kandidat berdasarkan kepribadian, motivasi kerja, dan kemampuan kognitif secara cepat dan objektif, **agar** saya bisa mempersempit daftar kandidat ke yang paling sesuai tanpa harus mewawancarai semua orang satu per satu.

2. **Ketika** saya harus mempresentasikan rekomendasi kandidat final ke manajemen atau user department, **saya ingin** memiliki laporan visual yang siap pakai dan mudah dipahami non-psikolog, **agar** keputusan hire didukung data yang kredibel dan dapat dipertanggungjawabkan, bukan sekadar intuisi.

3. **Ketika** ada karyawan baru yang menunjukkan tanda-tanda ketidakcocokan selama masa percobaan, **saya ingin** menengok kembali profil psikometrik awal (gaya kerja, motivasi) sebagai data pembanding, **agar** saya bisa mengambil keputusan pembinaan atau evaluasi lebih cepat dan berbasis bukti, bukan asumsi.

4. **Ketika** manajemen meminta laporan rutin soal kepuasan dan keterlibatan karyawan lintas divisi, **saya ingin** menjalankan survei anonim yang mudah diisi karyawan lewat smartphone dan otomatis terangkum dalam dashboard, **agar** saya bisa menyajikan data engagement yang akurat tanpa proses rekap manual yang panjang.

5. **Ketika** perusahaan saya masih mengandalkan tes psikologi kertas dengan jasa psikolog eksternal yang mahal dan lambat, **saya ingin** beralih ke platform tes online yang tetap kredibel secara ilmiah, **agar** saya menghemat waktu dan biaya tanpa mengorbankan kualitas asesmen.

---

## 4. Objection & Hambatan Pembelian

1. **Objection**: "Tes psikologi online tidak akan seakurat/sevalid tes tatap muka dengan psikolog profesional — bagaimana kita tahu kandidat tidak curang atau hasilnya bisa dipercaya?"
   **Counter-messaging**: Tegaskan bahwa instrumen JobFit (DISC, Papikostik, IQ) mengikuti standar psikometrik baku yang sudah teruji reliabilitas dan validitasnya secara internasional — bukan kuis buatan sendiri. Tambahkan poin bahwa riset psikometrika modern menunjukkan validitas prediktif tes psikologi terhadap kinerja kerja bisa mencapai korelasi 0,51 (lebih tinggi dari wawancara tradisional tanpa struktur). Tampilkan angka sosial proof JobFit sendiri (500++ psikotes, 90% kepuasan pengguna, 40+ klien korporat lintas industri termasuk institusi pemerintahan dan pendidikan) sebagai bukti penerapan nyata, bukan klaim kosong.

2. **Objection**: "Data psikometrik karyawan itu sensitif — apakah aman dan sesuai UU Pelindungan Data Pribadi (UU PDP) kalau disimpan di platform pihak ketiga?"
   **Counter-messaging**: Sediakan halaman/section kebijakan privasi yang menjelaskan bagaimana data kandidat/karyawan disimpan, siapa yang bisa mengakses, dan berapa lama retensinya. Tegaskan bahwa hasil Employee Satisfaction Survey bersifat anonim (tidak mencatat log identitas responden) — fitur ini langsung menjawab kekhawatiran privasi karyawan. Cantumkan komitmen kepatuhan terhadap UU PDP secara eksplisit di footer/FAQ agar tim legal/compliance HRD merasa aman.

3. **Objection**: "Kami sudah punya proses rekrutmen manual/vendor psikolog langganan — kenapa harus beralih dan belajar sistem baru?"
   **Counter-messaging**: Bandingkan langsung biaya dan waktu: tes manual di atas kertas butuh waktu skoring berhari-hari dan jasa psikolog per sesi mahal, sementara paket JobFit mulai dari kuota kecil (Rp 500.000 untuk 100 kuota) dengan hasil real-time. Tawarkan Special Offer (Free 100 Kuota Psikotest) dan Free Unlimited Support 1x24 jam sebagai risk-reducer untuk mencoba tanpa komitmen besar di awal.

4. **Objection**: "Tim HR kami tidak punya waktu/SDM untuk belajar sistem digital baru yang rumit."
   **Counter-messaging**: Tonjolkan fitur Input Bulk Koresponden via Excel, share tes otomatis via Email/WhatsApp tanpa kandidat perlu login manual, serta Initial Professional Services yang mencakup kick-off meeting, user training, dan buku panduan langkah demi langkah gratis — jadi proses onboarding tim HR didampingi penuh, bukan self-service tanpa bantuan.

5. **Objection**: "Bagaimana kami tahu hasil tes ini benar-benar dipakai dan dipercaya oleh perusahaan lain yang sejenis dengan kami (sektor pendidikan/pemerintahan/manufaktur)?"
   **Counter-messaging**: Tampilkan trust wall logo klien lintas industri (pendidikan, kesehatan, manufaktur, properti, hospitality, pemerintahan, hingga UMKM) yang sudah terverifikasi dalam materi JobFit — termasuk nama-nama seperti Wuling Motors, PT Suparma Tbk, Harris Hotels, Kementerian Kesehatan RI, dan berbagai sekolah/instansi daerah, agar calon klien dari sektor sejenis merasa relate dan yakin.

---

## 5. FAQ Pra-Pembelian

1. **Q: Apakah hasil psikotes online JobFit sama akuratnya dengan tes psikologi tatap muka oleh psikolog?**
   A: Instrumen JobFit (DISC, Papikostik, IQ) menggunakan standar psikometrik yang telah teruji validitas dan reliabilitasnya, dengan analisis otomatis yang konsisten — mengurangi bias subjektif yang bisa muncul pada penilaian manual.
   Rekomendasi penempatan: Section "Tentang Metodologi Tes" atau FAQ di halaman produk Psikotes Online.

2. **Q: Apakah data pribadi dan hasil tes kandidat/karyawan aman dan sesuai regulasi perlindungan data?**
   A: Data dikelola dengan kebijakan privasi yang jelas; untuk Employee Satisfaction Survey, data responden bersifat anonim tanpa log identitas, sejalan dengan semangat UU Pelindungan Data Pribadi.
   Rekomendasi penempatan: Footer (link Kebijakan Privasi) dan section FAQ halaman Employee Satisfaction Survey.

3. **Q: Berapa lama waktu yang dibutuhkan untuk mendapatkan hasil tes setelah kandidat menyelesaikan psikotes?**
   A: Hasil diproses secara real-time dengan analisis psikometrik otomatis, langsung tersedia di Dashboard Informatif begitu kandidat menyelesaikan tes — tidak perlu menunggu proses skoring manual.
   Rekomendasi penempatan: Section fitur "Hasil Tes Menyeluruh" di halaman utama/produk.

4. **Q: Bagaimana cara mengundang banyak kandidat sekaligus untuk mengikuti tes tanpa input data satu per satu?**
   A: Gunakan fitur Input Bulk Koresponden — unggah data kandidat massal via file Excel, lalu sebarkan undangan tes otomatis melalui Email atau WhatsApp dengan satu klik, tanpa kandidat perlu login manual.
   Rekomendasi penempatan: Section fitur produk Psikotes Online / halaman "Cara Kerja".

5. **Q: Berapa biaya berlangganan JobFit dan apa saja yang termasuk di paket awal?**
   A: Biaya awal (Initial Professional Services) Rp 2.000.000 mencakup kick-off meeting, setup sistem, pelatihan pengguna, dan free 200 kuota; setelah itu tersedia paket kuota fleksibel mulai Rp 500.000 untuk 100 kuota psikotes.
   Rekomendasi penempatan: Halaman Pricing dengan tabel paket lengkap.

6. **Q: Apakah JobFit bisa digunakan untuk instansi pendidikan atau pemerintahan, bukan hanya perusahaan swasta?**
   A: Ya — klien JobFit mencakup sektor swasta, pendidikan, kesehatan, manufaktur, hospitality, hingga instansi pemerintahan, menunjukkan fleksibilitas platform untuk berbagai jenis organisasi.
   Rekomendasi penempatan: Section social proof "Companies That Trust Our Work" di halaman utama.

7. **Q: Apa bedanya modul Psikotes Online, Employee Satisfaction Survey, dan Competency Assessment Survey?**
   A: Psikotes Online untuk seleksi kandidat baru (DISC, Papikostik, IQ); Employee Satisfaction Survey untuk mengukur kepuasan/keterlibatan karyawan aktif secara anonim; Competency Assessment Survey untuk menilai kompetensi sekaligus rekap kehadiran/kinerja karyawan.
   Rekomendasi penempatan: Halaman "Produk/Layanan" dengan perbandingan tiga modul.

---

## 6. User Journey

1. **Aware** — HRD menyadari ada masalah nyata: proses seleksi manual lambat, sering salah rekrut, atau tidak ada data terukur soal kepuasan karyawan. Mereka mulai mencari istilah seperti "psikotes online untuk rekrutmen" atau "tes DISC karyawan" di internet, sering lewat artikel blog HR tools (mis. Gadjian, Coding.id) atau rekomendasi rekan sejawat.

2. **Interest** — Menemukan JobFit lewat pencarian atau referensi, tertarik dengan value proposition "Right Talent for Right Job" dan klaim hasil real-time berbasis teknologi. Mulai membaca fitur-fitur utama: dashboard informatif, tiga jenis tes (DISC, Papikostik, IQ), dan modul survei tambahan.

3. **Consideration** — Membandingkan JobFit dengan alternatif (jasa psikolog konvensional, kompetitor SaaS psikotes lain). Mencari bukti kredibilitas: statistik pengguna (500++ psikotes, 90% kepuasan), daftar klien korporat, harga dibanding anggaran HR, serta menjawab keraguan soal validitas ilmiah tes online.

4. **Intent** — Mulai serius mempertimbangkan mencoba, tertarik dengan penawaran Free 100 Kuota Psikotest atau Fasilitas Premium Terbatas (pendampingan WA Group + Google Meet), menghubungi tim JobFit via WhatsApp/email untuk tanya detail paket dan proses onboarding.

5. **Purchase** — Menyetujui Initial Professional Services (kick-off meeting, setup, training), memilih paket kuota sesuai volume rekrutmen/survei, dan mulai mengoperasikan platform untuk batch kandidat/karyawan pertama.

---

## 7. Trigger Pembelian

1. **Musim rekrutmen massal / lonjakan pelamar** — perusahaan membuka banyak posisi sekaligus (misalnya awal tahun ajaran untuk institusi pendidikan, ekspansi cabang untuk ritel/hospitality, atau rekrutmen massal pabrik) sehingga proses seleksi manual berbasis wawancara dan tes kertas tidak lagi memadai untuk skala volume pelamar.

2. **Insiden salah rekrut yang berdampak nyata** — turnover tinggi di masa probation, karyawan baru yang tidak cocok dengan budaya/gaya kerja tim, atau kasus kinerja bermasalah yang baru terdeteksi setelah kontrak berjalan, mendorong HRD mencari alat asesmen preventif yang lebih akurat.

3. **Tuntutan pelaporan data engagement dari manajemen/direksi** — perusahaan diminta menyajikan metrik keterlibatan karyawan (misalnya untuk keperluan sertifikasi Great Place to Work, evaluasi tahunan, atau audit budaya kerja), memicu kebutuhan mendadak akan alat survei kepuasan karyawan yang terstruktur dan dashboard siap pakai.

4. **Migrasi dari jasa psikolog eksternal yang mahal/lambat** — kontrak dengan vendor psikolog konvensional berakhir atau dirasa tidak lagi efisien dari sisi biaya-per-kandidat dan waktu tunggu hasil, mendorong pencarian solusi digital yang lebih cepat dan terjangkau untuk volume tes yang sama.

---

## Sumber Riset Web

- [Tes Psikotes Online: Lebih dari Sekadar Tools Rekrutmen — Coding.id](https://coding.id/blog/tes-psikotes/)
- [Alat Tes Psikologi untuk Rekrutmen: Panduan Lengkap bagi HR — Taldio](https://taldio.com/blog/alat-tes-psikologi-untuk-rekrutmen/)
- [Apa Itu Tes Kepribadian DISC? — Binar](https://www.binar.co.id/blog/tes-kepribadian-disc)
- [5 Alat Tes Psikologi untuk Rekrutmen Karyawan — Gadjian](https://www.gadjian.com/blog/2023/07/05/alat-tes-psikologi-untuk-rekrutmen/)
- [Strategies and challenges in Indonesia's HR landscape](https://journal.privietlab.org/index.php/JEBL/article/download/280/170/648)
- [Employee Survey — Great Place to Work Indonesia](https://greatplacetowork.co.id/employee-survey/)
- [UU PDP dan Pengelolaan Data Karyawan — GreatDay HR](https://greatdayhr.com/id-id/blog/uu-pdp-dan-pengelolaan-data-karyawan/)
- [UU PDP Indonesia: Apa yang Perlu Diketahui oleh Perusahaan — GreatDay HR](https://greatdayhr.com/id-id/blog/yang-perlu-diketahui-perusahaan-tentang-uu-pdp/)
- [Poin-poin Penting Bagi Tim HR dalam Melaksanakan UU PDP — Hukumonline](https://www.hukumonline.com/berita/a/poin-poin-penting-bagi-tim-hr-dalam-melaksanakan-isi-uu-pdp-lt65587caf9a370/)
