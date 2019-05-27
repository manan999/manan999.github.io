SOFTWARE DESIGN
---------------
Design is a highly significant phase in the software development where the designer plans "how"
a software system should be produced in order to make it functional, reliable and easy to 
understand, modify and maintain.

An SRS tells us "what" a system does and becomes input to the design process which will 
tell us "how" a system would work. Designing means how requirements are realised and they
result in SDD(Software Design Document).

To conclude, we can say Design phase provides a solution to the problem given by SRS.

____

Module Coupling 
----------------
It is the degree of interdependence between various modules. 2 Modules with strong coupling
are highly dependant on each other and strongly connected. Modules with low coupling arent
dependant on each other at all.

<ul>
	<li> A good design will have low coupling but not non-existant coupling </li>
	<li> It is measured by the interconnection between modules, it increases when no. of calls
	or shared data increases. </li>
	<li> Highly coupled design may have more errors, but loosely coupled minimises interdependence
	so it should be neither. </li>
	<li> Coupling should be controlled by avoiding sharing unnecessary data, maintaining parent/
	child relationship and reducing no. of parameters passed </li>
</ul>

<ul> <b><ins> Types Of Coupling </ins></b> (best to worst)
	<li> <b> Data Coupling: </b> Module A&B are data coupled if they communicate only by passing
		of data. We can minimise this dependency by sending only necessary data</li>
	<li> <b> Stamp Coupling: </b> Module A&B will be Stamp Coupled if they pass an entire data
		structure instead of a piece of data. Since, not all data of data structure would be 
		required we end up passing <b>tramp data</b>(Bekar data) </li>
	<li> <b> Control Coupling: </b> When 2 modules share control information like flags, etc. Then
		the module which is requesting control info is highly dependant on other. </li>
	<li> <b> External Coupling: </b> When a system module is dependant on a module that doesnt belong
		to system. This is generally related to external tools or services </li>
	<li> <b> Common Coupling: </b> When 2 modules have common data. This is done by having global 
		data, making changes to which shall affect more than one module. We can never determine
		which module might be responsible for changing global data. </li>
	<li> <b> Content Coupling: </b> When module A can change the entire data of B, they are called
		Content Coupled. This is the worst kind of coupling </li>
</ul>


____ 

Module Cohesion 
----------------
It is the measure of degree to which modules are functionally related. A strongly cohesive
module implements its functionality with almost no interaction with other modules. It may be 
called glue that keeps a module together.

<ul>
	<li> A good design will have loww coupling and high cohesion </li>
	<li> Such a system is called black box. This ensures each module can be dealt with seperately
		while coding. </li>
</ul>

<ul> <b><ins> Types Of Cohesion </ins></b> (best to worst)
	<li> <b> Functional Cohesion: </b> Functions X&Y are part of single task. Such a module usually takes
		a single input and produces a single output. (e.g- mathematical)</li>
	<li> <b> Sequential Cohesion: </b> X outputs some data, which forms the input of Y. This is the 
		reason they are contained in same module. </li>
	<li> <b> Communication Cohesion: </b> X&Y take the same input and contribute to same output. We
		might consider putting them in seperate modules.</li>
	<li> <b> Procedural Cohesion: </b> </li>
	<li> <b> Temporal Cohesion: </b> </li>
	<li> <b> Logical Cohesion: </b> </li>
	<li> <b> Coincidental Cohesion: </b> </li>
</ul>

______

SOFTWARE TESTING 
----------------

<ul> 
	<li> Software is written everywhere, however it is almost never perfect. The process of demonstrating
		that a software is error-free is known as <b><ins> Software Testing. </ins></b> </li>
	<li> Main purpose of testing is to show that a program performs its intended functions correctly.
	</li>
	<li> It is the process of establishing confidence in a program. </li>
	<li> It can also be called, executing a program with the intention of finding errors. </li>
</ul>

Why should we test?
------------------

<ul>
	<li> Although, Testing is expensive, but launching a software without testing may prove even
		expensive, especially when human safety is involved </li>
	<li> No one can even think of releasing an untested software for applications like surgery
		machines and auto-driven vehicles. </li>
	<li> The earlier an error is found, the least its cost of removal. The most damaging & harmful
		errors are those which are not found even after testing. </li>
	<li> As it is impossible to test for each & every input and make a software 100% error-free, 
		teeting and error correction continues until the removal cost is less than potential damage. </li>
</ul>

Who should test?
----------------
<ul> 
	<li> Most organisations have different phases & people for development and testing, because it is 
		difficult to find error in your own creation. </li>
	<li> Developer may provide guidelines for testing but entire responsibility should be on tester</li>
	<li> This also works becuase human ego likes to find faults with the work of others. Thus, a tester
		(consciously or sub-consciously) will work hrader to find error in others' programs. </li>
</ul>

_____

Important Terms
---------------
<dl>
	<dt> Error ( Synonym: Mistake, Bug ) </dt>
	<dd> When the programmer writes wrong syntax or logic. </dd>
	<dt> Fault ( Synonym: Defect) </dt>
	<dd> It is the representation of an error. (How an error affected the system.) <br>
		For example, if a programmer accidentaly puts '-' instead of '+', it is an error. <br>
		When we get wrong answer or further calculation due to error, it is a fault </dd>
	<dt> Failure </dt>
	<dd> The deviation of a program from expected behaviour or output. It is the result of 
		a fault </dd>
</dl>
<br>
<dl>
	<dt> Test Case </dt>
	<dd> It consists of an input description(pre-condition and actual input) and an expected
		output description(actual output and post-condition) . </dd>
	<dt> Test Suite </dt>
	<dd> A set of Test Cases is called a Test Suite </dd>
</dl>
<br>
<dl>
	<dt> Verification </dt>
	<dd> The process of evaluating a system to determine whether the product satisfies the 
		conditions imposed at the start of development phase </dd>
	<dt> Validation </dt>
	<dd> The process of evaluating a system at the end of development phase to determine
		whether it satisfies all the requirements. </dd>
</dl>

________

Types of Testing 
----------------

<ol>
	<li> <ul> <b><ins> Acceptance Testing: </ins></b> 
			<li> This is done when, software is developed for a specific customer. </li>
			<li> A series of tests are conducted by customer itself to check whether the
				software satisfies all requirements. </li>
			<li> It may include ad-hoc or planned & systematic test. </li>
			<li> It may run for weeks to months </li>
			<li> All the errors found, will be recified before delivery to customer </li>
		</ul></li>
	<li> <ul> <b><ins> Alpha Testing: </ins></b>
			<li> Done when customers are anonymous(done for products), so acceptance testing
				is not possible </li>
			<li> A set of possible customers are identified and tests are performed at
				developer's site </li>
			<li> They are performed in a controlled environment. </li>
		</ul>
	</li>
	<li> <ul> <b><ins> Beta Testing: </ins></b>
			<li> It is also done for anonymous customers. </li>
			<li> Tests are conducted at customer's own site </li>
			<li> Done in a real environment out of developer control. </li>
			<li> Customers are expected to report any bugs or failures and they are fixed before
			the final release. </li>
			<li> Main Advantage of &alpha; & &beta; tests is that company's reputation is not
				at stake, even in case of a failure </li>
	</ul> </li>
</ol>

_________
