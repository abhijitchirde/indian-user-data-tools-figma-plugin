import * as React from "react";

const ProfessionSelectionForTable = () => {
  const [dropdownEnabled, setDropdownEnabled] = React.useState(true);
  const [isChecked, setIsChecked] = React.useState(true);
  const [dropdownSelect, setDropdownSelect] = React.useState("Random");

  const handleDropdownInput = (e) => {
    setDropdownSelect(e.target.value);
  };

  const onProfChkChange = () => {
    isChecked === false ? setDropdownEnabled(true) : setDropdownEnabled(false);
  };

  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value="ProfChk"
            name="ProfChk"
            checked={isChecked}
            onChange={() => {
              setIsChecked((prev) => !prev);
              onProfChkChange();
            }}
          />
          <span>Profession</span>
        </label>
      </div>

      <label className="dropdown-label" htmlFor="profession-domain-2">
        Domain
      </label>
      <select
        className="dropdown-main"
        name="profession-domain-2"
        value={dropdownSelect}
        disabled={!dropdownEnabled}
        onChange={handleDropdownInput}
      >
        <option id="ran" className="dropdown-item" value="Random">
          Random
        </option>
        <option id="tech" className="dropdown-item" value="Tech and IT">
          Tech and IT
        </option>
        <option id="eng" className="dropdown-item" value="Engineering">
          Engineering
        </option>
        <option id="man" className="dropdown-item" value="Management">
          Management
        </option>
        <option id="heal" className="dropdown-item" value="Healthcare">
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
        <option id="art" className="dropdown-item" value="Art and media">
          Art and media
        </option>
        <option id="hos" className="dropdown-item" value="Hospitality">
          Hospitality
        </option>
        <option id="con" className="dropdown-item" value="Construction">
          Construction
        </option>
        <option
          id="gov"
          className="dropdown-item"
          value="Govt and administration"
        >
          Govt and administration
        </option>
        <option id="vol" className="dropdown-item" value="Volunteering">
          Volunteering
        </option>
        <option id="oth" className="dropdown-item" value="Other">
          Others
        </option>
      </select>
    </>
  );
};

export default ProfessionSelectionForTable;
