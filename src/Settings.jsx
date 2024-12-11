import React, { useState } from "react";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Preferences from "./Preferences";
import Integrations from "./Integrations";

export default function Settings() {
  const [activeSection, setActiveSection] = useState("profile");

  // Function to handle section click
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <ul>
          <li
            className={activeSection === "profile" ? "active" : ""}
            onClick={() => handleSectionClick("profile")}
          >
            Profile
          </li>
          <li
            className={activeSection === "notifications" ? "active" : ""}
            onClick={() => handleSectionClick("notifications")}
          >
            Notifications
          </li>
          <li
            className={activeSection === "preferences" ? "active" : ""}
            onClick={() => handleSectionClick("preferences")}
          >
            Preferences
          </li>
          <li
            className={activeSection === "integrations" ? "active" : ""}
            onClick={() => handleSectionClick("integrations")}
          >
            Integrations
          </li>
        </ul>
      </div>

      <div className="settings-content">
        {activeSection === "profile" && <Profile />}
        {activeSection === "notifications" && <Notifications />}
        {activeSection === "preferences" && <Preferences />}
        {activeSection === "integrations" && <Integrations />}
      </div>
    </div>
  );
}
