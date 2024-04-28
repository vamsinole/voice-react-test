// import React from 'react'
import Header from '../../Components/Header'
import React, {  useState, useRef, useEffect} from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import { Link } from 'react-router-dom'

const NewAssistant = () => {
  const TblData = [
    {
        name: "Akram",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Jhon",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Rahul",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Syam",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
    {
        name: "Ved",
        model: "Lorem Ipsum is",
        instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        type: "Dialogdlow",
        action: ''
    },
];



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
    
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />

          <div className='layout-page'>
            <div class="content-wrapper">
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
                      {/* <button className="btn btn-secondary dropdown-toggle" type="button" onClick={toggleDropdown}>
                          Dropdown button
                      </button> */}
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
                          {/* AllViews tab start */}
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
                  
                    {/* <button type="button" id="new">+ New Assitant</button> */}
                    <button type="button" class="btn btn-primary pull-right"><span class="ti-xs ti ti-plus me-1"></span> 
                    <Link className="nav-link" to="/assistant-dashboard">Create Assitant</Link>
                    </button>
                  </div>
                </div>
              </div>
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="card">
                  <div class="card-header border-bottom">
                    <h4 class="card-title pull-left mb-3">Users</h4>
                    <button type="button" class="btn btn-primary pull-right" data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasAddUser" aria-controls="offcanvasAddUser">
                      <span class="ti-xs ti ti-plus me-1"></span>New User
                    </button>

                  </div>
                  <div class="card-datatable table-responsive">
                    <table class="datatables-voice-agents table">
                      <thead class="border-top">
                        <tr>

                          <th>Name</th>
                          <th>Model</th>
                          <th>Assistants</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddUser"
                    aria-labelledby="offcanvasAddUserLabel">
                    <div class="offcanvas-header">
                      <h5 id="offcanvasAddUserLabel" class="offcanvas-title">Add User</h5>
                      <button type="button" id="close-add-user-canvas" class="btn-close text-reset"
                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                      <form class="add-new-user pt-0" id="addNewUserForm" onsubmit="return false">
                        <div class="row mb-3">
                          <label class="col-sm-12 col-form-label" for="basic-default-name">Name</label>
                          <div class="col-sm-12">
                            <input type="text" class="form-control" id="basic-default-name" placeholder="John Doe" />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-form-label" for="basic-default-email">Email</label>
                          <div class="col-sm-12">
                            <div class="input-group input-group-merge">
                              <input type="text" id="basic-default-email" class="form-control" placeholder="john.doe"
                                aria-label="john.doe" aria-describedby="basic-default-email2" />
                              <span class="input-group-text" id="basic-default-email2">@example.com</span>
                            </div>
                            <div class="form-text">You can use letters, numbers & periods</div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-form-label" for="basic-default-phone">Phone No</label>
                          <div class="col-sm-12">
                            <input type="text" id="basic-default-phone" class="form-control phone-mask"
                              placeholder="658 799 8941" aria-label="658 799 8941" aria-describedby="basic-default-phone" />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-form-label" for="basic-default-password">Password</label>
                          <div class="col-sm-12">
                            <div class="input-group input-group-merge">
                              <input type="password" class="form-control" id="basic-default-password" />
                              <span class="input-group-text cursor-pointer" id="basic-default-password2"><i
                                class="ti ti-eye-off"></i></span>
                            </div>
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-form-label" for="basic-default-website">Website</label>
                          <div class="col-sm-12">
                            <input type="text" class="form-control" id="basic-default-website" placeholder="example.com" />
                          </div>
                        </div>
                        <div class="row mb-3">
                          <label class="col-sm-12 col-form-label" for="basic-default-address">Address</label>
                          <div class="col-sm-12">
                            <textarea id="basic-default-address" class="form-control" placeholder="" aria-label=""
                              aria-describedby="basic-icon-default-message2"></textarea>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit" onclick="createUser()">

                          <span class="ms-2">Submit</span>
                        </button>
                        <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>



{/* <div className='navbar'>


<div className="nav1">
    <div class="dropdown d1">
        <button class="btn btn-secondary dropdown-toggle btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            All
        </button>

        <input type="text" className="input" />

        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>




</div>

<div className="nav2">
    <p>Your are in free plan.</p>
    <p>Upgrade or External Trail</p>
    <i class="bi bi-plus-square-fill plus"></i>
    <i class="bi bi-bell"></i>
    <i class="bi bi-lightning-charge"></i>
    <i class="bi bi-gear-fill"></i>

</div>



</div>

<div className="Content1"> 

<div>
    <i class="bi bi-filter-circle-fill"></i>
</div>

<div>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

            May 2023 Candidates

        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>
</div>

<div>
    <p>Assistants</p>
</div>

<div>
    <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">

            <i class="bi bi-list"></i>

        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
    </div>

    <button type="button" id="new">+ New Assitant</button>


</div>

</div>


<div className="card-datatable table-responsive">
    <table className='table'>
      <thead>
        <tr>
          <th>NAME</th>
          <th>MODEL</th>
          <th>INSTRUCTIONS</th>
          <th>TYPE</th>
          <th style={{ width: '70px' }}>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {TblData.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.name}</td>
              <td>{value.model}</td>
              <td>{value.instruc}</td>
              <td>{value.type}</td>
              <td style={{ width: '70px' }}>
                <div className="d-flex acation-btns">
                  <button className='btn px-1'><i className="las la-play la-lg"></i></button>
                  <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>

  </div> */}
        
    </>
  )
}

export default NewAssistant