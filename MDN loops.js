let output = document.querySelector('.output');
output.innerHTML = '';

function countDown() {

for (let i = 10; i >= 0; i--) {
let text;
 if (i === 10) {
  text = "Countdown 10, ";
} 
 else if (i === 0) {
  text = "Blast off!";
}
 else {
text = i + ", ";
}

const para = document.createElement('p');
output.appendChild(para);
para.textContent = text;
para.style.display = "inline";
}
}

countDown();

//Next loop:

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

function assembleGuestList() {
let i = 0;
while (i < people.length) {
  if (people[i] === "Phil") {
    refused.textContent += people[i] + ", ";
} 
  else if (people[i] === "Lola") {
   refused.textContent += people[i] + ",";
}
  else if (i === people.length - 1) {
    admitted.textContent += people[i] + ".";
} 
  else {
    admitted.textContent += people[i] + ", ";
}

i++;
}
}

assembleGuestList();

//FIXME: failed attempts to create a more elegant solution to the above:

let refusedContent = refused.textContent;
let finalComma = refusedContent.slice(-2);
refusedContent = refusedContent.replace(finalComma, ".");

//const regEx = /a,/;
//refused.replace(regEx, "a.");
