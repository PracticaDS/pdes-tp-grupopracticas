import React, { Component } from 'react'
import './Cell.css'
import { connect } from 'react-redux';
import { unselectMachine } from '../../actions/toolboxAction'
import { addMachineToCell } from '../../actions/cellsAction'



class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = { machine: null }
  }

  hasMachine = () => {
    return this.state.machine
  }

  onClick = () => {
    if (this.hasMachine()) {
      this.setState({isSelected:true})
      this.props.selectCelda(this.props.id)
    } else if (this.props.machine){
      this.props.addMachineToCell(this.props.machine, this.props.id)
      this.props.unselectMachine()
    }
  }

  render() {
    return (
      <div className="Cell" onClick={this.onClick}>
        { this.state.machine ? <img src={this.state.machine.img} alt="actions"/> : null }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  machine: state.machineSelected.machine,
})

export default connect(mapStateToProps, { unselectMachine, addMachineToCell })(Cell)