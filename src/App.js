import 'semantic-ui-css/semantic.min.css'
import React, { Component } from 'react';
import './App.css';
import Fabrica from './components/Fabrica/Fabrica';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <h1>Revolución Industrial</h1>
          </div>
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/home' component={Home} />
            <PrivateRoute path='/factory' component={Fabrica} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;