require("../env");var assert=require("assert");module.exports={topic:function(){return d3.select("body").append("div").transition()},"has a positive integer id":function(e){var t=e.id;assert.isTrue(t>0),assert.equal(~~t,t)},"increases monotonically across transitions":function(e){var t=d3.select("body").append("div").transition(),n=d3.select("body").append("div").transition();assert.isTrue(n.id>t.id)}}