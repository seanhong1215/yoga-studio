import './Container.scss'

const Container = ({ children, size = 'default', padding = true, className = '' }) => {
    const containerClass = ['container', `container--${size}`, padding ? 'container--padded' : '', className].join(' ')

    return <div className={containerClass}>{children}</div>
}

export default Container
