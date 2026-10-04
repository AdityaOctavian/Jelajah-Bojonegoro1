import logoBlack from '../assets/logo-jelajah-hitam.webp'
import logoWhite from '../assets/logo-jelajah-putih.webp'

function AuthBrand({ light = false }) {
  return (
    <img
      className="auth-logo"
      src={light ? logoWhite : logoBlack}
      alt="Jelajah Bojonegoro"
    />
  )
}

export default AuthBrand
