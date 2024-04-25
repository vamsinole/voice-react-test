// import React from 'react'
import Header from '../../Components/Header'
import React, { useState } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';

const Calls = () => {
  return (
    <>
        <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
        <Header/>
        <div className='layout-page'>
            <TopMenu/>
            <div class="content-wrapper">
          
            <div class="parent-div mt-2">
          <div class="parent-div">
            <div class="row mb-3 select2-primary">
              <div class="col-sm-4 offset-4">
                <select id="voice-agent-call" onchange="changeVoiceAgent()" class="select2 form-select">
                  <option value="" selected>Select Agent</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="no-agent-text">
          <div class="chat-parent mt-2">
            <div class="card mb-4">
              <div class="card-body">
                <div class="col-12 text-center mb-3">
                  <label class="col-12 col-form-label" for="basic-default-agent-name">Please select an Agent
                    first</label>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="container-xxl flex-grow-1 container-p-y">
           
          </div>
          <div class="content-backdrop fade"></div>
        </div>
        </div>
    </div>
    </div>
        
    </>
  )
}

export default Calls