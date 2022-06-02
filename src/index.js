import ReactDOM  from "react-dom";
import React from "react";
import First from './components/basics/First'
import Props from './components/basics/Props'
import './index.css'

const tag = <strong>Ola mundo</strong>

ReactDOM.render(
    <div> 
        {tag}
        <First />
        <Props title="Situacao do aluno" name="Pedro" nota="8.7" />
    </div>,
    document.getElementById('root')
)