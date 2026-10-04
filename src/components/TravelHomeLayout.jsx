import { useMemo, useState } from 'react'
import heroLandscape from '../assets/negri atas angin2.webp'
import heroCulture from '../assets/busana modern lokal4.webp'
import batikJonegoroan from '../assets/batik jonegoroan.webp'
import logoBlack from '../assets/logo-jelajah-hitam.webp'
import Icon from './Icon'
import { destinations } from '../data'

function Feature({ icon, title, text, orange }) {
  return (
    <article className="feature-card">
      <div className={`feature-icon ${orange ? 'orange' : ''}`}>
        <Icon name={icon} size={18} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

function DestinationCard({ item, onClick }) {
  return (
    <button
      className={`destination-card ${item.size}`}
      onClick={onClick}
      style={{
        backgroundImage: `linear-gradient(180deg, transparent 25%, rgba(0,0,0,.78) 100%), url("${item.image}")`,
      }}
    >
      <div className="destination-content">
        <span className="destination-type">{item.type}</span>
        <h3>{item.name}</h3>

        {item.size === 'large' ? (
          <>
            <p>
              Fenomena geologi api abadi yang tak pernah padam. Tempat magis yang dikelilingi rimbunnya hutan jati, saksi bisu peradaban Majapahit.
            </p>
            <div className="destination-meta">
              <span>◉ {item.distance}</span>
              <span>▣ {item.price}</span>
            </div>
          </>
        ) : (
          <div className="destination-meta">
            <span>◉ {item.distance}</span>
            <span>★ {item.rating}</span>
          </div>
        )}

        <span className="card-link">
          Lihat Selengkapnya <Icon name="arrow" size={13} />
        </span>
      </div>
    </button>
  )
}

function TravelHomeLayout({ user, onLogin, onLogout, onUmkm, onPrivacy, onTerms }) {
  const [hasDestination, setHasDestination] = useState(false)
  const [destination, setDestination] = useState('Pilih Destinasi')
  const [people, setPeople] = useState('2 Dewasa')
  const [days, setDays] = useState('3 Hari')
  const [budget, setBudget] = useState('')
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const isLoggedIn = Boolean(user)
  const displayName = user?.name || ''

  const filteredDestinations = useMemo(
    () => !search.trim()
      ? destinations
      : destinations.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        ),
    [search],
  )

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const planTrip = () => {
    window.alert(
      destination === 'Pilih Destinasi'
        ? 'Pilih destinasi dulu untuk membuat rencana perjalanan.'
        : `Rencana ${destination} untuk ${people}, ${days}${budget ? ` dengan anggaran Rp ${Number(budget).toLocaleString('id-ID')}` : ''}.`,
    )
  }

  return (
    <div className="site-shell page-enter">
      <header className="topbar">
        <button className="brand-img" onClick={() => scrollTo('beranda')}>
          <img src={logoBlack} alt="Jelajah Bojonegoro" />
        </button>

        <nav className="nav-links" aria-label="Navigasi utama">
          {[
            ['Beranda', 'beranda'],
            ['Eksplor', 'eksplor'],
            ['Perencanaan', 'planner'],
            ['Transportasi', 'transportasi'],
            ['Akomodasi', 'akomodasi'],
            ['UMKM', 'umkm'],
          ].map(([label, id]) => (
            <button
              key={id}
              className={id === 'beranda' ? 'active' : ''}
              onClick={() => id === 'umkm' && onUmkm ? onUmkm() : scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="language">
            <span className="selected">ID</span>
            <span>EN</span>
          </button>

          {isLoggedIn ? (
            <div className="profile-menu">
              <button className="profile-trigger" onClick={() => setMenuOpen((value) => !value)}>
                <span>{displayName || 'Budi'}</span>
                <span className="avatar">{(displayName || 'B')[0].toUpperCase()}</span>
              </button>

              {menuOpen && (
                <div className="profile-dropdown">
                  <strong>{displayName || 'Budi'}</strong>
                  <small>{user.email}</small>
                  <button onClick={onLogout}>Keluar</button>
                </div>
              )}
            </div>
          ) : (
            <button className="login" onClick={onLogin}>Masuk</button>
          )}
        </div>
      </header>

      <main>
        <section id="beranda" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">
              {isLoggedIn ? 'PANDUAN WISATA CERDAS' : 'SMART TRAVEL GUIDE'}
            </span>
            <h1>
              {isLoggedIn ? (
                <>Halo, {displayName || 'Budi'}! Siap untuk<br />petualangan berikutnya?</>
              ) : (
                <>Teman Perjalanan<br />Digitalmu di Bojonegoro</>
              )}
            </h1>
            <p>
              Temukan keindahan tersembunyi Bojonegoro dengan rencana perjalanan berbasis AI, perencanaan anggaran yang praktis, dan pengalaman lokal yang autentik.
            </p>
            <label className="search-box">
              <Icon name="search" size={16} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ke mana kamu ingin pergi?"
              />
            </label>
          </div>

          <div className="hero-collage">
            <img className="hero-landscape" src={heroLandscape} alt="Pemandangan" />
            <img className="hero-culture" src={heroCulture} alt="Budaya Bojonegoro" />
          </div>

          <button className="ai-floating" onClick={() => scrollTo('planner')}>
            <Icon name="spark" size={16} /> AI Travel Assistant
          </button>
        </section>

        <section id="planner" className="planner-card">
          <div className="planner-mode">
            <label>
              <input type="radio" checked={hasDestination} onChange={() => setHasDestination(true)} />
              Sudah punya tujuan
            </label>
            <label>
              <input type="radio" checked={!hasDestination} onChange={() => setHasDestination(false)} />
              Belum punya tujuan
            </label>
          </div>

          <div className="planner-fields">
            <label className="field">
              <span>Destinasi / Asal</span>
              <div>
                <Icon name="map" size={15} />
                <select value={destination} onChange={(event) => setDestination(event.target.value)}>
                  <option>Pilih Destinasi</option>
                  {destinations.map((item) => <option key={item.name}>{item.name}</option>)}
                </select>
                <Icon name="chevron" size={14} />
              </div>
            </label>

            <label className="field">
              <span>Jumlah Orang</span>
              <div>
                <Icon name="users" size={15} />
                <select value={people} onChange={(event) => setPeople(event.target.value)}>
                  <option>2 Dewasa</option>
                  <option>3 Dewasa</option>
                  <option>4 Dewasa</option>
                  <option>2 Dewasa, 1 Anak</option>
                </select>
                <Icon name="chevron" size={14} />
              </div>
            </label>

            <label className="field">
              <span>Berapa Hari</span>
              <div>
                <Icon name="calendar" size={15} />
                <select value={days} onChange={(event) => setDays(event.target.value)}>
                  <option>3 Hari</option>
                  <option>2 Hari</option>
                  <option>4 Hari</option>
                  <option>5 Hari</option>
                </select>
              </div>
            </label>

            <label className="field">
              <span>Minat Wisata</span>
              <div>
                <span className="interest-icon">♢</span>
                <select defaultValue="Alam">
                  <option>Alam</option>
                  <option>Budaya</option>
                  <option>Kuliner</option>
                  <option>Belanja</option>
                </select>
                <Icon name="chevron" size={14} />
              </div>
            </label>

            <label className="field">
              <span>Anggaran (Rp)</span>
              <div>
                <Icon name="wallet" size={15} />
                <input type="number" min="0" placeholder="Contoh: 500.000" value={budget} onChange={(event) => setBudget(event.target.value)} />
              </div>
            </label>
          </div>

          <div className="planner-submit">
            <button onClick={planTrip}><Icon name="spark" size={15} /> Rencanakan & Pesan Sekarang</button>
          </div>
        </section>

        <section className="why-section">
          <div className="section-heading center">
            <h2>Mengapa Jelajah Bojonegoro?</h2>
            <p>Dirancang khusus untuk memberikan pengalaman wisata yang tak terlupakan, terstruktur,<br />dan memberdayakan lokal.</p>
          </div>
          <div className="feature-grid">
            <Feature icon="spark" title="AI Travel Assistant" text="Dapatkan rekomendasi destinasi dan itinerary cerdas yang disesuaikan dengan preferensi dan waktu Anda." />
            <Feature icon="wallet" orange title="Budget Planner" text="Rencanakan perjalanan tanpa khawatir. Sistem kami membantu mengatur estimasi biaya tiket, makan, dan transportasi." />
            <Feature icon="home" title="Dukung UMKM Lokal" text="Temukan dan dukung produk otentik serta kuliner khas Bojonegoro langsung dari pengrajin lokal." />
          </div>
        </section>

        <section id="eksplor" className="destinations-section">
          <div className="section-heading row-heading">
            <div>
              <h2>Destinasi Pilihan</h2>
              <p>Jelajahi keindahan alam dan budaya otentik Bojonegoro melalui kurasi terbaik kami.</p>
            </div>
            <button onClick={() => setSearch('')} className="outline-btn">Lihat Semua <Icon name="arrow" size={14} /></button>
          </div>

          <div className="destination-grid">
            {filteredDestinations.map((item) => (
              <DestinationCard
                key={item.name}
                item={item}
                onClick={() => {
                  setDestination(item.name)
                  scrollTo('planner')
                }}
              />
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="empty-result">Destinasi yang kamu cari belum ada di kurasi ini.</div>
          )}
        </section>

        <section id="umkm" className="culture-section">
          <div className="culture-image">
            <img src={batikJonegoroan} alt="Batik Jonegoroan" />
          </div>
          <div className="culture-copy">
            <span className="mini-label">RASA & KARYA LOKAL</span>
            <h2>Warisan Budaya dalam<br />Setiap Sentuhan</h2>
            <p>Dukung pengrajin lokal dan rasakan kehangatan budaya Bojonegoro. Dari ukiran kayu jati yang presisi hingga canting Batik Jonegoroan yang sarat makna, setiap karya bercerita tentang tradisi yang terus hidup.</p>
            <div className="authentic">
              <strong><Icon name="lock" size={15} /> Authentic Sourcing</strong>
              <span>Pembelian Anda langsung memberdayakan komunitas UMKM dan pengrajin lokal Bojonegoro.</span>
            </div>
            <button className="dark-btn" onClick={() => onUmkm?.()}>Jelajahi Karya Lokal <Icon name="arrow" size={14} /></button>
          </div>
        </section>

        <section id="transportasi" className="anchor-section">
          <h2>Transportasi</h2>
          <p>Temukan pilihan perjalanan darat dan transportasi lokal untuk menjelajahi Bojonegoro.</p>
        </section>
        <section id="akomodasi" className="anchor-section">
          <h2>Akomodasi</h2>
          <p>Pilih tempat menginap yang sesuai dengan rencana perjalananmu.</p>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-img static"><img src={logoBlack} alt="Jelajah Bojonegoro" /></div>
            <p>Teman perjalanan digital yang membantu Anda merencanakan, menjelajahi, dan mendukung komunitas lokal di Bojonegoro.</p>
          </div>

          <div className="footer-col">
            <h4>NAVIGATION</h4>
            <button onClick={() => scrollTo('beranda')}>Home</button>
            <button onClick={() => scrollTo('eksplor')}>Explore</button>
            <button onClick={() => scrollTo('planner')}>Planner</button>
            <button onClick={() => scrollTo('transportasi')}>Transportasi</button>
            <button onClick={() => scrollTo('akomodasi')}>Akomodasi</button>
            <button onClick={() => scrollTo('umkm')}>UMKM</button>
          </div>

          <div className="footer-col">
            <h4>LEGAL</h4>
            <button onClick={() => onPrivacy?.()}>Privacy Policy</button>
            <button onClick={() => onTerms?.()}>Terms of Service</button>
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

export default TravelHomeLayout
