//Made by Abhijit Chirde
//abhijitchirde.com

import { dataSet } from "./data/dataSet";
import {
  generateAadhar,
  generateCIN,
  generateCity,
  generateCityStatePair,
  generateDIN,
  generateDL,
  generateDoB,
  generateEmail,
  generateFirstName,
  generateGSTIN,
  generateLastName,
  generateLLPIN,
  generateMobile,
  generatePAN,
  generatePANi,
  generatePassport,
  generatePINCode,
  generateProf,
  generateRandomUPIn,
  generateRC,
  generateRurAddress,
  generateState,
  generateTAN,
  generateUPIm,
  generateUrbAddress,
  generateVoterID,
} from "./functions/generators";
import {
  loadUserFont,
  numBetween,
  setFont,
  setFontLight,
  setUserFont,
} from "./functions/utils";

figma.loadFontAsync({ family: "Roboto", style: "Regular" });
figma.loadFontAsync({ family: "Roboto", style: "Light" });

//Show UI on figma canvas
figma.showUI(__html__, { width: 380, height: 720 });

var generateTableLabelWidth = 78;
var generateTableDataWidth = 275;
var generateTableCellHeight = 26;
var generateTableHeaderHeight = 16;

loadUserFont();

figma.on("selectionchange", () => {
  loadUserFont();
});

//Receiving the button inputs from UI
figma.ui.onmessage = (msg) => {
  if (msg.type === "get-theme") {
    // Send current Figma theme to UI
    figma.ui.postMessage({
      type: "theme-changed",
      theme: figma.editorType === "figma" ? "light" : "dark", // Figma uses light theme, FigJam uses dark
    });
  }

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
        setUserFont(node);
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

async function generateRandomData(currentNode, msgData) {
  let input = msgData.inputValue;

  //Also adding a TEXT node check initially as characters is only available on that, otherwise it will throw an error

  if (currentNode.type === "TEXT") {
    //If requirement is full-name, we need to attach elements for output
    if (input === "FullName") {
      let first = generateFirstName();
      let last = generateLastName();
      currentNode.characters = `${first} ${last}`;
    } else if (input === "DoB") {
      currentNode.characters = generateDoB();
    } else if (input === "Mobile") {
      currentNode.characters = generateMobile();
    } else if (input === "UID") {
      currentNode.characters = generateAadhar();
    } else if (input === "UPIm") {
      currentNode.characters = generateUPIm();
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
      currentNode.characters = generateDL();
    } else if (input === "RC") {
      currentNode.characters = generateRC();
    } else if (input === "PIN") {
      currentNode.characters = generatePINCode();
    } else if (input === "City") {
      currentNode.characters = generateCity();
    } else if (input === "State") {
      currentNode.characters = generateState();
    } else if (input === "Prof") {
      let profDomain = msgData.profDomain;
      currentNode.characters = generateProf(profDomain);
    } else if (input === "CityState") {
      currentNode.characters = generateCityStatePair();
    } else if (input === "FirstName") {
      currentNode.characters = generateFirstName();
    } else if (input === "LastName") {
      currentNode.characters = generateLastName();
    } else if (input === "RurAddress") {
      currentNode.characters = generateRurAddress();
    } else if (input === "UrbAddress") {
      currentNode.characters = generateUrbAddress();
    } else if (input === "PAN") {
      currentNode.characters = generatePAN();
    } else if (input === "Voter") {
      currentNode.characters = generateVoterID();
    } else if (input === "CIN") {
      currentNode.characters = generateCIN();
    } else if (input === "GSTIN") {
      currentNode.characters = generateGSTIN();
    } else if (input === "DIN") {
      // currentNode.characters = generateRandomDIN();
      currentNode.characters = generateDIN();
    } else if (input === "LLPIN") {
      currentNode.characters = generateLLPIN();
    } else if (input === "PANi") {
      currentNode.characters = generatePANi();
    } else if (input === "TAN") {
      currentNode.characters = generateTAN();
    }
  }
}

//Function for generating a new card with user details and appending it on the canvas
function generateTable(msgData) {
  const nodes: SceneNode[] = [];

  const dataContent = msgData.chkData;

  const userCount = msgData.noOfUsers; //To be used to create data content in later part

  //If addresses are not required, reduce the width of data section
  if (
    dataContent.RurAddressValue === false &&
    dataContent.UrbAddressValue === false
  ) {
    generateTableDataWidth = 135;
  } else if (
    dataContent.RurAddressValue === true ||
    dataContent.UrbAddressValue === true
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
  if (dataContent.FirstNameValue === true) {
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

  if (dataContent.LastNameValue === true) {
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

  if (dataContent.FullNameValue === true) {
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

  if (dataContent.DoBValue === true) {
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

  if (dataContent.EmailValue === true) {
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

  if (dataContent.MobileValue === true) {
    const mobileLabelFrame = figma.createFrame();
    formatLabelFrame(mobileLabelFrame);
    const mobileLabel = figma.createText();
    setFont(mobileLabel);
    mobileLabel.characters = "Mobile";
    formatLabelText(mobileLabel);
    mobileLabelFrame.appendChild(mobileLabel);
    labelSectionHeight += generateTableCellHeight;
    labelSection.appendChild(mobileLabelFrame);
  }

  if (dataContent.ProfValue === true) {
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

  if (dataContent.RurAddressValue === true) {
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

  if (dataContent.UrbAddressValue === true) {
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

  if (dataContent.CityValue === true) {
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

  if (dataContent.StateValue === true) {
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

  if (dataContent.PINValue === true) {
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

  if (dataContent.PassValue === true) {
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

  if (dataContent.UIDValue === true) {
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

  if (dataContent.PANValue === true) {
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

  if (dataContent.UPInValue === true) {
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

  if (dataContent.UPImValue === true) {
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

  if (dataContent.DLValue === true) {
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

  if (dataContent.RCValue === true) {
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

  if (dataContent.VoterValue === true) {
    const voterLabelFrame = figma.createFrame();
    formatLabelFrame(voterLabelFrame);
    const voterLabel = figma.createText();
    setFont(voterLabel);
    voterLabel.characters = "Voter ID";
    formatLabelText(voterLabel);
    voterLabelFrame.appendChild(voterLabel);
    labelSectionHeight += generateTableCellHeight;
    labelSection.appendChild(voterLabelFrame);
  }

  if (dataContent.CINValue === true) {
    const CINLabelFrame = figma.createFrame();
    formatLabelFrame(CINLabelFrame);
    const CINLabel = figma.createText();
    setFont(CINLabel);
    CINLabel.characters = "CIN";
    formatLabelText(CINLabel);
    CINLabelFrame.appendChild(CINLabel);
    labelSectionHeight += generateTableCellHeight;
    labelSection.appendChild(CINLabelFrame);
  }

  if (dataContent.GSTINValue === true) {
    const GSTINLabelFrame = figma.createFrame();
    formatLabelFrame(GSTINLabelFrame);
    const GSTINLabel = figma.createText();
    setFont(GSTINLabel);
    GSTINLabel.characters = "GSTIN";
    formatLabelText(GSTINLabel);
    GSTINLabelFrame.appendChild(GSTINLabel);
    labelSectionHeight += generateTableCellHeight;
    labelSection.appendChild(GSTINLabelFrame);
  }

  if (dataContent.DINValue === true) {
    const DINLabelFrame = figma.createFrame();
    formatLabelFrame(DINLabelFrame);
    const DINLabel = figma.createText();
    setFont(DINLabel);
    DINLabel.characters = "DIN";
    formatLabelText(DINLabel);
    DINLabelFrame.appendChild(DINLabel);
    labelSectionHeight += generateTableCellHeight;
    labelSection.appendChild(DINLabelFrame);
  }

  if (dataContent.LLPINValue === true) {
    const LLPINLabelFrame = figma.createFrame();
    formatLabelFrame(LLPINLabelFrame);
    const LLPINLabel = figma.createText();
    setFont(LLPINLabel);
    LLPINLabel.characters = "LLPIN";
    formatLabelText(LLPINLabel);
    LLPINLabelFrame.appendChild(LLPINLabel);
    labelSectionHeight += generateTableCellHeight;
    labelSection.appendChild(LLPINLabelFrame);
  }

  if (dataContent.TANValue === true) {
    const TANLabelFrame = figma.createFrame();
    formatLabelFrame(TANLabelFrame);
    const TANLabel = figma.createText();
    setFont(TANLabel);
    TANLabel.characters = "TAN";
    formatLabelText(TANLabel);
    TANLabelFrame.appendChild(TANLabel);
    labelSectionHeight += generateTableCellHeight;
    labelSection.appendChild(TANLabelFrame);
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
    const mobileDigits = generateMobile();
    const mobile = `${mobileDigits}`;
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

    // Dob
    const dobContent = generateDoB();

    //Profession
    let userProfession = "";
    if (dataContent.ProfValue === true) {
      let domain = msgData.profDomain;
      userProfession = generateProf(domain);
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

    //Voter ID
    const voterId = generateVoterID();

    // Business IDs
    // CIN
    const listingStatus = ["L", "U"][Math.floor(Math.random() * 2)];
    const industryCode = Math.random().toString().slice(2, 7);
    const year = Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900;
    const companyTypes = ["PLC", "PTC", "OPC"];
    const companyType =
      companyTypes[Math.floor(Math.random() * companyTypes.length)];
    const registrationNumber = Math.random().toString().slice(2, 8);
    const cin = `${listingStatus}${industryCode}${stateInitials}${year}${companyType}${registrationNumber}`;

    // GSTIN
    const stateCode = dataSet[`${stateName}`]; //add statecode here from dataset
    const pani = generatePANi();
    const entityNumber = "1";
    const defaultChar = "Z";
    const checksumChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const checksum = checksumChars.charAt(
      Math.floor(Math.random() * checksumChars.length)
    );
    const gstin = `${stateCode}${pani}${entityNumber}${defaultChar}${checksum}`;

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

    if (dataContent.FirstNameValue === true) {
      const firstnameTextFrame = figma.createFrame();
      formatContentFrame(firstnameTextFrame);
      const firstnameText = figma.createText();
      setFont(firstnameText);
      firstnameText.characters = `${fName}`;
      formatContentText(firstnameText);
      firstnameTextFrame.appendChild(firstnameText);
      dataSection.appendChild(firstnameTextFrame);
    }

    if (dataContent.LastNameValue === true) {
      const lastnameTextFrame = figma.createFrame();
      formatContentFrame(lastnameTextFrame);
      const lastnameText = figma.createText();
      setFont(lastnameText);
      lastnameText.characters = `${lName}`;
      formatContentText(lastnameText);
      lastnameTextFrame.appendChild(lastnameText);
      dataSection.appendChild(lastnameTextFrame);
    }

    if (dataContent.FullNameValue === true) {
      const fullnameTextFrame = figma.createFrame();
      formatContentFrame(fullnameTextFrame);
      const fullnameText = figma.createText();
      setFont(fullnameText);
      fullnameText.characters = `${fullName}`;
      formatContentText(fullnameText);
      fullnameTextFrame.appendChild(fullnameText);
      dataSection.appendChild(fullnameTextFrame);
    }

    if (dataContent.DoBValue === true) {
      const dobTextFrame = figma.createFrame();
      formatContentFrame(dobTextFrame);
      const dobText = figma.createText();
      setFont(dobText);
      dobText.characters = `${dobContent}`;
      formatContentText(dobText);
      dobTextFrame.appendChild(dobText);
      dataSection.appendChild(dobTextFrame);
    }

    if (dataContent.EmailValue === true) {
      const emailTextFrame = figma.createFrame();
      formatContentFrame(emailTextFrame);
      const emailText = figma.createText();
      setFont(emailText);
      emailText.characters = `${userEmail}`;
      formatContentText(emailText);
      emailTextFrame.appendChild(emailText);
      dataSection.appendChild(emailTextFrame);
    }

    if (dataContent.MobileValue === true) {
      const mobileTextFrame = figma.createFrame();
      formatContentFrame(mobileTextFrame);
      const mobileText = figma.createText();
      setFont(mobileText);
      mobileText.characters = `${mobile}`;
      formatContentText(mobileText);
      mobileTextFrame.appendChild(mobileText);
      dataSection.appendChild(mobileTextFrame);
    }

    if (dataContent.ProfValue === true) {
      const professionTextFrame = figma.createFrame();
      formatContentFrame(professionTextFrame);
      const professionText = figma.createText();
      setFont(professionText);
      professionText.characters = `${userProfession}`;
      formatContentText(professionText);
      professionTextFrame.appendChild(professionText);
      dataSection.appendChild(professionTextFrame);
    }

    if (dataContent.RurAddressValue === true) {
      const rurAddressTextFrame = figma.createFrame();
      formatContentFrame(rurAddressTextFrame);
      const rurAddressText = figma.createText();
      setFont(rurAddressText);
      rurAddressText.characters = `${ruralAddress}`;
      formatContentText(rurAddressText);
      rurAddressTextFrame.appendChild(rurAddressText);
      dataSection.appendChild(rurAddressTextFrame);
    }

    if (dataContent.UrbAddressValue === true) {
      const urbAddressTextFrame = figma.createFrame();
      formatContentFrame(urbAddressTextFrame);
      const urbAddressText = figma.createText();
      setFont(urbAddressText);
      urbAddressText.characters = `${urbanAddress}`;
      formatContentText(urbAddressText);
      urbAddressTextFrame.appendChild(urbAddressText);
      dataSection.appendChild(urbAddressTextFrame);
    }

    if (dataContent.CityValue === true) {
      const cityTextFrame = figma.createFrame();
      formatContentFrame(cityTextFrame);
      const cityText = figma.createText();
      setFont(cityText);
      cityText.characters = `${cityName}`;
      formatContentText(cityText);
      cityTextFrame.appendChild(cityText);
      dataSection.appendChild(cityTextFrame);
    }

    if (dataContent.StateValue === true) {
      const stateTextFrame = figma.createFrame();
      formatContentFrame(stateTextFrame);
      const stateText = figma.createText();
      setFont(stateText);
      stateText.characters = `${stateName}`;
      formatContentText(stateText);
      stateTextFrame.appendChild(stateText);
      dataSection.appendChild(stateTextFrame);
    }

    if (dataContent.PINValue === true) {
      const pinTextFrame = figma.createFrame();
      formatContentFrame(pinTextFrame);
      const pinText = figma.createText();
      setFont(pinText);
      pinText.characters = `${pinCode}`;
      formatContentText(pinText);
      pinTextFrame.appendChild(pinText);
      dataSection.appendChild(pinTextFrame);
    }

    if (dataContent.PassValue === true) {
      const passTextFrame = figma.createFrame();
      formatContentFrame(passTextFrame);
      const passText = figma.createText();
      setFont(passText);
      passText.characters = `${passport}`;
      formatContentText(passText);
      passTextFrame.appendChild(passText);
      dataSection.appendChild(passTextFrame);
    }

    if (dataContent.UIDValue === true) {
      const uidTextFrame = figma.createFrame();
      formatContentFrame(uidTextFrame);
      const uidText = figma.createText();
      setFont(uidText);
      uidText.characters = `${UID}`;
      formatContentText(uidText);
      uidTextFrame.appendChild(uidText);
      dataSection.appendChild(uidTextFrame);
    }

    if (dataContent.PANValue === true) {
      const panTextFrame = figma.createFrame();
      formatContentFrame(panTextFrame);
      const panText = figma.createText();
      setFont(panText);
      panText.characters = `${pan}`;
      formatContentText(panText);
      panTextFrame.appendChild(panText);
      dataSection.appendChild(panTextFrame);
    }

    if (dataContent.UPInValue === true) {
      const upinTextFrame = figma.createFrame();
      formatContentFrame(upinTextFrame);
      const upinText = figma.createText();
      setFont(upinText);
      upinText.characters = `${upin}`;
      formatContentText(upinText);
      upinTextFrame.appendChild(upinText);
      dataSection.appendChild(upinTextFrame);
    }

    if (dataContent.UPImValue === true) {
      const upimTextFrame = figma.createFrame();
      formatContentFrame(upimTextFrame);
      const upimText = figma.createText();
      setFont(upimText);
      upimText.characters = `${upim}`;
      formatContentText(upimText);
      upimTextFrame.appendChild(upimText);
      dataSection.appendChild(upimTextFrame);
    }

    if (dataContent.DLValue === true) {
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

    if (dataContent.RCValue === true) {
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
