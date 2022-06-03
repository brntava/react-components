import { useState } from 'react';

const Mega = (props) =>{

    function gerarNumero(qtde){

        const numeros = Array(qtde).fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([...nums, novoNumero])
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
    
        return numeros
    
    }
    
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1- min)) + min;
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    const [qtde, setQtde] = useState(props.qtde || 6);
    const numerosIniciais = gerarNumero(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais);
    

    return(
        <div>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label >Alterar Quantidade</label>
                <br></br>
                <br></br>
                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)
                }/>
            </div>
            <br></br>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Numeros</button>
        </div>
    )
}

export default Mega