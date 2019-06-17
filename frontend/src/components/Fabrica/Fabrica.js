import React, { Component } from 'react'
import './Fabrica.css'
import Board from '../Board/Board'
import ToolBox from '../ToolBox/ToolBox'
import MachineDescription from '../MachineDescription/MachineDescription'


export default class Fabrica extends Component {

  render() {
    return (
      <div className="Fabrica">
        <ToolBox /> 
        <Board />
        <MachineDescription />
      </div>
    )
  }

}