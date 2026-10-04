import { useState } from 'react'
import loginBackground from '../assets/negri atas angin1.webp'
import Icon from '../components/Icon'
import AuthBrand from '../components/AuthBrand'
import AuthField from '../components/AuthField'

function Login({ onBack, onRegister, onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogin(email || 'budi@example.com')
  }

  return (
    <div className="auth-page auth-login-page page-enter">
      <div className="auth-photo" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,55,42,.08), rgba(0,55,42,.62)), url("${loginBackground}")` }}>
        <button className="auth-back light" onClick={onBack}><Icon name="arrowLeft" size={22} /> Kembali</button>
        <div className="auth-photo-copy"><AuthBrand light /><p>Temukan keajaiban alam dan kearifan lokal Jawa Timur. Mulai perjalanan autentik Anda bersama kami.</p></div>
      </div>

      <div className="auth-panel-wrap">
        <form className="auth-panel login-panel" onSubmit={handleSubmit}>
          <AuthBrand />
          <p className="auth-intro">Selamat datang kembali! Silakan masuk<br />untuk melanjutkan penjelajahan.</p>

          <AuthField label="EMAIL" icon="mail" type="email" placeholder="email@contoh.com" value={email} onChange={setEmail} />
          <AuthField label="PASSWORD" icon="lock" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={password} onChange={setPassword} suffix={<button type="button" className="icon-button" onClick={() => setShowPassword((value) => !value)}><Icon name="eye" size={20} /></button>} />

          <div className="login-options">
            <label><input type="checkbox" /> Ingat saya</label>
            <button type="button">Lupa Password?</button>
          </div>

          <button className="auth-submit" type="submit">Masuk</button>

          <div className="auth-divider"><span>ATAU MASUK DENGAN</span></div>
          <div className="social-row"><button type="button"><b className="google-g">G</b> Google</button><button type="button"><b className="facebook-f">f</b> Facebook</button></div>

          <p className="auth-switch">Belum punya akun? <button type="button" onClick={onRegister}>Daftar Sekarang</button></p>
        </form>
      </div>
    </div>
  )
}

export default Login