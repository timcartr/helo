import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
// import Auth from './components/Auth/Auth';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import Post from './components/Post/Post';
import { Route } from 'react-router-dom'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route render={ props => <Nav {...props} /> } />
      {Routes}
      </div>
    );
  }
}

export default App;
