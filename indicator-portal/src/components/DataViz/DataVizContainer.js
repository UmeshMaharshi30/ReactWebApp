import React, { Component } from 'react';
import 'bootstrap';


class NavBar extends Component {
  render() {
    return (
  <div className="row">
    <div className="col align-self-start">
      One of three columns
    </div>
    <div className="col align-self-center">
      One of three columns
    </div>
    <div className="col align-self-end">
    <button type="button" id="sidebarCollapse" className="btn btn-info">
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
            </button>
    </div>
  </div>
    );
  }
}


export default NavBar;
