
figma.loadFontAsync({family: 'Roboto', style: 'Regular'});

//Data space containing arrays of data
const userData = {
    "FirstName" : ["Ram", "Sita", "Shyam", "Bablu"],
    "LastName" : ["Shah", "Khanna", "Singh", "Yadav", "Nair", "Murti"],
    "EmailDomain" : ["gmail", "example", "company", "bharat", "india","networks","university","cafezone", "gamers"],
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
    if(msg.type !== "Generate"){
        
        //for all the selected nodes
        for(const node of figma.currentPage.selection){

            //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
            setFont(node);
            
            //Calling function to put requested data on text layer
            putTextOnLayer(node, msg.type);

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

function mobileNumber(currentNode){
    let min = 7000000000;
    let max = 9999999999;
    let number = Math.floor(Math.random()*(max-min) + min);
    currentNode.characters = "+91" + number;
}

function aadharNumber(currentNode){
    let uidMin = 100000000000;
    let uidMax = 999999999999;
    let number = Math.floor(Math.random()*(uidMax-uidMin) + uidMin);
    currentNode.characters = `${number}`;
}

function randomEmail(currentNode){
    let fname = userData["FirstName"][Math.floor(Math.random()*(userData["FirstName"].length))];
    let lname = userData["LastName"][Math.floor(Math.random()*(userData["LastName"].length))];
    let email = userData["EmailDomain"][Math.floor(Math.random()*(userData["EmailDomain"].length))];
    let emailEnd = userData["EmailEnd"][Math.floor(Math.random()*(userData["EmailEnd"].length))];
    let userEmail = `${fname}.${lname}@${email}.${emailEnd}`;
    currentNode.characters = userEmail.toLowerCase();
}

function pinCode(currentNode){
    let pinFirst = Math.floor(Math.random()*9);
    let pinRemainingMin = 10000;
    let pinRemainingMax = 99999;
    let pinRemaining = Math.floor(Math.random()*(pinRemainingMax - pinRemainingMin)+pinRemainingMin);
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
            pinCode(currentNode);
        }
        //Otherwise for single piece of data, we can directly call the dataspace array's random element with help of input messsage as string input. That's why we used msg inputs and array names same, and used arrays as a large object of array
        else{
            separateItem(currentNode, input);
        }
    }
}

//Function for generating a new card with user details and appending it on the canvas
function generateCard(){


}





