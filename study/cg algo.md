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
	<li> Calculate &Delta;x = x<sub>2</sub> - x<sub>1</sub>
		 Calculate &Delta;y = y<sub>2</sub> - y<sub>1</sub>
		 <br />
		 If &Delta;x == 0 , Go to Step 3 and Skip All Other Steps
		 Else Go to Step 4 
	</li>
	<li> Let x = x<sub>1</sub>
		Plot pixel on (x, y<sub>1</sub>) <Br/>
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
</ol>

___ 
