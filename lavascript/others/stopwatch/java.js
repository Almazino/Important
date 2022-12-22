var but = document.getElementById("button");
var but1 = document.getElementById("stop");
var but2 = document.getElementById("reset");
var a1 = document.getElementById("hour");
var a2 = document.getElementById("minut");
var a3 = document.getElementById("second");
function timer(){
    var col=0;
    var timeInterval =setInterval(function(){
        col++;    
        console.log(col);
        a3.value=col%60;
        var f=(col%3600);
        a2.value=(f-(f%60))/60
        a1.value=(col-(col%3600))/3600
        but1.addEventListener("click",function() {
            clearInterval(timeInterval)
        })
        but2.addEventListener("click",function() {
            col=0;
            a1.value="0"
            a2.value="0"
            a3.value="0"
        })
    },1000)
}
but.addEventListener("click",timer);