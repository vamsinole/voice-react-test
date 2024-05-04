// import React from 'react'
import { Link } from 'react-router-dom'
import React, {  useState, useRef, useEffect} from 'react'
import './Styles.scss';

const NewAssistantHelpBar = () => {
    return (
        <>
            <div class="top-strip-bg py-1 position-sticky bottom-0 w-100">
              <div className='container-fluid'>
                <div className='row d-flex align-items-center'>
                  <div className='col-lg-2'>
                  <div className='d-grid txt-color fz'>
                  <i class="fa-solid fa-comments"></i>
                    Chat
                  </div>
                  </div>
                  <div className='col-lg-2'>
                  <div className='d-grid txt-color fz'>
                  <i class="fa-solid fa-address-book"></i>
                    Contacts
                  </div>
                  </div>
                  <div className='col-lg-6'>
                  <div className='d-grid txt-color'>
                  </div>
                  </div>
                  <div className='col-lg-2'>
                  <div className='txt-color fz'>
                  <i class="fa-solid fa-circle-question me-2"></i>
                    Need Help
                  </div>
                  </div>
                </div>
              </div>
               
              {/* <div class="content-backdrop fade"></div> */}
            </div>
          
                    




            
        </>
    )
}
export default NewAssistantHelpBar