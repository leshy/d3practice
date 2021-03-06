// Generated by LiveScript 1.4.0
(function(){
  var d3, $, _;
  d3 = require('d3-browserify');
  $ = require('zepto-browserify').$;
  _ = require('underscore');
  $('document').ready(function(){
    var circle, data, body, div;
    console.log(d3);
    circle = d3.selectAll("circle");
    console.log(circle);
    circle.style("fill", "steelblue");
    circle.attr("r", 30);
    data = [1, 35, 52, 14, 44];
    body = d3.select("body");
    div = body.append("div");
    div.html("Hello, world!");
    return d3.select(".chart").selectAll("div").data(data).enter().append("div").style("width", function(d){
      return d * 10 + "px";
    }).text(function(d){
      return d;
    });
  });
}).call(this);
