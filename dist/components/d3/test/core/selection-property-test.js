require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("selection.property");suite.addBatch({"select(body)":{topic:function(){return d3.select("body").html("")},"sets a property as a string":function(e){e.property("bgcolor","red"),assert.equal(document.body.bgcolor,"red")},"sets a property as a number":function(e){e.property("opacity",1),assert.equal(document.body.opacity,"1")},"sets a property as a function":function(e){e.property("bgcolor",function(){return"orange"}),assert.equal(document.body.bgcolor,"orange")},"sets properties as a map of constants":function(e){e.property({bgcolor:"purple",opacity:.41}),assert.equal(document.body.bgcolor,"purple"),assert.equal(document.body.opacity,.41)},"sets properties as a map of functions":function(e){e.data(["cyan"]).property({bgcolor:String,opacity:function(e,t){return t}}),assert.equal(document.body.bgcolor,"cyan"),assert.equal(document.body.opacity,0)},"gets a property value":function(e){document.body.bgcolor="yellow",assert.equal(e.property("bgcolor"),"yellow")},"removes a property as null":function(e){e.property("bgcolor","yellow").property("bgcolor",null),assert.isFalse("bgcolor"in document.body)},"removes a property as a function":function(e){e.property("bgcolor","yellow").property("bgcolor",function(){return null}),assert.isFalse("bgcolor"in document.body)},"removes properties as a map of nulls":function(e){document.body.bgcolor="red",e.property({bgcolor:null}),assert.isFalse("bgcolor"in document.body)},"removes properties as a map of functions that return null":function(e){document.body.bgcolor="red",e.property({bgcolor:function(){}}),assert.isFalse("bgcolor"in document.body)},"returns the current selection":function(e){assert.isTrue(e.property("bgcolor","yellow")===e)}}}),suite.addBatch({"selectAll(div)":{topic:function(){return d3.select("body").html("").selectAll("div").data(d3.range(2)).enter().append("div")},"sets a property as a string":function(e){e.property("bgcolor","red"),assert.equal(e[0][0].bgcolor,"red"),assert.equal(e[0][1].bgcolor,"red")},"sets a property as a number":function(e){e.property("opacity",.4),assert.equal(e[0][0].opacity,"0.4"),assert.equal(e[0][1].opacity,"0.4")},"sets a property as a function":function(e){e.property("bgcolor",d3.interpolateRgb("brown","steelblue")),assert.equal(e[0][0].bgcolor,"#a52a2a"),assert.equal(e[0][1].bgcolor,"#4682b4")},"gets a property value":function(e){e[0][0].bgcolor="purple",assert.equal(e.property("bgcolor"),"purple")},"removes a property as null":function(e){e.property("bgcolor","yellow").property("bgcolor",null),assert.isFalse("bgcolor"in e[0][0]),assert.isFalse("bgcolor"in e[0][1])},"removes a property as a function":function(e){e.property("bgcolor","yellow").property("bgcolor",function(){return null}),assert.isFalse("bgcolor"in e[0][0]),assert.isFalse("bgcolor"in e[0][1])},"ignores null nodes":function(e){var t=d3.selectAll("div");t[0][1]=null,t.property("bgcolor",null).property("bgcolor","red"),assert.equal(e[0][0].bgcolor,"red"),assert.isFalse("bgcolor"in e[0][1])},"returns the current selection":function(e){assert.isTrue(e.property("bgcolor","yellow")===e)}}}),suite.export(module)