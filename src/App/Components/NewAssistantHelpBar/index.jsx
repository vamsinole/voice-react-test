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
                  <div className='txt-color fz'>
                  <i class="fa-solid fa-comments me-2"></i>
                    Chat
                  </div>
                  </div>
                  <div className='col-lg-2'>
                  <div className='txt-color fz'>
                  <i class="fa-solid fa-address-book me-2"></i>
                    Contacts
                  </div>
                  </div>
                  <div className='col-lg-6'>
                  <div className='txt-color'>
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