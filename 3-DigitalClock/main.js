let clock = document.querySelector("#clock");
let currentDate = document.querySelector("#date");
console.log(currentDate);
setInterval(function(){
let date=new Date()
clock.innerHTML=date.toLocaleTimeString()
currentDate.innerHTML = date.toLocaleDateString();
},1000)