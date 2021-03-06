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

- <b>Simple Attribute</b>: The attribute which contains atomic values that cannot be divided further. <br/>For Example: Mobile or Gender of a student.
- <b>Composite Attribute</b>: The attributes which contains 2 or more Simple Attributes. <br/>For Example: Name of a person may contain First_Name and Last_Name
- <b>Derived Attribute</b>:
	- This attribute is NOT STORED in the physical database.
	- These attributes have values which can be calculated easily from other attributes stored in database.
	- Examples include: Age can be derived from DOB, Average Marks can be derived by applying calculations.
- <b>Single-Value Attribute</b>: Attributes that MUST contain a Single Value.<br/>For Example: Roll No of a Student
- <b>Multi-Valued Attributes</b>: Attributes that MAY contain more than one value. <br/>For example: Phone no. or Email of a person


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

//Diagrams daalne hai iska 

________________________

ER Diagram Representations
--------------------------

<b><ins>Entity</ins></b>

- Entitites are represented using rectangles. <a href="https://www.tutorialspoint.com/dbms/images/entities.png">[Diagram]</a> Each entity must have a primary key. 
- Entites that do not have a primary key are called <b>Weak Entity</b>, they are denoted by Double Rectangle. <a href="https://thealienadventures.files.wordpress.com/2013/02/weak-entity.jpg">[Diagram]</a> 

<b><ins>Attributes</ins></b>

- Attributes are the properties of entities. They are represented using an "Ellipse". <a href="https://www.tutorialspoint.com/dbms/images/er_attributes.png">[Diagram]</a>
- Composite Attributes are denoted using a tree-like structure. <a href="https://www.tutorialspoint.com/dbms/images/er_attributes_composite.png">[Diagram]</a>
- Multi-valued Attributes are denoted using Double Ellipse. <a href="https://www.tutorialspoint.com/dbms/images/er_attributes_multivalued.png">[Diagram]</a> 
- Derived Attributes are represented using dotted or dashed ellipse. <a href="https://www.tutorialspoint.com/dbms/images/er_attributes_derived.png">[Diagram]</a>

<b><ins>Keys</ins></b>

- Primary Key attribute is denoted using an Underline. <a href="https://raw.githubusercontent.com/manan999/manan999.github.io/master/study/images/Primary%20Key.svg">[Diagram]</a>
- Foreign Key attribute is represnted like any normal attribute.
- Weak Entity forms a composite key with a Strong Entity. Since it has no primary key itself, it will distinguish itself using primary key of a strong entity. It is of the form {primary_key_strong, any_attribute_weak}. It is denoted by a dashed underline.  <a href="https://www.gatevidyalay.com/wp-content/uploads/2018/05/Weak-Entity-Set-Example.png">[Diagram]</a>

<b><ins>Relationship</ins></b>

//Definition in sab ki upar given hai, yaha kewal diagrams dikha raha hu

- One-to One: <a href="https://www.tutorialspoint.com/dbms/images/er_relation_one_to_one.png">[Diagram]</a>
- One-to Many: <a href="https://www.tutorialspoint.com/dbms/images/er_relation_one_to_many.png">[Diagram]</a>
- Many-to One: <a href="https://www.tutorialspoint.com/dbms/images/er_relation_many_to_one.png">[Diagram]</a>
- Many-to Many: <a href="https://www.tutorialspoint.com/dbms/images/er_relation_many_to_many.png">[Diagram]</a>

<b><ins>Participation in a Relationship</ins></b>

- Total Participation: 
	- When each entity is fully involved in a relationship. It is denoted by Double-Lines.
	- Weak Entity must have a 1:n Relationship with Total participation to the Strong Entity which is being used to identify the weak entity. 
- Partial Participation: When an entity is part of relationship but not fully dependant on it. 
- <a href="https://www.tutorialspoint.com/dbms/images/er_relation_participation.png">[Diagram]</a>

____________________

ER Diagram Concepts
-------------------

<ins><b>Generalization</b></ins>: When 2 or more entities share similar attributes, they can brought under a single big entity, this is known as generalisation. This can be called a Bottom-Up approach, where different subclasses are joined to form a superclass. <br/><a href="https://www.tutorialspoint.com/dbms/images/generalization.png">[Diagram]</a>

//You can take diagram as example and explain

<ins><b>Specialization</b></ins>: It is the opposite of Generalisation, when an entity is divided into various other entities so that each divided entity can be given special attributes it is called Specialisation. It can be called a top-down approach and entities are said to be in "IS A" relationship. For Example, Person IS A Teacher, Person IS A Student. <br/><a href="https://www.tutorialspoint.com/dbms/images/specialization.png">[Diagram]</a>   

<ins><b>Aggregation</b></ins>: ?


_____________________

ER to Relational Mapping
--------------------------

<b>Yaani ki ER Diagram Given ho usse tables kaise banaye</b>

Steps:
1. <b>For entity(Rectangle)</b> 
	- Create Table for each Entity
	- Their attributes will become columns for the table 
	- Underlined attribute will become Primary Key of the table

// Normally Entity ki table bana do...and normally uske attributes lag jayenge
<br/>Agar ER <a href="https://www.tutorialspoint.com/dbms/images/mapping_entities.png">[Diagram]</a>. Equivalent table will be : <br/>
- Student(<ins>Roll No</ins>, Name, Class, Subject)

2. <b>For Multi-valued Attribute(double ellipse)</b>
	- Create separate Table for Multi-valued attribute
	- Primary Key of original table will be foriegn key, other attribute in this table will be the multi-valued attribute
	- Primary key of this table will be composite key, created from both the attributes

// Example se clear ho jayega 
<br/> Agar ER <a href="https://www.gatevidyalay.com/wp-content/uploads/2018/06/Multi-Valued-Attributes-Example.png">[Diagram]</a>. To, 3 tables banengi : <br/>
- Student(<ins>Roll No</ins>, Name, Age)
- StudentMobile(<ins>Roll No, Mob_no</ins>)
- StudentEmail(<ins>Roll No, Email_id</ins>)
<br/>// suppose ab agar 1 se zyada mobile hote hai student ke to mobile table me 2 rows create kar sakte hai

3. <b>For Composite Attribute(tree-like structure)</b>
	- Split Composite Attribute into its components
	- Add each component as separate attribute in the original table

// isme sirf attributes zyada add ho jayenge, example dekho
<br/> Agar ER ye hai <a href="https://www.tutorialspoint.com/dbms/images/er_attributes_composite.png">[Diagram]</a>. To table banegi: <br/>
- Student(<ins>Roll No</ins>, birthdate, firstName, lastName)
<br/>// original name attribute dala hi nahi alag se

4. <b>For Derived Atrribute(Dotted ellipse)</b>, it is ignored while mapping becuase it doesnt exist in physical table

//Yaha tak ka example. Consider this ER <a href="https://lh3.googleusercontent.com/proxy/Q2L36DIUroIPGC45_IbteIOsQo5je0fEIm2uLd20caPHgyxSchkGwGTLMku32Eh4TZCsVWdyHmph9KFKYCsBxKZHRfGeeuy1TDwRlPWgM_W1HFQIHbzI2w">[Diagram]</a> 2 tables banengi: <br/>
- Person( <ins>SSN</ins>, address, birthdate, first, last)
- PersonHobby(<ins>SSN, Hobby</ins>)

5. <b>For 1:M Relationship / M:1 Relationship</b>  
	- Create Table for entity following rules 1-4.
	- Key of 'm' side of relation is added as foreign key to '1' side table. 
	- All attributes of relation are added to '1' side table.

// Example se clear ho jayega 
<br/> Agar ER <a href="https://res.cloudinary.com/practicaldev/image/fetch/s--0Y3Cn22h--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/kezcji5eev1sk9tqn8w7.png">[Diagram]</a> 2 tables banengi: <br/>
- Student(<ins>Roll No</ins>, name, class)
- Course(<ins>Course Code</ins>, CourseName, duration, Roll No, Date_of_enrol)
 
6. <b>For M:N relationship</b>
	- Create separate table for relationship
	- Add Primary key of all participating entities as foreign key.
	- Add all relationship attribtutes
	- Primary key will be composite key created from all foreign keys

// Example se clear ho jayega 
<br/> Agar ER <a href="https://res.cloudinary.com/practicaldev/image/fetch/s--GGZdD9Lx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9e2hipmk4by36xcqfomh.png">[Diagram]</a> 3 tables banengi: <br/>
- Student(<ins>Roll No</ins>, name, class)
- Course(<ins>Course Code</ins>, CourseName, duration)
- Enroll(<ins>Roll No, Course Code</ins>, Date_of_enrol)

7. <b>For 1:1 relationship</b>
	- <b>Agar relationship ka koi attribute hai</b>, Same procedure as M:N
	- <b>Agar Relationship attribute nahi hai</b>, Same procedure as 1:M (bas kisi bhi ek table me foreign key le sakte hai)

8. <b>For Weak Entity(Double Rectangle)</b>
	- Same starting procedure as normal entity
	- Add Primary key of strong entity as Foreign Key
	- Primary Key of this table is composite key created from primary key of strong entity

// Example se clear ho jayega 
<br/> Agar ER <a href="https://www.tutorialspoint.com/dbms/images/mapping_weak_entity_sets.png">[Diagram]</a> 2 tables banengi: <br/>
- Student(<ins>Roll No</ins>, name)
- Dependant(<ins>Name, Roll No</ins>)

_____________________