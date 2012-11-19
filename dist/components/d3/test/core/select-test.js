require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.select");suite.addBatch({select:{topic:function(){var e=d3.select("body").html("");return e.append("span").attr("class","f00").attr("id","b4r").attr("name","b4z"),e.append("div").attr("class","foo").attr("id","bar").attr("name","baz"),e},"selects by element name":function(){var e=d3.select("div");assert.equal(e[0][0].tagName,"DIV")},"selects by class name":function(){var e=d3.select(".foo");assert.equal(e[0][0].className,"foo")},"selects by id":function(){var e=d3.select("div#bar");assert.equal(e[0][0].id,"bar")},"selects by attribute value":function(){var e=d3.select("[name=baz]");assert.equal(e[0][0].getAttribute("name"),"baz")},"selects by node":function(){var e=d3.select(document.body.lastChild);assert.isTrue(e[0][0]===document.body.lastChild),assert.lengthOf(e,1),assert.lengthOf(e[0],1)}}}),suite.export(module)