import React, { Component } from 'react';
import '../App.css';
import './NavBar.css';
import logo  from './../resources/logo.png';
import VizContainer from './DataViz/DataVizContainer';


class NavBar extends Component {
  render() {
    return (
      <div className="wrapper">
      <nav id="sidebar">
          <div className="sidebar-header">
          <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
    <img src={logo} width="100%" height="30" className="d-inline-block align-top" alt=""/>
    Indicators Portal
  </a>
</nav>
          </div>
  
          <ul className="list-unstyled components">
              <li >
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">
                      <li>
                          <a href="#">Home 1</a>
                      </li>
                      <li>
                          <a href="#">Indicators</a>
                      </li>
                      <li>
                          <a href="#">Data Tools</a>
                      </li>
                  </ul>
              </li>
              <li>
                  <a href="#">Indicators</a>
              </li>
              <li>
                  <a href="#">Data Tools</a>
              </li>
              <li>
                  <a href="#">Publications</a>
              </li>
              <li>
                  <a href="#">About</a>
              </li>
              <li>
                  <a href="#">Support</a>
              </li>
          </ul>
      </nav>
      <div id="content" >
            <VizContainer></VizContainer>
        </div>
    </div>
    );
  }
}
  

export default NavBar;
