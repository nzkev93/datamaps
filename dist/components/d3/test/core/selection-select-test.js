require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("selection.select");suite.addBatch({"select(body)":{topic:function(){var e=d3.select("body").html("");return e.append("div").attr("class","first"),e.append("div").attr("class","second"),e},"selects the first matching element":function(e){var t=e.select("div");assert.isTrue(t[0][0]===document.body.firstChild),assert.equal(t.length,1),assert.equal(t[0].length,1),assert.equal(t.attr("class"),"first")},"propagates parent node to the selected elements":function(e){var t=e.select("div");assert.isNotNull(t[0].parentNode),assert.isTrue(t[0].parentNode===document.documentElement),assert.isTrue(t[0].parentNode===e[0].parentNode)},"propagates data to the selected elements":function(e){var t=new Object,n=e.data([t]).select("div");assert.strictEqual(n[0][0].__data__,t)},"does not propagate data if no data was specified":function(e){delete document.body.__data__;var t=new Object,n=e.select("div").data([t]);n=e.select("div"),assert.strictEqual(n[0][0].__data__,t),assert.isUndefined(document.body.__data__)},"returns null if no match is found":function(e){var t=e.select("span");assert.equal(t[0][0],null),assert.equal(t.length,1),assert.equal(t[0].length,1)},"can select via function":function(e){e.append("foo");var t={},n=[],r=[],i=[],s=e.data([t]).select(function(e,t){return n.push(e),r.push(t),i.push(this),this.firstChild});assert.deepEqual(n,[t],"expected data, got {actual}"),assert.deepEqual(r,[0],"expected index, got {actual}"),assert.domEqual(i[0],document.body,"expected this, got {actual}"),assert.domEqual(s[0][0],document.body.firstChild),delete document.body.__data__}}}),suite.addBatch({"selectAll(div)":{topic:function(){var e=d3.select("body").html("").selectAll("div").data(d3.range(2)).enter().append("div");return e.append("span").attr("class","first"),e.append("span").attr("class","second"),e},"selects the first matching element":function(e){var t=e.select("span");assert.isTrue(t[0][0].parentNode===e[0][0]),assert.isTrue(t[0][1].parentNode===e[0][1]),assert.equal(t.length,1),assert.equal(t[0].length,2),assert.equal(t.attr("class"),"first")},"propagates parent node to the selected elements":function(e){var t=e.select("span");assert.isNotNull(t[0].parentNode),assert.isTrue(t[0].parentNode===document.body),assert.isTrue(t[0].parentNode===e[0].parentNode)},"propagates data to the selected elements":function(e){var t=new Object,n=e.data([t]).select("span");assert.strictEqual(n[0][0].__data__,t)},"does not propagate data if no data was specified":function(e){delete e[0][0].__data__,delete e[0][1].__data__;var t=new Object,n=new Object,r=e.select("span").data([t,n]);r=e.select("span"),assert.strictEqual(r[0][0].__data__,t),assert.strictEqual(r[0][1].__data__,n),assert.isUndefined(e[0][0].__data__),assert.isUndefined(e[0][1].__data__)},"returns null if no match is found":function(e){var e=e.select("div");assert.equal(e[0][0],null),assert.equal(e[0][1],null),assert.equal(e.length,1),assert.equal(e[0].length,2)},"ignores null nodes":function(e){var t=d3.selectAll("div");t[0][1]=null;var n=t.select("span");assert.equal(n.length,1),assert.equal(n[0].length,2),assert.isTrue(n[0][0].parentNode===e[0][0]),assert.isNull(n[0][1])},"can select via function":function(e){var t=[],n=[],r=[],i=e.data(["a","b"]).select(function(e,i){return t.push(e),n.push(i),r.push(this),this.firstChild});assert.deepEqual(t,["a","b"],"expected data, got {actual}"),assert.deepEqual(n,[0,1],"expected index, got {actual}"),assert.domEqual(r[0],e[0][0],"expected this, got {actual}"),assert.domEqual(r[1],e[0][1],"expected this, got {actual}"),assert.domEqual(i[0][0],e[0][0].firstChild),assert.domEqual(i[0][1],e[0][1].firstChild)}}}),suite.export(module)