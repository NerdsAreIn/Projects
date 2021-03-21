function stringDownUp(string) {
   for (i = 0; string.length > i; i++) {
   let printString = string.slice(-0, string.length-i);
   console.log(printString);
}
 for (i = 0; string.length >= i; i++) {
  let printString = string.substr(0, i);
  console.log(printString);
}
}
stringDownUp("Hello"); 