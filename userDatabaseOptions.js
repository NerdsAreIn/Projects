//Personalised version of code found at: https://web.archive.org/web/20190211152543/https://javascriptissexy.com/beautiful-javascript-easily-create-chainable-cascading-methods-for-expressiveness/
let userDatabase = [
    { firstName: "aNna", lastName: "PaRKER", age: 30, email: "annacantthinkofagoodaddress@hotmail.co.uk", ID: 01},
    { firstName: "louise", lastName: "pARKER", age: 59, email: "louise@louiseparker.co.uk"}
];

function sentenceCase(string) {
let sentenceCaseString = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
console.log(sentenceCaseString);
return sentenceCaseString;
}

let userOptions = {

currentUser: "",

findUser: function (userEmail) {
//Don't understand what is happening below. Two values assigned to a single variable?
let arrayLength = userDatabase.length, i;
for (i = arrayLength - 1; i >= 0; i--) {
if (userDatabase[i].email === userEmail) {
this.currentUser = userDatabase[i];
break;
}
}
return this;
},

formatName: function () {
if (this.currentUser) {
this.currentUser.fullName = sentenceCase(this.currentUser.firstName) + sentenceCase(this.currentUser.lastName);

}
return this;
}
}
