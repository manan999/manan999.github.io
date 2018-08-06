let time = document.querySelector(".num") ;
let colon = document.querySelector(".colon") ; 
let min = document.querySelector(".min") ;
let smg = document.querySelector(".smg")
let flag = "x", m = 0  ;

function onStart()
{	if( flag == "x")
	{	m = setInterval(increm, 1000) ;
		flag = "y" ;
	}
}

const onPause = () => {
	if (flag =="y")
	{
		clearInterval(m) ;
		flag = "x" ;
	}
}

const increm = () => {
	if(time.textContent < 60 )
		time.textContent = Number(time.textContent) + 1 ;
	if(time.textContent == 60 && min.textContent == "")
	{
		colon.textContent = ":" ;
		min.textContent = "1" ;
		time.textContent = "0" ;
		smg.textContent = "Minutes" ;
	}
	else if (time.textContent == 60 && min.textContent <= 1)
	{
		time.textContent = "0" ;
		min.textContent = Number(min.textContent) + 1 ;
	}
	return ; 
}

function onReset ()
{	clearInterval(m) ;
	flag = "x" ;
	colon.textContent = "" ;
	min.textContent = "" ;
	time.textContent = "0" ;
	smg.textContent = "Seconds" ;
}