var inp1 = document.querySelector(".c1") ;
var inp2 = document.querySelector(".c2") ;
var body = document.querySelector("body") ;

var color = function()
{	body.style.background = "linear-gradient(to right," + inp1.value + "," + inp2.value ;	
}

inp1.addEventListener("input", color ) ;

inp2.addEventListener("input", color ) ;

