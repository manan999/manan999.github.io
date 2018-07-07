var btn = document.querySelector(".add") ;
var enter = document.querySelector("input") ;
var ul = document.querySelector("ul") ;
var arr = [] ;
var a = [] ;
var ch = "n" ;

function createLi(text)
{
	var li = document.createElement("li") ;
	li.appendChild(document.createTextNode(text)) ;
	ul.appendChild(li) ;
	enter.value = "" ;
}

function checkLi()
{
	arr = enter.value.split(" ") ;
	ch = "n" ;
	for ( var i in arr ) 
		if ( arr[i] === "del" || arr[i] === "delete" || arr[i] === "Del" || arr[i] === "Delete")
			{	arr.splice( i, 1) ;
				ch = "y" ;				
			}
		else if ( arr[i] === "done" || arr[i] === "Done" || arr[i] === "DONE")
			{	arr.splice( i, 1) ;
				ch = "d" ;				
			}
	if(ch === "y" )
	{	var j = 0 ;
		arr = arr.join(" ") ;
		a = document.querySelectorAll("li") ;
		for ( j in a )
			if ( a[j].innerText === arr )
			{	a[j].parentElement.removeChild(a[j]) ;
				enter.value = "" ;
				var c = "x" ;
			}

		if ( j === "values" && c === undefined )
			createLi(arr) ;
	}
	else if(ch === "d" ) 
	{	var j = 0 ;
		arr = arr.join(" ") ;
		a = document.querySelectorAll("li") ;
		for ( j in a )
			if ( a[j].innerText === arr )
			{	a[j].classList.add("done") ;
				enter.value = "" ;
				var c = "x" ;
			}

		if ( j === "values" && c === undefined )
			createLi(arr) ;
	}
	else
		createLi(enter.value) ;
}

var addPok = function( ) 
{	if(enter.value.length > 0 )
	{	
		checkLi() ;
	}
}

var addPok2 = function(event)
{	
	if(enter.value.length > 0 && event.keyCode === 13 )
	{	checkLi() ;
	}
}

btn.addEventListener("click", addPok ) ;
enter.addEventListener("keypress", addPok2) ;