function longestWord(string) {
//match() returns an array. I was going wrong by trying to split() what was ALREADY an array.
   let arraySplit = string.match(/[a-z]+/gi); 
   let longest = "";
   for (let i = 0; i < arraySplit.length; i++) {
      if (arraySplit[i].length > longest.length) {
      longest = arraySplit[i];
      }
   }
   return longest;
   //console.log(longest);
}

let promptString = prompt("enter a string", "");
let longest = longestWord(`${promptString}`);
//let body = document.querySelector("body");
document.write(longest);
//body.innerHTML = ` ${longest} `;

function shortestWord(string) {
   let arraySplit = string.match(/[a-z]+/gi); 
   let shortest = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"; //need to find a better and more elegant way to do this ^
   for (let i = 0; i < arraySplit.length; i++) {
      if (arraySplit[i].length < shortest.length) {
      shortest = arraySplit[i];
      }
   } 
   return shortest;
   //console.log(shortest);   
}

let promptString2 = prompt("enter a string", "");
let shortest = shortestWord(`${promptString2}`);
document.write(shortest);
