import React, { Component } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap';
class App extends Component {
  render() {
    var rootContainer = {
      padding : "10px"
    };
    return (
      <div className="container-fluid" style={rootContainer}>  
      <div className="row">
      <NavBar></NavBar>
      </div>
      </div>
    );
  }
}

export default App;
