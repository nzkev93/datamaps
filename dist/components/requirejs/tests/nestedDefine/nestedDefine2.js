require(["one"],function(e){define("nested",["two"],function(e){return{name:"nested",two:e}}),require(["nested"],function(t){doh.register("nestedDefine2",[function(r){r.is("one",e.name),r.is("two",t.two.name),r.is("nested",t.name)}]),doh.run()})})