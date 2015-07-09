require! {
  'd3-browserify': d3
  'zepto-browserify': { $ }
  underscore: _  
}


$('document').ready ->
  console.log d3

  circle = d3.selectAll("circle");
  console.log circle
  circle.style("fill", "steelblue");
  circle.attr("r", 30);
  
  data = [ 1, 35, 52, 14, 44 ]
  body = d3.select "body"
  div = body.append("div")
  div.html("Hello, world!")
  
  d3.select(".chart")
    .selectAll("div")
      .data(data)
    .enter().append("div")
      .style("width", (d) -> d * 10 + "px")
      .text((d) -> d)

