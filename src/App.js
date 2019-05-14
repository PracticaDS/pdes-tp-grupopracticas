import React, { Component } from 'react';
import './App.css';
import Fabrica from './components/Fabrica/Fabrica';
import { ToolBox } from './components/ToolBox/ToolBox';
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
            <Fabrica />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;