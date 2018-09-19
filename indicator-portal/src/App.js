import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    var rootContainer = {
      padding : "0px"
    };
    return (
      <div className="container-fluid" style={rootContainer}>  
      <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
