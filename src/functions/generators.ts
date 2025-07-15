import { dataSet } from "../data/dataSet";
import { numBetween } from "./utils";

//Personal details------------------------------

//First name
export function generateFirstName() {
  let firstName =
    dataSet["FirstName"][
      Math.floor(Math.random() * dataSet["FirstName"].length)
    ];
  return `${firstName}`;
}

//Last name
export function generateLastName() {
  let lastName =
    dataSet["LastName"][Math.floor(Math.random() * dataSet["LastName"].length)];
  return `${lastName}`;
}

// Mobile
export function generateMobile() {
  let number = numBetween(6000000000, 9999999999); //a random 10 digit number
  return `${number}`;
}

// Email
export function generateEmail(fn, ln, em, end) {
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

// Date of birth
export function generateDoB() {
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

// Profession----------------------------------------------

export function generateProf(domain) {
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

// Location-------------------------------------------
// Pincode
export function generatePINCode() {
  let pinFirst = Math.floor(Math.random() * 8 + 1);
  let pinRemaining = numBetween(10000, 99999); //Finding a random 5 digit number for remaining part of PIN
  return `${pinFirst}${pinRemaining}`;
}

// City
export function generateCity() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let city =
    dataSet[`${state}`][
      Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3
    ];
  return `${city}`;
}

// State
export function generateState() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  return `${state}`;
}

// City state pair
export function generateCityStatePair() {
  let state =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  let city =
    dataSet[`${state}`][
      Math.floor(Math.random() * (dataSet[`${state}`].length - 3)) + 3
    ];
  return `${city}, ${state}`;
}

// Rural address
export function generateRurAddress() {
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

// Urban address
export function generateUrbAddress() {
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

// Personal IDs--------------------------------------------
// Passport
export function generatePassport() {
  //As per rules from on https://www.geeksforgeeks.org/how-to-validate-indian-passport-number-using-regular-expression/
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

// Aadhar
export function generateAadhar() {
  let numSet1 = numBetween(1000, 9999);
  let numSet2 = numBetween(1000, 9999);
  let numSet3 = numBetween(1000, 9999);
  return `${numSet1} ${numSet2} ${numSet3}`; //Finding a random 12 digit number for UID. In 3 parts of 4 digits
}

//UPIm
export function generateUPIm() {
  let mobileNum = numBetween(6000000000, 9999999999);
  let upiEnd =
    dataSet["UPISuffix"][
      Math.floor(Math.random() * dataSet["UPISuffix"].length)
    ];
  return `${mobileNum}@${upiEnd}`.toLowerCase();
}

// UPIn
export function generateRandomUPIn() {
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

// Driving license
export function generateDL() {
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

// Vehicle registration
export function generateRC() {
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

// PAN
export function generatePAN() {
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

// Voter ID
export function generateVoterID() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let voterID = "";
  // Generate a 10-digit alphanumeric EPIC number
  for (let i = 0; i < 10; i++) {
    voterID += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return voterID;
}

//Business IDs-----------------------------------

//DIN
export function generateDIN() {
  return Math.random().toString().slice(2, 10);
}

// CIN
export function generateCIN() {
  const listingStatus = ["L", "U"][Math.floor(Math.random() * 2)];
  const industryCode = Math.random().toString().slice(2, 7);
  const stateName =
    dataSet["State"][Math.floor(Math.random() * dataSet["State"].length)];
  const stateInitials = dataSet[`${stateName}`][0];
  const year = Math.floor(Math.random() * (2024 - 1900 + 1)) + 1900;
  const companyTypes = ["PLC", "PTC", "OPC"];
  const companyType =
    companyTypes[Math.floor(Math.random() * companyTypes.length)];
  const registrationNumber = Math.random().toString().slice(2, 8);

  return `${listingStatus}${industryCode}${stateInitials}${year}${companyType}${registrationNumber}`;
}

// PANi
export function generatePANi() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let pani = "";

  // First Three Characters (random letters)
  for (let i = 0; i < 3; i++) {
    pani += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Fourth Character (category)
  const categories = ["P", "C", "H", "F", "A", "T", "B", "G", "L", "J"];
  pani += categories[Math.floor(Math.random() * categories.length)];

  // Fifth Character (first letter of name)
  pani += chars.charAt(Math.floor(Math.random() * chars.length));

  // Sixth to Ninth Characters (random numbers)
  for (let i = 0; i < 4; i++) {
    pani += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  // Tenth Character (check digit)
  pani += chars.charAt(Math.floor(Math.random() * chars.length));

  return pani;
}

// GSTIN
export function generateGSTIN() {
  const stateCodes = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
  ];
  const stateCode = stateCodes[Math.floor(Math.random() * stateCodes.length)];

  const pani = generatePANi();

  const entityNumber = "1";
  const defaultChar = "Z";
  const checksumChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const checksum = checksumChars.charAt(
    Math.floor(Math.random() * checksumChars.length)
  );

  return `${stateCode}${pani}${entityNumber}${defaultChar}${checksum}`;
}

// LLPIN
export function generateLLPIN() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let llpin = "";

  // First three characters (letters)
  for (let i = 0; i < 3; i++) {
    llpin += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  llpin += "-";

  // Last four characters (numbers)
  for (let i = 0; i < 4; i++) {
    llpin += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return llpin;
}

// TAN
export function generateTAN() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let tan = "";

  // Jurisdiction Code (3 letters)
  for (let i = 0; i < 3; i++) {
    tan += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Initial of the Name (1 letter)
  tan += chars.charAt(Math.floor(Math.random() * chars.length));

  // Unique Number (5 digits)
  for (let i = 0; i < 5; i++) {
    tan += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  // Check Digit (1 letter)
  tan += chars.charAt(Math.floor(Math.random() * chars.length));

  return tan;
}
