import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { selectMachine, unselectMachine } from '../../actions/toolboxAction'


class ButtonToolBox extends Component {

  triggerSelectMachineAction = () =>  {
    this.props.selectMachine({ nombre: this.props.nombre, img: this.props.src})
  }

  render() {
    if (this.props.selected && this.props.nombre === this.props.machine.nombre){
        return <div className="ButtonToolbox seleccionado" >
                  <img src={this.props.src} alt="actions" />
                </div>;
    } else {
        return <div className="ButtonToolbox" onClick={this.triggerSelectMachineAction} >
                  <img src={this.props.src} alt="actions"/>
                </div>;	
    }
  }
}


ButtonToolBox.propTypes = {
    nombre: PropTypes.string,
    selected: PropTypes.bool
}

ButtonToolBox.defaultProps = { 
  selected: false
}

const mapStateToProps = state => ({
  machine: state.machineSelected.machine,
  selected: state.machineSelected.selected
})

export default connect(mapStateToProps, { selectMachine, unselectMachine })(ButtonToolBox)