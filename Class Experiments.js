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