//Made by Abhijit Chirde
//abhijitchirde.com

figma.loadFontAsync({family: 'Roboto', style: 'Regular'});
figma.loadFontAsync({family: 'Roboto', style: 'Light'});

//Show UI on figma canvas
figma.showUI(__html__,{width: 500, height: 425});

//Data space containing arrays of data
const dataSet = {

    "FirstName" : ["Nilanjana", "Sikata", "May", "Hardini", "Yaditasri", "Srividya", "Shirohini", "Rajathi", "Puravi", "Shritha", "Subhangi", "Pratichi", "Abja", "Ucchal", "Theertha", "Farukh", "Janya", "Daevayaani", "Devasena", "Rusham", "Falguni", "Neera", "Obilesh", "Toyakshi", "Ninarika", "Seethalakshmi", "Ponni", "Vibusha", "Iksha", "Druthy", "Dakshita", "Tejshri", "Altthea", "Athidi", "Sikta", "Aapal", "Prarthana", "Ujjwal", "Bhayva", "Samprathi", "Pranshu", "Aayaushi", "Brahmini", "Inimoli", "Suprasanna", "Saija", "Chinnu", "Soukhya", "Perarasi", "Tharunika", "Nihira", "Vanmalli", "Bahugandha", "Indra", "Radhiyaa", "Bhuvaneswari", "Tarpana", "Shree", "Nilima", "Milika", "Siksha", "Velvili", "Ojaswini", "Srivathsavi", "Idhaya", "Althea", "Athalia", "Darsha", "Agampreet", "Sahira","Nelochan", "Rikin", "Rukm", "Bhoomindra", "Nandlaal", "Devasree", "Jivana", "Satesh", "Advin", "Ranesh", "Abhijay", "Sarat", "Abijah", "Kala", "Vedatman", "Adnan", "Kahini", "Vidyut", "Taneesh", "Gandhar", "Apuroop", "Kushal", "Ehsaas", "Ruchita", "Divyansh", "Sragvibhushan", "Pardhu", "Atmaja", "Karunamaya", "Naumika", "Ekram", "Murari", "Bala Gopal", "Krthik", "Varaahamihir", "Pushpaj", "Vasusen", "Kailashpati", "Bisaj", "Shiya", "Ajani", "Krishnabala", "Sudarshan", "Aadhil", "Srujana", "Varshit", "Satvik", "Veerendra", "Yathavan", "Lokajit", "Neil", "Gadhadhar", "Vaaman", "Mitransh", "Saroj", "Dinesh", "Chinmayee", "Trinetra", "Sutapa", "Bhavbhooti", "Mahaaveer", "Hemal", "Suvarn", "Kshamakaram", "Talin", "Shatrughan", "Kalicharan", "Amitesh", "Ananya", "Banke","Aakaar", "Anjaneya", "Aatreya", "Advith", "Balan", "Biju", "Bhavyesh", "Chandresh", "Chathresh", "Chiranjeev", "Devarya", "Dhruvan", "Drishith", "Eegaiarasu", "Ekachakra", "Elango", "Elavarasan", "Elisaiyan", "Elilvendan", "Gnanam", "Gunasekaran", "Ilaiyaraja", "Ilakkiyan", "Ilamaran", "Ilanthirayan", "Irumporai", "Jaganath", "Jagath", "Jaithra", "Jegathiswaran", "Jivathran", "Karthav", "Karthik", "Karthikeyan", "Lohith", "Loshith", "Maniraj", "Maaran", "Manikandan", "Martanda", "Matanga", "Maharth", "Mallesh", "Nagulan", "Nallasivan", "Nagarajan", "Nikith", "Nilan", "Nithin", "Nageshwaran", "Oppilan", "Paraman", "Pavalan", "Rameshwar", "Revanth", "Rajanikanta", "Samath", "Sarvanavel", "Saswin", "Senthil", "Thillaivanan", "Thangaraj", "Thirugnanam", "Thevan", "Thirumal", "Trinath", "Ulagan", "Ulagarasan", "Vaidyanathan", "Aadita", "Aakshi", "Abhitha", "Alagi", "Amala", "Arasi", "Bhavi", "Bhrithi", "Chaithra", "Charvitha", "Charusila", "Chinnamani", "Devasree", "Devadarshini", "Dhariyithri", "Dhruvika", "Dharnitha", "Divyasree", "Drithi", "Ektha", "Eelampirai", "Eesvari", "Ekaparnika", "Elavarasi", "Elili", "Eshwaritha", "Gathika", "Gayanthika", "Geethanvitha", "Gomathi", "Gunamaalai", "Gnanavalli", "Gunamalar", "Gunasundari", "Haarathi", "Hanshitha", "Harishini", "Hamsavahini", "Idhithri", "Idhaya", "Inimai", "Ilavalagi", "Kalaiarasi", "Kanayali", "Kanimoli", "Kayalvizhi", "Lakshmika", "Lirthika", "Malaimagal", "Mangai", "Manikuntala", "Nallarasi", "Nallini", "Ojaswitha", "Olimani", "Ovya", "Pavalam", "Prajaktha", "Pranusha", "Sathya", "Shresthi", "Sethuramani", "Thanvi", "Thanya", "Thanmayi", "Tilakavati", "Tvarika", "Umamaheshwari", "Veeramagal", "Viviktha","Abhijeet", "Aditya", "Akshat", "Amanpreet", "Amitava", "Angad", "Aniruddh", "Anubhav", "Arjun", "Armaan", "Ashish", "Azad", "Bhaskar", "Bhavesh", "Bhavin", "Bipin", "Chetas", "Chirag", "Chiranjeev", "Daanish", "Dalbir", "Daljeet", "Debashish", "Debyendu", "Dhruv", "Dipankar", "Ehsaan", "Emir", "Gagandeep", "Gaurav", "Gautam", "Girish", "Gurdeep", "Harbhajan", "Himmat", "Indranuj", "Jayant", "Jayesh", "Jeet", "Jyotiraditya", "Kabir", "Kartik", "Karun", "Kshitij", "Kuwarjeet", "Lohith", "Madhav", "Mridul", "Navjot", "Nikhil", "Nimit", "Nishith", "Ojas", "Om", "Onkar", "Paramjit", "Paritosh", "Parth", "Pavan", "Pranav", "Purab", "Ramandeep", "Rehaan", "Rohan", "Sahil", "Samarth", "Samir", "Sanchit", "Sanjay", "Sarabjit", "Shahzad", "Shantanu", "Shishir", "Shray", "Siddharth", "Sparsh", "Sumer", "Surjan", "Swapan", "Tarun", "Tejas", "Tushar", "Udit", "Umang", "Varun", "Veer", "Vidur", "Vinay", "Yash", "Aaina", "Aaliyah", "Aasha", "Aditi", "Aishwarya", "Anjali", "Antara", "Aparna", "Arshpreet", "Aruna", "Arunima", "Ayesha", "Bahaar", "Bhagyashree", "Bhavna", "Bhoomi", "Bipasha", "Chaaya", "Chandrika", "Chhavi", "Chitragandha", "Deepika", "Devika", "Diya", "Ekta", "Falguni", "Garima", "Gauhar", "Gayatri", "Geetha", "Gurleen", "Harini", "Harpreet", "Indrani", "Ira", "Jasleen", "Jayanti", "Jyothsna", "Kalyani", "Kanika", "Kavya", "Laila", "Lathika", "Lavanya", "Leela", "Lopamudra", "Malavika", "Maya", "Meera", "Meher", "Naaz", "Nagma", "Nalini", "Nargis", "Nivedita", "Piya", "Pooja", "Prabhjot", "Preet", "Rangana", "Rasika", "Revati", "Ruchika", "Saira", "Sanjana", "Sarah", "Shifa", "Shivani", "Shreya", "Shridevi", "Shweta", "Simran", "Surabhi", "Tanvi", "Tara", "Uma", "Upasana", "Urvashi", "Vaishnavi", "Yamini", "Yoshita", "Aarav", "Aarush", "Aakesh", "Aabir", "Aadav", "Abhir", "Anay", "Arush", "Avik", "Anik", "Ayaan", "Bali", "Braj", "Bavyesh", "Benoy", "Bipin", "Bhawesh", "Binish", "Bivan", "Barun", "Badri", "Balraj", "Charun", "Chetan", "Charmin", "Chahel", "Chirag", "Chandrak", "Danvir", "Divit", "Darshan", "Devansh", "Devashish", "Dhairya", "Eklavya", "Ednit", "Evyavan", "Ekagrah", "Ekaant", "Evan", "Ganak", "Giriraj", "Gaurik", "Geetansh", "Girvaan", "Gupil", "Haadiya", "Hanshal", "Harman", "Havish", "Hiren", "Hriday", "Inesh", "Itish", "Idhant", "Induj", "Iravat", "Ishaan", "Jack", "Jagan", "Jiyaan", "Jeshan", "Jabir", "Jaivardhan", "Kairav", "Kiyansh", "Kavan", "Kaling", "Kaustubh", "Koshin", "Kshitij", "Keyvan", "Lochan", "Lavish", "Lavraj", "Laharish", "Lineesh", "Lohit", "Lokit", "Luvya", "Meer", "Mahant", "Mikul", "Mayur", "Milan", "Mitansh", "Manas", "Magan", "Nirvin", "Nithik", "Nayan", "Nairit", "Nabhya", "Nakshatra", "Neel", "Neelesh", "Onkar", "Omja", "Omav", "Ojayit", "Ogaan", "Parav", "Pahal", "Parth", "Pakshi", "Parijat", "Prabir", "Prayan", "Ruhan", "Ryaan", "Ridhaan", "Rovin", "Rish", "Raul", "Ritvaan", "Subin", "Sachiv", "Sadhil", "Sannith", "Sadhiv", "Saadhik", "Saahan", "Taarush", "Tanip", "Tavish", "Trishan", "Tupil", "Tapan", "Tapasvi", "Vaayu", "Viom", "Vian", "Vihaan", "Vanaj", "Vedank", "Videh", "Yaskhit", "Yaduvir", "Yukt", "Yugant", "Yojith", "Abay", "Atharv", "Aniket", "Amay", "Aryash", "Achit", "Avyan", "Aatish", "Advik", "Amey", "Aneek", "Arnav", "Anvit", "Aboil", "Adhyan", "Ashrith", "Aarsh", "Anmay", "Abhav", "Akshaj", "Ahaan", "Anvay", "Aarshin", "Ayan", "Advay", "Agrim", "Aviraj", "Ayog", "Anishk", "Aabhas", "Aadhav", "Aadhish", "Aadi", "Aadit", "Aadith", "Aaditva", "Aadvay", "Aadvik", "Aagam", "Aahaan", "Aahan", "Aahil", "Aahnik", "Aahva", "Aalam", "Aalap", "Aalekh", "Aan", "Aanav", "Aabhra", "Aangat", "Aanick", "Aapt", "Aaradhy", "Aariket", "Aarish", "Aarit", "Aariv", "Aaryav", "Aarth", "Aahna", "Aakriti", "Aadhya", "Aarohi", "Aamya", "Abhira", "Adhira", "Ambika", "Akira", "Ananya", "Anaya", "Baani", "Bhumi", "Bansuri", "Barkha", "Bhavika", "Bhavya", "Brinda", "Bipasha", "Bishti", "Bhavini", "Bhrithi", "Chaya", "Chayana", "Charil", "Chintanika", "Chaina", "Charvi", "Dhvani", "Darshana", "Daksha", "Diksha", "Dhita", "Divija", "Eshani", "Evani", "Ekaparnika", "Ekani", "Etasha", "Eksha", "Gina", "Gajal", "Gira", "Ganika", "Gayalika", "Geethika", "Hirsha", "Hrithika", "Haryka", "Harusha", "Hanika", "Harnoor", "Ihina", "Ilisha", "Inika", "Ipsa", "Iditri", "Ihitha", "Jenil", "Jhilmil", "Jigyaasa", "Jagruthi", "Jasmine", "Jeevika", "Kavisha", "Krishika", "Kairavi", "Kashika", "Keiyona", "Kanchan", "Kuvira", "Kuvam", "Liza", "Lekisha", "Lipika", "Lahari", "Lasika", "Lavali", "Lorena", "Lona", "Maitreyi", "Manasi", "Manikya", "Manika", "Malavika", "Magadhi", "Madhul", "Mayukhi", "Nivita", "Noshi", "Naila", "Nainika", "Namya", "Nyra", "Naisha", "Nartika", "Ovya", "Oditi", "Odika", "Orpita", "Oorvi", "Panvi", "Parinika", "Preshti", "Pihoo", "Punarvi", "Palomi", "Rhia", "Riti", "Rupasi", "Rajika", "Ramitha", "Ranjana", "Rijuta", "Shanvi", "Saira", "Suvi", "Sriya", "Stuthi", "Sajili", "Sahana", "Twisha", "Toshi", "Turvi", "Tapni", "Tanirika", "Tejal", "Tanvee", "Vivya", "Vachi", "Verna", "Vanhi", "Vedya", "Vaani", "Vahini", "Yashi", "Yagya", "Yahavi", "Yasti", "Yajna", "Areen", "Abhithi", "Achira", "Acira", "Amrusha", "Aditha", "Aditri", "Adrika", "Advaita", "Aboli", "Advika", "Adya", "Anuva", "Ahana", "Ahina", "Aishi", "Aishna", "Aja", "Ajia", "Akhira", "Akita", "Amani", "Aksa", "Aksha", "Akshai", "Akshi", "Akuti", "Alaina", "Aloki", "Amaya", "Amika", "Aadhira", "Aavani", "Aadanya", "Aadita", "Aadvika", "Aadya", "Aahna", "Aakarsha", "Aamani", "Aamaya", "Aanavi", "Aangi", "Aanya", "Aaoka", "Aapti", "Aara", "Aaravi", "Aarin", "Aarna", "Aarvi", "Aashika", "Aashirya", "Aashka", "Aashna", "Aashni", "Aashvi", "Aasia", "Aasmi", "Aasra", "Aasya", "Aathi", "Aayana", "Ansh", "Arhaan", "Arin", "Arjun", "Aryaman", "Aryan", "Atharva", "Avi", "Avyaan", "Ayush", "Ayushman", "Azaan", "Azad", "Bachittar", "Bahadurjit", "Bakhshi", "Balendra", "Balhaar", "Baljiwan", "Balvan", "Balveer", "Banjeet", "Bhaavik", "Bhavin", "Brijesh", "Chaitanya", "Chakradev", "Chakradhar", "Champak", "Chanakya", "Chandran", "Chandresh", "Charan", "Chatresh", "Chatura", "Chitaksh", "Daksh", "Dakshesh", "Dalbir", "Darpan", "Darsh", "Darshit", "Dev", "Dhanuk", "Dhruv", "Divij", "Divyansh", "Eeshan", "Ehsaan", "Ekalinga", "Ekapad", "Ekaraj", "Ekavir", "Gagan", "Gatik", "Gaurang", "Gauransh", "Gaurav", "Gautam", "Girik", "Girindra", "Girish", "Gopal", "Gunbir", "Guneet", "Hardik", "Harish", "Harsh", "Harshil", "Hemang", "Himmat", "Hitesh", "Hridaan", "Hritik", "Hunar", "Ikbal", "Ikshit", "Imaran", "Indrajit", "Isaac", "Ishwar", "Ivaan", "Izaan", "Jagat", "Jagdish", "Jai", "Jainew", "Jaiyush", "Jason", "Jatin", "Jeet", "Jivin", "Kabir", "Kalpit", "Kanav", "Karan", "Kiaan", "Krish", "Krishiv", "Krishna", "Kushagra", "Laban", "Laksh", "Lakshay", "Lakshit", "Lauhit", "Lucky", "Maanas", "Maanav", "Madhav", "Manan", "Manav", "Manbir", "Manthan", "Medhansh", "Mitesh", "Moksh", "Nachiket", "Naksh", "Nakul", "Naveen", "Navodit", "Nihal", "Nimit", "Nirvaan", "Nishith", "Nitesh", "Ohas", "Om", "Omkaar", "Onveer", "Orinder", "Parv", "Pranav", "Pranay", "Praneel", "Pranit", "Pratham", "Pratyush", "Purab", "Rachit", "Raghav", "Ranbir", "Ranveer", "Rehaannew", "Rishi", "Ritvik", "Rohan", "Ronith", "Rudranew", "Rudransh", "Rushil", "Ryan", "Saatvik", "Sahil", "Sai", "Saihaj", "Saksham", "Samaksh", "Samar", "Samarth", "Sarthak", "Sathviknew", "Savar", "Shaan", "Shaurya", "Shayak", "Shivansh", "Shlok", "Shray", "Siddharth", "Stuvan", "Suveer", "Taksh", "Tanay", "Tanish", "Tanmay", "Tanveer", "Tanvik", "Tarak", "Teerth", "Tejas", "Udant", "Udarsh", "Ujjwal", "Umang", "Upkaar", "Uthkarsh", "Utkarsh", "Vaibhav", "Veer", "Viaannew", "Virat", "Vivaan",   "Warinder", "Warjas", "Wriddhish", "Wridesh", "Yagnesh", "Yatan", "Yatin", "Yug", "Yuvaan", "Yuvraj", "Ekansh", "Hredhaan", "Jairaj", "Reyansh", "Samesh", "Viraj", "Yash", "Nikita", "Himani", "Rupansh", "Rashi", "Kapil", "Kajal", "Vikas", "Sairam", "Kasak", "Parikshit", "Ankit", "Aditi", "Mohit", "Ashik", "Praveen", "Bharat", "Kriti", "Prachi", "Sourabh", "Kishan", "Ashish", "Pooja", "Chhavi", "Suraj", "Vidushi", "Ritika", "Akshita", "Bulbul", "Amit", "Anupam", "Tanisha", "Gagandeep", "Akshat", "Priyansh", "Dinesh", "Ashita", "Vishal", "Sagar", "Parakh", "Abhishek", "Balvinder", "Shivam", "Nitin", "Tushar", "Suyash", "Shreyansh", "Lakshya", "Swapnil", "Amisha", "Anagh", "Rahul", "Yashwant", "Sharda", "Khushi", "Shweta", "Rajneesh", "Chandra", "Mega", "Mithil", "Prayas", "Deepak", "Aman", "Piyush", "Soumya", "Prateek", "Ayaz", "Namrata", "Visharad", "Surabhi", "Amrish", "Parag", "Rishap", "Ketan", "Ajay", "Pranjali", "Nikhil", "Anuj", "Ajeet", "Ankita", "Neeraj", "Vandana", "Sangita", "Rishabh", "Ravinder", "Mangesh", "Chitranshu", "Malkaus", "Jitendra", "Naman", "Pavan", "Vijay", "Pankaj", "Sumit", "Shubham", "Lokesh", "Palak", "Govind", "Urmila", "Vidit", "Prashant", "Ghanshyam", "Mishant", "Ravi", "Rohit", "Swati", "Divyanshi", "Arun", "Prithviraj", "Nisha", "Parantap", "Lokendra", "Milky", "Vickky", "Mayank", "Niranjan", "Akansha", "Rakesh", "Neha", "Ashok", "Deepika", "Purusottam", "Kamaldeep", "Somesh", "Gunjan", "Pragati", "Nishant", "Divye", "Ronak", "Aditya", "Ankur", "Anshul", "Anuja", "Abhijit", "Deepshikha", "Ganesh", "Madhura", "Kaushik", "Prarabdh", "Sarvani", "Upasna", "Ketaki", "Kusum", "Narmada", "Naveena", "Nishtha", "Nivedita", "Salena", "Sanchali", "Sanchaya", "Sanjana", "Shivani", "Shubhada", "Sumitra", "Tarangini", "Tarjani", "Trilochana", "Mog", "Omprakash", "Prabodh", "Praful", "Som", "Laxman", "Ram", "Jayram", "Motiram", "Tukaram", "Mahadev", "Shiv", "Shiva", "Rudra", "Kanha", "Kanhaiya", "Kisan", "Kisna", "Vishnu", "Hari", "Vitthal", "Laxmi", "Rukhmini", "Narayan", "Namdeo", "Shyam", "Badra", "Bhadra", "Radha", "Radhe", "Radheshyam", "Gokuldas", "Ramdas", "Jnaneshwar", "Mukta", "Sopan", "Nivritti", "Sandhya", "Rupali", "Rupa", "Bhardwaj", "Bhupen", "Arul", "Atul", "Bahadur", "Baldeb", "Baldev", "Bijoy", "Binod", "Vinod", "Biren", "Chamanlal", "Bablu", "Pinki", "Lalla", "Chanda", "Chandan", "Chandragupt", "Dasrath", "Debendra", "Hariram", "Harinarayan", "Kalicharan", "Murugan", "Kartik", "Karuna", "Varuna", "Aruna", "Aparna", "Lakshmikant", "Lalit", "Mukund", "Mohan", "Murali", "Manohar", "Saurabh", "Sorabji", "Nidhi", "Pravin", "Rajni", "Samir", "Aseem", "Suman", "Saroj", "Natwar", "Prithvi", "Pavan", "Shweta", "Urmila", "Vijay", "Mithil", "Mithila", "Saraswati", "Sharda", "Kashi", "Swami", "Baba", "Nal", "Neel", "Damyanti", "Sati", "Parvati"],

    "LastName" : ["Patil", "Madar", "Nayka", "Hiremath", "Lamani", "Badiger", "Biradar", "Talavar", "Mulla", "Kambale", "Rathod", "Pujari", "Kumar", "Nadaph", "Harijan", "Cavhan", "Kumbar", "Kulakarni", "Pujar", "Jadhav", "Gauda", "Nayak", "Nayik", "Hadapad", "Sekha", "Bhajantri", "Pavar", "Angadi", "Desayi", "Valikar", "Calavadi", "Hosamani", "Dodamani", "Vaddar", "Madivalar", "Setti", "Hugar", "Pujeri", "Jamadar", "Gaudar", "Mujavar", "Mathapati", "Hegade", "Pattar", "Kuri", "Sindhe", "Makanadar", "Kammar", "Sanadi", "Doddamani", "Mali", "Meti", "Patel", "Bandivaddar", "Pathan", "Bagavan", "Hadimani", "Khota", "Attar", "Kambar", "Mane", "Uppar", "Sutar", "Kattimani", "Koli", "Bepari", "Reddy", "Naykar", "Dalavayi", "Singh", "Kadam", "Gurav", "Rao", "Kalal", "Ganiger", "Josi", "Kolakar", "Bhatt", "Metri", "Sunagar", "Hubballi", "Bhat", "Caugule", "Inamadar", "Teli", "Ballari", "Kittur", "Caugal", "Magadumm", "Malagi", "Gowda", "Budihal", "Betageri", "Savanur", "Koppad", "Navi", "Madival", "Jain", "Shetty", "Bajantri", "Katti", "Rajaput", "Dasar", "Mulimani", "Bagevadi", "Banakar", "Raj", "Pujer", "Pattanasetti", "Gaudr", "Prasad", "More", "Ambiger", "Agasar", "Momin", "Manga", "Kambali", "Desapande", "Gupta", "Baraker", "Sharma", "Halli", "Barki", "Karigar", "Bhosale", "Khaji", "Itagi", "Lohar", "Sajjan", "Gavade", "Hosur", "Mathad", "Caugale", "Suryavansi", "Kadakol", "Bhandari", "Kale", "Saudagar", "Yadav", "Disoj", "Salunke", "Natikar", "Naragund", "Savant", "Dharavad", "Sirahatti", "Avati", "Caudhari", "Jamakhandi", "Konnur", "Kori", "Bagali", "Gayakavad", "Olekar", "Annigeri", "Patagar", "Hatti", "Maniyar", "Bhovi", "Sunkad", "Koti", "Naykodi", "Kaladagi", "Prabhu", "Kurubar", "Sinde", "Dodmani", "Gasti", "Killedar", "Matha", "Bilagi", "Huded", "Kamat", "Hegde", "Parit", "Devadig", "Das", "Karadi", "Myageri", "Gadivaddar", "Kulkarni", "Tahasildar", "Sirur", "Naganur", "Jambagi", "Kamate", "Vali", "Jaina", "Acari", "Totad", "Hipparagi", "Babu", "Ullagaddi", "Huddar", "Gollar", "Ganacari", "Saiyad", "Gadad", "Mulagund", "Pai", "Akki", "Athani", "Marathi", "Hallur", "Kallimani", "Dandin", "Havaldar", "Bandi", "Nair", "Bidari", "Yadavad", "Bankapur", "Koravar", "Bijapur", "Pirajade", "Pendari", "Yaligar", "Managuli", "Baligar", "Mullanavar", "Hukkeri", "Magadum", "Gaddi", "Yaragatti", "Navalagund", "Naik", "Naduvinamani", "Kaujalagi", "Aralikatti", "Mokasi", "Alura", "Kademani", "Valmiki", "Pharnandis", "Haveri", "Mirji", "Kurabar", "Murthy", "Mantur", "Nadhaph", "Karjagi", "Ghatage", "Sansi", "Kundagol", "Jadar", "Kalaburgi", "Nadap", "Jakati", "Ahmed", "Hebballi", "Moger", "Galagali", "Khana", "Hittalamani", "Hebbal", "Singe", "Talikoti", "Seta", "Devaramani", "Hosalli", "Mugali", "Savadatti", "Pinjar", "Jogi", "Teradal", "Gaundi", "Belagali", "Kudari", "Krishna", "Ambig", "Harikantr", "Jadav", "Hullur", "Kali", "Javali", "Hadagali", "Nagaral", "Sirol", "Arera", "Rai", "Tigadi", "Navhi", "Mohan", "Ganvakar", "Kallur", "Ingalagi", "Halemani", "Mishra", "Katagi", "Ingale", "Raju", "Badagi", "Melinamani", "Nalaband", "Muragod", "Nandi", "Mudhol", "Helavar", "Sarma", "Balikayi", "Nadhap", "Asangi", "Kolur", "Gauli", "Saha", "Caudari", "Kolekar", "Revanakar", "Bhavikatti", "Mirasi", "Prakash", "Settar", "Kabbur", "Palled", "Salimath", "Kamatagi", "Vastrad", "Hiremani", "Hunagund", "Ambi", "Badami", "Rav", "Iliger", "Eligar", "Hiregaudr", "Nidagundi", "Kundaragi", "Hunasikatti", "Makandar", "Munavalli", "Bennur", "Uppin", "Iti", "Sinha", "Ronad", "Odeyar", "Ankalagi", "Cakrasali", "Ilager", "Sayyad", "Kannur", "Byadagi", "Tamboli", "Gavad", "Dambal", "Kumari", "Menasinakayi", "Sannakki", "Khatib", "Ghorpade", "Timmapur", "Kotagi", "Agadi", "Gonda", "Shankar", "Guggari", "Arakeri", "Hamchinamani", "Tuppad", "Mohite", "Medar", "Acary", "Malladad", "Niralagi", "Hirekurabar", "Jalihal", "Reddi", "Halagi", "Dollin", "Asundi", "Savadi", "Raykar", "Vernekar", "Saba", "Godi", "Savalagi", "Kanavi", "Multani", "Kore", "Hongal", "Gani", "Joshi", "Agasimani", "Mallapur", "Belaganvakar", "Mamadapur", "Balekundri", "Goravar", "Huli", "Mannur", "Mudigaudr", "Sonnad", "Anand", "Kerur", "Hancinamani", "Bhangi", "Nyamagaud", "Avaradi", "Dange", "Sangolli", "Halageri", "Bipatil", "Gurikar", "Gadag", "Mukri", "Indi", "Maradi", "Mesta", "Sing", "Lakkundi", "Joseph", "Hec", "Kalyani", "Ramadurg", "Gokak", "Hulagur", "Ukkali", "Pola", "Hamchinal", "Bendigeri", "Sindagi", "Potadar", "Kankanavadi", "Krishnan", "Korabu", "Chabbi", "Malage", "Benni", "Candaragi", "Laksmesvar", "Kamatar", "Pammar", "Khanapur", "Kolli", "Bani", "Bagi", "Ganager", "Vibhuti", "Honnalli", "Mirajakar", "Dodavad", "Hancinal", "Agarwal", "Abbigeri", "Naidu", "Negalur", "Siraguppi", "Harikant", "Mudalagi", "Adina", "Talageri", "Jagiradar", "Jatagar", "Pyati", "Mayannavar", "Magi", "Hallikeri", "Kakhandaki", "Sahapurakar", "Shaik", "Kharvi", "Karikatti", "Saiyyad", "Masali", "Caudri", "Vijapur", "Hombal", "Byahatti", "Kalakeri", "Hanagandi", "Nalavade", "Banasode", "Kalasannavar", "Svami", "Tahasiladar", "Havaladar", "Bellad", "Hanji", "Kokatanur", "Marigaudr", "Radder", "Alagur", "Thomas", "Talakeri", "Sagar", "Doni", "Jahagiradar", "Roy", "Hirekurubar", "Vaggar", "Gali", "Incal", "Havanur", "Rotti", "Totagi", "Bisanal", "Saravad", "Hulamani", "Teggi", "Muccandi", "Hunasyal", "Pinto", "Siddapur", "Rugi", "Byakod", "Mallur", "Halyal","Adiraju", "Aditham", "Adivasi", "Ainaparti", "Ainamprolu", "Ambadasu", "Ambarukhana", "Amruthavakkula", "Anantavarapu", "Andukuri", "Andukuru", "Anipeddi", "Annapragada", "Anumarlapudi", "Aradhyula", "Arjarapu", "Attota", "Atreyapurapu", "Avatapalli", "Ayinambrolu", "Ayinpura", "Ayyadevara", "Ayyagari", "Ayyalaraju", "Bendapudi", "Birudavolu", "Bakaraju", "Balabhadrapatruni", "Balanthrapu", "Balemarthy", "Bapatla", "Bhadriraju", "Bharatham", "Bhattiprolu", "Bhogaraju", "Bhograj", "Bhupatiraju", "Bitragunta", "Bodapati", "Bommireddi", "Bondalapati", "Boyinepalli", "Buddhavarapu", "Budhiraju", "Bollapragada", "Bhavaraju", "Bhattacharyula", "Bhimavarapu", "Budharaju", "Chaganty", "Challa", "Chakilam", "Cheruku", "Chillara", "Chadalawada", "Challapally", "Chamarthy", "Chandarlapati", "Chatrathi", "Chamaraju", "Cheemalamarri", "Chennapragada", "Chilakalapudi", "Chimakurthy", "Chinta", "Chintapalli", "Chittamuri", "choragudi", "Chitrapu", "Chitturi", "Chodavarapu", "Chitrapu", "Chittem", "Dubagunta", "Durgaraju", "Damerla", "Desabhatla", "Desabhatla", "Desiraju", "Devarabhotla", "Devulapalli", "Dinavahi", "Doddavarapu", "Dronamraju", "Duggaraju", "Duggirala", "Edlapalli", "Eedupalli", "Eranki", "Errapatruni", "Errapragada", "Enjeti", "Gangaravula", "Gampa", "Gatraju", "Gaddapalli", "Gadidasu", "Ganapatiraju", "Gadiraju", "Gaddamanugu", "Gandavarapu", "Gangaraju", "Ganjam", "Gundimeda", "Gundlapalli", "Gundamaraju", "Gunnikuntla", "Gurazada", "Iduri", "Inugurthi", "Inumella", "Ippagunta", "Iragavarapu", "Ivaturi", "Jeedigunta", "Josyula", "Jakkaraju", "Jeedigunta", "Jonnalagedda", "Jayagiri", "Kanchikacharala", "Kanchugantala", "Kathari", "Khandaladinne", "Kaligotla", "Kalugotla", "Kadambari", "Kamakolanu", "Kamaraju Gadda", "Kambhammettu", "Kanala", "Kanchnepalli", "Kandukuri", "Kanukollu", "Kanukolanu", "Kanuparthy", "Kasavaraju", "Kasturi", "Kasukurthi", "kesaanapalli", "Kavi", "Kallakuri", "Kancherla", "Kesinapalli", "Khambhammettu", "Kocherlakota", "Kalluri", "Komaravolu", "Kondepudi", "Konduru", "Konidena", "Korimilli", "Korrapati", "Kotamarthi", "Kotharu", "Kotichintala", "Kurapati", "Lakkaraju", "Lakkapragada", "Lakkavajjula", "Lingamgunta", "Mannava", "Mannem", "Mocherla", "Matukumalli", "Machavaram", "Machiraju", "Maddali", "Madiraju", "Malkapuram", "Mallapragada", "Malyala", "Manapragada", "Manchikalapati", "Manchikanti", "Moorthiraju", "Mukkamala", "Mulakaluri", "Mulpuri", "Munimanikyam", "Munipalle", "Muppalla", "Mynampati", "Mukkapati", "Mylavarapu", "Nadimpalli", "Nedunuri", "Nissankala", "Nadela", "Nadella", "Namburi", "Nandanavanam", "Nandiwada", "Nanduri", "Naraparaju", "Nadimpalli", "Navuluri", "Neelamraju", "Nellutla", "Nemalikanti", "Nidamarthi", "Nimushakavi", "Nimishakavi", "Nissankala", "Palepu", "Poruri", "Pabbaraju", "Pagolu", "Palakodety", "Palivela", "Palutla", "Pamulaparthi", "Pamulapati", "Panamgipalli", "Panchalavarapu", "Panguluri", "Panthangi", "Paramatmuni", "Paramkusham", "Parimi", "Polamraju", "Polavaram", "Ponnada", "Poruri", "Pothapragada", "Potharaju", "Potturi", "Pragadaraju", "Pulijala", "Pulikanti", "Pulipaka", "Pullamaraju", "Punyamurthula", "Puttabakula", "Puvvada", "Rachapudi", "Racherla", "Raghavachari", "Rajasekharuni", "Rayabharam", "Rayala", "Ravella", "Regadamilli", "Rupanagunta", "Ramajaru", "Ramaraju", "Rangaraju", "Ravinutala", "Ravulaparti", "Ravuri", "Rupanagunta", "Srikaram", "Sandepudi", "Sampatam", "Sambaraju", "Sambatur", "Sattenapalli", "Sambharaju", "Sandepudi", "Santapur", "Satyavolu", "Seethamraju", "Seethimraju", "Siddiraju", "Singam", "Singampalli", "Singaraju", "Siripurapu", "Suraparaju", "Satram", "Sannikandlapadu", "Samudram", "Saripalli", "Savidi", "Somaasi", "Somayajula", "Sthaanam", "Tammera", "Tadanki", "Tadakamalla", "Tadikonda", "Tallapragada", "Tallamraju", "Tanguturi", "Tadakamalla", "Tadinada", "Tadimeti", "Tallapaka", "Tanikella", "Tamirisa", "Tatavarthy", "Tetali", "Thungathurthi", "Tummurugoti", "Timmaraju", "Turaga", "Turlapati", "Turlapaty", "Twarakavi", "Udayagiri", "Ullaganti", "Unnava", "Uppaluri", "Upadhyayula", "Upadrashta", "Uppala", "Urakaranam", "Vaddiraju", "Vadduri", "Vadlamudi", "Vaduri", "Vahi", "Vallambhatla", "Valluri", "Vanam", "Vangipurapu", "Vonkamamidi", "Vankeswarapu", "Varagani", "Varahagiri", "Vareswaram", "Vepachedu", "Vedantham", "Vaddadi", "Vadlamannati", "Vadrevu", "Vakkalanka", "Vangipurapu", "Vankamamidi", "Varanasi", "Varahagiri", "Vedagiri", "Vedururu", "Vempati", "Vemula", "Vemulakonda", "Vemuri", "Ventrapragada", "Venuturupalle", "Yabaloori", "Yallapragada", "Yandapalli", "Yarrapragada", "Yedida", "Yendluri", "Yerramilli","Jain", "Sharma", "Bhatia", "Kanojia", "Singh", "Ankata", "Agrawal", "Rathore", "Parihar", "Singhal", "Saini", "Sanpada", "Chhipa", "Kothari", "Mohnot", "Mishra", "Gupta", "Agarwal", "Bhather", "Jangid", "Palod", "Pareek", "Rastogi", "Chaudhary", "Ojha", "Jajoo", "Khandelwal", "Rathi", "Bohra", "Bothra", "Gyanchandani", "Bansal", "Kushwah", "Tilwani", "Vardhan", "Gurbani", "Aggarwal", "Kumar", "Tejwani", "Awasthi", "Mathur", "Tiwari", "Mehta", "Solanki", "Prakash", "Yadav", "Tekwani", "Arora", "Mukesh", "Sarfraz", "Saxena", "Jhalani", "Goyal", "Lathwal", "Saifi", "Mahadi", "Mahawar", "Dubey", "Somani", "Vijay", "Maheshwari", "Gandhi", "Rupani", "Chalana", "Kumawat", "Verma", "Khicher", "Soni", "Chouhan", "Vijayvargiya", "Negi", "Hirani", "Darji", "Bakliwal", "Bhargava", "Jangir", "Pritmani", "Khinchi", "Kumari", "Nankani", "Gaur", "Goswami", "Lakhotiya", "Bagariya", "Joshi", "Agnani", "Parashar", "Gautam", "Madhuwani", "Bhootra", "Rawani", "Pitaliya", "Mehlawat", "Kaur", "Shrimali", "Bagda", "Pandya", "Gauttam", "Tela", "Singhavi", "Dhanotiya", "Raj", "Auti", "Chirde", "Jha", "Sadashiv", "Phadke", "Madugundi", "Karmakar", "Dhomne", "Kmar", "Rana", "Thakur", "Chansoria", "Bhagat", "Nimkar", "Dudhe", "Patel", "Patil", "Datir", "Datar", "Kulkarni", "Doshi", "Dave", "Modi", "Dadhe", "Kasambe", "Tayade", "Tajane", "Dhule", "Kurhade", "Korade", "Karade", "Tarade", "Kadu", "Gode", "Gole", "Borkar", "Gugliya", "Pugliya", "Sangani", "Papalkar", "Nerkar", "Nagpure", "Punekar", "Narawane", "Rawat", "Rawal", "Rajput", "Sisodiya", "Thakkar", "Thaker", "Bele", "Sambe", "Acharya", "Agate", "Ahluwalia", "Ahuja", "Amble", "Anand", "Andra", "Anne", "Apte", "Arya", "Atwal", "Aurora", "Babu", "Badal", "Badami", "Bahl", "Bahri", "Bail", "Bains", "Bajaj", "Bajwa", "Bakshi", "Bal", "Bala", "Balakrishnan", "Balan", "Balasubramanian", "Balay", "Bali", "Bandi", "Banerjee", "Banik", "Barad", "Baral", "Baria", "Barman", "Basak", "Bassi", "Basu", "Bath", "Batra", "Batta", "Bava", "Bawa", "Bedi", "Behl", "Ben", "Bera", "Bhakta", "Bhalla", "Bhandari", "Bhardwaj", "Bhasin", "Bhat", "Bhatnagar", "Bhatt", "Bhattacharyya", "Bhatti", "Bhavsar", "Bir", "Biswas", "Boase", "Bobal", "Bora", "Borah", "Borde", "Borra", "Bose", "Brahmbhatt", "Brar", "Buch", "Bumb", "Butala", "Chacko", "Chad", "Chada", "Chadha", "Chahal", "Chakrabarti", "Chakraborty", "Chana", "Chand", "Chanda", "Chander", "Chandra", "Chandran", "Char", "Chatterjee", "Chaudhari", "Chaudhry", "Chaudhuri", "Chaudry", "Chauhan", "Chawla", "Cheema", "Cherian", "Chhabra", "Chokshi", "Chopra", "Choudhary", "Choudhry", "Choudhury", "Chowdhury", "Comar", "Contractor", "D’Alia", "Dada", "Dalal", "Dani", "Dar", "Dara", "Das", "Dasgupta", "Dash", "Dass", "Date", "Datta", "Dayal", "De", "Deep", "Deo", "Deol", "Desai", "Deshmukh", "Deshpande", "Devan", "Devi", "Dewan", "Dey", "Dhaliwal", "Dhar", "Dhawan", "Dhillon", "Dhingra", "Din", "Divan", "Dixit", "Doctor", "Dora", "Dua", "Dube", "Dugal", "Dugar", "Dutt", "Dutta", "Dyal", "Edwin", "Gaba", "Gade", "Gala", "Ganesan", "Ganesh", "Ganguly", "Gara", "Garde", "Garg", "Gera", "Ghose", "Ghosh", "Gill", "Goda", "Goel", "Gokhale", "Gola", "Golla", "Gopal", "Gour", "Grewal", "Grover", "Guha", "Gulati", "Halder", "Handa", "Hans", "Hari", "Hayer", "Hayre", "Hegde", "Hora", "Issac", "Iyengar", "Iyer", "Jaggi", "Jani", "Jayaraman", "Jhaveri", "Johal", "Kadakia", "Kade", "Kakar", "Kala", "Kale", "Kalita", "Kalla", "Kamdar", "Kanda", "Kannan", "Kant", "Kapadia", "Kapoor", "Kapur", "Kar", "Kara", "Karan", "Kari", "Karnik", "Karpe", "Kashyap", "Kata", "Kaul", "Keer", "Khalsa", "Khanna", "Khare", "Khatri", "Khosla", "Khurana", "Kibe", "Kohli", "Konda", "Korpal", "Koshy", "Kota", "Krish", "Krishna", "Krishnamurthy", "Krishnan", "Kumer", "Kunda", "Kurian", "Kuruvilla", "Lad", "Lal", "Lala", "Lall", "Lalla", "Lanka", "Lata", "Loke", "Loyal", "Luthra", "Madan", "Magar", "Mahajan", "Mahal", "Maharaj", "Majumdar", "Malhotra", "Mall", "Mallick", "Mammen", "Mand", "Manda", "Mandal", "Mander", "Mane", "Mangal", "Mangat", "Mani", "Mann", "Mannan", "Manne", "Master", "Mathai", "Matthai", "Meda", "Mehan", "Mehra", "Mehrotra", "Meka", "Memon", "Menon", "Merchant", "Minhas", "Misra", "Mistry", "Mital", "Mitra", "Mittal", "Mitter", "Mody", "Mohan", "Mohanty", "Morar", "More", "Mukherjee", "Mukhopadhyay", "Muni", "Munshi", "Murthy", "Murty", "Mutti", "Nadig", "Nadkarni", "Nagar", "Nagarajan", "Nagi", "Nagy", "Naidu", "Naik", "Nair", "Nanda", "Narain", "Narang", "Narasimhan", "Narayan", "Narayanan", "Narula", "Natarajan", "Nath", "Natt", "Nayak", "Nayar", "Nazareth", "Nigam", "Nori", "Oak", "Om", "Oommen", "Oza", "Padmanabhan", "Pai", "Pal", "Palan", "Pall", "Palla", "Panchal", "Pandey", "Pandit", "Pant", "Parekh", "Parikh", "Parmar", "Parmer", "Parsa", "Pathak", "Patla", "Pau", "Peri", "Pillai", "Pillay", "Pingle", "Prabhakar", "Prabhu", "Pradhan", "Prasad", "Prashad", "Puri", "Purohit", "Radhakrishnan", "Raghavan", "Rai", "Raja", "Rajagopal", "Rajagopalan", "Rajan", "Raju", "Ram", "Rama", "Ramachandran", "Ramakrishnan", "Raman", "Ramanathan", "Ramaswamy", "Ramesh", "Randhawa", "Ranganathan", "Rao", "Ratta", "Rattan", "Ratti", "Rau", "Raval", "Ravel", "Ravi", "Ray", "Reddy", "Rege", "Rout", "Roy", "Sabharwal", "Sachar", "Sachdev", "Sachdeva", "Sagar", "Saha", "Sahni", "Sahota", "Salvi", "Sama", "Sami", "Sampath", "Samra", "Sandal", "Sandhu", "Sane", "Sangha", "Sanghvi", "Sani", "Sankar", "Sankaran", "Sant", "Saraf", "Saran", "Sarin", "Sarkar", "Sarma", "Sarna", "Sarraf", "Sastry", "Sathe", "Savant", "Sawhney", "Sehgal", "Sekhon", "Sem", "Sen", "Sengupta", "Seshadri", "Seth", "Sethi", "Setty", "Sha", "Shah", "Shan", "Shankar", "Shanker", "Sharaf", "Shenoy", "Shere", "Sheth", "Shetty", "Shroff", "Shukla", "Sibal", "Sidhu", "Sinha", "Sodhi", "Som", "Soman", "Sood", "Sridhar", "Srinivas", "Srinivasan", "Srivastava", "Subramaniam", "Subramanian", "Sule", "Sundaram", "Sunder", "Sur", "Sura", "Suresh", "Suri", "Swaminathan", "Swamy", "Tailor", "Tak", "Talwar", "Tandon", "Taneja", "Tank", "Tara", "Tata", "Tella", "Thaman", "Toor", "Tripathi", "Trivedi", "Upadhyay", "Uppal", "Vaidya", "Vala", "Varghese", "Varkey", "Varma", "Varty", "Varughese", "Vasa", "Venkataraman", "Venkatesh", "Vig", "Virk", "Viswanathan", "Vohra", "Vora", "Vyas", "Wable", "Wadhwa", "Wagle", "Wali", "Walia", "Walla", "Warrior", "Wason", "Yogi", "Yohannan", "Zacharia", "Zachariah", "Vashishta", "Laghari", "Anthony", "Ramayanam", "Burman", "Varman", "Vasu", "Tahore", "Thakore", "Chowdhary", "Chabra", "Chaddha", "Amin", "Pande", "Ayyar", "Haldar", "Surya", "Chavan", "Pawar", "Panwar", "Dayawan", "Malik", "Bahuguna", "Jan", "Vishwas", "Sukhdev", "Dev", "Kovind", "Nishad", "Jamsenpa", "Thokchom", "Laishram", "Swuro", "Boro", "Kom", "Chanu", "Murti", "Yadav", "Shah"],

    "EmailDomain" : ["gmail", "googlemail", "example", "company", "example", "company","example", "company","mail", "email", "domain","domain","domain", "example", "company", "email", "domain", "india","network","yahoo", "rediff", "outlook", "metaverse", "miniverse", "worldmail", "times", "hotmail", "msn", "yupmail", "live", "me", "telecom", "mac", "century", "digital", "aim", "skynet", "symbol", "email", "workplace", "timber", "bharat", "digital","workplace","workplace","bharat"],
    
    "EmailEnd" : ["com", "in", "co.in", "net", "org", "com", "net", "com", "com", "net", "org", "in","com","com","com","com","org","org","in","in"],

    "State" : ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry", "Ladakh"],

    //In states arrays: first element is short name useful for driving license. Second element is total number of RTOs to be used for getting max value of driving license RTO. Third element is a postal zone number to use as first letter of that state's PINcode series

    "Andhra Pradesh" : ["AP","39","5","Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Sri Potti Sri Ramulu Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],

    "Arunachal Pradesh" : ["AR","22","7","Anjaw", "Changlang", "East Siang", "Kurung Kumey", "Lohit", "Lower Dibang Valley", "Lower Subansiri", "Papum Pare", "Tawang", "Tirap", "Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],

    "Assam" : ["AS","34","7","Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dima", "Hasao", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Marigaon", "Nagaon", "Nalbari", "Sibsagar", "Sonitpur", "Tinsukia", "Udalguri"],

    "Bihar" : ["BR","57","8","Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East", "Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West", "Champaran", "Chandigarh"],

    "Chhattisgarh" : ["CG","30","4","Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Jashpur", "Janjgir Champa", "Korba", "Koriya", "Kanker", "Kabirdham", "Kawardha", "Mahasamund", "Narayanpur", "Raigarh", "Rajnandgaon", "Raipur", "Surguja"],

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

    "Karnataka" : ["KA","71","5","Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgavi", "Bellary", "Bidar", "Bijapur", "Chamarajnagar", "Chikkamagaluru", "Chikkaballapur", "Chitradurga", "Davanagere", "Dharwad", "Dakshina Kannada", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Ramanagara", "Yadgir"],

    "Kerala" : ["KL","99","6","Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram", "Wayanad"],

    "Madhya Pradesh" : ["MP","74","4","Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Narmadapuram", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Rewa", "Rajgarh", "Ratlam", "Raisen", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],

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

    "Uttar Pradesh" : ["UP","96","2","Agra", "Prayagraj", "Aligarh", "Ambedkar Nagar", "Auraiya", "Ayodhya", "Azamgarh", "Barabanki", "Budaun", "Bagpat", "Bahraich", "Bijnor", "Ballia", "Banda", "Balrampur", "Bareilly", "Basti", "Bulandshahr", "Chandauli", "Chhatrapati Shahuji Maharaj Nagar", "Chitrakoot", "Deoria", "Etah", "Kanshi Ram Nagar", "Etawah", "Firozabad", "Farrukhabad", "Fatehpur", "Gautam Buddh Nagar", "Gonda", "Ghazipur", "Gorakhpur", "Ghaziabad", "Hamirpur", "Hardoi", "Mahamaya Nagar", "Jhansi", "Jalaun", "Jyotiba Phule Nagar", "Jaunpur", "Ramabai Nagar", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", "Lalitpur", "Lakhimpur Kheri", "Lucknow", "Mau", "Meerut", "Maharajganj", "Mahoba", "Mirzapur", "Moradabad", "Mainpuri", "Mathura", "Muzaffarnagar", "Panchsheel Nagar", "Pilibhit", "Shamli", "Pratapgarh", "Rampur", "Raebareli", "Saharanpur", "Sitapur", "Shahjahanpur", "Sant Kabir Nagar", "Siddharthnagar", "Sonbhadra", "Sant Ravidas Nagar", "Sultanpur", "Shravasti", "Unnao", "Varanasi"],

    "Uttarakhand" : ["UK","20","2","Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],

    "West Bengal" : ["WB","99","7","Birbhum", "Bankura", "Bardhaman", "Darjeeling", "Dakshin Dinajpur", "Hooghly", "Howrah", "Jalpaiguri", "Cooch Behar", "Kolkata", "Maldah", "Paschim Medinipur", "Purba Medinipur", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas", "Purulia", "Uttar Dinajpur"],

    "Andaman and Nicobar" : ["AN","1","7","Bakultala", "Bambooflat", "Garacharma", "Port Blair", "Prothrapur", "Nicobar"],

    "Lakshadweep" : ["LD","9","6","Amini", "Andrott", "Kadmat", "Kalpeni", "Kavaratti", "Minicoy"],

    "Chandigarh" : ["CH","4","1","Chandigarh"],

    //Villages in group of their corresponding postal zones (for simplicity). Ideally we can have them in state wise distribution
    "1villages" : ["Adoya", "Ajrawar", "Azmatpur", "Babkpur", "Bachki", "Bakhli", "Baloch", "Basantpur", "Batheri", "Bhainsi", "Bherian", "Bhor", "Bhorak", "Bhusthla", "Bibipur", "Bodha", "Bodhni", "Chamun", "Chanal", "Chhajupur", "Chhawlan", "Dhani", "Dhulgarh", "Diwana", "Duniya", "Fatehgarh", "Gangheri", "Garhi", "Gledwa", "Gorkha", "Guldehra", "Gumthala", "Helwa", "Ishaq", "Ismailabad", "Ismailpur", "Jakhwala", "Jal", "Jhansa", "Jhinwarheri", "Jorasi", "Kakrala", "Kalsa", "Kamoda", "Kanthala", "Karah", "Khanjarpur", "Khanpur", "Kheri", "Khizar", "Kumhar", "Lohar", "Lotni", "Madaharan", "Majri", "Malakpur", "Mandi", "Mangna", "Megha", "Mohanpur", "Morthali", "Muqimpura", "Murtzapur", "Naisi", "Nikatpura", "Nimbwala", "Nurpur", "Pehowa", "Pipli", "Ramgarh", "Rampura", "Rattangarh", "Rohti", "Ruan", "Saidpur", "Sandhola", "Sandholi", "Sansa", "Sarsa", "Sarusti", "Sataura", "Seonsar", "Shahpur", "Shanti", "Sheikhpur", "Shergarh", "Shri", "Siana", "Singh", "Surmi", "Tabra", "Takoran", "Talheri", "Tangoli", "Teokar", "Thana", "Thandran", "Thaska", "Theh", "Thol", "Tikri", "Urnai", "Urnaicha", "Usmanpur", "Zulmat", "Ahmadpur", "Akbarpur", "Ambli", "Andheri", "Azampur", "Babak", "Badhauli", "Badi", "Bakarpur", "Baktuha", "Ballopur", "Banaundi", "Bapauli", "Bara", "Baragarh", "Barheri", "Bari", "Baroli", "Barsu", "Batora", "Behloli", "Ber", "Berpura", "Bharanpur", "Bharog", "Bheron", "Bichpari", "Bilaspur", "Boron", "Brahman", "Budha", "Bukhari", "Burj", "Chand", "Chautan", "Chechi", "Chhajal", "Chhajju", "Chhotagarh", "Chhoti", "Dabkora", "Danora", "Dehar", "Dehri", "Dera", "Dhamauli", "Dhanana", "Dudhli", "Fatehpur", "Ferozepur", "Gadauli", "Ganauli", "Ganeshpur", "Gazipur", "Gharauli", "Gobindpur", "Hamidpur", "Handi", "Harbon", "Hassanpur", "Husaini", "Jagatpur", "Jangoo", "Jangu", "Jatwar", "Jeoli", "Jhar", "Kakar", "Kalal", "Kalyana", "Kanjala", "Karasan", "Kathe", "Khera", "Kheragani", "Kherki", "Khirki", "Khurd", "Kohra", "Korwa", "Kullarpur", "Kurali", "Laha", "Lakhnaura", "Lalpur", "Lautan", "Magharpura", "Majra", "Manakpur", "Manglor", "Mawa", "Mianpur", "Milk", "Mirpur", "Mirzapur", "Mugal", "Mukandpur", "Muna", "Nabipur", "Nagal", "Nagauli", "Nagla", "Nakhrauli", "Nanduwali", "Nanehra", "Nangawan", "Naraingarh", "Nasrauli", "Nau", "Nek", "Okhal", "Panjauri", "Panjeton", "Panjlasa", "Parail", "Patrehri", "Patwi", "Pulewala", "Rachheri", "Raiwali", "Rajawali", "Rajpura", "Raju", "Rampur", "Rao", "Rasidpur", "Rataur", "Rerh", "Sadanpur", "Sadaqpur", "Salola", "Sam", "Samru", "Sangrani", "Santokhi", "Shahzadpur", "Shakarpura", "Sherpur", "Sian", "Singhpura", "Sontli", "Surgal", "Taharpur", "Tandwal", "Tanka", "Tapparian", "Tapri", "Tasraula", "Tasrauli", "Tepla", "Toka", "Ujjhal", "Wasalpur", "Adampura", "Aklia", "Allike", "Badlala", "Balianwala", "Balloh", "Bhagta", "Bhai", "Bhaini", "Bhodipura", "Bhunder", "Bugran", "Chaoke", "Chotian", "Dashmesh", "Daulatpura", "Dayalpura", "Dhade", "Dhapali", "Dhingar", "Dikh", "Dulewala", "Dyalpura", "Gaunspura", "Ghandawna", "Ghurela", "Ghureli", "Gill", "Gumti", "Gurusar", "Hakam", "Hamirgarh", "Har", "Harnam", "Jaidan", "Jalal", "Jawahar", "Jeondan", "Jethuke", "Jhanduke", "Kangar", "Kararwala", "Kauloke", "Kesar", "Khokhar", "Koer", "Kotha", "Kotra", "Maluka", "Mansa", "Nandgarh", "Neor", "Outgrowth", "Patti", "Phul", "Phulewala", "Pirkot", "Pitho", "Raiya", "Rajgarh", "Ram", "Ramuwala", "Sadhana", "Salabatpura", "Sandhu", "Selbrah", "Siriewala", "Sooch", "Achan", "Adekali", "Ajtani", "Akalpur", "Akuwal", "Anihar", "Apra", "Ashaur", "Atta", "Atti", "Aujla", "Bachhowal", "Bainapur", "Bajar", "Bakapur", "Bansian", "Bath", "Batura", "Begampur", "Behlolpur", "Bhadarpur", "Bhallowal", "Bhandal", "Bhangala", "Bhangali", "Bhar", "Bhardwaji", "Bharuwal", "Bhattian", "Bhoda", "Bhullar", "Bhundri", "Bilga", "Bir", "Birk", "Bundala", "Buraj", "Chachrari", "Chak", "Chanian", "Cheema", "Chhaula", "Chhokran", "Cholang", "Chuheki", "Daduwal", "Dalewal", "Dalla", "Danduwal", "Darapur", "Dhanda", "Dhandwar", "Dhanipind", "Dhesian", "Dhindsa", "Dhinpur", "Dholeta", "Dialpur", "Dosanjh", "Gadra", "Gag", "Ganna", "Garha", "Ghurka", "Giddarpindi", "Gohawar", "Goraya", "Gulamgarh", "Gumtala", "Gumtali", "Gura", "Gursian", "Hardo", "Haripur", "Indna", "Jago", "Jaitowal", "Jaja", "Jajo", "Jand", "Jandiala", "Jhungian", "Johal", "Kala", "Kandola", "Kang", "Kangniwal", "Kariana", "Kat", "Katana", "Khaira", "Khela", "Khojpur", "Khokhewal", "Khosla", "Kot", "Kotli", "Kutbewal", "Ladhar", "Ladian", "Lakhanpal", "Lalian", "Landara", "Langrian", "Lasara", "Lehal", "Lohgarh", "Machhiana", "Mahal", "Mainwal", "Mansurpur", "Masani", "Matfallu", "Mathadda", "Mau", "Mawai", "Mehsampur", "Miranpur", "Mithra", "Moron", "Muthadda", "Muzara", "Nagar", "Nagra", "Nahal", "Nangal", "Nanu", "Nat", "Nathewal", "Nawan", "Nurewal", "Nurmahal", "Pabwan", "Paddi", "Pal", "Palnau", "Pandori", "Panj", "Partappura", "Pasla", "Pasli", "Pawahri", "Phalpota", "Pharwala", "Phillaur", "Powadra", "Qadian", "Raipur", "Rajauri", "Rajgomal", "Rajowal", "Rajpur", "Ramewal", "Randhawa", "Ranwan", "Rara", "Rasulpur", "Rupowal", "Rurka", "Rurki", "Sadhara", "Sagarpur", "Saidowal", "Saifabad", "Salkiana", "Samrai", "Samrari", "Sangatpur", "Sangha", "Sangowal", "Sargundi", "Sarhal", "Sarhali", "Shadipur", "Shampur", "Shamsabad", "Sheikhupur", "Sidhu", "Simbalpur", "Sultanpur", "Sunar", "Sundar", "Surja", "Tagar", "Takhan", "Takhar", "Talwan", "Tehang", "Thala", "Thammanwal", "Turan", "Umarpur", "Uppal", "Bajaura", "Balh", "Bandrol", "Banogi", "Barahar", "Bastori", "Benchi", "Bhallan", "Bhalyani", "Bhullang", "Bhumtir", "Bhuntar", "Biasar", "Bradha", "Chong", "Dawara", "Diar", "Dobhi", "Dughilag", "Dunkhri", "Fojal", "Gahar", "Gramang", "Hallan", "Hat", "Jallu", "Jana", "Jandor", "Jari", "Kais", "Kashawri", "Katrain", "Kharal", "Kharihar", "Khokhan", "Kullu", "Majhat", "Malana", "Mandalgarh", "Manikarn", "Manjhli", "Manjhlihar", "Mashna", "Meha", "Mohal", "Nathan", "Neol", "Parli", "Peej", "Phallan", "Pichhli", "Pichlihar", "Pini", "Rajgiri", "Ratocha", "Rote", "Sari", "Shamshi", "Shat", "Shillihar", "Shirar", "Sosan", "Alashna", "Antraoli", "Anu", "Bag", "Bagah", "Baghar", "Bahal", "Bajroth", "Bal", "Bamnol", "Bamrar", "Bamta", "Barhich", "Barkoli", "Barog", "Batewri", "Batewri", "Belag", "Berag", "Bhaila", "Bhanal", "Bharola", "Bhatna", "Bhaulanu", "Bhot", "Bhut", "Bijar", "Bodna", "Chaflan", "Chanjal", "Chanpadli", "Charauli", "Chaukia", "Chaupal", "Chila", "Chiuna", "Chiwna", "Chohag", "Chorwadhar", "Dasholi", "Deot", "Deothi", "Dhabas", "Dhanewri", "Dhanout", "Dharan", "Digun", "Dilmu", "Dimon", "Gadhral", "Gagna", "Garhin", "Ghichna", "Ghurla", "Giau", "Gorli", "Gorwa", "Gyalat", "Hanal", "Jabna", "Jai", "Jaili", "Jangal", "Jawag", "Jhikni", "Jhina", "Jorna", "Jubbar", "Kalun", "Kande", "Kashah", "Kateika", "Kathiyana", "Katont", "Katoti", "Kauhrala", "Kelwi", "Khadar", "Khagna", "Khaprona", "Kharog", "Kharu", "Kiari", "Koti", "Kuhal", "Kujwi", "Kulandli", "Kumra", "Kurag", "Kutanda", "Lagaut", "Lajonth", "Lakha", "Lal", "Lihat", "Lingzar", "Majhotli", "Makraug", "Mamvi", "Mandholi", "Maraug", "Mashraon", "Matal", "Mishliuna", "Mohan", "Nanahar", "Naoni", "Nar", "Naura", "Nauran", "Pabas", "Pajarli", "Phalauna", "Pharach", "Pujari", "Rapari", "Rarth", "Rawtan", "Sangroli", "Sarahan", "Saralda", "Sarkali", "Satka", "Shagair", "Shantha", "Shapra", "Shawala", "Shihali", "Shila", "Shili", "Shithna", "Sihana", "Thalog", "Thundal", "Thundna", "Thuth", "Tiari", "Tipra"],

    "2villages" : ["Abhaypura", "Agra", "Akbarpur", "Akola", "Albatia", "Anguthi", "Artauni", "Azizpur", "Babarpur", "Bad", "Bagda", "Bahenta", "Bain", "Bainpur", "Baipur", "Bajhera", "Balhera", "Bamrauli", "Barara", "Barauli", "Basai", "Basua", "Bhahai", "Bhandai", "Bichpuri", "Bijhamai", "Bilahani", "Bisarna", "Bishara", "Bishari", "Brahmnagar", "Budhana", "Budhera", "Chak", "Chamrauli", "Chauhatna", "Dayalbagh", "Dehtora", "Deoretha", "Deori", "Dhamota", "Dhanauli", "Digner", "Etmadpur", "Gamari", "Gangraua", "Garhsani", "Gutla", "Hingot", "Ikthara", "Islampur", "Itaura", "Jakhoda", "Janara", "Jarua", "Jaupura", "Kaboolpur", "Kahrai", "Kakrari", "Kakua", "Kalal", "Kalika", "Kalwari", "Karmana", "Kaulakha", "Khal", "Khallauwa", "Khaspur", "Khera", "Kuan", "Kundol", "Kuthawati", "Lakavali", "Lakhanpur", "Lalau", "Laramada", "Lodhai", "Mahua", "Malpura", "Manghatai", "Mankenda", "Mayapura", "Mehra", "Midhakur", "Mundhera", "Nadauta", "Nagla", "Nainana", "Nanpur", "Naubari", "Nauphari", "Pachgain", "Patholi", "Patti", "Pawawali", "Pinani", "Rajrai", "Rampura", "Rohta", "Sadarban", "Sahara", "Saimari", "Salemabad", "Samogar", "Sargan", "Sarvatpur", "Shyamo", "Sikandarpur", "Siroli", "Sucheta", "Sujgai", "Sunari", "Sutendi", "Swami", "Swamibagh", "Tanora", "Tapara", "Tora", "Baramadiya", "Adhawar", "Ahirouli", "Ajaour", "Ajnera", "Akasar", "Akhani", "Araji", "Arjani", "Asana", "Babarapur", "Babhnouli", "Bachha", "Badasari", "Bagara", "Baghudi", "Bahdura", "Baheri", "Bal", "Balesadi", "Balupur", "Banhara", "Bankata", "Barhuncha", "Baro", "Basti", "Belatari", "Bhadikara", "Bhagawanpur", "Bhagipur", "Bharthawa", "Bhati", "Bhimhar", "Bhuda", "Bijulipur", "Bishar", "Bishunpura", "Chakpema", "Chamukha", "Chandawa", "Chandayar", "Chandi", "Chandpur", "Chanduki", "Chawari", "Chhatarsand", "Chhitupali", "Dandupur", "Dewakali", "Dhanauti", "Dhaneja", "Dharampur", "Dharhara", "Dhori", "Dhuraudha", "Diyara", "Dobhawa", "Doghara", "Dugooli", "Dugouli", "Duha", "Durjanpur", "Eakel", "Esar", "Fatehpur", "Firojpur", "Fulwarria", "Gadhamalpur", "Gai", "Gaji", "Gang", "Gaura", "Godoura", "Gokul", "Gopalpur", "Gouri", "Habatpur", "Hardiya", "Haripur", "Harnatar", "Harsand", "Hathouj", "Husenpur", "Jagdishpur", "Jahidipur", "Jajooli", "Jalali", "Jamalpur", "Jamin", "Jaminwali", "Jamue", "Januwan", "Jethwar", "Jigirsand", "Jildapur", "Jugesara", "Kaith", "Kajipur", "Kalyan", "Karmouta", "Karsand", "Karsi", "Katahra", "Kathooda", "Kathwallia", "Khabaspur", "Khadasara", "Khaira", "Kharid", "Khatanga", "Khejuri", "Kikodha", "Kishor", "Kisunpura", "Kodai", "Koodiya", "Koth", "Kundi", "Lakhanapar", "Letaraha", "Lilkar", "Loohar", "Mahro", "Mahthapar", "Mahulanpar", "Mahuwa", "Majhwallia", "Malada", "Maleji", "Malwar", "Mashaha", "Masumpur", "Meulikanaspur", "Mirzapur", "Mishrouli", "Misraulia", "Mudera", "Mueya", "Muhammadpur", "Mujhi", "Murracha", "Mustafabad", "Nahila", "Nanhul", "Narayanpur", "Narhami", "Nawa", "Nipnnia", "Pagambarpur", "Pahrajpur", "Pakdi", "Pandah", "Parsadpur", "Payarepur", "Pilue", "Pranpur", "Punai", "Pur", "Puru", "Ramapar", "Ranjitpur", "Ranpur", "Ratsi", "Raxa", "Rudarwar", "Rudwar", "Rupwar", "Sahulai", "Salempur", "Sandawapur", "Santhi", "Sarani", "Sardahi", "Sariyion", "Sarkanda", "Sarya", "Sasanu", "Shankarpur", "Sidhauli", "Sihoria", "Sikanderpur", "Sikiya", "Sisotar", "Siwan", "Son", "Sona", "Sonu", "Tandawa", "Tarakol", "Tenduwa", "Tika", "Tiloti", "Tiwaripur", "Uchrawn", "Ukchhi", "Umedha", "Usari", "Walidadpur", "Aduki", "Ahilya", "Ahmal", "Allhepur", "Anganpura", "Anore", "Anwla", "Arhera", "Aring", "Atas", "Aurangabad", "Azampur", "Baburi", "Bachhgaon", "Badhauta", "Bajna", "Bakalpur", "Balrai", "Bamoli", "Baqalpur", "Barari", "Barauda", "Basonti", "Bati", "Begampur", "Beri", "Beruka", "Bhadal", "Bhadar", "Bhadaya", "Bhaderua", "Bhagosa", "Bhainsa", "Bhavanpura", "Bhuarsu", "Birjapur", "Birona", "Bisu", "Borpa", "Chandrabhan", "Chharaura", "Chharhgaon", "Chhatikara", "Chokipur", "Churmura", "Datiya", "Daulatpur", "Devseras", "Dhakpura", "Dhana", "Dhangaon", "Dharmpura", "Dhorera", "Farah", "Fateha", "Ganesara", "Ganjoli", "Gantholi", "Garhaya", "Garhi", "Girdharpur", "Gokulpur", "Govardhan", "Goverdhan", "Govindpur", "Hakimpur", "Hasanpur", "Hathaoli", "Ikdanta", "Jachonda", "Jafar", "Jaisinghpura", "Jait", "Jalal", "Jamunavata", "Janu", "Jatipura", "Jhandipur", "Jhapara", "Jhurawai", "Jikhangaon", "Jiroli", "Jodhpur", "Jonai", "Junhaidi", "Junsuti", "Karanpur", "Karnawal", "Kawaila", "Keshonpur", "Khamini", "Khediya", "Kherat", "Kirarai", "Koh", "Koila", "Konai", "Kosi", "Kota", "Kothara", "Kunjera", "Kurkanda", "Ladpur", "Lalpur", "Loriha", "Luhara", "Madanpura", "Madaura", "Madhopur", "Madhuri", "Maghera", "Magorra", "Mahmadpur", "Maholi", "Mahroli", "Mahuan", "Mai", "Makhdum", "Mal", "Malhu", "Malikpur", "Malsarai", "Masum", "Mathura", "Meghpur", "Mirpur", "Mora", "Mudesi", "Mudseras", "Muhal", "Muiuddinpur", "Mukandpur", "Mukhrai", "Murshidpur", "Nabipur", "Nagari", "Nainupatti", "Narholi", "Navada", "Navganva", "Neemgaon", "Ol", "Padal", "Pali", "Palidungara", "Palson", "Parkham", "Pauri", "Pentha", "Phenchari", "Phondar", "Pilua", "Pingari", "Piprauth", "Pura", "Radhakund", "Rahimpur", "Raipura", "Rajpur", "Ral", "Rampur", "Ranchi", "Rasulpur", "Ronchi", "Rosu", "Sakana", "Sakarwa", "Sakitara", "Sakraya", "Samaspur", "Sanaura", "Sarurpur", "Satoha", "Saunkh", "Seeh", "Senha", "Sersa", "Shahpur", "Shahzoopur", "Shehzadpur", "Singa", "Sonkh", "Sonoth", "Sonsa", "Sunrakh", "Tahra", "Tarsi", "Tartura", "Thirawali", "Tond", "Tos", "Umari", "Unchagaon", "Uspar", "Vrindaban", "Vrindavan", "Birsinghpur", "Adampur", "Ahirauli", "Ahmadpur", "Airla", "Aitha", "Ajawan", "Ajor", "Akhari", "Akhileshpur", "Alamnagar", "Alauddinpur", "Allopur", "Amar", "Amara", "Amauli", "Amaulia", "Amini", "Amripur", "Amwa", "Anantpur", "Appi", "Arajiline", "Arazi", "Arjunpur", "Arka", "Asapur", "Ashar", "Aswari", "Atarsuia", "Atarsuiya", "Ateshua", "Aura", "Awadhipur", "Ayar", "Ayodhyapur", "Azgara", "Babatpur", "Babhaniyav", "Babhanpura", "Babua", "Bachhawn", "Badhaini", "Badher", "Badipur", "Bahadurpur", "Baherwa", "Bahlolpur", "Bahoranpur", "Bahra", "Bahuawn", "Baijal", "Bairwan", "Bajardiha", "Bakaini", "Bakhani", "Bakhariya", "Baksara", "Balipur", "Balirampur", "Balkishunpur", "Ballampur", "Balua", "Banauli", "Bandepur", "Bandhar", "Bangalipur", "Baniyapur", "Bankat", "Bansipur", "Bantari", "Banwaripur", "Bara", "Baragaon", "Barai", "Baraipur", "Baraura", "Barema", "Barhaini", "Barikhpur", "Bariyasanpur", "Barki", "Barsara", "Barsata", "Barthara", "Bartharra", "Barthauli", "Barwapur", "Barzi", "Basant", "Basantpur", "Basawan", "Basbariya", "Basdevpur", "Basuhan", "Baviyaon", "Bazar", "Bela", "Belauri", "Belwa", "Benipur", "Berhauli", "Beshupur", "Betwar", "Beyar", "Bhabhiyar", "Bhadarasi", "Bhadwan", "Bhadwar", "Bhagatpur", "Bhaghutipur", "Bhagwanpur", "Bhandaha", "Bhanjanpur", "Bharaharia", "Bharaon", "Bharatpur", "Bhareha", "Bharehara", "Bharthara", "Bhatauli", "Bhatpurwa", "Bhatshar", "Bhatti", "Bhaudpur", "Bhawanipur", "Bhgautipur", "Bhidur", "Bhikhampur", "Bhikharipur", "Bhikhipur", "Bhimchandi", "Bhisori", "Bhitari", "Bhitkuri", "Bhitti", "Bhohar", "Bhojubeer", "Bhor", "Bhorkala", "Bhualpur", "Bhuilaee", "Bhullanpur", "Bhuwalpur", "Bibhauri", "Biparjepur", "Birampur", "Birapur", "Birbalpur", "Birbhanpur", "Bisokharpur", "Bisunpur", "Bisunpura", "Biththalpur", "Blarampur", "Brijwasi", "Burapur", "Chadpur", "Chahi", "Chakarpanpur", "Chakatesua", "Chakdiha", "Chakdiharam", "Chaklola", "Chaktal", "Chamauli", "Chandapur", "Chandrawati", "Chaubepur", "Chaukhandi", "Chaur", "Chhahi", "Chhateri", "Chhatripur", "Chhitampur", "Chhitauni", "Chhitpur", "Chintapur", "Chiraigaon", "Chitaipur", "Chitarsenpur", "Cholapur", "Chukha", "Chukhepur", "Chumkuni", "Chunarpur", "Churamanpur", "Coraut", "Dabethuwa", "Dafalpur", "Dafi", "Daghariya", "Dalpattipur", "Damodarpur", "Dandoopur", "Daniyalpur", "Darberupur", "Darekhu", "Dasarath", "Dashrathpur", "Daudpur", "Daulatiya", "Dayapur", "Deipur", "Delhana", "Demrupur", "Deorai", "Deoriya", "Deuara", "Deura", "Devnandpur", "Devopalpur", "Dewapur", "Dewariya", "Dhadhorpur", "Dhakhawa", "Dhananjaipur", "Dhanapur", "Dhanipur", "Dhannipur", "Dhanpalpur", "Dharadhar", "Dharmalpur", "Dharsauna", "Dhaurhara", "Dherahi", "Dhobahi", "Dholapur", "Dhoraee", "Dhuripur", "Dihwa", "Dilavalpur", "Dinapur", "Dindaspur", "Dipapur", "Domaila", "Domanpur", "Domari", "Dubepur", "Dubkiya", "Duduhan", "Dulhanpur", "Dumitwan", "Ekdanga", "Etwa", "Faridpur", "Foolpur", "Gaddopur", "Gahani", "Gaharpur", "Gairaha", "Gajadharpur", "Gajapur", "Gajari", "Gajepur", "Ganeshpur", "Gangapur", "Gangpur", "Garsara", "Garthauli", "Gaur", "Gaurapurwar", "Gaurdiha", "Ghamahapur", "Ghamhapur", "Ghatmpur", "Ghosila", "Gobindpur", "Gobrha", "Gogawa", "Goithaha", "Gola", "Gopal", "Gopipur", "Goppur", "Gora", "Gorai", "Gosai", "Gosaipur", "Guria", "Gurudaspur", "Gurwat", "Hajipur", "Handiyadih", "Har", "Harbanspur", "Harbhampur", "Hardaspur", "Hardattpur", "Haridasipur", "Harihar", "Hariharpur", "Harirampur", "Harnampur", "Harpalpur", "Harpur", "Harsos", "Hasapur", "Hasimpur", "Hathi", "Hathiyar", "Hatiya", "Hinttapur", "Hiramanpur", "Hirampur", "Hirapur", "Hirdahipur", "Hirdepur", "Holapur", "Hulasipur", "Hulsipur", "Husepur", "Imiliya", "Isharwar", "Jaddupur", "Jaga", "Jagama", "Jagardeopur", "Jagati", "Jagatpur", "Jagdeeshpur", "Jagsipur", "Jairampur", "Jakhini", "Jalalpur", "Jalhupur", "Jameen", "Jamindarsan", "Jammanpur", "Jamunipur", "Jansa", "Jariyari", "Jayapur", "Jeetapur", "Jhabra", "Jhanjhupur", "Jigana", "Jiyaram", "Jogapur", "Jogiyapur", "Jugar", "Kachhariya", "Kachnar", "Kadipur", "Kaithi", "Kaithor", "Kaji", "Kakalpur", "Kakarahiya", "Kakarmatta", "Kallipur", "Kalyanpur", "Kama", "Kamalahan", "Kamalpur", "Kanchanpur", "Kandwa", "Kaneri", "Kanhipur", "Kankpur", "Kanthipur", "Kanudih", "Kapar", "Kapsa", "Kapsethi", "Kardhana", "Karia", "Karma", "Karmsipur", "Karnadadi", "Karsara", "Kashipur", "Kasipur", "Katari", "Katesar", "Katwaru", "Kauwapur", "Kerakatpur", "Kesaripur", "Ketesar", "Kevtan", "Khajuhi", "Khajur", "Khajuri", "Khalilpur", "Khalispur", "Khamauna", "Khandakh", "Khanpur", "Khanuan", "Khanwa", "Kharag", "Kharagaipur", "Kharagraipur", "Kharaura", "Khardaha", "Khargu", "Khemaipur", "Khemapur", "Khetalpur", "Khewali", "Khewasipur", "Khillupura", "Khochwa", "Khulaspur", "Khusipur", "Khutha", "Khuthan", "Kinnupur", "Kodopur", "Kohasi", "Koilo", "Kori", "Kosara", "Kotwa", "Kukraha", "Kundriya", "Kurauana", "Kurauli", "Kurauna", "Kurauti", "Kurhua", "Kursato", "Kursiyan", "Kutubpur", "Lachapur", "Lachhi", "Lachhimanpur", "Lachhipur", "Lachmisenpur", "Lahartara", "Lahiya", "Lakhanipur", "Lakhansenpur", "Lakhi", "Lal", "Lallapur", "Lalmankot", "Lamhi", "Laskariya", "Laskarpur", "Latauni", "Lathiya", "Laxirampur", "Lenuwayi", "Lerhupur", "Lohagazar", "Lohara", "Loharapur", "Lohta", "Looth", "Lorhan", "Madhukar", "Magrahua", "Mahaban", "Mahada", "Mahagipur", "Mahamudpur", "Mahesh", "Maheshpur", "Mahgoan", "Mahrajpur", "Majhiyarpur", "Majhmitia", "Majhmitiya", "Mangalpur", "Mangolepur", "Manikpur", "Maniyari", "Manorathpur", "Manrauli", "Marawan", "Marcha", "Marhawa", "Marhni", "Mariya", "Maruadih", "Marui", "Matuka", "Mawaiya", "Mechkanpur", "Mehadiganj", "Milkapur", "Milki", "Milkipur", "Mirapur", "Mirawan", "Mirchia", "Mishirpur", "Misripura", "Modhopur", "Moglabir", "Mohandas", "Mohanidih", "Mokalpur", "Mokarwan", "Molanapur", "Mubarakpur", "Mudli", "Mugdarpur", "Munari", "Mungawar", "Muradev", "Murdaha", "Mureri", "Muridpur", "Murli", "Musepur", "Nabbe", "Nagaipur", "Nagepur", "Naipur", "Naipura", "Nakain", "Nakhwan", "Naktuwa", "Naraicha", "Narottampur", "Narottmpur", "Narpatpur", "Narsara", "Narur", "Nasiripur", "Nathaipur", "Nathanpur", "Nathupur", "Nawalpur", "Nawalsha", "Nawapur", "Nayapur", "Nayapura", "Neema", "Newada", "Newriya", "Nibiya", "Nidaura", "Nighaura", "Nimani", "Niyaisipur", "Niyardiha", "Nohanipur", "Nonkharan", "Nuawn", "Odarha", "Pachabanawa", "Pachai", "Pacharon", "Pachwar", "Pahari", "Paharpur", "Pahriya", "Paidegaon", "Palahi", "Palkanhh", "Pandepur", "Panditpur", "Panihari", "Paniyara", "Paragdih", "Parampur", "Parana", "Paranapur", "Parjanpur", "Parmanandpur", "Parsi", "Parsottampur", "Parsuchak", "Parwatpur", "Paterwa", "Patkhauli", "Patre", "Pauha", "Pausi", "Payagpur", "Peduka", "Phakirpur", "Phulwaria", "Pilkhani", "Pilori", "Pipri", "Pisaur", "Piyri", "Pogalpur", "Prahladpur", "Pratap", "Pratappur", "Prithvipur", "Puran", "Purananda", "Purandarpur", "Puraraiji", "Purashiv", "Pure", "Raghunathpur", "Raimala", "Raishipur", "Rajapur", "Rajjipur", "Rajnahiya", "Rajwari", "Rakhauna", "Rakhi", "Ram", "Ramagharwan", "Ramaipur", "Ramchandipur", "Ramdat", "Ramdatha", "Ramdih", "Ramgaon", "Ramna", "Ramnagar", "Ramnisf", "Ramraypur", "Ramshipur", "Ramsinghpur", "Ranibazar", "Rasara", "Rashulpur", "Rasulaha", "Rasulgarh", "Ratan", "Rauna", "Razala", "Roopchandpur", "Rupapur", "Rustampur", "Sabhaipur", "Sadalpur", "Saee", "Sahabajpura", "Sahansapur", "Sahawabad", "Sajoi", "Sakalpur", "Salarpur", "Salhupur", "Sandaha", "Sapsaul", "Sarai", "Saraimohan", "Saraiya", "Sarang", "Sarauni", "Sarhari", "Sarswan", "Satahara", "Sathawan", "Sato", "Sattanpur", "Savhat", "Sehwar", "Serwanpur", "Shahdeeh", "Shaktiyarpur", "Shambhu", "Sheodabha", "Sheodas", "Sheonathpur", "Sheorampur", "Shihorwa", "Shivbon", "Shivdas", "Shivdaspur", "Shivrampur", "Shpehata", "Sikhari", "Singhai", "Singhpur", "Sinhorwa", "Sir", "Sirhira", "Sirsa", "Sonbarsa", "Soyepur", "Srikanthpur", "Srithi", "Suari", "Sugulpur", "Suichak", "Suilara", "Sulemapur", "Sultanipur", "Sultanpur", "Sumerapur", "Surhi", "Susuwahi", "Suzabad", "Tala", "Talhua", "Tamachabad", "Tara", "Taraon", "Tarapur", "Taraya", "Tari", "Tariya", "Tarna", "Tarsawn", "Tatehara", "Tatepur", "Tekari", "Tekariya", "Tekipur", "Tekuri", "Telari", "Tendui", "Tengara", "Tewar", "Thatheharapur", "Thatra", "Thekaha", "Therauta", "Tikari", "Tilamapur", "Tilanga", "Tilmapur", "Tinkerawa", "Tisaura", "Tiwari", "Todarpur", "Tofapur", "Tohaphapur", "Tribhuvanpur", "Tulachak", "Tulapur", "Uchgoan", "Udairajpur", "Udaypur", "Udho", "Ugapur", "Ukthi", "Umarha", "Upadhyaypur", "Uparwar", "Urawan", "Varanasi", "Varani", "Vihana", "Vikapur", "Vinathipur", "Vyaspur", "Zafarabad", "Banswara", "Ala", "Amkheth", "Anagoli", "Angthala", "Ansuya", "Bachher", "Baindu", "Bairagana", "Bairau", "Baligwar", "Bamiyala", "Banala", "Bandwara", "Banj", "Barachaksainji", "Barali", "Batula", "Baunla", "Bazbagar", "Bemru", "Bhadakoti", "Bhainswara", "Bhainti", "Bhairni", "Bhatingyala", "Bhatiyana", "Bhirlagga", "Bijar", "Birhi", "Boli", "Bura", "Chaka", "Chamoli", "Chamtoli", "Chandulichakhat", "Chaparudiyar", "Chappno", "Charbang", "Chari", "Chatolikiroli", "Chhinka", "Dadar", "Daswan", "Dewaldhar", "Dewar", "Dhanoli", "Dhar", "Dharkot", "Dharwani", "Dhogarikandai", "Dhola", "Dhurma", "Digoli", "Dungari", "Durmi", "Dusat", "F", "Gadi", "Gadora", "Gairgunth", "Gairi", "Gandasu", "Gauhana", "Gauna", "Gawar", "Ghorsal", "Ghuni", "Golim", "Guhai", "Gulari", "Guniyala", "Gwarlggabemru", "Hadung", "Harmani", "Hat", "Hina", "Huna", "Hung", "Irani", "Jainsal", "Jaintha", "Jakhni", "Jokhana", "Kafal", "Kamyar", "Kana", "Kanda", "Kandai", "Kanderi", "Kanol", "Kathur", "Keludichakgawar", "Khainuri", "Khala", "Khaltara", "Khinkan", "Khunana", "Kilondi", "Koteshwar", "Kudav", "Kumartoli", "Kumjug", "Kunjonmaikot", "Kunjpothani", "Kunkuli", "Kuntari", "Kurar", "Kurur", "Kuthan", "Kweralu", "Kwirali", "Lankhee", "Lasi", "Lasiyari", "Loladi", "Luntara", "Lwanh", "Lwani", "Maharbagti", "Mahargaon", "Maithana", "Majothi", "Majyu", "Makroli", "Malanachaknail", "Manakhi", "Mandal", "Mason", "Matai", "Math", "Matharpal", "Mathkot", "Mathlaggapilng", "Mathmalana", "Maunti", "Med", "Mokhmalla", "Mokhtala", "Mokhtalla", "Moling", "Motha", "Mutrai", "Nagartangsa", "Nagbugar", "Nailmalana", "Naini", "Naitoli", "Nandprayag", "Narangi", "Nauna", "Naurakh", "Nijmola", "Padairgaon", "Pagana", "Pagna", "Pairi", "Palethi", "Pana", "Pangar", "Panigair", "Parnmati", "Phali", "Pilang", "Pilkhola", "Punkila", "Pursari", "Rajbagti", "Ramani", "Rangtoli", "Rani", "Rauligwar", "Rikhtoli", "Ropa", "Ropachalthar", "Rudra", "Saikot", "Sainji", "Sainjilagga", "Sainti", "Saitoli", "Sakand", "Salaraitoli", "Sanji", "Sarpani", "Sartoli", "Saudiyani", "Seek", "Sema", "Semdugara", "Sena", "Sera", "Simali", "Simar", "Siron", "Sironsar", "Sitel", "Sonala", "Sung", "Suniti", "Sutol", "Syanachak", "Syari", "Syuna", "Tairakhansal", "Tangala", "Tartoli", "Tilfara", "Tunla", "Ustoli", "Vaduk"],

    "3villages" : ["Abapura", "Bheet", "Prithvigarh", "Amargun", "Amarpura", "Amba", "Ambakho", "Ambapara", "Ambawaj", "Amli", "Anandpura", "Arniya", "Azad", "Badleeya", "Badrel", "Bageri", "Bagpura", "Bagra", "Bakhatpura", "Banswara", "Bargaon", "Bari", "Barleeya", "Barlipara", "Baroda", "Barooi", "Barwara", "Bassi", "Beelriya", "Bhachariya", "Bhagat", "Bhagi", "Bhamariya", "Bhamriya", "Bhandariya", "Bhanwarkara", "Bhapor", "Bharatliya", "Bhatiya", "Bhatpura", "Bhatwara", "Bhawanpura", "Bheelwan", "Bheemgarh", "Bheleeya", "Bhojiya", "Bhoot", "Bijaliyan", "Bilakho", "Bodla", "Bor", "Boriya", "Borkhera", "Borkheri", "Bortalab", "Borwat", "Chacha", "Chanda", "Chandra", "Chapariya", "Charpota", "Chaubison", "Cheeb", "Chhaliyawar", "Chhani", "Chhapariya", "Chhappar", "Chhatrasalpura", "Chhayan", "Chhoti", "Chiriyawasa", "Chitab", "Dabri", "Damarwas", "Danakshari", "Danpur", "Dashahara", "Daulatpura", "Deogarh", "Deoka", "Deoliya", "Deri", "Detkeeya", "Detkiya", "Dhamaniya", "Dhawadadara", "Doongra", "Doriya", "Fateh", "Fatehpura", "Gagari", "Gagarwa", "Gamda", "Gamri", "Ganaoo", "Gandhi", "Ganpatpura", "Gara", "Garh", "Garnawat", "Gauwapara", "Ghalkiya", "Ghora", "Ghori", "Gopalpuri", "Gordi", "Got", "Hariyapada", "Harmatiya", "Harnathpura", "Hatkhera", "Higoliya", "Himmatpuri", "Hiriya", "Jagpura", "Jagtarawat", "Jahanpura", "Jambudor", "Janameri", "Janawari", "Jaswantpura", "Jeewa", "Jet", "Jhamliya", "Jhanjhiyamal", "Jhantla", "Jharniya", "Jhoopel", "Jhuwa", "Joona", "Jormiya", "Kadwali", "Kagwa", "Kakanseja", "Kala", "Kalanala", "Kaliyari", "Kalyanpura", "Kandola", "Kankra", "Kanpuri", "Karchhi", "Kareliya", "Katiyor", "Katumbi", "Kelwani", "Kesarpura", "Kevalpura", "Khajuri", "Khalda", "Khalpur", "Khandadera", "Khandiya", "Khandu", "Khanpura", "Khardeo", "Kharwali", "Kher", "Khera", "Kherdi", "Kheri", "Khori", "Khuntdiya", "Kikapara", "Koibao", "Kotra", "Kular", "Kundal", "Kundla", "Kundli", "Kuntabari", "Kunwala", "Kupra", "Kushalpura", "Lala", "Laloopara", "Lalpura", "Lambi", "Laxmangarh", "Leemkhora", "Leemthan", "Lodha", "Maheshpura", "Mahuri", "Makanpura", "Makod", "Malwasa", "Mangaliya", "Manpura", "Manpuri", "Mara", "Margali", "Masotiya", "Matasula", "Mediya", "Mediyadidor", "Mokam", "Moongthali", "Motira", "Muliya", "Mundri", "Nadiya", "Nagakhali", "Nal", "Nalda", "Napla", "Nathpura", "Nawa", "Nawalapara", "Nawatapra", "Negariya", "Nichla", "Nokla", "Odharji", "Ojhariya", "Pachor", "Pada", "Padamnath", "Padi", "Padikhurd", "Padla", "Pagari", "Palaswani", "Palodara", "Panchalwasa", "Paniwalagara", "Paniyala", "Parkha", "Parla", "Pathanpura", "Patinagra", "Peepalwa", "Peepli", "Peeplod", "Phati", "Phephar", "Pratap", "Prthvipura", "Radhawa", "Raghunathpura", "Rajeev", "Ramgarh", "Rangi", "Rani", "Ratan", "Rel", "Retiya", "Roonjadipada", "Roonjiya", "Rooparel", "Rooppura", "Sag", "Sageta", "Sagrod", "Sagwadeeya", "Sajjan", "Sajwaniya", "Sakarwat", "Sakri", "Saliya", "Salrapara", "Samagara", "Samaipura", "Samapara", "Samriya", "Sanga", "Sangesari", "Sarsi", "Sarwan", "Sarwani", "Sarwarpura", "Sat", "Seengpura", "Semla", "Semliya", "Sewna", "Shahpura", "Shakti", "Shivpura", "Shyampura", "Siyapur", "Siyari", "Subhash", "Sukhaniya", "Sundanpur", "Sundar", "Surajpura", "Surjipara", "Surpur", "Surwaniya", "Tadi", "Tagu", "Talab", "Talwara", "Tamtiya", "Tejpur", "Theekariya", "Thuriya", "Tilgari", "Torniya", "Ubapan", "Umrai", "Umripada", "Umripara", "Uplaghantala", "Vadlipara", "Veerpur", "Wagtalab", "Waka", "Wanala", "Wank", "Wara", "Achanchukya", "Bagrana", "Balloopura", "Baori", "Barh", "Baseri", "Basri", "Beer", "Beermalpura", "Begas", "Bhambhori", "Bhoodharpura", "Bichpari", "Boytawala", "Chak", "Champapura", "Charanwas", "Dhankya", "Dharampura", "Durjaniyawas", "Gajadharpura", "Govindpura", "Gurliya", "Hathod", "Himmatpura", "Jaibhawanipura", "Jaisinghpura", "Kalwar", "Kanarpura", "Kanwar", "Kapariyawas", "Keshyawala", "Kishorpura", "Lalchandpura", "Laxmipura", "Malpura", "Manchwa", "Manda", "Mansharampura", "Mansinghpura", "Mundiya", "Nandgaon", "Nari", "Natlalpura", "Neemera", "Niwaroo", "Pachar", "Peethawas", "Pindolai", "Ramla", "Ramsingh", "Roopa", "Sabrampura", "Sanchoti", "Sarang", "Sarna", "Shrirampura", "Shyosinghpura", "Sitapura", "Sumel", "Sundariyawas", "Vijaypura", "Achhojai", "Achrol", "Akeda", "Akedadoongar", "Akhepura", "Amer", "Ani", "Anoppura", "Atalbiharipura", "Badanpura", "Bagwada", "Ballupura", "Baragaon", "Barna", "Barsinghpura", "Bas", "Beelpura", "Benarwith", "Bhatton", "Bheelpura", "Bheevpura", "Bhoorawali", "Bhuranpura", "Biharipura", "Bilonchi", "Bishangarh", "Bishanpura", "Boodthal", "Bugalia", "Chandawas", "Chandrapura", "Chandwaji", "Chatarpura", "Chetawala", "Chhanwar", "Chhaprari", "Chimanpura", "Chirara", "Chittanukalan", "Chonp", "Dadar", "Dalpura", "Dattawata", "Daula", "Deeppura", "Degdas", "Deo", "Deogudha", "Dhand", "Dheengpur", "Disan", "Durga", "Dwarkapura", "Ghatwada", "Gudha", "Gunawata", "Hanumanpura", "Harchandpura", "Hardattpura", "Harwar", "Israwala", "Jagnnathpura", "Jahota", "Jaipur", "Jairampura", "Jaisalya", "Jaisingh", "Jaitpur", "Jaitpura", "Jalsoo", "Jiloi", "Jugalpura", "Kacherawala", "Kalighati", "Kalwad", "Kankrel", "Kant", "Kanwarpura", "Khannipura", "Khapariya", "Khatiyon", "Kherwari", "Khora", "Khorabeesal", "Khurad", "Kiratpura", "Kishanpura", "Kookas", "Labana", "Ladana", "Lakher", "Lalgarh", "Lamyamewal", "Laxminarayanpura", "Looniyawas", "Maheshwas", "Maila", "Mohanbari", "Mohanpura", "Mori", "Mothoo", "Mukandpura", "Mundota", "Nagal", "Nakawala", "Nangal", "Nara", "Naradpura", "Nestiwas", "Patti", "Peelwa", "Pokharawala", "Pragpura", "Pratappura", "Punana", "Puth", "Radha", "Radhakishanpura", "Radhapura", "Raithal", "Raja", "Rajawas", "Rajpur", "Rajpurwas", "Ramgatta", "Ramlyawala", "Rampura", "Risani", "Rojda", "Roondal", "Sahib", "Salarwas", "Sangawala", "Sar", "Sardarpura", "Seengwana", "Sewapura", "Sherawatpura", "Shisiyawas", "Shri", "Shripura", "Shubhrampura", "Sindolai", "Sirohi", "Sirsali", "Sirsi", "Sudarshanpura", "Sundarpura", "Sunder", "Syari", "Tadawas", "Tatiyawas", "Udaipuriya", "Vijaipura", "Yadav", "Yadavkhera","Ambaliyara", "Ambareli", "Ambethi", "Anandpura", "Andhari", "Arnej", "Badarkha", "Begva", "Bhetawada", "Bholad", "Bhumli", "Bhurkhi", "Chaloda", "Chandisar", "Dadusar", "Dholi", "Dholka", "Ganesar", "Ganol", "Girand", "Gundi", "Ingoli", "Jakhda", "Jalalpur", "Javaraj", "Kadipur", "Kaliyapura", "Kalyanpur", "Kariyana", "Kauka", "Kesargadh", "Khanpur", "Kharanti", "Khatripur", "Koth", "Lana", "Loliya", "Maflipur", "Moti", "Mujpur", "Nani", "Nesda", "Paldi", "Pisawada", "Rajpur", "Rampur", "Rampura", "Ranoda", "Raypur", "Rupgadh", "Sahij", "Samani", "Saragvala", "Sarandi", "Saroda", "Sathal", "Shekhdi", "Shiyawada", "Simej", "Sindhraj", "Transad", "Uteliya", "Valthera", "Varna", "Vasna", "Vataman", "Vautha", "Vejalka", "Virdi", "Virpur", "Agariya", "Amuli", "Babariyadhar", "Balapar", "Barbatana", "Barpatoli", "Bhachadar", "Bhakshi", "Bherai", "Chanch", "Charodiya", "Chhapri", "Chhatadiya", "Chotra", "Dantardi", "Devka", "Dharano", "Dhareshvar", "Dipadiya", "Doliya", "Dungar", "Dungarparda", "Ganjavadar", "Hadmatiya", "Hindorna", "Jholapar", "Kadiyali", "Katar", "Kathivadar", "Khakhbai", "Khambhaliya", "Khari", "khera", "Kherali", "Kotdi", "Kovaya", "Kumbhariya", "Kundaliyala", "Majadar", "Mandal", "Mandardi", "Masundada", "Mobhiyana", "Morangi", "Navagam", "Nesdi", "Ningala", "Patva", "Pipavav", "Rabhda", "Rajparda", "Rajula", "Rampara", "Ringaniyala", "Sajanavav", "Samadhiyala", "Uchaiya", "Untiya", "Vad", "Vadli", "Vavdi", "Vavera", "Victar", "Visaliya", "Zampodar", "Zanzarda", "Zinzka", "Akteshwar", "Akuvada", "Amadla", "Amarpara", "Amletha", "Amli", "Anodara", "Bakhar", "Baman", "Bhacharvada", "Bhadam", "Bhanadra", "Bhekhadia", "Bhilvashi", "Bhuchhad", "Bhumalia", "Bilthana", "Bitada", "Boria", "Boridra", "Borutar", "Chapat", "Chhatawada", "Chhindiapara", "Chichadia", "Chitravadi", "Chitrol", "Dadhvada", "Datanambali", "Dhamadra", "Dhamnacha", "Dhaniala", "Dhanpor", "Dharikheda", "Dhefa", "Dhirkhadi", "Dhobisal", "Dhochki", "Dholar", "Dholivav", "Fulvadi", "Gabhana", "Gadher", "Gadit", "Gadkoi", "Gadod", "Gagar", "Galupura", "Gambhirpara", "Gamkuva", "Garudeshwar", "Ghanta", "Gopalpura", "Gora", "Gulvani", "Gunetha", "Guvar", "Hajarpara", "Handi", "Haripura", "Helambi", "Indravarna", "Jesalpor", "Jetpor", "Jior", "Jitgadh", "Jitnagar", "Junaraj", "Junvad", "Kadavamahuda", "Kakadva", "Kali", "Kamodiya", "Kandroj", "Kanpor", "Karantha", "Kareli", "Kevadiya", "Khadagada", "Khalvani", "Khamar", "Khojalvasa", "Khunta", "Kothara", "Kothi", "Kumasgam", "Kumbhia", "Lachhras", "Limdi", "Limkhetar", "Lodhan", "Mahudipada", "Mandan", "Mangrol", "Mankad", "Mankuva", "Mayasi", "Medgam", "Mithivav", "Moji", "Mokhdi", "Mota", "Movi", "Naghatpor", "Namalgadh", "Nana", "Narkhadi", "Nasri", "Nava", "Navapara", "Navra", "Nikoli", "Ori", "Orpa", "Palsi", "Pan", "Panchla", "Panisadadia", "Pati", "Patna", "Pinchhipara", "Poicha", "Pratapnagar", "Pratappara", "Rajpipla", "Rajuvadia", "Ramgadh", "Ranipura", "Rasela", "Rel", "Ringni", "Rundh", "Sajanpara", "Sakva", "Samaria", "Samasherpura", "Sandhia", "Sanjroli", "Sengpara", "Serav", "Sisodara", "Sondhaliya", "Songam", "Suka", "Sundarpura", "Surajvad", "Surpan", "Survani", "Tankari", "Taropa", "Thari", "Thavadia", "Timbi", "Timrava", "Torna", "Umarva", "Undva", "Vadi", "Vadia", "Vagadia", "Vaghetha", "Vaghodia", "Vaghrali", "Valpor", "Vanazi", "Vandaria", "Vansla", "Vanzar", "Vanznitad", "Varachha", "Varkhad", "Vasantpara", "Vaviala", "Velchhandi", "Verisalpara", "Virpor", "Virsangpura", "Zaria", "Zarvani"],

    "4villages" : ["Amahinota", "Andhuwa", "Atha", "Badhaiya", "Bahdan", "Bahoripar", "Balhwara", "Bamhani", "Bamhnoda", "Bamuraha", "Bandar", "Barbati", "Barela", "Bareli", "Bargi", "Barha", "Basaniya", "Basanpani", "Basha", "Beragi", "Bhatauli", "Bhedaghat", "Bijapuri", "Bijora", "Bilgada", "Binjha", "Chandeli", "Chanderi", "Chargawan", "Charghat", "Charguwan", "Chaukhada", "Chhapara", "Chhattarpur", "Chhitapar", "Chhiwlaha", "Chourai", "Churiya", "Dagdagouwa", "Deodwar", "Deori", "Dhabai", "Dhanpuri", "Dhoda", "Diya", "Dugariya", "Dundai", "Dungariya", "Gadarkheda", "Gagha", "Gajna", "Gangdha", "GCF", "Ghaghra", "Ghana", "Ghat", "Ghughari", "Ghunsor", "Ghutiya", "Gokalpur", "Harduli", "Harrai", "Hinota", "Hinotiya", "Hulki", "Indra", "Jabalpur", "Jamtara", "Jamuniya", "Jhiri", "Jogidhana", "Jotpur", "Junwani", "Kailwas", "Kaladehi", "Kalgodi", "Kareli", "Kashi", "Kathotiya", "Khamhariya", "Khapa", "Khari", "Khirhani", "Khmariya", "Khursi", "Kohani", "Kosamghat", "Kuda", "Kudari", "Kugawan", "Kukuri", "Kumhi", "Lahagi", "Lamheti", "Lamti", "Lodhi", "Magardha", "Mahgaon", "Mahgawan", "Malara", "Manegaon", "Mangela", "Mangeli", "Mankedi", "Marha", "Medki", "Mohaniya", "Mohas", "Mothar", "Mukanwara", "Nanhakheda", "Narayanpur", "Narrai", "Nayagaon", "Neem", "Nigri", "OF", "Padariya", "Paduwa", "Padwar", "Pahadi", "Para", "Parasiya", "Paraswara", "Partala", "Patpara", "Pidrai", "Pindrai", "Pipariya", "Purwa", "Raipura", "Rampur", "Rengajhori", "Rewa", "Richhai", "Ronsra", "Sagda", "Salaiya", "Saliwada", "Saliwara", "Samad", "Samnapur", "Sarora", "Sarrai", "Sehora", "Seoni", "Shahajpuri", "Sihora", "Silgaur", "Silpuri", "Siluwa", "Sohad", "Sukari", "Sukhalalpur", "Temar", "Tewar", "Thana", "Tigan", "Tighra", "Tikariya", "Tikhari", "Tilhari", "Tinsa", "Tinsi", "Tuniya", "Umariya", "Vikrampur", "Villhari", "Ahirkhedi", "Ambamolya", "Ankya", "Arandia", "Aranya", "Asakhedi", "Asrawad", "Badia", "Balya", "Bangarda", "Bank", "Baroda", "Bawalya", "Begam", "Berchha", "Bhangarh", "Bhicholi", "Bhingaria", "Bhokhakhedi", "Bihdia", "Bilawali", "Bisan", "Bisanawada", "Burana", "Chauhan", "Chhitkana", "Chikatiya", "Dandala", "Dehri", "Deoguradia", "Dhamnay", "Dharnawad", "Dhaturia", "Dhulet", "Digwal", "Dudhia", "Fatan", "Garipipalya", "Garya", "Gehli", "Ghudia", "Goga", "Hashakhedi", "Higonya", "Hukmakhedi", "Indore", "Jagmalpipalya", "Jalod", "Jamaniya", "Jamnya", "Jani", "Jhalaria", "Kacharod", "Kajipalasiya", "Kaku", "Kalaria", "Kalod", "Kampel", "Kanadia", "Kapalya", "Kevadia", "Khandel", "Kharadia", "Khatipiplya", "Khatri", "Khemana", "Khudel", "Kordia", "Lasudiya", "Limbodi", "Machla", "Mali", "Maya", "Mirjapur", "Moklai", "Morod", "Morodhat", "Muhadi", "Mundal", "Mundi", "Mundla", "Nahar", "Nainod", "Narlai", "Nawda", "Nayapura", "Nehru", "Nignoti", "Nihalpur", "Nipanya", "Palda", "Panjarya", "Panod", "Pedmi", "Phali", "Pipalda", "Piplya", "Piwday", "Rajdhara", "Ralamandal", "Ramgarh", "Ramu", "Rangwasa", "Rau", "Rinjlai", "Sahu", "Sanawadia", "Sanawalya", "Sarolia", "Semalya", "Shahdadeo", "Shakkar", "Shiwni", "Shri", "Sindhi", "Sindoda", "Sindodi", "Sinhasa", "Songuradiya", "Sonway", "Sukhniwas", "Talawali", "Tigaria", "Tillor", "Tinchha", "Ujjaini", "Umaria", "Umri", "Undal", "Upadinatha","Abit", "Agar", "Agastinagar", "Akola", "Ambad", "Ambevangan", "Ambhol", "Ambikanagar", "Ambit", "Aurangpur", "Babhul", "Badgi", "Bahirwadi", "Balthan", "Baravwadi", "Bari", "Belapur", "Bhandardara", "Bhojadarawadi", "Bholewadi", "Bitaka", "Bori", "Bramhanwada", "Chaitanyapur", "Chand", "Chandgirwadi", "Chas", "Chichondi", "Chinchavane", "Chital", "Dagadwadi", "Deogaon", "Deothan", "Dhagewadi", "Dhamangaon", "Dhamangaon", "Dhamanvan", "Dhokri", "Dhumalwadi", "Digambar", "Dongargaon", "Dongarwadi", "Ekdare", "Esarthav", "Ganore", "Gardani", "Garwadi", "Ghatghar", "Ghodsarwadi", "Ghoti", "Godewadi", "Gondoshi", "Guhire", "Hivargaon", "Induri", "Jachakwadi", "Jahagirdarwadi", "Jambhale", "Jamgaon", "Jaynawadi", "Kalamb", "Kalas", "Kalewadi", "Karandi", "Katalapur", "Kauthewadi", "Keli", "Kelungan", "Khadki", "Khanapur", "Khetewadi", "Khirvire", "Khuntewadi", "Kodni", "Kohane", "Kohondi", "Kokanwadi", "Koltembhe", "Kombhalne", "Kothale", "Kotul", "Kumbhefal", "Kumshet", "Ladgaon", "Lahit", "Lavhali", "Lingdev", "Mahadeowadi", "Malegaon", "Manhere", "Manik", "Manoharpur", "Manyale", "Maveshi", "Mehenduri", "Mhaladevi", "Mhalungi", "Mogras", "Morwadi", "Murshet", "Muthalane", "Mutkhel", "Nachanthav", "Nagawadi", "Navalewadi", "Nilwande", "Nimbral", "Nirgudwadi", "Pabhulwandi", "Pachanai", "Pachapattawadi", "Padalane", "Padoshi", "Paithan", "Palsunde", "Pangari", "Panjare", "Parakhatpur", "Pedhewadi", "Pendshet", "Phophasandi", "Pimpaldarawadi", "Pimpaldari", "Pimpalgaon", "Pimparkane", "Pimpri", "Pisewadi", "Poparewadi", "Purushawadi", "Rajur", "Ranad", "Ratanwadi", "Rede", "Rumbhodi", "Sakirwadi", "Samrad", "Samsherpur", "Sangavi", "Sarowar", "Satewadi", "Savarkute", "Sawargaonpat", "Senit", "Shelad", "Shelvihire", "Shendi", "Shenit", "Sherankhel", "Sherewadi", "Shidawad", "Shilvandi", "Shinde", "Shinganwadi", "Shirpunje", "Shiswad", "Shivajinagar", "Somalwadi", "Sugaon", "Sultanpur", "Tahakari", "Takali", "Tale", "Tambhol", "Terungan", "Thakarwadi", "Tirdhe", "Titavi", "Udadawane", "Umbarwadi", "Unchkhadak", "Vashere", "Vihir", "Virgaon", "Vithe", "Wagdari", "Waghapur", "Waki", "Wanjulshet", "Waranghushi", "Anchalgaon", "Anjanapur", "Apegaon", "Bahadarbad", "Bahadarpur", "Baktarpur", "Bhojade", "Bolaki", "Bramhangaon", "Chande", "Chandgavhan", "Dahigaon", "Dauch", "Derde", "Dhamori", "Dharangaon", "Dhondewadi", "Dhotre", "Ghari", "Ghoyegaon", "Godhegaon", "Handewadi", "Hingani", "Javalke", "Jeur", "Kakadi", "Kanhegaon", "Karanji", "Karwadi", "Kasali", "Khirdi", "Khopadi", "Kokamthan", "Kolgaon", "Kolpewadi", "Kopargaon", "Kumbhari", "Louki", "Madhi", "Mahegaon", "Malharwadi", "Manegaon", "Manjur", "Maygaon", "Morvis", "Murshatpur", "Nategaon", "Ogadi", "Padhegaon", "Pohegaon", "Ranjangaon", "Rawande", "Sade", "Samvatsar", "Sangvi", "Sawalgaon", "Shahajapur", "Shahapur", "Shirasgaon", "Singnapur", "Sonari", "Sonewadi", "Soyegaon", "Suregaon", "Talegaon", "Tilwani", "Ukkadgaon", "Vadgaon", "Velapur", "Ves", "Wari", "Yesgaon", "Amalner", "Antarwali", "Babhulkhede", "Babhulwedhe", "Baku", "Barhanpur", "Belhekarwadi", "Belpandhari", "Belpimpalgaon", "Bhalgaon", "Bhanashiware", "Bhende", "Borgaon", "Chanda", "Chilekhanwadi", "Chinchban", "Dedgaon", "Deosade", "Dhangarwadi", "Dighi", "Fattepur", "Galnimb", "Ganeshwadi", "Georai", "Ghodegaon", "Ghogargaon", "Gidegaon", "Gogalgaon", "Gomalwadi", "Gondegaon", "Gonegaon", "Gopalpur", "Goyegavhan", "Handi", "Hingoni", "Imampur", "Jainpur", "Jalke", "Jayagude", "Kangoni", "Karajgaon", "Karegaon", "Kautha", "Khadke", "Khalal", "Khamgaon", "Kharwandi", "Khedle", "Khunegaon", "Khupti", "Kukana", "Landewadi", "Lekurwali", "Loharwadi", "Lohgaon", "Madki", "Mahalaxmi", "Maka", "Maktapur", "Malewadi", "Malichinchora", "Mandegavhan", "Manglapur", "Mhalapur", "Mhalas", "Mhasale", "Morgavhan", "Moryachinchore", "Mukindpur", "Murme", "Nagapur", "Najik", "Nandur", "Narayanwadi", "Nevasa", "Nimbhari", "Nipani", "Pachegaon", "Pachunde", "Panaswadi", "Panegaon", "Patharwale", "Pichadgaon", "Pravara", "Punatgaon", "Rajegaon", "Ramdoh", "Rastapur", "Salabatpur", "Shinganapur", "Shingve", "Siregaon", "Sonai", "Soundala", "Sukali", "Tamaswadi", "Tarwadi", "Telkudgaon", "Toka", "Usthal", "Wadula", "Wadule", "Wakadi", "Wanjarwadi", "Wanjoli", "Warkhed", "Washim", "Watapur", "Zapwadi", "Adgaon", "Agaskhed", "Akoli", "Akolkhed", "Akot", "Alampur", "Alegaon", "Alewadi", "Alyarpur", "Ambadi", "Amboda", "Aminapur", "Andh", "Asegaon", "Aurangabad", "Balegaon", "Bambarda", "Bandhara", "Belura", "Bhilkhed", "Bhod", "Bochara", "Bordi", "Chandanpur", "Chandikapur", "Chapaner", "Chinchkhed", "Chinchpani", "Chohatta", "Chorwad", "Dahikhel", "Dangarkhed", "Danori", "Dautpur", "Deori", "Deulgaon", "Dewarda", "Dhaga", "Dhamna", "Dharel", "Dinoda", "Diwthana", "Edlapur", "Gajipur", "Garsoli", "Gaulkhed", "Girjapur", "Gokhi", "Gyajuddin", "Hanwadi", "Hilalabad", "Isapur", "Jalgaon", "Januna", "Jaulka", "Jaulkhed", "Jitapur", "Jogban", "Kalwadi", "Kanheri", "Kapashi", "Karatwadi", "Karodi", "Kasod", "Katkhed", "Kavtha", "Kawasa", "Keliweli", "Kesori", "Khairkhed", "Khaparwadi", "Khasbag", "Kherda", "Khirkund", "Khudawantpur", "Kinkhed", "Koha", "Kolwihir", "Kund", "Kutasa", "Ladegaon", "Lakhamapur", "Lamkani", "Lohari", "Lotkhed", "Mahagaon", "Mahamadpur", "Makrampur", "Malkapur", "Manchanpur", "Mankari", "Mardi", "Maroda", "Mirzapur", "Miyache", "Mohala", "Mundgaon", "Nakhegaon", "Nandkhed", "Narsingpur", "Naynapur", "Nehori", "Nijampur", "Palsod", "Panaj", "Parala", "Patonda", "Patsul", "Penori", "Pilakwadi", "Popatkhed", "Punda", "Rahnapur", "Rajura", "Rajurwadi", "Ramapur", "Rambhapur", "Raundala", "Rel", "Rohankhed", "Rudhadi", "Ruikhed", "Salkhed", "Sarfabad", "Sawara", "Sawargaon", "Sawarkhed", "Shahanur", "Sonbardi", "Tajnapur", "Takli", "Tandulwadi", "Taroda", "Thokbardi", "Umara", "Vitali", "Wadali", "Wadgaon", "Waghoda", "Wai", "Wani", "Warula", "Warur", "Wasali", "Adivare", "Aghane", "Ahupe", "Amade", "Ambedara", "Ambegaon", "Amondi", "Apati", "Asane", "Awasari", "Bhagadi", "Bharadi", "Bhawadi", "Bhorwadi", "Borghar", "Chandoli", "Chaptewadi", "Chikhali", "Chinchodi", "Chincholi", "Devgaon", "Dhakale", "Dhamani", "Dhondmal", "Digad", "Dimbhe", "Don", "Eklahare", "Falakewadi", "Gadewadi", "Gangapur", "Gavdewadi", "Gawarwadi", "Girawali", "Gohe", "Jadhavwadi", "Jambhori", "Jarkarwadi", "Jawale", "Kadewadi", "Kalambai", "Kanase", "Kathapur", "Khadakamala", "Khadaki", "Khadakwadi", "Koldara", "Kolharwadi", "Koltavade", "Kolwadi", "Kondhare", "Kondhaval", "Kurwandi", "Kushire", "Lakhangaon", "Lauki", "Loni", "Magholi", "Mahalunge", "Malawadi", "Malin", "Manchar", "Mapoli", "Mengadewadi", "Menubarwadi", "Mondalewadi", "Mordewadi", "Nanavade", "Nandurkichi", "Narodi", "Nhaved", "Nigdale", "Nighutwadi", "Nirgoodsar", "Pahaddara", "Panchale", "Pargaon", "Patan", "Peth", "Phaladewadi", "Phalode", "Phulvade", "Pimpargane", "Pimpari", "Pinglewadi", "Pokhari", "Pokharkarwadi", "Pondewadi", "Rajewadi", "Rajpur", "Ramwadi", "Ranjani", "Ranmala", "Sakeri", "Sakore", "Sal", "Savarli", "Shewalwadi", "Shindemala", "Shingave", "Shinoli", "Shirdale", "Shriramnagar", "Supedhar", "Takewadi", "Talekar", "Tamblemala", "Tavharewadi", "Thakar", "Thorandale", "Thugaon", "Tirpad", "Vachalmala", "Vachape", "Valati", "Varasawane", "Vitthalwadi", "Walunjwadi", "Arvi", "Ashtapur", "Autadwadi", "Awasare", "Awhalwadi", "Bahuli", "Bakori", "Bhagatwadi", "Bhawarapur", "Bhilarewadi", "Biwari", "Burkegaon", "Dehu", "Dhayari", "Donaje", "Fulgaon", "Fursungi", "Gaud", "Gawdewadi", "Ghera", "Gogalwadi", "Gorhe", "Gujar", "Hadapsar", "Hingangaon", "Holkarwadi", "Jambhali", "Jambhulwadi", "Kadamwak", "Kalyan", "Kesnand", "Khadakwasala", "Khadewadi", "Khed", "Kirkitwadi", "Kolewadi", "Kondave", "Kondhanpur", "Kopare", "Koregaon", "Kudaje", "Kunjirwadi", "Adaka", "Ajani", "Asalwada", "Asoli.", "Avandhi", "Babulkheda", "Bhamewada", "Bhilgaon", "Bhowari", "Bhugaon", "Bidbina", "Bidgaon.", "Bina", "Chicholi", "Chikna", "Dhargaon", "Dighori", "Gada", "Garla", "Ghorpad", "Gumthala", "Gumthi", "Jakhegaon", "Kadoli.", "Kawtha", "Kem", "Khairy", "Khapa", "Khaparkheda", "Khasala", "Khedi", "Koradi", "Kusumbi", "Lihigaon", "Lonkhairi", "Mahadula", "Mahalgaon", "Mangali", "Mhasala", "Nanda", "Nanha", "Nerala", "Neri", "Nimbha", "Ninhai", "Palsad", "Pandherkawada", "Pandhurna", "Panjara", "Parsodi", "Pawangaon", "Powari", "Ranala", "Ranmangali", "Sawali", "Selu", "Shirpur", "Shivani", "Sonegaon", "Suradevi", "Tandulwani", "Tarodi", "Temsana", "Umari", "Undgaon", "Wadoda", "Warambha", "Waregaon", "Yekardi", "Yerkheda", "Zharap", "Ajanti", "Ajepur", "Balapur", "Bangaon", "Bavhala", "Bhalki", "Bharad", "Bhawarkhed", "Chikani", "Chinchgaon", "Dagad", "Dahifal", "Dawargaon", "Dhanaj", "Dodki", "Domga", "Donad", "Fattapur", "Gaulan", "Ghareful", "Ghui", "Gondgavhan", "Hirapur", "Indira", "Indrathana", "Injapur", "Jawalgaon", "Kamandev", "Kanhergaon", "Kapshi", "Karkheda", "Khalana", "Khandala", "Kharadgaon", "Kharbi", "Kholapuri", "Khutafali", "Kohala", "Kolura", "Kurhegaon", "Lankanath", "Linga", "Lohatwadi", "Lonadi", "Mahajanpur", "Malkhed", "Mandawgad", "Mangladevi", "Mangrul", "Manikwada", "Marwadi", "Mirapur", "Mozar", "Muktyapur", "Nathrad", "Ner", "Pachwad", "Pandhari", "Parjana", "Pathrad", "Pendhara", "Raipur", "Ramgaon", "Ratnapur", "Renkapur", "Sankhas", "Sarangpur", "Sarata", "Satefal", "Sawanga", "Shabaspur", "Shendri", "Shirajgaon", "Sidhakpur", "Sindkhed", "Sonkhas", "Sonwadhona", "Tembhi", "Udapur", "Umartha", "Umarvihir", "Uttarwadhona", "Vijvihir", "Vyahali", "Walki", "Wanarkhed", "Watfala", "Watfali", "Wirgavhan", "Zombadi", "Amshet", "Antargaon", "Bagapur", "Bagwadi", "Banayat", "Barbadi", "Bhandegaon", "Bhileshwar", "Bhopapur", "Bhulai", "Bijora", "Bodegaon", "Bodhgavhan", "Both", "Bramhanath", "Bramhi", "Chani", "Chopadi", "Chorkhopadi", "Chorodi", "Daheli", "Darwha", "Daryapur", "Deogiri", "Deurwadi", "Dhawalsar", "Dhulapur", "Dob", "Dolhari", "Dudhgaon", "Fubgaon", "Ganeshpur", "Gaulpend", "Ghanapur", "Ghatkinhi", "Goregaon", "Hanumannagar", "Haru", "Hatgaon", "Hatni", "Hatola", "Husanapur", "Irthal", "Ishrampur", "Jambhora", "Jawala", "Kamtwada", "Kanzara", "Karjagaon", "Karmala", "Khopdi", "Kinhiwalgi", "Kolwai", "Kumbharkinhi", "Kurhad", "Ladkhed", "Lakhkhind", "Lalapur", "Lingbori", "Lohi", "Mahatoli", "Mahmdpur", "Mahuli", "Mangala", "Mangkinhi", "Manki", "Mankopra", "Mundhal", "Naigaon", "Nandgavhan", "Nilona", "Nimbhala", "Palashi", "Palodi", "Pekarda", "Pimpalkhuta", "Rajivnagar", "Bhoj", "Bohonoli", "Burdul", "Chamtoli", "Chandap", "Chargaon", "Chinchavali", "Devaloli", "Dhavale", "Dhoke", "Done", "Gorpe", "Indgaon", "Jambhilghar", "Kakadwal", "Kakole", "Kanhor", "Karand", "Karav", "Karavale", "Kasgaon", "Kharad", "Khuntavali", "Kudsavare", "Kumbharli", "Kushivali", "Babhalgaon", "Bamni", "Baswantpur", "Bhadgaon", "Bhadi", "Bhatangali", "Bhatkheda", "Bhosa", "Bhoyara", "Bhuisamudraga", "Bindgihal", "Bodkha", "Bokangaon", "Bopala", "Borwati", "Chandeshwar", "Chata", "Chikhal", "Chikhurda"],
    
    "5villages" : ["Adiwarpet", "Akkapalle", "Amudalpalle", "Angarajpalle", "Asnad", "Beervelli", "Bhamraopet", "Buddaram", "Chakepalle", "Chennur", "Chintapalle", "Dugnepalle", "Gangaram", "Guddirampur", "Kachanpalle", "Kannepalle", "Kathersala", "Khambojipet", "Kistampet", "Kommera", "Konampet", "Lingampalle", "Nagapur", "Narasakkapet", "Narayanpur", "Pokkur", "Ponnaram", "Raipet", "Sankaram", "Shivalingapur", "Somanpalle", "Suddal", "Sundersala", "Yellakkapet", "Anji", "Bursanpatar", "Dasnapur", "Devapur", "Dhannura", "Dharmasagar", "Dodanda", "Dongargaon", "Gattepalle", "Ginnera", "Goureepur", "Harkapur", "Heerapur", "Indervelly", "Keslaguda", "Keslapur", "Kondapur", "Lachimpur", "Lakampur", "Mallapur", "Mamidiguda", "Mendapalle", "Muthnur", "Pipri", "Pochampalle", "Rampur", "Tejapur", "Wadagaon", "Waipet", "Walganda", "Yamaikunta", "Alamuru", "Anantapur", "Chiyyedu", "Gollapalle", "Itikalapalle", "Jangalapalle", "Kakkalapalle", "Kamarupalle", "Kandakur", "Katiganikalva", "Kodimi", "Kurugunta", "Mannila", "Narayanapuram", "Papampeta", "Rachanapalle", "Sajjalakalva", "Somanadoddi", "Thaticherla", "Upparapalle", "Anandapuram", "Chinthalapeta", "Chinthapallipeta", "Chodavaram", "Damarasingi", "Devunikanapaka", "Garida", "Garikavalasa", "Golagam", "Gorlapeta", "Goshada", "Gudem", "Gujjangivalasa", "Gurla", "Jammu", "Kalavacherla", "Kella", "Kondagandredu", "Kotagandredu", "Lavidam", "Manyapuripeta", "Meesalapeta", "Nadupuru", "Nagallavalasa", "Nakkalapeta", "Nallacheruvu", "Pakeerukittali", "Palavalasa", "Palligantredu", "Pedabantupalle", "Penubharthi", "Polayavalasa", "Ragolu", "Sadanandapuram", "Solipisomarajupeta", "Thathavarikittali", "Thatipudi", "Thettangi", "Vallapuram", "Adavisangapur", "Aheri", "Ainapur", "Alaginal", "Aliyabad", "Ankalagi", "Arakeri", "Arjunagi", "Atalatti", "Babalad", "Babaleshwar", "Babanagar", "Baratagi", "Basavanagar", "Bellubbi", "Bijapur", "Bijjaragi", "Bolachikkalaki", "Bommanalli", "Buranpur", "Chikka", "Chintamaninagar", "Dadamatti", "Dasyal", "Devara", "Dhanaragi", "Dhanyal", "Domanal", "Dudihal", "Dyaberi", "Gonasagi", "Gugadaddi", "Gunadal", "Gunaki", "Hadagali", "Halagani", "Hanchinal", "Hangaragi", "Hanumasagar", "Harnal", "Hebbalahatti", "Hegadihal", "Hittinahalli", "Hokkundi", "Honaganahalli", "Honawad", "Honnalli", "Honnutagi", "Hosur", "Hubanur", "Hunsyal", "Indiranagar", "Inganal", "Itangihal", "Jainapur", "Jalageri", "Jambagi", "Jumnal", "Kaggod", "Kakanagiri", "Kakhandaki", "Kallakavatagi", "Kambagi", "Kanabur", "Kanamadi", "Kanamuchanal", "Kannal", "Kannur", "Karjol", "Katakanahalli", "Katral", "Kaulagi", "Kengalagutti", "Khatijapur", "Kodabagi", "Kotyal", "Kumatagi", "Kumathe", "Lalbahadur", "Lingadalli", "Lohagaon", "Madagunaki", "Madasanal", "Madhabhavi", "Mahal", "Mahatmagandhinagar", "Makanapur", "Malakandevarahatti", "Mamadapur", "Mangalur", "Minchinal", "Nagaral", "Nagathan", "Nandyal", "Narasimhanagar", "Navarasapur", "Nidoni", "Rajajinagar", "Rambhapur", "Ramnagar", "Ratnapura", "Sangapur", "Sarawad", "Savanalli", "Sevalalnagar", "Shegunashi", "Shirabur", "Shirnal", "Shivanagi", "Siddapur", "Siddapura", "Somadevarahatti", "Sutagundi", "Tajapur", "Takkalaki", "Tidagundi", "Tiganibidare", "Tikota", "Tonsyal", "Toravi", "Ukumanal", "Uppala", "Utnal", "Yakkundi", "Yatnal", "Abbanakuppe", "Achalu", "Akkur", "Alamaradoddi", "Allalasandra", "Ammanapura", "Ankanahalli", "Annahalli", "Anumanahalli", "Archikarahalli", "Arehalli", "Avaragere", "Balaguli", "Baleveeranahalli", "Banandur", "Bannigiri", "Bannikuppe", "Basavanapura", "Bennahalli", "Bethimgere", "Bhimenahalli", "Bidadi", "Bilagumba", "Billakempanahalli", "Bolappanahalli", "Bommachanahalli", "Borehalli", "Bychohalli", "Byragi", "Byramangala", "Chamanahalli", "Channamanahalli", "Chikkagangawadi", "Chikkakuntanahalli", "Chikkamannugudde", "Chikkasulikere", "Chikkenahalli", "Chowdeshwarihalli", "Danaikanapura", "Dasarahalli", "Dharapura", "Doddagangawadi", "Doddakuntanahalli", "Doddamannugudde", "Doddasulikere", "Ganakallu", "Gopahalli", "Hagalahalli", "Hakkipikki", "Hallimala", "Handigundi", "Harisandra", "Hebbakodi", "Heggadagere", "Hejjala", "Hirehalli", "Hosadoddi", "Hulikeregunnur", "Hulthar", "Hunasanahalli", "Ibbalakahalli", "Ijoor", "Ittamadu", "Ivagilu", "Jakkanahalli", "Jalamangala", "Jeeganahalli", "Kakaramanahalli", "Kallugopahalli", "Kanchugaranahalli", "Kavanapura", "Kempadyapanahalli", "Kempaiahnapalya", "Kempanahalli", "Kempavaderahalli", "Kenchanakuppe", "Kenjigarahalli", "Keshavapura", "Kethiganahalli", "Kethohalli", "Kodiyala", "Kolamaranakuppe", "Kotahalli", "Kothipura", "Kumbalagudu", "Kumbapura", "Kunagal", "Kurubara", "Kurubarahalli", "Kutagal", "Kutharabavi", "Kyasapura", "Kylancha", "Lakkappanahalli", "Lakkasandra", "Lakkojanahalli", "Lakshmipura", "Lakshmisagara", "Madapura", "Madigarapalya", "Manchanayakanahalli", "Manchegowdanapalya", "Mandalahalli", "Mayaganahalli", "Melehalli", "Muddapura", "Nagohalli", "Nelamale", "Ramanagara", "Ramanahalli", "Seshagirihalli", "Shanubhoganahalli", "Shanumangala", "Shivanahalli", "Siddalakallu", "Subkere", "Sugganahalli", "Tadikavagilu", "Talakuppe", "Thalawadi", "Thammanayakanahalli", "Thenginakallu", "Uragahalli", "Vajarahalli", "Vibhuthikere", "Virupasandra", "Voddaradoddi", "Voderahalli", "Yerehalli", "Yerepalya", "Achola", "Alipur", "Anpur", "Anur", "Arkera", "Ashinal", "Ashoknagar", "Azalapur", "Bachwar", "Badepalli", "Badiyal", "Bagalmadu", "Balajinagar", "Balched", "Balichakkar", "Bandhalli", "Baswanthpur", "Belgera", "Belgunda", "Bettadhalli", "Bhimenhalli", "Bhimnagar", "Bomraldoddi", "Bomshathalli", "Borabanda", "Budur", "Chaler", "Chamenhalli", "Chandapur", "Chanderki", "Chapetla", "Chinakhar", "Chintenpalli", "Chintkunta", "Dadal", "Dantapur", "Dastrabad", "Devanalli", "Devarahalli", "Dharmapur", "Duppalli", "Edlur", "Gajarkot", "Ghanpur", "Gondadgi", "Gopalpur", "Goudgera", "Gudalgunta", "Gudur", "Gunjunur", "Gurmatkal", "Gurnur", "Halgera", "Hattikuni", "Hedgimadra", "Heggangera", "Himalpur", "Holibet", "Hongera", "Horencha", "Jaigram", "Jawaharnagar", "Kadechur", "Kakalwar", "Kale", "Kamalanagar", "Kanchgarhalli", "Kandkur", "Kanekal", "Karengi", "Kasapanhalli", "Katgi", "Keshwar", "Khanapur", "Khanhalli", "Kilenkera", "Koilur", "Konkal", "Kotgera", "Koulur", "Kudlur", "Kuntimari", "Kurkumbal", "Kyathanhalli", "Lingera", "Madepalli", "Madhawar", "Magdampur", "Mailapur", "Malhar", "Maskehhalli", "Mavinhalli", "Mazra", "Minaspur", "Mitha", "Motenhalli", "Mudnal", "Munderga"],

    "6villages" : ["Adichanur", "Alagapuram", "Alvoy", "Amanakkanthondi", "Ammbappur", "Anaikudam", "Andimadam", "Angarayanallur", "Anikudichan", "Authukurichi", "Ayyur", "Cholamadevi", "Devamangalam", "Devanur", "Dharmasamudram", "Edaayankurichi", "Edanganni", "Edayar", "Elaiyur", "Elayaperumalnallur", "Eravangudy", "Govindaputhur", "Guruvalapparkovil", "Irugaiyur", "Jayankondam", "Kadambur", "Karaikurichi", "Kattagaram", "Kattathur", "Keelakudiyiruppu", "Keelanatham", "Kodalikaruppur", "Kodangudi", "Kodukkur", "Koovathur", "Kulothunganallur", "Kundaveli", "Kuvagam", "Madanathur", "Managethi", "Marudur", "Melur", "Mudukulam", "Muthuservamadam", "Naduvalur", "Nayaganaipriyal", "Olaiyur", "Pappakudi", "Parukkal", "Periakrishnapuram", "Periyavalayam", "Pilichikuzihi", "Pirancheri", "Pitchanur", "Rangiyam", "Sathambadi", "Silumbur", "Siluvaicheri", "Sooriyamanal", "Sripurandan", "Sriraman", "Sundaresapuram", "Suthamalli", "T.Palur", "T.Sholankurichi", "Thaluthalaimedu", "Thandalai", "Thanimarathukadu", "Thathanur", "Thenkatchiperumalnatham", "Thirukalappur", "Udayanatham", "Udayarpalayam", "Udayavarthiyanur", "Uliyankudi", "Ulkottai", "Ulliyankudi", "Valaikurichi", "Vanathirayampattinam", "Vangudi", "Varadarajanpettai", "Variyankaval", "Vembukudi", "Venmankondan", "Vethiyarvettu", "Vilandai", "Achamangalam", "Agaram", "Agasipalli", "Alapatti", "Appinayakkankottai", "Ariyanapalli", "Avalnatham", "Balanapalli", "Balekuli", "Balinayanapalli", "Bannihalli", "Bargur", "Bathimadugu", "Batlapalli", "Bayanapalli", "Beemandapalli", "Bellampalli", "Bellarapalli", "Billanakuppam", "Boganapalli", "Bommarasanapalli", "Budhimutlu", "Chaparthi", "Chendrapalli", "Chennasandiram", "Chikkapoovathi", "Chinmnamttarapalli.", "Chinnakothur", "Chinnathimminayanapalli", "Chowttahalli", "Dasigounipalli", "Dasiripalli", "Devarakundani", "Devasamudiram", "Doddaganama", "Ebbiri", "Edayarapalli", "Errahalli", "Ettipalli", "Ettipallitalav", "Gangaleri", "Gangamadugu", "Gollapalli", "Gooliam", "Gundalapatti", "Gunthapalli", "Guruvinayanapalli", "Guttur", "Helekrishnnapuram", "Helekundani", "Idipalli", "Ikondamkothapalli", "Jagadab", "Jagadevipalayam", "Junjupalli", "Kadavarapalli", "Kallukurikki", "Kammaampalli", "Karadihalli", "Kariyasagaramthalav", "Kasiruganapalli", "Kathinayanapalli", "Kathiripalli", "Katteri", "Kattiganapalli", "Kaveripattinam", "Kodipalli", "Kompalli", "Kondappanayakempalli", "Kondappanayanapalli", "Kondepalli", "Konganepalli", "Kothigutalapalli", "Kottur", "Krishnagiri", "Krishnappanayakkanpudur", "Kundarapalli", "Kuppachiparai", "Kurubarapalli", "Lakkabathalapalli", "Madepalli", "Maharajakadai", "Majethgollahalli", "Mallapadi", "Manavarnapalli", "Marachandiram", "Marichettihalli", "Marigampalli", "Mittahalli", "Modikuppam", "Mottur", "Nachikuppam", "Naduvanapalli", "Nallur", "Nandibanda", "Naralapalli", "Neralagiri", "Neralakotta", "Nirmalvadi", "Oddapalli", "Oppathavadi", "Orappam", "Paiyur", "Palepalle", "Pandikurikki", "Pannapalli", "Panneswaramadam", "Pasinayanapalli", "Peddatalapalli", "Peddathanapalli", "Periamuthu", "Polupalli", "Ponnappa", "Puligunta", "Puliyancheri", "Puram", "Ragimakanapalli", "Ragimanapalli", "Salinayanapalli", "Sembadamuthur", "Sigaralapalli", "Sigaramaganapalli", "Singiripalli", "Siranapalli", "Sokkadi", "Soolamalai", "Sulamalai", "Sundekuppam", "Talihalli", "Tankadikuppam", "Thalipalli", "Thandagoundarahalli", "Thatrahalli", "Thattatharai", "Theertham", "Thogarapalli", "Timmapuram", "Undiganatham", "Varatanapalli", "Velakalahalli", "Venkatapuram", "Veppanapalli", "Verupasandiram", "Adappadakki", "Alagamanagari", "Alagichippatti", "Alangulam", "Alavakkottai", "Allur", "Alpattaviduthi", "Ammanpatti", "Arasani", "Arasanur", "Cholapuram", "Cholavandan", "Gowripatti", "Idaikkattur", "Idaiyamelur", "Iluppaikkudi", "Kadambankulam", "Kadaneri", "Kalkulam", "Kallarathinipatti", "Kallurani", "Kandangipatti", "Kanjipatti", "Kanjiram", "Kanjirangal", "Kannariruppu", "Karungalakudi", "Kathappattu", "Kattanipatti", "Kayangulam", "Keelakottai", "Keelamangalam", "Kilapungudi", "Kilathari", "Kilkandani", "Kilpidavur", "Kodikadukadamboorani", "Kolanthi", "Kollankudi", "Kondagamperungarai", "Kootaravupatti", "Kottagudi", "Kottappatti", "Kovanur", "Kumarapatti", "Kuruthanivariendal", "Madaguppatti", "Malampatti", "Mallal", "Mangattendal", "Mangudi", "Mangulam", "Marakkathur", "Marandai", "Maraniusilangulam", "Marathur", "Mathukanmoi", "Mathur", "Melapungudi", "Melavaniyankudi", "Minnaranjanvelangulam", "Mongankanmoi", "Moovarkanmoi", "Mudikandan", "Mudikkaraipudukkulam", "Muthur", "Nadamangalam", "Nagarampatti", "Nallendal", "Nalukottai", "Namanur", "Nariyangudi", "Nattarasankottai", "Nedungulam", "Okkur", "Okkurpudur", "Oyyavandan", "Padamathur", "Paganeri", "Paiyaurpillaivayal", "Palkulam", "Pallivayal", "Panaiyur", "Panangadi", "Paruthikanmai", "Periakannanur", "Perungudi", "Pillur", "Pirandakulam", "Ponnakulam", "Poovali", "Pudukkilavachi", "Puduppatti", "Pulavanvayal", "Puliyankulam", "Purasadiudappu", "Purasapattiudayarendal", "Sakkur", "Salur", "Sedambal", "Sembanur", "Sembar", "Sendiudaiyanathapuram", "Sennalakudi", "Sethur", "Sevaoorani", "Silathagudi", "Silukkapatti", "Siramam", "Siriyur", "Sirukanaperi", "Sivaganga", "Somanathamangalam", "Sundaranadappu", "Surakkulam", "Tamarakki", "Thadiyamangalam", "Thamarakki", "Thiraniendal", "Tirumalaikkoneripatti", "Usilanendal", "Usilangulam", "Valanai", "Valuthani", "Vanniankudi", "Vannikkudi", "Vembankudi", "Vembathur", "Vettikulam", "Vittaneri", "Aralam", "Ayyankunnu", "Chavassery", "Cheruvanchery", "Chockli", "Dharmadom", "Eranholi", "Eruvatti", "Kadirur", "Kandamkunnu", "Kanichar", "Kannavam", "Keezhallur", "Keezhur", "Kelakam", "Kolavelloor", "Koloyad", "Koodali", "Koothuparamba", "Kottayam-Malabar", "Kottiyoor", "Manantheri", "Manathana", "Mangattidam", "Mattannur", "Mokeri", "Muzhakkunnu", "New", "Paduvilayi", "Panniyannur", "Panoor", "Pathiriyad", "Pattannur", "Pattiom", "Payam", "Peringathur", "Pinarayi", "Puthoor", "Sivapuram", "Thalassery", "Thillenkeri", "Tholambra", "Thrippangottur", "Vekkalam", "Vellarvelly", "Vilamana", "Alakode", "Alapadamba", "Cheleri", "Chengalai", "Chuzhali", "Eramam", "Eruvassy", "Irikkur", "Kalliad", "Kankole", "Karivellur", "Kayaralam", "Kolacherry", "Kooveri", "Kurumathur", "Kuttiattoor", "Kuttiyeri", "Kuttoor", "Malapattam", "Maniyoor", "Mayyil", "Nediyanga", "Nuchiyad", "Padiyoor", "Panniyoor", "Pariyaram", "Pattuvam", "Payyannur", "Payyavoor", "Peralam", "Peringome", "Perinthatta", "Pulingome", "Ramanthali", "Sreekandapuram", "Taliparamba", "Thimiri", "Thirumeni", "Vayakkara", "Vayathur", "Vellad", "Vellora"],

    "7villages" : ["Alubari", "Arya", "Badamtam", "Banockburn", "Barbatia", "Barnesbeg", "Bijanbari", "Bloomfield", "Chongtong", "Dangia", "Darjiling", "Ging", "Goke", "Happy", "Hatta", "Jhepi", "Kaijalia", "Kankibong", "Karmi", "Kolbong", "Lamagaon", "Lebong", "Liza", "Lodhama", "Majua", "Murmidong", "Namla", "Pandam", "Patliabas", "Pattabong", "Phubsering", "Rangli", "Relling", "Rimbick", "Rishihat", "Rungneet", "Samalbong", "Singalila", "Singbhumdera", "Singla", "Singtam", "Soom", "Sum", "Tukvar", "Ambeok", "Chichu", "Dalingkot", "Dalingma", "Eastnar", "Gorubathan", "Kumai", "Lehti", "Lower", "Mal", "Manabari", "Mo", "Nim", "Noam", "Pagrang", "Pankasari", "Pankhasari", "Paren", "Pashiting", "Paten", "Pogu", "Rango", "Rechila", "Ruka", "Sakam", "Samabiyong", "Samsing", "Thousum", "Today", "Turibari", "Upper", "Westnar", "Amarsing", "Atal", "Bairbhita", "Bara", "Barabhita", "Barajharu", "Batlabari", "Bauni", "Baunibhita", "Belgachi", "Bhakatram", "Bharatsing", "Bhelu", "Bhimram", "Bhujia", "Birsing", "Budhkaran", "Chhota", "Dakshin", "Dalkajhar", "Damdama", "Dayaram", "Deoanbhitar", "Deomani", "Dhakna", "Dhanibani", "Dhanibanir", "Dhemal", "Dumriguri", "Fakna", "Gaziram", "Geni", "Ghusuru", "Gram", "Grammani", "Hoda", "Huchaimallik", "Jamidarguri", "Jamidargurir", "Jhabar", "Kadma", "Kamala", "Kamalpur", "Ketugabur", "Kilaram", "Lakshman", "Lakshmaner", "Lalman", "Lohasing", "Mahasing", "Mangalsing", "Manjha", "Marapur", "Mayaram", "Mechi", "Minghara", "Mingharar", "Mir", "Mirjangler", "Mudir", "Nandalal", "Nehal", "Nimubhitar", "Nipania", "Omi", "Ord", "Panta", "Pashchim", "Pataram", "Putimari", "Raghuram", "Raghuramer", "Rajajhar", "Rangapani", "Ranidanga", "Rupsing", "Satbhaiya", "Sebdella", "Shaibhita", "Sirsia", "Siubar", "Suraj", "Surajbar", "Tarabari", "Tarabarir", "Teprabhola", "Tepuchamaru", "Trihana", "Udiarip", "Uttam", "Uttar", "Abadnagar", "Adampur", "Ahammadpur", "Aligar", "Amlachaturi", "Arali", "Arazi", "Ashna", "Azimnagar", "Baishnabdaspur", "Balarampur", "Bandi", "Baraghata", "Barkonda", "Barshal", "Belera", "Bhabanandapur", "Bhabanipur", "Bhaluksundi", "Bhunbag", "Bidhaipur", "Bilhera", "Chak", "Chaktulsi", "Chandrapur", "Daldala", "Deoanganja", "Dhaka", "Dubrajpur", "Durgapur", "Fakirdas", "Faridpur", "Gaisara", "Gamarkunda", "Ganeshpur", "Gangapur", "Gangmuri", "Gobinda", "Gobra", "Gulalgachhi", "Haripur", "Hirapur", "Jahanabad", "Jamira", "Jaypur", "Jhikra", "Kabilashpur", "Kanaipur", "Kanchannagar", "Kanmora", "Kathgharia", "Khayradihi", "Kundira", "Kuralmatia", "Kushipur", "Kushma", "Kushmashul", "Lauberia", "Laujor", "Madarpur", "Madhaipur", "Mahishagram", "Malkura", "Monoharpur", "Muktipur", "Murdaganja", "Murgathali", "Mursabani", "Naoabag", "Nimra", "Nutangram", "Padampur", "Panikola", "Parashia", "Patadanga", "Patalpur", "Patmuri", "Perul", "Raghunandanpur", "Rajnagar", "Rajpur", "Ramnagar", "Ranigram", "Ranipur", "Raotara", "Ruhida", "Sahabad", "Sajina", "Shankarpur", "Sidpur", "Sundarkhela", "Tabadumra", "Takipur", "Talpukur", "Tantipara", "Tarasol", "Tentulia", "Tilabani", "Aliganja", "Alipur", "Amdiha", "Amlala", "Amulia", "Baliapur", "Barabani", "Baradang", "Bhanowara", "Bhaskajuri", "Bijari", "Bila", "Charanpur", "Chhotkara", "Chinchuria", "Daskiari", "Domohani", "Gopalbaid", "Gourbazar", "Hosenpur", "Itapora", "Jamgram", "Janarddan", "Jayramdanga", "Kanskuli", "Kantapahari", "Kanyapur", "Kapishtha", "Karrabaid", "Kelejora", "Khaerbad", "Khamra", "Khoshnagar", "Lalganja", "Madanpur", "Majiara", "Monohar", "Napara", "Nuni", "Pangachhiya", "Paniphala", "Panuria", "Parulbaria", "Puchra", "Putulia", "Raghunath", "Raniganja", "Rashunpur", "Roshna", "Sarshatali", "Shyamsundarpur", "Taldanga", "Alampur", "Amar", "Baghar", "Baharpur", "Bahir", "Bakalsa", "Baman", "Bandul", "Barasat", "Belkash", "Bhandardihi", "Bhita", "Bidchhala", "Birutikri", "Bongpur", "Chamardighi", "Chandul", "Chandutia", "Daspur", "Diuri", "Fakirpur", "Goda", "Gopalbati", "Gopalpur", "Haldi", "Ichharambati", "Idilpur", "Isufabad", "Jagadabad", "Jamalpur", "Jamar", "Jhinguti", "Jiara", "Jotgoda", "Kaligram", "Kamarkita", "Kamnara", "Kanchannarar", "Kantia", "Kashiara", "Kasimpur", "Katrapota", "Khaidya", "Khargeswar", "Kharjuli", "Khetia", "Krishnapur", "Kurman", "Mahinagar", "Malkita", "Matial", "Mirzapur", "Nababhat", "Nabagram", "Nala", "Nari", "Neragohalia", "Nityanandapur", "Palitpur", "Parui", "Patikirtipur", "Pilkhuri", "Pure", "Ramchandrapur", "Rayan", "Raypur", "Sadhanpur", "Sapar", "Saraitikar", "Shonpur", "Simdali", "Sirajpur", "Talit", "Tentral", "Tubgram", "Banarpal", "Bantala", "Bhusan", "Bikrampur", "Chhendipada", "Colliery", "Handapa", "Industrial", "Jarapada", "Kaniha", "Khamar", "Kiakata", "Kishorenagar", "Palalahada", "Purunakot", "Rengali", "Samal", "Talcher", "Thakurgarh", "Ambabhona", "Attabira", "Barapali", "Bargarh", "Bhatli", "Bheden", "Bijepur", "Gaisilet", "Jharbandha", "Melchhamunda", "Padmapur", "Paikamal", "Sohela", "Arjyapalli", "Asika", "Badagada", "Bhanjanagar", "Brahmapur", "Buguda", "Chamakhandi", "Chhatrapur", "Dharakote", "Digapahandi", "Ganjam", "Golanthara", "Hinjili", "Jagannath", "Jarada", "Kabisuryanagar", "Khalikote", "Kodala", "Nuagaon", "Patapur", "Polasara", "Purusottampur", "Ramagiri", "Rambha", "Seragad", "Surada", "Tarasingi", "Astaranga", "Brahmagiri", "Chandanpur", "Delanga", "Gadisagada", "Gop", "Kakatpur", "Konark", "Krushna", "Nimapada", "Pipili", "Puri", "Ramachandi", "Sadar", "Satyabadi", "Gurundia", "Hatibari", "Hemgir", "Kamarposh", "Kinjirkela", "Koida", "Kutra", "Lahunipara", "Lathikata", "Lephripara", "Mahulapada", "Raghunathapali", "Raiboga", "Rajagangapur", "Raurkela", "Sundargarh", "Talasara", "Tangarapali", "Tikaetpali", "Bishnupur", "Moirang", "Nambol", "Khoijuman", "Nachou", "Naranseina", "Ngaikhong", "Ningthoukhong", "Phubala", "Potsangbam", "Sunusiphai", "Tengkhal", "Thinungei", "Toubul", "Paomata", "Purul", "Saitu", "Alapia", "Alengi", "Atoatika", "Auguri", "Auniati", "Badal", "Bagariguri", "Bali", "Bamun", "Bangthai", "Bar", "Barbheti", "Barhampur", "Barjoha", "Barkandoli", "Bengena", "Bezar", "Bhakat", "Bhalukmari", "Bhelai", "Bhogbari", "Bhutai", "Birah", "Birahi", "Bogoriguri", "Borkala", "Bura", "Chakori", "Chengmura", "Chota", "Chutia", "Dakhin", "Darangial", "Dewdhar", "Dewri", "Dhantala", "Dimaruguri", "Dimow", "Dipahalu", "Etapara", "Gadharia", "Garai", "Garikuri", "Gederbori", "Gendhua", "Ghugar", "Gohaibari", "Gorehagi", "Hatigarh", "Hatijujua", "Hatipara", "Herapati", "Jalah", "Jalandha", "Jamuguri", "Jarani", "Kachalukhowa", "Kachamari", "Kachupit", "Kahalar", "Kakamari", "Kalajugi", "Kamar", "Karaiyani", "Karchung", "Kasoi", "Katani", "Katimari", "Kawaimari", "Kendu", "Kharupetia", "Khuti", "Kujidah", "Kumar", "Kumartup", "Kurabahi", "Kuruabahi", "Kutayani", "Kuwari", "Lalungpar", "Lao", "Low", "Mahe", "Mahrul", "Maj", "Majarati", "Majgaon", "Marguri", "Maz", "Mikir", "Mohmara", "Morangial", "Mori", "Morongial", "Na", "Nagaon", "Nam", "Naramari", "Nartam", "Nartum", "Nedhar", "Nibukali", "Niz", "Nonoi", "Palasoni", "Pani", "Phakali", "Phulaniati", "Pukhuri", "Putani", "Raidongia", "Ranga", "Rangolu", "Ranthali", "Rowmari", "Rupahi", "Samkalia", "Samua", "Sensuwa", "Siale", "Silangani", "Simaluguri", "Sing", "Singia", "Solmari", "Sukati", "Sutar", "Takowbari", "Telia", "Titajuri", "Tukulai", "Uria", "Uzara", "Adisuti", "Ahuchaul", "Ajaraguri", "Amguri", "Amtola", "Angar", "Asserakata", "Atha", "Bagalijan", "Bahadur", "Bahatia", "Bahpati", "Bakal", "Balijan", "Bandarkata", "Bantow", "Barali", "Barbocha", "Barcharia", "Bebejia", "Bebejiakumar", "Bilbagan", "Bocha", "Boichagarumaria", "Borbil", "Bordubi", "Borhamukh", "Borimuri", "Borkhimukh", "Chaboti", "Chabukdhora", "Chalichuk", "Chandmari", "Chatakpur", "Chengamari", "Cherapbhati", "Chowkham", "Christian", "Chukuli", "Dafalakata", "Dah", "Dambukial", "Debera", "Deobil", "Dhakua", "Dhala", "Dhekiajuli", "Dhenudharia", "Dhenudhoria", "Dihingia", "Dola", "Dowar", "Dulia", "Duliapathar", "Dulpatta", "Eleng", "Gamchuk", "Garoimari", "Ghagar", "Ghagarmara", "Ghagarmukh", "Ghesek", "Ghuligaon", "Ghumasuti", "Godabari", "Gohain", "Gormur", "Gossaichapari", "Gualbari", "Gubarisali", "Hahe", "Haluajan", "Hao", "Hastinapur", "Hatibandha", "Hatilung", "Hatimora", "Hindu", "Janakpur", "Janu", "Japisajia", "Jariguri", "Jaritup", "Jengrai", "Jorkhat", "Joying", "Kadamial", "Kalitagaon", "Kaliwana", "Kandali", "Kanhi", "Karah", "Kashi", "Khabuli", "Khaga", "Khagachandarpur", "Khagajugalpur", "Khar", "Kharkhari", "Khutakatia", "Koilamari", "Kulamon", "Kulamua", "Kumarkata", "Kundumiri", "Kutuhaguri", "Lechai", "Ligiramukh", "Loliti", "Maghuachapari", "Maguri", "Mahara", "Majarchapari", "Moidamia", "Morolia", "Morton", "Mudoibil", "Naharani", "Nalkata", "Padumani", "Pahumora", "Palashpara", "Patharichuk", "Patia", "Phala", "Phukanarhat", "Purani", "Puta", "Rahnapur", "Rajabherasantipur", "Rajaborah", "Rajgarh", "Rajkhowa", "Ranti", "Rongpuria", "Roumari", "Salal", "Singimari", "Sonari", "Sumdirimukh", "Sunari", "Teliatinkhuria", "Tenga", "Tinikuria", "Uhani", "Ujjalpur", "Uriam"],

    "8villages" : ["Achran", "Adampur", "Ahuta", "Ajgaha", "Aphrail", "Baghar", "Baidol", "Baisbighi", "Baldia", "Balia", "Baliabhag", "Balrampur", "Baluganj", "Bangaon", "Bangradih", "Bankatta", "Bankipur", "Barhat", "Barpokhar", "Basdeopur", "Basole", "Belwa", "Bhatwar", "Bhemial", "Bijaul", "Bijpura", "Binabari", "Birdabani", "Birnagar", "Bishunpur", "Biswaspur", "Bohar", "Chilhapara", "Chilia", "Dahra", "Daitaul", "Daribhita", "Datian", "Deugole", "Dhaltar", "Dhanhara", "Dhokria", "Dhumtola", "Dighal", "Dullahpur", "Fatehpur", "Ghasipura", "Ghatkakola", "Gorra", "Gosainpur", "Hansar", "Haripur", "Hartara", "Ibrahimpur", "Jaipura", "Jajan", "Janki", "Jujharpur", "Kadlabari", "Kallangaon", "Kamat", "Kamra", "Kansoi", "Khairan", "Kirora", "Kishunbhati", "Kismat", "Kotebador", "Lachaur", "Lalpur", "Laucha", "Laur", "Lohagara", "Lutipur", "Madhopur", "Mahesh", "Mahisal", "Mahisampur", "Malaur", "Manikpur", "Mathurapur", "Matian", "Matiari", "Milikpur", "Miliktoli", "Mirzadpur", "Mohadipur", "Mohan", "Moralbadh", "Morangpur", "Nazia", "Nista", "Pachra", "Pahencha", "Palsa", "Pandaul", "Parua", "Parwa", "Pealapur", "Pharsara", "Porabari", "Raipur", "Rajaul", "Rampur", "Rangpur", "Raniganj", "Rautara", "Rukhuamari", "Sadabarat", "Sadipur", "Sahasara", "Sahutola", "Salempur", "Sealpara", "Shahpur", "Sharif", "Sidhua", "Sihagaon", "Sihpur", "Sirampur", "Sirpatol", "Sohar", "Sonitola", "Sultanpur", "Tarapur", "Telta", "Thakurbari", "Thuti", "Amdaul", "Athara", "Babhni", "Baina", "Baliatha", "Bangarua", "Bansnagar", "Barjhala", "Bastaul", "Belgachi", "Bhalgaur", "Bisare", "Budhaili", "Budhnagar", "Chatra", "Chaumukha", "Datranga", "Dhabal", "Dhabaul", "Dharhan", "Dighauneh", "Durgapur", "Gach", "Gajhar", "Ganganagar", "Garail", "Gauripur", "Gidaul", "Gram", "Harphara", "Harsua", "Hundaili", "Jalah", "Jaunia", "Jhauwa", "Kahata", "Kamipur", "Kasht", "Kasundi", "Katghar", "Kebala", "Kehunia", "Keotia", "Keshopur", "Khajuria", "Khojate", "Khusalpur", "Kursanda", "Kusiari", "Lakhpura", "Lalganj", "Machola", "Madansahi", "Mahadeonagar", "Mahadeopur", "Maharampur", "Majgawan", "Majhaili", "Maniknagar", "Marocha", "Mijli", "Mohanpur", "Nand", "Pakaria", "Panki", "Parsa", "Patharwar", "Piritnagar", "Pranpur", "Rahar", "Ramchandarpur", "Sadapur", "Sahja", "Sakraili", "Satare", "Siktia", "Silaur", "Sirauda", "Sonaila", "Sundarmochi", "Tehargaon", "Amahara", "Auraia", "Babhanganwan", "Baghi", "Balgudar", "Barhia", "Bhelaura", "Bihraura", "Bihta", "Bikam", "Bilauri", "Birdaban", "Chak", "chamghara", "Damodarpur", "Dariapur", "Dihra", "Dugai", "Dumrahi", "Ganeshpur", "Gangta", "Garhi", "Gobind", "Gujradih", "Harpur", "Hasanpur", "Jhakhar", "Jhinaura", "Kachhiana", "Kandarpa", "Karihara", "Kesaura", "Khagaur", "Khairi", "Kharagwara", "Khirho", "Koria", "Koriazilla", "Kurauta", "Lachhmipur", "Lakhisarai", "Lodia", "Mahsauna", "Makhdumpur", "Mankattha", "Moranwan", "Nimchak", "Nirpur", "Pachauta", "Panghara", "Patner", "Rahua", "Sabipur", "Salona", "Samandih", "Siswan", "Tilo", "Wofapur", "Akauni", "Aure", "Bakiabad", "Barhara", "Bartara", "Barui", "Bhamaria", "Bigha", "Billo", "Dakra", "Dudi", "garsanda", "Gulni", "Kathautia", "Koli", "Mahsaura", "Nadiawan", "Nandnawan", "Narainpur", "Nongarh", "Parsaman", "Phulaia", "Ramgarh", "Sarma", "Satsanda", "Sawan", "Shahnagar", "Sondhi", "Surari", "Tetarhat", "Ursanwan", "Akhtiarpur", "Amwa", "Anharipur", "Arap", "Baghakol", "Baigawan", "Baliari", "Bara", "Barah", "Barda", "Bauwan", "Beni", "Berar", "Beri", "Bhadsara", "Bikram", "Birdhaur", "Chandni", "Chandri", "Chauthia", "Chichourha", "Chihunta", "Danara", "Datiana", "Donrapur", "Faridpur", "Girwari", "Gona", "Gopalpur", "Gorakhri", "Gulami", "Habaspur", "Hathsar", "Jamalpur", "Janpara", "Kanpa", "Katari", "Lahladpur", "Mahajpura", "Mahammadpur", "Majhanpura", "Majhauli", "Math", "Milki", "Moriawan", "Nagahra", "Nasirpur", "Painapur", "Pakrandha", "Patut", "Raghunathpur", "Rahi", "Saidabad", "Sangrampur", "Sarwan", "Shahjahanpur", "Shivgarh", "Sikaria", "Sundarpur", "Tari", "Wazirpur", "Anaili", "Arazi", "Bahadurpur", "Barhampur", "Barhari", "Barsauni", "Belwabhag", "Bhatgawan", "Bhatoria", "Bhogadehat", "Bhogakariat", "Biarpur", "Bikrampur", "Biloria", "Birpur", "Biru", "Burail", "Chandi", "Chhatia", "Dadaur", "Dagarua", "Dewanganj", "Dhanganwan", "Dilia", "Dimia", "Gangaili", "Gaura", "Hansadah", "Harda", "Himtiarpur", "Hiradhar", "Isruil", "Jiagachhi", "Kadwadangi", "Kalsarkismat", "Kamraili", "Kathua", "Kavaia", "Kishunpur", "Maharajpur", "Mahendrapur", "Maheshpur", "Majhwa", "Mandarpur", "Mathdobh", "Mathia", "Mohankunda", "Nagdehi", "Parmanandpur", "Patilwa", "Phasia", "Pipra", "Pirganj", "Pokharia", "Purnia", "Rajwara", "Ranipatra", "Rasulpur", "Raziganj", "Sahawa", "Sandalpur", "Shekhpura", "Sikandarpur", "Singhia", "Sobhaganj", "Tamaut", "Tariabhag", "Tharha", "Tira", "Uchitpur", "Akbarpur", "Auria", "Babhan", "Basantpur", "Basmanpur", "Bhamet", "Bhandsar", "Bhawanipur", "Bhelwa", "Bhurkunda", "Bhurkundi", "Birnia", "Birsail", "Brahamgani", "Chandaili", "Chethariapir", "Dewhari", "Dumaria", "Dumra", "Dumrail", "Garhia", "Genharia", "Gonwara", "Jabe", "Khagurail", "Khajura", "Kharkatta", "Kodai", "Kusaha", "Lathi", "Laukahi", "Mahabala", "Mahanth", "Mahathua", "Parasbani", "Raipura", "Sahgaura", "Sahiaganj", "Semaria", "Siripur", "Sondiha", "Sondip", "Sonua", "Soraiti", "Supaili", "Suraini", "Telkundar", "Tulshipur", "Ahirpur", "Alimuddinpur", "Anjani", "Asadpur", "Askaranpur", "Asoi", "Bahlolpur", "Bakhra", "Bhagwanpur", "Bhagwatpur", "Bhatauli", "Bihari", "Chakar", "Dohji", "Enayetpur", "Faizpura", "Fatehullah", "Ghataro", "Gorhia", "Hansi", "Harbanspur", "Hussaina", "Jahangirpur", "Jalalpur", "Jankipur", "Kaila", "Kali", "Karhari", "Kazipur", "Khir", "Kiratpur", "Madhupur", "Maksudanpur", "Malahi", "Manganpur", "Mansurapur", "Maricha", "Matiara", "Mian", "Panapur", "Parbodhi", "Partap", "Paterha", "Patrahi", "Patti", "Piru", "Rahsa", "Ratanpura", "Rohua", "Sadhopur", "Sahtha", "Saidpur", "Shambhupatti", "Shambhupur", "Shampur", "Shekhpatti", "Shekhpur", "Shembhupur", "Simra", "Siwan", "Telia", "Wafapur", "Warishpur", "Warispur", "Yukub", "Yusufpur", "Alargo", "Bandhdih", "Bandio", "Bursera", "Chandrapura", "Charri", "Chirudih", "Dugda", "Ghatiari", "Ghutuwai", "Junori", "Karidugedho", "Karmatanr", "Khalcho", "Kurumba", "Narra", "Nasia", "Paplo", "Pipradih", "Raja", "Ratari", "Sijhua", "Taranari", "Taranga", "Telo", "Termi", "Turio", "Achato", "Adhanua", "Agai", "Agiya", "Alkoin", "Ambatari", "Amgachhi", "Amgaria", "Amlawa", "Amruwa", "Amtibahiar", "Anandisar", "Arjuna", "Asanpur", "Athmuria", "Aurabari", "Babudih", "Babupur", "Baghakara", "Baghduba", "Baghmari", "Baijandih", "Baijubasa", "Baijudih", "Bajar", "Bajarmarua", "Baliyachauki", "Baliyadah", "Baliyakol", "Baljora", "Balsara", "Balthar", "Bandh", "Bandra", "Banjhi", "Bank", "Banka", "Banpokhariya", "Bansdiha", "Barajharna", "Barakala", "Barakola", "Barasatighat", "Baratikar", "Bardahiya", "Bargachha", "Bariyodih", "Barmasiya", "Barmuria", "Barsatiya", "Basbutiya", "Basmatakota", "Bela", "Belatanr", "Beltikri", "Bhadwari", "Bhagiapahari", "Bhagtadih", "Bhairwatanr", "Bhaluwabandh", "Bhandaro", "Bhikhoa", "Bhitia", "Bhorajamuan", "Bhuliya", "Bhusuriya", "Biarajpur", "Bichgarha", "Bihroji", "Birajkurumtanr", "Birhabaran", "Biruji", "Bisnotarsatighat", "Bisuwani", "Biyahi", "Budhibari", "Burhwakura", "Butatari", "Buturuadih", "Chakarman", "Chameli", "Chandayan", "Chandraydih", "Charkipahari", "Chauphal", "Chhatakurum", "Chhatmi", "Chhota", "Chhotandih", "Chhotbahiari", "Chigrumanjhidih", "Chiguraydih", "Chihardhandhiya", "Chihutia", "Chihutiya", "Chitarponka", "Chopa", "Chulhiya", "Dahijor", "Dahua", "Daminkol", "Dangri", "Dariadih", "Dasdih", "Debichak", "Debthar", "Dhakodih", "Dharandharpur", "Dharhi", "Dhawaghat", "Dhawatanr", "Dhibrisar", "Digambari", "Domohan", "Donihari", "Dudhani", "Dudhaniya", "Dudhwajor", "Dumabad", "Dumarhar", "Dumariya", "Dumarkola", "Dumarthar", "Dumma", "Dundiya", "Dunidih", "Durdhuajor", "Gadi", "Gadibaliya", "Gadibaliyachhit", "Gajhanda", "Gandhua", "Garbhuadih", "Garihani", "Gauri", "Gauribasar", "Gauriganj", "Ghaghra", "Ghongha", "Ghordaura", "Ghormara", "Ghospur", "Ghutiya", "Gobardaha", "Goedaha", "Gorai", "Gorsingha", "Harila", "Harilajori", "Harkata", "Harodih", "Hathwari", "Heth", "Hidolabaran", "Hirakanali", "Hirna", "Hirnatanr", "Jagarnathi", "Jagatpur", "Jaginitikar", "Jamro", "Jamua", "Jamuniya", "Jamuniyatanr", "Jariya", "Jarwadih", "Jausaghdih", "Jhagrudih", "Jhalar", "Jharkhandi", "Jhilighat", "Jitmahta", "Jiyapani", "Jogikupa", "Jogiyakanali", "Jovi", "Kabilaspur", "Kadrakura", "Kadrasa", "Kairbank", "Kairi", "Kajhiya", "Kamatpalan", "Kamdiha", "Kandraha", "Kaniyaripokhar", "Kanthikanalii", "Karankol", "Katahara", "Katban", "Kathia", "Kesidih", "Khairkhuti", "Khajra", "Khapchua", "Khapchuwa", "Kharagdiha", "Kharaiadih", "Kharwa", "Khaspalag", "Kherwa", "Khobha", "Kindua", "Kisnidih", "Kita", "Kitapalag", "Kolhanipathar", "Kolhariya", "Korabandh", "Kulhariya", "Kumardih", "Kuribank", "Kurmakol", "Kurumtanr", "Kusamha", "Kusmatilha", "Kusumbad", "Kusumdih", "Kusumkanali", "Laharniya", "Lakrakura", "Latasare", "Latwabaran", "Letwa", "Liliabaran", "Lorhia", "Lorhibaran", "Lutiyatari", "Machna", "Madhaiya", "Madhuban", "Madhudinda", "Mahadewa", "Mahat", "Mahuadabar", "Malhara", "Maljhaghar", "Manidih", "Mansaraykurwa", "Marikdih", "Masuriya", "Maswepahar", "Matbara", "Mednidih", "Mejurnach", "Misardih", "Mohiamo", "Mohnakanali", "Morni", "Muspha", "Nabawi", "Nagdah", "Nagpur", "Naiadih", "Nakti", "Narhipakariya", "Nawadih", "Nawadiha", "Nawakurwa", "Nayachitkat", "Nijbagra", "Nokhil", "Pachrukhi", "Padimanraekurwa", "Padumbana", "Paharpur", "Pahridih", "Paisardah", "Pandetari", "Paniya", "Paraiya", "Parihathbandh", "Parodal", "Patakdih", "Patharchapti", "Pathargarha", "Pathri", "Patjor", "Pharkasamra", "Phatepur", "Phursatari", "Phuta", "Phutabandh", "Pilwahi", "Pindra", "Pirhamo", "Piyarjor", "Postbari", "Pujhardih", "Puranabagara", "Puranichitkit", "Purnabathan", "Rajasor", "Rakatrohna", "Raksa", "Ramanthiya", "Ramsingrayjot", "Randhiya", "Ranga", "Rangamodichak", "Rarhiya", "Ratanpur", "Raturaydih", "Rhabi", "Rikhiyahat", "Rohanpur", "Ropni", "Rudarpur", "Rupaidih", "Sabharaydih", "Saharpura", "Salaiya", "Salgati", "Saraia", "Saraiya", "Sarasani", "Sarsa", "Satbahiri", "Semarkhut", "Semra", "Sibnagar", "Siktiya", "Silwe", "Simarjor", "Simrakita", "Simrapoj", "Singardih", "Singhraydih", "Siriya", "Sirsa", "Sirsamantharchhit", "Sirsananthar", "Sirsiya", "Sonbadia", "Sonwan", "Suardahi", "Surangi", "Suthaniya", "Tarabad", "Taran", "Tardiha", "Targachha", "Tasariya", "Teliya", "Tewarikanari", "Tharhi", "Tharhiara", "Thariara", "Tikait", "Tilaiya", "Tilaiyamajhiana", "Tilaiyatanr", "Tilauna", "Tilbhanga", "Tinghara", "Tisua", "Titmo", "Tiurnagar", "Tiurpahar", "Tulsibaran", "Tumbabel", "Turka", "Udaipur", "Udaipura", "Udaypur", "Upar", "Uparbahinga", "Upardih", "Uparlataran", "Aralgoria", "Baludih", "Bardubhi", "Chakphutaha", "Chirudi", "Dhanbad", "Dhandabar", "Dhobni", "Dhokhra", "Dubrajpur", "Gansadih", "Garblaudi", "Gohinathdih", "Jarma", "Jatudih", "Karitanr", "Kurumdaha", "Lakarkhawari", "Majhiladi", "Manidi", "Parasia", "Petia", "Pondarkanali", "Rajasbera", "Sabaldih", "Sansikhara", "Saraidaha", "Sialgudri", "Tetengabad", "Agartoli", "Angara", "Asri", "Badri", "Baheya", "Bakshidih", "Banpur", "Barkigorang", "Barwadag", "Benadag", "Berwari", "Beti", "Bisa", "Bongaibera", "Buki", "Burhibera", "Chaldag", "Cheldagsoso", "Dhurleta", "Dimra", "Dokad", "Dumargarhi", "Getalsud", "Guridih", "Gutidih", "Hahe", "Hapatbera", "Haratu", "Hesal", "Hesatu", "Heslabera", "Hundru", "Id", "Ikarhatu", "Jamuari", "Janum", "Jaradih", "Jaratoli", "Jarga", "Jaspur", "Jidu", "Jonha", "Kamta", "Kashidih", "Koynardih", "Kuchu", "Ladhuptola", "Lalgarh", "Lepsar", "Lupung", "Malghonghsa", "Masniya", "Masu", "Merha", "Mungadih", "Musangu", "Narayansoso", "Nawagarh", "Obar", "Orwabera", "Pahar", "Paika", "Pailada", "Pertol", "Rajadera", "Rangamati", "Resham", "Rupru", "Saheda", "Salhan", "Sarugori", "Simaliya", "Singari", "Sirka", "Sitadih", "Soso", "Sursu", "Tati", "Turup"],
    
    "Prof" : ["Doctor","Student","School Peon", ,"Havildar", "Traffic Controller", "Air Hostess","Air Traffic Controller","Puppetry Artist","Civil Police", "Toy Repairer","Toy Designer","Terracota Worker","Cobbler","Foam Worker","Gamezone Manager","Gaming Teacher","Compounder","Nurse","Mali","Sutar","Woodworker","Toy Collector","Car Serviceman","Car Washer","Bus Conductor","Truck Driver","Army Officer","Music Composer","Writer","Poet","Story Teller","Software Engineer", "Designer", "3D Animator", "Politician","Ayurvedic Practitioner","Yoga Teacher","Yoga Practitioner","Gym Instructor","Sports Coach","Nutritionist", "Teacher", "Farmer", "Gardener", "Mechanic", "Musician", "Baker", "Glass Manufacturer", "Beautician", "Bangle Maker", "Beads Maker", "Bicycle Repairer", "Blacksmith", "Ferry Conductor", "Book Binder", "Architect", "Builder", "Masonry Worker", "Cable TV Operator", "Trader", "Marketing Professional", "Salesman", "Cane Work", "Carpet Weaver", "Caterer", "Chikankari Worker", "Madhubani Painter","Museum Curator","Cotton Worker","Painter", "Artist", "Cloth Printer", "Artist", "Cultural Artist","Historian","Canteen Owner", "Bartender", "Coaching Service", "Construction Worker", "Courier Manager", "Store Manager", "Dairy Worker", "Data Entry Operator", "Computer Teacher", "Scientist", "Researcher", "Pharmacist", "Physician", "Chemist", "Electrician", "Fireworks Production", "Fisherman", "Flour Mill Owner", "Diamond Cutter", "Jeweller", "Goldsmith", "Handloom Worker", "Health Services", "Driver", "Bus Conductor", "Ticket Collector", "Hotel Manager", "Masala Maker", "House Worker", "Miner", "Newspaper Distributor", "Panwalla", "Home Worker","Papad Maker", "Petrol Pump Worker", "Potter", "Sculptor", "Murti maker", "Quary Worker", "Rickshaw Owner", "Sawmill Worker", "Shepherd", "Soap Manufacturer", "Perfume Salesman", "Tailor", "Police", "Army Officer", "Navy Officer", "Airforce Officer", "Social Worker", "NGO Volunteer", "Sports Shop Owner", "Sportsman", "Mobile Repairer", "Timber Processing", "Furniture Making", "Toddy Tapping", "Toy Making", "Primary Teacher", "Professor", "Welding Service", "Laundry Service", "Tobacco Seller", "Rangoli Maker", "Scrap Services","Municipal Worker","Candle Maker","Diya Maker","Candle Salesman","Architect","Builder","Social Worker"],

    "PassPrefix" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y"],     //Doesnt have Q, X, Z from eng letters

    "Alphabets" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    
    "UPISuffix" : ["jio", "upi", "apl","okhdfcbank", "oksbi", "okaxis", "airtel", "yesbank", "icici", "fbl", "axisb", "okicici", "ikwik", "ibl", "axl", "idfcbank", "waaxis", "wasbi", "hsbc", "kmbl", "paytm", "pnb", "hdfc", "mahb", "kotak", "ubi", "idbi", "cbin", "cnrb", "utbi", "rbl", "aubank", "federal", "uco", "citi", "dbs", "sib", "db", "psb"],

    "RurLandmark" : ["Sanjeevani", "Hanuman", "Venkat", "Appa", "Village", "Dev", "Devi", "Ram", "Shivaji", "Gandhi", "Sardar","Vaishnavi", "Samarpan", "Maruti", "Bhajni", "Veer", "Janki", "Shivam", "Lokmanya", "Chintamani", "Chandra", "Surya", "Ganesha", "Mahavir", "Samaj", "Sadguru", "Vijaya", "Ganga", "Ambika", "Narayan", "Krishna", "Sundaram", "Shree", "Swami", "Laxmi", "Shiva", "Sunder", "Suraj", "Devraya", "Mayur", "Kartik", "Mahalaxmi", "Harsh", "Baba", "Gyan", "Matoshri", "Mata", "Sharda", "Guru", "Rashtra", "Anand", "Bansilal", "Radhe", "Shyam", "Radheshyam", "Mahatma", "Gram"],

    "RurLandmarkSuffix" : [" Hall", " Sabhagruh", " Hospital", " Health Centre", " Mandir", " Temple", " Farm", " Palacee", " Village Shop", " Shop", " Chowk", " Centre", " Statue", " Tirtha", " Nivas", " Sadan", " Baug", " Garden", " Lane", " Galli", " Building", " House", " Colony", " Hotel", " Restaurant", " School", " Shilpa", " Land", " Devasthanam", " Kendra", " Gruh", " Gurukul", " Vidya Mandir", " Bhavan", " Institute"],

    "LandmarkConjunction" : ["Near ", "Behind ", "Opposite ", "Next to ", "Beside ", "Across ", "Near ", "Near ", "Behind ", "", "", "", "", "", "",],

    "RurVillageSuffix" : [" Gram", " Panchayat", " Village", " Gaav", " Pada", "", "", "", "", "", "", "", "", "", ""],

    "RurVillageNearbySuffix" : [" Bazaar", " Railway", " Post", " Tehsil", " BDC", " Block", " Road", " Mandal", " Vibhag", " Nagar", "", "", "", "", "", "", "", "", "", ""],

    "UrbSpotNo" : ["Flat No. ", "House No. ", "Plot No. ", "Shop No. ", "Office No. ", "", "", "", "", "", "", ""],

    "UrbLandmark" : ["Sanjeevani", "Hanuman", "Devi", "Ram", "Shivaji", "Gandhi", "Vaishnavi", "Samarpan", "Maruti", "Bhajni", "Veer", "Janki", "Shivam", "Lokmanya", "Chintamani", "Chandra", "Surya", "Ganesha", "Mahavir", "Vijaya", "Ganga", "Ambika", "Narayan", "Krishna", "Sundaram", "Shree", "Swami", "Laxmi", "Shiva", "Suraj", "Devraya", "Mayur", "Kartik", "Mahalaxmi", "Baba", "Anand", "Bansilal", "Town", "Village", "Arjun", "Prithvi", "Bharat", "Jeevan"],

    "UrbLandmarkSuffix" : [" Hall", " Sabhagruh", " Hospital", " Health Centre", " Temple", " Shop", " Chowk", " Centre", " Statue", " Baug", " Garden", " Lane", " Galli", " Building", " House", " Colony", " Hotel", " Restaurant", " School", " Devasthan", " Kendra", " Factory", " Metro Station", " Bus Station", " Mall", " Shopping Mall", " Complex", " Bakery", " Market", " Karyalaya", " Cafe", " Computer Centre", " Coaching Classes", " Test Centre", " Sports Club", " Park", " College", " Cinema", " Square", " Bank", " Business Park"," Primary School", " Daily Needs", " Pharmacy", " Goods Centre", " Classes", " Cafe", " Institute", " Bhavan"],

    "UrbAreaNo" : ["Sector ", "Ward No. ", "Block No. ", "Part No. ", "Township No. ", "Complex No. ", "Building No. ",  "", "", "", "", "", ""],

    "UrbAreaSuffix" : [" Avenue", " Nagar", " Layout", " Colony", " Garden", " Park", " Enclave", " Co-Op. Society", " City", " Complex", " Plot", " C. H. Society", " Chowk"," Palace", " Square", " Market", " Bazaar", " Line", " Galli", "", "", "", "", "", "", "",],

    "UrbSuburbSuffix" : [" West", " East", " North", " South", " (W)", " (E)", " (N)", " (S)", " Cantt."," Street", " Road", " Township", " Wada", " Wadi", " Bypass", " Mandal", " Camp", " Garh", "", "", "", "", "", "", "","", "", "", "", ""],
    
    "dates" : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],

    "months" : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
}


var generateTableLabelWidth = 78;
var generateTableDataWidth = 275;
var generateTableCellHeight = 26;
var generateTableHeaderHeight = 16;


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
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["RurLandmark"][Math.floor(Math.random()*(dataSet["RurLandmark"].length))];
    let landmarkSuffix = dataSet["RurLandmarkSuffix"][Math.floor(Math.random()*(dataSet["RurLandmarkSuffix"].length))];
    let villageSuffix = dataSet["RurVillageSuffix"][Math.floor(Math.random()*(dataSet["RurVillageSuffix"].length))]; 
    let stateZone = dataSet[`${state}`][2];
    let village1 = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
    let village2 = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
    let villageNearbySuffix = dataSet["RurVillageNearbySuffix"][Math.floor(Math.random()*(dataSet["RurVillageNearbySuffix"].length))]; 
    let pinRemainingDigits = numBetween(10000,99999);
    return `${landmarkConj}${landmark}${landmarkSuffix}, ${village1}${villageSuffix}, ${village2}${villageNearbySuffix}, Dist-${city}, ${state}, Pincode-${stateZone}${pinRemainingDigits}`;
}

function generateRandomUrbAddress(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    let spotNo = dataSet["UrbSpotNo"][Math.floor(Math.random()*(dataSet["UrbSpotNo"].length))];
    let num1 = numBetween(1,99);
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["UrbLandmark"][Math.floor(Math.random()*(dataSet["UrbLandmark"].length))];
    let landmarkSuffix = dataSet["UrbLandmarkSuffix"][Math.floor(Math.random()*(dataSet["UrbLandmarkSuffix"].length))];;
    let areaNameSelectorArray = ["FirstName", "LastName",];
    let areaNameSelector = areaNameSelectorArray[Math.floor(Math.random()*areaNameSelectorArray.length)];
    let areaName = dataSet[`${areaNameSelector}`][Math.floor(Math.random()*(dataSet[`${areaNameSelector}`].length))];
    let areaSuffix = dataSet["UrbAreaSuffix"][Math.floor(Math.random()*(dataSet["UrbAreaSuffix"].length))];
    let areaNo = dataSet["UrbAreaNo"][Math.floor(Math.random()*(dataSet["UrbAreaNo"].length))];
    let num2 = numBetween(1,99);
    let stateZone = dataSet[`${state}`][2];
    let subUrb = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
    let suburbSuffix = dataSet["UrbSuburbSuffix"][Math.floor(Math.random()*(dataSet["UrbSuburbSuffix"].length))];
    let pinRemainingDigits = numBetween(10000,99999);
    return `${spotNo}${num1}, ${landmarkConj}${landmark}${landmarkSuffix}, ${areaName}${areaSuffix}, ${areaNo}${num2}, ${subUrb}${suburbSuffix}, ${city}, ${state}, Pincode-${stateZone}${pinRemainingDigits}`;
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
        generateTableDataWidth = 275;
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
        const stateZone = dataSet[`${stateName}`][2];
        const pinRemainingDigits = numBetween(10000,99999);
        const pinCode = `${stateZone}${pinRemainingDigits}`;
        //Urban Address
        const urbSpotNo = dataSet["UrbSpotNo"][Math.floor(Math.random()*(dataSet["UrbSpotNo"].length))];
        const urbNum1 = numBetween(1,99);
        const urbLandmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
        const urbLandmark = dataSet["UrbLandmark"][Math.floor(Math.random()*(dataSet["UrbLandmark"].length))];
        const urbLandmarkSuffix = dataSet["UrbLandmarkSuffix"][Math.floor(Math.random()*(dataSet["UrbLandmarkSuffix"].length))];
        const urbAreaNameSelectorArray = ["FirstName", "LastName",];
        const urbAreaNameSelector = urbAreaNameSelectorArray[Math.floor(Math.random()*urbAreaNameSelectorArray.length)];
        const urbAreaName = dataSet[`${urbAreaNameSelector}`][Math.floor(Math.random()*(dataSet[`${urbAreaNameSelector}`].length))];
        const urbAreaSuffix = dataSet["UrbAreaSuffix"][Math.floor(Math.random()*(dataSet["UrbAreaSuffix"].length))];
        const urbAreaNo = dataSet["UrbAreaNo"][Math.floor(Math.random()*(dataSet["UrbAreaNo"].length))];
        const urbNum2 = numBetween(1,99);
        const subUrb = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
        const subUrbSuffix = dataSet["UrbSuburbSuffix"][Math.floor(Math.random()*(dataSet["UrbSuburbSuffix"].length))];
        const urbanAddress = `${urbSpotNo}${urbNum1}, ${urbLandmarkConj}${urbLandmark}${urbLandmarkSuffix}, ${urbAreaName}${urbAreaSuffix}, ${urbAreaNo}${urbNum2}, ${subUrb}${subUrbSuffix}, ${cityName}`;
        //Rural address
        const rurLandmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
        const rurLandmark = dataSet["RurLandmark"][Math.floor(Math.random()*(dataSet["RurLandmark"].length))];
        const rurLandmarkSuffix = dataSet["RurLandmarkSuffix"][Math.floor(Math.random()*(dataSet["RurLandmarkSuffix"].length))];
        const rurVillageSuffix = dataSet["RurVillageSuffix"][Math.floor(Math.random()*(dataSet["RurVillageSuffix"].length))]; 
        const rurVillage1 = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
        const rurVillage2 = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
        const rurVillageNearbySffix =  dataSet["RurVillageNearbySuffix"][Math.floor(Math.random()*(dataSet["RurVillageNearbySuffix"].length))]; 
        const ruralAddress = `${rurLandmarkConj}${rurLandmark}${rurLandmarkSuffix}, ${rurVillage1}${rurVillageSuffix}, ${rurVillage2}${rurVillageNearbySffix}, Dist-${cityName}`;
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
    // figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.notify(`Table of ${userCount} users generated successfully.`, {timeout:2500});
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
