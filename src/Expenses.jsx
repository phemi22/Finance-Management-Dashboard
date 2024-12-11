import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Expenses() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("fiat");

  // Handle button click to set the active state and navigate
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    navigate(buttonType);
  };

  return (
    <div className="income-button-container">
      <button
        className={activeButton === "fiat" ? "active" : ""}
        onClick={() => handleButtonClick("fiat")}
      >
        Fiat Expenses
      </button>
      <button
        className={activeButton === "crypto" ? "active" : ""}
        onClick={() => handleButtonClick("crypto")}
      >
        Crypto Expenses
      </button>
      <button
        className={activeButton === "total" ? "active" : ""}
        onClick={() => handleButtonClick("total")}
      >
        Total Expenses
      </button>
    </div>
  );
}
