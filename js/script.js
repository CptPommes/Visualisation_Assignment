var w = 600;
var h = 900;
var barPadding = 5;

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h+30);

var dataset =[ 23, 6, 18, 32, 17, 25, 9, 21, 4, 8 ];

svg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 0)
    .attr("y2", h+15)
    .attr("stroke-width",20 )
    .attr("stroke", "black")

svg.append("line")
    .attr("x1", 0)
    .attr("y1", h+15)
    .attr("x2", w)
    .attr("y2", h+15)
    .attr("stroke-width",10 )
    .attr("stroke", "black")


svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", 15)
    .attr("height", h / dataset.length - barPadding)
    .attr("width", function(d) {
        return d *3;
    })
    .attr("y", function(d, i) {
        return i * (h / dataset.length);
    })
    .attr("fill", function(d) {
        return "rgb(0, 0, " + (d * 10) + ")";
    });


svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return i * (h / dataset.length) + (h / dataset.length - barPadding) / 2 +15;
    })
    .attr("x", function(d) {
        return (d*4) + 25;
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "15px")
    .attr("fill", "black")
    .attr("text-anchor", "middle");