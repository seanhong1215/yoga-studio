import './Navigation.scss'

const Navigation = ({ isOpen, onClose, items }) => {
    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            if (onClose) onClose()
        }
    }

    const defaultItems = [
        { id: 'about', label: '關於我們' },
        { id: 'classes', label: '課程介紹' },
        { id: 'schedule', label: '課程時間' },
        { id: 'contact', label: '聯絡我們' }
    ]

    const navItems = items || defaultItems

    return (
        <nav className={`navigation ${isOpen ? 'navigation--open' : ''}`}>
            <ul className="navigation__list">
                {navItems.map((item) => (
                    <li key={item.id} className="navigation__item">
                        <button onClick={() => handleNavClick(item.id)} className="navigation__link">
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
