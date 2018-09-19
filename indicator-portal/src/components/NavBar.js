import React, { Component } from 'react';
import logo from './../resources/logo.png';
import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={logo} width="auto" height="auto" className="d-inline-block align-top" alt="" />
  </a>
</nav>
    );
  }
}

export default NavBar;
