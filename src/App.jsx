import React from "react";
import './App.css'

import Card from './components/layout/Card'
import First from './components/basics/First'
import Props from './components/basics/Props'
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import ListaAlunos from "./components/loop/ListaAlunos";
import ListaCompras from "./components/loop/ListaCompras";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UserInfo from "./components/condicional/UserInfo";
import DiretaPai from "./components/comunication/DiretaPai";
import IndiretaPai from "./components/comunication/IndiretaPai"
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";
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

                <Card title='Componentes com Filhos' color="#090">
                    <Family subname="Ferreira">
                        <FamilyMember name="Pedro"/>
                        <FamilyMember name="Marcelo"/>
                        <FamilyMember name="Bruno"  />
                    </Family>
                </Card>

                <Card title='Lista Alunos' color="#008">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card title='Lista Compras' color="#f00">
                    <ListaCompras></ListaCompras>
                </Card>

                <Card title='Condicional' color="#090">
                    <ParOuImpar number={22}></ParOuImpar>
                    <UserInfo user={{name: 'Bruno'}}></UserInfo>
                </Card>

                <Card title='Comunicao Direta' color="#008">
                    <DiretaPai />
                </Card>

                <Card title='Comunicao Indireta' color="#f00">
                    <IndiretaPai />
                </Card>

                <Card title='Componente Controlado' color="#090">
                    <Input />
                </Card>

                <Card title='Contador' color="#008">
                    <Contador initial={15} />
                </Card>

                <Card title='Mega' color="#f00">
                    <Mega />
                </Card>


            </div>
        </div>
    )
}

export default App;