[Algorithm ki definition]

Kisi bhi programming language me 6 tarah ki statements hoti hai 
- input
- output
- assignment
- conditional
- loop
- functions/methods

_______

Types of Data Structures
--------------------------

## Array 
- simplest
- built in data structure
- single/multi-dimensional (zyadatar 2-D hoti hai at most, kahi kahi 3-D hoti hai)
- sabse easy hai searching karne ke liye
- continous memory location pe stored hoti hai

<ul>  *Advantages* 
  <li> Random Access (directly kisi bhi element ko access kiya ja sakta hai)(har element ko access karne me same time lagta hai, yaani pehla element or chautha element same time ke andar access ho jata hai)</li>
  <li> Binary Search possible (binary search dyan hai na?)</li>
</ul>

<ul>*Disadvantages* 
  <li> Size fixed hota hai</li>
  <li> Size increase kiya ja sakta hai lekin run time pe nahi</li>
  <li> In between insertion and deletion is very difficult</li>
  <li> Cts memory locations chahiye hote hai to, storage difficult hai(agar total 40 MB chahiye but cts nahi hai 40 MB parts me hai, to array nahi store ho payegi)</li>
</ul>

- JO JO array ka drawback hai , vo linked list ka advantage hai, lekin jo array ke advantage the vo uske disadvantage hai

## Linked List 
- sirf sequential access possible hai
- searching and sorting kafi mushkil hai 
- lekin insertion deletion asan hai even in the middle
- lekin *Stack* and *Queue* ki implementataion me LL kaafi appropriate hai

## Trees
- It can take care of disadvantage of both arrays and LL
- But it is non-linear data structure 
- thoda complex hai
- root node ke through hi access kiya ja sakta hai sirf 
- eg(BST, AVL, B-tree, m-way tree, etc)

- traversal techniques chahiye padti hai

_adv disadv likh lena_

## Graph 
- nodes and vertices hote hai
- any node can be connected to any vertice
- most flexible DS
- kitni bhi edges ho sakte hai (humari choice hai)
- tree can be called special case of graph

_______

Indexing ki definiton

_______

- according to sir, saare DS array ke through hi implement hote hai backend par, including 2-D Array
- 2 tarah ke DS hote hai : Internal(jo RAM pe kaam karte hai) & External(HDD me stored) (jaise B-Tree, jo Oracle DB me use hota hai vo external hai and AVL&BSt internal hai)


_________

Topics to be studied
--------------------

1. Malloc
2. Dry run karna hai notes ka
3. Sparse Polynomial (Storage, addition, multiplication)
4. Sparse Matrix (Storage, addition, multiplication)
