import Card from '../../common/Card'
import { CLASSES } from '../../../utils/constants'
import './Classes.scss'

const Classes = () => {
    const getLevelColor = (level) => {
        switch (level) {
            case '初級':
                return '#7FA99B'
            case '中級':
                return '#8B7355'
            case '中高級':
                return '#72593E'
            default:
                return '#C9B8A3'
        }
    }

    return (
        <section id="classes" className="classes">
            <div className="classes__container">
                <div className="classes__header">
                    <h2 className="classes__title">課程介紹</h2>
                    <div className="classes__divider"></div>
                    <p className="classes__subtitle">精心設計的課程,滿足不同程度與需求</p>
                </div>

                <div className="classes__grid">
                    {CLASSES.map((classItem) => (
                        <Card key={classItem.id} hoverable className="classes__card">
                            <div className="classes__card-header">
                                <h3 className="classes__card-title">{classItem.name}</h3>
                                <span className="classes__card-level" style={{ backgroundColor: getLevelColor(classItem.level) }}>
                                    {classItem.level}
                                </span>
                            </div>
                            <p className="classes__card-description">{classItem.description}</p>
                            <div className="classes__card-info">
                                <div className="classes__card-info-item">
                                    <span className="classes__card-info-label">時長</span>
                                    <span className="classes__card-info-value">{classItem.duration}</span>
                                </div>
                                <div className="classes__card-info-item">
                                    <span className="classes__card-info-label">費用</span>
                                    <span className="classes__card-info-value classes__card-price">{classItem.price}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="classes__footer">
                    <p className="classes__note">💡 首次體驗課程享 5 折優惠</p>
                    <p className="classes__note">🎫 購買 10 堂課程套票享 8 折優惠</p>
                </div>
            </div>
        </section>
    )
}

export default Classes
