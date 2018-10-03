import React, { Component } from 'react';
import 'bootstrap';


class NavBar extends Component {
  render() {
    var rowMargin = {
      padding : "0px"
    };
    return (
  <div className="row" >
    <div className="col">
      One of three columns
    </div>
    <div className="col">
      One of three columns
    </div>
    <div className="col">
    </div>
  </div>
    );
  }
}


export default NavBar;
