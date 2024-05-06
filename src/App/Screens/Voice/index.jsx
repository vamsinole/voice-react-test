// import React from 'react'
import Header from '../../Components/Header'
import React, { useState, useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import axios from 'axios';
import { USER_ENDPOINTS } from '../../../config/enpoints';
import NewAssistantBar from '../../Components/NewAssistantBar';
import NewAssistantHelpBar from '../../Components/NewAssistantHelpBar';
import { useNavigate } from 'react-router-dom';


const Voice = () => {

  const [showToast, setShowToast] = useState(false);
  const [showToastMessge, setShowToastMessge] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const navigate = useNavigate();
  const [voiceagents, setVoiceAgent] = useState([]);

  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.agentdata;
  const token = localStorage.getItem('token');


//tabledata
  useEffect(() => {
    fetchData();
  }, []); // Run once on component mount

  const fetchData = async () => {
    try {
      const response = await axios.get(baseurl + endpoint, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("responce", response.data.data);
      setVoiceAgent(response.data.data);

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


//AssistDropdown Data
  const [dataFromApi, setDataFromApi] = useState(null);
  const endpointassist = USER_ENDPOINTS.getassist;
  const newagentEvent = async (event) => {
    try {
      const response = await axios.get(baseurl + endpointassist, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setDataFromApi(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  //formdata
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    assistant_id: '',
    is_assistant_connected: '',
    incoming_call_greeting: '',
    outgoing_call_greeting: ''
  });





  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed
  const totalItems = voiceagents.length;
  const totalCountName = voiceagents.length;
  const totalCountModel = voiceagents.reduce((total, item) => total + 1, 0); // Assuming each item has a model
  const totalCountInstruc = voiceagents.reduce((total, item) => total + 1, 0); // Assuming each item has instructions
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = voiceagents.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [isColumnVisible, setIsColumnVisible] = useState(false);

  // Toggle the visibility and adjust classes
  const toggleColumn = () => {
    setIsColumnVisible(!isColumnVisible);
  };
  const handleDropdownClick = (event) => {
    // This stops the dropdown from closing when the dropdown content is clicked
    event.stopPropagation();
  };


 
//Update Formdata
  const [updateformData, setupdateFormData] = useState({
    name: '',
    phone: '',
    assistant_id: '',

  });

  const [editformData, editsetFormData] = useState({
    name: '',
    assistant_id: '',
    phone_number:'',
    speak:'',
    to_number:''

  });


  const handleClickedit = async (event) => {
    newagentEvent();
    editsetFormData(event);
  }

  const edithandleInputChange = (event) => {
    const { name, value } = event.target;
    editsetFormData({
      ...editformData,
      [name]: value,
    });
  };


  const handleUpdate = async (event) => {
    event.preventDefault();
    // Do something with formData, for example, send it to an API
    console.log("formdata", editformData);
    const createvoiceAgent = USER_ENDPOINTS.agentdata;
    try {
      const response = await axios.put(baseurl + createvoiceAgent + '/' + editformData.id, {
        assistant_id: editformData.assistant_id,
        name: editformData.name,
        phone_number: editformData.phone_number
      },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

      fetchData();
      setShowToast(true);
      setShowToastMessge("Updated");
     

    } catch (error) {
      console.error('Error fetching users:', error);
    }


  };


  //Create VoiceAgent
  const handleSubmit = async (event) => {
    event.preventDefault();
    const createvoiceAgent = USER_ENDPOINTS.agentdata;
    console.log("formdata", formData);
    try {
      const response = await axios.post(baseurl + createvoiceAgent, formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

      fetchData();
      setShowToast(true);
      setShowToastMessge("Created");
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleCall = async (event) => {
    event.preventDefault();
    const createvoiceAgent = USER_ENDPOINTS.makecall;
    console.log("editformData33", editformData);
    try {
      const response = await axios.post(baseurl + createvoiceAgent+'/'+editformData.id+'/makeCall', {
        speak:editformData.speak,
        to_number:editformData.to_number
      },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        fetchData();
        setShowToast(true);
        setShowToastMessge("Call Successfully done");
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteAgent = async (event) => {
    event.preventDefault();
    const deleteAgent = USER_ENDPOINTS.agentdata;
    console.log("editformData33", editformData);
    try {
      const response = await axios.delete(baseurl + deleteAgent+'/'+editformData.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

      fetchData();
      setShowToast(true);
      setShowToastMessge("Deleted");

    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  
  
 

  

 





  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />
          <div className='layout-page'>
            <NewAssistantBar />
            <div className='container-fluid'>
              <div className='row mt-3'>
                <div className='col-md-4' onClick={handleDropdownClick}>
                  <span class="dropdown FilterDropdown">
                    <button onClick={toggleColumn} class="btn" type="button">
                      <i class="ti ti-filter ti-md"></i>
                    </button>
                  </span>
                  <span class="dropdown">
                    <button class="btn dropdown-toggle border rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      May 2023 Candidates
                    </button>
                    <div class="dropdown-menu" style={{ width: "300px" }}>
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
                <div class="col-4 mb-3"></div>
                <div className='col-md-4 text-end'>
                  <button class="btn dropdown-toggle border rounded-pill  me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="las la-bars la-lg"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">List</a></li>
                    <li><a class="dropdown-item" href="#">Sheet</a></li>
                  </ul>
                  <button type="button" class="btn btn-primary pull-right" onClick={() => newagentEvent('value1')} data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasAddAgent" aria-controls="offcanvasAddAgent">
                    <span class="ti-xs ti ti-plus me-1" ></span>New Agent
                  </button>
                  {/* <a class="btn btn-primary pull-right text-white" data-bs-toggle="modal"
                      data-bs-target="#createKbsModal">
                    <span class="ti-xs ti ti-plus me-1"></span> New Knowledge base
                    </a> */}
                </div>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="container-fluid flex-grow-1 container-p-y">
                <div className="row">
                  <div className={isColumnVisible ? "col-md-4" : "d-none"}>
                    <div className='card'>
                      {/* <h6><i class="las la-angle-left fw-600"></i>  Filter Consultants</h6> */}
                      {/* accourdian start */}
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Filter Consultants
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <div>
                                {/* <h6><i class="las la-angle-left fw-600"></i>  Filter Consultants</h6> */}
                                <input type="text" placeholder='Choose a property' className="form-control form-control-sm mt-2" />

                                <div className="bg-light p-2 my-3">
                                  <div className="row">
                                    <div className="col-3 col-md-4">
                                      <select className='form-select form-select-sm'>
                                        <option value="">Is</option>
                                      </select>
                                    </div>
                                    <div className="col-9 col-md-8 ps-0">
                                      <input type='text' className='form-control form-control-sm' />
                                    </div>
                                  </div>
                                </div>

                                <h6 className='mb-1'>Email</h6>
                                <div className="row">
                                  <div className="col-3 col-md-4">
                                    <select className='form-select form-select-sm'>
                                      <option value="">Is</option>
                                    </select>
                                  </div>
                                  <div className="col-9 col-md-8 ps-0">
                                    <input type='text' className='form-control form-control-sm' />
                                  </div>
                                </div>
                                <div className='border-top my-2'></div>
                                <h6 className='mb-1'>Created Time</h6>
                                <div className="row">
                                  <div className="col-4 col-md-5 pe-0">
                                    <select className='form-select form-select-sm ps-1 pe-2'>
                                      <option value="">In the Last</option>
                                    </select>
                                  </div>
                                  <div className="col-4 col-md-3">
                                    <input type='text' className='form-control form-control-sm px-1' />
                                  </div>
                                  <div className="col-4 col-md-4 ps-0">
                                    <select className='form-select form-select-sm'>
                                      <option value="">Days</option>
                                    </select>
                                  </div>
                                </div>


                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Heading #2
                            </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              Heading content 2
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Heading #3
                            </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              Heading content 3
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* accourdian end */}
                    </div>
                  </div>
                  <div className={isColumnVisible ? "col-md-8" : "col-md-12"}>
                    <div class="card">
                      <div class="card-header border-bottom">
                        <h4 class="card-title pull-left">Voice Agents</h4>
                        {/* <button type="button" class="btn btn-primary pull-right" data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasAddAgent" aria-controls="offcanvasAddAgent">
                  <span class="ti-xs ti ti-plus me-1"></span>New Agent
                </button> */}

                      </div>
                      <div class="card-datatable table-responsive">
                        <div className="table-scrollable">
                          <table class="datatables-voice-agents table">
                            <thead class="border-top">
                              <tr>
                                <th className='w-px-14'><div class="form-check mb-0">
                                  <input class="email-list-item-input form-check-input" type="checkbox" id="email-1" />
                                  <label class="form-check-label" for="email-1"></label>
                                </div>
                                </th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {voiceagents.map((value, key) => {
                                return (
                                  <tr key={key}>
                                    <td>
                                      <div class="form-check mb-0">
                                        <input class="email-list-item-input form-check-input" type="checkbox" id="email-1" />
                                        <label class="form-check-label" for="email-1"></label>
                                      </div>
                                    </td>
                                    <td>{value.name}</td>
                                    <td>{value.type}</td>
                                    <td>{value.phone_number}</td>
                                    <td>{value.status}</td>
                                    <td style={{ width: '70px' }}>
                                      <div className="d-flex acation-btns">
                                        <button className='btn px-1 la-lg' data-bs-toggle="modal" onClick={() => handleClickedit(value)} data-bs-target="#VioceEdit">
                                          <i class="ti ti-edit ti-sm me-2"></i>
                                        </button>
                                        <button className='btn px-1 la-lg' data-bs-toggle="modal" onClick={() => handleClickedit(value)} data-bs-target="#callUserModal">
                                          <i class="tf-icons ti ti-phone-call"></i>
                                        </button>
                                        <button className='btn px-1 la-lg' data-bs-toggle="modal" onClick={() => handleClickedit(value)}  data-bs-target="#updateAgentModal">
                                          <i className="ti ti-trash ti-sm mx-2"></i>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>

                          </table>
                        </div>
                        <div className='bottom-count'>
                          <table className='datatables-voice-agents table'>
                            <tfoot className='border-top'>
                              <tr>
                                <td>Total NAME: {totalCountName}</td>
                                <td>Count of TYPE: {totalCountModel}</td>
                                <td>Count of PHONE: {totalCountInstruc}</td>
                                <td></td>
                                <td>
                                  {/* Pagination */}
                                  {totalItems > itemsPerPage && (
                                    <ul className="pagination">
                                      {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map((_, index) => (
                                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                          <button className="page-link" onClick={() => paginate(index + 1)}>
                                            {index + 1}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </td>
                              </tr>
                            </tfoot>
                          </table>

                        </div>

                      </div>
                      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddAgent"
                        aria-labelledby="offcanvasAddAgentLabel">
                        <div class="offcanvas-header">
                          <h5 id="offcanvasAddAgentLabel" class="offcanvas-title">Add Agent</h5>
                          <button type="button" id="close-add-agent-canvas" class="btn-close text-reset"
                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                          <form class="add-new-user pt-0" id="addNewUserForm" onSubmit={handleSubmit} >
                            <div class="row mb-3">
                              <label class="col-sm-12 col-form-label" for="basic-default-agent-name">Name</label>
                              <div class="col-sm-12">
                                <input type="text" class="form-control" name='name' value={formData.name} onChange={handleInputChange} id="basic-default-agent-name" placeholder="John Doe" />
                              </div>
                            </div>
                            <div class="row mb-3 select2-primary">
                              <label class="col-sm-12 col-form-label" for="agent-type">Type</label>
                              <div class="col-sm-12">
                                <select id="agent-type" value={formData.type} onChange={handleInputChange} name="type" class="form-select">
                                  <option value="" selected>Select Type</option>
                                  <option value="voice_incoming">Voice Incoming</option>
                                  <option value="voice_outgoing">Voice Outgoing</option>
                                  <option value="voice_both">Both</option>
                                </select>
                              </div>
                            </div>
                            <div class="row mb-3 select2-primary">
                              <label class="form-label" for="agent-assistant">Attach an Assistant</label>
                              <div class="col-sm-12">


                                <select name='assistant_id' value={formData.assistant_id} onChange={handleInputChange} class="form-select">
                                  <option value="">Select Assistant</option>
                                  {dataFromApi?.map(option => (
                                    <option key={option.id} value={option.id}>{option.name}</option>
                                  ))}
                                </select>


                              </div>
                            </div>

                            <button type="submit" onclick="createAgent()" class="btn btn-primary me-sm-3 me-1 data-submit" data-bs-dismiss="offcanvas">

                              <span class="ms-2">Create Agent</span>
                            </button>
                            <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="content-backdrop fade"></div>
            </div>
            <NewAssistantHelpBar />
          </div>
        </div>
      </div>

      {/* modal popup */}
      <div class="modal fade" id="VioceEdit" tabindex="-1" aria-labelledby="VioceEditLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="VioceEditLabel">Update Agent</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form class="add-new-user pt-0" id="addNewUserForm" onSubmit={handleUpdate} >
              <div class="modal-body">
                <div className="container">

                  <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    {console.log("editformData", editformData)}
                    <input type="text" className='form-control' value={editformData?.name} name='name' onChange={edithandleInputChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name">Phone number</label>
                    <input type="text" name='phone_number' value={editformData?.phone_number} onChange={edithandleInputChange} className='form-control' />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name">Attach Assistant</label>
                    <select name='assistant_id' value={editformData?.assistant_id} onChange={edithandleInputChange} class="form-select">
                      <option value="">Select Assistant</option>
                      {dataFromApi?.map(option => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
              </div>
            </form>
          </div>

        </div>

      </div>


      {/* modal popup VioceEdit start*/}
   
      <div class="modal fade" id="callUserModal" tabindex="-1" aria-labelledby="VioceEditLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="VioceEditLabel">Call User</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form class="add-new-user pt-0" id="addNewUserForm" onSubmit={handleCall} >
            <div class="modal-body">
              <div className="container">

                <div className="mb-3">
                  <label htmlFor="name">Initial text</label>
                  <input type="text" className='form-control' name='speak' value={editformData?.speak} onChange={edithandleInputChange} placeholder='How can I help you?' />
                </div>

                <div className="mb-3">
                  <label htmlFor="name">Phone number</label>
                  <input type="number" className='form-control' name='to_number' value={editformData?.to_number} onChange={edithandleInputChange} placeholder='658 799 8941' />
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit"  data-bs-dismiss="modal" class="btn btn-primary">Call User</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* modal popup VioceEdit end*/}

      {/* modal popup VioceEdit start*/}

      <form class="add-new-user pt-0" id="addNewUserForm" onSubmit={deleteAgent} >
      <div class="modal fade" id="updateAgentModal" tabindex="-1" aria-labelledby="VioceEditLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="VioceEditLabel">Delete Agent</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"  aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className="container">

                <p>Are you sure you want to delete this Agent?</p>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Delete Agent</button>
            </div>
          </div>
        </div>
      </div>
      </form>
      {/* modal popup VioceEdit end*/}

      <div className="container">
      
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          className={`toast ${showToast ? 'show' : ''}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto"> {showToastMessge}</strong>
            <button
              type="button"
              className="btn-close"
              onClick={toggleToast}
            ></button>
          </div>
         
        </div>
      </div>
    </div>
    </>
  )
}

export default Voice