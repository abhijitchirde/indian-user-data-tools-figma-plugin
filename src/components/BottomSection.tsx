import * as React from "react";
import ThemeToggle from "./ThemeToggle";

const BottomSection = () => {
  const onDisclaimer = () => {
    parent.postMessage({ pluginMessage: { type: "disclaimer" } }, "*");
  };

  const AlertIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "inline-block",
        marginRight: "6px",
        verticalAlign: "middle",
        height: "11px",
        width: "11px",
      }}
    >
      <circle cx="7" cy="7" r="6.5" stroke="currentColor" strokeWidth="1" />
      <line
        x1="7"
        y1="4.5"
        x2="7"
        y2="8.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <line
        x1="7"
        y1="9.5"
        x2="7"
        y2="10.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="bottom-wrapper">
      <div className="disclaimer-container">
        <button
          className="theme-toggle"
          id="disclaimer"
          onClick={onDisclaimer}
          style={{
            padding: "4px 8px",
            fontSize: "11px",
            border: "1px solid var(--figma-color-border)",
            borderRadius: "4px",
            backgroundColor: "var(--figma-color-bg)",
            color: "var(--figma-color-text-secondary)",
            cursor: "pointer",
            transition: "all 0.2s ease",
            minWidth: "20px",
          }}
        >
          <AlertIcon />
          Notice
        </button>
      </div>

      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>

      <div className="credit-container">
        <p className="credit-text">
          <a href="https://abhijitchirde.com" target="_blank">
            by Abhijit Chirde
          </a>
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
