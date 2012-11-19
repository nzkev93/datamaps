require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.permute");suite.addBatch({permute:{topic:function(){return d3.permute},"permutes according to the specified index":function(e){assert.deepEqual(e([3,4,5],[2,1,0]),[5,4,3]),assert.deepEqual(e([3,4,5],[2,0,1]),[5,3,4]),assert.deepEqual(e([3,4,5],[0,1,2]),[3,4,5])},"does not modify the input array":function(e){var t=[3,4,5];e(t,[2,1,0]),assert.deepEqual(t,[3,4,5])},"can duplicate input values":function(e){assert.deepEqual(e([3,4,5],[0,1,0]),[3,4,3]),assert.deepEqual(e([3,4,5],[2,2,2]),[5,5,5]),assert.deepEqual(e([3,4,5],[0,1,1]),[3,4,4])},"can return more elements":function(e){assert.deepEqual(e([3,4,5],[0,0,1,2]),[3,3,4,5]),assert.deepEqual(e([3,4,5],[0,1,1,1]),[3,4,4,4])},"can return fewer elements":function(e){assert.deepEqual(e([3,4,5],[0]),[3]),assert.deepEqual(e([3,4,5],[1,2]),[4,5]),assert.deepEqual(e([3,4,5],[]),[])},"can return undefined elements":function(e){var t=e([3,4,5],[10]);assert.equal(t.length,1),assert.isUndefined(t[0]);var n=e([3,4,5],[-1]);assert.equal(n.length,1),assert.isUndefined(n[0]);var r=e([3,4,5],[0,-1]);assert.equal(r.length,2),assert.equal(r[0],3),assert.isUndefined(r[1])}}}),suite.export(module)