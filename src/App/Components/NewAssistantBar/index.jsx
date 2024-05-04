// import React from 'react'
import { Link } from 'react-router-dom'
import React, {  useState, useRef, useEffect} from 'react'
import './Styles.scss';

const NewAssistantBar = () => {
    // const handleDropdownClick = (event) => {
       
    //     event.stopPropagation();
    // };
    
   
    // const [show, setShow] = useState(false);
    // const dropdownRef = useRef(null);
    
    
    
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setShow(false);
    //         }
    //     }
    
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [dropdownRef]);
    
    
    // const toggleDropdown = () => setShow(!show);
    return (
        <>
                    
            <div class="">
              <div className='container-fluid top-strip-bg'>
                <div className='row'>
                  <div className='col-lg-3 d-flex align-items-center'>
                    <div className='search-border rounded-pill px-2'>
                      <a class="top-strip-bg dropdown-toggle text-white px-2" data-bs-toggle="dropdown" aria-expanded="false">
                        All
                      </a>
                      <input type="text" className="allInput border-0 search-icon" placeholder='Search(ctrl + k)' />
                      <i class="las la-search la-lg mt-1"></i>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className='col-lg-9 mt-1'>
                    <div className="top_right-col d-flex justify-content-end align-items-center">
                      <p className='mb-0 me-3'>Your are in free plan. <a href="#"> Upgrade</a> or <a href="#">External Trail</a></p>

                      <button className='btn btn-sm btn-success p-0 py-0 m-0 mt-1 me-2' style={{ height: "26px" }}>
                        <i class="ti ti-plus ti-md py-0 m-0 my-0"></i>
                      </button>
                      <i class="ti ti-bell ti-md"></i>
                      <i class="lab la-gg-circle"></i>
                      <i class="ti ti-settings ti-md"></i>
                      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                <ul className="navbar-nav flex-row align-items-center ms-auto">

                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                                <img src="assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="pages-account-settings-account.html">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img src="assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-medium d-block">John Doe</span>
                                                            <small className="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                
                                                    <i className="ti ti-logout me-2 ti-sm"></i>
                                                    <Link className="nav-link d-inline-block" to="/login">Log Out</Link>
                                                    {/* <span className="align-middle">Log Out</span> */}
                                                
                                            </li>
                                            {/* <li>
                                                <a className="dropdown-item" onclick="logout()">
                                                    <i className="ti ti-logout me-2 ti-sm"></i>
                                                    <span className="align-middle">Log Out</span>
                                                </a>
                                            </li> */}
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                    </div>
                  </div>
                </div>
              </div>
               
              {/* <div class="content-backdrop fade"></div> */}
            </div>
          
                    




            
        </>
    )
}
export default NewAssistantBar