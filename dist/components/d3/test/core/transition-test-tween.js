require("../env");var assert=require("assert");module.exports={topic:function(){function u(u,a){return t.push(u),n.push(a),r.push(this)>=2&&e(null,{selection:s,transition:o,data:t,index:n,context:r,fails:i}),a&&function(e){this.textContent=d3.hsl(230,.5,e)+""}}var e=this.callback,t=[],n=[],r=[],i=0,s=d3.select("body").append("div").selectAll("div").data(["red","green"]).enter().append("div").text(function(e){return d3.rgb(e)+""}),o=s.transition().tween("text",function(){++i}).tween("text",u)},"defines the corresponding tween":function(e){assert.typeOf(e.transition.tween("text"),"function")},"the last tween takes precedence":function(e){assert.equal(e.fails,0)},"invokes the tween function":function(e){assert.deepEqual(e.data,["red","green"],"expected data, got {actual}"),assert.deepEqual(e.index,[0,1],"expected data, got {actual}"),assert.domEqual(e.context[0],e.selection[0][0],"expected this, got {actual}"),assert.domEqual(e.context[1],e.selection[0][1],"expected this, got {actual}")},end:{topic:function(e){var t=this.callback;e.transition.each("end",function(n,r){r>=1&&t(null,e)})},"uses the returned tweener":function(e){assert.equal(e.selection[0][1].textContent,"#ffffff")},"does nothing if the tweener is falsey":function(e){assert.equal(e.selection[0][0].textContent,"#ff0000")}}}