import React, { Component } from 'react';
import './Fabrica.css';
import Board from '../Board/Board';


export default class Fabrica extends Component {

  render() {
    return (
      <div className="Fabrica">
        <Board />
      </div>
    )
  }

}