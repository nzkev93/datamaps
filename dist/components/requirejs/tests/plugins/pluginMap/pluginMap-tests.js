define("plugin",[],{load:function(e,t,n,r){t([e],function(e){n(e)})}}),define("person",[],{name:"person"}),define("employee",["plugin!person"],function(e){return{name:"employed "+e.name}}),define("application",["person"],function(e){return{name:"application",person:e}}),require({map:{"*":{person:"employee"},employee:{person:"person"}}},["application"],function(e){doh.register("pluginMap",[function(n){n.is("application",e.name),n.is("employed person",e.person.name)}]),doh.run()})