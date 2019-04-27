import React, { Component } from 'react';
import './App.css';
import { Fabrica } from './components/Fabrica';
import { ToolBox } from './components/ToolBox';




class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1>Revolucion Industrial</h1>
        <div className="App"> 
          <ToolBox /> 
          <Fabrica className="fabrica" filas="10" columnas="10" />
               
        </div>
      </div>
    );
  }
}
export default App;