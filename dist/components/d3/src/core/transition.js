function d3_transition(e,t,n){d3_arraySubclass(e,d3_transitionPrototype);var r=new d3_Map,i=d3.dispatch("start","end"),s=d3_transitionEase;return e.id=t,e.time=n,e.tween=function(t,n){return arguments.length<2?r.get(t):(n==null?r.remove(t):r.set(t,n),e)},e.ease=function(t){return arguments.length?(s=typeof t=="function"?t:d3.ease.apply(d3,arguments),e):s},e.each=function(t,n){return arguments.length<2?d3_transition_each.call(e,t):(i.on(t,n),e)},d3.timer(function(o){return d3_selection_each(e,function(e,u,a){function d(s){return h.active>t?m():(h.active=t,r.forEach(function(t,n){(n=n.call(e,p,u))&&f.push(n)}),i.start.call(e,p,u),v(s)||d3.timer(v,0,n),1)}function v(n){if(h.active!==t)return m();var r=(n-l)/c,o=s(r),a=f.length;while(a>0)f[--a].call(e,o);if(r>=1)return m(),d3_transitionId=t,i.end.call(e,p,u),d3_transitionId=0,1}function m(){return--h.count||delete e.__transition__,1}var f=[],l=e.delay,c=e.duration,h=(e=e.node).__transition__||(e.__transition__={active:0,count:0}),p=e.__data__;++h.count,l<=o?d(o):d3.timer(d,l,n)})},0,n),e}var d3_transitionPrototype=[],d3_transitionNextId=0,d3_transitionId=0,d3_transitionDefaultDelay=0,d3_transitionDefaultDuration=250,d3_transitionDefaultEase=d3.ease("cubic-in-out"),d3_transitionDelay=d3_transitionDefaultDelay,d3_transitionDuration=d3_transitionDefaultDuration,d3_transitionEase=d3_transitionDefaultEase;d3_transitionPrototype.call=d3_selectionPrototype.call,d3.transition=function(e){return arguments.length?d3_transitionId?e.transition():e:d3_selectionRoot.transition()},d3.transition.prototype=d3_transitionPrototype