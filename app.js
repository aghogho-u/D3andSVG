var minYear = birthData[0].year;
var maxYear = birthData[birthData.length-1].year;

var width = 600;
var height = 600;
var barPadding = 10
var num = 12
var barWidth = width/num - barPadding;


d3.select("input")
  .attr("min", minYear)
  .attr("max", maxYear)
  .attr("value", minYear);

d3.select("svg")
  .attr("width", width)
  .attr("height", height)
.selectAll("rect")
.data(birthData.filter(d=>d.year === minYear))
.enter()
  .append("rect")
  .attr("width", barWidth)
  .attr("height", d => d.births/2.5e6 * height)
  .attr("y", d => height - d.births/2.5e6 * height)
  .attr("x", (d,i)=> (barWidth + barPadding) * i)
  .attr("fill", "purple");

d3.select("input")
  .on("input", d => {
      var year = +d3.event.target.value;
      d3.selectAll("rect")
        .data(birthData.filter(d => d.year === year))
        .attr("height", d => d.births/2.5e6 * height)
        .attr("y", d => height - d.births/2.5e6 * height);
  })
