//Made by Abhijit Chirde
//abhijitchirde.com

figma.loadFontAsync({family: 'Roboto', style: 'Regular'});
figma.loadFontAsync({family: 'Roboto', style: 'Light'});

//Data space containing arrays of data
const dataSet = {

    "FirstName" : ["Aarav", "Aarush", "Aakesh", "Aabir", "Aadav", "Abhir", "Anay", "Arush", "Avik", "Anik", "Ayaan", "Bali", "Braj", "Bavyesh", "Benoy", "Bipin", "Bhawesh", "Binish", "Bivan", "Barun", "Badri", "Balraj", "Charun", "Chetan", "Charmin", "Chahel", "Chirag", "Chandrak", "Danvir", "Divit", "Darshan", "Devansh", "Devashish", "Dhairya", "Eklavya", "Ednit", "Evyavan", "Ekagrah", "Ekaant", "Evan", "Ganak", "Giriraj", "Gaurik", "Geetansh", "Girvaan", "Gupil", "Haadiya", "Hanshal", "Harman", "Havish", "Hiren", "Hriday", "Inesh", "Itish", "Idhant", "Induj", "Iravat", "Ishaan", "Jack", "Jagan", "Jiyaan", "Jeshan", "Jabir", "Jaivardhan", "Kairav", "Kiyansh", "Kavan", "Kaling", "Kaustubh", "Koshin", "Kshitij", "Keyvan", "Lochan", "Lavish", "Lavraj", "Laharish", "Lineesh", "Lohit", "Lokit", "Luvya", "Meer", "Mahant", "Mikul", "Mayur", "Milan", "Mitansh", "Manas", "Magan", "Nirvin", "Nithik", "Nayan", "Nairit", "Nabhya", "Nakshatra", "Neel", "Neelesh", "Onkar", "Omja", "Omav", "Ojayit", "Ogaan", "Parav", "Pahal", "Parth", "Pakshi", "Parijat", "Prabir", "Prayan", "Ruhan", "Ryaan", "Ridhaan", "Rovin", "Rish", "Raul", "Ritvaan", "Subin", "Sachiv", "Sadhil", "Sannith", "Sadhiv", "Saadhik", "Saahan", "Taarush", "Tanip", "Tavish", "Trishan", "Tupil", "Tapan", "Tapasvi", "Vaayu", "Viom", "Vian", "Vihaan", "Vanaj", "Vedank", "Videh", "Yaskhit", "Yaduvir", "Yukt", "Yugant", "Yojith", "Abay", "Atharv", "Aniket", "Amay", "Aryash", "Achit", "Avyan", "Aatish", "Advik", "Amey", "Aneek", "Arnav", "Anvit", "Aboil", "Adhyan", "Ashrith", "Aarsh", "Anmay", "Abhav", "Akshaj", "Ahaan", "Anvay", "Aarshin", "Ayan", "Advay", "Agrim", "Aviraj", "Ayog", "Anishk", "Aabhas", "Aadhav", "Aadhish", "Aadi", "Aadit", "Aadith", "Aaditva", "Aadvay", "Aadvik", "Aagam", "Aahaan", "Aahan", "Aahil", "Aahnik", "Aahva", "Aalam", "Aalap", "Aalekh", "Aan", "Aanav", "Aabhra", "Aangat", "Aanick", "Aapt", "Aaradhy", "Aariket", "Aarish", "Aarit", "Aariv", "Aaryav", "Aarth", "Aahna", "Aakriti", "Aadhya", "Aarohi", "Aamya", "Abhira", "Adhira", "Ambika", "Akira", "Ananya", "Anaya", "Baani", "Bhumi", "Bansuri", "Barkha", "Bhavika", "Bhavya", "Brinda", "Bipasha", "Bishti", "Bhavini", "Bhrithi", "Chaya", "Chayana", "Charil", "Chintanika", "Chaina", "Charvi", "Dhvani", "Darshana", "Daksha", "Diksha", "Dhita", "Divija", "Eshani", "Evani", "Ekaparnika", "Ekani", "Etasha", "Eksha", "Gina", "Gajal", "Gira", "Ganika", "Gayalika", "Geethika", "Hirsha", "Hrithika", "Haryka", "Harusha", "Hanika", "Harnoor", "Ihina", "Ilisha", "Inika", "Ipsa", "Iditri", "Ihitha", "Jenil", "Jhilmil", "Jigyaasa", "Jagruthi", "Jasmine", "Jeevika", "Kavisha", "Krishika", "Kairavi", "Kashika", "Keiyona", "Kanchan", "Kuvira", "Kuvam", "Liza", "Lekisha", "Lipika", "Lahari", "Lasika", "Lavali", "Lorena", "Lona", "Maitreyi", "Manasi", "Manikya", "Manika", "Malavika", "Magadhi", "Madhul", "Mayukhi", "Nivita", "Noshi", "Naila", "Nainika", "Namya", "Nyra", "Naisha", "Nartika", "Ovya", "Oditi", "Odika", "Orpita", "Oorvi", "Panvi", "Parinika", "Preshti", "Pihoo", "Punarvi", "Palomi", "Rhia", "Riti", "Rupasi", "Rajika", "Ramitha", "Ranjana", "Rijuta", "Shanvi", "Saira", "Suvi", "Sriya", "Stuthi", "Sajili", "Sahana", "Twisha", "Toshi", "Turvi", "Tapni", "Tanirika", "Tejal", "Tanvee", "Vivya", "Vachi", "Verna", "Vanhi", "Vedya", "Vaani", "Vahini", "Yashi", "Yagya", "Yahavi", "Yasti", "Yajna", "Areen", "Abhithi", "Achira", "Acira", "Amrusha", "Aditha", "Aditri", "Adrika", "Advaita", "Aboli", "Advika", "Adya", "Anuva", "Ahana", "Ahina", "Aishi", "Aishna", "Aja", "Ajia", "Akhira", "Akita", "Amani", "Aksa", "Aksha", "Akshai", "Akshi", "Akuti", "Alaina", "Aloki", "Amaya", "Amika", "Aadhira", "Aavani", "Aadanya", "Aadita", "Aadvika", "Aadya", "Aahna", "Aakarsha", "Aamani", "Aamaya", "Aanavi", "Aangi", "Aanya", "Aaoka", "Aapti", "Aara", "Aaravi", "Aarin", "Aarna", "Aarvi", "Aashika", "Aashirya", "Aashka", "Aashna", "Aashni", "Aashvi", "Aasia", "Aasmi", "Aasra", "Aasya", "Aathi", "Aayana", "Ansh", "Arhaan", "Arin", "Arjun", "Aryaman", "Aryan", "Atharva", "Avi", "Avyaan", "Ayush", "Ayushman", "Azaan", "Azad", "Bachittar", "Bahadurjit", "Bakhshi", "Balendra", "Balhaar", "Baljiwan", "Balvan", "Balveer", "Banjeet", "Bhaavik", "Bhavin", "Brijesh", "Chaitanya", "Chakradev", "Chakradhar", "Champak", "Chanakya", "Chandran", "Chandresh", "Charan", "Chatresh", "Chatura", "Chitaksh", "Daksh", "Dakshesh", "Dalbir", "Darpan", "Darsh", "Darshit", "Dev", "Dhanuk", "Dhruv", "Divij", "Divyansh", "Eeshan", "Ehsaan", "Ekalinga", "Ekapad", "Ekaraj", "Ekavir", "Gagan", "Gatik", "Gaurang", "Gauransh", "Gaurav", "Gautam", "Girik", "Girindra", "Girish", "Gopal", "Gunbir", "Guneet", "Hardik", "Harish", "Harsh", "Harshil", "Hemang", "Himmat", "Hitesh", "Hridaan", "Hritik", "Hunar", "Ikbal", "Ikshit", "Imaran", "Indrajit", "Isaac", "Ishwar", "Ivaan", "Izaan", "Jagat", "Jagdish", "Jai", "Jainew", "Jaiyush", "Jason", "Jatin", "Jeet", "Jivin", "Kabir", "Kalpit", "Kanav", "Karan", "Kiaan", "Krish", "Krishiv", "Krishna", "Kushagra", "Laban", "Laksh", "Lakshay", "Lakshit", "Lauhit", "Lucky", "Maanas", "Maanav", "Madhav", "Manan", "Manav", "Manbir", "Manthan", "Medhansh", "Mitesh", "Moksh", "Nachiket", "Naksh", "Nakul", "Naveen", "Navodit", "Nihal", "Nimit", "Nirvaan", "Nishith", "Nitesh", "Ohas", "Om", "Omkaar", "Onveer", "Orinder", "Parv", "Pranav", "Pranay", "Praneel", "Pranit", "Pratham", "Pratyush", "Purab", "Rachit", "Raghav", "Ranbir", "Ranveer", "Rehaannew", "Rishi", "Ritvik", "Rohan", "Ronith", "Rudranew", "Rudransh", "Rushil", "Ryan", "Saatvik", "Sahil", "Sai", "Saihaj", "Saksham", "Samaksh", "Samar", "Samarth", "Sarthak", "Sathviknew", "Savar", "Shaan", "Shaurya", "Shayak", "Shivansh", "Shlok", "Shray", "Siddharth", "Stuvan", "Suveer", "Taksh", "Tanay", "Tanish", "Tanmay", "Tanveer", "Tanvik", "Tarak", "Teerth", "Tejas", "Udant", "Udarsh", "Ujjwal", "Umang", "Upkaar", "Uthkarsh", "Utkarsh", "Vaibhav", "Veer", "Viaannew", "Virat", "Vivaan", "Wahab", "Warinder", "Warjas", "Wriddhish", "Wridesh", "Yagnesh", "Yatan", "Yatin", "Yug", "Yuvaan", "Yuvraj", "Ekansh", "Hredhaan", "Jairaj", "Reyansh", "Samesh", "Viraj", "Yash", "Nikita", "Himani", "Rupansh", "Rashi", "Kapil", "Kajal", "Vikas", "Sairam", "Kasak", "Parikshit", "Ankit", "Aditi", "Mohit", "Ashik", "Praveen", "Bharat", "Kriti", "Prachi", "Sourabh", "Kishan", "Ashish", "Pooja", "Chhavi", "Suraj", "Vidushi", "Ritika", "Akshita", "Bulbul", "Amit", "Anupam", "Tanisha", "Gagandeep", "Akshat", "Priyansh", "Dinesh", "Ashita", "Vishal", "Sagar", "Parakh", "Abhishek", "Balvinder", "Shivam", "Nitin", "Tushar", "Suyash", "Shreyansh", "Lakshya", "Swapnil", "Amisha", "Anagh", "Rahul", "Yashwant", "Sharda", "Khushi", "Shweta", "Rajneesh", "Chandra", "Mega", "Mithil", "Prayas", "Deepak", "Aman", "Piyush", "Soumya", "Prateek", "Ayaz", "Namrata", "Visharad", "Surabhi", "Amrish", "Parag", "Rishap", "Ketan", "Ajay", "Pranjali", "Nikhil", "Anuj", "Ajeet", "Ankita", "Neeraj", "Vandana", "Sangita", "Rishabh", "Ravinder", "Mangesh", "Chitranshu", "Malkaus", "Jitendra", "Naman", "Pavan", "Vijay", "Pankaj", "Sumit", "Shubham", "Lokesh", "Palak", "Govind", "Urmila", "Vidit", "Prashant", "Ghanshyam", "Mishant", "Ravi", "Rohit", "Swati", "Divyanshi", "Arun", "Prithviraj", "Nisha", "Parantap", "Lokendra", "Milky", "Vickky", "Mayank", "Niranjan", "Akansha", "Rakesh", "Neha", "Ashok", "Deepika", "Purusottam", "Kamaldeep", "Somesh", "Gunjan", "Pragati", "Nishant", "Divye", "Ronak", "Aditya", "Ankur", "Anshul", "Anuja", "Abhijit", "Deepshikha", "Ganesh", "Madhura", "Kaushik", "Prarabdh", "Sarvani", "Upasna", "Ketaki", "Kusum", "Narmada", "Naveena", "Nishtha", "Nivedita", "Salena", "Sanchali", "Sanchaya", "Sanjana", "Shivani", "Shubhada", "Sumitra", "Tarangini", "Tarjani", "Trilochana", "Mog", "Omprakash", "Prabodh", "Praful", "Som", "Laxman", "Ram", "Jayram", "Motiram", "Tukaram", "Mahadev", "Shiv", "Shiva", "Rudra", "Kanha", "Kanhaiya", "Kisan", "Kisna", "Vishnu", "Hari", "Vitthal", "Laxmi", "Rukhmini", "Narayan", "Namdeo", "Shyam", "Badra", "Bhadra", "Radha", "Radhe", "Radheshyam", "Gokuldas", "Ramdas", "Jnaneshwar", "Mukta", "Sopan", "Nivritti", "Sandhya", "Rupali", "Rupa", "Bhardwaj", "Bhupen", "Arul", "Atul", "Bahadur", "Baldeb", "Baldev", "Bijoy", "Binod", "Vinod", "Biren", "Chamanlal", "Bablu", "Pinki", "Lalla", "Chanda", "Chandan", "Chandragupt", "Dasrath", "Debendra", "Hariram", "Harinarayan", "Kalicharan", "Murugan", "Kartik", "Karuna", "Varuna", "Aruna", "Aparna", "Lakshmikant", "Lalit", "Mukund", "Mohan", "Murali", "Manohar", "Saurabh", "Sorabji", "Nidhi", "Pravin", "Rajni", "Samir", "Aseem", "Suman", "Saroj", "Natwar", "Prithvi", "Pavan", "Shweta", "Urmila", "Vijay", "Mithil", "Mithila", "Saraswati", "Sharda", "Kashi", "Swami", "Baba", "Nal", "Neel", "Damyanti", "Sati", "Parvati"],

    "LastName" : ["Jain", "Sharma", "Bhatia", "Kanojia", "Singh", "Ankata", "Agrawal", "Rathore", "Parihar", "Singhal", "Saini", "Sanpada", "Chhipa", "Kothari", "Mohnot", "Mishra", "Gupta", "Agarwal", "Bhather", "Jangid", "Palod", "Pareek", "Rastogi", "Chaudhary", "Ojha", "Jajoo", "Khandelwal", "Rathi", "Bohra", "Bothra", "Gyanchandani", "Bansal", "Kushwah", "Tilwani", "Vardhan", "Gurbani", "Aggarwal", "Kumar", "Tejwani", "Awasthi", "Mathur", "Tiwari", "Mehta", "Solanki", "Prakash", "Yadav", "Tekwani", "Arora", "Mukesh", "Sarfraz", "Saxena", "Jhalani", "Goyal", "Lathwal", "Saifi", "Mahadi", "Mahawar", "Dubey", "Somani", "Vijay", "Maheshwari", "Gandhi", "Rupani", "Chalana", "Kumawat", "Verma", "Khicher", "Soni", "Chouhan", "Vijayvargiya", "Negi", "HIrani", "Darji", "Bakliwal", "Bhargava", "Jangir", "Pritmani", "Khinchi", "Kumari", "Nankani", "Gaur", "Goswami", "Lakhotiya", "Bagariya", "Joshi", "Agnani", "Parashar", "Gautam", "Madhuwani", "Bhootra", "Rawani", "Pitaliya", "Mehlawat", "Kaur", "Shrimali", "Bagda", "Pandya", "Gauttam", "Tela", "Singhavi", "Dhanotiya", "Raj", "Auti", "Chirde", "Jha", "Sadashiv", "Phadke", "Madugundi", "Karmakar", "Dhomne", "Kmar", "Rana", "Thakur", "Chansoria", "Bhagat", "Nimkar", "Dudhe", "Patel", "Patil", "Datir", "Datar", "Kulkarni", "Doshi", "Dave", "Modi", "Dadhe", "Kasambe", "Tayade", "Tajane", "Dhule", "Kurhade", "Korade", "Karade", "Tarade", "Kadu", "Gode", "Gole", "Borkar", "Gugliya", "Pugliya", "Sangani", "Papalkar", "Nerkar", "Nagpure", "Punekar", "Narawane", "Rawat", "Rawal", "Rajput", "Sisodiya", "Thakkar", "Thaker", "Bele", "Sambe", "Acharya", "Agate", "Ahluwalia", "Ahuja", "Amble", "Anand", "Andra", "Anne", "Apte", "Arya", "Atwal", "Aurora", "Babu", "Badal", "Badami", "Bahl", "Bahri", "Bail", "Bains", "Bajaj", "Bajwa", "Bakshi", "Bal", "Bala", "Balakrishnan", "Balan", "Balasubramanian", "Balay", "Bali", "Bandi", "Banerjee", "Banik", "Barad", "Baral", "Baria", "Barman", "Basak", "Bassi", "Basu", "Bath", "Batra", "Batta", "Bava", "Bawa", "Bedi", "Behl", "Ben", "Bera", "Bhakta", "Bhalla", "Bhandari", "Bhardwaj", "Bhasin", "Bhat", "Bhatnagar", "Bhatt", "Bhattacharyya", "Bhatti", "Bhavsar", "Bir", "Biswas", "Boase", "Bobal", "Bora", "Borah", "Borde", "Borra", "Bose", "Brahmbhatt", "Brar", "Buch", "Bumb", "Butala", "Chacko", "Chad", "Chada", "Chadha", "Chahal", "Chakrabarti", "Chakraborty", "Chana", "Chand", "Chanda", "Chander", "Chandra", "Chandran", "Char", "Chatterjee", "Chaudhari", "Chaudhry", "Chaudhuri", "Chaudry", "Chauhan", "Chawla", "Cheema", "Cherian", "Chhabra", "Chokshi", "Chopra", "Choudhary", "Choudhry", "Choudhury", "Chowdhury", "Comar", "Contractor", "D’Alia", "Dada", "Dalal", "Dani", "Dar", "Dara", "Das", "Dasgupta", "Dash", "Dass", "Date", "Datta", "Dayal", "De", "Deep", "Deo", "Deol", "Desai", "Deshmukh", "Deshpande", "Devan", "Devi", "Dewan", "Dey", "Dhaliwal", "Dhar", "Dhawan", "Dhillon", "Dhingra", "Din", "Divan", "Dixit", "Doctor", "Dora", "Dua", "Dube", "Dugal", "Dugar", "Dutt", "Dutta", "Dyal", "Edwin", "Gaba", "Gade", "Gala", "Ganesan", "Ganesh", "Ganguly", "Gara", "Garde", "Garg", "Gera", "Ghose", "Ghosh", "Gill", "Goda", "Goel", "Gokhale", "Gola", "Golla", "Gopal", "Gour", "Grewal", "Grover", "Guha", "Gulati", "Halder", "Handa", "Hans", "Hari", "Hayer", "Hayre", "Hegde", "Hora", "Issac", "Iyengar", "Iyer", "Jaggi", "Jani", "Jayaraman", "Jhaveri", "Johal", "Kadakia", "Kade", "Kakar", "Kala", "Kale", "Kalita", "Kalla", "Kamdar", "Kanda", "Kannan", "Kant", "Kapadia", "Kapoor", "Kapur", "Kar", "Kara", "Karan", "Kari", "Karnik", "Karpe", "Kashyap", "Kata", "Kaul", "Keer", "Khalsa", "Khanna", "Khare", "Khatri", "Khosla", "Khurana", "Kibe", "Kohli", "Konda", "Korpal", "Koshy", "Kota", "Krish", "Krishna", "Krishnamurthy", "Krishnan", "Kumer", "Kunda", "Kurian", "Kuruvilla", "Lad", "Lal", "Lala", "Lall", "Lalla", "Lanka", "Lata", "Loke", "Loyal", "Luthra", "Madan", "Magar", "Mahajan", "Mahal", "Maharaj", "Majumdar", "Malhotra", "Mall", "Mallick", "Mammen", "Mand", "Manda", "Mandal", "Mander", "Mane", "Mangal", "Mangat", "Mani", "Mann", "Mannan", "Manne", "Master", "Mathai", "Matthai", "Meda", "Mehan", "Mehra", "Mehrotra", "Meka", "Memon", "Menon", "Merchant", "Minhas", "Misra", "Mistry", "Mital", "Mitra", "Mittal", "Mitter", "Mody", "Mohan", "Mohanty", "Morar", "More", "Mukherjee", "Mukhopadhyay", "Muni", "Munshi", "Murthy", "Murty", "Mutti", "Nadig", "Nadkarni", "Nagar", "Nagarajan", "Nagi", "Nagy", "Naidu", "Naik", "Nair", "Nanda", "Narain", "Narang", "Narasimhan", "Narayan", "Narayanan", "Narula", "Natarajan", "Nath", "Natt", "Nayak", "Nayar", "Nazareth", "Nigam", "Nori", "Oak", "Om", "Oommen", "Oza", "Padmanabhan", "Pai", "Pal", "Palan", "Pall", "Palla", "Panchal", "Pandey", "Pandit", "Pant", "Parekh", "Parikh", "Parmar", "Parmer", "Parsa", "Pathak", "Patla", "Pau", "Peri", "Pillai", "Pillay", "Pingle", "Prabhakar", "Prabhu", "Pradhan", "Prasad", "Prashad", "Puri", "Purohit", "Radhakrishnan", "Raghavan", "Rai", "Raja", "Rajagopal", "Rajagopalan", "Rajan", "Raju", "Ram", "Rama", "Ramachandran", "Ramakrishnan", "Raman", "Ramanathan", "Ramaswamy", "Ramesh", "Randhawa", "Ranganathan", "Rao", "Ratta", "Rattan", "Ratti", "Rau", "Raval", "Ravel", "Ravi", "Ray", "Reddy", "Rege", "Rout", "Roy", "Sabharwal", "Sachar", "Sachdev", "Sachdeva", "Sagar", "Saha", "Sahni", "Sahota", "Salvi", "Sama", "Sami", "Sampath", "Samra", "Sandal", "Sandhu", "Sane", "Sangha", "Sanghvi", "Sani", "Sankar", "Sankaran", "Sant", "Saraf", "Saran", "Sarin", "Sarkar", "Sarma", "Sarna", "Sarraf", "Sastry", "Sathe", "Savant", "Sawhney", "Sehgal", "Sekhon", "Sem", "Sen", "Sengupta", "Seshadri", "Seth", "Sethi", "Setty", "Sha", "Shah", "Shan", "Shankar", "Shanker", "Sharaf", "Shenoy", "Shere", "Sheth", "Shetty", "Shroff", "Shukla", "Sibal", "Sidhu", "Sinha", "Sodhi", "Som", "Soman", "Sood", "Sridhar", "Srinivas", "Srinivasan", "Srivastava", "Subramaniam", "Subramanian", "Sule", "Sundaram", "Sunder", "Sur", "Sura", "Suresh", "Suri", "Swaminathan", "Swamy", "Tailor", "Tak", "Talwar", "Tandon", "Taneja", "Tank", "Tara", "Tata", "Tella", "Thaman", "Toor", "Tripathi", "Trivedi", "Upadhyay", "Uppal", "Vaidya", "Vala", "Varghese", "Varkey", "Varma", "Varty", "Varughese", "Vasa", "Venkataraman", "Venkatesh", "Vig", "Virk", "Viswanathan", "Vohra", "Vora", "Vyas", "Wable", "Wadhwa", "Wagle", "Wali", "Walia", "Walla", "Warrior", "Wason", "Yogi", "Yohannan", "Zacharia", "Zachariah", "Vashishta", "Laghari", "Anthony", "Ramayanam", "Burman", "Varman", "Vasu", "Tahore", "Thakore", "Chowdhary", "Chabra", "Chaddha", "Amin", "Pande", "Ayyar", "Haldar", "Surya", "Chavan", "Pawar", "Panwar", "Dayawan", "Malik", "Bahuguna", "Jan", "Vishwas", "Sukhdev", "Dev", "Kovind", "Nishad", "Jamsenpa", "Thokchom", "Laishram", "Swuro", "Boro", "Kom", "Chanu", "Murti", "Yadav", "Shah"],

    "EmailDomain" : ["gmail", "googlemail", "example", "company", "mail", "email", "domain", "example", "company", "mail", "email", "domain", "india","network","cafezone", "yahoo", "rediff", "outlook", "metaverse", "miniverse", "worldmail", "times", "hotmail", "msn", "yupmail", "live", "me", "telecom", "mac", "century", "digital", "aim", "skynet", "symbol", "email", "workplace", "timber", "bharat", "digital"],
    
    "EmailEnd" : ["com", "in", "co.in", "net", "org", "com", "io", "com", "com", "net", "org", "in"],

    "State" : ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry", "Ladakh"],

    //In states arrays: first element is short name useful for driving license. Second element is total number of RTOs to be used for getting max value of driving license RTO. Third element is a postal zone number to use as first letter of that state's PINcode series

    "Andhra Pradesh" : ["AP","39","5","Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Sri Potti Sri Ramulu Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],

    "Arunachal Pradesh" : ["AR","22","7","Anjaw", "Changlang", "East", "Siang", "Kurung", "Kumey", "Lohit", "Lower", "Dibang", "Valley", "Lower", "Subansiri", "Papum", "Pare", "Tawang", "Tirap", "Dibang", "Valley", "Upper", "Siang", "Upper", "Subansiri", "West", "Kameng", "West", "Siang"],

    "Assam" : ["AS","34","7","Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dima", "Hasao", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat", "Kamrup", "Kamrup", "Metropolitan", "Karbi", "Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Marigaon", "Nagaon", "Nalbari", "Sibsagar", "Sonitpur", "Tinsukia", "Udalguri"],

    "Bihar" : ["BR","57","8","Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East", "Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West", "Champaran", "Chandigarh"],

    "Chhattisgarh" : ["CG","30","4","Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Jashpur", "Janjgir-Champa", "Korba", "Koriya", "Kanker", "Kabirdham", "(Kawardha)", "Mahasamund", "Narayanpur", "Raigarh", "Rajnandgaon", "Raipur", "Surguja"],

    "Dadra and Nagar Haveli": ["DD","1","3","Dadra and Nagar Haveli"],

    "Daman and Diu" : ["DD","3","3","Daman", "Diu"],

    "Delhi" : ["DL","13","1","Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","South Delhi","South West Delhi","West Delhi"],

    "Goa" : ["GA","12","4","North Goa", "South Goa"],

    "Gujarat" : ["GJ","38","3","Ahmedabad", "Amreli", "Anand", "Banaskantha", "Bharuch", "Bhavnagar", "Dahod", "The Dangs", "Gandhinagar", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mehsana", "Narmada", "Navsari", "Patan", "Panchmahal", "Porbandar", "Rajkot", "Sabarkantha", "Surendranagar", "Surat", "Vyara", "Vadodara", "Valsad"],
    
    "Haryana" : ["HR","99","1","Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hissar", "Jhajjar", "Jind", "Karnal", "Kaithal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamuna Nagar"],

    "Himachal Pradesh" : ["HP","97","1","Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],

    "Jammu and Kashmir" : ["JK","22","1","Anantnag", "Badgam", "Bandipora", "Baramulla", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kupwara", "Kulgam", "Poonch", "Pulwama", "Rajauri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],

    "Ladakh" : ["LA","2","1","Leh", "Kargil"],

    "Jharkhand" : ["JH","24","8","Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],

    "Karnataka" : ["KA","71","5","Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgavi", "Bellary", "Bidar", "Bijapur", "Chamarajnagar", "Chikkamagaluru", "Chikkaballapur", "Chitradurga", "Davanagere", "Dharwad", "Dakshina Kannada", "Gadag", "Gulbarga", "Hassan", "Haveri district", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Ramanagara", "Yadgir"],

    "Kerala" : ["KL","99","6","Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram", "Wayanad"],

    "Madhya Pradesh" : ["MP","74","4","Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Rewa", "Rajgarh", "Ratlam", "Raisen", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],

    "Maharashtra" : ["MH","50","4","Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Beed", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nandurbar", "Nanded", "Nagpur", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sindhudurg", "Sangli", "Solapur", "Satara", "Thane", "Wardha", "Washim", "Yavatmal"],

    "Manipur" : ["MN","7","7","Bishnupur", "Churachandpur", "Chandel", "Imphal East", "Senapati", "Tamenglong", "Thoubal", "Ukhrul", "Imphal West"],

    "Meghalaya" : ["ML","10","7","East Garo Hills", "East Khasi Hills", "Jaintia Hills", "Ri Bhoi", "South Garo Hills", "West Garo Hills", "West Khasi Hills"],

    "Mizoram" : ["MZ","8","7","Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],

    "Nagaland" : ["NL","8","7","Dimapur", "Kohima", "Mokokchung", "Mon", "Phek", "Tuensang", "Wokha", "Zunheboto"],

    "Odisha" : ["OD","35","7","Angul", "Boudh", "Bhadrak", "Balangir", "Bargarh", "Balasore", "Cuttack", "Debagarh", "Dhenkanal", "Ganjam", "Gajapati", "Jharsuguda", "Jajpur", "Jagatsinghpur", "Khordha", "Kendujhar", "Kalahandi", "Kandhamal", "Koraput", "Kendrapara", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nuapada", "Nayagarh", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"],

    "Puducherry" : ["PY","5","6","Karaikal", "Mahe", "Puducherry", "Yanam"],

    "Punjab" : ["PB","91","1","Amritsar", "Barnala", "Bathinda", "Firozpur", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Mohali", "Sangrur", "Nawanshahr", "Tarn Taran"],

    "Rajasthan" : ["RJ","58","3","Ajmer", "Alwar", "Bikaner", "Barmer", "Banswara", "Bharatpur", "Baran", "Bundi", "Bhilwara", "Churu", "Chittorgarh", "Dausa", "Dholpur", "Dungapur", "Ganganagar", "Hanumangarh", "Jhunjhunu", "Jalore", "Jodhpur", "Jaipur", "Jaisalmer", "Jhalawar", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sikar", "SawaiMadhopur", "Sirohi", "Tonk", "Udaipur"],

    "Sikkim" : ["SK","4","7","East Sikkim", "North Sikkim","South Sikkim", "West Sikkim"],

    "Tamilnadu" : ["TN","99","6","Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Madurai", "Nagapattinam", "Nilgiris", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Tirupur", "Tiruchirappalli", "Theni", "Tirunelveli", "Thanjavur", "Thoothukudi", "Tiruvallur", "Tiruvarur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar"],

    "Telangana" : ["TS","38","5","Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Narayanpet", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    
    "Tripura" : ["TR","8","7","Dhalai", "North Tripura", "South Tripura", "Khowai", "West Tripura"],

    "Uttar Pradesh" : ["UP","96","2","Agra", "Prayagraj", "Aligarh", "Ambedkar Nagar", "Auraiya", "Ayodhya", "Azamgarh", "Barabanki", "Budaun", "Bagpat", "Bahraich", "Bijnor", "Ballia", "Banda", "Balrampur", "Bareilly", "Basti", "Bulandshahr", "Chandauli", "Chhatrapati Shahuji Maharaj Nagar", "Chitrakoot", "Deoria", "Etah", "Kanshi Ram Nagar", "Etawah", "Firozabad", "Farrukhabad", "Fatehpur", "Gautam Buddh Nagar", "Gonda", "Ghazipur", "Gorakhpur", "Ghaziabad", "Hamirpur", "Hardoi", "Mahamaya Nagar", "Jhansi", "Jalaun", "Jyotiba Phule Nagar", "Jaunpur", "district", "Ramabai Nagar", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", "Lalitpur", "Lakhimpur Kheri", "Lucknow", "Mau", "Meerut", "Maharajganj", "Mahoba", "Mirzapur", "Moradabad", "Mainpuri", "Mathura", "Muzaffarnagar", "Panchsheel Nagar", "Pilibhit", "Shamli", "Pratapgarh", "Rampur", "Raebareli", "Saharanpur", "Sitapur", "Shahjahanpur", "Sant Kabir Nagar", "Siddharthnagar", "Sonbhadra", "Sant Ravidas Nagar", "Sultanpur", "Shravasti", "Unnao", "Varanasi"],

    "Uttarakhand" : ["UK","20","2","Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],

    "West Bengal" : ["WB","99","7","Birbhum", "Bankura", "Bardhaman", "Darjeeling", "Dakshin Dinajpur", "Hooghly", "Howrah", "Jalpaiguri", "Cooch Behar", "Kolkata", "Maldah", "Paschim Medinipur", "Purba Medinipur", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas", "Purulia", "Uttar Dinajpur"],

    "Andaman and Nicobar" : ["AN","1","7","Bakultala", "Bambooflat", "Garacharma", "Port Blair", "Prothrapur", "Nicobar"],

    "Lakshadweep" : ["LD","9","6","Amini", "Andrott", "Kadmat", "Kalpeni", "Kavaratti", "Minicoy"],

    "Chandigarh" : ["CH","4","1","Chandigarh"],
    
    "Prof" : ["Doctor","Student","School Peon","Havildar","Traffic Controller","Civil Police", "Toy Repairer","Toy Designer","Terracota Worker","Cobbler","Foam Worker","Gamezone Manager","Gaming Teacher","Compounder","Nurse","Mali","Sutar","Woodworker","Toy Collector","Car Serviceman","Car Washer","Bus Conductor","Truck Driver","Army Officer","Music Composer","Writer","Poet","Story Teller","Software Engineer", "Designer", "3D Animator", "Politician","Ayurvedic Practitioner","Yoga Teacher","Yoga Practitioner","Gym Instructor","Sports Coach","Nutritionist", "Teacher", "Farmer", "Gardener", "Mechanic", "Musician", "Baker", "Glass Manufacturer", "Beautician", "Bangle Maker", "Beads Maker", "Bicycle Repairer", "Blacksmith", "Ferry Conductor", "Book Binder", "Architect", "Builder", "Masonry Worker", "Cable TV Operator", "Trader", "Marketing Professional", "Salesman", "Cane Work", "Carpet Weaver", "Caterer", "Chikankari Worker", "Painter", "Artist", "Cloth Printer", "Artist", "Canteen Owner", "Bartender", "Coaching Service", "Construction Worker", "Courier Manager", "Store Manager", "Dairy Worker", "Data Entry Operator", "Computer Teacher", "Scientist", "Researcher", "Pharmacist", "Physician", "Chemist", "Electrician", "Firework Production", "Fisherman", "Flour Mill Owner", "Diamond Cutter", "Jeweller", "Goldsmith", "Handloom Worker", "Health Servicec", "Driver", "Bus Conductor", "Ticker Collector", "Hotel Manager", "Masala Maker", "House Worker", "Miner", "Newspaper Distributor", "Panwalla", "Papad Maker", "Petrol Pump Worker", "Potter", "Sculptor", "Murti maker", "Quary Worker", "Rickshaw Owner", "Sawmill Worker", "Shepherd", "Soap Manufacturer", "Perfume Salesman", "Tailor", "Police", "Army Officer", "Navy Officer", "Airforce Officer", "Social Worker", "NGO Volunteer", "Sports Shop Owner", "Sportsman", "Mobile Repairer", "Timber Processing", "Furniture Making", "Toddy Tapping", "Toy Making", "Primary Teacher", "Professor", "Welding Service", "Laundry Service", "Tobacco Processing"],

    "PassPrefix" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y"],     //Doesnt have Q, X, Z from eng letters

    "Alphabets" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    
    "UPISuffix" : ["jio", "upi", "apl","okhdfcbank", "oksbi", "okaxis", "airtel", "yesbank", "icici", "fbl", "axisb", "okicici", "ikwik", "ibl", "axl", "idfcbank", "waaxis", "wasbi", "hsbc", "kmbl", "paytm", "pnb", "hdfc", "mahb", "kotak", "ubi", "idbi", "cbin", "cnrb", "utbi", "rbl", "aubank", "federal", "uco", "citi", "dbs", "sib", "db", "psb"],

    "RurSpotNo" : ["House No.", "Plot No.", "Farm No.", "Shop No."],

    "RurLandmark" : ["Hanuman Mandir", "Radhe Shyam mandir", "Life Hospital", "Pipal Tree", "Old Townhall"],

    "LandmarkConjunction" : ["Near", "In front of", "Behind", "Opposite", "Next  to"],

    "RurAddressVillage" : ["Rampur", "Tenali", "Vijayapura", "Ner", "Shamal"],

    "RurVillageSuffix" : ["Gram", "Panchayat", "Village", "Gaav", "Bazaar", "Railway", "Bagh", "Pada"],

    "UrbSpotNo" : ["Flat No.", "House No.", "Plot No.", "Shop No.", "Office No."],

    "UrbLandmark" : ["Town Hall", "Devi Temple", "City School", "Metro Station", "Airport", "Empire Mall", "Shopping Complex", "Bakery", "Soap Factory"],

    "UrbAreaNo" : ["Sector", "Ward No.", "Block No.", "Part No.", "Township No.", "Complex No.", "Building No."],

    "UrbAddressSuburb" : ["Airoli", "Kharghar", "Chandni", "Pimpri", "Andheri", "Dumdum", "Marina", "Devghat"],

    "dates" : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],

    "months" : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
}


var generateTableLabelWidth = 78;
var generateTableDataWidth = 270;
var generateTableCellHeight = 26;
var generateTableHeaderHeight = 16;

//Show UI on figma canvas
figma.showUI(__html__,{width: 500, height: 425});


//Receiving the button inputs from UI
figma.ui.onmessage = msg => {

    //If input button is not generate this flow will work
    if(msg.type === "generate-random"){

        //Giving notification if no layer is selected
        if(figma.currentPage.selection.length === 0){
            figma.notify("Please select text layers to add data", {timeout: 1000});
        }
        
        //for all the selected nodes
        for(const node of figma.currentPage.selection){
            //Giving notification if selected layer is not text
            if(node.type !== 'TEXT'){
                figma.notify("Please select text layers to add data", {timeout: 1000});
            }
            generateRandomData(node, msg.inputValue);       //Calling function to put requested data on text layer

        }
    
    }
    
    if(msg.type === "generate-table"){

        let num = msg.chkInput.noOfUsers;
        
        if(isNaN(num)){
            figma.notify("Please enter a number", {timeout:1000});
        }else if(num <= 0){
            figma.notify("Please enter a number greater than 0", {timeout:1000});
        }else{
            generateTable(msg.chkInput);    //Calling function to create a user data table and append on canvas
        }                  
    }  

    if(msg.type === 'disclaimer'){
        figma.notify("This plugin generates sample user data. Any resemblance to real world entities is just a coincidence.", {timeout:4000});
      }
}

//Setting fontname of selected node
function setFont(currentNode){
    //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
    if(currentNode.type === "TEXT"){
        currentNode.fontName = {family: 'Roboto', style: 'Regular'};
    }
}

function setFontLight(currentNode){
    //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
    if(currentNode.type === "TEXT"){
        currentNode.fontName = {family: 'Roboto', style: 'Light'};
    }
}

function generateRandomFirstName(){
    let firstName = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    return `${firstName}`;
}

function generateRandomLastName(){
    let lastName = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    return `${lastName}`;
}

//Defining function for finding a number in range
function numBetween(low, high){
    return Math.floor(Math.random() * (high-low+1)) + low;
}

//Define function for generating mobile number
function generateMobileNumber(){
    let number = numBetween(6000000000,9999999999);         //finding a random 10 digit number for mobile
    return `${number}`;
}

//Define function for generating mobile number
function generatePassport(){
    //As per rules seen on https://www.geeksforgeeks.org/how-to-validate-indian-passport-number-using-regular-expression/
    let prefix = dataSet["PassPrefix"][Math.floor(Math.random()*(dataSet["PassPrefix"].length))];
    let num1 = numBetween(1,9);
    let num2 = numBetween(0,9);
    let num3 = numBetween(0,9);
    let num4 = numBetween(0,9);
    let num5 = numBetween(0,9);
    let num6 = numBetween(0,9);
    let num7 = numBetween(1,9);
    return `${prefix}${num1}${num2}${num3}${num4}${num5}${num6}${num7}`;
}

//Define function for generating UID number
function generateAadhar(){
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999); 
    let numSet3 = numBetween(1000, 9999);          
    return `${numSet1} ${numSet2} ${numSet3}`;        //Finding a random 12 digit number for UID. In 3 parts of 4 digits
}

//Define function for generating 16digit VID number
function generateRandomUPIm(){
    let mobileNum = numBetween(6000000000,9999999999); 
    let upiEnd = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];     
    return `${mobileNum}@${upiEnd}`.toLowerCase();
}

//Define function for generating email
function generateRandomEmail(){
    let fname = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    let lname = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    let email = dataSet["EmailDomain"][Math.floor(Math.random()*(dataSet["EmailDomain"].length))];
    let emailEnd = dataSet["EmailEnd"][Math.floor(Math.random()*(dataSet["EmailEnd"].length))];
    return `${fname}.${lname}@${email}.${emailEnd}`.toLowerCase();
}

function generateRandomPINCode(){
    let pinFirst = Math.floor(Math.random()*8 + 1);
    let pinRemaining = numBetween(10000,99999);             //Finding a random 5 digit number for remaining part of PIN
    return `${pinFirst}${pinRemaining}`;
}


function generateRandomUPIn(){
    let fname = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    let lname = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    let upiEnd = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];
    return `${fname}${lname}@${upiEnd}`.toLowerCase();
}

function generateRandomCity(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    return `${city}`;
}

function generateRandomState(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    return `${state}`;
}

function generateCityStatePair(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    return `${city}, ${state}`;
}

function generateRandomRurAddress(){
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["RurLandmark"][Math.floor(Math.random()*(dataSet["RurLandmark"].length))];
    let villageSuffix = dataSet["RurVillageSuffix"][Math.floor(Math.random()*(dataSet["RurVillageSuffix"].length))]; 
    let village1 = dataSet["RurAddressVillage"][Math.floor(Math.random()*(dataSet["RurAddressVillage"].length))];
    let village2 = dataSet["RurAddressVillage"][Math.floor(Math.random()*(dataSet["RurAddressVillage"].length))];
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    let pinFirstDigit = dataSet[`${state}`][2];
    let pinRemainingDigits = numBetween(10000,99999);
    return `${landmarkConj} ${landmark}, ${village1} ${villageSuffix}, Post - ${village2}, Dist - ${city}, ${state}, Pincode - ${pinFirstDigit}${pinRemainingDigits}`;
}

function generateRandomUrbAddress(){
    let spotNo = dataSet["UrbSpotNo"][Math.floor(Math.random()*(dataSet["UrbSpotNo"].length))];
    let num1 = numBetween(1,99);
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["UrbLandmark"][Math.floor(Math.random()*(dataSet["UrbLandmark"].length))];
    let areaNo = dataSet["UrbAreaNo"][Math.floor(Math.random()*(dataSet["UrbAreaNo"].length))];
    let num2 = numBetween(1,99);
    let subUrb = dataSet["UrbAddressSuburb"][Math.floor(Math.random()*(dataSet["UrbAddressSuburb"].length))];
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    let pinFirstDigit = dataSet[`${state}`][2];
    let pinRemainingDigits = numBetween(10000,99999);
    return `${spotNo} ${num1}, ${landmarkConj} ${landmark}, ${areaNo} ${num2}, ${subUrb}, ${city}, ${state}, Pincode-${pinFirstDigit}${pinRemainingDigits}`;
}

function generateRandomProf(){
    let prof = dataSet["Prof"][Math.floor(Math.random()*(dataSet["Prof"].length))];
    return `${prof}`;
}


function generateRandomDL(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let stateInitials = dataSet[`${state}`][0];
    let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
    let year = numBetween(1980,2021);
    let lastDigits = numBetween(1000000,9999999);
    if(rtoDigits < 10){
        return `${stateInitials}0${rtoDigits}${year}${lastDigits}`;
    }else{
        return `${stateInitials}${rtoDigits}${year}${lastDigits}`;
    }
}

function generateRandomRC(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let stateInitials = dataSet[`${state}`][0];
    let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
    let letter1 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter2 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let lastDigits = numBetween(1000,9999);
    if(rtoDigits < 10){
        return `${stateInitials}0${rtoDigits}${letter1}${letter2}${lastDigits}`;
    }else{
        return `${stateInitials}${rtoDigits}${letter1}${letter2}${lastDigits}`;
    }
}

function generateRandomDoB(){
    let year = numBetween(1935, 2006);
    let month = dataSet["months"][Math.floor(Math.random()*12)];
    let date = "";
    
    if(month === "02"){
        if(year % 4 === 0){
            date = dataSet["dates"][Math.floor(Math.random()*29)];
            return `${date}-${month}-${year}`;
        }else{
            date = dataSet["dates"][Math.floor(Math.random()*28)];
            return `${date}-${month}-${year}`;
        }
    }else if(month === "04" || month === "06" || month === "09" || month === "11"){
        date = dataSet["dates"][Math.floor(Math.random()*30)];
        return `${date}-${month}-${year}`;
    }else {
        date = dataSet["dates"][Math.floor(Math.random()*31)];
        return `${date}-${month}-${year}`;
    }
}

function generateRandomAge(){
    let age = numBetween(15,86);
    return `${age}`;
}

function generateRandomPAN(){
    let letter1 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter2 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter3 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter4 = 'P';      //for individual persons as per rules
    let letter5 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];        //Ideally it should be first letter of official name or surname as per rules. Here it can be random
    let digits = numBetween(1000, 9999);
    let lastLetter = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];

    return `${letter1}${letter2}${letter3}${letter4}${letter5}${digits}${lastLetter}`;
}

function generateRandomData(currentNode, input){
    //Also adding a TEXT node check initially as characters is only available on that, otherwise it will throw an error
    if(currentNode.type === "TEXT"){

        setFont(currentNode);

        //If requirement is full-name, we need to attach elements for output
        if(input === "FullName"){
            let first = generateRandomFirstName();
            let last = generateRandomLastName();
            currentNode.characters = `${first} ${last}`;
        }
        else if(input === "DoB"){
            currentNode.characters = generateRandomDoB();
        }
        else if(input === "Age"){
            currentNode.characters = generateRandomAge();
        }
        else if(input === "Mobile"){
            currentNode.characters = "+91-" + generateMobileNumber();
        }
        else if(input === "UID"){
            currentNode.characters = generateAadhar();
        }
        else if(input === "UPIm"){
            currentNode.characters = generateRandomUPIm();
        }
        else if(input === "Email"){
            currentNode.characters = generateRandomEmail();
        }
        else if(input === "UPIn"){
            currentNode.characters = generateRandomUPIn();
        }
        else if(input === "Pass"){
            currentNode.characters = generatePassport();
        }
        else if(input === "DL"){
            currentNode.characters = generateRandomDL();
        }
        else if(input === "RC"){
            currentNode.characters = generateRandomRC();
        }
        else if(input === "PIN"){
            currentNode.characters = generateRandomPINCode();
        }
        else if(input === "City"){
            currentNode.characters = generateRandomCity();
        }
        else if(input === "State"){
            currentNode.characters = generateRandomState();
        }
        else if(input === "Prof"){
            currentNode.characters = generateRandomProf();
        }
        else if(input === "CityState"){
            currentNode.characters = generateCityStatePair();
        }
        else if(input === "FirstName"){
            currentNode.characters = generateRandomFirstName();
        }
        else if(input === "LastName"){
            currentNode.characters = generateRandomLastName();
        }
        else if(input === "RurAddress"){
            currentNode.characters = generateRandomRurAddress();
        }
        else if(input === "UrbAddress"){
            currentNode.characters = generateRandomUrbAddress();
        }
        else if(input === "PAN"){
            currentNode.characters = generateRandomPAN();
        }
    }
}

//Function for generating a new card with user details and appending it on the canvas
function generateTable(incomingMsg){

    const nodes: SceneNode[] = [];

    const userCount = incomingMsg.noOfUsers;        //To be used to create data content in later part

    //If addresses are not required, reduce the width of data section
    if (incomingMsg.RurAddressValue === false && incomingMsg.UrbAddressValue === false) {
        generateTableDataWidth = 135;
    }else if(incomingMsg.RurAddressValue === true || incomingMsg.UrbAddressValue === true){
        generateTableDataWidth = 270;
    }

    
    const tableFrame = figma.createFrame();         //Creating larger table frame
    tableFrame.layoutMode = "HORIZONTAL";           //Horizontal autolayout
    tableFrame.itemSpacing = 0;
    tableFrame.name = "Indian user data";
    var tableFrameWidth = 0;

    const labelSection = figma.createFrame();       //Section containing labels
    labelSection.layoutMode = "VERTICAL";           //Vertical autolayout
    labelSection.itemSpacing = 0;
    labelSection.name = "Labels";

    var labelSectionHeight = 0;                     //adjusting label section width and height manually. Need more thoughts on this for optimization


    //Add header for label section
    const labelHeaderFrame = figma.createFrame();
    formatLabelHeaderFrame(labelHeaderFrame);
    const labelHeaderText = figma.createText();
    setFont(labelHeaderText);
    labelHeaderText.characters = "Details";
    formatLabelHeaderText(labelHeaderText);
    labelHeaderFrame.appendChild(labelHeaderText);
    labelSectionHeight += generateTableHeaderHeight;
    labelSection.appendChild(labelHeaderFrame);


    //Code block to generate user details labels as it needs to be generated at least once
    if(incomingMsg.FirstNameValue === true){
        const firstnameLabelFrame = figma.createFrame();
        formatLabelFrame(firstnameLabelFrame);
        const firstnameLabel = figma.createText();
        setFont(firstnameLabel);
        firstnameLabel.characters = "First Name";
        formatLabelText(firstnameLabel);
        firstnameLabelFrame.appendChild(firstnameLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(firstnameLabelFrame);

    }

    if(incomingMsg.LastNameValue === true){
        const lastnameLabelFrame = figma.createFrame();
        formatLabelFrame(lastnameLabelFrame);
        const lastnameLabel = figma.createText();
        setFont(lastnameLabel);
        lastnameLabel.characters = "Last Name";
        formatLabelText(lastnameLabel);
        lastnameLabelFrame.appendChild(lastnameLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(lastnameLabelFrame);
    }

    if(incomingMsg.FullNameValue === true){
        const fullnameLabelFrame = figma.createFrame();
        formatLabelFrame(fullnameLabelFrame);
        const fullnameLabel = figma.createText();
        setFont(fullnameLabel);
        fullnameLabel.characters = "Full Name";
        formatLabelText(fullnameLabel);
        fullnameLabelFrame.appendChild(fullnameLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(fullnameLabelFrame);
    }
    
    if(incomingMsg.DoBValue === true){
        const dobLabelFrame = figma.createFrame();
        formatLabelFrame(dobLabelFrame);
        const dobLabel = figma.createText();
        setFont(dobLabel);
        dobLabel.characters = "Date of Birth";
        formatLabelText(dobLabel);
        dobLabelFrame.appendChild(dobLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(dobLabelFrame);
    }

    if(incomingMsg.AgeValue === true){
        const ageLabelFrame = figma.createFrame();
        formatLabelFrame(ageLabelFrame);
        const ageLabel = figma.createText();
        setFont(ageLabelFrame);
        ageLabel.characters = "Age";
        formatLabelText(ageLabel);
        ageLabelFrame.appendChild(ageLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(ageLabelFrame);
    }

    if(incomingMsg.EmailValue === true){
        const emailLabelFrame = figma.createFrame();
        formatLabelFrame(emailLabelFrame);
        const emailLabel = figma.createText();
        setFont(emailLabel);
        emailLabel.characters = "Email";
        formatLabelText(emailLabel);
        emailLabelFrame.appendChild(emailLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(emailLabelFrame);
     }

    if(incomingMsg.MobileValue === true){
        const mobileLabelFrame = figma.createFrame();
        formatLabelFrame(mobileLabelFrame);
        const mobileLabel = figma.createText();
        setFont(mobileLabel);
        mobileLabel.characters = "Mobile Number";
        formatLabelText(mobileLabel);
        mobileLabelFrame.appendChild(mobileLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(mobileLabelFrame);
    }

    if(incomingMsg.RurAddressValue === true){
        const rurLabelFrame = figma.createFrame();
        formatLabelFrame(rurLabelFrame);
        const rurLabel = figma.createText();
        setFont(rurLabel);
        rurLabel.characters = "Rural Address";
        formatLabelText(rurLabel);
        rurLabelFrame.appendChild(rurLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(rurLabelFrame);
    }

    if(incomingMsg.UrbAddressValue === true){
        const urbLabelFrame = figma.createFrame();
        formatLabelFrame(urbLabelFrame);
        const urbLabel = figma.createText();
        setFont(urbLabel);
        urbLabel.characters = "Urban Address";
        formatLabelText(urbLabel);
        urbLabelFrame.appendChild(urbLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(urbLabelFrame);
    }

    if(incomingMsg.CityValue === true){
        const cityLabelFrame = figma.createFrame();
        formatLabelFrame(cityLabelFrame);
        const cityLabel = figma.createText();
        setFont(cityLabel);
        cityLabel.characters = "City";
        formatLabelText(cityLabel);
        cityLabelFrame.appendChild(cityLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(cityLabelFrame);
    }

    if(incomingMsg.StateValue === true){
        const stateLabelFrame = figma.createFrame();
        formatLabelFrame(stateLabelFrame);
        const stateLabel = figma.createText();
        setFont(stateLabel);
        stateLabel.characters = "State";
        formatLabelText(stateLabel);
        stateLabelFrame.appendChild(stateLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(stateLabelFrame);
    }

    if(incomingMsg.PINValue === true){
        const pinLabelFrame = figma.createFrame();
        formatLabelFrame(pinLabelFrame);
        const pinLabel = figma.createText();
        setFont(pinLabel);
        pinLabel.characters = "PIN Code";
        formatLabelText(pinLabel);
        pinLabelFrame.appendChild(pinLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(pinLabelFrame);
    }

    if(incomingMsg.ProfValue === true){
        const profLabelFrame = figma.createFrame();
        formatLabelFrame(profLabelFrame);
        const profLabel = figma.createText();
        setFont(profLabel);
        profLabel.characters = "Profession";
        formatLabelText(profLabel);
        profLabelFrame.appendChild(profLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(profLabelFrame);
    }

    if(incomingMsg.PassValue === true){
        const passLabelFrame = figma.createFrame();
        formatLabelFrame(passLabelFrame);
        const passLabel = figma.createText();
        setFont(passLabel);
        passLabel.characters = "Passport";
        formatLabelText(passLabel);
        passLabelFrame.appendChild(passLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(passLabelFrame);
    }

    if(incomingMsg.UIDValue === true){
        const uidLabelFrame = figma.createFrame();
        formatLabelFrame(uidLabelFrame);
        const uidLabel = figma.createText();
        setFont(uidLabel);
        uidLabel.characters = "UID (Aadhar)";
        formatLabelText(uidLabel);
        uidLabelFrame.appendChild(uidLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(uidLabelFrame);
    }

    if(incomingMsg.PANValue === true){
        const panLabelFrame = figma.createFrame();
        formatLabelFrame(panLabelFrame);
        const panLabel = figma.createText();
        setFont(panLabel);
        panLabel.characters = "PAN";
        formatLabelText(panLabel);
        panLabelFrame.appendChild(panLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(panLabelFrame);
    }

    if(incomingMsg.UPInValue === true){
        const upinLabelFrame = figma.createFrame();
        formatLabelFrame(upinLabelFrame);
        const upinLabel = figma.createText();
        setFont(upinLabel);
        upinLabel.characters = "UPI (name)";
        formatLabelText(upinLabel);
        upinLabelFrame.appendChild(upinLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(upinLabelFrame);
    }

    if(incomingMsg.UPImValue === true){
        const upimLabelFrame = figma.createFrame();
        formatLabelFrame(upimLabelFrame);
        const upimLabel = figma.createText();
        setFont(upimLabel);
        upimLabel.characters = "UPI (mobile)";
        formatLabelText(upimLabel);
        upimLabelFrame.appendChild(upimLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(upimLabelFrame);
    }
    
    if(incomingMsg.DLValue === true){
        const dlLabelFrame = figma.createFrame();
        formatLabelFrame(dlLabelFrame);
        const dlLabel = figma.createText();
        setFont(dlLabel);
        dlLabel.characters = "Driving License";
        formatLabelText(dlLabel);
        dlLabelFrame.appendChild(dlLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(dlLabelFrame);
    }

    if(incomingMsg.RCValue === true){
        const rcLabelFrame = figma.createFrame();
        formatLabelFrame(rcLabelFrame);
        const rcLabel = figma.createText();
        setFont(rcLabel);
        rcLabel.characters = "Vehicle Reg. (RC)";
        formatLabelText(rcLabel);
        rcLabelFrame.appendChild(rcLabel);
        labelSectionHeight += generateTableCellHeight;
        labelSection.appendChild(rcLabelFrame);
    }



    labelSection.resize(generateTableLabelWidth, labelSectionHeight);
    labelSection.layoutMode = "NONE";               //Removing autolayout from label section before adding to the table
    tableFrameWidth += generateTableLabelWidth
    const tableFrameHeight = labelSectionHeight;    //Height of table will be same as that of label or data section which will be same
    tableFrame.appendChild(labelSection);           //Appending label section to the table frame


    // --------------------------------Labels section defining over---------------------------------------------



    //Creating user data content sections using for-loop for number of users requested from input
    for(let i=1; i<=userCount; i++){ 

        
        //Generate variables of user data from arryas and create const variables, which are then used in creating data content
        //Name related
        const fName = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
        const lName = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
        const fullName = `${fName} ${lName}`;
        //Mobile
        const mobileDigits = generateMobileNumber();
        const mobile = `+91-${mobileDigits}`;
        //Upi related
        const upiEnd1 = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];
        const upiEnd2 = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];
        const upin = `${fName}${lName}@${upiEnd1}`.toLowerCase();
        const upim = `${mobileDigits}@${upiEnd2}`.toLowerCase();
        //City, state related
        const stateName = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
        const cityName = dataSet[`${stateName}`][Math.floor(Math.random()*(dataSet[`${stateName}`].length-3))+3];
        const pinFirstDigit = dataSet[`${stateName}`][2];
        const pinRemainingDigits = numBetween(10000,99999);
        const pinCode = `${pinFirstDigit}${pinRemainingDigits}`;
        //Urban Address
        const urbSpotNo = dataSet["UrbSpotNo"][Math.floor(Math.random()*(dataSet["UrbSpotNo"].length))];
        const urbNum1 = numBetween(1,99);
        const urbLandmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
        const urbLandmark = dataSet["UrbLandmark"][Math.floor(Math.random()*(dataSet["UrbLandmark"].length))];
        const urbAreaNo = dataSet["UrbAreaNo"][Math.floor(Math.random()*(dataSet["UrbAreaNo"].length))];
        const urbNum2 = numBetween(1,99);
        const subUrb = dataSet["UrbAddressSuburb"][Math.floor(Math.random()*(dataSet["UrbAddressSuburb"].length))];
        const urbanAddress = `${urbSpotNo} ${urbNum1}, ${urbLandmarkConj} ${urbLandmark}, ${urbAreaNo} ${urbNum2}, ${subUrb}, ${cityName}, ${stateName}, Pincode-${pinCode}`;
        //Rural address
        const rurLandmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
        const rurLandmark = dataSet["RurLandmark"][Math.floor(Math.random()*(dataSet["RurLandmark"].length))];
        const rurVillageSuffix = dataSet["RurVillageSuffix"][Math.floor(Math.random()*(dataSet["RurVillageSuffix"].length))]; 
        const rurVillage1 = dataSet["RurAddressVillage"][Math.floor(Math.random()*(dataSet["RurAddressVillage"].length))];
        const rurVillage2 = dataSet["RurAddressVillage"][Math.floor(Math.random()*(dataSet["RurAddressVillage"].length))];
        const ruralAddress = `${rurLandmarkConj} ${rurLandmark}, ${rurVillage1} ${rurVillageSuffix}, Post - ${rurVillage2} Dist - ${cityName}, ${stateName}, Pincode - ${pinCode}`;
        //Email
        const emailDomain = dataSet["EmailDomain"][Math.floor(Math.random()*(dataSet["EmailDomain"].length))];
        const emailEnd = dataSet["EmailEnd"][Math.floor(Math.random()*(dataSet["EmailEnd"].length))];
        const userEmail = `${fName}.${lName}@${emailDomain}.${emailEnd}`.toLowerCase();
        // Dob and age
        const dobContent = generateRandomDoB();
        const yearContent = dobContent[6] + dobContent[7] + dobContent[8] + dobContent[9];
        const birthYear = parseInt(yearContent, 10);
        const curretTime = new Date();
        const currentYear = curretTime.getFullYear();
        const currentAge = currentYear - birthYear;
        //Profession
        const userProfession = dataSet["Prof"][Math.floor(Math.random()*(dataSet["Prof"].length))];
        //DL, RC related
        const stateInitials = dataSet[`${stateName}`][0];
        const rtoDigits = numBetween(1, parseInt(dataSet[`${stateName}`][1], 10));
        const dlYear = numBetween(1980,2021);
        const dlLastDigits = numBetween(1000000,9999999);
        const rcLetter1 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
        const rcLetter2 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
        const rcEndDigits = numBetween(1000,9999);
        //Passport
        const passport = generatePassport();
        //UID
        const UID = generateAadhar();
        //PAN
        const panLetter1 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
        let panLetter2 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
        let panLetter3 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
        let panLetter4 = 'P';
        let panLetter5 = fName[0];
        let panDigits = numBetween(1000, 9999);
        let panLastLetter = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
        const pan = `${panLetter1}${panLetter2}${panLetter3}${panLetter4}${panLetter5}${panDigits}${panLastLetter}`;

        // --------------------------------Values declaration over---------------------------------------------


        const dataSection = figma.createFrame();       //Section containing data items
        dataSection.layoutMode = "VERTICAL";           //Vertical autolayout
        dataSection.itemSpacing = 0;
        dataSection.name = `User ${i}`;

        //Add header for data sections
        const userHeaderFrame = figma.createFrame();
        formatUserHeaderFrame(userHeaderFrame);
        const userHeaderText = figma.createText();
        setFont(userHeaderText);
        userHeaderText.characters = `User ${i}`;
        formatUserHeaderText(userHeaderText);
        userHeaderFrame.appendChild(userHeaderText);
        dataSection.appendChild(userHeaderFrame);


        if(incomingMsg.FirstNameValue === true){
            const firstnameTextFrame = figma.createFrame();
            formatContentFrame(firstnameTextFrame);
            const firstnameText = figma.createText();
            setFont(firstnameText);
            firstnameText.characters = `${fName}`;
            formatContentText(firstnameText);
            firstnameTextFrame.appendChild(firstnameText);
            dataSection.appendChild(firstnameTextFrame);
        }

        if(incomingMsg.LastNameValue === true){
            const lastnameTextFrame = figma.createFrame();
            formatContentFrame(lastnameTextFrame);
            const lastnameText = figma.createText();
            setFont(lastnameText);
            lastnameText.characters = `${lName}`;
            formatContentText(lastnameText);
            lastnameTextFrame.appendChild(lastnameText);
            dataSection.appendChild(lastnameTextFrame);
       }

        if(incomingMsg.FullNameValue === true){
            const fullnameTextFrame = figma.createFrame();
            formatContentFrame(fullnameTextFrame);
            const fullnameText = figma.createText();
            setFont(fullnameText);
            fullnameText.characters = `${fullName}`;
            formatContentText(fullnameText);
            fullnameTextFrame.appendChild(fullnameText);
            dataSection.appendChild(fullnameTextFrame);
        }

        if(incomingMsg.DoBValue === true){
            const dobTextFrame = figma.createFrame();
            formatContentFrame(dobTextFrame);
            const dobText = figma.createText();
            setFont(dobText);
            dobText.characters = `${dobContent}`;
            formatContentText(dobText);
            dobTextFrame.appendChild(dobText);
            dataSection.appendChild(dobTextFrame);
        }

        if(incomingMsg.AgeValue === true){
            const ageTextFrame = figma.createFrame();
            formatContentFrame(ageTextFrame);
            const ageText = figma.createText();   
            setFont(ageText);     
            ageText.characters = `${currentAge}`;
            formatContentText(ageText);
            ageTextFrame.appendChild(ageText);
            dataSection.appendChild(ageTextFrame);
        }

        if(incomingMsg.EmailValue === true){
            const emailTextFrame = figma.createFrame();
            formatContentFrame(emailTextFrame);
            const emailText = figma.createText();
            setFont(emailText);  
            emailText.characters = `${userEmail}`;
            formatContentText(emailText);
            emailTextFrame.appendChild(emailText);
            dataSection.appendChild(emailTextFrame);
        }

        if(incomingMsg.MobileValue === true){
            const mobileTextFrame = figma.createFrame();
            formatContentFrame(mobileTextFrame);
            const mobileText = figma.createText();
            setFont(mobileText); 
            mobileText.characters = `${mobile}`;
            formatContentText(mobileText);
            mobileTextFrame.appendChild(mobileText);
            dataSection.appendChild(mobileTextFrame);
        }

        if(incomingMsg.RurAddressValue === true){
            const rurAddressTextFrame = figma.createFrame();
            formatContentFrame(rurAddressTextFrame);
            const rurAddressText = figma.createText();
            setFont(rurAddressText); 
            rurAddressText.characters = `${ruralAddress}`;
            formatContentText(rurAddressText);
            rurAddressTextFrame.appendChild(rurAddressText);
            dataSection.appendChild(rurAddressTextFrame);
        }

        if(incomingMsg.UrbAddressValue === true){
            const urbAddressTextFrame = figma.createFrame();
            formatContentFrame(urbAddressTextFrame);
            const urbAddressText = figma.createText();
            setFont(urbAddressText); 
            urbAddressText.characters = `${urbanAddress}`;
            formatContentText(urbAddressText);
            urbAddressTextFrame.appendChild(urbAddressText);
            dataSection.appendChild(urbAddressTextFrame);
        }

        if(incomingMsg.CityValue === true){
            const cityTextFrame = figma.createFrame();
            formatContentFrame(cityTextFrame);
            const cityText = figma.createText();
            setFont(cityText); 
            cityText.characters = `${cityName}`;
            formatContentText(cityText);
            cityTextFrame.appendChild(cityText);
            dataSection.appendChild(cityTextFrame);
        }

        
        if(incomingMsg.StateValue === true){
            const stateTextFrame = figma.createFrame();
            formatContentFrame(stateTextFrame);
            const stateText = figma.createText();
            setFont(stateText); 
            stateText.characters = `${stateName}`;
            formatContentText(stateText);
            stateTextFrame.appendChild(stateText);
            dataSection.appendChild(stateTextFrame);
        }

        if(incomingMsg.PINValue === true){
            const pinTextFrame = figma.createFrame();
            formatContentFrame(pinTextFrame);
            const pinText = figma.createText();
            setFont(pinText); 
            pinText.characters = `${pinCode}`;
            formatContentText(pinText);
            pinTextFrame.appendChild(pinText);
            dataSection.appendChild(pinTextFrame);
        }

        if(incomingMsg.ProfValue === true){
            const professionTextFrame = figma.createFrame();
            formatContentFrame(professionTextFrame);
            const professionText = figma.createText();
            setFont(professionText); 
            if(currentAge <= 19){
                professionText.characters = "Student";
            }else{
                professionText.characters = `${userProfession}`;
            }
            formatContentText(professionText);
            professionTextFrame.appendChild(professionText);
            dataSection.appendChild(professionTextFrame);
        }

        if(incomingMsg.PassValue === true){
            const passTextFrame = figma.createFrame();
            formatContentFrame(passTextFrame);
            const passText = figma.createText();
            setFont(passText); 
            passText.characters = `${passport}`;
            formatContentText(passText);
            passTextFrame.appendChild(passText);
            dataSection.appendChild(passTextFrame);
        }


        if(incomingMsg.UIDValue === true){
            const uidTextFrame = figma.createFrame();
            formatContentFrame(uidTextFrame);
            const uidText = figma.createText();
            setFont(uidText); 
            uidText.characters = `${UID}`;
            formatContentText(uidText);
            uidTextFrame.appendChild(uidText);
            dataSection.appendChild(uidTextFrame);
        }

        if(incomingMsg.PANValue === true){
            const panTextFrame = figma.createFrame();
            formatContentFrame(panTextFrame);
            const panText = figma.createText();
            setFont(panText); 
            panText.characters = `${pan}`;
            formatContentText(panText);
            panTextFrame.appendChild(panText);
            dataSection.appendChild(panTextFrame);
        }

        if(incomingMsg.UPInValue === true){
            const upinTextFrame = figma.createFrame();
            formatContentFrame(upinTextFrame);
            const upinText = figma.createText();
            setFont(upinText); 
            upinText.characters = `${upin}`;
            formatContentText(upinText);
            upinTextFrame.appendChild(upinText);
            dataSection.appendChild(upinTextFrame);
        }
        
        if(incomingMsg.UPImValue === true){
            const upimTextFrame = figma.createFrame();
            formatContentFrame(upimTextFrame);
            const upimText = figma.createText();
            setFont(upimText); 
            upimText.characters = `${upim}`;
            formatContentText(upimText);
            upimTextFrame.appendChild(upimText);
            dataSection.appendChild(upimTextFrame);
        }

        if(incomingMsg.DLValue === true){
            const dlTextFrame = figma.createFrame();
            formatContentFrame(dlTextFrame);
            const dlText = figma.createText();   
            setFont(dlText);  
            if(currentAge < 18){
                dlText.characters = `Not elligible due to age`;
            }else if(rtoDigits < 10){
                dlText.characters = `${stateInitials}0${rtoDigits}${dlYear}${dlLastDigits}`;
            }else{
                dlText.characters = `${stateInitials}${rtoDigits}${dlYear}${dlLastDigits}`;
            }
            formatContentText(dlText);
            dlTextFrame.appendChild(dlText);
            dataSection.appendChild(dlTextFrame);
        }

        if(incomingMsg.RCValue === true){
            const rcTextFrame = figma.createFrame();
            formatContentFrame(rcTextFrame);
            const rcText = figma.createText();
            setFont(rcText);  
            if(currentAge < 18){
                rcText.characters = `Not elligible due to age`;
            }else if(rtoDigits < 10){
                rcText.characters = `${stateInitials}0${rtoDigits}${rcLetter1}${rcLetter2}${rcEndDigits}`;
            }else{
                rcText.characters = `${stateInitials}${rtoDigits}${rcLetter1}${rcLetter2}${rcEndDigits}`;
            }
            formatContentText(rcText);
            rcTextFrame.appendChild(rcText);
            dataSection.appendChild(rcTextFrame);
        }






        
        const dataSectionWidth = generateTableDataWidth;               //Constant already defined initially
        const dataSectionHeight = labelSectionHeight;                   //Already calculated in the label section

        dataSection.resize(dataSectionWidth, dataSectionHeight);
        dataSection.layoutMode = "NONE";               //Removing autolayout from data section before adding to the table
        
        tableFrameWidth += dataSectionWidth
        tableFrame.appendChild(dataSection);           //Appending label section to the table frame

    }

    tableFrame.resize(tableFrameWidth, tableFrameHeight); 
    tableFrame.layoutMode = "NONE";                        //Removing autolayout from main table frame before adding to canvas


    //Putting the created frame on figma currentpage. Other parameters are used to add card to the scene, and also scroll and zoom to that card
    figma.currentPage.appendChild(tableFrame);
    nodes.push(tableFrame);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
}


function formatLabelFrame(inputFrameNode){
        inputFrameNode.resize(generateTableLabelWidth, generateTableCellHeight);
        inputFrameNode.fills = [
            {
            type: "SOLID",
            color: { r: 0.976, g: 0.984, b: 1 },
            // color: { r: 0.96, g: 0.96, b: 0.96 },
            }
        ];
        inputFrameNode.strokes = [
            {
            type: "SOLID",
            color: { r: 0.58, g: 0.698, b: 0.858 },
            // color: { r: 0.6, g: 0.6, b: 0.6 },
            }
        ];
        inputFrameNode.strokeWeight = 0.25;
        inputFrameNode.strokeAlign = "CENTER";
}

function formatContentFrame(inputFrameNode){
        inputFrameNode.resize(generateTableDataWidth, generateTableCellHeight);
        inputFrameNode.strokes = [
            {
            type: "SOLID",
            color: { r: 0.58, g: 0.698, b: 0.858 },
            // color: { r: 0.6, g: 0.6, b: 0.6},
            }
        ];
        inputFrameNode.strokeWeight = 0.25;
        inputFrameNode.strokeAlign = "CENTER";
}

function formatLabelHeaderFrame(inputFrameNode){
        inputFrameNode.resize(generateTableLabelWidth, generateTableHeaderHeight);
        inputFrameNode.fills = [
            {
            type: "SOLID",
            color: { r: 0.858, g: 0.925, b: 1 },
            }
        ];
        inputFrameNode.strokes = [
            {
            type: "SOLID",
            color: { r: 0.58, g: 0.698, b: 0.858 },
            // color: { r: 0.6, g: 0.6, b: 0.6 },
            }
        ];
        inputFrameNode.strokeWeight = 0.25;
        inputFrameNode.strokeAlign = "CENTER";
}

function formatUserHeaderFrame(inputFrameNode){
    inputFrameNode.resize(generateTableDataWidth, generateTableHeaderHeight);
    inputFrameNode.fills = [
        {
        type: "SOLID",
        color: { r: 0.858, g: 0.925, b: 1 },
        }
    ];
    inputFrameNode.strokes = [
        {
        type: "SOLID",
        // color: { r: 0.58, g: 0.698, b: 0.858 },
        color: { r: 0.6, g: 0.6, b: 0.6 },
        }
    ];
    inputFrameNode.strokeWeight = 0.25;
    inputFrameNode.strokeAlign = "CENTER";

}

function formatLabelText(inputTextNode){
    setFontLight(inputTextNode);
    inputTextNode.fontSize = 8;
    inputTextNode.fills = [
        {
          type: "SOLID",
          color: { r: 0.2, g: 0.2, b: 0.2},
        }
      ];
    inputTextNode.x += 3
    inputTextNode.resize (generateTableLabelWidth-6, generateTableCellHeight);
    inputTextNode.textAlignHorizontal = "LEFT";
    inputTextNode.textAlignVertical = "CENTER";
}

function formatContentText(inputTextNode){
    setFont(inputTextNode);
    inputTextNode.fontSize = 9;
    inputTextNode.fills = [
        {
          type: "SOLID",
          color: { r: 0.2, g: 0.2, b: 0.2 },
        }
      ];
    inputTextNode.x += 4
    inputTextNode.resize (generateTableDataWidth-8, generateTableCellHeight);
    inputTextNode.textAlignHorizontal = "LEFT";
    inputTextNode.textAlignVertical = "CENTER";
}

function formatLabelHeaderText(inputTextNode){
        setFontLight(inputTextNode);
        inputTextNode.fontSize = 8;
        inputTextNode.fills = [
            {
            type: "SOLID",
            color: { r: 0.2, g: 0.2, b: 0.2},
            }
        ];
        inputTextNode.x += 3
        inputTextNode.resize (generateTableLabelWidth-6, generateTableHeaderHeight);
        inputTextNode.textAlignHorizontal = "LEFT";
        inputTextNode.textAlignVertical = "CENTER";
}

function formatUserHeaderText(inputTextNode){
    setFontLight(inputTextNode);
    inputTextNode.fontSize = 8;
    inputTextNode.fills = [
        {
        type: "SOLID",
        color: { r: 0.2, g: 0.2, b: 0.2},
        }
    ];
    inputTextNode.x += 4
    inputTextNode.resize (generateTableDataWidth-8, generateTableHeaderHeight);
    inputTextNode.textAlignHorizontal = "LEFT";
    inputTextNode.textAlignVertical = "CENTER";
}
