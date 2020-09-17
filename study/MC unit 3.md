<b> Mobile Computing Unit - 3 </b>
----------------------------------

WAP
-----

Nokia, Motorola And Sony Ericson america ki top mobile companies thi 1997 me jab feature phone chalte the. Internet popular ho raha tha to unhone socha ki internet access karne ka ek tareeka phone me bhi hona chahiye. 

Us wakt wireless internet nahi hota tha(ya bahut kam hota tha), to unhone socha ki hum ek aisa tareeka banate hai jisse low-bandwidth, low-processing power, choti screen aur kam memory wale devices(us wakt ke phone) bhi internet access kar paye.

New technology ki zarurat isiliye bhi thi kyonki us wakt saare manufacturers ke phone me alag OS hota tha jo ek dusre se bahut alag hota tha, isiliye na sirf ek aisi technology chahiye thi jo sab pe chal jaye balki us wakt ke phones me itni power bhi nahi thi ki HTML code ko render kar paye(CSS itni popular nahi thi tab).

To unhone ek set of rules banaye internet access ke liye jise naam diya WAP(Wireless Access Protocol). Jaise computer me HTTP ke through web page access hote the, phones pe WAP ke through honge. Jaise HTTP, HTML ke pages fetch karta tha(us wakt CSS nahi use hoti thi), WAP, sirf WML ke pages fetch karega.

Yani ki agar tumhe phone ke liye website banani hai to dubara banao, using WML kyonki phone pe sirf vo khulegi not HTML. Sirf itna nahi jaise HTML me processing ke liye JavaScript use hoti thi, WML me WMLScript use hogi jo ki WML ka hi part thi. Aur, website ke liye browser chahiye hota hai, WMl ki site dekhne ke liye 'MicroBrowser' lagta hai.

Yani jaise computer website jo HTTP ke through access hoti thi, and HTML+Javascript se bani hoti thi, phone ki websites WAP se access hongi and WML+WMLScript me likhi jayegi.Ab samajh gaye WML kya cheez hai? 

WML ki file '.wml' hoti hai and WMLScript ki file '.wmls'

---matter---

WAP (Wireless Application Protocol) is a set of communication protocols to standardize the way that wireless devices, such as cellular telephones and radio transceivers, can be used for Internet access. This includes E-mail, World Wide Web, Newsgroups, and instant messaging. 

The WAP layers are:

<ol>
	<li>Wireless Application Environment (WAE)</li>
	<li>Wireless Session Layer (WSL) </li>
	<li>Wireless Transport Layer Security (WTLS) </li>
    <li>Wireless Transport Layer (WTP)</li>
</ol>

The WAP was conceived by four companies: Ericsson, Motorola, Nokia, and Unwired Planet (now Phone.com). The Wireless Markup Language (WML) is used to create pages that can be delivered using WAP.

WML Decks and Cards
-------------------

HTML me website and webpages hote hai, WML me unka naam alag hai, pages ko 'card' bolte hai(kyonki multiple files nahi bana sakte, phone me itni power nahi thi ki baar baar alag file load kare to ek WML file load karta tha saara data usi me hota tha different 'card' me). Puri website ko 'deck' bolte hai (deck yani patto ki gaddi, jo taash me hoti hai). 'deck' alag se koi tag nahi hai bas bolte hai puri website ko, likhte kaise hai vo neeche dekh lo

---matter---

Just like HTML contains webpages that form a website. WML contains 'Card', A WML file can contain multiple cards and they form a deck.

When a WML page is accessed from a mobile phone, all the cards in the page are downloaded from the WAP server. So if the user goes to another card of the same deck, the mobile browser does not have to send any requests to the server since the file that contains the deck is already stored in the wireless device.

You can put links, text, images, input fields, option boxes and many other elements in a card.

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card id="one" title="First Card">
		<p>	This is the first card in the deck
		</p>
	</card>

	<card id="two" title="Second Card">
		<p>	This is the second card in the deck
		</p>
	</card>
</wml>
``` 

__________________________________________________________________________

WML Document Prolog
-------------------

WML ka koi bhi code likhne se pehle batana padta hai ki konsa version hai(jaise purani HTML me hota tha), jo ye 2 tags har WML code se pehle likhe jaate hai inhe bolte hai 'WML Prolog'. Hum basically ye bol rahe hai ki hum XML version 1.0 ka syntax use karenge(taaki custom tags likh sake), aur inka DTD(jisme bata rakha hota hai ki konsa tag kya karega), uska link de rahe hai.

---matter---

The first line of this text says that this is an XML document and the version is 1.0. 
The second line selects the document type and gives the URL of the document type definition (DTD). The DTD referenced is defined in WAP 1.2, but this header changes with the versions of the WML. 

The prolog components are not WML elements and they should not be closed, i.e. you should not give them an end tag or finish them with />.

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">
```

__________________________________________________________________________

WML Variables
-------------

Kyonki ek hi file me multiple cards hote hai isiliye koi zariya chahiye jisse ek card ka data dusre me use ho sake, ye kaam karne ke liye WMl me variables hai, 

Wml case sensitive hai, capital small ko alag alag treat karega(jaisa XML me hota hai).

variable ko create aur uski value set karne ke hum pe 2 ways hai

1. 'setvar' tag use kar lo
2. 4 tarah ke inputs hai WML me, unme se kisi ek to use kar lo

---matter---

Because multiple cards are contained within one deck, there needs to be something to save data as the user navigates within different cards. This mechanism is provided via WML variables.

WML is case sensitive. All variables values will be different if there is difference of case.

To create a variable, we have 2 ways in WML
<ol>
	<li> &lt;setvar&gt; tag </li>
	<li> One of the 4 inputs in WML </li>
</ol>

setvar
------

To create a variable 'x' with value '1000' using 'setvar' we will write:
```
<setvar name="x" value="1000"
```  

To use any variable we can use ${}. For example:
```
<p> This is the usage of variable x, it has a value of ${x} </p>
```
Output of above statement will be "This is the usage of variable x, it has a value of 1000"

Inputs in WML
-------------

There are 4 types of taking inputs in WML (we will discuss in detail later)
<ol>
	<li> 'select' tag </li>
	<li> 'input' tag </li>
	<li> 'fieldset' tag </li>
	<li> 'optgroup' tag </li>
</ol>

_________________________________________________________________________

Images in WML
--------------

jaise HTMl me img tag hota hai, idhar bhi hai. Bas WML me images sirf .wbmp format me ho sakti hai aur is format ki images kewal black and white hoti hai. kisi image ko WBMP me convert ke liye online tools hai and nokia ke phone me inbuilt tool aata tha (ab nokia ka phone hi nahi aata...lol).

Ye 'p' ke andar hona chahiye. img tag ke attributes hote hai jaise: align, alt, src, height, width

---matter---

The &lt;img&gt; element is used to include an image in a WAP card. WAP-enabled wireless devices only supported the Wireless Bitmap (WBMP) image format. 

WBMP images can only contain two colors: black and white. The file extension of WBMP is ".wbmp".

<ul>Attributes of &lt;img&gt;
	<li> <strong> Align: </strong> To set alignment(left, right, centre) </li>
	<li> <strong> Alt: </strong> To set alternate message in case image doesnt load </li>
	<li> <strong> Src: </strong> To specify image source URL </li>
	<li> <strong> Height: </strong> To set image ht </li>
	<li> <strong> Width: </strong> To set image wdt </li>
</ul>

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="WML Images">
		<p> This is Thumb image <img src="/images/thumb.wbmp" alt="Thumb Image"/>	</p>
		<p> This is Heart image <img src="/images/heart.wbmp" alt="Heart Image"/> 	</p>
	</card>
</wml>
```

__________________________________________________________________________

Tables in WML
--------------

jaise HTMl me table tag hota hai, idhar bhi hai. tr td bhi same hai. Bas isme table ke andar table nahi bana sakte. (WML pe itni processing power nahi hai). Ye 'p' ke andar hona chahiye.
table tag ke attributes hote hai jaise: align(jisme har column ki alignment batani padti hai) aur columns

---matter---

The &lt;table&gt; element along with &lt;tr&gt; and &lt;td&gt; is used to create a table in WML. WML does not allow the nesting of tables. It mustd be put with-in &lt;p&gt;...&lt;/p&gt; elements.

<ul>Attributes of &lt;table&gt;
	<li> <strong> Columns: </strong> To specify no. of columns </li>
	<li> <strong> Align: </strong> To set alignment of columns (You have to specify alignment of each column) </li>
</ul>

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="WML Images">
		<p> This is Thumb image <img src="/images/thumb.wbmp" alt="Thumb Image"/>	</p>
		<p> This is Heart image <img src="/images/heart.wbmp" alt="Heart Image"/> 	</p>
	</card>
</wml>
```

__________________________________________________________________________

Text Formatting in WML
----------------------

'big', 'small', 'b', 'u', 'i' ye saare tags hi hai and HTML jaise same hai, explain kar dena easily, bas example me card ke andar p ke andar likhna compulsory hai

___________________________________________________________________________

Links in WML
------------

jaise HTML me link ke liye 'a' hota hai, WML me 'a' to hota hi hai, but ek aur option bhi hai... 'anchor' tag. 

Anchor Tag
----------

Isse anchor link banate hai but ye akele nahi use hota, it must be used with WML tasks. WML tasks 3 tags hote hai 'go', 'prev' and 'refresh'. Anchor agar use hoga to inke sath hoga, varna nahi hoga. Ye basically batate hai ki link click pe kya hoga.  Image bhi daal sakte ho is tag ke andar normally. 

---matter---

The <anchor>...</anchor> tag pair is used to create an anchor link. It is used together with other WML elements called <go/>, <refresh/> or <prev/>. These elements are called task elements and tell WAP browsers what to do when a user selects the anchor link

You can enclose Text or image along with a task tag inside <anchor>...</anchor> tag pair.

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="Anchor Element">
		<p> <anchor> 	Next Page : <go href="nextpage.wml"/>	</anchor> </p>
		<p> <anchor> 	Previous Page : <prev/>		</anchor> </p>
	</card>
</wml>
```
the above code will show 2 links, 'Next Page' & 'Previous Page', clicking on them will trigger the default behaviour of WML task elements.

a tag
------

a tag normal hai jaise HTML me tha, bas 'p' ke andar likhna compulsory hai and preferred way hai link banane ka as compared to anchor. Bas iske andar koi task nahi de sakte. Koi bhi farak nahi hai iska example tum de sakte ho, but fir bhi sahuliyat ke liye example 

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="A Element">
		<p> Link to Next Page: 
		   <a href="nextpage.wml">Next Page</a>
		</p>
	</card>
</wml>
```

__________________________________________________________________________

WML TASKS
---------

Ye vo elements hai jo browser ko batate hai ki kuch action lena hai naki kuch display karwana hai (jaise react-router me redirect hota hai). jaise ki kisi new card pe jana hai to 'go' use karoge and pichhle card pe jana hai to 'prev' use karoge. Kis task pe kya behaviour hoga, ye pehle se pata hai browser ko(WML ke liye special browser hota hai na). 4 tasks hote hai WML me go, prev, refresh aur noop

---matter---

A WML task is an element that specifies an action to be performed by the browser, rather than something to be displayed. For example, the action of changing to a new card is represented by a <go> task element, and the action of returning to the previous card visited is represented by a <prev> task element. Task elements encapsulate all the information required to perform the action.

WML provides following four elements to handle four WML tasks called go task, pre task, refresh task and noop taks.

Go task
-------

go matlab new task pe jana, vo to obvious hai, basically attributes samajh lo.
href link batata hai, method GET ya POST leta hai vo ye batata hai ki agla card kaise fetch hoga(aur koi data send karna hai next card ko, to kar sakte ho). 

---matter---

the &lt;go&gt; task represents the action of going to a new card. 
<ul> The &lt;go&gt; element supports the following attributes:
	<li> <strong> href: </strong> Gives the URL of the new card. </li>
	<li> <strong> method: </strong> Gives GET or POST as method for sending data. /* jo regular baate hoti hai GET POST ki, jaise GET me URL me data jata hai, kam secure hai, kam data bhej sakte ho, POST me body me data jata hai; vo sab yaha par same hai */</li>
</ul>

Normal Example
```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="GO Element">
		<p> <anchor> Chapter 2 : <go href="chapter2.wml"/>	</anchor>	</p>
	</card>
</wml>
```

Sending data with GET example (x = 17, y = 42)
```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="GO Element">
		<p> <anchor> Using Get Method 
		      <go href="chapter2.wml?x=17&y=42" method="get"/>
		   </anchor> </p>
	</card>
</wml>
```

Sending data with setvar example
```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="GO Element">
		<p> <anchor> Using setvar:
			  <go href="chapter2.wml"> 
			      <setvar name="x" value="17"/> 
		  	      <setvar name="y" value="42"/> 
			  </go>
		   </anchor> </p>
	</card>
</wml>
```

Prev Task
---------

jab 'prev' likha jata hai to, browser ki history me se pichhle card load kar liya jata hai autoamtically, koi location specify karne ki zarurat nahi hai. Agar history empty hai to 'prev' work nahi karega. Agar prev me koi setvar hai to pichle card ko variables ki values send ho jayengi. Kyonki kuch cases me aisa ho sakta hai ki previous page pe kisi variable ki value change kari gayi ho jo tum ab dubara change karna chahte ho, for example login page me user ne password bhara hoga, lekin ab tum firse reset karwana chahte ho

---matter---

The <prev> task represents the action of returning to the previously visited card on the history stack. When this action is performed, the top entry is removed from the history stack, and that card is displayed again. 

It happens only after any <setvar> variable assignments in the <prev> task have taken effect. If no previous URL exists, specifying <prev> has no effect.

Simple Example: (with no prolog and wml tag)
```
<card title="Prev Element">
	<p> <anchor>
        Previous Page :<prev/>
	</anchor> </p>
</card>
```

Returning to previous with setvar value sending example:
```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="Prev Element">
		<p> <anchor> <prev>
           <setvar name="password" value=""/>
		</prev> </anchor> </p>
	</card>
</wml>
```

Refresh Task
------------

Iska kaam simply current card ko reload karna hai, generally iske andar setvar de dete hai taaki new values ke sath hi current page load ho jaye. (Jaise kaam setstate ka hota hai, lekin ye kaafi heavy hai). Otherwise, ye task sabse simple hai and isme koi link vugrah kisi cheez ki zarurat nahi hai. 

---matter---

The <refresh> task is the simplest task that actually does something. Its effect is simply to perform the variable assignments specified by its <setvar> elements, then redisplay the current card with the new values. 

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="Refresh Element">
		<p> <anchor>
		         Refresh this page:
		          <refresh>
		            <setvar name="x" value="100"/>
		          </refresh>
		</anchor> </p>
	</card>
</wml>
```

No-op Task
----------

is task ka basic matlab hai 'no-operation', jab koi kaam na karwana ho lekin syntax maang raha ho ki koi task dena hai (jaisa kaam 'void' karta tha C me). Iska koi acha example nahi hai, milega to daal dunga.

___________________________________________________________________________

Inputs in WML
--------------
There are 4 ways for taking input in WML

Select Tag
----------

Radio button aur checkbox banane ke liye use hota hai, select tag ke andar option tags lagte hai jo actual choices batate hai ki kya kya hai.

---matter---

The <select>...</select> WML elements are used to define a selection list and the <option>...</option> tags are used to define an item in a selection list. 
Items are presented as radiobuttons in some WAP browsers. 

<ul> select supports the following attributes:
	<li> <strong> multiple: </strong> accepts 'true' or 'false', if 'true' renders checkbox </li>
	<li> <strong> name: </strong> used to set which variable will get the selected value </li>
	<li> <strong> value: </strong> used to give default selected value </li>
</ul>

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="Radiobutton list">
		<p> Choose your gender :
		 <select name="gender" value="m">
		  <option value="m">Male</option>
		  <option value="f">Female</option>
		  <option value="o">Other</option>
		 </select>
		</p>
	</card>

	<card title="checkbox List">
		<p> Select Languages you know :
		 <select name="language" multiple="true">
		  <option value="hin">Hindi</option>
		  <option value="eng">English</option>
		  <option value="bho">Bhojpuri</option>
		 </select>
		</p>
	</card>
</wml>
```
The first card gives radiobuttons for gender selection, the selected value will be stored in the variable 'gender', if no radiobutton is selected, default value of 'm' will be stored.

Second card renders 3 checkboxes for languages, you can select multiple languages, which will be stored in the variable 'language' as an array. If no checkbox is selected it will give an error, since no default value has been provided.

Input Tag
---------

The <input/> element is used to create input fields and input fields are used to obtain alphanumeric data from users.

<ul> input supports the following attributes:
	<li> <strong> name: </strong> used to set which variable will get the value </li>
	<li> <strong> value: </strong> used to give default value </li>
	<li> <strong> maxlength: </strong> maximum input length </li>
	<li> <strong> emptyok: </strong> accepts 'true'/'false', if 'true' input can be left blank, default value is false </li>
	<li> <strong> typer: </strong> acceps 'text' or 'password', 'password' hides the input with stars, default value is text which is normal input </li>
	<li> <strong> format: </strong> can be used to specify if input will accept only particular kinds of values </li>
</ul>

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<card title="Input Fields">
		<p> Enter Following Information:<br/> 
		 Name: <input name="name" size="12"/>
		 Age :  <input name="age" size="12" format="*N"/>
		 Sex :  <input name="sex" size="12"/> 
		</p>
	</card>
</wml>
```
above example will take user input and store in 'name', 'age' and 'sex' respectively. Age will only accept numerical values.

Fieldset Tag
------------

Basically, same hai as input bas data storing ka tareeka change ho sakta hai thoda(karna chahe to), jo neeche example hai usme storing me koi farak nahi ayega

---matter---

The <fieldset/> element is used to group various input fields or selectable lists.

<ul> fieldset supports the following attributes:
	<li> <strong> title: </strong> used to set which variable will get the value </li>
</ul>

Example(without prolog and wml tag)
```
<card title="Grouped Fields">
	<p> 
	<fieldset title="Personal Info">
	 Name: <input name="name" size="12"/>
	 Age :  <input name="age" size="12" format="*N"/>
	 Sex :  <input name="sex" size="12"/> 
	</fieldset>
	</p>
</card>
```

optgroup tag
------------

ye submenu banane ke liye use hota hai, ye cheez HTML me nahi hai kyonki ye sirf chote phones pe work karegi, jaise nahi hota tha ki option select kiya uske baad radiobuttons ya checkbox khul gaye(jaisa purane phone ki settings me hota tha), vaisa banane ke liye use hota hai.

---matter---
The <optgroup>...</optgroup> element is used to group various options.

Example(without prolog and wml tag)
```
<card title="Selectable List"> 
	<p>
	 <select>
	   <optgroup title="India">
	    <option value="delhi">Delhi</option>
	    <option value="mumbai">Mumbai</option>
	    <option value="hyderabad">Hyderabad</option>
	   </optgroup>
	   <optgroup title="USA">
	    <option value="new york">New York</option>
	    <option value="chicago">Chicago</option>
	    <option value="washington">Washingtone</option>
	   </optgroup>
	 </select>
	</p>
</card>
```

___________________________________________________________________________

Events in WML
-------------

'onevent' tag se event handlers define karte hai, event handler WML me bhi kaam kar sakta hai and WMLScript me bhi (neeche wale example me only WML use ho rahi hai). basically 'onevent' tag lagao and type me koi event likh do.

4 events hoti hai: 
'onenterforward': yani page par abhi abhi aye ho navigate karke tab ye event hoga, agar <go /> ke through aaye ho to bhi hoga
'onenterbackward': yani page par back karke aye ho tab ye event hoga, agar <prev /> ke through aaye ho to bhi hoga
'ontimer': ek particular time ke baad event hoga
'onpick': koi particular cheez select karne pe event hoga

---matter---

The <onevent>...</onevent> tags are used to create event handlers.You can use either go, prev or refresh task inside <onevent>...</onevent> tags against an event. It must have the attribute 'type' which specifies one of the 4 recognised events in WML.

onenterbackward: This event occurs when the user hits a card by backward navigation. That is through prev or back key.
onenterforward: This event occurs when the user hits a card by normal forward navigation.
onpick: This event occurs when an item of a selection list is selected or deselected.
ontimer: This event is used to trigger an event after a given time period.

All events are case-sensitive and must be written in lowercase only.

```
<?xml version="1.0"?>
<!DOCTYPE wml PUBLIC "-//WAPFORUM//DTD WML 1.2//EN" "http://www.wapforum.org/DTD/wml12.dtd">

<wml>
	<onevent type="onenterbackward">
	  <go href="#card3"/>
	</onevent>

	<card id="card1" title="Card 1">
		<p> <anchor>
		     <go href="#card2"/> Go to card 2
		</anchor> </p>
	</card>

	<card id="card2" title="Card 2">
		<p> <anchor>
		   <prev/> Going backwards
		</anchor> </p>
	</card>

	<card id="card3" title="Card 3">
		<p> Hello World! </p>
	</card>
</wml>
```
Upar wale example ko dekho, kayde se humne card2 pe prev ko call kara hai to card 1 pe jana chahiye, but kyonki prev ka event handler defined hai, to card 3 pe chala jayega.

___________________________________________________________________________

