export interface HargaFaqItem {
  question: string;
  answer: string;
}

export const HARGA_FAQS: HargaFaqItem[] = [
  {
    question: "Apa saja yang termasuk dalam Initial Professional Services?",
    answer:
      "Biaya Rp 2.000.000 ini mencakup kick-off meeting, business review, setup master file dan instalasi sistem, parameter setup sesuai kebutuhan perusahaan, user training penggunaan platform, dan bonus 200 kuota tes psikotes gratis.",
  },
  {
    question: "Apakah kuota psikotes yang sudah dibeli bisa di-upgrade?",
    answer:
      "Bisa. Perusahaan dapat menambah kuota kapan saja dengan memilih paket 100/500/1.000 sesuai kebutuhan, atau memakai skema harga fleksibel per jenis tes untuk kebutuhan volume yang lebih spesifik.",
  },
  {
    question:
      "Apakah biaya Employee Satisfaction Survey dan Competency Assessment Survey berlangganan bulanan atau tahunan?",
    answer:
      "Kedua modul ini menggunakan skema langganan tahunan berdasarkan jumlah respon yang dibutuhkan, mulai dari 250 respon untuk Employee Satisfaction Survey dan 100 respon untuk Competency Assessment Survey.",
  },
  {
    question:
      "Apakah ada biaya tersembunyi selain yang tercantum di halaman ini?",
    answer:
      "Tidak ada. Seluruh komponen biaya JobFit — dari Initial Professional Services hingga paket kuota dan langganan tahunan — ditampilkan terbuka di halaman ini tanpa perlu menghubungi sales untuk mengetahui angka pastinya.",
  },
  {
    question: "Bagaimana keamanan data peserta tes yang saya kirimkan?",
    answer:
      "Semua data koresponden kami jamin kerahasiaannya, aplikasi ini tidak mencatat log identitas Anda.",
  },
];
