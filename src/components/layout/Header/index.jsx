import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navigateAndScroll = (id) => {
        if (location.pathname === '/') {
            scrollToSection(id)
            return
        }

        // 先回首頁，Home 會在 mount 時讀 state 並捲動
        navigate('/', { state: { scrollTo: id } })
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/" className="header__logo-text">Yoga Studio</Link>
                </div>
                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">首頁</Link>
                    <button type="button" className="header__nav-link" onClick={() => navigateAndScroll('about')}>
                        關於我們
                    </button>
                    <button type="button" className="header__nav-link" onClick={() => navigateAndScroll('contact')}>
                        聯絡我們
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
