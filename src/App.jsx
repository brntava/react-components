import React from "react";
import './App.css'
import Card from './components/layout/Card'
import First from './components/basics/First'
import Props from './components/basics/Props'
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import Random from './components/basics/Random'
import './index.css'

const App = (props) => {

    return(
        <div> 
            <h1>Seja bem Vindo</h1>

            <div className="Cards">

                <Card title='Numeros' color="#090">
                    <Random max={50} min={0} />
                    <Random max={50} min={0} />
                    <Random max={50} min={0} />
                </Card>
                
                <Card title='Mensagem' color="#008">
                    <First />
                </Card>
                
                <Card title='Aluno' color="#f00">
                    <Props title="Situacao do aluno" name="Pedro" nota="8.7" />
                </Card>

                <Card title='Componentes com Filhos' color="#f00">
                    <Family subname="Ferreira">
                        <FamilyMember name="Pedro"/>
                        <FamilyMember name="Marcelo"/>
                        <FamilyMember name="Bruno"  />
                    </Family>
                </Card>

            </div>
        </div>
    )
}

export default App;