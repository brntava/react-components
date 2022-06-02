const Props = (params) => {

    const pass = (params.nota >= 6) ? 'Aprovado' : 'Reprovado';
    const notaInt = Math.round(params.nota)

    return(
        <>
            <h2>{params.title}</h2>
            <p>
                <strong>{params.name} </strong>
                tirou nota <strong> {notaInt} </strong>
                e foi <strong> {pass} </strong>
            </p>
        </>
    )

}

export default Props;