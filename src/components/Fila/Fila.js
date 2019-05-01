import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Celda from '../Celda/Celda';
import './Fila.css'

export class Fila extends Component {

    constructor(props){
        super (props);
        this.state = {
           celdas: []
        }
    }

    render () {
        return (
        <div className="grilla">
           { this.dibujarCeldas() }
        </div>   
        )
    } 
     

    dibujarCeldas(){
        var celdas = [];
        for (var i=1; i <= this.props.columnas; i++){
            celdas.push(
                <Celda key={i} fila={this.props.index} columna={i} />
            )
        }
        this.celdas = celdas;
        return celdas;
    }

}

Fila.propTypes = {
    index : PropTypes.number,
    columnas: PropTypes.number
}