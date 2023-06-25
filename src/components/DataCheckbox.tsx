import * as React from "react";

interface Props {
  name: string;
  label: string;
  id: string;
  checked?: boolean;
  onChange: any;
}

const DataCheckbox = ({ name, label, checked, id }: Props) => {
  const defaultChecked = checked ? checked : false;

  const [isChecked, setIsChecked] = React.useState(defaultChecked);

  return (
    <>
      <div className="checkbox-div">
        <input
          className="checkbox"
          type="checkbox"
          id={id}
          name={name}
          value={name}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <label className="checkbox-label" htmlFor={name}>
          {label}
        </label>
      </div>
    </>
  );
};

export default DataCheckbox;
