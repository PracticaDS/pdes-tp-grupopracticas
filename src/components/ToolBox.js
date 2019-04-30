import React, { Component } from 'react';
import ButtonToolBox from './ButtonToolBox';
import '../css/ToolBox.css';

import boton_furnace     from '../images/furnace.PNG';
import boton_seller      from '../images/seller.PNG';
import boton_crafter     from '../images/crafter.PNG';
import boton_start       from '../images/starter.PNG';
import boton_transporter from '../images/transporter.PNG';

import boton_move   from '../images/move.PNG';
import boton_borrar from '../images/delete.PNG';
import boton_rotar  from '../images/rotate.PNG';





export class ToolBox extends Component {

   constructor(props) {
    super(props);
    this.state = { toolSeleccionado: "" };
  }

  handleSelect = (tool) => {
    this.setState({ toolSeleccionado: tool });
  }

  crearBoton(props){
    return <ButtonToolBox 
              seleccionado={props.nombre === this.state.toolSeleccionado}
              onSelect={this.handleSelect}
              nombre={props.nombre} 
              src={props.src} 
            /> 
  }

  render() {
    return (
      <div className="ToolBox">
              <h3>Máquinas</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>{this.crearBoton({nombre: "starter", src: boton_start })}</td>
                      <td>{this.crearBoton({nombre: "crafter", src: boton_crafter })}</td>
                    </tr>
                    <tr>
                      <td>{this.crearBoton({nombre: "seller", src: boton_seller })}</td>
                      <td>{this.crearBoton({nombre: "furnace", src: boton_furnace })}</td>
                    </tr>
                    <tr>
                      <td>{this.crearBoton({nombre: "transporter", src: boton_transporter })}</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Edición</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>{this.crearBoton({nombre: "delete", src: boton_borrar })}</td>
                      <td>{this.crearBoton({nombre: "move",   src: boton_move })}</td>
                    </tr>
                    <tr>
                      <td>{this.crearBoton({nombre: "rotate",   src: boton_rotar })}</td>
                    </tr>
                  </tbody>
                </table>
      </div>
    )
  }
}