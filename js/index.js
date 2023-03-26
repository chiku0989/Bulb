function on() {
   document.getElementById("on").classList.remove("invisible");
   document.getElementById("off").classList.add("invisible");
}

function off() {
    document.getElementById("on").classList.add("invisible");
    document.getElementById("off").classList.remove("invisible"); 
}