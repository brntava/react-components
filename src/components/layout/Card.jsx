import './Card.css'

const Card = (props) => {
    return(
        <div className='card'>
            <div className='title' style={{backgroundColor: props.color}}>{props.title}</div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )

} 

export default Card;