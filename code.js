//Made by Abhijit Chirde
//abhijitchirde.com
figma.loadFontAsync({ family: 'Roboto', style: 'Regular' });
figma.loadFontAsync({ family: 'Roboto', style: 'Medium' });
//Data space containing arrays of data
const dataSet = {
    "FirstName": ["Ram", "Sita", "Shyam", "Bablu"],
    "LastName": ["Shah", "Khanna", "Singh", "Yadav", "Nair", "Murti"],
    "EmailDomain": ["gmail", "example", "company", "mail", "india", "networks", "university", "cafezone", "gamers", "zapak", "yahoo", "rediff", "outlook", "metaverse", "miniverse", "times", "hotmail", "msn", "yupmail", "live", "me", "telecom", "mac", "century", "digital", "aim", "skynet", "symbol"],
    "EmailEnd": ["com", "in", "co.in", "net", "org", "net.in", "biz", "dev", "io", "tech"],
    "State": ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamilnadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry", "Ladakh"],
    //In states arrays: first element is short name useful for driving license. Second element is total number of RTOs to be used for getting max value of driving license RTO. Third element is a postal zone number to use as first letter of that state's PINcode series
    "Andhra Pradesh": ["AP", "39", "5", "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Sri Potti Sri Ramulu Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],
    "Arunachal Pradesh": ["AR", "22", "7", "Anjaw", "Changlang", "East", "Siang", "Kurung", "Kumey", "Lohit", "Lower", "Dibang", "Valley", "Lower", "Subansiri", "Papum", "Pare", "Tawang", "Tirap", "Dibang", "Valley", "Upper", "Siang", "Upper", "Subansiri", "West", "Kameng", "West", "Siang"],
    "Assam": ["AS", "34", "7", "Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dima", "Hasao", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat", "Kamrup", "Kamrup", "Metropolitan", "Karbi", "Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Marigaon", "Nagaon", "Nalbari", "Sibsagar", "Sonitpur", "Tinsukia", "Udalguri"],
    "Bihar": ["BR", "57", "8", "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East", "Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West", "Champaran", "Chandigarh"],
    "Chhattisgarh": ["CG", "30", "4", "Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Jashpur", "Janjgir-Champa", "Korba", "Koriya", "Kanker", "Kabirdham", "(Kawardha)", "Mahasamund", "Narayanpur", "Raigarh", "Rajnandgaon", "Raipur", "Surguja"],
    "Dadra and Nagar Haveli": ["DD", "1", "3", "Dadra and Nagar Haveli"],
    "Daman and Diu": ["DD", "3", "3", "Daman", "Diu"],
    "Delhi": ["DL", "13", "1", "Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "South Delhi", "South West Delhi", "West Delhi"],
    "Goa": ["GA", "12", "4", "North Goa", "South Goa"],
    "Gujarat": ["GJ", "38", "3", "Ahmedabad", "Amreli", "Anand", "Banaskantha", "Bharuch", "Bhavnagar", "Dahod", "The Dangs", "Gandhinagar", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mehsana", "Narmada", "Navsari", "Patan", "Panchmahal", "Porbandar", "Rajkot", "Sabarkantha", "Surendranagar", "Surat", "Vyara", "Vadodara", "Valsad"],
    "Haryana": ["HR", "99", "1", "Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hissar", "Jhajjar", "Jind", "Karnal", "Kaithal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamuna Nagar"],
    "Himachal Pradesh": ["HP", "97", "1", "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "Jammu and Kashmir": ["JK", "22", "1", "Anantnag", "Badgam", "Bandipora", "Baramulla", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kupwara", "Kulgam", "Poonch", "Pulwama", "Rajauri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
    "Ladakh": ["LA", "2", "1", "Leh", "Kargil"],
    "Jharkhand": ["JH", "24", "8", "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
    "Karnataka": ["KA", "71", "5", "Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgavi", "Bellary", "Bidar", "Bijapur", "Chamarajnagar", "Chikkamagaluru", "Chikkaballapur", "Chitradurga", "Davanagere", "Dharwad", "Dakshina Kannada", "Gadag", "Gulbarga", "Hassan", "Haveri district", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Ramanagara", "Yadgir"],
    "Kerala": ["KL", "99", "6", "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram", "Wayanad"],
    "Madhya Pradesh": ["MP", "74", "4", "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Rewa", "Rajgarh", "Ratlam", "Raisen", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    "Maharashtra": ["MH", "50", "4", "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Beed", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nandurbar", "Nanded", "Nagpur", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sindhudurg", "Sangli", "Solapur", "Satara", "Thane", "Wardha", "Washim", "Yavatmal"],
    "Manipur": ["MN", "7", "7", "Bishnupur", "Churachandpur", "Chandel", "Imphal East", "Senapati", "Tamenglong", "Thoubal", "Ukhrul", "Imphal West"],
    "Meghalaya": ["ML", "10", "7", "East Garo Hills", "East Khasi Hills", "Jaintia Hills", "Ri Bhoi", "South Garo Hills", "West Garo Hills", "West Khasi Hills"],
    "Mizoram": ["MZ", "8", "7", "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
    "Nagaland": ["NL", "8", "7", "Dimapur", "Kohima", "Mokokchung", "Mon", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    "Odisha": ["OD", "35", "7", "Angul", "Boudh", "Bhadrak", "Balangir", "Bargarh", "Balasore", "Cuttack", "Debagarh", "Dhenkanal", "Ganjam", "Gajapati", "Jharsuguda", "Jajpur", "Jagatsinghpur", "Khordha", "Kendujhar", "Kalahandi", "Kandhamal", "Koraput", "Kendrapara", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nuapada", "Nayagarh", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"],
    "Puducherry": ["PY", "5", "6", "Karaikal", "Mahe", "Puducherry", "Yanam"],
    "Punjab": ["PB", "91", "1", "Amritsar", "Barnala", "Bathinda", "Firozpur", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Mohali", "Sangrur", "Nawanshahr", "Tarn Taran"],
    "Rajasthan": ["RJ", "58", "3", "Ajmer", "Alwar", "Bikaner", "Barmer", "Banswara", "Bharatpur", "Baran", "Bundi", "Bhilwara", "Churu", "Chittorgarh", "Dausa", "Dholpur", "Dungapur", "Ganganagar", "Hanumangarh", "Jhunjhunu", "Jalore", "Jodhpur", "Jaipur", "Jaisalmer", "Jhalawar", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sikar", "SawaiMadhopur", "Sirohi", "Tonk", "Udaipur"],
    "Sikkim": ["SK", "4", "7", "East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    "Tamilnadu": ["TN", "99", "6", "Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Madurai", "Nagapattinam", "Nilgiris", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Tirupur", "Tiruchirappalli", "Theni", "Tirunelveli", "Thanjavur", "Thoothukudi", "Tiruvallur", "Tiruvarur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar"],
    "Telangana": ["TS", "38", "5", "Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Narayanpet", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    "Tripura": ["TR", "8", "7", "Dhalai", "North Tripura", "South Tripura", "Khowai", "West Tripura"],
    "Uttar Pradesh": ["UP", "96", "2", "Agra", "Prayagraj", "Aligarh", "Ambedkar Nagar", "Auraiya", "Ayodhya", "Azamgarh", "Barabanki", "Budaun", "Bagpat", "Bahraich", "Bijnor", "Ballia", "Banda", "Balrampur", "Bareilly", "Basti", "Bulandshahr", "Chandauli", "Chhatrapati Shahuji Maharaj Nagar", "Chitrakoot", "Deoria", "Etah", "Kanshi Ram Nagar", "Etawah", "Firozabad", "Farrukhabad", "Fatehpur", "Gautam Buddh Nagar", "Gonda", "Ghazipur", "Gorakhpur", "Ghaziabad", "Hamirpur", "Hardoi", "Mahamaya Nagar", "Jhansi", "Jalaun", "Jyotiba Phule Nagar", "Jaunpur", "district", "Ramabai Nagar", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", "Lalitpur", "Lakhimpur Kheri", "Lucknow", "Mau", "Meerut", "Maharajganj", "Mahoba", "Mirzapur", "Moradabad", "Mainpuri", "Mathura", "Muzaffarnagar", "Panchsheel Nagar", "Pilibhit", "Shamli", "Pratapgarh", "Rampur", "Raebareli", "Saharanpur", "Sitapur", "Shahjahanpur", "Sant Kabir Nagar", "Siddharthnagar", "Sonbhadra", "Sant Ravidas Nagar", "Sultanpur", "Shravasti", "Unnao", "Varanasi"],
    "Uttarakhand": ["UK", "20", "2", "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    "West Bengal": ["WB", "99", "7", "Birbhum", "Bankura", "Bardhaman", "Darjeeling", "Dakshin Dinajpur", "Hooghly", "Howrah", "Jalpaiguri", "Cooch Behar", "Kolkata", "Maldah", "Paschim Medinipur", "Purba Medinipur", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas", "Purulia", "Uttar Dinajpur"],
    "Andaman and Nicobar": ["AN", "1", "7", "Bakultala", "Bambooflat", "Garacharma", "Port Blair", "Prothrapur", "Nicobar"],
    "Lakshadweep": ["LD", "9", "6", "Amini", "Andrott", "Kadmat", "Kalpeni", "Kavaratti", "Minicoy"],
    "Chandigarh": ["CH", "4", "1", "Chandigarh"],
    "Prof": ["Doctor", "Student", "School Peon", "Havildar", "Traffic Controller", "Civil Police", "Toy Repairer", "Toy Designer", "Terracota Worker", "Cobbler", "Foam Worker", "Gamezone Manager", "Gaming Teacher", "Compounder", "Nurse", "Mali", "Sutar", "Woodworker", "Toy Collector", "Car Serviceman", "Car Washer", "Bus Conductor", "Truck Driver", "Army Officer", "Music Composer", "Writer", "Poet", "Story Teller", "Software Engineer", "Designer", "3D Animator", "Politician", "Ayurvedic Practitioner", "Yoga Teacher", "Yoga Practitioner", "Gym Instructor", "Sports Coach", "Nutritionist", "Teacher", "Farmer", "Gardener", "Mechanic", "Musician", "Baker", "Glass Manufacturer", "Beautician", "Bangle Maker", "Beads Maker", "Bicycle Repairer", "Blacksmith", "Ferry Conductor", "Book Binder", "Architect", "Builder", "Masonry Worker", "Cable TV Operator", "Trader", "Marketing Professional", "Salesman", "Cane Work", "Carpet Weaver", "Caterer", "Chikankari Worker", "Painter", "Artist", "Cloth Printer", "Artist", "Canteen Owner", "Bartender", "Coaching Service", "Construction Worker", "Courier Manager", "Store Manager", "Dairy Worker", "Data Entry Operator", "Computer Teacher", "Scientist", "Researcher", "Pharmacist", "Physician", "Chemist", "Electrician", "Firework Production", "Fisherman", "Flour Mill Owner", "Diamond Cutter", "Jeweller", "Goldsmith", "Handloom Worker", "Health Servicec", "Driver", "Bus Conductor", "Ticker Collector", "Hotel Manager", "Masala Maker", "House Worker", "Miner", "Newspaper Distributor", "Panwalla", "Papad Maker", "Petrol Pump Worker", "Potter", "Sculptor", "Murti maker", "Quary Worker", "Rickshaw Owner", "Sawmill Worker", "Shepherd", "Soap Manufacturer", "Perfume Salesman", "Tailor", "Police", "Army Officer", "Navy Officer", "Airforce Officer", "Social Worker", "NGO Volunteer", "Sports Shop Owner", "Sportsman", "Mobile Repairer", "Timber Processing", "Furniture Making", "Toddy Tapping", "Toy Making", "Primary Teacher", "Professor", "Welding Service", "Laundry Service", "Tobacco Processing"],
    "PassPrefix": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y"],
    "Alphabets": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    "UPISuffix": ["jio", "upi", "apl", "okhdfcbank", "oksbi", "okaxis", "airtel", "yesbank", "icici", "fbl", "axisb", "okicici", "ikwik", "ibl", "axl", "idfcbank", "waaxis", "wasbi", "hsbc", "kmbl", "paytm", "pnb", "hdfc", "mahb", "kotak", "ubi", "idbi", "cbin", "cnrb", "utbi", "rbl", "aubank", "indux", "federal", "uco", "citi", "dbs", "sib", "db", "psb"],
    "RurSpotNo": ["House No.", "Plot No.", "Farm No.", "Shop No."],
    "RurLandmark": ["Hanuman Mandir", "Radhe Shyam mandir", "Life Hospital", "Pipal Tree", "Old Townhall"],
    "LandmarkConjunction": ["Near", "In front of", "Behind", "Opposite", "Next  to"],
    "RurAddressVillage": ["Rampur", "Tenali", "Vijayapura", "Ner", "Shamal"],
    "UrbSpotNo": ["Flat No.", "House No.", "Plot No.", "Shop No.", "Office No."],
    "UrbLandmark": ["Town Hall", "Devi Temple", "City School", "Metro Station", "Airport", "Empire Mall", "Shopping Complex", "Bakery", "Soap Factory"],
    "UrbAreaNo": ["Sector", "Ward No.", "Block No.", "Part No.", "Township No.", "Complex No.", "Building No."],
    "UrbAddressSuburb": ["Airoli", "Kharghar", "Chandni", "Pimpri", "Andheri", "Dumdum", "Marina", "Devghat"],
    "dates": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    "months": ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
};
//Show UI on figma canvas
figma.showUI(__html__, { width: 575, height: 480 });
//Receiving the button inputs from UI
figma.ui.onmessage = msg => {
    //If input button is not generate this flow will work
    if (msg.type === "Random-details") {
        //Giving notification if no layer is selected
        if (figma.currentPage.selection.length === 0) {
            figma.notify("Please select a text layer to add data", { timeout: 1000 });
        }
        //for all the selected nodes
        for (const node of figma.currentPage.selection) {
            //Giving notification if selected layer is not text
            if (node.type !== 'TEXT') {
                figma.notify("Please select a text layer to add data", { timeout: 1000 });
            }
            setFont(node);
            //Calling function to put requested data on text layer
            putTextOnLayer(node, msg.inputValue);
        }
    }
    if (msg.type === "Generate") {
        let num = msg.chkInput.noOfUsers;
        if (isNaN(num)) {
            figma.notify("Please enter a number", { timeout: 1000 });
        }
        else if (num <= 0) {
            figma.notify("Please enter a number greater than 0", { timeout: 1000 });
        }
        else {
            //Calling function to create a user data card and append on canvas
            generateCard(msg.chkInput);
        }
    }
    if (msg.type === 'disclaimer') {
        figma.notify("This plugin generates sample user data. Any resemblance to real world entities is just a coincidence.", { timeout: 4000 });
    }
};
//Setting fontname of selected node
function setFont(currentNode) {
    //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
    if (currentNode.type === "TEXT") {
        currentNode.fontName = { family: 'Roboto', style: 'Regular' };
    }
}
//Function definition to create a full name by appending first and last name
function generateFullName(currentNode) {
    let first = dataSet["FirstName"][Math.floor(Math.random() * (dataSet["FirstName"].length))];
    let last = dataSet["LastName"][Math.floor(Math.random() * (dataSet["LastName"].length))];
    currentNode.characters = `${first} ${last}`;
}
//Defining function for finding a number in range
function numBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}
//Define function for generating mobile number
function generateMobileNumber(currentNode) {
    let number = numBetween(6000000000, 9999999999); //finding a random 10 digit number for mobile
    currentNode.characters = "+91" + number;
}
//Define function for generating mobile number
function generatePassport(currentNode) {
    //As per rules seen on https://www.geeksforgeeks.org/how-to-validate-indian-passport-number-using-regular-expression/
    let prefix = dataSet["PassPrefix"][Math.floor(Math.random() * (dataSet["PassPrefix"].length))];
    let num1 = numBetween(1, 9);
    let num2 = numBetween(0, 9);
    let num3 = numBetween(0, 9);
    let num4 = numBetween(0, 9);
    let num5 = numBetween(0, 9);
    let num6 = numBetween(0, 9);
    let num7 = numBetween(1, 9);
    currentNode.characters = `${prefix}${num1}${num2}${num3}${num4}${num5}${num6}${num7}`;
}
//Define function for generating UID number
function generateAadhar(currentNode) {
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999);
    let numSet3 = numBetween(1000, 9999);
    currentNode.characters = `${numSet1} ${numSet2} ${numSet3}`; //Finding a random 12 digit number for UID. In 3 parts of 4 digits
}
//Define function for generating 16digit VID number
function generateAadharVirtual(currentNode) {
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999);
    let numSet3 = numBetween(1000, 9999);
    let numSet4 = numBetween(1000, 9999);
    currentNode.characters = `${numSet1} ${numSet2} ${numSet3} ${numSet4}`; //Finding a random 16 digit number for VID. In 4 parts of 4 digits
}
//Define function for generating email
function generateRandomEmail(currentNode) {
    let fname = dataSet["FirstName"][Math.floor(Math.random() * (dataSet["FirstName"].length))];
    let lname = dataSet["LastName"][Math.floor(Math.random() * (dataSet["LastName"].length))];
    let email = dataSet["EmailDomain"][Math.floor(Math.random() * (dataSet["EmailDomain"].length))];
    let emailEnd = dataSet["EmailEnd"][Math.floor(Math.random() * (dataSet["EmailEnd"].length))];
    currentNode.characters = `${fname}.${lname}@${email}.${emailEnd}`.toLowerCase();
}
function generateRandomPINCode(currentNode) {
    let pinFirst = Math.floor(Math.random() * 8 + 1);
    let pinRemaining = numBetween(10000, 99999); //Finding a random 5 digit number for remaining part of PIN
    currentNode.characters = `${pinFirst}${pinRemaining}`;
}
function generateRandomUPI(currentNode) {
    let fname = dataSet["FirstName"][Math.floor(Math.random() * (dataSet["FirstName"].length))];
    let lname = dataSet["LastName"][Math.floor(Math.random() * (dataSet["LastName"].length))];
    let upiEnd = dataSet["UPISuffix"][Math.floor(Math.random() * (dataSet["UPISuffix"].length))];
    //let mobile = numBetween(7000000000,9999999999);
    currentNode.characters = `${fname}${lname}@${upiEnd}`.toLowerCase();
}
function generateCity(currentNode) {
    let state = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3];
    currentNode.characters = `${city}`;
}
function generateState(currentNode) {
    let state = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    currentNode.characters = `${state}`;
}
function generateCityAndState(currentNode) {
    let state = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3];
    currentNode.characters = `${city}, ${state}`;
}
function generateRandomRurAddress(currentNode) {
    let spotNo = dataSet["RurSpotNo"][Math.floor(Math.random() * (dataSet["RurSpotNo"].length))];
    let num1 = numBetween(1, 99);
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random() * (dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["RurLandmark"][Math.floor(Math.random() * (dataSet["RurLandmark"].length))];
    let village = dataSet["RurAddressVillage"][Math.floor(Math.random() * (dataSet["RurAddressVillage"].length))];
    let state = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3];
    let pinFirstDigit = dataSet[`${state}`][2];
    let pinRemainingDigits = numBetween(10000, 99999);
    currentNode.characters = `${spotNo} ${num1}, ${landmarkConj} ${landmark}, ${village}, Dist. ${city}, ${state}, Pincode-${pinFirstDigit}${pinRemainingDigits}`;
}
function generateRandomUrbAddress(currentNode) {
    let spotNo = dataSet["UrbSpotNo"][Math.floor(Math.random() * (dataSet["UrbSpotNo"].length))];
    let num1 = numBetween(1, 99);
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random() * (dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["UrbLandmark"][Math.floor(Math.random() * (dataSet["UrbLandmark"].length))];
    let areaNo = dataSet["UrbAreaNo"][Math.floor(Math.random() * (dataSet["UrbAreaNo"].length))];
    let num2 = numBetween(1, 99);
    let subUrb = dataSet["UrbAddressSuburb"][Math.floor(Math.random() * (dataSet["UrbAddressSuburb"].length))];
    let state = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3];
    let pinFirstDigit = dataSet[`${state}`][2];
    let pinRemainingDigits = numBetween(10000, 99999);
    currentNode.characters = `${spotNo} ${num1}, ${landmarkConj} ${landmark}, ${areaNo} ${num2}, ${subUrb}, ${city}, ${state}, Pincode-${pinFirstDigit}${pinRemainingDigits}`;
}
function generateProf(currentNode) {
    let prof = dataSet["Prof"][Math.floor(Math.random() * (dataSet["Prof"].length))];
    currentNode.characters = `${prof}`;
}
function generateFirstName(currentNode) {
    let firstName = dataSet["FirstName"][Math.floor(Math.random() * (dataSet["FirstName"].length))];
    currentNode.characters = `${firstName}`;
}
function generateLastName(currentNode) {
    let lastName = dataSet["LastName"][Math.floor(Math.random() * (dataSet["LastName"].length))];
    currentNode.characters = `${lastName}`;
}
function generateRandomDL(currentNode) {
    let state = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    let stateInitials = dataSet[`${state}`][0];
    let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
    let year = numBetween(1980, 2021);
    let lastDigits = numBetween(1000000, 9999999);
    if (rtoDigits < 10) {
        currentNode.characters = `${stateInitials}0${rtoDigits}${year}${lastDigits}`;
    }
    else {
        currentNode.characters = `${stateInitials}${rtoDigits}${year}${lastDigits}`;
    }
}
function generateRandomRC(currentNode) {
    let state = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    let stateInitials = dataSet[`${state}`][0];
    let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
    let letter1 = dataSet["Alphabets"][Math.floor(Math.random() * (dataSet["Alphabets"].length))];
    let letter2 = dataSet["Alphabets"][Math.floor(Math.random() * (dataSet["Alphabets"].length))];
    let lastDigits = numBetween(1000, 9999);
    if (rtoDigits < 10) {
        currentNode.characters = `${stateInitials}0${rtoDigits}${letter1}${letter2}${lastDigits}`;
    }
    else {
        currentNode.characters = `${stateInitials}${rtoDigits}${letter1}${letter2}${lastDigits}`;
    }
}
function generateRandomDoB() {
    let year = numBetween(1935, 2006);
    let month = dataSet["months"][Math.floor(Math.random() * 12)];
    let date = "";
    if (month === "02") {
        if (year % 4 === 0) {
            date = dataSet["dates"][Math.floor(Math.random() * 29)];
            return `${date}/${month}/${year}`;
        }
        else {
            date = dataSet["dates"][Math.floor(Math.random() * 28)];
            return `${date}/${month}/${year}`;
        }
    }
    else if (month === "04" || month === "06" || month === "09" || month === "11") {
        date = dataSet["dates"][Math.floor(Math.random() * 30)];
        return `${date}-${month}-${year}`;
    }
    else {
        date = dataSet["dates"][Math.floor(Math.random() * 31)];
        return `${date}-${month}-${year}`;
    }
}
function generateRandomAge(currentNode) {
    let age = numBetween(15, 86);
    currentNode.characters = `${age}`;
}
function putTextOnLayer(currentNode, input) {
    //Also adding a TEXT node check initially as characters is only available on that, otherwise it will throw an error
    if (currentNode.type === "TEXT") {
        //If requirement is full-name, we need to attach elements for output
        if (input === "FullName") {
            generateFullName(currentNode);
        }
        else if (input === "DoB") {
            currentNode.characters = generateRandomDoB();
        }
        else if (input === "Age") {
            generateRandomAge(currentNode);
        }
        else if (input === "Mobile") {
            //Generate mobile number using function
            generateMobileNumber(currentNode);
        }
        else if (input === "UID") {
            //Generate aadhar number using function
            generateAadhar(currentNode);
        }
        else if (input === "VID") {
            //Generate aadhar-virtual number using function
            generateAadharVirtual(currentNode);
        }
        else if (input === "Email") {
            //Generate email using function
            generateRandomEmail(currentNode);
        }
        else if (input === "UPI") {
            //Generate email using function
            generateRandomUPI(currentNode);
        }
        else if (input === "Pass") {
            //Generate email using function
            generatePassport(currentNode);
        }
        else if (input === "DL") {
            //Generate email using function
            generateRandomDL(currentNode);
        }
        else if (input === "RC") {
            //Generate email using function
            generateRandomRC(currentNode);
        }
        else if (input === "PIN") {
            //Generate PIN code using function
            generateRandomPINCode(currentNode);
        }
        else if (input === "City") {
            generateCity(currentNode);
        }
        else if (input === "State") {
            generateState(currentNode);
        }
        else if (input === "Prof") {
            generateProf(currentNode);
        }
        else if (input === "CityState") {
            generateCityAndState(currentNode);
        }
        else if (input === "FirstName") {
            generateFirstName(currentNode);
        }
        else if (input === "LastName") {
            generateLastName(currentNode);
        }
        else if (input === "RurAddress") {
            generateRandomRurAddress(currentNode);
        }
        else if (input === "UrbAddress") {
            generateRandomUrbAddress(currentNode);
        }
    }
}
//Function for generating a new card with user details and appending it on the canvas
function generateCard(incomingMsg) {
    const userCount = incomingMsg.noOfUsers;
    //Code block to generate user details labels as it needs to be generated at least once
    if (incomingMsg.FirstNameValue === true) {
        const firstnameLabel = figma.createText();
        firstnameLabel.characters = "First Name";
        cardLabelTextStyle(firstnameLabel);
    }
    if (incomingMsg.LastNameValue === true) {
        const lastnameLabel = figma.createText();
        lastnameLabel.characters = "Last Name";
        cardLabelTextStyle(lastnameLabel);
    }
    if (incomingMsg.FullNameValue === true) {
        const nameLabel = figma.createText();
        nameLabel.characters = "Name";
        cardLabelTextStyle(nameLabel);
    }
    if (incomingMsg.MobileValue === true) {
        const mobileLabel = figma.createText();
        mobileLabel.characters = "Mobile Number";
        cardLabelTextStyle(mobileLabel);
    }
    if (incomingMsg.DoBValue === true) {
        const dobLabel = figma.createText();
        dobLabel.characters = "Date of Birth";
        cardLabelTextStyle(dobLabel);
    }
    if (incomingMsg.AgeValue === true) {
        const ageLabel = figma.createText();
        ageLabel.characters = "Age";
        cardLabelTextStyle(ageLabel);
    }
    if (incomingMsg.UIDValue === true) {
        const aadharLabel = figma.createText();
        aadharLabel.characters = "Aadhar Number (UID)";
        cardLabelTextStyle(aadharLabel);
    }
    if (incomingMsg.PassValue === true) {
        const passLabel = figma.createText();
        passLabel.characters = "Passport";
        cardLabelTextStyle(passLabel);
    }
    if (incomingMsg.EmailValue === true) {
        const emailLabel = figma.createText();
        emailLabel.characters = "Email";
        cardLabelTextStyle(emailLabel);
    }
    if (incomingMsg.ProfValue === true) {
        const profLabel = figma.createText();
        profLabel.characters = "Profession";
        cardLabelTextStyle(profLabel);
    }
    if (incomingMsg.UPIValue === true) {
        const upiLabel = figma.createText();
        upiLabel.characters = "UPI Address";
        cardLabelTextStyle(upiLabel);
    }
    if (incomingMsg.StateValue === true) {
        const stateLabel = figma.createText();
        stateLabel.characters = "State";
        cardLabelTextStyle(stateLabel);
    }
    if (incomingMsg.CityValue === true) {
        const cityLabel = figma.createText();
        cityLabel.characters = "City";
        cardLabelTextStyle(cityLabel);
    }
    if (incomingMsg.PINValue === true) {
        const pinLabel = figma.createText();
        pinLabel.characters = "PIN Code";
        cardLabelTextStyle(pinLabel);
    }
    if (incomingMsg.DLValue === true) {
        const dlLabel = figma.createText();
        dlLabel.characters = "Driving License";
        cardLabelTextStyle(dlLabel);
    }
    if (incomingMsg.RCValue === true) {
        const rcLabel = figma.createText();
        rcLabel.characters = "Vehicle Registration";
        cardLabelTextStyle(rcLabel);
    }
    //Add rural and urban address labels here
    for (let i = 0; i < userCount; i++) {
        //code to generate user details. It will run the total number of times as entered by user for noOfUsers
    }
    //Generate main details of user from arryas and create const variables which are dependant on the user names, location (state etc.) to use accross the function
    const fName = dataSet["FirstName"][Math.floor(Math.random() * (dataSet["FirstName"].length))];
    const lName = dataSet["LastName"][Math.floor(Math.random() * (dataSet["LastName"].length))];
    const upiEnd = dataSet["UPISuffix"][Math.floor(Math.random() * (dataSet["UPISuffix"].length))];
    const userUPI = `${fName}${lName}@${upiEnd}`.toLowerCase();
    const stateName = dataSet["State"][Math.floor(Math.random() * (dataSet["State"].length))];
    const cityName = dataSet[`${stateName}`][Math.floor(Math.random() * (dataSet[`${stateName}`].length - 3)) + 3];
    const emailDomain = dataSet["EmailDomain"][Math.floor(Math.random() * (dataSet["EmailDomain"].length))];
    const emailEnd = dataSet["EmailEnd"][Math.floor(Math.random() * (dataSet["EmailEnd"].length))];
    const userEmail = `${fName}.${lName}@${emailDomain}.${emailEnd}`.toLowerCase();
    const userProfession = dataSet["Prof"][Math.floor(Math.random() * (dataSet["Prof"].length))];
    const stateInitials = dataSet[`${stateName}`][0];
    const rtoDigits = numBetween(1, parseInt(dataSet[`${stateName}`][1], 10));
    const dobText = generateRandomDoB();
    const nodes = [];
    const newNode = figma.createFrame();
    newNode.resize(300, 200); //Currently kept the parent frame to 300x200        
    if (incomingMsg.MobileValue === true) {
        //Generate mobile number and add to frame
        const mobile = figma.createText();
        generateMobileNumber(mobile);
        cardContentTextStyle(mobile);
        newNode.appendChild(mobile);
    }
    if (incomingMsg.DoBValue === true) {
        const dob = figma.createText();
        dob.characters = dobText;
        cardContentTextStyle(dob);
        newNode.appendChild(dob);
    }
    if (incomingMsg.AgeValue === true) {
        const age = figma.createText();
        const yearText = dobText[6] + dobText[7] + dobText[8] + dobText[9];
        const birthYear = parseInt(yearText, 10);
        const curretTime = new Date();
        const currentYear = curretTime.getFullYear();
        const currentAge = currentYear - birthYear;
        age.characters = `${currentAge}`;
        cardContentTextStyle(age);
        newNode.appendChild(age);
    }
    if (incomingMsg.UIDValue === true) {
        const aadhar = figma.createText();
        generateAadhar(aadhar);
        cardContentTextStyle(aadhar);
        newNode.appendChild(aadhar);
    }
    if (incomingMsg.PassValue === true) {
        const pass = figma.createText();
        generatePassport(pass);
        cardContentTextStyle(pass);
        newNode.appendChild(pass);
    }
    if (incomingMsg.FullNameValue === true) {
        const name = figma.createText();
        name.characters = `${fName} ${lName}`;
        cardContentTextStyle(name);
        newNode.appendChild(name);
    }
    if (incomingMsg.FirstNameValue === true) {
        const firstname = figma.createText();
        firstname.characters = `${fName}`;
        cardContentTextStyle(firstname);
        newNode.appendChild(firstname);
    }
    if (incomingMsg.LastNameValue === true) {
        const lastname = figma.createText();
        lastname.characters = `${lName}`;
        cardContentTextStyle(lastname);
        newNode.appendChild(lastname);
    }
    if (incomingMsg.EmailValue === true) {
        const email = figma.createText();
        email.characters = `${userEmail}`;
        cardContentTextStyle(email);
        newNode.appendChild(email);
    }
    if (incomingMsg.ProfValue === true) {
        const profession = figma.createText();
        profession.characters = `${userProfession}`;
        cardContentTextStyle(profession);
        newNode.appendChild(profession);
    }
    //Add Rur and urban address here
    if (incomingMsg.UPIValue === true) {
        const upi = figma.createText();
        upi.characters = `${userUPI}`;
        cardContentTextStyle(upi);
        newNode.appendChild(upi);
    }
    if (incomingMsg.StateValue === true) {
        const state = figma.createText();
        state.characters = `${stateName}`;
        cardContentTextStyle(state);
        newNode.appendChild(state);
    }
    if (incomingMsg.CityValue === true) {
        const city = figma.createText();
        city.characters = `${cityName}`;
        cardContentTextStyle(city);
        newNode.appendChild(city);
    }
    if (incomingMsg.PINValue === true) {
        const pin = figma.createText();
        const pinFirstDigit = dataSet[`${stateName}`][2];
        const pinRemainingDigits = numBetween(10000, 99999);
        pin.characters = `${pinFirstDigit}${pinRemainingDigits}`;
        cardContentTextStyle(pin);
        newNode.appendChild(pin);
    }
    if (incomingMsg.DLValue === true) {
        const dl = figma.createText();
        const licenseYear = numBetween(1980, 2021);
        const lastDigits = numBetween(1000000, 9999999);
        if (rtoDigits < 10) {
            dl.characters = `${stateInitials}0${rtoDigits}${licenseYear}${lastDigits}`;
        }
        else {
            dl.characters = `${stateInitials}${rtoDigits}${licenseYear}${lastDigits}`;
        }
        cardContentTextStyle(dl);
        newNode.appendChild(dl);
    }
    if (incomingMsg.RCValue === true) {
        const rc = figma.createText();
        const letter1 = dataSet["Alphabets"][Math.floor(Math.random() * (dataSet["Alphabets"].length))];
        const letter2 = dataSet["Alphabets"][Math.floor(Math.random() * (dataSet["Alphabets"].length))];
        const endDigits = numBetween(1000, 9999);
        if (rtoDigits < 10) {
            rc.characters = `${stateInitials}0${rtoDigits}${letter1}${letter2}${endDigits}`;
        }
        else {
            rc.characters = `${stateInitials}${rtoDigits}${letter1}${letter2}${endDigits}`;
        }
        cardContentTextStyle(rc);
        newNode.appendChild(rc);
    }
    //Testing autolayout possibilities. Working!
    // const newTestNode = figma.createFrame();
    // newTestNode.appendChild(rcLabel);
    // newTestNode.appendChild(rc);
    // newTestNode.layoutMode = "VERTICAL";
    // newTestNode.itemSpacing = 15;
    // figma.currentPage.appendChild(newTestNode);
    // nodes.push(newTestNode);
    //Putting the created frame on figma currentpage. Other parameters are used to add card to the scene, and also scroll and zoom to that card
    figma.currentPage.appendChild(newNode);
    nodes.push(newNode);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
}
function cardLabelTextStyle(inputNode) {
    inputNode.fontSize = 10;
    inputNode.fills = [
        {
            type: "SOLID",
            color: { r: 0.5, g: 0.5, b: 0.5 },
        }
    ];
}
function cardContentTextStyle(inputNode) {
    inputNode.fontSize = 14;
    inputNode.fills = [
        {
            type: "SOLID",
            color: { r: 0.4, g: 0.6, b: 0.7 },
        }
    ];
}
