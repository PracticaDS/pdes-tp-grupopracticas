import React, { Component } from 'react';
import ButtonToolBox from '../ButtonToolBox/ButtonToolBox';
import './ToolBox.css';

import boton_furnace     from '../../images/furnace.PNG';
import boton_seller      from '../../images/seller.PNG';
import boton_crafter     from '../../images/crafter.PNG';
import boton_start       from '../../images/starter.PNG';
import boton_transporter from '../../images/transporter.PNG';

import boton_move   from '../../images/move.PNG';
import boton_borrar from '../../images/delete.PNG';
import boton_rotar  from '../../images/rotate.PNG';
import EditionButton from '../EditionButton/EditionButton';

import { DELETE, MOVE, ROTATE } from '../../utils/EditionTypes'


export default class ToolBox extends Component {

   constructor(props) {
    super(props);
    this.state = { toolSeleccionado: "" };
  }

  crearBoton(machine){
    return <ButtonToolBox 
              seleccionado={machine.name === this.state.toolSeleccionado}
              name={machine.name} 
              src={machine.src} 
              price={machine.price}
            /> 
  }

  createEditionButton(props){
    return <EditionButton 
              seleccionado={props.name === this.state.toolSeleccionado}
              machine={props.name} 
              src={props.src} 
              type={props.type}
            /> 
  }

  render() {
    return (
      <div className="ToolBox">
        <h3>Máquinas</h3>
          <table>
            <tbody>
              <tr>
                <td>{this.crearBoton({name: "starter", src: boton_start, price: 400 })}</td>
                <td>{this.crearBoton({name: "crafter", src: boton_crafter, price: 500 })}</td>
              </tr>
              <tr>
                <td>{this.crearBoton({name: "seller", src: boton_seller, price: 300 })}</td>
                <td>{this.crearBoton({name: "furnace", src: boton_furnace, price: 200 })}</td>
              </tr>
              <tr>
                <td>{this.crearBoton({name: "transporter", src: boton_transporter, price: 100 })}</td>
              </tr>
            </tbody>
          </table>

          <h3>Edición</h3>
          <table>
            <tbody>
              <tr>
                <td>{this.createEditionButton({name: "delete", src: boton_borrar, type: DELETE })}</td>
                <td>{this.createEditionButton({name: "move", src: boton_move, type: MOVE})}</td>
              </tr>
              <tr>
                <td>{this.createEditionButton({name: "rotate", src: boton_rotar, type: ROTATE })}</td>
              </tr>
            </tbody>
          </table>
      </div>
    )
  }
}