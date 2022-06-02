const ParOuImpar = (props) => {

    const isPar = props.number % 2 === 0;

    return(
        <div>
            { isPar ? <strong>Par</strong> : <strong>Impar</strong>}
        </div>
    )
}

export default ParOuImpar;