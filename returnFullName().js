let names = {
firstNames: ["Louise", "Sarah", "Anna", "Steph"],
surnames: ["Bailey", "Parker", "Gunn"],
}
let firstName = "";
let surname = ""; 
function returnFullName(searchName) {
  let nameArray = searchName.split(" ");
  first: for (let i = 0; i < names.firstNames.length; ++i) {
           console.log(names.firstNames[i]);
           if (names.firstNames[i] == nameArray[0]) {
           firstName = names.firstNames[i]; 
                    } 
           else continue;
           last: for (let i = 0; i < names.surnames.length; ++i) { 
            console.log(names.surnames[i]);
            if (names.surnames[i] == nameArray[1]) {
            surname = names.surnames[i];
        //Breaks out of both loops now full name has been found: 
            break first;
            }
           }
}
let fullName = firstName + " " + surname;
return fullName;
console.log(fullName);
}