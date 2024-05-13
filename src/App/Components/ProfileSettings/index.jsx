import React, { useState } from "react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <ul className="nav nav-pills flex-column flex-md-row mb-4">
        <li className="nav-item">
          <a
            className={`nav-link`}
            href="/profile"
            onClick={() => handleTabClick("Account")}
          >
            <i className="ti-xs ti ti-users me-1"></i> Account
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link`}
            href="/security"
            onClick={() => handleTabClick("Security")}
          >
            <i className="ti-xs ti ti-lock me-1"></i> Security
          </a>
        </li>
        {/* Add more nav-items here */}
      </ul>
    </>
  );
};

export default ProfileSettings;
