//FIXME:
let n = prompt("Enter an upper limit for the number range", "");
for (let i = 2; i <=n; i++) {
for (let x = i; x < 10; x++) {
if (i % x === 0) {
  continue;
} 
}
alert(i);
}
let n = prompt("Enter an upper limit for the number range", "");
for (let i = 2; i <=n; i++) {
for (let x = i; x < 10; x++) {
if (i % x !== 0) {
  alert(i);
} 
}
}