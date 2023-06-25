import * as React from "react";

const Tabs = ({ tabID }) => {
  const [currentTab, setCurrntTab] = React.useState("1");

  const tabs = [
    {
      id: "1",
      tabTitle: "Generate random data",
    },
    {
      id: "2",
      tabTitle: "Create users table",
    },
  ];

  const handleTabClick = (e) => {
    setCurrntTab(e.target.id);
    tabID(e.target.id);
  };

  return (
    <>
      <div className="tab">
        {tabs.map((tab, i) => {
          return (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClickCapture={handleTabClick}
            >
              {tab.tabTitle}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
