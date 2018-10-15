import React, { Component } from 'react';
import '../App.css';
import './NavBar.css';
import logo  from './../resources/logo.png';
import VizContainer from './DataViz/DataVizContainer';
import {changeVizPanel, Menu_details} from './../actions/index';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { VizContainer: state.VizContainer };
};
  
const mapDispatchToProps = dispatch => ({
    changeVizPanel: dataViz => dispatch(changeVizPanel(dataViz))
});


const homePage = {title : "Welcome to Indicators Portal !", bodyType : "text", bodyText : "This site was developed using React and Redux"};



class MenuPanel extends Component {

  render() {
    var fullWidth = {
          width : "100%"
    };
    const changeVizPanel = this.props.changeVizPanel;
    return (
      <div className="wrapper" style={fullWidth}>
      <nav id="sidebar">
          <div className="sidebar-header">
          <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
    <img src={logo} width="100%" height="30" className="d-inline-block align-top" alt=""/>
    <p>Indicators Portal</p>
    <h1>IP</h1>
  </a>
</nav>
          </div>
  
          <ul className="list-unstyled components">
              <li onClick={() =>changeVizPanel(homePage)}>
                  <a href="#">Home</a>
              </li>
              <li>
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> <i className="fas fa-home"></i>Indicators</a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">{Menu_details.map(function(ind){
                        return <li key={ind.title} onClick={() =>changeVizPanel(ind)}><a href="#" >{ind.title}</a></li>;})}
                  </ul>
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
      <div id="content" className="container-fluid">
            <VizContainer></VizContainer>
        </div>
    </div>
    );
  }
}
  
const NavBar = connect(mapStateToProps, mapDispatchToProps)(MenuPanel);

export default NavBar;
