import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addMachine } from '../actions/toolboxAction'


class ButtonToolBox extends Component {

  triggerAction = () =>  {
    this.props.onSelect(this.props.nombre)
    this.props.addMachine({ nombre: this.props.nombre, img: this.props.src})
  }

  render() {
    if (this.props.seleccionado){
        return <div className="ButtonToolbox seleccionado" >
                  <img src={this.props.src} alt="actions" />
                </div>;
      }else{
        return <div className="ButtonToolbox" onClick={this.triggerAction} >
                  <img src={this.props.src} alt="actions"/>
                </div>;	
    }
  }
}


ButtonToolBox.propTypes = {
    nombre: PropTypes.string,
    seleccionado: PropTypes.bool
}


export default connect(null, { addMachine })(ButtonToolBox)