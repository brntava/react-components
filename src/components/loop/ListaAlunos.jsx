import alunos from '../../data/alunos'

const ListaAlunos = (props) => {

    const lis = alunos.map((aluno, i) =>{

        return (
            <li key={i}>{aluno.id} {aluno.nome} - {aluno.nota}</li>
        )

    })

    return(
        <div>
            <ul style={{listStyle: 'none'}}>
                {lis}
            </ul>
        </div>
    )

} 

export default ListaAlunos;