import './Input.scss'

const Input = ({ type = 'text', label, placeholder, value, onChange, error, required = false, disabled = false, fullWidth = false, icon, ...rest }) => {
    const inputClass = ['input', error ? 'input--error' : '', icon ? 'input--with-icon' : '', fullWidth ? 'input--full-width' : ''].join(' ')

    return (
        <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full-width' : ''}`}>
            {label && (
                <label className="input-label">
                    {label}
                    {required && <span className="input-required">*</span>}
                </label>
            )}

            <div className="input-container">
                {icon && <span className="input-icon">{icon}</span>}

                <input type={type} className={inputClass} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled} required={required} {...rest} />
            </div>

            {error && <span className="input-error-message">{error}</span>}
        </div>
    )
}

export default Input
