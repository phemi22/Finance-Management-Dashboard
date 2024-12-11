import React, { useState } from "react";

export default function Preferences() {
  const [appearance, setAppearance] = useState("light");
  const [language, setLanguage] = useState("en");

  const handleAppearanceChange = (event) => {
    setAppearance(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="preferences-settings">
      <h1>My Preferences</h1>
      <p>Set your preferred appearance and language:</p>

      {/* Appearance Selection */}
      <div className="preferences-section">
        <h2>Appearance</h2>
        <div>
          <label>
            <input
              type="radio"
              name="appearance"
              value="light"
              checked={appearance === "light"}
              onChange={handleAppearanceChange}
            />
            Light Mode
          </label>
          <label>
            <input
              type="radio"
              name="appearance"
              value="dark"
              checked={appearance === "dark"}
              onChange={handleAppearanceChange}
            />
            Dark Mode
          </label>
        </div>
      </div>

      {/* Language Selection */}
      <div className="preferences-section">
        <h2>Language</h2>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
    </div>
  );
}
