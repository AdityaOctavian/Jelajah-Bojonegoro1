import logoBlack from '../assets/logo-jelajah-hitam.webp'
import Icon from '../components/Icon'

const sections = [
  ['01', 'Penerimaan Ketentuan', 'Dengan mengakses dan menggunakan platform Jelajah Bojonegoro, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui seluruh atau sebagian dari ketentuan ini, Anda tidak diperkenankan menggunakan layanan kami.'],
  ['02', 'Penggunaan Layanan', 'Layanan Jelajah Bojonegoro ditujukan untuk memfasilitasi penemuan destinasi wisata, perencanaan perjalanan, eksplorasi produk UMKM lokal, penggunaan asisten AI terkait pariwisata, dan layanan pemesanan terkait. Penggunaan layanan harus mematuhi hukum yang berlaku dan tidak merugikan pihak lain.'],
  ['03', 'Akun Pengguna', 'Pengguna bertanggung jawab penuh atas keamanan kredensial akun dan akurasi informasi yang diberikan. Segala aktivitas yang terjadi di bawah akun Anda adalah tanggung jawab Anda. Segera hubungi kami jika mencurigai adanya akses tidak sah ke akun Anda.'],
  ['04', 'Informasi Destinasi & UMKM', 'Informasi mengenai destinasi wisata, jadwal operasional, harga tiket, dan produk UMKM disediakan “sebagaimana adanya”. Jelajah Bojonegoro berusaha memberikan informasi terkini, namun jadwal dan harga dapat berubah sewaktu-waktu oleh pihak pengelola tanpa pemberitahuan sebelumnya.'],
  ['05', 'Booking & Pembayaran', 'Ketentuan transaksi, metode pembayaran yang diterima, dan kebijakan pembatalan tunduk pada aturan spesifik yang ditampilkan pada saat proses pemesanan (booking). Pengguna diwajibkan menyelesaikan pembayaran sesuai batas waktu yang ditentukan untuk mengamankan reservasi.'],
  ['06', 'Konten Pengguna', 'Ulasan, foto, atau informasi yang diunggah oleh pengguna menjadi tanggung jawab pengunggah. Jelajah Bojonegoro berhak menggunakan, memodifikasi, atau menghapus konten pengguna yang melanggar pedoman komunitas atau ketentuan hukum.'],
  ['07', 'Perilaku yang Dilarang', 'Pengguna dilarang melakukan penipuan, penyalahgunaan platform, penggunaan data secara tidak sah (scraping/mining tanpa izin), mendistribusikan malware, atau tindakan lain yang mengganggu operasional sistem dan kenyamanan pengguna lain.'],
  ['08', 'Perubahan Layanan', 'Kami berhak untuk memperbarui, mengubah, menangguhkan, atau menghentikan fitur layanan platform kapan saja demi peningkatan kualitas atau alasan teknis dan bisnis lainnya tanpa pemberitahuan prior.'],
  ['09', 'Pembatasan Tanggung Jawab', 'Jelajah Bojonegoro tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari penggunaan platform ini, termasuk namun tidak terbatas pada kerugian akibat ketergantungan pada informasi pihak ketiga yang disediakan melalui platform.'],
]

function TermsOfService({ onBack, onHome, onUMKM, onPrivacy, onTerms }) {
  return (
    <div className="site-shell page-enter legal-page terms-page">
      <header className="legal-header">
        <button onClick={onBack} aria-label="Kembali ke halaman sebelumnya">
          <Icon name="arrowLeft" size={18} /> Kembali
        </button>
      </header>

      <main>
        <article className="legal-content terms-content">
          <div className="legal-breadcrumb">
            <button onClick={onHome}>Home</button>
            <span>›</span>
            <strong>Terms of Service</strong>
          </div>

          <h1>Terms of Service</h1>
          <p className="legal-intro">Ketentuan penggunaan layanan dan platform Jelajah Bojonegoro. Harap baca dengan saksama sebelum menggunakan layanan kami.</p>

          {sections.map(([number, title, text]) => (
            <section className="legal-section terms-section" key={number}>
              <div className="terms-heading">
                <span className="terms-number">{number}</span>
                <h2>{title}</h2>
              </div>
              <p>{text}</p>
            </section>
          ))}
        </article>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-img static"><img src={logoBlack} alt="Jelajah Bojonegoro" /></div>
            <p>Teman perjalanan digital yang membantu Anda merencanakan, menjelajahi, dan mendukung komunitas lokal di Bojonegoro.</p>
          </div>

          <div className="footer-col">
            <h4>NAVIGATION</h4>
            <button onClick={onHome}>Home</button>
            <button onClick={onHome}>Explore</button>
            <button onClick={onHome}>Planner</button>
            <button onClick={onHome}>Transportasi</button>
            <button onClick={onHome}>Akomodasi</button>
            <button onClick={onUMKM}>UMKM</button>
          </div>

          <div className="footer-col">
            <h4>LEGAL</h4>
            <button onClick={onPrivacy}>Privacy Policy</button>
            <button className="footer-active" onClick={onTerms}>Terms of Service</button>
          </div>

          <div className="footer-col services">
            <h4>SERVICES</h4>
            <button>Contact Us</button>
            <div className="socials"><Icon name="heart" /><span>f</span><Icon name="bell" /><span>♪</span><span>𝕏</span></div>
          </div>
        </div>

        <div className="footer-map">
          <span>• • • • • • • • • • • • • • • • • • • • •</span>
          <span> • • • • • • • • • • • • • • • • • • • •</span>
        </div>

        <div className="footer-bottom">© 2026 Jelajah Bojonegoro. Crafted for Tropical Modernism.</div>
      </footer>
    </div>
  )
}

export default TermsOfService