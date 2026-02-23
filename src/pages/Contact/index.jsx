import './Contact.scss'

const Contact = () => {
    return (
        <div className="contact-page">
            <h1>聯絡我們</h1>
            <div className="contact-info">
                <div className="info-item">
                    <h3>地址</h3>
                    <p>台北市信義區信義路五段 7 號</p>
                </div>
                <div className="info-item">
                    <h3>電話</h3>
                    <p>02-2345-6789</p>
                </div>
                <div className="info-item">
                    <h3>電子郵件</h3>
                    <p>info@yogastudio.com</p>
                </div>
                <div className="info-item">
                    <h3>營業時間</h3>
                    <p>週一至週日 09:00 - 21:00</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
