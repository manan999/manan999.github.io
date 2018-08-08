let time = document.querySelector(".num") ;
let colon = document.querySelector(".colon") ; 
let min = document.querySelector(".min") ;
let smg = document.querySelector(".smg") ;
let body = document.querySelector("body") ;
let flag = "x", m = 0, n = 0 , f2 = "x";
const colors =['rgb(22, 160, 133)', 'rgb(39, 174, 96)', 'rgb(44, 62, 80)', 'rgb(52, 34, 36)', 'rgb(71, 46, 50)', 
			   'rgb(115, 168, 87)', 'rgb(119, 177, 169)', 'rgb(155, 89, 182)', 'rgb(189, 187, 153)', 'rgb(231, 76, 60)', 
			   'rgb(243, 156, 18)', 'rgb(251, 105, 100)', 'rgb(85, 239, 196)', 'rgb(129, 236, 236)', 'rgb(116, 185, 255)',
			   'rgb(162, 155, 254)', 'rgb(223, 230, 233)', 'rgb(9, 132, 227)', 'rgb(250, 177, 160)', 'rgb(255, 118, 117)',
			   'rgb(45, 52, 54)', 'rgb(225, 112, 85)', 'rgb(232, 67, 147)', 'rgb(214, 48, 49)', 'rgb(253, 121, 168)'] ;

function onStart()
{	if( flag == "x")
	{	m = setInterval(increm, 1000) ;
		flag = "y" ;
	}
	if( f2 == "x" )
	{
		n = setInterval(colchange, 10000) ;
		f2 = "y" ;
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

function colchange()
{
	let x = Math.floor((Math.random() * 25) + 1);
	body.style.setProperty('--col', colors[x]) ;
}

function onReset ()
{	clearInterval(m) ;
	clearInterval(n) ;
	flag = "x" ;
	f2 = "x" ;
	body.style.setProperty('--col', 'rgb(22, 160, 133)') ;
	colon.textContent = "" ;
	min.textContent = "" ;
	time.textContent = "0" ;
	smg.textContent = "Seconds" ;
}