import DiretaFilho from "./DiretaFilho"

const DiretaPai = () =>{
    return(
        <div>
            <DiretaFilho name="Bruno" number={30} boolean={true}/>
            <DiretaFilho name="Amanda" number={20} boolean={false}/>
            <DiretaFilho name="Claudio" number={35} boolean={true}/>
        </div>
    )
}

export default DiretaPai