function normal(){var e=0,t=0,n,r;do e=Math.random()*2-1,t=Math.random()*2-1,n=e*e+t*t;while(n==0||n>1);return r=Math.sqrt(-2*Math.log(n)/n),e*r}function normal1(e,t){return function(){return e+t*normal()}}function normal3(e){return function(){var t=Math.random(),n=t<e[0][2]?0:t<e[0][2]+e[1][2]?1:2,r=e[n];return r[0]+Math.sqrt(r[1])*normal()}}