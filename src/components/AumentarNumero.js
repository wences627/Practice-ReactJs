import React, { Component } from 'react';

class AumentarNumero extends Component{

  render(){
    return(
       <div>
        <button onClick={this.props.funcAumentar} > Aumentar </button>
      </div>

    );
  }
}

export default AumentarNumero;
