require(["require","uno"],function(e,t){doh.register("depoverlap",[function(n){var r=document.getElementsByTagName("script"),i,s={},o,u,a;for(var i=r.length-1;i>-1;i--)o=r[i].getAttribute("data-requiremodule"),o&&(o in s||(s[o]=0),s[o]+=1);for(prop in s)n.is(1,s[prop]);n.is("uno",t.name),a=t.doSomething(),n.is("dos",a.dosName),n.is("tres",a.tresName)}]),doh.run()})