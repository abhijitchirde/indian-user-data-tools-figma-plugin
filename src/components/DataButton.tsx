import * as React from "react";

interface Props {
  name: string;
  value: string;
  action: any;
}

const DataButton = ({ name, value, action }: Props) => {
  return (
    <>
      <button className="button-pri" value={value} onClick={action}>
        {name}
      </button>
    </>
  );
};

export default DataButton;
