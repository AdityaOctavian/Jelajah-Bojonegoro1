import { useState } from 'react'
import loginBackground from '../assets/negri atas angin1.webp'
import Icon from '../components/Icon'
import AuthBrand from '../components/AuthBrand'
import AuthField from '../components/AuthField'

function Register({ onBack, onLogin, onRegister }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agree, setAgree] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!agree) return

    onRegister({
      name: name || 'Budi',
      email: email || 'budi@example.com',
      phone,
    })
  }

  return (
    <div className="auth-page register-page page-enter">
      <div className="auth-photo" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,55,42,.08), rgba(0,55,42,.62)), url("${loginBackground}")` }}>
        <button className="auth-back light" onClick={onBack}><Icon name="arrowLeft" size={22} /> Kembali</button>
        <div className="auth-photo-copy"><AuthBrand light /><p>Temukan keajaiban alam dan kearifan lokal Jawa Timur. Mulai perjalanan autentik Anda bersama kami.</p></div>
      </div>

      <div className="register-form-area">
        <form className="register-form" onSubmit={handleSubmit}>
          <h1>Buat Akun Baru</h1>
          <p className="register-subtitle">Lengkapi data diri Anda untuk bergabung.</p>

          <AuthField label="Nama Lengkap" icon="user" placeholder="Masukkan nama lengkap" value={name} onChange={setName} />
          <AuthField label="Nomor WhatsApp" icon="phone" placeholder="Contoh: 08123456789" value={phone} onChange={setPhone} />
          <AuthField label="Email" icon="mail" type="email" placeholder="alamat@email.com" value={email} onChange={setEmail} />
          <AuthField label="Password" icon="lock" type={showPassword ? 'text' : 'password'} placeholder="Minimal 8 karakter" value={password} onChange={setPassword} suffix={<button type="button" className="icon-button" onClick={() => setShowPassword((value) => !value)}><Icon name="eye" size={20} /></button>} />

          <label className="agreement">
            <input type="checkbox" checked={agree} onChange={(event) => setAgree(event.target.checked)} />
            <span>Saya menyetujui <button type="button">Syarat dan Ketentuan</button><br /> serta <button type="button">Kebijakan Privasi.</button></span>
          </label>

          <button className="auth-submit" type="submit" disabled={!agree}>Daftar Sekarang</button>
          <p className="auth-switch">Sudah punya akun? <button type="button" onClick={onLogin}>Masuk</button></p>
        </form>
      </div>
    </div>
  )
}

export default Register
