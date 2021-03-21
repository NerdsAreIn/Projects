let b = [];
let c = [];
function towersOfHanoi() {
let rings = ["1", "2", "3", "4"];
for (let i = 0; rings[i] <= rings.length; ++i) {
  //let x = 1;
  let n = rings[i];
  document.write(n);
  if (n % 2 == 0 && b.length == 0) {
b[b.length] = n;
  }
else if (n % 2 == 1 && c.length == 0) {
c[c.length] = n;
}
else if (b.length == 1 && c.length >= 1) {
b[b.length] = c;
c = [];
c += n;  
}
else if (b.length > 1 && c.length <= 1) {
 c += b;
 b = [];
 b += n;
}
document.write(`b is ${b}, `);
document.write(`c is ${c}, `);
//x++;
    }
alert(b);
alert(c);
}
towersOfHanoi();