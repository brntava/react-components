const DiretaFilho = (props) => {
    return(
        <div>
            <span><strong>{props.name} </strong></span>
            <span>{props.number} </span>
            <span>{props.boolean ? 'Verdade' : 'Falso'}</span>
        </div>
    )
}

export default DiretaFilho