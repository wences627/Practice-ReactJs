import React, { Component } from 'react';

class IntroducirTexto extends Component{

  constructor(){
    super();
    this.state={
      nombre:'aqui va tu nombre'
    }
  }

  cambiarNombre(evento){
    this.setState({nombre: evento.target.value});
  }

  render(){
    return (
      <div>
        <h1>Practicando nuevos componentes</h1>
        <h2>{this.state.nombre}</h2>
        <input onChange={this.cambiarNombre.bind(this) }/>
        <p> aqui hasta con parrafos xD</p>
      </div>
    );

  }
}

export default IntroducirTexto;
