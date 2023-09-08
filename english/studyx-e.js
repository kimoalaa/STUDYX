// javascript code
var num = 1;
showText(num);
// function show text
function showText(e){
    var i ;
    const p = document.querySelectorAll(".content p");
    const ball = document.querySelectorAll(".ball li");
    if(e > p.length){
        num = 1;
    }
    if(e < 1){
        num = p.length;
    }
    for(i = 0; i < p.length; i++){
        p[i].style.display = "none";
    }
    for(i = 0; i < ball.length; i++){
        ball[i].style.background = "none";
    }
    p[num-1].style.display = "block";
    ball[num-1].style.background = "#fff";
}
// fainal function 
function work(){
    showText(num+=1);
}
// loops of function
setInterval(function(){
    work();
} , 5000);

