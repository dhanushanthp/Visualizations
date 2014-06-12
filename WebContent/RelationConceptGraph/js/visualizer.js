function generateGraph(data){
var width = 1170,
    height = 900;

var color = d3.scale.category20();

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(90)
    .size([width, height]);

var svg = d3.select("#graphMap").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("json.json",function(error, graph) {
  force
      .nodes(data.nodes)
      .links(data.links)
      .start();

  var link = svg.selectAll(".link")
      .data(data.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.selectAll(".node")
      .data(data.nodes)
      .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  	node.append("circle")
  		.attr("r", 5)
  		.style("fill", function(d) { return color(d.group); });

  	node.append("text")
  		.attr("dx", 15)
  		.attr("dy", ".35em")
  		.text(function(d) { return d.name; });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});
}