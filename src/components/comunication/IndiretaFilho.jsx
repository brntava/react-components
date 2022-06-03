const IndiretaFilho = (props) =>{

    const randomAge = _ => parseInt(Math.random() * (20)) + 50;

    return(
        <div>
            <div>Filho</div>
            <button onClick={function(){
                    props.click('Bruno', randomAge(), true)
                    }
                }> Fornecer Informacoes
            </button>
        </div>
    )
}

export default IndiretaFilho