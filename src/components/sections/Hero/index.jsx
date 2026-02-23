import Button from '../../common/Button'
import { STUDIO_INFO } from '../../../utils/constants'
import './Hero.scss'

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToClasses = () => {
        const element = document.getElementById('classes')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="hero">
            <div className="hero__overlay"></div>
            <div className="hero__content">
                <h1 className="hero__title">{STUDIO_INFO.name}</h1>
                <p className="hero__subtitle">{STUDIO_INFO.tagline}</p>
                <div className="hero__actions">
                    <Button variant="primary" size="large" onClick={scrollToContact}>
                        預約體驗
                    </Button>
                    <Button variant="secondary" size="large" onClick={scrollToClasses}>
                        瀏覽課程
                    </Button>
                </div>
            </div>
            <div className="hero__scroll-indicator">
                <span>向下滾動探索更多</span>
                <div className="hero__scroll-arrow">↓</div>
            </div>
        </section>
    )
}

export default Hero
