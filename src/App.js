import React, { Component } from 'react';
import './App.css';
import Fabrica from './components/Fabrica/Fabrica';
import store from './store';
import { Provider } from 'react-redux';



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="Container">
          <h1>Revolución Industrial</h1>
          <div className="App"> 
            <Fabrica />
          </div>
        </div>
      </Provider>
    )
  }
}
export default App;