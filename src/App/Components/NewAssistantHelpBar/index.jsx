// import React from 'react'
import { Link } from 'react-router-dom'
import React, {  useState, useRef, useEffect} from 'react'
import './Styles.scss';

const NewAssistantHelpBar = () => {
    return (
        <>
            <div class="content-wrapper justify-content-lg-start">
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-3 my-1'>
                  <div className='d-grid'>
                  <i class="fa-solid fa-comments"></i>
                    Chat
                  </div>
                  </div>
                  <div className='col-lg-3 my-1'>
                  <div className='d-grid'>
                  <i class="fa-solid fa-address-book"></i>
                    Contacts
                  </div>
                  </div>
                  <div className='col-lg-3 my-1'>
                  <div className='d-grid'>
                  {/* <i class="fa-solid fa-comments"></i> */}
                    Space
                  </div>
                  </div>
                  <div className='col-lg-3 my-1'>
                  <div className='d-grid'>
                  <i class="fa-solid fa-circle-question"></i>
                    Need Help
                  </div>
                  </div>
                </div>
              </div>
               
              <div class="content-backdrop fade"></div>
            </div>
          
                    




            
        </>
    )
}
export default NewAssistantHelpBar