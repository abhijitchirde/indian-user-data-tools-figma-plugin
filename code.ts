
figma.loadFontAsync({family: 'Roboto', style: 'Regular'});

//Data space containing arrays of data
const userData = {
    "FirstName" : ["Ram", "Sita", "Shyam", "Bablu"],
    "LastName" : ["Shah", "Khanna", "Singh", "Yadav", "Nair", "Murti"],
    "EmailDomain" : ["gmail", "example", "company", "bharatmail", "india","networks","university","cafezone", "gamers", "zapak", "yahoo", "rediff", "outlook", "metaverse", "miniverse", "times", "fineschool", "fisa", "yupmail", "toursnation"],
    "EmailEnd" : ["com", "in", "co.in", "net", "org", "net.in", "bharat", "biz", "co", "dev", "io"],
    "TradAddress" : [],
    "UrbAddress" : [],
    "City" : ["Pune", "Ner", "Mumbai", "Nagpur"],
    "State" : ["Maharashtra", "Karnataka", "Uttar Pradesh"],
    "Prof" : ["doctor", "engineer", "teacher"]
}


//Show UI on figma canvas
figma.showUI(__html__,{width: 420, height: 455});


//Receiving the button inputs from UI
figma.ui.onmessage = msg => {

    //If input button is not generate this flow will work
    if(msg.type === "Random-details"){

        //Giving notification if no layer is selected
        if(figma.currentPage.selection.length === 0){
            figma.notify("Please select a text layer", {timeout: 1.75, error: true});
        }

        
        //for all the selected nodes
        for(const node of figma.currentPage.selection){

            //Giving notification if selected layer is not text
            if(node.type !== 'TEXT'){
                figma.notify("Please select a text layer", {timeout: 1.75, error: true});
            }

            //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
            setFont(node);
            
            //Calling function to put requested data on text layer
            putTextOnLayer(node, msg.inputValue);

        }
    
    }else if(msg.type === "Generate"){
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

//Define function for generating UID number
function aadharNumber(currentNode){
    let number = numBetween(100000000000, 999999999999);    //Finding a random 12 digit number for UID
    currentNode.characters = `${number}`;
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
        }else if(input === "Email"){
            //Generate email using function
            randomEmail(currentNode);
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


}





