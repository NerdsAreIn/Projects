let myString = prompt("enter a string", "");
let testArray = myString.split(" ");
//let testArray = ["hello", "HOW", "ArE", "yOU"];
testArray.forEach(sentenceCase);

function sentenceCase(string) {
// examples of method chaining:
let sentenceCaseString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
console.log(sentenceCaseString);
return sentenceCaseString;
}

/* The above works, but I don't know how to combine the separate words it outputs into a single string. Experiments with <concat()> and <join()> have proved unsuccessful. I also don't fully understand <forEach()> - specifically its parameters. This is something I want to get a handle on.

testArray.forEach(sentenceCase(testArrayItem, index)); */

