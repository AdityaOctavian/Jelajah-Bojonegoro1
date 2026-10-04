import kayanganApi from './assets/kayangan api1 (2).webp'
import wadukPacal from './assets/wadukpacal.webp'
import negeriAtasAngin from './assets/negri atas angin1.webp'

import batikMain from './assets/batikjonegoroan.webp'
import batik1 from './assets/batik jonegoroan1.webp'
import batik2 from './assets/batik jonegoroan2.webp'
import batik3 from './assets/batik jonegoroan3.webp'
import batik4 from './assets/batik jonegoroan4.webp'

import anyamanMain from './assets/kerajinan anyaman bojonegoro.webp'
import anyaman1 from './assets/kerajinan anyaman bojonegoro1.webp'
import anyaman2 from './assets/kerajinan anyaman bojonegoro2.webp'
import anyaman3 from './assets/kerajinan anyaman bojonegoro3.webp'
import anyaman4 from './assets/kerajinan anyaman bojonegoro4.webp'

import busanaMain from './assets/Busana Modern Lokal.webp'
import busana1 from './assets/busana modern lokal1.webp'
import busana2 from './assets/busana modern lokal2.webp'
import busana3 from './assets/busana modern lokal3.webp'
import busana4 from './assets/busana modern lokal4.webp'

import kayuMain from './assets/kayu jati karya1.webp'
import kayu1 from './assets/kayu jati karya2.webp'
import kayu2 from './assets/kayu jati karya3.webp'
import kayu3 from './assets/kayu jati karya4.webp'
import kayu4 from './assets/kayu jati karya5.webp'

import ledreMain from './assets/ledre super pisang.webp'
import ledre1 from './assets/ledre super pisang1.webp'
import ledre2 from './assets/ledre super pisang2.webp'
import ledre3 from './assets/ledre super pisang3.webp'
import ledre4 from './assets/ledre super pisang4.webp'

import serabiMain from './assets/serabi.webp'
import serabi1 from './assets/serabi1.webp'
import serabi2 from './assets/serabi2.webp'
import serabi3 from './assets/serabi3.webp'
import serabi4 from './assets/serabi4.webp'

export const destinations = [
  {
    name: 'Kayangan Api',
    image: kayanganApi,
    type: 'WISATA ALAM',
    distance: '15 km',
    price: 'Rp 10.000',
    size: 'large',
  },
  {
    name: 'Waduk Pacal',
    image: wadukPacal,
    type: 'WATER & NATURE',
    distance: '35 km',
    rating: '4.6',
    size: 'small',
  },
  {
    name: 'Negeri di Atas Angin',
    image: negeriAtasAngin,
    type: 'VIEWPOINT',
    distance: '50 km',
    rating: '4.9',
    size: 'small',
  },
]

export const umkmProducts = [
  {
    id: 'batik-jonegoroan',
    name: 'Batik Jonegoroan',
    category: 'Batik & Fashion',
    filter: 'Batik',
    price: 'Rp250.000',
    rating: '4.9',
    location: 'Pusat Kota',
    products: '45 Produk',
    badge: 'Populer',
    mainImage: batikMain,
    images: [batikMain, batik1, batik2, batik3, batik4],
    shortDescription: 'batik khas Bojonegoro dengan motif lokal yang unik dan khas Jonegoroan.',
    tag: 'Batik Lokal',
    maker: 'Batik Tulis Jati',
    stock: '20+',
    reviews: '50+',
    description: 'Batik Jonegoroan adalah manifestasi seni yang mencerminkan kekayaan alam dan budaya Bojonegoro. Motif utama yang ditonjolkan sering kali terinspirasi dari daun jati (Godhong Jati), merepresentasikan hutan jati yang melimpah di wilayah ini, serta elemen alam lainnya.',
    detail: 'Setiap helai kain dikerjakan secara handmade melalui proses batik tulis yang memakan waktu berminggu-minggu, menghasilkan detail yang tidak mungkin direplikasi oleh mesin. Penggunaan pewarna yang cermat memastikan warna tahan lama dan tidak mudah pudar.',
    specs: ['Material: Katun Primisima (halus, menyerap keringat, nyaman dipakai)', 'Ukuran: 2.10m x 1.15m (standar kain potong)', 'Teknik: Batik Tulis (Handmade)', 'Perawatan: Cuci dengan tangan menggunakan lerak'],
  },
  {
    id: 'kayu-jati-karya',
    name: 'Kayu Jati Karya',
    category: 'Kerajinan Lokal',
    filter: 'Kerajinan',
    price: 'Rp150.000',
    rating: '4.8',
    location: 'Margomulyo',
    products: '120 Produk',
    badge: 'Pilihan',
    mainImage: kayuMain,
    images: [kayuMain, kayu1, kayu2, kayu3, kayu4],
    shortDescription: 'Kerajinan kayu jati autentik dengan sentuhan desain modern minimalis untuk kebutuhan rumah.',
    tag: 'Kerajinan Kayu Jati',
    maker: 'Pengrajin Kayu Jati',
    stock: '10+',
    reviews: '25+',
    description: 'Kayu Jati Karya merupakan kerajinan khas Bojonegoro yang menggunakan kayu jati pilihan dengan desain yang unik dan bernilai seni. Produk dibuat dengan mengutamakan kualitas serta karakter alami kayu.',
    detail: 'Dikerjakan oleh pengrajin lokal dengan proses yang teliti, menghasilkan produk yang kokoh, tahan lama, dan cocok digunakan sebagai dekorasi maupun kebutuhan rumah.',
    specs: ['Material: Kayu Jati Pilihan', 'Ukuran: Bervariasi sesuai produk', 'Teknik: Handmade & Ukir', 'Perawatan: Bersihkan dengan kain lembut dan hindari paparan air serta sinar matahari langsung.'],
  },
  {
    id: 'ledre-super-pisang',
    name: 'Ledre Super Pisang',
    category: 'Kuliner & Oleh-oleh',
    filter: 'Oleh-oleh',
    price: 'Rp25.000',
    rating: '4.9',
    location: 'Padangan',
    products: '12 Produk',
    badge: 'Favorit',
    mainImage: ledreMain,
    images: [ledreMain, ledre1, ledre2, ledre3, ledre4],
    shortDescription: 'Oleh-oleh khas Bojonegoro, ledre pisang raja manis dan renyah. Resep turun-temurun.',
    tag: 'Cemilan Khas Bojonegoro',
    maker: 'UMKM Kuliner Lokal',
    stock: '50+',
    reviews: '40+',
    description: 'Ledre Super Pisang merupakan camilan khas Bojonegoro yang dibuat dari bahan pilihan dengan cita rasa pisang yang manis dan aroma yang khas. Teksturnya tipis, renyah, dan cocok dinikmati kapan saja.',
    detail: 'Diproduksi oleh UMKM lokal dengan proses yang higienis dan teliti untuk menjaga rasa serta kualitas ledre.',
    specs: ['Bahan: Pisang, tepung, gula, dan bahan pilihan', 'Berat: ±200 gram', 'Jenis: Camilan Tradisional', 'Penyimpanan: Simpan dalam wadah tertutup di tempat yang sejuk dan kering.'],
  },
  {
    id: 'busana-modern-lokal',
    name: 'Busana Modern Lokal',
    category: 'Batik & Fashion',
    filter: 'Fashion',
    price: 'Rp350.000',
    rating: '4.9',
    location: 'Bojonegoro',
    products: '45 Produk',
    badge: 'Populer',
    mainImage: busanaMain,
    images: [busanaMain, busana1, busana2, busana3, busana4],
    shortDescription: 'Pengrajin batik tulis asli Bojonegoro dengan motif khas daun jati dan warna modern.',
    tag: 'Batik Lokal',
    maker: 'Busana Modern Shop',
    stock: '10+',
    reviews: '24',
    description: 'Busana Modern Lokal menghadirkan karya fashion yang menggabungkan karakter batik Bojonegoro dengan siluet modern. Setiap karya dibuat dengan perhatian pada detail, motif, dan kenyamanan.',
    detail: 'Produk dirancang oleh pengrajin lokal untuk menghadirkan busana yang tetap membawa identitas daerah namun mudah digunakan dalam berbagai kesempatan.',
    specs: ['Material: Kain pilihan', 'Ukuran: S–XXL', 'Teknik: Handmade', 'Perawatan: Ikuti petunjuk perawatan pada label produk.'],
  },
  {
    id: 'kerajinan-anyaman-bojonegoro',
    name: 'Kerajinan Anyaman Bojonegoro',
    category: 'Kerajinan Lokal',
    filter: 'Kerajinan',
    price: 'Rp75.000',
    rating: '4.8',
    location: 'Margomulyo',
    products: '120 Produk',
    badge: 'Pilihan',
    mainImage: anyamanMain,
    images: [anyamanMain, anyaman1, anyaman2, anyaman3, anyaman4],
    shortDescription: 'kerajinan anyaman untuk dekorasi dan kebutuhan rumah.',
    tag: 'Anyaman Tradisional',
    maker: 'Pengrajin Anyaman Lokal',
    stock: '15+',
    reviews: '25+',
    description: 'Kerajinan Anyaman Bojonegoro merupakan produk kerajinan lokal yang dibuat dengan teknik anyaman tradisional. Memiliki desain unik dan alami, cocok digunakan sebagai dekorasi maupun kebutuhan rumah tangga.',
    detail: 'Dibuat oleh pengrajin lokal dengan proses yang teliti sehingga menghasilkan produk yang kuat, rapi, dan memiliki nilai seni khas Bojonegoro.',
    specs: ['Material: Bambu dan bahan alami pilihan', 'Ukuran: Bervariasi sesuai produk', 'Teknik: Anyaman Handmade', 'Perawatan: Bersihkan dengan kain kering dan simpan di tempat yang kering.'],
  },
  {
    id: 'serabi',
    name: 'Serabi',
    category: 'Kuliner & Oleh-oleh',
    filter: 'Oleh-oleh',
    price: 'Rp15.000',
    rating: '4.9',
    location: 'Padangan',
    products: '12 Produk',
    badge: 'Favorit',
    mainImage: serabiMain,
    images: [serabiMain, serabi1, serabi2, serabi3, serabi4],
    shortDescription: 'Serabi khas Bojonegoro dengan rasa manis dan gurih serta tekstur lembut.',
    tag: 'Kuliner Tradisional',
    maker: 'UMKM Kuliner Lokal',
    stock: '50+',
    reviews: '50+',
    description: 'Serabi Jonegoroan merupakan kuliner tradisional khas Bojonegoro dengan cita rasa gurih dan manis serta tekstur yang lembut. Dibuat menggunakan bahan pilihan dengan resep tradisional yang tetap mempertahankan cita rasa khas daerah.',
    detail: 'Diolah secara langsung oleh pelaku UMKM lokal sehingga menghasilkan serabi yang segar dan nikmat untuk dinikmati bersama keluarga.',
    specs: ['Bahan: Tepung beras, santan, gula, dan bahan pilihan', 'Porsi: ±5 pcs', 'Jenis: Kuliner Tradisional', 'Penyimpanan: Simpan dalam wadah tertutup dan konsumsi dalam keadaan segar.'],
  },
]
