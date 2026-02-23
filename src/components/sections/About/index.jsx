import './About.scss'

const About = () => {
    const features = [
        {
            icon: '🌿',
            title: '專業師資',
            description: '所有教師均持有國際瑜珈認證,擁有豐富教學經驗'
        },
        {
            icon: '✨',
            title: '舒適環境',
            description: '寬敞明亮的練習空間,營造寧靜放鬆的氛圍'
        },
        {
            icon: '💚',
            title: '小班教學',
            description: '每班限額 12 人,確保每位學員都能得到細心指導'
        },
        {
            icon: '🎯',
            title: '多元課程',
            description: '從基礎到進階,滿足不同程度學員的需求'
        }
    ]

    return (
        <section id="about" className="about">
            <div className="about__container">
                <div className="about__header">
                    <h2 className="about__title">關於我們</h2>
                    <div className="about__divider"></div>
                </div>

                <div className="about__content">
                    <div className="about__text">
                        <p className="about__intro">靜心瑜珈工作室成立於 2018 年,致力於推廣瑜珈運動, 幫助每個人在繁忙的生活中找回身心平衡。</p>
                        <p className="about__description">我們相信,瑜珈不僅是一種運動,更是一種生活態度。 透過專業的指導和溫馨的環境,讓每位學員都能在這裡 感受到內心的平靜,重新連結身體與心靈。</p>
                        <p className="about__description">無論你是瑜珈初學者,還是經驗豐富的練習者, 我們都有適合你的課程。歡迎加入我們的大家庭!</p>
                    </div>

                    <div className="about__features">
                        {features.map((feature, index) => (
                            <div key={index} className="about__feature">
                                <div className="about__feature-icon">{feature.icon}</div>
                                <h3 className="about__feature-title">{feature.title}</h3>
                                <p className="about__feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
