function update(){vertices[0]=d3.mouse(this),svg.selectAll("path").data(d3.geom.voronoi(vertices).map(function(e){return"M"+e.join("L")+"Z"})).filter(function(e){return this.getAttribute("d")!=e}).attr("d",function(e){return e})}var width=960,height=500,vertices=d3.range(100).map(function(e){return[Math.random()*width,Math.random()*height]}),svg=d3.select("#chart").append("svg").attr("width",width).attr("height",height).attr("class","PiYG").on("mousemove",update);svg.selectAll("path").data(d3.geom.voronoi(vertices)).enter().append("path").attr("class",function(e,t){return t?"q"+t%9+"-9":null}).attr("d",function(e){return"M"+e.join("L")+"Z"}),svg.selectAll("circle").data(vertices.slice(1)).enter().append("circle").attr("transform",function(e){return"translate("+e+")"}).attr("r",2)