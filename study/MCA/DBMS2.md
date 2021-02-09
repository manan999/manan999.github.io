# DBMS (Unit 1)
_____________________

ER Diagram (Entity - Relationship Diagram)
-----------------------------------------

- ER diagram is used to represent the entites in a database and their relationship in a visual manner.
- It gives an overview of the database and is part of metadata.
- It is very useful when designing databases.

//Explanation
- Database ki entitites aur relationship ko visual manner me batate hai isse
- database design karte vakt bahut kaam aata hai

____________________

Entity
------

- An entity is any real-world object(can be both living or non-living), which has some attributes that give them an identity. e.g- School, Teacher, Employee, User, Book

Attributes
----------

- They represent the properties of an Entity. <br/>For e.g- Student can have Name, Age, Gender, Class, Section, etc. These are all called attributes
- Attributes must have fixed set or range of values that can be assigned to it. <br/>For example- Class attribute for student can only have values 1-12, Gender can only have 'M' or 'F'
- Attributes should also have constraints over them to make them more robust and reliable. <br/>For example- Name of a person cannot contain numeric values.

Types of Attributes
------------------

- <b>Simple Attribute</b>: The attribute which contains atomic values that cannot be divided further. <br/>For Example- Mobile or Gender of a student.
- <b>Composite Attribute</b>: The attributes which contains 2 or more Simple Attributes. <br/>For Example- Name of a person may contain First_Name and Last_Name
- <b>Derived Attribute</b>:
	- This attribute is NOT STORED in the physical database.
	- These attributes have values which can be calculated easily from other attributes stored in database.
	- Examples include: Age can be derived from DOB, Average Marks can be derived by applying calculations.
<br/>
- <b>Single-Value Attribute</b>: Attributes that MUST contain a Single Value. F<br/>or Example- Roll No. of a Student
- <b>Multi-Valued Attributes</b>: Attributes that MAY contain more than one value. <br/>For example- Phone no. or Email of a person

_Note: Each Attribute may fall in more than one category, jaise Derived single-value attribute, Simple Multi-value attribute, etc._

//Explanation required hogi to likh dunga

______________________

Keys
-----

//Iski Detailed Explanation baad me ayegi, ya fir yahi par edit kar dunga

- Any attribute(or set of attributes) which can be used to uniquely identify a tuple in a set of tuples is called a KEY.
- There are various types of keys
	- <b>Super Key</b>: A set of attributes (one or more) that collectively identifies a tuple in a set are called Super Key.
	- <b>Candidate Key</b>: It is a minimal Super Key(Super Key after removing some fields). Candidate keys are a subset of Super Keys. 
	- <b>Primary Key</b>: One of the Candidate Keys, which is chosen to uniquely identify tuples. It cannot contain NULL values and must have unique values for each tuple.
	- <b>Foreign Key</b>: Used to establish relationships among tables. It is primary key of some other table that is normal attribute in the current table.

_______________________

Relationships
-------------

- The association among entities is called relationship. <br/> For example- an Employee "works at" organisation, student "goes to" school. Here "Works at", "Goes to" are relationships.
- Each Relationship has a <b>Degree:</b>how many entities are involed in a relationship, it can be Binary(2 entites), Turnary(3 Entities), m-ary(m entitites)
- Each Relationship also has a <b>Cardinality:</b> Which specifies no. of tuples in one set which can be related to no. of tuples it the other set.
	- 1:1 (One-to-One): Each tuple can be related to only one tuple in other set
	- 1:m (One-to-Many): Each tuple can be related to many tuples in other set
	- m:1 (Many-to-One): Many tuples can be related to single tuple in other set
	- m:n (Many-to-Many): any tuples can be related to any number of tuples in other set

________________________

ER Diagram Representations
--------------------------

