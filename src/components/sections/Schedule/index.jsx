import { useState } from 'react'
import { SCHEDULE } from '../../../utils/constants'
import './Schedule.scss'

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState('週一')

    const days = ['週一', '週二', '週三', '週四', '週五', '週六', '週日']

    const filteredSchedule = SCHEDULE.filter((item) => item.day === selectedDay)

    return (
        <section id="schedule" className="schedule">
            <div className="schedule__container">
                <div className="schedule__header">
                    <h2 className="schedule__title">課程時間表</h2>
                    <div className="schedule__divider"></div>
                    <p className="schedule__subtitle">選擇適合你的時間,開始瑜珈之旅</p>
                </div>

                <div className="schedule__days">
                    {days.map((day) => (
                        <button key={day} className={`schedule__day-btn ${selectedDay === day ? 'schedule__day-btn--active' : ''}`} onClick={() => setSelectedDay(day)}>
                            {day}
                        </button>
                    ))}
                </div>

                <div className="schedule__content">
                    {filteredSchedule.length > 0 ? (
                        <div className="schedule__list">
                            {filteredSchedule.map((item, index) => (
                                <div key={index} className="schedule__item">
                                    <div className="schedule__time">
                                        <span className="schedule__time-icon">🕐</span>
                                        <span className="schedule__time-text">{item.time}</span>
                                    </div>
                                    <div className="schedule__details">
                                        <h4 className="schedule__class-name">{item.class}</h4>
                                        <p className="schedule__instructor">教練: {item.instructor}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="schedule__empty">
                            <p>本日無課程安排</p>
                        </div>
                    )}
                </div>

                <div className="schedule__note">
                    <p>💡 所有課程需提前預約,每堂課限額 12 人</p>
                    <p>📞 預約電話: +886-2-1234-5678</p>
                </div>
            </div>
        </section>
    )
}

export default Schedule
