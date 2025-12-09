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
  generateRC,
  generateRCBH,
  generateRurAddress,
  generateState,
  generateTAN,
  generateUPIm,
  generateUPIn,
  generateUrbAddress,
  generateVoterID,
} from "./functions/generators";
import {
  loadUserFont,
  setFont,
  setFontLight,
  setUserFont,
} from "./functions/utils";

figma.loadFontAsync({ family: "Roboto", style: "Regular" });
figma.loadFontAsync({ family: "Roboto", style: "Light" });

//Show UI on figma canvas
figma.showUI(__html__, { width: 360, height: 620 });

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
    // Figma and Slides use light theme, FigJam and Buzz use dark theme
    const isLightTheme =
      figma.editorType === "figma" || figma.editorType === "slides";
    figma.ui.postMessage({
      type: "theme-changed",
      theme: isLightTheme ? "light" : "dark",
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

  if (msg.type === "export-json") {
    let num = msg.data.noOfUsers;

    if (isNaN(num)) {
      figma.notify("Please enter a number", { timeout: 1000 });
    } else if (num <= 0) {
      figma.notify("Please enter a number greater than 0", { timeout: 1000 });
    } else {
      const jsonData = generateJSON(msg.data);
      figma.ui.postMessage({
        type: "json-export-ready",
        data: jsonData,
      });
      figma.notify(`JSON export for ${num} user(s) generated successfully.`, {
        timeout: 2500,
      });
    }
  }

  if (msg.type === "export-csv") {
    let num = msg.data.noOfUsers;

    if (isNaN(num)) {
      figma.notify("Please enter a number", { timeout: 1000 });
    } else if (num <= 0) {
      figma.notify("Please enter a number greater than 0", { timeout: 1000 });
    } else {
      const csvData = generateCSV(msg.data);
      figma.ui.postMessage({
        type: "csv-export-ready",
        data: csvData,
      });
      figma.notify(`CSV export for ${num} user(s) generated successfully.`, {
        timeout: 2500,
      });
    }
  }

  if (msg.type === "disclaimer") {
    figma.notify(
      "This plugin generates sample user data offline. Any resemblances to real world entities are pure unintentional coincidences.",
      { timeout: 4000 }
    );
  }
};

async function generateRandomData(currentNode, msgData) {
  let input = msgData.inputValue;

  //Also adding a TEXT node check initially as characters is only available on that, otherwise it will throw an error

  if (currentNode.type === "TEXT") {
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
      currentNode.characters = generateEmail();
    } else if (input === "UPIn") {
      currentNode.characters = generateUPIn();
    } else if (input === "Pass") {
      currentNode.characters = generatePassport();
    } else if (input === "DL") {
      currentNode.characters = generateDL();
    } else if (input === "RC") {
      currentNode.characters = generateRC();
    } else if (input === "RCBH") {
      currentNode.characters = generateRCBH();
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

// ============================================================================
// HELPER FUNCTIONS FOR TABLE GENERATION
// ============================================================================

/**
 * Configuration mapping for all data fields
 * Maps data field keys to their display labels
 */
type FieldConfig = {
  key: string;
  label: string;
};

const TABLE_FIELD_CONFIG: FieldConfig[] = [
  { key: "FirstNameValue", label: "First Name" },
  { key: "LastNameValue", label: "Last Name" },
  { key: "FullNameValue", label: "Full Name" },
  { key: "DoBValue", label: "Date of Birth" },
  { key: "EmailValue", label: "Email" },
  { key: "MobileValue", label: "Mobile" },
  { key: "ProfValue", label: "Profession" },
  { key: "RurAddressValue", label: "Rural Address" },
  { key: "UrbAddressValue", label: "Urban Address" },
  { key: "CityValue", label: "City" },
  { key: "StateValue", label: "State" },
  { key: "PINValue", label: "PIN Code" },
  { key: "PassValue", label: "Passport" },
  { key: "UIDValue", label: "UID (Aadhar)" },
  { key: "PANValue", label: "PAN (Personal)" },
  { key: "UPInValue", label: "UPI (name)" },
  { key: "UPImValue", label: "UPI (mobile)" },
  { key: "DLValue", label: "Driving License" },
  { key: "RCValue", label: "Vehicle Reg. (RC)" },
  { key: "RCBHValue", label: "Vehicle Reg. (BH series)" },
  { key: "VoterValue", label: "Voter ID" },
  { key: "PANiValue", label: "PAN (Corp)" },
  { key: "GSTINValue", label: "GSTIN" },
  { key: "CINValue", label: "CIN" },
  { key: "DINValue", label: "DIN" },
  { key: "LLPINValue", label: "LLPIN" },
  { key: "TANValue", label: "TAN" },
];

/**
 * Creates a table cell with text content
 * @param text - The text content to display in the cell
 * @param frameFormatter - Function to format the frame (e.g., formatLabelFrame, formatContentFrame)
 * @param textFormatter - Function to format the text (e.g., formatLabelText, formatContentText)
 * @returns FrameNode containing the formatted text
 */
function createTableCell(
  text: string,
  frameFormatter: (frame: FrameNode) => void,
  textFormatter: (text: TextNode) => void
): FrameNode {
  const cellFrame = figma.createFrame();
  frameFormatter(cellFrame);

  const cellText = figma.createText();
  setFont(cellText);
  cellText.characters = text;
  textFormatter(cellText);

  cellFrame.appendChild(cellText);
  return cellFrame;
}

/**
 * Creates a header cell for the table
 * @param text - Header text content
 * @param isLabelHeader - If true, formats as label header, otherwise as user header
 * @returns FrameNode containing the formatted header
 */
function createHeaderCell(text: string, isLabelHeader: boolean): FrameNode {
  if (isLabelHeader) {
    return createTableCell(text, formatLabelHeaderFrame, formatLabelHeaderText);
  } else {
    return createTableCell(text, formatUserHeaderFrame, formatUserHeaderText);
  }
}

/**
 * Creates the label column section with all field labels
 * @param dataContent - Object containing boolean flags for which fields to include
 * @returns Object with labelSection frame and its calculated height
 */
function createLabelSection(dataContent: any): {
  section: FrameNode;
  height: number;
} {
  const labelSection = figma.createFrame();
  labelSection.layoutMode = "VERTICAL";
  labelSection.itemSpacing = 0;
  labelSection.name = "Labels";

  let sectionHeight = 0;

  // Add header cell for labels column
  const headerCell = createHeaderCell("Details", true);
  labelSection.appendChild(headerCell);
  sectionHeight += generateTableHeaderHeight;

  // Iterate through field configuration and add label cells for enabled fields
  TABLE_FIELD_CONFIG.forEach((field) => {
    if (dataContent[field.key] === true) {
      const labelCell = createTableCell(
        field.label,
        formatLabelFrame,
        formatLabelText
      );
      labelSection.appendChild(labelCell);
      sectionHeight += generateTableCellHeight;
    }
  });

  // Resize and remove autolayout before adding to parent
  labelSection.resize(generateTableLabelWidth, sectionHeight);
  labelSection.layoutMode = "NONE";

  return { section: labelSection, height: sectionHeight };
}

/**
 * Generates all user data for a single user
 * @param msgData - Message data containing configuration options
 * @returns Object containing all generated user data fields
 */
function generateUserData(msgData: any) {
  const dataContent = msgData.chkData;

  // Personal details
  const fName = generateFirstName();
  const lName = generateLastName();
  const fullName = `${fName} ${lName}`;
  const mobile = generateMobile();
  const userEmail = generateEmail(fName, lName);
  const dobContent = generateDoB();

  // Location details
  const stateName = generateState();
  const cityName = generateCity(stateName);
  const pinCode = generatePINCode(stateName);
  const urbanAddress = generateUrbAddress(stateName, cityName);
  const ruralAddress = generateRurAddress(stateName, cityName);

  // Profession (conditional generation)
  const userProfession = dataContent.ProfValue
    ? generateProf(msgData.profDomain)
    : "";

  // Personal IDs
  const dl = generateDL(stateName);
  const rc = generateRC(stateName);
  const rcbh = generateRCBH();
  const passport = generatePassport();
  const UID = generateAadhar();
  const pan = generatePAN(fName);
  const voterId = generateVoterID();
  const upin = generateUPIn(fName, lName);
  const upim = generateUPIm(mobile);

  // Business IDs
  const cin = generateCIN(stateName);
  const pani = generatePANi();
  const gstin = generateGSTIN(stateName, pani);
  const din = generateDIN();
  const llpin = generateLLPIN();
  const tan = generateTAN();

  // Return object mapping field keys to their generated values
  return {
    FirstNameValue: fName,
    LastNameValue: lName,
    FullNameValue: fullName,
    DoBValue: dobContent,
    EmailValue: userEmail,
    MobileValue: mobile,
    ProfValue: userProfession,
    RurAddressValue: ruralAddress,
    UrbAddressValue: urbanAddress,
    CityValue: cityName,
    StateValue: stateName,
    PINValue: pinCode,
    PassValue: passport,
    UIDValue: UID,
    PANValue: pan,
    UPInValue: upin,
    UPImValue: upim,
    DLValue: dl,
    RCValue: rc,
    RCBHValue: rcbh,
    VoterValue: voterId,
    PANiValue: pani,
    GSTINValue: gstin,
    CINValue: cin,
    DINValue: din,
    LLPINValue: llpin,
    TANValue: tan,
  };
}

/**
 * Creates a data column section for a single user
 * @param userIndex - The user number (1-indexed) for display
 * @param userData - Object containing all user data values
 * @param dataContent - Object containing boolean flags for which fields to include
 * @param sectionHeight - Height to match the label section
 * @returns FrameNode containing the user data column
 */
function createDataSection(
  userIndex: number,
  userData: any,
  dataContent: any,
  sectionHeight: number
): FrameNode {
  const dataSection = figma.createFrame();
  dataSection.layoutMode = "VERTICAL";
  dataSection.itemSpacing = 0;
  dataSection.name = `User ${userIndex}`;

  // Add header cell for user column
  const headerCell = createHeaderCell(`User ${userIndex}`, false);
  dataSection.appendChild(headerCell);

  // Iterate through field configuration and add data cells for enabled fields
  TABLE_FIELD_CONFIG.forEach((field) => {
    if (dataContent[field.key] === true) {
      const dataCell = createTableCell(
        userData[field.key],
        formatContentFrame,
        formatContentText
      );
      dataSection.appendChild(dataCell);
    }
  });

  // Resize and remove autolayout before adding to parent
  dataSection.resize(generateTableDataWidth, sectionHeight);
  dataSection.layoutMode = "NONE";

  return dataSection;
}

// ============================================================================
// MAIN TABLE GENERATION FUNCTION
// ============================================================================

/**
 * Generates a complete table with user data and renders it on the Figma canvas
 * Creates a table structure with:
 * - A label column showing field names
 * - Multiple user data columns (one per user)
 * - Proper formatting and layout
 *
 * @param msgData - Configuration object containing:
 *   - chkData: Object with boolean flags for which fields to include
 *   - noOfUsers: Number of user columns to generate
 *   - profDomain: (Optional) Profession domain for profession generation
 */
function generateTable(msgData) {
  const nodes: SceneNode[] = [];
  const dataContent = msgData.chkData;
  const userCount = msgData.noOfUsers;

  // Adjust data column width based on whether addresses are included
  if (!dataContent.RurAddressValue && !dataContent.UrbAddressValue) {
    generateTableDataWidth = 135;
  } else if (dataContent.RurAddressValue || dataContent.UrbAddressValue) {
    generateTableDataWidth = 275;
  }

  // Create main table container frame
  const tableFrame = figma.createFrame();
  tableFrame.layoutMode = "HORIZONTAL";
  tableFrame.itemSpacing = 0;
  tableFrame.name = "Indian user data";
  let tableFrameWidth = 0;

  // Create and add label column
  const { section: labelSection, height: labelSectionHeight } =
    createLabelSection(dataContent);
  tableFrame.appendChild(labelSection);
  tableFrameWidth += generateTableLabelWidth;

  // Table height matches label column height
  const tableFrameHeight = labelSectionHeight;

  // Generate and add data columns for each user
  for (let i = 1; i <= userCount; i++) {
    const userData = generateUserData(msgData);
    const dataSection = createDataSection(
      i,
      userData,
      dataContent,
      labelSectionHeight
    );
    tableFrame.appendChild(dataSection);
    tableFrameWidth += generateTableDataWidth;
  }

  // Finalize table frame dimensions and remove autolayout
  tableFrame.resize(tableFrameWidth, tableFrameHeight);
  tableFrame.layoutMode = "NONE";

  // Add table to canvas and set viewport focus
  figma.currentPage.appendChild(tableFrame);
  nodes.push(tableFrame);
  figma.currentPage.selection = nodes;
  figma.viewport.scrollAndZoomIntoView(nodes);

  // Show success notification
  figma.notify(`Table of ${userCount} users generated successfully.`, {
    timeout: 2500,
  });
}

//Function for generating JSON data from user details
function generateJSON(msgData) {
  const dataContent = msgData.chkData;
  const userCount = msgData.noOfUsers;
  const users: any[] = [];

  //Creating user data content sections using for-loop for number of users requested from input
  for (let i = 1; i <= userCount; i++) {
    //Personal details
    const fName = generateFirstName();
    const lName = generateLastName();
    const fullName = `${fName} ${lName}`;
    const mobile = generateMobile();
    const userEmail = generateEmail(fName, lName);
    const dobContent = generateDoB();

    // Location details
    const stateName = generateState();
    const cityName = generateCity(stateName);
    const pinCode = generatePINCode(stateName);
    const urbanAddress = generateUrbAddress(stateName, cityName);
    const ruralAddress = generateRurAddress(stateName, cityName);

    //Profession
    let userProfession = "";
    if (dataContent.ProfValue === true) {
      let domain = msgData.profDomain;
      userProfession = generateProf(domain);
    }

    //Personal IDs
    const dl = generateDL(stateName);
    const rc = generateRC(stateName);
    const rcbh = generateRCBH();
    const passport = generatePassport();
    const UID = generateAadhar();
    const pan = generatePAN(fName);
    const voterId = generateVoterID();
    const upin = generateUPIn(fName, lName);
    const upim = generateUPIm(mobile);

    // Business IDs
    const cin = generateCIN(stateName);
    const pani = generatePANi();
    const gstin = generateGSTIN(stateName, pani);
    const din = generateDIN();
    const llpin = generateLLPIN();
    const tan = generateTAN();

    // Create user object with only selected fields
    const user: any = {};

    if (dataContent.FirstNameValue === true) {
      user["First Name"] = fName;
    }
    if (dataContent.LastNameValue === true) {
      user["Last Name"] = lName;
    }
    if (dataContent.FullNameValue === true) {
      user["Full Name"] = fullName;
    }
    if (dataContent.DoBValue === true) {
      user["Date of Birth"] = dobContent;
    }
    if (dataContent.EmailValue === true) {
      user["Email"] = userEmail;
    }
    if (dataContent.MobileValue === true) {
      user["Mobile"] = mobile;
    }
    if (dataContent.ProfValue === true) {
      user["Profession"] = userProfession;
    }
    if (dataContent.RurAddressValue === true) {
      user["Rural Address"] = ruralAddress;
    }
    if (dataContent.UrbAddressValue === true) {
      user["Urban Address"] = urbanAddress;
    }
    if (dataContent.CityValue === true) {
      user["City"] = cityName;
    }
    if (dataContent.StateValue === true) {
      user["State"] = stateName;
    }
    if (dataContent.PINValue === true) {
      user["PIN Code"] = pinCode;
    }
    if (dataContent.PassValue === true) {
      user["Passport"] = passport;
    }
    if (dataContent.UIDValue === true) {
      user["UID (Aadhar)"] = UID;
    }
    if (dataContent.PANValue === true) {
      user["PAN (Personal)"] = pan;
    }
    if (dataContent.UPInValue === true) {
      user["UPI (name)"] = upin;
    }
    if (dataContent.UPImValue === true) {
      user["UPI (mobile)"] = upim;
    }
    if (dataContent.DLValue === true) {
      user["Driving License"] = dl;
    }
    if (dataContent.RCValue === true) {
      user["Vehicle Reg. (RC)"] = rc;
    }
    if (dataContent.RCBHValue === true) {
      user["Vehicle Reg. (BH series)"] = rcbh;
    }
    if (dataContent.VoterValue === true) {
      user["Voter ID"] = voterId;
    }
    if (dataContent.PANiValue === true) {
      user["PAN (Corp)"] = pani;
    }
    if (dataContent.GSTINValue === true) {
      user["GSTIN"] = gstin;
    }
    if (dataContent.CINValue === true) {
      user["CIN"] = cin;
    }
    if (dataContent.DINValue === true) {
      user["DIN"] = din;
    }
    if (dataContent.LLPINValue === true) {
      user["LLPIN"] = llpin;
    }
    if (dataContent.TANValue === true) {
      user["TAN"] = tan;
    }

    users.push(user);
  }

  return users;
}

//Function for generating CSV data from user details
function generateCSV(msgData) {
  const dataContent = msgData.chkData;
  const userCount = msgData.noOfUsers;
  const users: any[] = [];
  const headers: string[] = [];

  //Creating user data content sections using for-loop for number of users requested from input
  for (let i = 1; i <= userCount; i++) {
    //Personal details
    const fName = generateFirstName();
    const lName = generateLastName();
    const fullName = `${fName} ${lName}`;
    const mobile = generateMobile();
    const userEmail = generateEmail(fName, lName);
    const dobContent = generateDoB();

    // Location details
    const stateName = generateState();
    const cityName = generateCity(stateName);
    const pinCode = generatePINCode(stateName);
    const urbanAddress = generateUrbAddress(stateName, cityName);
    const ruralAddress = generateRurAddress(stateName, cityName);

    //Profession
    let userProfession = "";
    if (dataContent.ProfValue === true) {
      let domain = msgData.profDomain;
      userProfession = generateProf(domain);
    }

    //Personal IDs
    const dl = generateDL(stateName);
    const rc = generateRC(stateName);
    const rcbh = generateRCBH();
    const passport = generatePassport();
    const UID = generateAadhar();
    const pan = generatePAN(fName);
    const voterId = generateVoterID();
    const upin = generateUPIn(fName, lName);
    const upim = generateUPIm(mobile);

    // Business IDs
    const cin = generateCIN(stateName);
    const pani = generatePANi();
    const gstin = generateGSTIN(stateName, pani);
    const din = generateDIN();
    const llpin = generateLLPIN();
    const tan = generateTAN();

    // Create user object with only selected fields
    const user: any = {};

    if (dataContent.FirstNameValue === true) {
      user["First Name"] = fName;
      if (i === 1) headers.push("First Name");
    }
    if (dataContent.LastNameValue === true) {
      user["Last Name"] = lName;
      if (i === 1) headers.push("Last Name");
    }
    if (dataContent.FullNameValue === true) {
      user["Full Name"] = fullName;
      if (i === 1) headers.push("Full Name");
    }
    if (dataContent.DoBValue === true) {
      user["Date of Birth"] = dobContent;
      if (i === 1) headers.push("Date of Birth");
    }
    if (dataContent.EmailValue === true) {
      user["Email"] = userEmail;
      if (i === 1) headers.push("Email");
    }
    if (dataContent.MobileValue === true) {
      user["Mobile"] = mobile;
      if (i === 1) headers.push("Mobile");
    }
    if (dataContent.ProfValue === true) {
      user["Profession"] = userProfession;
      if (i === 1) headers.push("Profession");
    }
    if (dataContent.RurAddressValue === true) {
      user["Rural Address"] = ruralAddress;
      if (i === 1) headers.push("Rural Address");
    }
    if (dataContent.UrbAddressValue === true) {
      user["Urban Address"] = urbanAddress;
      if (i === 1) headers.push("Urban Address");
    }
    if (dataContent.CityValue === true) {
      user["City"] = cityName;
      if (i === 1) headers.push("City");
    }
    if (dataContent.StateValue === true) {
      user["State"] = stateName;
      if (i === 1) headers.push("State");
    }
    if (dataContent.PINValue === true) {
      user["PIN Code"] = pinCode;
      if (i === 1) headers.push("PIN Code");
    }
    if (dataContent.PassValue === true) {
      user["Passport"] = passport;
      if (i === 1) headers.push("Passport");
    }
    if (dataContent.UIDValue === true) {
      user["UID (Aadhar)"] = UID;
      if (i === 1) headers.push("UID (Aadhar)");
    }
    if (dataContent.PANValue === true) {
      user["PAN (Personal)"] = pan;
      if (i === 1) headers.push("PAN (Personal)");
    }
    if (dataContent.UPInValue === true) {
      user["UPI (name)"] = upin;
      if (i === 1) headers.push("UPI (name)");
    }
    if (dataContent.UPImValue === true) {
      user["UPI (mobile)"] = upim;
      if (i === 1) headers.push("UPI (mobile)");
    }
    if (dataContent.DLValue === true) {
      user["Driving License"] = dl;
      if (i === 1) headers.push("Driving License");
    }
    if (dataContent.RCValue === true) {
      user["Vehicle Reg. (RC)"] = rc;
      if (i === 1) headers.push("Vehicle Reg. (RC)");
    }
    if (dataContent.RCBHValue === true) {
      user["Vehicle Reg. (BH series)"] = rcbh;
      if (i === 1) headers.push("Vehicle Reg. (BH series)");
    }
    if (dataContent.VoterValue === true) {
      user["Voter ID"] = voterId;
      if (i === 1) headers.push("Voter ID");
    }
    if (dataContent.PANiValue === true) {
      user["PAN (Corp)"] = pani;
      if (i === 1) headers.push("PAN (Corp)");
    }
    if (dataContent.GSTINValue === true) {
      user["GSTIN"] = gstin;
      if (i === 1) headers.push("GSTIN");
    }
    if (dataContent.CINValue === true) {
      user["CIN"] = cin;
      if (i === 1) headers.push("CIN");
    }
    if (dataContent.DINValue === true) {
      user["DIN"] = din;
      if (i === 1) headers.push("DIN");
    }
    if (dataContent.LLPINValue === true) {
      user["LLPIN"] = llpin;
      if (i === 1) headers.push("LLPIN");
    }
    if (dataContent.TANValue === true) {
      user["TAN"] = tan;
      if (i === 1) headers.push("TAN");
    }

    users.push(user);
  }

  // Convert to CSV format
  // Escape CSV values (handle commas, quotes, newlines)
  const escapeCSV = (value: string): string => {
    if (value === null || value === undefined) return "";
    const stringValue = String(value);
    if (
      stringValue.includes(",") ||
      stringValue.includes('"') ||
      stringValue.includes("\n")
    ) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  };

  // Build CSV string
  let csvString = headers.map(escapeCSV).join(",") + "\n";

  for (const user of users) {
    const row = headers.map((header) => escapeCSV(user[header] || ""));
    csvString += row.join(",") + "\n";
  }

  return csvString;
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
