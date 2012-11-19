require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("ns");suite.addBatch({prefix:{topic:function(){return d3.ns.prefix},"svg is http://www.w3.org/2000/svg":function(e){assert.equal(e.svg,"http://www.w3.org/2000/svg")},"xhtml is http://www.w3.org/1999/xhtml":function(e){assert.equal(e.xhtml,"http://www.w3.org/1999/xhtml")},"xlink is http://www.w3.org/1999/xlink":function(e){assert.equal(e.xlink,"http://www.w3.org/1999/xlink")},"xml is http://www.w3.org/XML/1998/namespace":function(e){assert.equal(e.xml,"http://www.w3.org/XML/1998/namespace")},"xmlns is http://www.w3.org/2000/xmlns/":function(e){assert.equal(e.xmlns,"http://www.w3.org/2000/xmlns/")}}}),suite.addBatch({qualify:{topic:function(){return d3.ns.qualify},"local name returns name":function(){assert.equal(d3.ns.qualify("local"),"local")},"known qualified name returns space and local":function(){var e=d3.ns.qualify("svg:path");assert.equal(e.space,"http://www.w3.org/2000/svg"),assert.equal(e.local,"path")},"unknown qualified name returns name":function(){assert.equal(d3.ns.qualify("foo:bar"),"bar")},"known local name returns space and local":function(){var e=d3.ns.qualify("svg");assert.equal(e.space,"http://www.w3.org/2000/svg"),assert.equal(e.local,"svg")},"names that collide with built-ins are ignored":function(e){assert.equal(e("hasOwnProperty:test"),"test")}}}),suite.export(module)