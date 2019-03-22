import React, { Component } from 'react';

class ReducirNumero extends Component{

  render(){
    return(
       <div>
        <button onClick={this.props.funcReducir} > Reducir </button>
      </div>

    );
  }
}

export default ReducirNumero;
