Classification & Prediction (similarity and difference)
--------------------------------------------------------

Dono hi current data ka analysis karke future trends ko predict karte hai. 

Classification
--------------

1. Process in which data is assigned to classes or class labels
2. Done for unorganised data (jo numbers pe depend nahi hai)
3. Final result is called Class Label


Prediction
-------------

1. Process of constructing next value from the current value
2. Done for continous-valued data (numbers)
3. Final result is simply called predicted value

___________________

Decision Tree Classification
---------------------------
A decision tree is a flowchart-like tree structure, where each internal node (nonleaf node) 
denotes a test on an attribute, each branch represents an outcome of the test, and each leaf
node (or terminal node) holds a class label. The topmost node in a tree is the root node.


Decision trees can easily be converted to classification rules.

The construction of decision tree classifiers does not require any domain knowledge and hence it suitable for mining if you dont have deep knowledge about the data. 

Decision trees can handle high dimensional data eaily.

They are really easy to understand by humans. 

Very low tolerance to noisy data, even a single noisy value can change enitre result. 

It is faster at being created by computer and follows simple methods, like if-then-else.

It follow "Top-Down Recursive Divide-and-Conquer" Approach

_________________

For measuring attribute strength in clasification:

**Information Gain :** Baised towards attributes with multiple values

**Gain Ratio :** Biased towards simple classification class labels

**Gini index :** Biased towards dividing in roughly equal number groups, results in many classes

___________________

Back-Propogation
----------------

Backpropagation is a neural network learning algorithm.

Neural network is a set of connected input/output units in which each connection has a weight associated with it. During the learning phase, the network learns by adjusting the weights to be able to predict the correct class label. most widely used neural network algorithm is backpropogation. 

It has a long computation time. 

The usage of back-propogation classifiers does not require any domain knowledge and hence it suitable for mining if you dont have deep knowledge about the data. 

Not easy to understand and not easy to generate rules.

it has a very high tolerance for noisy data. 

cannot handle high dimonsions. 

_________________

Eager-Learning example: Decision Tree & Backpropogation

Lazy-Learning Example: 

KNN Algorithm(K - nearest Neighbours)
-------------------------------------

Sirf kuch attributes dekhta hai, then baaki classification ke basis pe jo most probable class label hoga, vo assign kar deta hai. 

Error percentage high hai, and agar bahut zyada dimensions hue to accuracy kaafi kam ho jati hai. 

Case-Based algorithm
--------------------

Har row ko alag case assume karta hai and agar, 2 rows ka similar 'case' hai yaani same ya as pas values hai to assign kar deta hai class label, accuracy KNN se zyada hai but vaise kam hi hai

______________________