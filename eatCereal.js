//iterative version:
function eatCereal(biteAmount) {
while (biteAmount > 0) {
let eatBite = function() {
 biteAmount = biteAmount - 1;
console.log(biteAmount);
}
eatBite();
}
(function(){
return "Cereal is finished!";
    })(); 
}
eatCereal(10);

//recursive version:
function eatCereal2(biteAmount) {
    if (biteAmount == 0) {
        alert("Cereal is finished!")
    }
    else {
        biteAmount--;
        console.log(biteAmount);
        eatCereal2(biteAmount);
    }
}
eatCereal2(10);


