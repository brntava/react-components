import { useState } from "react"

const Input= () =>{

    const [valor, setValor] = useState();

    function onChange(e){
        setValor(e.target.value)
    }

    return(
        <div>
            <input style={{fontSize: '20px'}} type="text" value={valor} onChange={onchange}/>
        </div>
    )
        
}

export default Input