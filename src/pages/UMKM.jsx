import { useMemo, useState } from 'react'
import logoBlack from '../assets/logo-jelajah-hitam.webp'
import Icon from '../components/Icon'
import { umkmProducts } from '../data'

const filters = ['Semua', 'Kuliner', 'Kerajinan', 'Batik', 'Oleh-oleh', 'Fashion']

function UMKM({ user, onHome, onProduct, onPrivacy, onTerms, onLogin }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Semua')

  const products = useMemo(() => {
    const keyword = query.trim().toLowerCase()
    return umkmProducts.filter((item) => {
      const matchesFilter = filter === 'Semua' || item.filter === filter
      const matchesSearch = !keyword || `${item.name} ${item.category}`.toLowerCase().includes(keyword)
      return matchesFilter && matchesSearch
    })
  }, [query, filter])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="site-shell page-enter umkm-page">
      <header className="topbar">
        <button className="brand-img" onClick={onHome} aria-label="Kembali ke beranda">
          <img src={logoBlack} alt="Jelajah Bojonegoro" />
        </button>

        <nav className="nav-links" aria-label="Navigasi utama">
          <button onClick={onHome}>Beranda</button>
          <button onClick={onHome}>Eksplor</button>
          <button onClick={onHome}>Perencanaan</button>
          <button onClick={onHome}>Transportasi</button>
          <button onClick={onHome}>Akomodasi</button>
          <button className="active" onClick={scrollTop}>UMKM</button>
        </nav>

        <div className="header-actions">
          <button className="language"><span className="selected">ID</span><span>EN</span></button>
          {user ? (
            <>
              <button className="header-icon"><Icon name="heart" size={18} /></button>
              <button className="header-icon"><Icon name="bell" size={18} /></button>
              <div className="profile-menu">
                <button className="profile-trigger"><span>{user.name || 'Budi'}</span><span className="avatar">{(user.name || 'B')[0].toUpperCase()}</span></button>
              </div>
            </>
          ) : (
            <button className="login" onClick={onLogin}>Masuk</button>
          )}
        </div>
      </header>

      <main>
        <section className="umkm-hero">
          <h1>Direktori UMKM Bojonegoro</h1>
          <p>Temukan UMKM lokal, kenali produknya, dan dukung pertumbuhan bisnis masyarakat<br />Bojonegoro.</p>

          <label className="umkm-search">
            <Icon name="search" size={18} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nama UMKM atau produk..." />
          </label>

          <div className="umkm-filters">
            {filters.map((item) => (
              <button key={item} className={filter === item ? 'selected' : ''} onClick={() => setFilter(item)}>{item}</button>
            ))}
          </div>
        </section>

        <section className="umkm-list-section">
          <h2>UMKM Pilihan</h2>

          <div className="umkm-grid">
            {products.map((item) => (
              <article className="umkm-card" key={item.id}>
                <div className="umkm-card-image">
                  <img src={item.mainImage} alt={item.name} />
                  <span className="umkm-badge"><Icon name="spark" size={11} /> {item.badge}</span>
                </div>

                <div className="umkm-card-body">
                  <div className="umkm-card-title-row">
                    <h3>{item.name}</h3>
                    <span className="rating"><span>★</span> {item.rating}</span>
                  </div>
                  <small>{item.category}</small>
                  <p>{item.shortDescription}</p>
                  <div className="umkm-meta"><span>⌖ {item.location}</span><span>▤ {item.products}</span></div>

                  <div className="umkm-card-actions">
                    <button onClick={() => onProduct(item.id)}>Lihat Produk</button>
                    <button className="save" aria-label={`Simpan ${item.name}`}><Icon name="heart" size={17} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {!products.length && <div className="umkm-empty">Produk UMKM yang kamu cari belum ditemukan.</div>}
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-img static"><img src={logoBlack} alt="Jelajah Bojonegoro" /></div>
            <p>Teman perjalanan digital yang membantu Anda merencanakan, menjelajahi, dan mendukung komunitas lokal di Bojonegoro.</p>
          </div>
          <div className="footer-col">
            <h4>NAVIGATION</h4><button onClick={onHome}>Home</button><button onClick={onHome}>Explore</button><button onClick={onHome}>Planner</button><button onClick={onHome}>Transportasi</button><button onClick={onHome}>Akomodasi</button><button className="footer-active">UMKM</button>
          </div>
          <div className="footer-col">
            <h4>LEGAL</h4><button onClick={onPrivacy}>Privacy Policy</button><button onClick={onTerms}>Terms of Service</button>
          </div>
          <div className="footer-col services"><h4>SERVICES</h4><button>Contact Us</button><div className="socials"><Icon name="heart" /><span>f</span><Icon name="bell" /><span>♪</span><span>𝕏</span></div></div>
        </div>
        <div className="footer-map"><span>• • • • • • • • • • • • • • • • • • • • •</span><span> • • • • • • • • • • • • • • • • • • • •</span></div>
        <div className="footer-bottom">© 2026 Jelajah Bojonegoro. Crafted for Tropical Modernism.</div>
      </footer>
    </div>
  )
}

export default UMKM
