COMPUTER GRAPHICS ALGORITHMS
----------------------------

Scan Conversion of Line
-----------------------
___

Direct use of Line Equation
---------------------------

To Draw a line between 2 points A & B - 
<ol> 
	<li> Convert Co-ordinates of A & B to their pixel Co-ordinates. <br/>
		 If they are already pixel co-ordinates move to next step. <br/>
		 <b><ins> E.G :-</ins></b> Convert A(2.3) to 2 & B(4.6) to 5.
	</li>
	<li> Calculate <br/>
		 <code> &Delta;x = x<sub>2</sub> - x<sub>1</sub> </code>
		 <br/><code> &Delta;y = y<sub>2</sub> - y<sub>1</sub> </code>
		 <br />
		 If &Delta;x == 0 , <br/>
		 Go to Step 3 and Skip All Other Steps <br/>
		 Else Go to Step 4 
	</li>
	<li> Let x = x<sub>1</sub> <br/>
		Plot pixel on (x, y<sub>1</sub>) <br/>
		Increment x till x <= x<sub>2</sub> and keep plotting (x, y<sub>1</sub>)
	</li>
	<li> Calculate m (slope) as <br/>
		<code> m = &Delta;y/&Delta;x
		</code>
	</li>
	<li> Calculate b (intercept) as <br/>
		<code> b = y<sub>1</sub> - m * x<sub>1</sub> 
		</code>
	</li>
	<li> Let <br/>
		<code> x = x<sub>1</sub> , y = y<sub>1</sub> </code><br/>
		Plot Pixel (x, y) <br/>
		<br/>
		If &Delta;x < 0 <br/>
		Go to Step 8
		Else <br/>
		Go to Step 7
	</li>
	<li> Increment x till x <= x<sub>2</sub> <br/>
		 Calculate <code> y = m * x + b </code> <br/>
		 Plot Pixel (x, y)
	</li>
	<li> ( Only When &Delta;x < 0 ) <br/>
		Decrement x till x >= x<sub>2</sub> <br/>
		Calculate <code> y = m * x + b </code> <br/>
		Plot Pixel (x, y)
	</li>
</ol>

___ 

```C
// To Plot a Line between 2 points using its Eqaution
#include<stdio.h>
#include<graphics.h>
#include<conio.h>
#define COLOR 15

void drawVertical(float x1, float y2, float y1)
{       float y ;
	for( y = y1 ; y <= y2 ; ++y)
		putpixel(x1, y, COLOR) ;
}

void drawLine(float x1, float x2, float y1, float y2)
{	float x, y , dx = x2-x1 ;
	float m = (y2-y1) / dx ;
	float b = y1 - (m * x1) ;
	x = x1 ;
	if(dx > 0)
	{	for( ; x <= x2 ; ++x )
		{	y = (m*x) + b ;
			putpixel((int)(x+0.5), (int)(y+0.5), COLOR) ;
		}
	}
	else
	{	for( ; x >= x2 ; --x)
		{	y = (m*x) + b ;
			putpixel((int)(x+0.5), (int)(y+0.5), COLOR) ;
		}
	}
}

void main()
{       float x1, x2, y1, y2 ;
	int gd = DETECT, gm ;
	clrscr() ;

	printf("Enter Co-Ordinates of Starting Point\n") ;
	scanf("%f %f", &x1, &y1) ;
	printf("Enter Co-Ordinates of Ending Point\n") ;
	scanf("%f %f", &x2, &y2) ;
	getch() ;

	initgraph(&gd, &gm, "C:\\TURBOC3\\BGI") ;

	if(x2-x1 == 0)
		drawVertical(x1, y2, y1) ;
	else
		drawLine(x1, x2, y1, y2) ;

	getch() ;
	closegraph() ;
}

```

___
