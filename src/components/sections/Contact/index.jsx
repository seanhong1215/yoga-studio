import { useState } from 'react'
import Button from '../../common/Button'
import Card from '../../common/Card'
import { STUDIO_INFO } from '../../../utils/constants'
import './Contact.scss'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // 這裡可以加入實際的表單提交邏輯
        console.log('表單資料:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '', message: '' })
        }, 3000)
    }

    return (
        <section id="contact" className="contact">
            <div className="contact__container">
                <div className="contact__header">
                    <h2 className="contact__title">聯絡我們</h2>
                    <div className="contact__divider"></div>
                    <p className="contact__subtitle">有任何問題或想預約體驗課程?歡迎與我們聯繫!</p>
                </div>

                <div className="contact__content">
                    <div className="contact__info">
                        <Card className="contact__info-card">
                            <div className="contact__info-item">
                                <div className="contact__info-icon">📞</div>
                                <div>
                                    <h4 className="contact__info-title">電話</h4>
                                    <p className="contact__info-text">{STUDIO_INFO.phone}</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="contact__info-card">
                            <div className="contact__info-item">
                                <div className="contact__info-icon">✉️</div>
                                <div>
                                    <h4 className="contact__info-title">Email</h4>
                                    <p className="contact__info-text">{STUDIO_INFO.email}</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="contact__info-card">
                            <div className="contact__info-item">
                                <div className="contact__info-icon">📍</div>
                                <div>
                                    <h4 className="contact__info-title">地址</h4>
                                    <p className="contact__info-text">{STUDIO_INFO.address}</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="contact__info-card">
                            <div className="contact__info-item">
                                <div className="contact__info-icon">🕐</div>
                                <div>
                                    <h4 className="contact__info-title">營業時間</h4>
                                    <p className="contact__info-text">{STUDIO_INFO.hours}</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="contact__form-card">
                        <h3 className="contact__form-title">預約體驗課程</h3>
                        {submitted ? (
                            <div className="contact__success">
                                <div className="contact__success-icon">✅</div>
                                <p className="contact__success-text">感謝您的訊息!我們將盡快與您聯繫。</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="contact__form">
                                <div className="contact__form-group">
                                    <label className="contact__label">姓名 *</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="contact__input" required placeholder="請輸入您的姓名" />
                                </div>

                                <div className="contact__form-group">
                                    <label className="contact__label">Email *</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="contact__input" required placeholder="your@email.com" />
                                </div>

                                <div className="contact__form-group">
                                    <label className="contact__label">電話</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="contact__input" placeholder="0912-345-678" />
                                </div>

                                <div className="contact__form-group">
                                    <label className="contact__label">訊息</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="contact__textarea"
                                        rows="5"
                                        placeholder="請告訴我們您感興趣的課程或任何問題..."
                                    ></textarea>
                                </div>

                                <Button type="submit" variant="primary" size="large" fullWidth>
                                    送出訊息
                                </Button>
                            </form>
                        )}
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Contact
