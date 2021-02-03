# DBMS (Unit 1)
_____________________

What is a Database?
-------------------

//Explanation
Database ek collection hai aise data ka jo aapas me related ho
- Kisi real-world enterprise ya organisation ke data ko represent karta hai (jaise library ke books ka data, ya bank ke account ka data)
- Us enterprise ke kisi specific purpose ke liye hi banaya jata hai (jaise managing ya fir accounting)
- Database se enterprise ke kaam me madad milti hai aur enterprise database ko baar baar update karta hai ( jaise bina account database ke bank ka kaam nahi ho sakta)*/

Database is a collection of inter-related data
- It represents the data of a real-life organisation or enterprise. (e.g - Bank Account Database, Library Book Management System)
- It is created only to serve a specific purpose to that enterprise. (e.g - Managing Library or Accounting)
- Database supports the activites of enterprise and enterprise regularly updates the database (e.g- Banks cannot function without account database)

_____________________

What is DBMS (Database Management Systems)?
---------------------------------------

//Explanation
vo ek set of programs(yani software) hai jisse kisi bhi organisation ke data ko manage karna na sirf asan ho jaye balki use retrieve karna, manipulate karna aur usse koi meaningful jaankaari nikalna bhi easy ho jaye. Jis kaam ke liye database banaya gaya hai ( for example, taaki accounting bina error ke ho sake) us kaam ko DBMS bahut easy kar deta hai tools provide karke (jaise error checking, Locks)

DBMS are a set of programs(software) that allow an organisation to not only manage their data efficiently but also makes it easy to retrieve, manipulate and gain information from that data. DBMS makes it easy for a database to achieve its desired purpose with the help of various tools. (For example, DBMS may provide tools like Error Checking Techniques, Write Locks etc, to efficiently perform accounting in a Bank Database)

_Note: Software ka plural bhi software hi hota hai, "Softwares" kuch nahi hota_

____________________

Characteristics of DBMS
----------------------

- <b>Realistic</b>: A modern DBMS uses real-world entities to design its architecture, including their behavior and attributes. For example, a school database may use students as an entity and their age as an attribute.
- <b>Relation-based tables</b>: DBMS stores entities and relations in the form of tables. A user can understand the architecture of a database just by looking at the table names.
- <b>Isolation of data from its application</b>: DBMS is separate from its data. DBMS is an active entity because it organises the data, whereas data is said to be passive. DBMS also stores metadata, which is data about data, to ease its own processing.
- <b>Less redundancy</b>: When any data is stored more than once, either directly or indirectly it is called <b>Data Redudancy</b>. DBMS performs normalization to reduce Data Redundancy   
- <b>Consistency</b>: Consistency in DBMS refers to the requirement that any given database transaction must change data only in allowed ways. Any data written to the database must be valid according to all defined rules and constraints.
- <b>Querying</b>: DBMS is equipped with query language, which makes it more efficient to retrieve and manipulate data. A user can apply different filtering options as required to retrieve a set of data. 
- <b>Multiuser Access</b>: DBMS supports multi-user environment and allows them to access and manipulate data at the same time. Though there are restrictions on transactions when users attempt to handle the same data item, but users are always unaware of them.
- <b>Multiple Views</b>: DBMS offers different views for different users. This feature enables the users to have a specific view of the database according to their requirements. A user in the Sales department will have a different view than a person in the Production department. 
- <b>Security</b>: DBMS offers security because users are unable to access data of other users. A user can gain access to the database only after the login through valid user accounts. Each user account is password protected.

// Explanation
- Realistic: DBMS real-entity pe based hota hai and unke behaviours and attributes to lekar chalta hai
- Relation-based Tables: Relations ke according table-form me data store karta hai, Jisse kisi bhi user ke liye data read karna easy ho jaye
- Isolation: Yani ki data &#8800; DBMS, yani ki DBMS active hai kyonki vo kuch kaam kar raha hai, data sirf stored hai isilye vo passive. Aur DBMS me metadata bhi hota hai(data about data)
- Less Redudancy: Dekhta hai ki data baar baat na stored ho, e.g- age & dob dono stored na ho. Foreign key is one tool for reducing redundancy
- Consistency: DBMS me data humesha 'Consistent' yani trusted ho, galat na ho, iske liye DBMS ka data constraints ke under rehta hai
- Querying: DB pe asani se query karke sirf required data hasil kiya ja sakta hai
- Multiuse access: Ek sath kai log access kar sakte hai, even though internally 2 log same time pe same cheez nahi chhed sakte, ye cheez un logo ko nahi zahir hoti
- multiple view: 2 users ko zauri nahi ki same database dikhe, unke kaam ke according thoda different database dikh sakta hai(Database view) jabki data same hai
- Security: koi user kisi aur ka data access nahi kar sakta, aur vo data access nahi kar sakta jiske liye vo unauthorsied ho

________________________

Database Users
--------------

//explanation
Teen major users hote hai
1. Database Administrator(DBA): DBA ke paas superuser account hota hai, vo sara data access kar sakta hai. Agar kisi new user ko account create karna hai to DBA se permission leni hogi. Security ke liye zimmebaar hai ye, dhyan rakhega ki sirf authorised user hi data access kar paye. Tehcnical support deta hai jise chahiye ho. Agar Hardware/Software failure ho jaye use sambhalta hai. Recovery & Backup me bhi madad karta hai. (Basically DBMS ka karta dharta)
2. End User/Naive User: Jin user ko database ki koi internal jankari nahi hai, na hi inpe koi zimmedaari hai. Ye sirf Db ki applications ko use karte hai daily life me. (jaise railway ticket booker, bank me clerks)
3. Application Programmer/ Database Designer: Ye log Computer professionals hote hai, programmer database ka code lihhega. Designer Db ka schema and constraints design karta hai

_Important Note: Question ke hisab se aur users bhi daal sakte ho jaise Db Tester(jo Db ki testing kare), System Analyst( Data ko analyse kare ki sahi hai ya nahi), Sophisticated User(Naive User and DbA ke beech ka, ise use to karna hai data but ise thodi jankari/authorisation bhi hai), Temporary User(jise sirf ek operation ke liye data ka access milta hai)_ 


There are 3 major kinds of Database Users
1. <b>Database Administrator (DBA)</b>: They have the superuser access to the Database, they can access all data and have all rights. Whenever a new user wants to access DB, he/she must get the permissio nof DBA. DBA will ensure that only authorised users access the data of database. He provides technical support to any Naive User. He is reponsible for handling any Software/Hardware failure and also helps in Recovery & Back-Up. 
2. <b>End User/Naive User</b>: They are the users who have no knowledge about the internal structure of Database, but they want to use the DBMS for its applications. (like railway users who book tickets, Clerks in banks)
3. Application Programmer/Database Designer: They are computer professionals. A Programmer is responsible for writing the Database Code. System Designer will create DB Schema and make tables, add constraints.

_____________________

Types of DBMS / DBMS Models
---------------------------

1. <b>Hierarchical DBMS</b>: In a Hierarchical database, data is organized in a tree-like structure. Data is Stored Hierarchically (top down or bottom up) format. Data is represented using a parent-child relationship. In Hierarchical DBMS parent may have many children, but children have only one parent.

2. <b>Networking DBMS</b>: In this model, entities are organized in a graph, each entity can be accessed through several paths. The network database model allows each child to have multiple parents. It helps you to address the need to model more complex relationships like many-to-many relationship. (Jaisa DWDM me design kara tha)

3. <b>Relational DBMS (RDBMS) </b>: (Jo hum padhenge) Relational DBMS is the most widely used DBMS model because it is one of the easiest. This model is based on storing normalized data in the form of tables. Relational model stores data in fixed structures and can be manipulated using SQL.

4. <b> Object-Oriented Database </b>:  It defines a database as a collection of objects which stores both data values and member functions. Data is stored in the form of objects. (MongoDB me hum ye karte hai)

//Explanation required nahi hai shayad

_____________________

DBMS Architecture
-----------------



