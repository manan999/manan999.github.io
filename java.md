**Inetaddress class** - it is a class which is used to access the ip Address as well as name
for the host or another computer. It stores both the address and name of the computer it 
knows about.

It has a private method its object can only be created using a factory method

Factory method yani hum "new" likh ke object nahi bana payenge we have to use the factory methods

Factory methods
---------------
**getLocalHost()** -> To get the IP address of current computer <br>
**getByName()** -> To get IP address of another computer(jiska naam paas karenge) <br>

Other Methods
--------------
**getHostAddress()** -> Jo computer stored hai uska address return karo <br>
**getHostName()** -> Jo computer stored hai uska name return karo <br>

```java
	import java.net.*; 
    class InetAddressTest 
    { 
           public static void main(String args[]) throws UnknownHostException { 
           InetAddress Address = InetAddress.getLocalHost(); 
           System.out.println(Address);			//Khudka IP address & name
           InetAddress AddressG = InetAddress.getByName("www.google.com") ; 
           System.out.println(AddressG);			//Google ka IP address & name
           
           System.out.println(AddressG.getHostAddress());			//Google ka IP address
           System.out.println(AddressG.getHostName());			//Google ka domain name
           } 
    }
```

____________________________________________________________________________________

Checked Exception
-----------------
FileNotFoundException <br>
IOException <br>
SQLException <br>
ClassNotFoundException <br>
InvocationTargetException <br>

Unchecked Exception
-------------------
ArithmeticException <br>
ArrayOutOfBoundsException <br>
NullPointerException <br>
NumberFormatException <br>
IllegalArguementException <br>

________________________________________________________________________________________

Thread Methods
--------------

getPriority() -> Returns priority number <br>
setPriority(Number) -> Sets Priority <br>
getName() 	-> Gets Thread Name as String <br>
setName(String)  -> Sets Thread Name <br>
isAlive()  -> Returns if thread is destroyed(ended) or not...returns true/false <br>
isDeamon() -> Returns true if thread is DeamonThread <br>
start() -> execute run() method <br>
sleep(number) -> sleep for these many milliseconds <br>

______________________________________________________________________________________

```java
// To count number of words in a file
import java.io.File ;
import java.io.* ;

class ReadFile 
{
	public static void main(String[] args) {
		int words = 0 ;
		File file = new File("C:\Users\\Manan\Desktop\abc.java")
		FileInputStream fin = new FileInputStream(file) ;
		InputStreamReader isr = new InputStreamReader(fin) ;
		BufferedReader br = nre BufferedReader(isr) ;

		String line = br.readLine() ;
		String[] wordlist = line.split(" ") ;
		words = wordlist.length ;

		System.out.println("No. of words" + words) ;
	}
}
```

_____________________________________________________________________________________

Difference between FileInputStream and FileReader
-------------------------------------------------

FileInputStream is used for reading streams of raw bytes of data, like raw images. FileReaders, on the other hand, are used for reading streams of characters

The difference between FileInputStream and FileReader is,  FileInputStream reads the file byte by byte and FileReader reads the file character by character.

So when you are trying to read the file which contains the character "Č", in FileInputStream will give the result as 196 140, because the ASCII value of Č is 268.

In FileReader will give the result as 268 which is the ASCII value of the char Č.

**Similarly, FileOutputStream and FileWriter ka bhi aisa hi kuch hai**

_____________________________________________________________________________________

```java
// To read records from jdbc database
import java.SQL.* ;

class Main
{
	static final String user = "Lalit" ;
	static final String pass = "123456" ;
	static final String driver = "com.mysql.jdbc.Driver" ;
	static final String URL = "jdbc:mysql://localhost/database" ;

	public static void main(String[] args) {
		Statement st = null;
		Connection conn = null;
		try
		{
			Class.forName(driver) ;
			conn = DriverManager.getConnection(URL, user, pass) ;
			st = conn.createStatement() ;

			String sql = "SELECT * FROM users ;" ;
			ResultSet rs = st.executeQuery(sql) ;

			while(rs.next())
			{
				int rno = rs.getInt("rno") ;
				String name = rs.getString("name") ;
				String sex = rs.getString("gender") ;

				// 3 baar System.out.print ^^^ in sab ke liye
			}

			rs.close() ;
			st.close() ;
			conn.close() ;
		}
		catch( SQLException se)
		{
			se.printStackTrace() ;
		}
		catch( Exception e )
		{
			e.printStackTrace() ;
		}
	}
}
```

_____________________________________________________________________________________

Difference between length and length()
-------------------------------------

length jo hai vo data member hai Array class ka yaani int[], float[], and String[]  (array of strings)
pe kaam karega <br>

length() method hai and String class se associated hai...yani hume call karna padega and vo String ki
length return kar dega

_____________________________________________________________________________________

```java
//To find IP Address of any website using InetAddress class
import java.net.* ;
import java.util.Scanner ;

class Address
{
	public static void main(String[] args) {
		Scanner input = nre Scanner(System.in) ;
		System.out.println("Enter name of website") ;
		String str = input.nextLine() ;
		InetAddress add = InetAddress.getByName(str) ;

		//Ab InetAddress ki object me vo website ki details aa gayi
		System.out.println(add.getHostName()) ;		//website ka name
		System.out.println(add.getHostAddress()) ;	// website ka IP Address
	}
}
``` 

_________________________________________________________________________________

Difference between JDBC and ODBC
-------------------------------------

[Ye page Khol](https://techdifferences.com/difference-between-jdbc-and-odbc.html)

_____________________________________________________________________________________

Client-Server Communication using Socket and ServerSocket
-------------------------------------

[Ye page Khol](https://www.javatpoint.com/socket-programming)

_____________________________________________________________________________________

String vs StringBuffer vs StringBuilder
---------------------------------------
<table>
	<tr>
		<th> String</th>
		<th> StringBuffer </th>
	</tr>
	<tr>
		<td> 1. String is an immutable object (once created cannot be changed) </td>
		<td> 1. StringBuffer is a mutable object we can change its value again & again </td>
	</tr>
	<tr>
		<td> 2. String once assigned cannot be changed as it is stored in the <b>Constant 
		String Pool</b></td>
		<td> 2. StringBuffer string can change its value because it is stored in heap </td>
	</tr>
	<tr> 
		<td> 3. It is slightly faster in access </td>
		<td> 3. It is slower in access </td>
	</tr>
</table>

 > They have one similarity that they are both Thread safe(They cannot be used
  by 2 threads at the same time)

> However, they are different from StringBuilder which is also mutable but it 
is not thread safe, it can be accessed by many threads at once and it is the
fastest in access 
_____________________________________________________________________________________

JDBC
------
Java Database Connectivity (JDBC) is an API specifying interfaces for accessing relational
 databases. JDBC helps to connect to a database, send queries and updates to the database
 and retrieve and process the results obtained from the database for queries.

JDBC Architecture
-----------------
The JDBC architecture supports two-tier and three-tier processing models for accessing a
database.

<dl>
	<dt> 2 -tier architecture </dt>
	<dd>In the two-tier model, a Java applet or application communicates directly to the
	 data source. The JDBC driver enables communication between the application and the
	 data source. When a user sends a query to the data source, the answers for those 
	 queries are sent back to the user in the form of results.
	 The data source may not always be a single machine located at a single place. It can
	  be located on a different machine on a network to which a user is connected. </dd>
	 <dt> 3-tier architecture </dt>
	 <dd> In the three-tier model, the user’s commands or queries are sent to middle-tier services, from which the commands are again sent to the data source. The results are sent back to the middle tier, and from there to the user. Application deployment also becomes easy and provides performance benefits. The middle tier is usually written in C or C++. </dd>
</dl>

JDBC DriverManager
------------------
The JDBC driver manager is a traditional backbone of the JDBC architecture, which specifies objects for connecting Java applications to a JDBC driver. 

The DriverManager class acts as an interface between user and drivers. It keeps track of the drivers that are available and handles establishing a connection between a database and the appropriate driver.

**Methods** <br>
getConnection( String ) -> Connects to database whose URL is provided as String <br>
getConnection( String, String, String) -> Connects to database with (URL, username, password)
<br>
registerDriver(String) -> load the driver with given path <br>
deregisterDriver( String) -> unload the given driver <br>
getDrivers() -> returns a list of all connected drivers <br>

______________________________________________________________________________________
JDBC types of statement
-----------------------
There are 3 types of Statements, as given below:
<dl>
<dt>Statement:</dt>
<dd>It can be used for general-purpose access to the database. It is useful when you are using
 static SQL statements at runtime. </dd>
<dt>PreparedStatement:</dt>
<dd>It can be used when you plan to use the same SQL statement many times. The PreparedStatement
 interface accepts input parameters at runtime.</dd> 
<dt>CallableStatement:</dt>
<dd>CallableStatement can be used when you want to access database stored procedures.</dd>
</dl>

______________________________________________________________________________________

Steps in JDBC
-------------
The steps involved in making a JDBC application consist of the following:

<ul>
	<li>Import JDBC packages.</li>
	<li>Load and register the JDBC driver.</li>
	<li>Open a connection to the database.</li>
	<li>Create a statement object to perform a query.</li>
	<li>Execute the statement object and return a query resultset.</li>
	<li>Process the resultset.</li>
	<li>Close the resultset and statement objects.</li>
	<li>Close the connection.</li>
</ul>

Sabki explanation khud likh diyo code main de rha

**Import JDBC packages**
```java
	import java.sql.* ;
```
**Load and Regitser Driver**
```java
	//main ke bahar
	final static String driver= "com.mysql.jdbc.Driver" ;

	//main ke andar
	Class.forName(driver)
```
**Connect to Database**
```java
	//main ke bahar
	final static String URL="jdbc:mysql://localhost/database" ;
	final static String user = "Lalit" ;
	final static String pass = "123456789"
	//main ke andar
	 Connection conn = null ;
	 conn = DriverManager.getConnection(URL, user, pass) ;
```
**Create a statement object**
```java
	Statement st = null ;
	st = conn.createStatement() ;
```
**Execute Statement and return ResultSet**
```java
	String str = "SELECT * FROM user" ;
	ResultSet rs = st.executeQuery(str) ;
```
**ResultSet pe kaam**
```java
	while(rs.next())
	{
		//Jo bhi kaam karna hai
		int xyz = rs.getInt("columnName") ;		//Aise get karo
		String str - rs.getString("dusraColumn") ;		//Similarly
	}
```
**Close ResultSet, Statement and Connection**
```java
	rs.close() ;
	st.close() ;
	conn.close() ;
```

______________________________________________________________________________________

JAVA buzzwords(Features of JAVA)
-------------------------------
<ol type="i">
	<li> Simple</li>
	<li> Secure</li>
	<li> Portable</li>
	<li> Object-Oriented</li>
	<li> Robust</li>
	<li> Multithreaded</li>
	<li> Platform-Independent</li>
	<li> Interpreted</li>
	<li> High-Performance</li>
	<li> Dynamic</li>
</ol>

______________________________________________________________________________________

Thread Synchronization
----------------------
[Ye page Khol](https://www.studytonight.com/java/synchronization.php)

______________________________________________________________________________________

Byte Stream Class And Character Stream Class
-------------------------------------

[Ye page Khol](http://net-informations.com/java/cjava/stream.htm)

______________________________________________________________________________________
Difference between Awt(Applet) & Swings
---------------------------------------
<table>
	<tr>
		<th> <strong> AWT </strong> </th>
		<th> <strong> Swings </strong> </th>
	</tr>
	<tr>
		<td> AWT(Abstract Window Toolkit) is a portable GUI library for stand-alone 
		applications and/or applets.</td>
		<td> Swings is a set of GUI components that build on AWT technology and provide 
		a pluggable(can be changed at runtime) look and feel.</td>	
	</tr>
	<tr>
		<td> It is a heavy-weight library.</td>
		<td> It is a light-weight library.</td>
	</tr>
	<tr>
		<td> They are not written in complete Java.</td>
		<td> They are written in 100% Java.</td>
	</tr>
	<tr>
		<td> AWT Components are platform-independent becuase they aren't written 
		completely in Java.</td>
		<td> Swing Component are platform-independent as they use Pure Java.</td>
	</tr>
	<tr>
		<td> Import using "java.awt.*" library.</td>
		<td> Import using "javax.swing.*" library.</td>
	</tr>
	<tr>
		<td>Has many rich GUI features</td>
		<td>All the features of GUI+Additional newer features</td>
	</tr>
	<tr>
		<td>No Pluggable Look & Feel</td>
		<td>Pluggable Look & Feel</td>
	</tr>
</table>

______________________________________________________________________________________

jo bhi add karna hai yaha kar diyo
