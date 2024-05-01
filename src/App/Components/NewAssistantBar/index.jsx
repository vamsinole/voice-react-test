// import React from 'react'
import { Link } from 'react-router-dom'
import React, {  useState, useRef, useEffect} from 'react'
import './Styles.scss';

const NewAssistantBar = () => {
    const handleDropdownClick = (event) => {
        // This stops the dropdown from closing when the dropdown content is clicked
        event.stopPropagation();
    };
    
    // toggle dropdown menu
    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);
    
    
    // This hook handles clicks outside of the dropdown to close it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShow(false);
            }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);
    
    
    const toggleDropdown = () => setShow(!show);
    return (
        <>
                    
            <div class="content-wrapper justify-content-lg-start">
              <div className='container-fluid top-strip-bg'>
                <div className='row'>
                  <div className='col-lg-3 my-1'>
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
                    <div className="top_right-col">
                      <p className='mt-1 me-4'>Your are in free plan. <a href="#"> Upgrade</a> or <a href="#">External Trail</a></p>

                      <button className='btn btn-sm btn-success p-0 py-0 m-0 mt-1 me-2' style={{ height: "26px" }}>
                        <i class="ti ti-plus ti-md py-0 m-0 my-0"></i>
                      </button>
                      <i class="ti ti-bell ti-md"></i>
                      <i class="lab la-gg-circle"></i>
                      <i class="ti ti-settings ti-md"></i>
                    </div>
                  </div>
                </div>
              </div>
               <div className='container-fluid'>
                <div className='row my-3'>
                 
                  <div className='col-md-4' onClick={handleDropdownClick}>
                    {/* filter dropdown start */}
                    <span class="dropdown FilterDropdown">
                      <button class="btn" type="button" id="FilterDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-filter ti-md"></i>
                      </button>
                      <div class="dropdown-menu " aria-labelledby="FilterDropdownMenu"  >
                        <h6><i class="las la-angle-left fw-600"></i>  Filter Consultants</h6>
                        <ul class="list-group">
                          <li class="list-group-item active" aria-current="true">Choose a Property</li>
                          <li class="list-group-item">
                            <a href="#" onClick={toggleDropdown}>Created by</a>
                          </li>
                          <li class="list-group-item">
                            <a href="#" onClick={toggleDropdown}>Created time</a>
                          </li>
                        </ul>
                      </div>
                    </span>
                    <span className="dropdown" ref={dropdownRef}>
                     
                      <div className={`dropdown-menu${show ? ' show' : ''}`} style={{ position: 'absolute', left: 'auto', left: "125px", top:"125px",minWidth:"300px",padding:"10px" }}>
                        <h6><i class="las la-angle-left fw-600"></i>  Filter Consultants</h6>
                         <input type="text" placeholder='Choose a property' className="form-control" />

                         <div className="bg-light p-2 my-3">
                          <h6>Created by</h6>
                          <div className="row">
                            <div className="col-3 col-md-4">
                              <select className='form-select'>
                                <option value="">Is</option>
                              </select>
                            </div>
                            <div className="col-9 col-md-8 ps-0">
                              <input type='text' className='form-control'/>
                            </div>
                          </div>
                          </div>

                          <h6>Email</h6>
                          <div className="row">
                            <div className="col-3 col-md-4">
                              <select className='form-select'>
                                <option value="">Is</option>
                              </select>
                            </div>
                            <div className="col-9 col-md-8 ps-0">
                              <input type='text' className='form-control'/>
                            </div>
                          </div>
                          <hr />
                          <h6>Created Time</h6>
                          <div className="row">
                            <div className="col-4 col-md-5 pe-0">
                              <select className='form-select ps-1 pe-2'>
                                <option value="">In the Last</option>
                              </select>
                            </div>
                            <div className="col-4 col-md-3">
                              <input type='text' className='form-control px-1'/>
                            </div>
                            <div className="col-4 col-md-4 ps-0">
                              <select className='form-select'>
                                <option value="">Days</option>
                              </select>
                            </div>
                          </div>

                        
                      </div>
                  </span>

                    {/* filter dropdown end */}
                    
                    <span class="dropdown">
                      <button class="btn dropdown-toggle border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        May 2023 Candidates
                      </button>
                      <div class="dropdown-menu" style={{width: "300px"}}>
                        <ul class="nav nav-tabs">
                          <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#AllViews">All Views</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#Favorites">Favorites</a>
                          </li>
                         
                        </ul>
                        <div class="tab-content px-3 pb-0">
                          
                          <div class="tab-pane  active" id="AllViews">
                            <input type="text" className='form-control position-relative' />
                            <i class="las la-search la-lg"></i>

                            <div className="SharedWithCard">
                              <h5 className='mb-2 mt-3'>Shared with me</h5>
                              <p><i class="las la-star text-primary"></i> Move to Bench/Training</p>

                              <h5 className='mb-2 mt-3'>Public Views</h5>
                              <ul className='list-unstyled ps-3 lh-base'>
                                <li>All Consutants</li>
                                <li>Co-Owner Consutants</li>
                                <li>Diwali Build mails</li>
                                <li>Follow up calls</li>
                              </ul>
                             </div>
                             <button className='btn text-primary'><i class="las la-plus la-lg"></i> Create View</button>
                          </div>
                          {/* AllViews tab end */}

                          <div class="tab-pane fade" id="Favorites">2...</div>
                        </div>
                      </div>
                    </span>

                  </div>
                  <div className='col-md-4'>
                    Title
                  </div>
                  <div className='col-md-4 text-end'>
                    <button class="btn dropdown-toggle border rounded-pill  me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="las la-bars la-lg"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">List</a></li>
                      <li><a class="dropdown-item" href="#">Sheet</a></li>
                    </ul>
                    <a class="btn btn-primary pull-right">
                    <Link className="nav-link" to="/assistant-dashboard"><span class="ti-xs ti ti-plus me-1"></span> Create Assistant</Link>
                    </a>
                  </div>
                </div>
              </div>
              <div class="content-backdrop fade"></div>
            </div>
          
                    




            
        </>
    )
}
export default NewAssistantBar