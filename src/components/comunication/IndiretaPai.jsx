import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho"

const IndiretaPai = () =>{

    const [name, setName] = useState('');
    const [idade, setIdade] = useState();
    const [nerd, setNerd] = useState();

    function info(nameParam, idadeParam, nerdParam){
        setName(nameParam);
        setIdade(idadeParam);
        setNerd(nerdParam);
    }

    return(
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{idade} anos </strong></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho click={info}></IndiretaFilho>
        </div>
    )
}

export default IndiretaPai