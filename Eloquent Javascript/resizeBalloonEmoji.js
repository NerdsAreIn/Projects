<script>
const p = document.createElement("p");
const balloon = document.createTextNode("🎈");
const pop = document.createTextNode("💥");
p.appendChild(balloon);  
p.style.fontSize = "20px"; 
let balloonSize = p.style.fontSize;  

/*function increaseSize() {
  balloonSize = parseInt(balloonSize) + (parseInt(balloonSize)/10) + "px";
  return balloonSize;
}*/
  
document.body.addEventListener("keydown", (event) => {
     if (event.code == "ArrowUp") {
        event.preventDefault();
       
        //p.style.fontSize = increaseSize();
        balloonSize = parseInt(balloonSize) + (parseInt(balloonSize)/10) + "px";
        console.log(balloonSize);
      }
// NB: the downsize function is working, while the upsize function only works once. Also, if you toggle from arrow-down to
// arrow-up, the balloon returns abruptly to its original size, while maintaining its modified size for arrow-down 
     else if (event.code == "ArrowDown") {
		event.preventDefault();
        balloonSize = parseInt(balloonSize) - (parseInt(balloonSize)/10) + "px";
        console.log(balloonSize);
     }
  p.style.fontSize = balloonSize;
  return balloonSize;
  });