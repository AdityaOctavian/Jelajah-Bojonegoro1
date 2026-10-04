import logoBlack from '../assets/logo-jelajah-hitam.webp'
import Icon from '../components/Icon'

const sections = [
  ['01. Informasi yang Kami Kumpulkan', <>Kami mengumpulkan informasi untuk memberikan layanan yang lebih baik kepada semua pengguna kami. Informasi yang kami kumpulkan meliputi:</>, ['Nama dan informasi kontak dasar.', 'Alamat email untuk komunikasi dan konfirmasi pemesanan.', 'Preferensi perjalanan untuk memberikan rekomendasi yang dipersonalisasi.', 'Informasi terkait pemesanan dan transaksi di dalam platform.']],
  ['02. Bagaimana Data Digunakan', <>Informasi yang kami kumpulkan digunakan secara eksklusif untuk meningkatkan pengalaman Anda menjelajah Bojonegoro. Tujuan utamanya meliputi:</>, ['Menyediakan, memelihara, dan meningkatkan layanan Kami.', 'Mengirimkan pemberitahuan penting, seperti konfirmasi pemesanan dan pembaruan layanan.', 'Menyesuaikan rekomendasi destinasi dan UMKM berdasarkan riwayat aktivitas Anda.', 'Menganalisis penggunaan platform untuk memahami bagaimana kami dapat meningkatkan fungsionalitas dan desain antarmuka.']],
  ['03. Cookies dan Teknologi Serupa', <>Kami menggunakan cookies dan teknologi pelacakan serupa untuk memantau aktivitas di platform kami dan menyimpan informasi tertentu. Cookies ini membantu kami mengingat preferensi Anda dan memberikan pengalaman yang lebih lancar saat Anda kembali.</>, []],
  ['04. Keamanan Data', <>Keamanan data Anda sangat penting bagi kami. Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi informasi pribadi Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Kami berkomitmen pada penanganan data yang bertanggung jawab.</>, []],
  ['05. Berbagi Informasi', <>Kami tidak menjual informasi pribadi Anda. Kami hanya dapat membagikan informasi dengan mitra terpercaya (seperti penyedia tur lokal atau UMKM) hanya ketika diperlukan untuk memfasilitasi layanan atau pemesanan yang Anda minta melalui platform kami.</>, []],
  ['06. Hak Pengguna', <>Anda memiliki kendali atas informasi pribadi Anda. Anda berhak untuk mengakses, memperbarui, atau meminta penghapusan informasi pribadi Anda. Jika Anda ingin menggunakan hak ini, silakan hubungi tim dukungan kami.</>, []],
  ['07. Perubahan Kebijakan', <>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diposting di halaman ini dengan tanggal revisi yang diperbarui. Kami mendorong Anda untuk meninjau kebijakan ini secara berkala agar tetap mendapatkan informasi terbaru.</>, []],
]

function PrivacyPolicy({ onBack, onHome, onUMKM, onTerms }) {
  return (
    <div className="site-shell page-enter legal-page">
      <header className="legal-header"><button onClick={onBack}><Icon name="arrowLeft" size={18} /> Kembali</button></header>
      <main>
        <article className="legal-content">
          <div className="legal-breadcrumb"><button onClick={onHome}>Home</button><span>›</span><strong>Privacy Policy</strong></div>
          <h1>Privacy Policy</h1>
          <p className="legal-intro">Pelajari bagaimana Jelajah Bojonegoro mengumpulkan, menggunakan, dan melindungi informasi pengguna.</p>
          {sections.map(([title, text, bullets]) => (
            <section className="legal-section" key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
              {bullets.length > 0 && <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            </section>
          ))}
        </article>
      </main>
      <footer>
        <div className="footer-main">
          <div className="footer-brand"><div className="brand-img static"><img src={logoBlack} alt="Jelajah Bojonegoro" /></div><p>Teman perjalanan digital yang membantu Anda merencanakan, menjelajahi, dan mendukung komunitas lokal di Bojonegoro.</p></div>
          <div className="footer-col"><h4>NAVIGATION</h4><button onClick={onHome}>Home</button><button onClick={onHome}>Explore</button><button onClick={onHome}>Planner</button><button onClick={onHome}>Transportasi</button><button onClick={onHome}>Akomodasi</button><button onClick={onUMKM}>UMKM</button></div>
          <div className="footer-col"><h4>LEGAL</h4><button className="footer-active">Privacy Policy</button><button onClick={onTerms}>Terms of Service</button></div>
          <div className="footer-col services"><h4>SERVICES</h4><button>Contact Us</button><div className="socials"><Icon name="heart" /><span>f</span><Icon name="bell" /><span>♪</span><span>𝕏</span></div></div>
        </div>
        <div className="footer-map"><span>• • • • • • • • • • • • • • • • • • • • •</span><span> • • • • • • • • • • • • • • • • • • • •</span></div>
        <div className="footer-bottom">© 2026 Jelajah Bojonegoro. Crafted for Tropical Modernism.</div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
