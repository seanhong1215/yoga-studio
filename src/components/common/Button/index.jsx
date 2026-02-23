import './Button.scss'

const Button = ({ children, variant = 'primary', size = 'medium', onClick, type = 'button', disabled = false, fullWidth = false }) => {
    const classNames = ['btn', `btn--${variant}`, `btn--${size}`, fullWidth ? 'btn--full' : ''].join(' ')

    return (
        <button className={classNames} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
