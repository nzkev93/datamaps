function assertLabEqual(e,t,n,r,i){(Math.abs(e.l-t)>1e-6||Math.abs(e.a-n)>1e-6||Math.abs(e.b-r)>1e-6)&&assert.fail("lab("+e.l+", "+e.a+", "+e.b+")","lab("+t+", "+n+", "+r+")",i||"expected {expected}, got {actual}",null,assertLabEqual)}require("../env");var vows=require("vows"),assert=require("assert"),suite=vows.describe("d3.lab");suite.addBatch({lab:{topic:function(){return d3.lab},"converts string channel values to numbers":function(e){assertLabEqual(e("50","-4","-32"),50,-4,-32)},"converts null channel values to zero":function(e){assertLabEqual(e(null,null,null),0,0,0)},"exposes l, a and b properties":function(e){var t=e(50,-4,-32);assert.equal(t.l,50),assert.equal(t.a,-4),assert.equal(t.b,-32)},"changing l, a or b affects the string format":function(e){var t=e(50,-4,-32);assert.equal(t+"","#3f7cad"),t.l++,assert.equal(t+"","#427eb0"),t.a++,assert.equal(t+"","#467eb0"),t.b++,assert.equal(t+"","#487eae")},'parses hexadecimal shorthand format (e.g., "#abc")':function(e){assertLabEqual(e("#abc"),75.10497524893663,-2.292114632248876,-10.528266458853786)},'parses hexadecimal format (e.g., "#abcdef")':function(e){assertLabEqual(e("#abcdef"),81.04386565274363,-3.6627002800885267,-20.442705201854984)},'parses HSL format (e.g., "hsl(210, 64%, 13%)")':function(e){assertLabEqual(e("hsl(210, 64.7058%, 13.33333%)"),12.65624852526134,.12256520883417721,-16.833209795877284)},'parses color names (e.g., "moccasin")':function(e){assertLabEqual(e("moccasin"),91.72317744746022,2.4393469358685027,26.359832514614844)},'parses and converts RGB format (e.g., "rgb(102, 102, 0)")':function(e){assertLabEqual(e("rgb(102, 102, 0)"),41.73251953866431,-10.998411255098816,48.21006600604577)},"can convert from RGB":function(e){assertLabEqual(e(d3.rgb(12,34,56)),12.65624852526134,.12256520883417721,-16.833209795877284)},"can convert from HSL":function(e){assertLabEqual(e(d3.lab(20,.8,.3)),20,.8,.3)},"can convert to RGB":function(e){assert.rgbEqual(e("steelblue").rgb(),70,130,180)},"can derive a brighter color":function(e){assertLabEqual(e("steelblue").brighter(),70.46551718768575,-4.0774710123572255,-32.19186122981343),assertLabEqual(e("steelblue").brighter(.5),61.46551718768575,-4.0774710123572255,-32.19186122981343)},"can derive a darker color":function(e){assertLabEqual(e("lightsteelblue").darker(),60.45157936968134,-1.2815839134120433,-15.210996213841522),assertLabEqual(e("lightsteelblue").darker(.5),69.45157936968134,-1.2815839134120433,-15.210996213841522)},"string coercion returns RGB format":function(e){assert.strictEqual(e("hsl(60, 100%, 20%)")+"","#666600"),assert.strictEqual(e(d3.lab(60,-4,-32))+"","#5d95c8")},"roundtrip to HSL is idempotent":function(e){assert.hslEqual(d3.hsl(e("steelblue")),d3.hsl("steelblue"))},"roundtrip to RGB is idempotent":function(e){assert.hslEqual(d3.rgb(e("steelblue")),d3.rgb("steelblue"))},"roundtrip to HCL is idempotent":function(e){assert.hslEqual(d3.hcl(e("steelblue")),d3.hcl("steelblue"))}}}),suite.export(module)