import Icon from './Icon'

function AuthField({
  label,
  icon,
  type = 'text',
  placeholder,
  value,
  onChange,
  suffix,
}) {
  return (
    <label className="auth-field">
      <span>{label}</span>
      <div className="auth-input">
        <Icon name={icon} size={21} />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required={type === 'email'}
        />
        {suffix}
      </div>
    </label>
  )
}

export default AuthField
