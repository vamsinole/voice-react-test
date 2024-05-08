// import React from 'react'
import React, { useState, useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import NewAssistantBar from '../../Components/NewAssistantBar';
import NewAssistantHelpBar from '../../Components/NewAssistantHelpBar';
import SettingControls from '../../Components/SettingControls';


const Setting = () => {
 
  
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <SettingControls />
          <div className='layout-page'>
          <NewAssistantBar/>
        <div className='container-fluid'>
        </div>
         <div class="content-wrapper">
          <div class="container-fluid flex-grow-1 container-p-y">
          </div>
          <div class="content-backdrop fade"></div>
          </div>
          <NewAssistantHelpBar/>
          </div>
        </div>
      </div>
                          

    </>
  )
}

export default Setting