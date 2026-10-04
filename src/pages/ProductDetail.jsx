import { useState } from 'react'
import logoBlack from '../assets/logo-jelajah-hitam.webp'
import Icon from '../components/Icon'
import { umkmProducts } from '../data'

function ProductDetail({ productId, user, onHome, onUMKM, onPrivacy, onTerms, onLogin }) {
  const product = umkmProducts.find((item) => item.id === productId) || umkmProducts[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="site-shell page-enter product-page">
      <header className="topbar">
        <button className="brand-img" onClick={onHome}><img src={logoBlack} alt="Jelajah Bojonegoro" /></button>
        <nav className="nav-links" aria-label="Navigasi utama">
          <button onClick={onHome}>Beranda</button><button onClick={onHome}>Eksplor</button><button onClick={onHome}>Perencanaan</button><button onClick={onHome}>Transportasi</button><button onClick={onHome}>Akomodasi</button><button className="active" onClick={onUMKM}>UMKM</button>
        </nav>
        <div className="header-actions"><button className="language"><span className="selected">ID</span><span>EN</span></button>{user ? <> <button className="header-icon"><Icon name="heart" size={18} /></button><button className="header-icon"><Icon name="bell" size={18} /></button><div className="profile-trigger"><span>{user.name || 'Budi'}</span><span className="avatar">{(user.name || 'B')[0].toUpperCase()}</span></div></> : <button className="login" onClick={onLogin}>Masuk</button>}</div>
      </header>

      <main>
        <section className="product-breadcrumb">
          <button onClick={onHome}>Beranda</button><span>›</span><button onClick={onUMKM}>UMKM</button><span>›</span><strong>{product.name}</strong>
        </section>

        <section className="product-main">
          <div className="product-gallery">
            <div className="product-main-image"><img src={product.images[selectedImage]} alt={product.name} /></div>
            <div className="product-thumbs">
              {product.images.map((image, index) => (
                <button key={image} className={selectedImage === index ? 'active' : ''} onClick={() => setSelectedImage(index)}><img src={image} alt="" /></button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <span className="product-tag">{product.tag}</span>
            <h1>{product.name}</h1>
            <div className="product-rating"><span>★</span> {product.rating} <small>({product.reviews} Ulasan)</small></div>
            <div className="product-price">{product.price}</div>

            <div className="product-facts">
              <div><span>▣</span><b>{product.tag}</b></div>
              <div><span>⌖</span><span>Bojonegoro, Jawa Timur</span></div>
              <div><span>✓</span><span>Tersedia (Stok: {product.stock})</span></div>
            </div>

            <div className="quantity-row">
              <span>Kuantitas</span>
              <div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><strong>{quantity}</strong><button onClick={() => setQuantity(quantity + 1)}>+</button></div>
              <strong>{product.price}</strong>
            </div>

            <div className="product-actions"><button className="buy-button">Beli Sekarang</button><button className="cart-button"><Icon name="heart" size={18} /></button></div>
          </div>
        </section>

        <section className="product-description">
          <h2>Tentang Produk</h2>
          <p>{product.description}</p>
          <p>{product.detail}</p>
          <div className="product-specs">
            {product.specs.map((spec) => <p key={spec}>{spec}</p>)}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><div className="brand-img static"><img src={logoBlack} alt="Jelajah Bojonegoro" /></div><p>Teman perjalanan digital yang membantu Anda merencanakan, menjelajahi, dan mendukung komunitas lokal di Bojonegoro.</p></div>
          <div className="footer-col"><h4>NAVIGATION</h4><button onClick={onHome}>Home</button><button onClick={onHome}>Explore</button><button onClick={onHome}>Planner</button><button onClick={onHome}>Transportasi</button><button onClick={onHome}>Akomodasi</button><button onClick={onUMKM}>UMKM</button></div>
          <div className="footer-col"><h4>LEGAL</h4><button onClick={onPrivacy}>Privacy Policy</button><button onClick={onTerms}>Terms of Service</button></div>
          <div className="footer-col services"><h4>SERVICES</h4><button>Contact Us</button><div className="socials"><Icon name="heart" /><span>f</span><Icon name="bell" /><span>♪</span><span>𝕏</span></div></div>
        </div>
        <div className="footer-map"><span>• • • • • • • • • • • • • • • • • • • • •</span><span> • • • • • • • • • • • • • • • • • • • •</span></div>
        <div className="footer-bottom">© 2026 Jelajah Bojonegoro. Crafted for Tropical Modernism.</div>
      </footer>
    </div>
  )
}

export default ProductDetail
