import React, { Component } from 'react';
import * as d3 from "d3";
import  o from "./../../lib/outreach";
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
let childCont;
const graphBackGround = "#F0F0F0";
const margin = {top: 20, right: 20, bottom: 20, left: 40};
const fakeDom = new JSDOM('<!DOCTYPE html><html><body></body></html>');  
  
let viz  = "Not loading";


let body = d3.select(fakeDom.window.document).select('body');
class Chart extends Component {
    
    constructor() {
        super();
        this.state = {
            viz: "not loading"
          };
    }

    
    
    drawMultiLine(go, svg) {
       
        var width = go.graphDimentions[0] - margin.left - margin.right,
        height = go.graphDimentions[1] - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
    var x = d3.scaleTime().range([0, width]),
        y = d3.scaleLinear().range([height, 0]),
        z = d3.scaleOrdinal(d3.schemeCategory10);
    
    var line = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.Production); });
    
            var data = go.rawData;
            var entity = data.columns.slice(1).map(function(id) {
                return {
                  id: id,
                  values: data.map(function(d) {
                    if(d[id] != "" ) {
                    return {date: +d.Year, Production: parseFloat(d[id].replace(/,/g, ""))};
                  }
                  })
                };
              });
             go.data = entity;
             entity.forEach((element, index) => {
                var sanitizedData = [];
                element.values.forEach(elem => {
                  if(elem != undefined) sanitizedData.push(elem);
                });
                entity[index].values = sanitizedData;
            });
          
          
            x.domain(d3.extent(go.rawData, function(d) { return +d.Year; }));
          
            y.domain([
              d3.min(entity, function(c) {  return d3.min(c.values, function(d) { return d.Production; }); }),
              d3.max(entity, function(c) { return d3.max(c.values, function(d) { return d.Production; }); })
            ]);
          
          
            z.domain(entity.map(function(c) { return c.id; }));
    
            g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).tickFormat(d3.format("")));
          
            g.append("g")
                .attr("class", "axis axis--y")
                .call(d3.axisLeft(y).tickFormat(d3.format(".2s")))
              .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("fill", "#000")
                .text(go.yLabel);
          
          
            var city = g.selectAll(".city")
              .data(entity)
              .enter().append("g")
                .attr("class", "city");
          
          
            city.append("path")
                .attr("class", "line")
                .attr("d", function(d) {return line(d.values); })
                .style("stroke", function(d) { return z(d.id); })
                .style("fill", "none");
            
            var points = [];
          
            entity.forEach(element => {
                var cirArr = [];
                element.values.forEach(elem => {
                  var cir = elem;
                  cir.id = element.id;
                  cirArr.push(cir);
                });
                points.push(cirArr);
            });
          
            /*
            city.append("g").attr("class", "cirlces").selectAll(".city")
              .data(function(d,i) { return points[i]})
              .enter().append("circle")
              .attr("r", 3.5)
                .attr("cx", function(d) { return x(d.date); })
                .style("cy", function(d) { return y(d.Production); })
                .style("fill", function(d) { return z(d.id); }); 
        
            city.append("text")
                .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
                .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.Production) + ")"; })
                .attr("x", 3)
                .attr("dy", "0.35em")
                .style("font", "10px sans-serif")
                .text(function(d) { return d.id; });
        
          //append the legend
          var legend = svg.selectAll('.legend')
                  .data(entity);
              
          var legendEnter=legend
                  .enter()
                  .append('g')
                  .attr('class', 'legend')
                  .attr('id',function(d){ return d.id; });
          
            //actually add the circles to the created legend container
            legendEnter.append('circle')
                  .attr('cx', width - 50)
                  .attr('cy', function(d,i){return y.range()[1] + 15 + (i * 20);})
                  .attr('r', 7)
                  .style('fill', function(d) { 
                        return z(d.id);
                  });
                                  
              //add the legend text
              legendEnter.append('text')
                  .attr('x', width - 40)
                  .attr('y', function(d,i){return y.range()[1] + 20 + (i * 20);})
                  .text(function(d){ return d.id; });   
           */  
          var dad = svg.node().parentNode;
        return dad.innerHTML.replace(/currentColor/g, 'black');
    }
    
    
    componentDidMount() { 
        var comp = this;
        var apples = o.generateObject();
            apples.title = "Apple Market Details";  // graph title
            apples.xLabel = "year"; // x axis label
            apples.xKey = "Year"; 
            apples.yLabel = "Production lbs"; // y axis label
            apples.yKey = "Value";
            apples.dataUrl = "data/apples.csv"; // path of the data file relative to the file in which it is being called 
            apples.dataType = "csv";
            apples.data = null; 
            apples.containerId = this.props.data.title;
            apples.graphDimentions = [500, 350];
            var go = apples;
            childCont = body.append("div").attr("id", "parent" + "_" + go.containerId);
            var svg = childCont.append("svg").style("fill", "black").attr("id", go.containerId).style("width", go.graphDimentions[0] + "px").style("height", go.graphDimentions[1] + "px").style("background-color", graphBackGround);
            if(go.title) {
                svg.append("text").text(go.title).attr("x", go.graphDimentions[0]/2).attr("y", 20).style("text-anchor", "middle");
            }
            d3.csv(go.dataUrl, function(d, _, columns) {
                return d;
            }).then(function(data) {
                go.rawData = data;
                comp.setState({viz : comp.drawMultiLine(go, svg)});
                //console.log("<svg>" + svg.html() + "</svg>");
            });
            //multilineChart(apples);                  
    }

    render() {
    return (<div  dangerouslySetInnerHTML={{ __html: this.state.viz }}/>);
    }
}

export default Chart;