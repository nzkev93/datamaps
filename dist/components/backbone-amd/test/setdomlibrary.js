$(document).ready(function(e){var t=function(){return{attr:function(){return"spam"},html:function(){return"spam"},hasClass:function(){return"spam"}}},n={id:"test-setdomlibrary",className:"test-setdomlibrary"};module("Backbone.setDomLibrary",{teardown:function(){Backbone.setDomLibrary(e)}}),test("Changing jQuery library to custom library",function(){Backbone.setDomLibrary(t);var r=new Backbone.View(n);ok(r.$el.hasClass("test-setdomlibrary")==="spam"),Backbone.setDomLibrary(e);var r=new Backbone.View(n);ok(r.$el.hasClass("test-setdomlibrary"))})})