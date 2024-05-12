// import React from 'react'
import React from "react";
import "./Styles.scss";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import SettingControls from "../../Components/SettingControls";

const Setting = () => {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SettingControls />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid"></div>
            <div className="content-wrapper">
              <div className="container-fluid flex-grow-1 container-p-y"></div>
              <div className="content-backdrop fade"></div>
            </div>
            <NewAssistantHelpBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
