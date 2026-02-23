import './Card.scss'

const Card = ({ children, className = '', hoverable = false, onClick }) => {
    const cardClass = `card ${hoverable ? 'card--hoverable' : ''} ${className}`

    return (
        <div className={cardClass} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card
