
var but1=document.getElementById("plus");
var but=document.getElementById("ravno");
var text=document.getElementById("otvet");
var hour = document.getElementById("hour");
var minut = document.getElementById("minut");

function add( ) {
    var hourValue = +hour.value;
    console.log(hourValue);
    var minutValue = +minut.value;
    console.log(minutValue);
    console.log(hourValue+minutValue)
    text.innerHTML=hourValue+minutValue;
}

but.addEventListener("click",add);
but1.addEventListener("click",add);