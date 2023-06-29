import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./ui.css";
import BottomSection from "./components/BottomSection";
import FirstTab from "./components/FirstTab";
import SecondTab from "./components/SecondTab";
import Tabs from "./components/Tabs";

declare function require(path: string): any;

function App() {
  const [currentTab, setCurrentTab] = React.useState("1");

  const getTab = (input) => {
    setCurrentTab(input);
  };

  const onGenerate = (inputValue, profDomain) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "generate-random",
          data: { inputValue, profDomain },
        },
      },
      "*"
    );
  };

  const onCreateTable = (chkData, users, profDomain) => {
    let noOfUsers = +users;
    parent.postMessage(
      {
        pluginMessage: {
          type: "generate-table",
          data: { chkData, noOfUsers, profDomain },
        },
      },
      "*"
    );
  };

  return (
    <main>
      <Tabs tabID={getTab} />

      {currentTab === "1" ? (
        <FirstTab onClick={onGenerate} />
      ) : (
        <SecondTab onClick={onCreateTable} />
      )}

      <BottomSection />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("react-page")).render(<App />);
