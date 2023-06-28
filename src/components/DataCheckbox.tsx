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
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            id={id}
            name={name}
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            value={name}
          />
          <span>{label}</span>
        </label>
      </div>
    </>
  );
};

export default DataCheckbox;
