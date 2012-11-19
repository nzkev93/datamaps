$(document).ready(function(){var e=$.ajax,t=null,n=Backbone.Collection.extend({url:function(){return"/library"}}),r,i={title:"The Tempest",author:"Bill Shakespeare",length:123};module("Backbone.sync",{setup:function(){r=new n,$.ajax=function(e){t=e},r.create(i,{wait:!1})},teardown:function(){$.ajax=e}}),test("sync: read",function(){r.fetch(),equal(t.url,"/library"),equal(t.type,"GET"),equal(t.dataType,"json"),ok(_.isEmpty(t.data))}),test("sync: passing data",function(){r.fetch({data:{a:"a",one:1}}),equal(t.url,"/library"),equal(t.data.a,"a"),equal(t.data.one,1)}),test("sync: create",function(){equal(t.url,"/library"),equal(t.type,"POST"),equal(t.dataType,"json");var e=JSON.parse(t.data);equal(e.title,"The Tempest"),equal(e.author,"Bill Shakespeare"),equal(e.length,123)}),test("sync: update",function(){r.first().save({id:"1-the-tempest",author:"William Shakespeare"}),equal(t.url,"/library/1-the-tempest"),equal(t.type,"PUT"),equal(t.dataType,"json");var e=JSON.parse(t.data);equal(e.id,"1-the-tempest"),equal(e.title,"The Tempest"),equal(e.author,"William Shakespeare"),equal(e.length,123)}),test("sync: update with emulateHTTP and emulateJSON",function(){Backbone.emulateHTTP=Backbone.emulateJSON=!0,r.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),equal(t.url,"/library/2-the-tempest"),equal(t.type,"POST"),equal(t.dataType,"json"),equal(t.data._method,"PUT");var e=JSON.parse(t.data.model);equal(e.id,"2-the-tempest"),equal(e.author,"Tim Shakespeare"),equal(e.length,123),Backbone.emulateHTTP=Backbone.emulateJSON=!1}),test("sync: update with just emulateHTTP",function(){Backbone.emulateHTTP=!0,r.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),equal(t.url,"/library/2-the-tempest"),equal(t.type,"POST"),equal(t.contentType,"application/json");var e=JSON.parse(t.data);equal(e.id,"2-the-tempest"),equal(e.author,"Tim Shakespeare"),equal(e.length,123),Backbone.emulateHTTP=!1}),test("sync: update with just emulateJSON",function(){Backbone.emulateJSON=!0,r.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),equal(t.url,"/library/2-the-tempest"),equal(t.type,"PUT"),equal(t.contentType,"application/x-www-form-urlencoded");var e=JSON.parse(t.data.model);equal(e.id,"2-the-tempest"),equal(e.author,"Tim Shakespeare"),equal(e.length,123),Backbone.emulateJSON=!1}),test("sync: read model",function(){r.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),r.first().fetch(),equal(t.url,"/library/2-the-tempest"),equal(t.type,"GET"),ok(_.isEmpty(t.data))}),test("sync: destroy",function(){r.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),r.first().destroy({wait:!0}),equal(t.url,"/library/2-the-tempest"),equal(t.type,"DELETE"),equal(t.data,null)}),test("sync: destroy with emulateHTTP",function(){r.first().save({id:"2-the-tempest",author:"Tim Shakespeare"}),Backbone.emulateHTTP=Backbone.emulateJSON=!0,r.first().destroy(),equal(t.url,"/library/2-the-tempest"),equal(t.type,"POST"),equal(JSON.stringify(t.data),'{"_method":"DELETE"}'),Backbone.emulateHTTP=Backbone.emulateJSON=!1}),test("sync: urlError",function(){var e=new Backbone.Model;raises(function(){e.fetch()}),e.fetch({url:"/one/two"}),equal(t.url,"/one/two")}),test("#1052 - `options` is optional.",function(){var e=new Backbone.Model;e.url="/test",Backbone.sync("create",e)})})