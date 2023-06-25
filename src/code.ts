//Made by Abhijit Chirde
//abhijitchirde.com

import { dataSet } from "./data/dataSet";

figma.loadFontAsync({ family: "Roboto", style: "Regular" });
figma.loadFontAsync({ family: "Roboto", style: "Light" });

//Show UI on figma canvas
figma.showUI(__html__, { width: 360, height: 550 });

var generateTableLabelWidth = 78;
var generateTableDataWidth = 275;
var generateTableCellHeight = 26;
var generateTableHeaderHeight = 16;

//Receiving the button inputs from UI
figma.ui.onmessage = (msg) => {
  //If input button is not generate this flow will work
  if (msg.type === "generate-random") {
    //Giving notification if no layer is selected
    if (figma.currentPage.selection.length === 0) {
      figma.notify("Please select text layers to add data", { timeout: 1000 });
    }

    let textTypeCount = 0;
    //for all the selected nodes
    for (const node of figma.currentPage.selection) {
      if (node.type === "TEXT") {
        textTypeCount++;
      }
    }

    if (textTypeCount === 0) {
      figma.notify("Please select text layers to add data", { timeout: 1000 });
    } else {
      for (const node of figma.currentPage.selection) {
        generateRandomData(node, msg.data); //Calling function to put requested data on text layer
      }
    }
  }

  if (msg.type === "generate-table") {
    let num = msg.data.noOfUsers;

    if (isNaN(num)) {
      figma.notify("Please enter a number", { timeout: 1000 });
    } else if (num <= 0) {
      figma.notify("Please enter a number greater than 0", { timeout: 1000 });
    } else {
      generateTable(msg.data); //Calling function to create a user data table and append on canvas
    }
  }

  if (msg.type === "disclaimer") {
    figma.notify(
      "This plugin generates sample user data. Any resemblances to real world entities are pure coincidences.",
      { timeout: 4000 }
    );
  }
};

//Setting fontname of selected node
function setFont(currentNode) {
  //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
  if (currentNode.type === "TEXT") {
    currentNode.fontName = { family: "Roboto", style: "Regular" };
  }
}

function setFontLight(currentNode) {
  //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
  if (currentNode.type === "TEXT") {
    currentNode.fontName = { family: "Roboto", style: "Light" };
  }
}

function generateRandomFirstName() {
  let firstName =
    dataSet["FirstName"][
      Math.floor(Math.random() * dataSet["FirstName"].length)
    ];
  return `${firstName}`;
}

function generateRandomLastName() {
  let lastName =
    dataSet["LastName"][Math.floor(Math.random() * dataSet["LastName"].length)];
  return `${lastName}`;
}

//Defining function for finding a number in range (incl low and high)
function numBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

//Define function for generating mobile number
function generateMobileNumber() {
  let number = numBetween(6000000000, 9999999999); //finding a random 10 digit number for mobile
  return `${number}`;
}

//Define function for generating mobile number
function generatePassport() {
  //As per rules seen on https://www.geeksforgeeks.org/how-to-validate-indian-passport-number-using-regular-expression/
  let prefix =
    dataSet["PassPrefix"][
      Math.floor(Math.random() * dataSet["PassPrefix"].length)
    ];
  let num1 = numBetween(1, 9);
  let num2 = numBetween(0, 9);
  let num3 = numBetween(0, 9);
  let num4 = numBetween(0, 9);
  let num5 = numBetween(0, 9);
  let num6 = numBetween(0, 9);
  let num7 = numBetween(1, 9);
  return `${prefix}${num1}${num2}${num3}${num4}${num5}${num6}${num7}`;
}

//Define function for generating UID number
function generateAadhar() {
  let numSet1 = numBetween(1000, 9999);
  let numSet2 = numBetween(1000, 9999);
  let numSet3 = numBetween(1000, 9999);
  return `${numSet1} ${numSet2} ${numSet3}`; //Finding a random 12 digit number for UID. In 3 parts of 4 digits
}

//Define function for generating 16digit VID number
function generateRandomUPIm() {
  let mobileNum = numBetween(6000000000, 9999999999);
  let upiEnd =
    dataSet["UPISuffix"][
      Math.floor(Math.random() * dataSet["UPISuffix"].length)
    ];
  return `${mobileNum}@${upiEnd}`.toLowerCase();
}

//Define function for generating email
function generateEmail(fn, ln, em, end) {
  let forRandom = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "3",
    "3",
    "3",
    "3",
    "4",
    "4",
  ];
  let toss = forRandom[Math.floor(Math.random() * forRandom.length)];
  let email = "";

  if (toss === "1") {
    email = `${fn}.${ln}`;
  } else if (toss === "2") {
    email = `${ln}.${fn}`;
  } else if (toss === "3") {
    email = `${fn}${ln}`;
  } else if (toss === "4") {
    if (fn.length <= 5 && ln.length <= 5) {
      email = `${ln}${fn}`;
    } else if (fn.length <= 5 && ln.length > 5) {
      email = `${fn}${ln[0]}${ln[1]}${ln[2]}${ln[3]}${ln[4]}`;
    } else if (fn.length > 5 && ln.length <= 5) {
      email = `${fn[0]}${fn[1]}${fn[2]}${fn[3]}${fn[4]}${ln}`;
    } else if (fn.length > 5 && ln.length > 5) {
      email = `${fn[0]}${fn[1]}${fn[2]}${fn[3]}${fn[4]}${ln[0]}${ln[1]}${ln[2]}${ln[3]}${ln[4]}`;
    }
  }

  return `${email}@${em}.${end}`.toLowerCase();
}

function generateRandomPINCode() {
  let pinFirst = Math.floor(Math.random() * 8 + 1);
  let pinRemaining = numBetween(10000, 99999); //Finding a random 5 digit number for remaining part of PIN
  return `${pinFirst}${pinRemaining}`;
}

function generateRandomUPIn() {
  let fname =
    dataSet["FirstName"][
      Math.floor(Math.random() * dataSet["FirstName"].length)
    ];
  let lname =
    dataSet["LastName"][Math.floor(Math.random() * dataSet["LastName"].length)];
  let upiEnd =
    dataSet["UPISuffix"][
      Math.floor(Math.random() * dataSet["UPISuffix"].length)
    ];
  return `${fname}${lname}@${upiEnd}`.toLowerCase();
}

function generateRandomCity() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let city =
    dataSet[`${state}`][
      Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3
    ];
  return `${city}`;
}

function generateRandomState() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  return `${state}`;
}

function generateCityStatePair() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let city =
    dataSet[`${state}`][
      Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3
    ];
  return `${city}, ${state}`;
}

function generateRandomRurAddress() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let city =
    dataSet[`${state}`][
      Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3
    ];
  let landmarkConj =
    dataSet["LandmarkConjunction"][
      Math.floor(Math.random() * dataSet["LandmarkConjunction"].length)
    ];
  let landmark =
    dataSet["RurLandmark"][
      Math.floor(Math.random() * dataSet["RurLandmark"].length)
    ];
  let landmarkSuffix =
    dataSet["RurLandmarkSuffix"][
      Math.floor(Math.random() * dataSet["RurLandmarkSuffix"].length)
    ];
  let villageSuffix =
    dataSet["RurVillageSuffix"][
      Math.floor(Math.random() * dataSet["RurVillageSuffix"].length)
    ];
  let stateZone = dataSet[`${state}`][2];
  let village1 =
    dataSet[`${stateZone}villages`][
      Math.floor(Math.random() * dataSet[`${stateZone}villages`].length)
    ];
  let village2 =
    dataSet[`${stateZone}villages`][
      Math.floor(Math.random() * dataSet[`${stateZone}villages`].length)
    ];
  let villageNearbySuffix =
    dataSet["RurVillageNearbySuffix"][
      Math.floor(Math.random() * dataSet["RurVillageNearbySuffix"].length)
    ];
  let pinRemainingDigits = numBetween(10000, 99999);
  return `${landmarkConj}${landmark}${landmarkSuffix}, ${village1}${villageSuffix}, ${village2}${villageNearbySuffix}, Dist-${city}, ${state}, Pincode-${stateZone}${pinRemainingDigits}`;
}

function generateRandomUrbAddress() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let city =
    dataSet[`${state}`][
      Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3
    ];
  let spotNo =
    dataSet["UrbSpotNo"][
      Math.floor(Math.random() * dataSet["UrbSpotNo"].length)
    ];
  let num1 = numBetween(1, 99);
  let landmarkConj =
    dataSet["LandmarkConjunction"][
      Math.floor(Math.random() * dataSet["LandmarkConjunction"].length)
    ];
  let landmark =
    dataSet["UrbLandmark"][
      Math.floor(Math.random() * dataSet["UrbLandmark"].length)
    ];
  let landmarkSuffix =
    dataSet["UrbLandmarkSuffix"][
      Math.floor(Math.random() * dataSet["UrbLandmarkSuffix"].length)
    ];
  let areaNameSelectorArray = ["FirstName", "LastName"];
  let areaNameSelector =
    areaNameSelectorArray[
      Math.floor(Math.random() * areaNameSelectorArray.length)
    ];
  let areaName =
    dataSet[`${areaNameSelector}`][
      Math.floor(Math.random() * dataSet[`${areaNameSelector}`].length)
    ];
  let areaSuffix =
    dataSet["UrbAreaSuffix"][
      Math.floor(Math.random() * dataSet["UrbAreaSuffix"].length)
    ];
  let areaNo =
    dataSet["UrbAreaNo"][
      Math.floor(Math.random() * dataSet["UrbAreaNo"].length)
    ];
  let num2 = numBetween(1, 99);
  let stateZone = dataSet[`${state}`][2];
  let subUrb =
    dataSet[`${stateZone}villages`][
      Math.floor(Math.random() * dataSet[`${stateZone}villages`].length)
    ];
  let suburbSuffix =
    dataSet["UrbSuburbSuffix"][
      Math.floor(Math.random() * dataSet["UrbSuburbSuffix"].length)
    ];
  let pinRemainingDigits = numBetween(10000, 99999);
  return `${spotNo}${num1}, ${landmarkConj}${landmark}${landmarkSuffix}, ${areaName}${areaSuffix}, ${areaNo}${num2}, ${subUrb}${suburbSuffix}, ${city}, ${state}, Pincode-${stateZone}${pinRemainingDigits}`;
}

function generateRandomProf(domain) {
  if (domain === "Random") {
    let domainRan =
      dataSet["RandomSelector"][
        Math.floor(Math.random() * dataSet["RandomSelector"].length)
      ];
    let prof =
      dataSet[`${domainRan}`][
        Math.floor(Math.random() * dataSet[`${domainRan}`].length)
      ];
    return `${prof}`;
  } else {
    let prof =
      dataSet[`${domain}`][
        Math.floor(Math.random() * dataSet[`${domain}`].length)
      ];
    return `${prof}`;
  }
}

function generateRandomDL() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let stateInitials = dataSet[`${state}`][0];
  let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
  let year = numBetween(1980, 2021);
  let lastDigits = numBetween(1000000, 9999999);
  if (rtoDigits < 10) {
    return `${stateInitials}0${rtoDigits}${year}${lastDigits}`;
  } else {
    return `${stateInitials}${rtoDigits}${year}${lastDigits}`;
  }
}

function generateRandomRC() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let stateInitials = dataSet[`${state}`][0];
  let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
  let letter1 =
    dataSet["Alphabets"][
      Math.floor(Math.random() * dataSet["Alphabets"].length)
    ];
  let letter2 =
    dataSet["Alphabets"][
      Math.floor(Math.random() * dataSet["Alphabets"].length)
    ];
  let lastDigits = numBetween(1000, 9999);
  if (rtoDigits < 10) {
    return `${stateInitials}0${rtoDigits}${letter1}${letter2}${lastDigits}`;
  } else {
    return `${stateInitials}${rtoDigits}${letter1}${letter2}${lastDigits}`;
  }
}

function generateRandomDoB() {
  let year = numBetween(1935, 2004);
  let month = dataSet["months"][Math.floor(Math.random() * 12)];
  let date = "";

  if (month === "02") {
    if (year % 4 === 0) {
      date = dataSet["dates"][Math.floor(Math.random() * 29)];
      return `${date}-${month}-${year}`;
    } else {
      date = dataSet["dates"][Math.floor(Math.random() * 28)];
      return `${date}-${month}-${year}`;
    }
  } else if (
    month === "04" ||
    month === "06" ||
    month === "09" ||
    month === "11"
  ) {
    date = dataSet["dates"][Math.floor(Math.random() * 30)];
    return `${date}-${month}-${year}`;
  } else {
    date = dataSet["dates"][Math.floor(Math.random() * 31)];
    return `${date}-${month}-${year}`;
  }
}

function generateRandomAge() {
  let age = numBetween(18, 86);
  return `${age}`;
}

function generateRandomPAN() {
  let letter1 =
    dataSet["Alphabets"][
      Math.floor(Math.random() * dataSet["Alphabets"].length)
    ];
  let letter2 =
    dataSet["Alphabets"][
      Math.floor(Math.random() * dataSet["Alphabets"].length)
    ];
  let letter3 =
    dataSet["Alphabets"][
      Math.floor(Math.random() * dataSet["Alphabets"].length)
    ];
  let letter4 = "P"; //for individual persons as per rules
  let letter5 =
    dataSet["Alphabets"][
      Math.floor(Math.random() * dataSet["Alphabets"].length)
    ]; //Ideally it should be first letter of official name or surname as per rules. Here it can be random
  let digits = numBetween(1000, 9999);
  let lastLetter =
    dataSet["Alphabets"][
      Math.floor(Math.random() * dataSet["Alphabets"].length)
    ];

  return `${letter1}${letter2}${letter3}${letter4}${letter5}${digits}${lastLetter}`;
}

function generateRandomData(currentNode, msgData) {
  let input = msgData.inputValue;

  //Also adding a TEXT node check initially as characters is only available on that, otherwise it will throw an error
  if (currentNode.type === "TEXT") {
    setFont(currentNode);

    //If requirement is full-name, we need to attach elements for output
    if (input === "FullName") {
      let first = generateRandomFirstName();
      let last = generateRandomLastName();
      currentNode.characters = `${first} ${last}`;
    } else if (input === "DoB") {
      currentNode.characters = generateRandomDoB();
    } else if (input === "Age") {
      currentNode.characters = generateRandomAge();
    } else if (input === "Mobile") {
      currentNode.characters = generateMobileNumber();
    } else if (input === "MobileISD") {
      currentNode.characters = "+91" + generateMobileNumber();
    } else if (input === "UID") {
      currentNode.characters = generateAadhar();
    } else if (input === "UPIm") {
      currentNode.characters = generateRandomUPIm();
    } else if (input === "Email") {
      let fn =
        dataSet["FirstName"][
          Math.floor(Math.random() * dataSet["FirstName"].length)
        ];
      let ln =
        dataSet["LastName"][
          Math.floor(Math.random() * dataSet["LastName"].length)
        ];
      let em =
        dataSet["EmailDomain"][
          Math.floor(Math.random() * dataSet["EmailDomain"].length)
        ];
      let end =
        dataSet["EmailEnd"][
          Math.floor(Math.random() * dataSet["EmailEnd"].length)
        ];
      currentNode.characters = generateEmail(fn, ln, em, end);
    } else if (input === "UPIn") {
      currentNode.characters = generateRandomUPIn();
    } else if (input === "Pass") {
      currentNode.characters = generatePassport();
    } else if (input === "DL") {
      currentNode.characters = generateRandomDL();
    } else if (input === "RC") {
      currentNode.characters = generateRandomRC();
    } else if (input === "PIN") {
      currentNode.characters = generateRandomPINCode();
    } else if (input === "City") {
      currentNode.characters = generateRandomCity();
    } else if (input === "State") {
      currentNode.characters = generateRandomState();
    } else if (input === "Prof") {
      let profDomain = msgData.domainInput;
      currentNode.characters = generateRandomProf(profDomain);
    } else if (input === "CityState") {
      currentNode.characters = generateCityStatePair();
    } else if (input === "FirstName") {
      currentNode.characters = generateRandomFirstName();
    } else if (input === "LastName") {
      currentNode.characters = generateRandomLastName();
    } else if (input === "RurAddress") {
      currentNode.characters = generateRandomRurAddress();
    } else if (input === "UrbAddress") {
      currentNode.characters = generateRandomUrbAddress();
    } else if (input === "PAN") {
      currentNode.characters = generateRandomPAN();
    }
  }
}

//Function for generating a new card with user details and appending it on the canvas
function generateTable(msgData) {
  const nodes: SceneNode[] = [];

  const userCount = msgData.noOfUsers; //To be used to create data content in later part

  //If addresses are not required, reduce the width of data section
  if (msgData.RurAddressValue === false && msgData.UrbAddressValue === false) {
    generateTableDataWidth = 135;
  } else if (
    msgData.RurAddressValue === true ||
    msgData.UrbAddressValue === true
  ) {
    generateTableDataWidth = 275;
  }

  const tableFrame = figma.createFrame(); //Creating larger table frame
  tableFrame.layoutMode = "HORIZONTAL"; //Horizontal autolayout
  tableFrame.itemSpacing = 0;
  tableFrame.name = "Indian user data";
  var tableFrameWidth = 0;

  const labelSection = figma.createFrame(); //Section containing labels
  labelSection.layoutMode = "VERTICAL"; //Vertical autolayout
  labelSection.itemSpacing = 0;
  labelSection.name = "Labels";

  var labelSectionHeight = 0; //adjusting label section width and height manually. Need more thoughts on this for optimization

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
  if (msgData.FirstNameValue === true) {
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

  if (msgData.LastNameValue === true) {
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

  if (msgData.FullNameValue === true) {
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

  if (msgData.DoBValue === true) {
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

  if (msgData.AgeValue === true) {
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

  if (msgData.EmailValue === true) {
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

  if (msgData.MobileValue === true) {
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

  if (msgData.ProfValue === true) {
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

  if (msgData.RurAddressValue === true) {
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

  if (msgData.UrbAddressValue === true) {
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

  if (msgData.CityValue === true) {
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

  if (msgData.StateValue === true) {
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

  if (msgData.PINValue === true) {
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

  if (msgData.PassValue === true) {
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

  if (msgData.UIDValue === true) {
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

  if (msgData.PANValue === true) {
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

  if (msgData.UPInValue === true) {
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

  if (msgData.UPImValue === true) {
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

  if (msgData.DLValue === true) {
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

  if (msgData.RCValue === true) {
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
  labelSection.layoutMode = "NONE"; //Removing autolayout from label section before adding to the table
  tableFrameWidth += generateTableLabelWidth;
  const tableFrameHeight = labelSectionHeight; //Height of table will be same as that of label or data section which will be same
  tableFrame.appendChild(labelSection); //Appending label section to the table frame

  // --------------------------------Labels section defining over---------------------------------------------

  //Creating user data content sections using for-loop for number of users requested from input
  for (let i = 1; i <= userCount; i++) {
    //Generate variables of user data from arryas and create const variables, which are then used in creating data content
    //Name related
    const fName =
      dataSet["FirstName"][
        Math.floor(Math.random() * dataSet["FirstName"].length)
      ];
    const lName =
      dataSet["LastName"][
        Math.floor(Math.random() * dataSet["LastName"].length)
      ];
    const fullName = `${fName} ${lName}`;
    //Mobile
    const mobileDigits = generateMobileNumber();
    const mobile = `+91-${mobileDigits}`;
    //Upi related
    const upiEnd1 =
      dataSet["UPISuffix"][
        Math.floor(Math.random() * dataSet["UPISuffix"].length)
      ];
    const upiEnd2 =
      dataSet["UPISuffix"][
        Math.floor(Math.random() * dataSet["UPISuffix"].length)
      ];
    const upin = `${fName}${lName}@${upiEnd1}`.toLowerCase();
    const upim = `${mobileDigits}@${upiEnd2}`.toLowerCase();
    //City, state related
    const stateName =
      dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
    const cityName =
      dataSet[`${stateName}`][
        Math.floor(Math.random() * (dataSet[`${stateName}`].length - 3)) + 3
      ];
    const stateZone = dataSet[`${stateName}`][2];
    const pinRemainingDigits = numBetween(10000, 99999);
    const pinCode = `${stateZone}${pinRemainingDigits}`;
    //Urban Address
    const urbSpotNo =
      dataSet["UrbSpotNo"][
        Math.floor(Math.random() * dataSet["UrbSpotNo"].length)
      ];
    const urbNum1 = numBetween(1, 99);
    const urbLandmarkConj =
      dataSet["LandmarkConjunction"][
        Math.floor(Math.random() * dataSet["LandmarkConjunction"].length)
      ];
    const urbLandmark =
      dataSet["UrbLandmark"][
        Math.floor(Math.random() * dataSet["UrbLandmark"].length)
      ];
    const urbLandmarkSuffix =
      dataSet["UrbLandmarkSuffix"][
        Math.floor(Math.random() * dataSet["UrbLandmarkSuffix"].length)
      ];
    const urbAreaNameSelectorArray = ["FirstName", "LastName"];
    const urbAreaNameSelector =
      urbAreaNameSelectorArray[
        Math.floor(Math.random() * urbAreaNameSelectorArray.length)
      ];
    const urbAreaName =
      dataSet[`${urbAreaNameSelector}`][
        Math.floor(Math.random() * dataSet[`${urbAreaNameSelector}`].length)
      ];
    const urbAreaSuffix =
      dataSet["UrbAreaSuffix"][
        Math.floor(Math.random() * dataSet["UrbAreaSuffix"].length)
      ];
    const urbAreaNo =
      dataSet["UrbAreaNo"][
        Math.floor(Math.random() * dataSet["UrbAreaNo"].length)
      ];
    const urbNum2 = numBetween(1, 99);
    const subUrb =
      dataSet[`${stateZone}villages`][
        Math.floor(Math.random() * dataSet[`${stateZone}villages`].length)
      ];
    const subUrbSuffix =
      dataSet["UrbSuburbSuffix"][
        Math.floor(Math.random() * dataSet["UrbSuburbSuffix"].length)
      ];
    const urbanAddress = `${urbSpotNo}${urbNum1}, ${urbLandmarkConj}${urbLandmark}${urbLandmarkSuffix}, ${urbAreaName}${urbAreaSuffix}, ${urbAreaNo}${urbNum2}, ${subUrb}${subUrbSuffix}, ${cityName}`;
    //Rural address
    const rurLandmarkConj =
      dataSet["LandmarkConjunction"][
        Math.floor(Math.random() * dataSet["LandmarkConjunction"].length)
      ];
    const rurLandmark =
      dataSet["RurLandmark"][
        Math.floor(Math.random() * dataSet["RurLandmark"].length)
      ];
    const rurLandmarkSuffix =
      dataSet["RurLandmarkSuffix"][
        Math.floor(Math.random() * dataSet["RurLandmarkSuffix"].length)
      ];
    const rurVillageSuffix =
      dataSet["RurVillageSuffix"][
        Math.floor(Math.random() * dataSet["RurVillageSuffix"].length)
      ];
    const rurVillage1 =
      dataSet[`${stateZone}villages`][
        Math.floor(Math.random() * dataSet[`${stateZone}villages`].length)
      ];
    const rurVillage2 =
      dataSet[`${stateZone}villages`][
        Math.floor(Math.random() * dataSet[`${stateZone}villages`].length)
      ];
    const rurVillageNearbySffix =
      dataSet["RurVillageNearbySuffix"][
        Math.floor(Math.random() * dataSet["RurVillageNearbySuffix"].length)
      ];
    const ruralAddress = `${rurLandmarkConj}${rurLandmark}${rurLandmarkSuffix}, ${rurVillage1}${rurVillageSuffix}, ${rurVillage2}${rurVillageNearbySffix}, Dist-${cityName}`;
    //Email
    const emailDomain =
      dataSet["EmailDomain"][
        Math.floor(Math.random() * dataSet["EmailDomain"].length)
      ];
    const emailEnd =
      dataSet["EmailEnd"][
        Math.floor(Math.random() * dataSet["EmailEnd"].length)
      ];
    const userEmail = generateEmail(fName, lName, emailDomain, emailEnd);
    // Dob and age
    const dobContent = generateRandomDoB();
    const yearContent =
      dobContent[6] + dobContent[7] + dobContent[8] + dobContent[9];
    const birthYear = parseInt(yearContent, 10);
    const curretTime = new Date();
    const currentYear = curretTime.getFullYear();
    const currentAge = currentYear - birthYear;
    //Profession
    let userProfession = "";
    if (msgData.ProfValue === true) {
      let profDomain = msgData.domainInput;
      userProfession = generateRandomProf(profDomain);
    }

    //DL, RC related
    const stateInitials = dataSet[`${stateName}`][0];
    const rtoDigits = numBetween(1, parseInt(dataSet[`${stateName}`][1], 10));
    const dlYear = numBetween(1980, 2021);
    const dlLastDigits = numBetween(1000000, 9999999);
    const rcLetter1 =
      dataSet["Alphabets"][
        Math.floor(Math.random() * dataSet["Alphabets"].length)
      ];
    const rcLetter2 =
      dataSet["Alphabets"][
        Math.floor(Math.random() * dataSet["Alphabets"].length)
      ];
    const rcEndDigits = numBetween(1000, 9999);
    //Passport
    const passport = generatePassport();
    //UID
    const UID = generateAadhar();
    //PAN
    const panLetter1 =
      dataSet["Alphabets"][
        Math.floor(Math.random() * dataSet["Alphabets"].length)
      ];
    let panLetter2 =
      dataSet["Alphabets"][
        Math.floor(Math.random() * dataSet["Alphabets"].length)
      ];
    let panLetter3 =
      dataSet["Alphabets"][
        Math.floor(Math.random() * dataSet["Alphabets"].length)
      ];
    let panLetter4 = "P";
    let panLetter5 = fName[0];
    let panDigits = numBetween(1000, 9999);
    let panLastLetter =
      dataSet["Alphabets"][
        Math.floor(Math.random() * dataSet["Alphabets"].length)
      ];
    const pan = `${panLetter1}${panLetter2}${panLetter3}${panLetter4}${panLetter5}${panDigits}${panLastLetter}`;

    // --------------------------------Values declaration over---------------------------------------------

    const dataSection = figma.createFrame(); //Section containing data items
    dataSection.layoutMode = "VERTICAL"; //Vertical autolayout
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

    if (msgData.FirstNameValue === true) {
      const firstnameTextFrame = figma.createFrame();
      formatContentFrame(firstnameTextFrame);
      const firstnameText = figma.createText();
      setFont(firstnameText);
      firstnameText.characters = `${fName}`;
      formatContentText(firstnameText);
      firstnameTextFrame.appendChild(firstnameText);
      dataSection.appendChild(firstnameTextFrame);
    }

    if (msgData.LastNameValue === true) {
      const lastnameTextFrame = figma.createFrame();
      formatContentFrame(lastnameTextFrame);
      const lastnameText = figma.createText();
      setFont(lastnameText);
      lastnameText.characters = `${lName}`;
      formatContentText(lastnameText);
      lastnameTextFrame.appendChild(lastnameText);
      dataSection.appendChild(lastnameTextFrame);
    }

    if (msgData.FullNameValue === true) {
      const fullnameTextFrame = figma.createFrame();
      formatContentFrame(fullnameTextFrame);
      const fullnameText = figma.createText();
      setFont(fullnameText);
      fullnameText.characters = `${fullName}`;
      formatContentText(fullnameText);
      fullnameTextFrame.appendChild(fullnameText);
      dataSection.appendChild(fullnameTextFrame);
    }

    if (msgData.DoBValue === true) {
      const dobTextFrame = figma.createFrame();
      formatContentFrame(dobTextFrame);
      const dobText = figma.createText();
      setFont(dobText);
      dobText.characters = `${dobContent}`;
      formatContentText(dobText);
      dobTextFrame.appendChild(dobText);
      dataSection.appendChild(dobTextFrame);
    }

    if (msgData.AgeValue === true) {
      const ageTextFrame = figma.createFrame();
      formatContentFrame(ageTextFrame);
      const ageText = figma.createText();
      setFont(ageText);
      ageText.characters = `${currentAge}`;
      formatContentText(ageText);
      ageTextFrame.appendChild(ageText);
      dataSection.appendChild(ageTextFrame);
    }

    if (msgData.EmailValue === true) {
      const emailTextFrame = figma.createFrame();
      formatContentFrame(emailTextFrame);
      const emailText = figma.createText();
      setFont(emailText);
      emailText.characters = `${userEmail}`;
      formatContentText(emailText);
      emailTextFrame.appendChild(emailText);
      dataSection.appendChild(emailTextFrame);
    }

    if (msgData.MobileValue === true) {
      const mobileTextFrame = figma.createFrame();
      formatContentFrame(mobileTextFrame);
      const mobileText = figma.createText();
      setFont(mobileText);
      mobileText.characters = `${mobile}`;
      formatContentText(mobileText);
      mobileTextFrame.appendChild(mobileText);
      dataSection.appendChild(mobileTextFrame);
    }

    if (msgData.ProfValue === true) {
      const professionTextFrame = figma.createFrame();
      formatContentFrame(professionTextFrame);
      const professionText = figma.createText();
      setFont(professionText);
      professionText.characters = `${userProfession}`;
      formatContentText(professionText);
      professionTextFrame.appendChild(professionText);
      dataSection.appendChild(professionTextFrame);
    }

    if (msgData.RurAddressValue === true) {
      const rurAddressTextFrame = figma.createFrame();
      formatContentFrame(rurAddressTextFrame);
      const rurAddressText = figma.createText();
      setFont(rurAddressText);
      rurAddressText.characters = `${ruralAddress}`;
      formatContentText(rurAddressText);
      rurAddressTextFrame.appendChild(rurAddressText);
      dataSection.appendChild(rurAddressTextFrame);
    }

    if (msgData.UrbAddressValue === true) {
      const urbAddressTextFrame = figma.createFrame();
      formatContentFrame(urbAddressTextFrame);
      const urbAddressText = figma.createText();
      setFont(urbAddressText);
      urbAddressText.characters = `${urbanAddress}`;
      formatContentText(urbAddressText);
      urbAddressTextFrame.appendChild(urbAddressText);
      dataSection.appendChild(urbAddressTextFrame);
    }

    if (msgData.CityValue === true) {
      const cityTextFrame = figma.createFrame();
      formatContentFrame(cityTextFrame);
      const cityText = figma.createText();
      setFont(cityText);
      cityText.characters = `${cityName}`;
      formatContentText(cityText);
      cityTextFrame.appendChild(cityText);
      dataSection.appendChild(cityTextFrame);
    }

    if (msgData.StateValue === true) {
      const stateTextFrame = figma.createFrame();
      formatContentFrame(stateTextFrame);
      const stateText = figma.createText();
      setFont(stateText);
      stateText.characters = `${stateName}`;
      formatContentText(stateText);
      stateTextFrame.appendChild(stateText);
      dataSection.appendChild(stateTextFrame);
    }

    if (msgData.PINValue === true) {
      const pinTextFrame = figma.createFrame();
      formatContentFrame(pinTextFrame);
      const pinText = figma.createText();
      setFont(pinText);
      pinText.characters = `${pinCode}`;
      formatContentText(pinText);
      pinTextFrame.appendChild(pinText);
      dataSection.appendChild(pinTextFrame);
    }

    if (msgData.PassValue === true) {
      const passTextFrame = figma.createFrame();
      formatContentFrame(passTextFrame);
      const passText = figma.createText();
      setFont(passText);
      passText.characters = `${passport}`;
      formatContentText(passText);
      passTextFrame.appendChild(passText);
      dataSection.appendChild(passTextFrame);
    }

    if (msgData.UIDValue === true) {
      const uidTextFrame = figma.createFrame();
      formatContentFrame(uidTextFrame);
      const uidText = figma.createText();
      setFont(uidText);
      uidText.characters = `${UID}`;
      formatContentText(uidText);
      uidTextFrame.appendChild(uidText);
      dataSection.appendChild(uidTextFrame);
    }

    if (msgData.PANValue === true) {
      const panTextFrame = figma.createFrame();
      formatContentFrame(panTextFrame);
      const panText = figma.createText();
      setFont(panText);
      panText.characters = `${pan}`;
      formatContentText(panText);
      panTextFrame.appendChild(panText);
      dataSection.appendChild(panTextFrame);
    }

    if (msgData.UPInValue === true) {
      const upinTextFrame = figma.createFrame();
      formatContentFrame(upinTextFrame);
      const upinText = figma.createText();
      setFont(upinText);
      upinText.characters = `${upin}`;
      formatContentText(upinText);
      upinTextFrame.appendChild(upinText);
      dataSection.appendChild(upinTextFrame);
    }

    if (msgData.UPImValue === true) {
      const upimTextFrame = figma.createFrame();
      formatContentFrame(upimTextFrame);
      const upimText = figma.createText();
      setFont(upimText);
      upimText.characters = `${upim}`;
      formatContentText(upimText);
      upimTextFrame.appendChild(upimText);
      dataSection.appendChild(upimTextFrame);
    }

    if (msgData.DLValue === true) {
      const dlTextFrame = figma.createFrame();
      formatContentFrame(dlTextFrame);
      const dlText = figma.createText();
      setFont(dlText);
      if (rtoDigits < 10) {
        dlText.characters = `${stateInitials}0${rtoDigits}${dlYear}${dlLastDigits}`;
      } else {
        dlText.characters = `${stateInitials}${rtoDigits}${dlYear}${dlLastDigits}`;
      }
      formatContentText(dlText);
      dlTextFrame.appendChild(dlText);
      dataSection.appendChild(dlTextFrame);
    }

    if (msgData.RCValue === true) {
      const rcTextFrame = figma.createFrame();
      formatContentFrame(rcTextFrame);
      const rcText = figma.createText();
      setFont(rcText);
      if (rtoDigits < 10) {
        rcText.characters = `${stateInitials}0${rtoDigits}${rcLetter1}${rcLetter2}${rcEndDigits}`;
      } else {
        rcText.characters = `${stateInitials}${rtoDigits}${rcLetter1}${rcLetter2}${rcEndDigits}`;
      }
      formatContentText(rcText);
      rcTextFrame.appendChild(rcText);
      dataSection.appendChild(rcTextFrame);
    }

    const dataSectionWidth = generateTableDataWidth; //Constant already defined initially
    const dataSectionHeight = labelSectionHeight; //Already calculated in the label section

    dataSection.resize(dataSectionWidth, dataSectionHeight);
    dataSection.layoutMode = "NONE"; //Removing autolayout from data section before adding to the table

    tableFrameWidth += dataSectionWidth;
    tableFrame.appendChild(dataSection); //Appending label section to the table frame
  }

  tableFrame.resize(tableFrameWidth, tableFrameHeight);
  tableFrame.layoutMode = "NONE"; //Removing autolayout from main table frame before adding to canvas

  //Putting the created frame on figma currentpage. Other parameters are used to add card to the scene, and also scroll and zoom to that card
  figma.currentPage.appendChild(tableFrame);
  nodes.push(tableFrame);
  // figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);
  figma.notify(`Table of ${userCount} users generated successfully.`, {
    timeout: 2500,
  });
}

function formatLabelFrame(inputFrameNode) {
  inputFrameNode.resize(generateTableLabelWidth, generateTableCellHeight);
  inputFrameNode.fills = [
    {
      type: "SOLID",
      color: { r: 0.976, g: 0.984, b: 1 },
      // color: { r: 0.96, g: 0.96, b: 0.96 },
    },
  ];
  inputFrameNode.strokes = [
    {
      type: "SOLID",
      color: { r: 0.58, g: 0.698, b: 0.858 },
      // color: { r: 0.6, g: 0.6, b: 0.6 },
    },
  ];
  inputFrameNode.strokeWeight = 0.25;
  inputFrameNode.strokeAlign = "CENTER";
}

function formatContentFrame(inputFrameNode) {
  inputFrameNode.resize(generateTableDataWidth, generateTableCellHeight);
  inputFrameNode.strokes = [
    {
      type: "SOLID",
      color: { r: 0.58, g: 0.698, b: 0.858 },
      // color: { r: 0.6, g: 0.6, b: 0.6},
    },
  ];
  inputFrameNode.strokeWeight = 0.25;
  inputFrameNode.strokeAlign = "CENTER";
}

function formatLabelHeaderFrame(inputFrameNode) {
  inputFrameNode.resize(generateTableLabelWidth, generateTableHeaderHeight);
  inputFrameNode.fills = [
    {
      type: "SOLID",
      color: { r: 0.858, g: 0.925, b: 1 },
    },
  ];
  inputFrameNode.strokes = [
    {
      type: "SOLID",
      color: { r: 0.58, g: 0.698, b: 0.858 },
      // color: { r: 0.6, g: 0.6, b: 0.6 },
    },
  ];
  inputFrameNode.strokeWeight = 0.25;
  inputFrameNode.strokeAlign = "CENTER";
}

function formatUserHeaderFrame(inputFrameNode) {
  inputFrameNode.resize(generateTableDataWidth, generateTableHeaderHeight);
  inputFrameNode.fills = [
    {
      type: "SOLID",
      color: { r: 0.858, g: 0.925, b: 1 },
    },
  ];
  inputFrameNode.strokes = [
    {
      type: "SOLID",
      // color: { r: 0.58, g: 0.698, b: 0.858 },
      color: { r: 0.6, g: 0.6, b: 0.6 },
    },
  ];
  inputFrameNode.strokeWeight = 0.25;
  inputFrameNode.strokeAlign = "CENTER";
}

function formatLabelText(inputTextNode) {
  setFontLight(inputTextNode);
  inputTextNode.fontSize = 8;
  inputTextNode.fills = [
    {
      type: "SOLID",
      color: { r: 0.2, g: 0.2, b: 0.2 },
    },
  ];
  inputTextNode.x += 3;
  inputTextNode.resize(generateTableLabelWidth - 6, generateTableCellHeight);
  inputTextNode.textAlignHorizontal = "LEFT";
  inputTextNode.textAlignVertical = "CENTER";
}

function formatContentText(inputTextNode) {
  setFont(inputTextNode);
  inputTextNode.fontSize = 9;
  inputTextNode.fills = [
    {
      type: "SOLID",
      color: { r: 0.2, g: 0.2, b: 0.2 },
    },
  ];
  inputTextNode.x += 4;
  inputTextNode.resize(generateTableDataWidth - 8, generateTableCellHeight);
  inputTextNode.textAlignHorizontal = "LEFT";
  inputTextNode.textAlignVertical = "CENTER";
}

function formatLabelHeaderText(inputTextNode) {
  setFontLight(inputTextNode);
  inputTextNode.fontSize = 8;
  inputTextNode.fills = [
    {
      type: "SOLID",
      color: { r: 0.2, g: 0.2, b: 0.2 },
    },
  ];
  inputTextNode.x += 3;
  inputTextNode.resize(generateTableLabelWidth - 6, generateTableHeaderHeight);
  inputTextNode.textAlignHorizontal = "LEFT";
  inputTextNode.textAlignVertical = "CENTER";
}

function formatUserHeaderText(inputTextNode) {
  setFontLight(inputTextNode);
  inputTextNode.fontSize = 8;
  inputTextNode.fills = [
    {
      type: "SOLID",
      color: { r: 0.2, g: 0.2, b: 0.2 },
    },
  ];
  inputTextNode.x += 4;
  inputTextNode.resize(generateTableDataWidth - 8, generateTableHeaderHeight);
  inputTextNode.textAlignHorizontal = "LEFT";
  inputTextNode.textAlignVertical = "CENTER";
}
