import React, { Component } from 'react';
import PropTypes            from 'prop-types';

export class ButtonToolBox extends Component {
    render() {
	    if (this.props.seleccionado){
          return <div className="ButtonToolbox seleccionado" >
                    <img src={this.props.src} alt="actions" />
                 </div>;
        }else{
          return <div className="ButtonToolbox" onClick={() => this.props.onSelect(this.props.nombre) } >
                    <img src={this.props.src} alt="actions"/>
                 </div>;	
      }
  }
}


ButtonToolBox.propTypes = {
    nombre: PropTypes.string,
    seleccionado: PropTypes.bool
  
}