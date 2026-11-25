// Sumber tunggal data usaha dan pengaturan fitur.
export const CONFIG = {
  business: {
    name: "Andalas Perfume",
    category: "Toko Parfum",
    address: {
      plusCode: "RFJM+5VV",
      street: "Jl. Bangun Sari",
      village: "Bumi Amas",
      district: "Bengkayang",
      regency: "Bengkayang",
      province: "Kalimantan Barat",
      postalCode: "79211",
    },
    phoneDisplay: "0857-0546-3914",
    waNumber: "6285705463914",
    mapsUrl: "https://maps.app.goo.gl/Z2dhfDhwytDAc9kKA",
    hours: {
      label: "Buka setiap hari",
      open: "08:00",
      close: "21:00",
    },
    social: { instagram: null, facebook: null, tiktok: null },
    about: null, // [?] cerita toko belum disiapkan
    // [?] Foto asli belum ada: placeholder memakai ilustrasi unDraw berlabel "Contoh".
    gallery: [
      { id: "contoh-1", illustration: "seni", alt: "Contoh ilustrasi meja kerja", label: "Contoh" },
      { id: "contoh-2", illustration: "hadiah", alt: "Contoh ilustrasi perayaan", label: "Contoh" },
      { id: "contoh-3", illustration: "seni", alt: "Contoh ilustrasi meja kerja", label: "Contoh" },
      { id: "contoh-4", illustration: "hadiah", alt: "Contoh ilustrasi perayaan", label: "Contoh" },
      { id: "contoh-5", illustration: "seni", alt: "Contoh ilustrasi meja kerja", label: "Contoh" },
    ],
    testimonials: [], // [?] kutipan pelanggan belum diizinkan
  },
  features: {
    showPrices: false, // [?] harga belum ditentukan
    promo: false,
    gallery: true, // [?] aktif dengan placeholder; matikan bila foto asli belum ingin ditampilkan
    testimonials: false,
    claimOriginal: false, // [?] klaim original tidak ditampilkan
    delivery: false, // [?] antar/COD belum dikonfirmasi
  },
  wa: {
    general: "Halo Andalas Perfume, saya ingin bertanya tentang produk parfum.",
    product: "Halo Andalas Perfume, saya ingin tanya/pesan: {nama} ({ukuran}). Apakah tersedia?",
  },
};
