To check a date
---------------

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.3//EN" "http://www.wapforum.org/DTD/wml13.dtd">

<wml>
  <card id="card1" title="Registration Form">
    <p>
      <big>Registration Form</big><br/>
      Notice: Fields with * are required.<br/><br/>
      <b>$(errorMsg)</b><br/>

      * User name:<br/>
      <input name="username"/><br/>
      * Password (min. 8 characters):<br/>
      <input type="password" name="password"/><br/>
      * Email:<br/>
      <input name="email"/><br/>
      Name:<br/>
      <input name="name"/><br/>
      Birthday (MMDDYYYY):<br/>
      <input name="birthday" format="NNNNNNNN" emptyok="true"/><br/><br/>

      <a href="validateFormEg1.wmls#validate()">Submit Form Data</a>
    </p>
  </card>
</wml>
```

```
extern function validate()
{
  var form_username = String.trim(WMLBrowser.getVar("username"));
  var form_password = String.trim(WMLBrowser.getVar("password"));
  var form_email = String.trim(WMLBrowser.getVar("email"));
  var form_name = String.trim(WMLBrowser.getVar("name"));
  var form_birthday = String.trim(WMLBrowser.getVar("birthday"));

  if (""==form_username){
    WMLBrowser.setVar("errorMsg", "The User Name field must not be empty.");
    WMLBrowser.refresh();
    return;
  }

  if (""==form_password){
    WMLBrowser.setVar("errorMsg", "The Password field must not be empty.");
    WMLBrowser.refresh();
    return;
  }

  if (""==form_email){
    WMLBrowser.setVar("errorMsg", "The Email field must not be empty.");
    WMLBrowser.refresh();
    return;
  }

  if (String.length(form_password) < 8){
    WMLBrowser.setVar("errorMsg", "The password must contain at least 8 characters since a short password is less secure.");
    WMLBrowser.refresh();
    return;
  }

  if (!isEmailValid(form_email)){
    WMLBrowser.setVar("errorMsg", "The email address's format is invalid.");
    WMLBrowser.refresh();
    return;
  }

  if (""!=form_birthday && !isDateValid(form_birthday)){
    WMLBrowser.setVar("errorMsg", "The date in the Birthday field is invalid.");
    WMLBrowser.refresh();
    return;
  }

  submit_form(form_username, form_password, form_email, form_name, form_birthday);
}
```

______________________________

To calculate factorial
----------------------

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.1//EN" "http://www.wapforum.org/DTD/wml_1.1.xml">
<!-- Combination.wml -->

<wml>
	<card id="input">
		<onevent type="onenterforward">
		    <refresh>
		        <setvar name="n" value=""/>
		        <setvar name="p" value=""/>
		        <setvar name="n_p" value=""/>
		        <setvar name="factorialN" value=""/>
		        <setvar name="factorialP" value=""/>
		        <setvar name="factorialN_P" value=""/>
		        <setvar name="combinationNP" value=""/>
		    </refresh>
		</onevent>
		<p>
		    <do type="accept" label="Compute">
		        <go href="combination.wmls#go()"/>
		    </do>

		    Value for n:
		    <input type="text" name="n" format="*N"/>
		    Value for p:
		    <input type="text" name="p" format="*N"/>
		</p>
	</card>

	<card id="result">
		<p><do type="accept" label="Back">
		        <go href="#input">
		            <setvar name="n" value=""/>
		            <setvar name="p" value=""/>
		        </go>
		    </do>

		    Combination &gt; WML<br/>
		    <br/>
		    fact($n)=$factorialN
		    fact($p)=$factorialP
		    fact($n_p)=$factorialN_P
		    comb($n,$p)=$combinationNP
		</p>
	</card>
</wml>
```

```
extern function go()
{
    var strN = WMLBrowser.getVar("n"),
        strP = WMLBrowser.getVar("p");
    var n = Lang.parseInt(strN),
        p = Lang.parseInt(strP),
        result;
    
    if (n > 0)
        if (p > 0)
            if (n >= p)
            {
                WMLBrowser.setVar("n_p", n-p);
                WMLBrowser.setVar("factorialN", factorial(n));
                WMLBrowser.setVar("factorialP", factorial(p));
                WMLBrowser.setVar("factorialN_P", factorial(n-p));
                WMLBrowser.setVar("combinationNP", combination(n, p));
                WMLBrowser.go("combination.wml#result");
            }
            else error("'p' > 'n'");
        else error("Invalid value for 'p'");
    else error("Invalid value for 'n'");
}

function factorial(n)
{
    return (n <= 1) ? 1 : n*factorial(n-1); // he-he... let's mix a ternary operator (?) and recursion...
}

function combination(n, p)
{
    return factorial(n) div (factorial(n - p) * factorial(p));
}

function error(msg)
{
    Dialogs.alert("Error!\n" + msg);
    WMLBrowser.setVar("n", "");
    WMLBrowser.setVar("p", "");
    WMLBrowser.go("#input");
}
```

____________________________________________________

To add, subtract or multiply 2 numbers
--------------------------------------

```
<?xml version=”1.0″?>

<!DOCTYPE wml PUBLIC “-//WAPFORUM//DTD WML 1.1//EN” “http://www.wapforum.org/DTD/wml_1.1.xml”&gt;

<wml>
	<card id=”card1″ title=”Calculator” newcontext=”true”>
		<p>
			Value1: <br/><input format=”N*M” name=”amount1″ title=”First Amount:”/>
			Operator : <br/><select name=”operator” value=”ADD” title=”Operation:”>
				<option value=”ADD”>Addition</option>
				<option value=”SUB”>Subtraction</option>
				<option value=”MULT”>Multiplication</option>
				<option value=”DIV”>Division</option>
			</select>
			Value2: <br/><input format=”N*M” name=”amount2″ title=”Second Amount:”/>
			Result : = <b>$(answer)</b>

			<do type=”accept” label=”Result”>
				<go href=”calc.wmls#operation(‘answer’,$(amount1),’$(operator)’,$(amount2))”/>
			</do>
		</p>
	</card>
</wml>
```

```
extern function operation(result,val1,operate,val2) {

 var ans=0;

 if (operate==’ADD’)
 {	ans = val1 + val2;
 }
 else if (operate==’SUB’)
 {	ans=val1 – val2;
 }
 else if (operate==’MULT’)
 {	ans=val1 * val2;
 }
 else
 {	ans=val1 / val2;
 }

 WMLBrowser.setVar(result,ans);
 WMLBrowser.refresh();
}
```

_____________________________________________________________

To check prime hai ya nahi
--------------------------

###rewrite

_____________________________________________________________

Mobile number validation

###rewrite 