COMPUTER GRAPHICS ALGORITHMS
----------------------------

Scan Conversion of Line
-----------------------
___

Direct use of Line Equation
---------------------------

To Draw a line between 2 points A & B - 
<ol> 
	<li> Convert Co-ordinates of A & B to their pixel Co-ordinates.
		 If they are already pixel co-ordinates move to next step.
		 <b><ins> E.G :-</ins></b> Convert A(2.3) to 2 & B(4.6) to 5.
	</li>
	<li> Calculate m (slope) as 
		<code> m = (y<sub>2</sub> - y<sub>1</sub>)/(x<sub>2</sub> - x<sub>1</sub>)
		</code>
	</li>
	<li>
		Calculate b (intercept) as
		<code> b = y<sub>1</sub> - m * x<sub>1</sub> 
		</code>
	</li>
</ol>

___ 
