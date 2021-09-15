class Person {
constructor(sex, age, ethnicity){
this.sex = sex,
this.age = age,
this.ethnicity = ethnicity
}
Woman() {
this.gonads = "ovaries";
this.chromosomes = "XX";
return this;
}
Man() {
this.gonads = "testes";
this.chromosomes = "XY";
return this;
}
determineSex() {
if (this.sex == "female"){
this.Woman();
this.is_a_Woman = true;
}
if (this.sex == "male"){
this.Man();
this.is_a_Man = true;
}
return this;
}
} 

~~~~~~~

// cat object prototype/class :

class Cat {
constructor (name, breed, color) {
this.name = name;
this.breed = breed;
this.color = color;
}
greeting(){
console.log(`Hello, said ${this.name} the ${this.breed}.`);
}
}

let cat1 = new Cat('Bert', 'Cymric', 'white');
let cat2 = new Cat("Mischa", "Siamese", "cream");

let para1 = document.createElement("p");
let para2 = document.createElement("p");
para1.textContent = cat1.greeting();
para2.textContent = cat2.greeting();



