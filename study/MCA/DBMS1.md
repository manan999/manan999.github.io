# DBMS (Unit 1)
_____________________

What is a Database?
-------------------

//Explanation <br/>
Database ek collection hai aise data ka jo aapas me related ho
- Kisi real-world enterprise ya organisation ke data ko represent karta hai (jaise library ke books ka data, ya bank ke account ka data)
- Us enterprise ke kisi specific purpose ke liye hi banaya jata hai (jaise managing ya fir accounting)
- Database se enterprise ke kaam me madad milti hai aur enterprise database ko baar baar update karta hai ( jaise bina account database ke bank ka kaam nahi ho sakta)


Database is a collection of inter-related data
- It represents the data of a real-life organisation or enterprise. (e.g - Bank Account Database, Library Book Management System)
- It is created only to serve a specific purpose to that enterprise. (e.g - Managing Library or Accounting)
- Database supports the activites of enterprise and enterprise regularly updates the database (e.g- Banks cannot function without account database)

_____________________

What is DBMS (Database Management Systems)?
---------------------------------------

//Explanation <br/>
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

<b>1-Tier Architecture</b>: <br/> 
- This is simplest database architecture where a user directly uses the database terminal and performs tasks on it. 
- Any changes made are reflected directly into the database. 
- This is not suitable for users with no techincal knowledge becuase there are no useful tools like GUI, charts and visualisations. 
- A Programmer or Database Designer may prefer to work with this architecture becuase it is faster and they have the technical knowledge required. However, it is still uncommon becuase it is easy to make errors that are permanent.

<b>2-Tier Architecture</b>: <br/>
- When the database has an application like a Front-End through which database can be accessed it is known as 2-Tier Architecture.
- The application through which the database is accessed is entirely independent of database in terms of operations, design and programming. 
- It is suitable for application programmers or people with little techincal knowledge becuase it is easy to use and provides some features specifically to make it easy for End-User to work on database.

<b>3-Tier Architecture</b>: <br/> <a href="https://raw.githubusercontent.com/manan999/manan999.github.io/master/study/images/image_2021-02-07_211141.png">Diagram </a>
- This architecture adds another layer between the database and the user. The 3 layers are: 
	- <b>Database Layer</b>: This layer consists of database itself alongwith the query languages, relationships and schemas. This can also be called the Physical Layer because it contains the data.
	- <b>Application Layer</b>: This layer consists of an application server which can access and manipulate the database. Main purpose of this layer is to provide abstraction to both End-Users as well as Database. Database layer is unaware of existence of User Layer & User Layer is unaware of existence of Database Layer. 
	- <b>User Layer / Presentation Layer</b>: This is the layer that user operates on. It consists of multiple database views which can specific for each users. As the Views are generated by Application Layer they provide an overview of database and no changes are reflected in the database.
- This is suitable for large web-applications where end-user only cares about results and not database

//Explanation
1-tier: Isme kuch nahi hota seedha terminal se database pe commands likh do, jo changes honge directly database me honge permanently. aisa SQL ke time par karta tha main, jaise Marvel ki queries jo pehle .SQL file me save kar liya sublime text par, uske baad terminal me copy-paste kar diya. But kyonki mujhe saari baate pata thi DB ke bare me, sirf isiliye nibh rahi thi. In this situation also, agar koi query galti se run ho gayi to koi zariya nahi hai vapas lane ka...to ye cheez bahut chote and specific database pe hi nibh sakti hai 

2-tier: Isme database pe directly kaam nahi karte, ek application ke through karte hai(jo generally front-end hota hai), koi bhi changes directly nahi hote, kyonki application hai to user se puch sakta hai ki confirm hai ya nahi changes. Jaisa hum mongodb ki website kholkar database me changes karte vo is cheez ka loose example hai. Programmer ke liye suitable hai ye

3-tier: Isme 3 layer hoti hai database, application layer aur presentation/user layer, isko aise samjho hum jo bhi app banate hai usme ek front end hota hai, ek backend ek database. Front end react app ko sirf URL pata hai application server ki use nahi pata ki actual database me kaam ho kaise raha hai. Jo database hai use sirf ye pata hai ki ye command run hui hai application server ke through to database me ab ye processing karni hai, Database nahi jaanta ki kisne kaise command run kari hai.
To 3 layer hui:
- Physical/Database: Jisme actual database hai (jaise humara mongodb)
- Application/Server Layer: Vo layer jo abstraction de rahi hai jisse koi end user galti se database na chhed de and database sirf vaise hi manipulate ho jo allowed hai. Ye Most important layer hai kyonki ye baki dono layers ki beech ka communication kara rahi hai (jaise humara nodejs app)
- Presentation/User Layer: Is layer pe user kaam karta hai saare 'fancy' features isme hote hai. Most important feature hota hai 'Views' jaise apna admin panel hai, vaha kuch bhi searching sorting ho, sirf user ke liye hogi final database me nahi hogi. 

_____________________

Database Schema
---------------

- A database schema is the structure of the database that describes:
	- different entities in the database
	- their relationships among each other
	- constraints on the data
	- how data is organised. 
- It contains a detail description of the database and it can be also be represented visually using ER diagrams or Flow charts. 
- It is designed by the database designers to help programmers understand the database and make it useful. This is very important for designing the Application Layer of a database becuase without the application programmers may not know internal details about the data and schema can help them understand the database.
- It may be designed before the database, when no data exists. 

// Explanation
- Schema is basically database ka dhancha jo batata hai ki data
	- kaise organise ho raha hai(kya kya tables hai)
	- kaise store ho raha hai(attributes kya kya hai)
	- relationships kya hai unke beech( common attributes ya foreign keys)
	- constraints kya hai data par(jaise hum checks lagate hai ki unique, required)
- Schema ko visually bhi dikhana asan hai actual database ko nahi dikha sakte visually
- Schema ke through hi database dusro ko samjhaya ja sakta hai, jaise jo application programmer hai, vo bina schema ke application server design nahi kar payega. Soch kar dekho agar backend server banate wakt tumhare paas models wala folder na ho to kitni dikkat rahegi.
- Mainly Programmers and designer ki understanding ke liye zaruri hai, end-user ko koi matlab nahi hai
- Ye bina data ke bhi banaya ja sakta hai, database se pehle

___________

Database Instance
-----------------

- This is very different from database Schema becuase schema is created when data doesnt exist. Database Instance is the operational database at any particular point in time. It contains the actual data. It can be called snapshot of the database
- DBMS has to ensure that each database instance is a valid instance, according to the schema and follows all the rules and constraints on the database which have been imposed by database designers.
- This can never exist in single-tier architecture thus multi-tier architectures for databases are very important to maintain consistent data with no errors.

// Explanation
- Database Schema se opposite samajh lo, schema jaise theoretical hai ki data aise store hona chahiye, instance(hindi me udaharan) yani ki kisi particular point par database ki values. Aisa keh lo ki database ka snapshot le liya.
- example ke liye humara psyment ka database hai isko main database instance bol sakta hu, suppose pure database me ek single value change ho jati hai, to dusra instance ho gaya vo, suppose kuch add/less hua to vo ek aur instance ho gaya..samajh rahe ho
- DBMS ko ensure karna hota hai ki har ek instance according to rules and constraints hi ho(jaisa hum har ek value updation, deletion, creation se pehle check karate hai ki sahi ho rahi hai na)
- single-tier me ye cheez nahi ho sakti isiliye uska ek aur drawback hai ye, and ye keh lo ki aur reason hai ki 2ya 3 tier architecture kyu hona chahiye

____________
   
