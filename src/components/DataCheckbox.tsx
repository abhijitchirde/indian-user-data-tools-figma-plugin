import * as React from "react";

interface Props {
  name: string;
  label: string;
  id: string;
  checked?: boolean;
  onChange: any;
}

const DataCheckbox = ({ name, label, checked, id, onChange }: Props) => {
  const defaultChecked = checked ? checked : false;

  const [isChecked, setIsChecked] = React.useState(defaultChecked);

  const changeHandler = (e) => {
    setIsChecked((prev) => !prev);
    onChange(e);
  };

  return (
    <>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            id={id}
            name={name}
            checked={isChecked}
            onChange={changeHandler}
            value={name}
          />
          <span>{label}</span>
        </label>
      </div>
    </>
  );
};

export default DataCheckbox;
