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

  const onGenerate = (inputValue, domainInput) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: "generate-random",
          data: { inputValue, domainInput },
        },
      },
      "*"
    );
  };

  const onCreateTable = (contentType) => {
    // parent.postMessage({
    //   pluginMessage: {
    //     type: "generate-table",
    //     data: { contentType },
    //   },
    // });
    console.log("create table action");
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
