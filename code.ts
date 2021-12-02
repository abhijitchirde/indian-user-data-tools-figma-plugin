
figma.loadFontAsync({family: 'Roboto', style: 'Regular'});

//Data space containing arrays of data
const userData = {
    "FirstName" : ["Ram", "Sita", "Shyam", "Bablu"],

    "LastName" : ["Shah", "Khanna", "Singh", "Yadav", "Nair", "Murti"],

    "EmailDomain" : ["gmail", "example", "company", "bharatmail", "india","networks","university","cafezone", "gamers", "zapak", "yahoo", "rediff", "outlook", "metaverse", "miniverse", "times", "fineschool", "fisa", "yupmail", "toursnation"],
    
    "EmailEnd" : ["com", "in", "co.in", "net", "org", "net.in", "bharat", "biz", "co", "dev", "io"],
    
    "City" : ["Pune", "Ner", "Mumbai", "Nagpur"],

    "State" : ["Maharashtra", "Karnataka", "Uttar Pradesh"],

    "Prof" : ["doctor", "engineer", "teacher"],

    "PassPrefix" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y"],
}


//Show UI on figma canvas
figma.showUI(__html__,{width: 420, height: 550});


//Receiving the button inputs from UI
figma.ui.onmessage = msg => {

    //If input button is not generate this flow will work
    if(msg.type === "Random-details"){

        //Giving notification if no layer is selected
        if(figma.currentPage.selection.length === 0){
            figma.notify("Please select a text layer", {timeout: 1000});
        }

        
        //for all the selected nodes
        for(const node of figma.currentPage.selection){

            //Giving notification if selected layer is not text
            if(node.type !== 'TEXT'){
                figma.notify("Please select a text layer", {timeout: 1000});
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
    currentNode.characters = userData[`${input}`][Math.floor(Math.random()*(userData[`${input}`].length))];
}

//Function definition to create a full name by appending first and last name
function fullName(currentNode){
    currentNode.characters = userData["FirstName"][Math.floor(Math.random()*(userData["FirstName"].length))] + " " + userData["LastName"][Math.floor(Math.random()*(userData["LastName"].length))];
}

//Defining function for finding a number in range
function numBetween(low, high){
    return Math.floor(Math.random() * (high-low)) + low;
}

//Define function for generating mobile number
function mobileNumber(currentNode){
    let number = numBetween(7000000000,9999999999);         //finding a random 10 digit number for mobile
    currentNode.characters = "+91" + number;
}

//Define function for generating mobile number
function passport(currentNode){
    //As per rules seen on https://www.geeksforgeeks.org/how-to-validate-indian-passport-number-using-regular-expression/
    let prefix = userData["PassPrefix"][Math.floor(Math.random()*(userData["PassPrefix"].length))];
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
function aadharNumber(currentNode){
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999); 
    let numSet3 = numBetween(1000, 9999);          
    currentNode.characters = `${numSet1} ${numSet2} ${numSet3}`;        //Finding a random 12 digit number for UID. In 3 parts of 4 digits
}

//Define function for generating 16digit VID number
function aadharVirtual(currentNode){
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999); 
    let numSet3 = numBetween(1000, 9999);
    let numSet4 = numBetween(1000, 9999);             
    currentNode.characters = `${numSet1} ${numSet2} ${numSet3} ${numSet4}`;        //Finding a random 16 digit number for VID. In 4 parts of 4 digits
}

//Define function for generating email
function randomEmail(currentNode){
    let fname = userData["FirstName"][Math.floor(Math.random()*(userData["FirstName"].length))];
    let lname = userData["LastName"][Math.floor(Math.random()*(userData["LastName"].length))];
    let email = userData["EmailDomain"][Math.floor(Math.random()*(userData["EmailDomain"].length))];
    let emailEnd = userData["EmailEnd"][Math.floor(Math.random()*(userData["EmailEnd"].length))];
    currentNode.characters = `${fname}.${lname}@${email}.${emailEnd}`.toLowerCase();
}

function randomPINCode(currentNode){
    let pinFirst = Math.floor(Math.random()*8 + 1);
    let pinRemaining = numBetween(10000,99999);             //Finding a random 5 digit number for remaining part of PIN
    currentNode.characters = `${pinFirst}${pinRemaining}`;
}

function putTextOnLayer(currentNode, input){
    //Also adding a TEXT node check initially as characters is only available on that, otherwise it will throw an error
    if(currentNode.type === "TEXT"){

        //If requirement is full-name, we need to attach elements for output
        if(input === "FullName"){
            fullName(currentNode);
        }else if(input === "Mobile"){
            //Generate mobile number using function
            mobileNumber(currentNode);
        }else if(input === "UID"){
            //Generate aadhar number using function
            aadharNumber(currentNode);
        }else if(input === "VID"){
            //Generate aadhar-virtual number using function
            aadharVirtual(currentNode);
        }
        else if(input === "Email"){
            //Generate email using function
            randomEmail(currentNode);
        }
        else if(input === "Pass"){
            //Generate email using function
            passport(currentNode);
        }else if(input === "PIN"){
            //Generate PIN code using function
            randomPINCode(currentNode);
        }
        //Otherwise for single piece of data from arry, we can directly call the dataspace array's random element with help of input messsage as string input. That's why we used msg inputs and array names same, and used arrays as a large object of array
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

    newNode.resize(300,200);                            //Currently kept the parent frame to 300x200

    //Generate mobile number and add to frame
    const mobileLabel = figma.createText();
    mobileLabel.characters = "Mobile Number:";
    const mobile = figma.createText();
    mobileNumber(mobile);
    newNode.appendChild(mobileLabel);
    newNode.appendChild(mobile);


    //Generate aadhar number and add to frame
    const aadharLabel = figma.createText();
    aadharLabel.characters = "Aadhar Number (UID):";
    const aadhar = figma.createText();
    aadharNumber(aadhar);
    newNode.appendChild(aadharLabel);
    newNode.appendChild(aadhar);

    //Generate passport number and add to frame
    const passLabel = figma.createText();
    passLabel.characters = "Passport:";
    const pass = figma.createText();
    passport(pass);
    newNode.appendChild(passLabel);
    newNode.appendChild(pass);

    //Generate name and add to frame
    const nameLabel = figma.createText();
    nameLabel.characters = "User name:";
    const fName = userData["FirstName"][Math.floor(Math.random()*(userData["FirstName"].length))];
    const lName = userData["LastName"][Math.floor(Math.random()*(userData["LastName"].length))];
    const name = figma.createText();
    name.characters = `${fName} ${lName}`;
    newNode.appendChild(nameLabel);
    newNode.appendChild(name);

    //Generate email for same name and add to frame
    const emailLabel = figma.createText();
    emailLabel.characters = "Email:";
    const email = figma.createText();
    let emailDomain = userData["EmailDomain"][Math.floor(Math.random()*(userData["EmailDomain"].length))];
    let emailEnd = userData["EmailEnd"][Math.floor(Math.random()*(userData["EmailEnd"].length))];
    email.characters = `${fName}.${lName}@${emailDomain}.${emailEnd}`.toLowerCase();
    newNode.appendChild(emailLabel);
    newNode.appendChild(email);

    //Generate profession and add to frame
    const profLabel = figma.createText();
    profLabel.characters = "Profession:";
    const profession = figma.createText();
    profession.characters = userData["Prof"][Math.floor(Math.random()*(userData["Prof"].length))];
    newNode.appendChild(profLabel);
    newNode.appendChild(profession);

    //Generate city and add to frame
    const cityLabel = figma.createText();
    cityLabel.characters = "City:";
    const city = figma.createText();
    city.characters = userData["City"][Math.floor(Math.random()*(userData["City"].length))];
    newNode.appendChild(cityLabel);
    newNode.appendChild(city);

    //Add address here
    



    //Generate state and add to frame
    const stateLabel = figma.createText();
    stateLabel.characters = "State:";
    const state = figma.createText();
    state.characters = userData["State"][Math.floor(Math.random()*(userData["State"].length))];
    newNode.appendChild(stateLabel);
    newNode.appendChild(state);


    //Putting the created frame on figma currentpage. Other parameters are used to add card to the scene, and also scroll and zoom to that card
    figma.currentPage.appendChild(newNode);
    nodes.push(newNode);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
}





