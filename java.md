Inetaddress class - it is a class which is used to access the ip Address as well as name
for the host or another computer. It stores both the address and name of the computer it 
knows about.

It has a private method its object can only be created using a factory method

Factory method yani hum "new" likh ke object nahi bana payenge we have to use the factory methods

Factory methods
---------------
**getLocalHost()** -> To get the IP address of current computer <br>
**getByName()** -> To get IP address of another computer(jiska naam paas karenge)

Other Methods
--------------
**getHostAddress()** -> Jo computer stored hai uska address return karo <br>
**getHostName()** -> Jo computer stored hai uska name return karo

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
           System.out.println(AddressG.getHostName());			//Google ka IP address
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
getName() 	-> Gets Thread Name as String  <br>
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
