import { useEffect, useState } from 'react'
import Icon from '../components/Icon'

function Verification({ onBack, onVerify }) {
  const [code, setCode] = useState(['', '', '', ''])
  const [seconds, setSeconds] = useState(118)

  useEffect(() => {
    if (seconds <= 0) return undefined
    const timer = setInterval(() => setSeconds((value) => value - 1), 1000)
    return () => clearInterval(timer)
  }, [seconds])

  const updateCode = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = [...code]
    next[index] = digit
    setCode(next)

    if (digit && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  return (
    <div className="verification-page page-enter">
      <button className="auth-back dark" onClick={onBack}><Icon name="arrowLeft" size={22} /> Kembali</button>

      <form className="verification-card" onSubmit={(event) => { event.preventDefault(); if (code.join('').length === 4) onVerify() }}>
        <div className="shield-icon"><Icon name="shield" size={34} /></div>
        <h1>Verifikasi Akun</h1>
        <p>Kami telah mengirimkan kode OTP 4 digit ke<br />WhatsApp Anda di +62 812–3456–7890.</p>

        <div className="otp-row">
          {code.map((value, index) => (
            <input
              id={`otp-${index}`}
              key={index}
              inputMode="numeric"
              maxLength="1"
              value={value}
              onChange={(event) => updateCode(index, event.target.value)}
            />
          ))}
        </div>

        <button className="auth-submit" type="submit" disabled={code.join('').length !== 4}>Verifikasi</button>

        <p className="resend">
          Belum menerima kode?<br />
          <button type="button" disabled={seconds > 0} onClick={() => setSeconds(118)}>Kirim ulang kode</button>{' '}
          <strong>({String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')})</strong>
        </p>
      </form>
    </div>
  )
}

export default Verification
