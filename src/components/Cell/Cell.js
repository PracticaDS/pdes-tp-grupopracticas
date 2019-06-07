import React, { Component } from 'react'
import './Cell.css'
import { connect } from 'react-redux';
import { unselectMachine } from '../../actions/toolboxAction'
import { addMachineToCell, selectMachine } from '../../actions/cellsAction'
import { selectCelda } from '../../actions/editionButtonAction'

export class Cell extends Component {

  hasMachine = () => {
    return this.props.machine
  }

  onClick = () => {
    if (this.hasMachine()) {
      this.props.selectCelda(this.props.id)
      this.props.selectMachine(this.props.id)
    } else if (this.props.selectedMachine){
      this.props.addMachineToCell(this.props.selectedMachine, this.props.id)
      this.props.unselectMachine()
    }
  }


  render() {
    return (
      <div className={'Cell ' + (this.props.selected ? 'selected' : '')} onClick={this.onClick}>
        { this.props.machine ? <img src={this.props.machine.img} className={this.props.machine.direction ? this.props.machine.direction : ''} alt="actions"/> : null }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedMachine: state.machineSelected.machine,
})

const actions = { 
  unselectMachine, 
  addMachineToCell, 
  selectCelda,
  selectMachine
}

export default connect(mapStateToProps, actions)(Cell)