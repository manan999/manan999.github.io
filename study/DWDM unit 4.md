Spatial Database
---------------

Spatial Database vo hota hai jo 2 cheezo ka beech ka distance store kare, Ek aisa database jo relational database se alag hai kyonki vo ek alag tarah ka data store kar raha hai. Iske examples hai map, remote sensing data, VLSI data.

Ek spatial database ki mining se hume aise patterns mil jayenge jo sirf ek relational database ki mining se nahi milenge. ek spatial database me non-spatial data bhi hota hi hai, to hume kuch aise relationships bhi pata chal jayenge jo ki agar relational ki akele mining karte to nahi pata chalte. 

Spatial database ki application to kaafi useful hai jaise geographic information system, remote sensing applications, environment studies, navigation and traffic control. Parantu, iska data, data patterns aur data structures kaafi complex hote hai jisse Spatial data mining kaafi difficult hai.  

Spatial database banaya to ja sakta hai, parantu ye bhi kaafi difficult hai kyonki, jaise non-spatial database me approximate values likhi ja sakti hai (for example, temperature me hot, very hot, moderate), parantu spatial database me exact values honi chahiye jisse mining ka result zyada useful aaye. 

Isme sabse bade 2 challenges hai, pehla to ye ki mostly data jo hoga heterogeneos sources se hoga yani differently arranged hoga, in sab ki mining achi ho iske liye achi cleaning and integration etc karna bahut zaruri hai. Dusra challenge ye hai ki kyonki mostly data sirf numerical hai to OLAP tools lagana and kuch meaningful result nikalna thoda mushkli hai. 

________________________

Multimedia Database
-------------------

Multimedia database vo hota hai jisme kaafi saari images/audio/video/documents ya graphics stored ho, iska data non-textual format me hota hai zyadatar(yaani ki sirf text nahi hoga, baaki forms of data hoga). Yaha par mining se hum aisi cheeze pata laga sakte hai jo ki ek non-media database me nahi pata chalti, for example, similarity between 2 images, similarity between 2 voice samples, popularity of different media, etc.

Mostly MMDB me agar hume searching ya mining karne hai to database ko arrange karne ke 2 tareeke ho sakte hai. Pehla, to description based yani ki media ki description ke basis par unki grouping sath me hogi, like image ki date, size, ya fir media type.  Dusra, content-based yani ki media ke content ko dekha jayega and jo similar media hongi unko sath me rakh denge, this is very useful kyonki zyadatar applications me content-based database searching hi use hoti hai. 

Ye database banana bhi challenging hai kyonki, pehli baat to humare paas kisi bhi tarah ki media jaise images ya audio ya documents ka large collection jama karna zaruri hai, fir ye dekhna padega ki computer ko kaise baatye ki isme se color, pattern, shape texture etc ye sab kaise detect karo. Fir us data ki mining hogi yaani ki isme machine-dependance zyada hai, agar humara image analysis algorithm acha nahi hoga to isme mining ka result meaningful nahi ayega

Mainly is database ka use hota hai ki different media (jaise images) me realtion dikhane ke liye. Algorithms me suppose rule hai "ki agar image ka upar ka 30-40% hissa blue hai to image 'sky' se related hogi", ab agar 2 ya 3 images sab 'sky' se realted hai to aisa likely ki hoga ki vo aapas me bhi similar images ho. 

______________________________

Web Mining or WWW mining
-----------------------

WWW khud ek bahut hi bada collection hai news, advertisements, consumer information, education, e-commerce, aur bahut saare alag alag tarah ke data ka. Ye data pure world se aata hai aur kaafi widely vary bhi karta hai. Sath hi WWW pe kaafi saara web page access data and usage information stored hoti hai, yani ki vo data mining ke liye ek bahut rich source hai, jaha pe kaafi sara data pehle hi ek standard format me hai.

Parantu itna rich source hone ke baad bhi WWW ki mining karna sabse mushkil kaam hai aur iske kai kaaran hai, jaise jo size hai WWW ka vo har minute kuch GB's increase ho jata hai, itna hugely increasing data ki mining to chhodo, storage ya understand kar pana bhi kaafi mushkil hai. Yani ki WWW ke liye ek data warehouse banana hi kaafi mushkil hai. 

Web pages ke content me bahut hi zyada variation hai, yani ki sirf language and topic ke basis par nahi balki, kis tarah se likha hai, kya kya media use hui hai, bahut hi vast farak aa jata hai kuch web pages jisse unki mining ke liye lagne wale tools bhi bahut kam zyada lagenge. Web ka data highly dynamic hai, yani ki almost har minute update aur change hota hai, sirf itna hi nahi balki har kuch time baad data kai GB's ki amount se increase ho jata hai. 

Isiliye jitni bhi WWW mining hoti hai saari ek specific data warehouse ke saath hoti hai jaha sirf limited data stored rehta hai jo ki actual WWW ki mining potential ka bahut hi chota sa hissa hai. WWW mining ke 2 major aur popular uses hai, pehla to Links identification yani ki konsa page kitne pages ko link kar raha hai, and konsa page kitna popoular hai. Ye analysis Sare search engines karte hai taaki user ko uske search ke basis par most relevant web page dikha paye. 

Dusra, DOM (yani kisi bhi web page ka structure) ko samajhne ke liye JS code likha ja sakta hai, to aise algorithms banaye jate hai jo web page ko scan karke uska topic, writing style, and relevance understnad kar pata hai. Isi se ye bhi pata lagaya jata hai ki koi website kis category me fall karti hai. Ye bhi mainly search engines dwara use kiya jata hai, jaisa ki aapne dekha hoga search engines kaafi kam baar aisa karte hai ki jo aapne topic search kiya usse realted result nahi dikhaya. 

___________________________

Applications of Data Mining
--------------------------

Financial Data Analysis
----------------------

1. Financial Datawarehouse - kaha kitna profit hua, kitna debt hai revenue hai, etc
2. Customer Credit analysis & Loan Prediction - Kisko loan dena chahiye, kisko nahi, chuka paane ki probability kitni hai
3. Targeted Marketing - Yani ki cutomer ko sirf vohi ad dikhaya jaye jisme uske interested hone ke chance zyada hai
4. Detection of money laundering crimes 7 frauds - logo ke account records dekh kar batana ki kon fraud kar raha hai.

Retail
-----------

1. Market-Basket analysis - Konsi cheeze sath me khareedi jaati hai
2. Analysis of sales, customer, time and region
3. Product recommendation and cross-referncing - jaise kisine ek product khareeda hai to use dusra suggest karna.
4. Customer loyalty - kya karne se customer loyal ho jata hai

Telecom
-------

1. Fraud Detection 
2. Cyber Security
3. Telecommunication analysis - yani logo ka phone pe baat karne ka pattern kya hai, us hisab se marketing ki jayegi
4. Teleservices analysis - baaki services ka logo ka use karne ka pattern

Bio Tech
---------
Mainly DNA Sequencing ke liye use hota hai ki DNA ka data stored hai, uske kaafi saare uses hai.
1. Compare DNA sequence - to predict diseases
2. Association analysis - konse genes saath me kaam karke ulta seedha result dete hai
3. Path analysis - Ki DNA ka path dekh kar bataya ja sakta hai disease kitni severe hai and kya symptoms hai etc
4. visualisation.

_________________________________

Social Impacts of Data Mining
-----------------------------

1. Privacy - kyonki logo ka personal data available hai to privacy to chali gayi but ye data aut kaafi saari jagah use ho sakta hai jaise marketing and agar police use kare to prevent crimes and maybe even save lives. 
2. Tracking & Lifestyle - jo websites log visit karte hai jaisi activities karte hai online usse iska pata lagaya ja sakta hai ki vo kaha rehte hai konsi cheezo me interested hai aur hisab se unka online experience improve kiya ja sakta hai ya fir targeted marketing ki ja sakti hai
3. Health - Kaafi saare scientist and resarcher data mining ko bimari ke patterns and dawai ki effectiveness measure karne ke liye use karte hai aur DNA Sequencing me bhi use hota hai, isse disease prevention and treatment me fayda mil raha hai. 
4. Smart Software  - kuch software detect kar lete hai ki user ki preference kya hai, and fir us hisab se unka experience improve karte hai ki jo vo dekhna chahe sirf vohi show ho. same software 2 logo ke liye differently behave karega.
5. Market-Basket analysis - companis ko pata chal jata hai ki konsi cheeze sath me purchase ki jaati hai isse unko business grow karne me help milti hai
6. CRM - companies ye dekhti hai ki customer ko kya kya pasand aa raha hai aur fir kis tarah ke cusotmer ko kaisi services provide karne se vo loyal rahega. companies ko mass marketing nahi karni padti specific marketing karni hoti hai.