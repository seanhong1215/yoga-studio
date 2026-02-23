import './Badge.scss'

const Badge = ({ children, variant = 'primary', size = 'medium', rounded = true }) => {
    const classNames = ['badge', `badge--${variant}`, `badge--${size}`, rounded ? 'badge--rounded' : ''].join(' ')

    return <span className={classNames}>{children}</span>
}

export default Badge
