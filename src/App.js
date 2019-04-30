import React, { Component } from 'react';
import './App.css';
import { Fabrica } from './components/Fabrica';
import { ToolBox } from './components/ToolBox';
import store from './store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="Container">
          <h1>Revolucion Industrial</h1>
          <div className="App"> 
            <ToolBox /> 
            <Fabrica className="fabrica" filas={10} columnas={10} />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;