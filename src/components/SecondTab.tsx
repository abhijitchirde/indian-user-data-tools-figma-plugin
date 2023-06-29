import * as React from "react";
import DataCheckbox from "./DataCheckbox";
import ProfessionSelectionForTable from "./ProfessionSelectionForTable";

const SecondTab = ({ onClick }) => {
  const [chkData, setChkData] = React.useState({
    FirstNameValue: false,
    LastNameValue: false,
    FullNameValue: true,
    DoBValue: true,
    AgeValue: false,
    EmailValue: true,
    MobileValue: true,
    MobileISDValue: false,
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
  });

  const [usersInput, setUsersInput] = React.useState(1);

  const [profDomain, setProfDomain] = React.useState("Random");

  const inputChangeHandler = (e) => {
    setUsersInput(e.target.value);
  };

  const updateDomain = (domain) => {
    setProfDomain(domain);
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
                  name="AgeChk"
                  label="Age"
                  checked={chkData.AgeValue}
                  id="AgeValue"
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
                <DataCheckbox
                  name="MobileISDChk"
                  label="Mobile (+91)"
                  checked={chkData.MobileISDValue}
                  id="MobileISDValue"
                  onChange={updateCheckbox}
                />
              </div>
            </div>

            <div className="checkbox-group">
              <p className="group-label">Profession</p>
              <div className="checkboxes">
                <ProfessionSelectionForTable domain={updateDomain} />
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
                  label="Urban Address"
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
              <p className="group-label">Identity</p>
              <div className="checkboxes">
                <DataCheckbox
                  name="PassChk"
                  label="Indian Passport"
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
                  name="DLChk"
                  label="Driver's License"
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
              </div>
            </div>
          </div>

          <div className="separate-button-div text-center">
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
