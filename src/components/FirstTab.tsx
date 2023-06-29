import * as React from "react";
import DataButton from "./DataButton";

const FirstTab = ({ onClick }) => {
  const [selected, setSelected] = React.useState("Random");

  const dropdownSelectionHandler = (e) => {
    setSelected(e.target.value);
  };

  const clickHandler = (e) => {
    const val = e.target.value;
    onClick(val, selected);
  };

  return (
    <>
      <div className="tabcontent">
        <div className="tab-container">
          <div className="buttons-list">
            <div className="button-group">
              <p className="group-label">Personal details</p>
              <div className="buttons-div">
                <DataButton
                  name="First Name"
                  value="FirstName"
                  action={clickHandler}
                />
                <DataButton
                  name="Last Name"
                  value="LastName"
                  action={clickHandler}
                />
                <DataButton
                  name="Full Name"
                  value="FullName"
                  action={clickHandler}
                />
                <DataButton
                  name="Date of Birth"
                  value="DoB"
                  action={clickHandler}
                />
                <DataButton name="Email" value="Email" action={clickHandler} />
                <DataButton
                  name="Mobile"
                  value="Mobile"
                  action={clickHandler}
                />
              </div>
            </div>

            <div className="button-group">
              <p className="group-label">Profession</p>
              <div className="buttons-div">
                <label className="dropdown-label" htmlFor="profession-domain-1">
                  Domain
                </label>
                <select
                  className="dropdown-main"
                  id="profession-domain-1"
                  value={selected}
                  onChange={dropdownSelectionHandler}
                >
                  <option id="ran" className="dropdown-item" value="Random">
                    Random
                  </option>
                  <option
                    id="tech"
                    className="dropdown-item"
                    value="Tech and IT"
                  >
                    Tech and IT
                  </option>
                  <option
                    id="eng"
                    className="dropdown-item"
                    value="Engineering"
                  >
                    Engineering
                  </option>
                  <option id="man" className="dropdown-item" value="Management">
                    Management
                  </option>
                  <option
                    id="heal"
                    className="dropdown-item"
                    value="Healthcare"
                  >
                    Healthcare
                  </option>
                  <option id="fin" className="dropdown-item" value="Finance">
                    Finance
                  </option>
                  <option id="sci" className="dropdown-item" value="Science">
                    Science
                  </option>
                  <option id="ed" className="dropdown-item" value="Education">
                    Education
                  </option>
                  <option
                    id="art"
                    className="dropdown-item"
                    value="Art and media"
                  >
                    Art and media
                  </option>
                  <option
                    id="hos"
                    className="dropdown-item"
                    value="Hospitality"
                  >
                    Hospitality
                  </option>
                  <option
                    id="con"
                    className="dropdown-item"
                    value="Construction"
                  >
                    Construction
                  </option>
                  <option
                    id="gov"
                    className="dropdown-item"
                    value="Govt and administration"
                  >
                    Govt and administration
                  </option>
                  <option
                    id="vol"
                    className="dropdown-item"
                    value="Volunteering"
                  >
                    Volunteering
                  </option>
                  <option id="oth" className="dropdown-item" value="Other">
                    Others
                  </option>
                </select>
                <button
                  className="button-pri"
                  id="Prof"
                  value="Prof"
                  onClick={clickHandler}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="button-group">
              <p className="group-label">Location</p>
              <div className="buttons-div">
                <DataButton
                  name="Rural Address"
                  value="RurAddress"
                  action={clickHandler}
                />
                <DataButton
                  name="Urban Address"
                  value="UrbAddress"
                  action={clickHandler}
                />
                <DataButton name="City" value="City" action={clickHandler} />
                <DataButton name="State" value="State" action={clickHandler} />
                <DataButton
                  name="City & State"
                  value="CityState"
                  action={clickHandler}
                />
                <DataButton
                  name="Postal Code"
                  value="PIN"
                  action={clickHandler}
                />
              </div>
            </div>

            <div className="button-group">
              <p className="group-label">Identity</p>
              <div className="buttons-div">
                <DataButton
                  name="Indian Passport"
                  value="Pass"
                  action={clickHandler}
                />
                <DataButton
                  name="UID (Aadhar)"
                  value="UID"
                  action={clickHandler}
                />
                <DataButton
                  name="PAN (Tax ID)"
                  value="PAN"
                  action={clickHandler}
                />
                <DataButton
                  name="UPI (name)"
                  value="UPIn"
                  action={clickHandler}
                />
                <DataButton
                  name="UPI (mobile)"
                  value="UPIm"
                  action={clickHandler}
                />
                <DataButton
                  name="Driving Lic."
                  value="DL"
                  action={clickHandler}
                />
                <DataButton
                  name="Vehicle RC"
                  value="RC"
                  action={clickHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.8rem",
            color: "#6f6f70",
            paddingTop: "0.5rem",
          }}
        >
          Please use individual buttons to generate data
        </p>
      </div>
    </>
  );
};

export default FirstTab;
