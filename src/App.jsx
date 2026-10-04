import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import HomeLoggedIn from './pages/HomeLoggedIn'
import Login from './pages/Login'
import Register from './pages/Register'
import Verification from './pages/Verification'
import UMKM from './pages/UMKM'
import ProductDetail from './pages/ProductDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService.jsx'

function readUser() {
  try {
    return JSON.parse(localStorage.getItem('jhic-user') || 'null')
  } catch {
    return null
  }
}

function App() {
  const [page, setPage] = useState(() => (
    localStorage.getItem('jhic-auth') === 'logged-in'
      ? 'home-logged'
      : 'home'
  ))
  const [user, setUser] = useState(readUser)
  const [registeredData, setRegisteredData] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleLogin = (email) => {
    const savedUser = readUser()
    const loggedUser = savedUser || { name: 'Budi', email }

    setUser(loggedUser)
    localStorage.setItem('jhic-auth', 'logged-in')
    localStorage.setItem('jhic-user', JSON.stringify(loggedUser))
    setPage('home-logged')
  }

  const handleRegister = (data) => {
    setRegisteredData(data)
    setPage('verification')
  }

  const handleVerified = () => {
    const data = registeredData || {
      name: 'Budi',
      email: 'budi@example.com',
    }

    setUser(data)
    localStorage.setItem('jhic-auth', 'logged-in')
    localStorage.setItem('jhic-user', JSON.stringify(data))
    setPage('home-logged')
  }

  const handleLogout = () => {
    localStorage.removeItem('jhic-auth')
    localStorage.removeItem('jhic-user')
    setUser(null)
    setPage('home')
  }

  if (page === 'login') {
    return <Login onBack={() => setPage('home')} onRegister={() => setPage('register')} onLogin={handleLogin} />
  }

  if (page === 'register') {
    return <Register onBack={() => setPage('home')} onLogin={() => setPage('login')} onRegister={handleRegister} />
  }

  if (page === 'verification') {
    return <Verification onBack={() => setPage('register')} onVerify={handleVerified} />
  }

  if (page === 'home-logged') {
    return <HomeLoggedIn
      user={user}
      onLogout={handleLogout}
      onUmkm={() => setPage('umkm')}
      onPrivacy={() => setPage('privacy')}
      onTerms={() => setPage('terms')}
    />
  }

  if (page === 'umkm') {
    return <UMKM
      user={user}
      onHome={() => setPage(user ? 'home-logged' : 'home')}
      onProduct={(id) => { setSelectedProduct(id); setPage('product') }}
      onPrivacy={() => setPage('privacy')}
      onTerms={() => setPage('terms')}
      onLogin={() => setPage('login')}
    />
  }

  if (page === 'product') {
    return <ProductDetail
      productId={selectedProduct}
      user={user}
      onHome={() => setPage(user ? 'home-logged' : 'home')}
      onUMKM={() => setPage('umkm')}
      onPrivacy={() => setPage('privacy')}
      onTerms={() => setPage('terms')}
      onLogin={() => setPage('login')}
    />
  }

  if (page === 'terms') {
    return <TermsOfService
      onBack={() => setPage(user ? 'home-logged' : 'home')}
      onHome={() => setPage(user ? 'home-logged' : 'home')}
      onUMKM={() => setPage('umkm')}
      onPrivacy={() => setPage('privacy')}
      onTerms={() => setPage('terms')}
    />
  }

  if (page === 'privacy') {
    return <PrivacyPolicy
      onBack={() => setPage(user ? 'home-logged' : 'home')}
      onHome={() => setPage(user ? 'home-logged' : 'home')}
      onUMKM={() => setPage('umkm')}
      onTerms={() => setPage('terms')}
    />
  }

  return <Home
    onLogin={() => setPage('login')}
    onUmkm={() => setPage('umkm')}
    onPrivacy={() => setPage('privacy')}
    onTerms={() => setPage('terms')}
  />
}

export default App
