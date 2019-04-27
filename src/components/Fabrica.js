import React, { Component } from 'react';
import '../css/Fabrica.css';
import { PropTypes } from 'prop-types';
import { Fila } from './Fila'

export class Fabrica extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      grillas: []
    }
  }

  render() {
    return (
        <div className="grilla">
            {this.dibujarTablero()}
        </div>
    )
  }
  
  dibujarTablero(){
    var grilla = [];
    for (var i = 1; i <= this.props.filas; i++) {
      grilla.push(
        <Fila index= {i} columnas= {this.props.columnas} />
      );
    }
    this.grillas = grilla;
    return grilla;
  }

}

Fabrica.propTypes = {
  filas : PropTypes.number,
  columnas: PropTypes.number
}

Fabrica.defaultProps = { 
  filas : 10,
  columnas: 10
}