import React, { Component } from "react"
import './Contador.css'
import Display from "./Display"
import Buttons from "./Buttons"

class Contador extends Component{

    state = {
        number: 0
    }

    inc = () => {

        // Altera o valor do estado

        this.setState({
            number: this.state.number + 1
        })

    }

    dec = () => {

        // Altera o valor do estado

        if(this.state.number > 0){

            this.setState({
                number: this.state.number - 1
            })
        }

    }

    render(){
        return(
            <div className="cont">
                <h2>Contador</h2>
                <Display number={this.state.number} />
                <Buttons plus={this.inc} minus={this.dec} />
            </div>
        )
    }

}

export default Contador