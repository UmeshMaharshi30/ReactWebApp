import React, { Component } from 'react';
import 'bootstrap';
import { connect } from "react-redux";
import  o from "./../../lib/outreach";
import * as d3 from "d3";
import Chart from './Chart'

const mapStateToProps = state => {
  return { VizContainer: state.VizContainer };
};

const mapDispatchToProps = dispatch => ({
  
});


class DataVizContainer extends Component {
  render() {
    const DataViz = this.props.VizContainer;
    var chartStyle = {
      padding : "10px",
      height : "400px"
    };
    let bodyContent = "";
    if(DataViz.bodyType = "text") {
        bodyContent = <div>{DataViz.bodyText}</div>;
    }
    if(DataViz.totalGraphs > 0) {
      //bodyContent = DataViz.graphs.map(function(g){ return <div key={g.title} id={DataViz.title + "_" + g.title}style={chartStyle} className="col-6 text-center">{g.title}</div>});
      
      bodyContent = DataViz.graphs.map(function(g){
        return <div key={g.title} id={DataViz.title + "_" + g.title}style={chartStyle} className="col-6 text-center"><Chart data={g}></Chart></div>
      });
    }
    var rowMargin = {
      padding : "10px"
    };

    return (
  <div className="row" style={rowMargin}>
    <div className="col-12 text-center">
        {DataViz.title}
        <div className="row">
        {bodyContent}
        </div>
    </div>
  </div>
    );
  }
}
const DataViz = connect(mapStateToProps, mapDispatchToProps)(DataVizContainer);
export default DataViz;
