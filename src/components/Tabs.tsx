import * as React from "react";

const Tabs = ({ tabID }) => {
  const [currentTab, setCurrntTab] = React.useState("1");

  const tabs = [
    {
      id: "1",
      tabTitle: "Generate data",
      content: "Add data to selected text layers",
    },
    {
      id: "2",
      tabTitle: "Create user sets",
      content: "Select data items and create sets of users",
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

      {tabs.map((tab, i) => (
        <div className="tab-info" key={i}>
          {currentTab === `${tab.id}` && (
            <p className="tab-infotext">{tab.content}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default Tabs;
