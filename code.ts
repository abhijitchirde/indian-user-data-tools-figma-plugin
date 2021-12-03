//Made by Abhijit Chirde
//abhijitchirde.com

figma.loadFontAsync({family: 'Roboto', style: 'Regular'});

//Data space containing arrays of data
const dataSet = {

    "FirstName" : ["Ram", "Sita", "Shyam", "Bablu"],

    "LastName" : ["Shah", "Khanna", "Singh", "Yadav", "Nair", "Murti"],

    "EmailDomain" : ["gmail", "example", "company", "mail", "india","networks","university","cafezone", "gamers", "zapak", "yahoo", "rediff", "outlook", "metaverse", "miniverse", "times", "hotmail", "msn", "yupmail", "live", "me", "telecom", "mac", "century", "digital", "aim", "skynet", "symbol"],
    
    "EmailEnd" : ["com", "in", "co.in", "net", "org", "net.in", "biz", "dev", "io", "tech"],

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
    
    "Prof" : ["Doctor", "Software Engineer", "Designer", "3D Animator", "Politician","Ayurvedic Practitioner","Yoga Teacher","Yoga Practitioner","Gym Instructor","Sports Coach","Nutritionist", "Teacher", "Farmer", "Gardener", "Mechanic", "Musician", "Baker", "Glass Manufacturer", "Beautician", "Bangle Maker", "Beads Maker", "Bicycle Repairer", "Blacksmith", "Ferry Conductor", "Book Binder", "Architect", "Builder", "Masonry Worker", "Cable TV Operator", "Trader", "Marketing Professional", "Salesman", "Cane Work", "Carpet Weaver", "Caterer", "Chikankari Worker", "Painter", "Artist", "Cloth Printer", "Artist", "Canteen Owner", "Bartender", "Coaching Service", "Construction Worker", "Courier Manager", "Store Manager", "Dairy Worker", "Data Entry Operator", "Computer Teacher", "Scientist", "Researcher", "Pharmacist", "Physician", "Chemist", "Electrician", "Firework Production", "Fisherman", "Flour Mill Owner", "Diamond Cutter", "Jeweller", "Goldsmith", "Handloom Worker", "Health Servicec", "Driver", "Bus Conductor", "Ticker Collector", "Hotel Manager", "Masala Maker", "House Worker", "Miner", "Newspaper Distributor", "Panwalla", "Papad Maker", "Petrol Pump Worker", "Potter", "Sculptor", "Murti maker", "Quary Worker", "Rickshaw Owner", "Sawmill Worker", "Shepherd", "Soap Manufacturer", "Perfume Salesman", "Tailor", "Police", "Army Officer", "Navy Officer", "Airforce Officer", "Social Worker", "NGO Volunteer", "Sports Shop Owner", "Sportsman", "Mobile Repairer", "Timber Processing", "Furniture Making", "Toddy Tapping", "Toy Making", "Primary Teacher", "Professor", "Welding Service", "Laundry Service", "Tobacco Processing"],

    "PassPrefix" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y"],

    "UPISuffix" : ["jio", "upi", "apl","okhdfcbank", "oksbi", "okaxis", "airtel", "yesbank", "icici", "fbl", "axisb", "okicici", "ikwik", "ibl", "axl", "idfcbank", "waaxis", "wasbi", "hsbc", "kmbl", "paytm", "pnb", "hdfc", "mahb", "kotak", "ubi", "idbi", "cbin", "cnrb", "utbi", "rbl", "aubank", "indux", "federal", "uco", "citi", "dbs", "sib", "db", "psb"]
}


//Show UI on figma canvas
figma.showUI(__html__,{width: 580, height: 600});


//Receiving the button inputs from UI
figma.ui.onmessage = msg => {

    //If input button is not generate this flow will work
    if(msg.type === "Random-details"){

        //Giving notification if no layer is selected
        if(figma.currentPage.selection.length === 0){
            figma.notify("Please select a text layer to add data", {timeout: 1000});
        }
        
        //for all the selected nodes
        for(const node of figma.currentPage.selection){

            //Giving notification if selected layer is not text
            if(node.type !== 'TEXT'){
                figma.notify("Please select a text layer to add data", {timeout: 1000});
            }

            //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
            setFont(node);
            
            //Calling function to put requested data on text layer
            putTextOnLayer(node, msg.inputValue);

        }
    
    }
    
    if(msg.type === "Generate"){
        //Calling function to create a user data card and append on canvas
        generateCard();
    }  
}

//Setting fontname of selected node
function setFont(currentNode){
    if(currentNode.type === "TEXT"){
        currentNode.fontName = {family: 'Roboto', style: 'Regular'};
    }
}

//Function definition to put individual date item on layer based on random array calling
function separateItem(currentNode, input){
    currentNode.characters = dataSet[`${input}`][Math.floor(Math.random()*(dataSet[`${input}`].length))];
}

//Function definition to create a full name by appending first and last name
function generateFullName(currentNode){
    currentNode.characters = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))] + " " + dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
}

//Defining function for finding a number in range
function numBetween(low, high){
    return Math.floor(Math.random() * (high-low)) + low;
}

//Define function for generating mobile number
function generateMobileNumber(currentNode){
    let number = numBetween(6000000000,9999999999);         //finding a random 10 digit number for mobile
    currentNode.characters = "+91" + number;
}

//Define function for generating mobile number
function generatePassport(currentNode){
    //As per rules seen on https://www.geeksforgeeks.org/how-to-validate-indian-passport-number-using-regular-expression/
    let prefix = dataSet["PassPrefix"][Math.floor(Math.random()*(dataSet["PassPrefix"].length))];
    let num1 = numBetween(1,9);
    let num2 = numBetween(0,9);
    let num3 = numBetween(0,9);
    let num4 = numBetween(0,9);
    let num5 = numBetween(0,9);
    let num6 = numBetween(0,9);
    let num7 = numBetween(1,9);
    currentNode.characters = `${prefix}${num1}${num2}${num3}${num4}${num5}${num6}${num7}`;
}

//Define function for generating UID number
function generateAadhar(currentNode){
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999); 
    let numSet3 = numBetween(1000, 9999);          
    currentNode.characters = `${numSet1} ${numSet2} ${numSet3}`;        //Finding a random 12 digit number for UID. In 3 parts of 4 digits
}

//Define function for generating 16digit VID number
function generateAadharVirtual(currentNode){
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999); 
    let numSet3 = numBetween(1000, 9999);
    let numSet4 = numBetween(1000, 9999);             
    currentNode.characters = `${numSet1} ${numSet2} ${numSet3} ${numSet4}`;        //Finding a random 16 digit number for VID. In 4 parts of 4 digits
}

//Define function for generating email
function generateRandomEmail(currentNode){
    let fname = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    let lname = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    let email = dataSet["EmailDomain"][Math.floor(Math.random()*(dataSet["EmailDomain"].length))];
    let emailEnd = dataSet["EmailEnd"][Math.floor(Math.random()*(dataSet["EmailEnd"].length))];
    currentNode.characters = `${fname}.${lname}@${email}.${emailEnd}`.toLowerCase();
}

function generateRandomPINCode(currentNode){
    let pinFirst = Math.floor(Math.random()*8 + 1);
    let pinRemaining = numBetween(10000,99999);             //Finding a random 5 digit number for remaining part of PIN
    currentNode.characters = `${pinFirst}${pinRemaining}`;
}


function generateUPI(currentNode){
    let fname = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    let lname = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    let upiEnd = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];
    //let mobile = numBetween(7000000000,9999999999);
    currentNode.characters = `${fname}${lname}@${upiEnd}`.toLowerCase();
}

function generateCity(currentNode){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    currentNode.characters = `${city}`;
}

function generateCityAndState(currentNode){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    currentNode.characters = `${city}, ${state}`;
}

function generateDL(currentNode){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let stateInitials = dataSet[`${state}`][0];
    let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
    let year = numBetween(1980,2021);
    let lastDigits = numBetween(1000000,9999999);
    if(rtoDigits < 10){
        currentNode.characters = `${stateInitials}0${rtoDigits}${year}${lastDigits}`;
    }else{
        currentNode.characters = `${stateInitials}${rtoDigits}${year}${lastDigits}`;
    }
}

function generateDoB(currentNode){
    let year = numBetween(1950, 2021);
    let month = numBetween(1, 12);
    let date = 0;
    if(month === "02"){
        if(year % 4 === 0){
            date = numBetween(1, 29);
        }else{
            date = numBetween(1, 28);
        }
    }else if(month === 4 || month === 6 || month === 9 || month === 11){
        date = numBetween(1, 30);
    }else{
        date = numBetween(1, 31);
    } 

    if(month < 10 && date < 10){
        currentNode.characters = `0${date}/0${month}/${year}`;
    }else if(month < 10 && date > 10){
        currentNode.characters = `${date}/0${month}/${year}`;
    }else if(month > 10 && date > 10){
        currentNode.characters = `${date}/${month}/${year}`;
    }
    
}

function putTextOnLayer(currentNode, input){
    //Also adding a TEXT node check initially as characters is only available on that, otherwise it will throw an error
    if(currentNode.type === "TEXT"){

        //If requirement is full-name, we need to attach elements for output
        if(input === "FullName"){
            generateFullName(currentNode);
        }
        if(input === "DoB"){
            generateDoB(currentNode);
        }
        else if(input === "Mobile"){
            //Generate mobile number using function
            generateMobileNumber(currentNode);
        }
        else if(input === "UID"){
            //Generate aadhar number using function
            generateAadhar(currentNode);
        }
        else if(input === "VID"){
            //Generate aadhar-virtual number using function
            generateAadharVirtual(currentNode);
        }
        else if(input === "Email"){
            //Generate email using function
            generateRandomEmail(currentNode);
        }
        else if(input === "UPI"){
            //Generate email using function
            generateUPI(currentNode);
        }
        else if(input === "Pass"){
            //Generate email using function
            generatePassport(currentNode);
        }
        else if(input === "DL"){
            //Generate email using function
            generateDL(currentNode);
        }
        else if(input === "PIN"){
            //Generate PIN code using function
            generateRandomPINCode(currentNode);
        }
        else if(input === "City"){
            generateCity(currentNode);
        }
        else if(input === "CityState"){
            generateCityAndState(currentNode);
        }
        //Otherwise for single piece of data from array, we can directly call the dataspace array's random element with help of input messsage as string input. That's why we used msg inputs and array names same, and used arrays as a large object of array
        //This can work for firstname, lastname, city, state, profession
        else{
            separateItem(currentNode, input);
        }
    }
}

//Function for generating a new card with user details and appending it on the canvas
function generateCard(){

    const nodes: SceneNode[] = [];

    const newNode = figma.createFrame();

    //Currently kept the parent frame to 300x200
    newNode.resize(300,200);                            


    //Generate main details of user from arryas and create variables which are dependant on the user names, location (state etc.) to use accross the function
    const fName = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    const lName = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    
    const upiEnd = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];
    const userUPI = `${fName}${lName}@${upiEnd}`.toLowerCase();

    const stateName = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    const cityName = dataSet[`${stateName}`][Math.floor(Math.random()*(dataSet[`${stateName}`].length-3))+3];

    const emailDomain = dataSet["EmailDomain"][Math.floor(Math.random()*(dataSet["EmailDomain"].length))];
    const emailEnd = dataSet["EmailEnd"][Math.floor(Math.random()*(dataSet["EmailEnd"].length))];
    const userEmail = `${fName}.${lName}@${emailDomain}.${emailEnd}`.toLowerCase();

    const userProfession = dataSet["Prof"][Math.floor(Math.random()*(dataSet["Prof"].length))];


    //Generate mobile number and add to frame
    const mobileLabel = figma.createText();
    mobileLabel.characters = "Mobile Number:";
    const mobile = figma.createText();
    generateMobileNumber(mobile);
    newNode.appendChild(mobileLabel);
    newNode.appendChild(mobile);

    //Generate DoB and add to frame
    const dobLabel = figma.createText();
    dobLabel.characters = "Date of Birth:";
    const dob = figma.createText();
    generateDoB(dob);
    newNode.appendChild(dobLabel);
    newNode.appendChild(dob);


    //Generate aadhar number and add to frame
    const aadharLabel = figma.createText();
    aadharLabel.characters = "Aadhar Number (UID):";
    const aadhar = figma.createText();
    generateAadhar(aadhar);
    newNode.appendChild(aadharLabel);
    newNode.appendChild(aadhar);

    //Generate passport number and add to frame
    const passLabel = figma.createText();
    passLabel.characters = "Passport:";
    const pass = figma.createText();
    generatePassport(pass);
    newNode.appendChild(passLabel);
    newNode.appendChild(pass);

    //Generate name and add to frame
    const nameLabel = figma.createText();
    nameLabel.characters = "Name:";
    const name = figma.createText();
    name.characters = `${fName} ${lName}`;
    newNode.appendChild(nameLabel);
    newNode.appendChild(name);

    //Generate email for same name and add to frame
    const emailLabel = figma.createText();
    emailLabel.characters = "Email:";
    const email = figma.createText();
    email.characters = `${userEmail}`;
    newNode.appendChild(emailLabel);
    newNode.appendChild(email);

    //Generate profession and add to frame
    const profLabel = figma.createText();
    profLabel.characters = "Profession:";
    const profession = figma.createText();
    profession.characters = `${userProfession}`;
    newNode.appendChild(profLabel);
    newNode.appendChild(profession);


    //Add address here

    

    //Generate UPI for same name and add to frame
    const upiLabel = figma.createText();
    upiLabel.characters = "UPI Address:";
    const upi = figma.createText();
    upi.characters = `${userUPI}`;
    newNode.appendChild(upiLabel);
    newNode.appendChild(upi);

    //Generate state and add to frame
    const stateLabel = figma.createText();
    stateLabel.characters = "State:";
    const state = figma.createText();
    state.characters = `${stateName}`;
    newNode.appendChild(stateLabel);
    newNode.appendChild(state);

    //Generate city and add to frame (it depends on the stateText generated above)
    const cityLabel = figma.createText();
    cityLabel.characters = "City:";
    const city = figma.createText();
    city.characters = `${cityName}`;
    newNode.appendChild(cityLabel);
    newNode.appendChild(city);

    //Generate PIN (random) for user depending on the state and add to card
    const pinLabel = figma.createText();
    pinLabel.characters = "PIN Code:";
    const pin = figma.createText();
    const pinFirstDigit = dataSet[`${stateName}`][2];
    const pinRemainingDigits = numBetween(10000,99999);
    pin.characters = `${pinFirstDigit}${pinRemainingDigits}`;
    newNode.appendChild(pinLabel);
    newNode.appendChild(pin);

    //Generate user Driving license
    

    //Putting the created frame on figma currentpage. Other parameters are used to add card to the scene, and also scroll and zoom to that card
    figma.currentPage.appendChild(newNode);
    nodes.push(newNode);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
}





