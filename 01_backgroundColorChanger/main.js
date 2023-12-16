// let grey=document.getElementById("grey")
// console.log(grey);
// grey.addEventListener("click", function () {
//   document.body.style.backgroundColor = "grey";
//   document.body.style.color="white"
// });
// let white = document.getElementById("white");
// console.log(white);
// white.addEventListener("click", function () {
//   document.body.style.backgroundColor = "white";
//   document.body.style.color = "black";
// });
// let blue = document.getElementById("blue");
// console.log(blue);
// blue.addEventListener("click", function () {
//   document.body.style.backgroundColor = "blue";
//   document.body.style.color = "white";
// });
// let yellow = document.getElementById("yellow");
// console.log(yellow);
// yellow.addEventListener("click", function () {
//   document.body.style.backgroundColor = "yellow";
//  document.body.style.color = "black";
// });



const button = document.querySelectorAll(".button");
const body=document.querySelector('body') 

console.log(button);
button.forEach((button)=>{
 button.addEventListener("click",(e)=>{
  console.log(e);
  console.log(e.target.id);
let color=e.target.id
console.log("color",color);

if (color === "grey") {
  body.style.backgroundColor = color;
  console.log("inside");
} else if (color === "white") {
  body.style.backgroundColor = color;
} else if (color === "blue") {
  body.style.backgroundColor = color;
} else if (color === "yellow") {
  body.style.backgroundColor = color;
}

})
})