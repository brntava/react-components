import compras from '../../data/compras'

const ListaCompras = () => {

    const list = compras.map((compra, i) => {

        return(
            <tr key={i}>
                <td>{compra.id}</td>
                <td>{compra.name}</td>
                <td>R${compra.price}</td>
            </tr>
        )

    });

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            lineHeight: '25px'
        }}>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>            
        </div>
    )
}

export default ListaCompras