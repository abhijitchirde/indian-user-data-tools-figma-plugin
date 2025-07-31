import * as React from "react";
import DataCheckbox from "./DataCheckbox";
import ProfessionSelectionForTable from "./ProfessionSelectionForTable";

const SecondTab = ({ onClick }) => {
  const [chkData, setChkData] = React.useState({
    FirstNameValue: false,
    LastNameValue: false,
    FullNameValue: true,
    DoBValue: true,
    EmailValue: true,
    MobileValue: true,
    ProfValue: true,
    RurAddressValue: false,
    UrbAddressValue: true,
    CityValue: true,
    StateValue: true,
    PINValue: true,
    PassValue: false,
    UIDValue: true,
    PANValue: true,
    UPInValue: false,
    UPImValue: false,
    DLValue: false,
    RCValue: false,
    RCBHValue: false,
    VoterValue: false,
    CINValue: false,
    GSTINValue: true,
    DINValue: false,
    LLPINValue: false,
    PANiValue: false,
    TANValue: false,
  });

  const [usersInput, setUsersInput] = React.useState(1);

  const [profDomain, setProfDomain] = React.useState("Random");

  const inputChangeHandler = (e) => {
    setUsersInput(e.target.value);
  };

  const updateDomain = (domain) => {
    setProfDomain(domain);
  };

  const isDomain = (value) => {
    setChkData((prev) => {
      return { ...prev, ["ProfValue"]: value };
    });
  };

  const clickHandler = () => {
    onClick(chkData, usersInput, profDomain);
  };

  const updateCheckbox = (e) => {
    const id = e.target.id;
    setChkData((prev) => {
      return { ...prev, [`${id}`]: e.target.checked };
    });
  };

  return (
    <>
      <div className="tabcontent">
        <div className="tab-container">
          <div className="checkboxes-list">
            <div className="checkbox-group">
              <p className="group-label">Personal details</p>
              <div className="checkboxes">
                <DataCheckbox
                  name="FirstNameChk"
                  label="First Name"
                  checked={chkData.FirstNameValue}
                  id="FirstNameValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="LastNameChk"
                  label="Last Name"
                  checked={chkData.LastNameValue}
                  id="LastNameValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="FullNameChk"
                  label="Full Name"
                  checked={chkData.FullNameValue}
                  id="FullNameValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="DoBChk"
                  label="Date of Birth"
                  checked={chkData.DoBValue}
                  id="DoBValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="EmailChk"
                  label="Email"
                  checked={chkData.EmailValue}
                  id="EmailValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="MobileChk"
                  label="Mobile"
                  checked={chkData.MobileValue}
                  id="MobileValue"
                  onChange={updateCheckbox}
                />
              </div>
            </div>

            <div className="checkbox-group">
              <p className="group-label">Profession</p>
              <div className="checkboxes">
                <ProfessionSelectionForTable
                  getDomain={updateDomain}
                  isDomain={isDomain}
                />
              </div>
            </div>

            <div className="checkbox-group">
              <p className="group-label">Location</p>
              <div className="checkboxes">
                <DataCheckbox
                  name="RurAddressChk"
                  label="Rural Address"
                  checked={chkData.RurAddressValue}
                  id="RurAddressValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="UrbAddressChk"
                  label="City Address"
                  checked={chkData.UrbAddressValue}
                  id="UrbAddressValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="CityChk"
                  label="City"
                  checked={chkData.CityValue}
                  id="CityValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="StateChk"
                  label="State"
                  checked={chkData.StateValue}
                  id="StateValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="PINChk"
                  label="Postal Code"
                  checked={chkData.PINValue}
                  id="PINValue"
                  onChange={updateCheckbox}
                />
              </div>
            </div>

            <div className="checkbox-group">
              <p className="group-label">Personal IDs</p>
              <div className="checkboxes">
                <DataCheckbox
                  name="PassChk"
                  label="Passport"
                  checked={chkData.PassValue}
                  id="PassValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="UIDChk"
                  label="UID (Aadhar)"
                  checked={chkData.UIDValue}
                  id="UIDValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="PANChk"
                  label="PAN (Tax ID)"
                  checked={chkData.PANValue}
                  id="PANValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="UPInChk"
                  label="UPI (name)"
                  checked={chkData.UPInValue}
                  id="UPInValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="UPImChk"
                  label="UPI (mobile)"
                  checked={chkData.UPImValue}
                  id="UPImValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="VoterChk"
                  label="Voter ID"
                  checked={chkData.VoterValue}
                  id="VoterValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="DLChk"
                  label="DL"
                  checked={chkData.DLValue}
                  id="DLValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="RCChk"
                  label="Vehicle RC"
                  checked={chkData.RCValue}
                  id="RCValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="RCBHChk"
                  label="RC (BH series)"
                  checked={chkData.RCValue}
                  id="RCBHValue"
                  onChange={updateCheckbox}
                />
              </div>
            </div>
            <div className="checkbox-group">
              <p className="group-label">Business IDs</p>
              <div className="checkboxes">
                <DataCheckbox
                  name="PANi"
                  label="PAN (Corp)"
                  checked={chkData.PANiValue}
                  id="PANiValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="GSTINChk"
                  label="GSTIN"
                  checked={chkData.GSTINValue}
                  id="GSTINValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="CINChk"
                  label="CIN"
                  checked={chkData.CINValue}
                  id="CINValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="DINChk"
                  label="DIN"
                  checked={chkData.DINValue}
                  id="DINValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="LLPINChk"
                  label="LLPIN"
                  checked={chkData.LLPINValue}
                  id="LLPINValue"
                  onChange={updateCheckbox}
                />
                <DataCheckbox
                  name="TAN"
                  label="TAN"
                  checked={chkData.TANValue}
                  id="TANValue"
                  onChange={updateCheckbox}
                />
              </div>
            </div>
          </div>

          <div className="separate-button-div text-center">
            <div className="input-div">
              <label className="input-label" htmlFor="noOfUsers">
                No. of Users
              </label>
              <input
                className="user-input"
                type="number"
                name="noOfUsers"
                id="noOfUsers"
                value={usersInput}
                min={1}
                onInput={inputChangeHandler}
              />
            </div>

            <button className="button-large" onClick={clickHandler}>
              Create users
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondTab;
