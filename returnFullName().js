let firstNames = ["Louise", "Sarah", "Anna", "Steph"];
let surnames = ["Bailey", "Parker", "Gunn"];
let firstName = "";
let surname = ""; 

function returnFullName(searchName, searchSurname) {
first: for (let i = 0; i < firstNames.length; ++i) {
           console.log(firstNames[i]);
           if (firstNames[i] == searchName) {
           firstName = firstNames[i]; 
                    } 
           else continue;
           last: for (let i = 0; i < surnames.length; ++i) { 
            console.log(surnames[i]);
            if (surnames[i] == searchSurname) {
            surname = surnames[i];
            break first;
            }
           }
}
let fullName = firstName + " " + surname;
console.log(fullName);
}