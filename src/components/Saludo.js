import React, { Component } from 'react';
import IntroducirTexto from './IntroducirTexto';
import AumentarNumero from  './AumentarNumero';
import ReducirNumero from './ReducirNumero';

class Saludo extends Component{
  constructor(){
    super();
    this.state={
      numero: 0
    }
  }

  masUno(){
    this.setState({numero: this.state.numero+1});
  }

  menosUno(){
    this.setState({numero: this.state.numero-1})
  }

  render(){
    return (
      <div>
        <h1>Saludando desde React....!</h1>
        <IntroducirTexto />
        <h2> {this.state.numero} </h2>
        <AumentarNumero numero={this.state.numero} funcAumentar={
          this.masUno.bind(this) }/>

        <ReducirNumero numero ={this.state.numero} funcReducir={
          this.menosUno.bind(this) }/>
      </div>
    );
  }
}

export default Saludo;
