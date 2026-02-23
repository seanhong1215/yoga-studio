import './Home.scss'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Hero from '../../components/sections/Hero'
import About from '../../components/sections/About'
import Classes from '../../components/sections/Classes'
import Schedule from '../../components/sections/Schedule'
import Contact from '../../components/sections/Contact'

const Home = () => {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const targetId = location.state?.scrollTo
        if (!targetId) return

        // 等 DOM ready 再捲動
        requestAnimationFrame(() => {
            const element = document.getElementById(targetId)
            if (element) element.scrollIntoView({ behavior: 'smooth' })
            // 清掉 state，避免返回/重整時重複觸發
            navigate(location.pathname, { replace: true, state: null })
        })
    }, [location.pathname, location.state, navigate])

    return (
        <div className="home-page">
            <Hero />
            <About />
            <Classes />
            <Schedule />
            <Contact />
        </div>
    )
}

export default Home
