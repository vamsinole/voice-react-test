// import React from 'react'
import Header from '../../Components/Header'
import React, { useState, useRef, useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import { USER_ENDPOINTS } from '../../../config/enpoints';
import axios from 'axios';
import NewAssistantBar from '../../Components/NewAssistantBar';
import NewAssistantHelpBar from '../../Components/NewAssistantHelpBar';
import { Link } from 'react-router-dom'

const Knowledge = () => {

  const [knowledge, setKnowledge] = useState([]);
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [faq, setFaq] = useState([]);



  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');



  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getKnowledge;

  const token = localStorage.getItem('token');
  console.log("token", token);
  useEffect(() => {
    const fetchVoiceAgents = async () => {
      try {
        const response = await axios.get(baseurl + endpoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("responceorg", response.data.data.urls);
        setKnowledge(response.data.data);
        setFiles(response.data.data[0].files)
        setUrls(response.data.data[0].urls)
        setFaq(response.data.data[0].faqs)


      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchVoiceAgents();
  }, []);

  const handleSelectChange = (event) => {
    // console.log("selectedvalue",JSON.parse(event.target.value));
    let obj = JSON.parse(event.target.value);
    setFiles(obj.files)
    setUrls(obj.urls)
    setFaq(obj.faqs)
  };


  const TblData = [
    {
      sno: "1",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
    {
      sno: "2",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
  ];
  const UrlTblData = [
    {
      sno: "1",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
    {
      sno: "2",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
  ];
  const FaqTblData = [
    {
      sno: "1",
      question: "What is your name",
      answer: "Mumtaz",
      action: ''
    },
    {
      sno: "1",
      question: "What is your name",
      answer: "Mumtaz",
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



const [isColumnVisible, setIsColumnVisible] = useState(false);

// Toggle the visibility and adjust classes
const toggleColumn = () => {
  setIsColumnVisible(!isColumnVisible);
};

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />
          <div className="layout-page">
          <NewAssistantBar/>
          <div className='container-fluid'>
                <div className='row my-3'>
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
                  <div class="col-4 mb-3">
                    <select id="knowledge-base-dd" value={selectedValue} onChange={handleSelectChange} class="form-select">

                      <option value="">Select Knowledge base</option>
                      {console.log("knowledge", knowledge)}
                      {knowledge.map(option => (

                        <option key={option.id} value={JSON.stringify(option)}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='col-md-4 text-end'>
                    <button class="btn dropdown-toggle border rounded-pill  me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="las la-bars la-lg"></i>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">List</a></li>
                      <li><a class="dropdown-item" href="#">Sheet</a></li>
                    </ul>
                    <a class="btn btn-primary pull-right text-white" data-bs-toggle="modal"
                      data-bs-target="#createKbsModal">
                    <span class="ti-xs ti ti-plus me-1"></span> New Knowledge base
                    </a>
                  </div>
                </div>
              </div>

            
            <div class="content-wrapper">
              <div class="container-fluid flex-grow-1 container-p-y pt-0">
                {/* <div className='row'>
                  <div class="col-4 offset-3 mb-3">
                    <label class="form-label" for="knowledge-base-dd">Select Knowledge base</label>

                    <select id="knowledge-base-dd" value={selectedValue} onChange={handleSelectChange} class="form-select">

                      <option value="">Select an option</option>
                      {console.log("knowledge", knowledge)}
                      {knowledge.map(option => (

                        <option key={option.id} value={JSON.stringify(option)}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div class="col-1 mb-3">
                    <div class="d-flex align-items-center mt-4">
                    <button className='btn px-1 la-lg' data-bs-toggle="modal" data-bs-target="#updateAgentModal">
                    <i class="ti ti-trash ti-sm mx-2 pointer"></i>
                    </button>
                      
                    </div>
                  </div>
                  <div class="col-4 mb-3">
                    <button type="button" class="btn btn-primary pull-left mt-4" data-bs-toggle="modal"
                      data-bs-target="#createKbsModal">
                      <span class="ti-xs ti ti-plus me-1"></span>New Knowledge base
                    </button>
                  </div>
                </div> */}
                <div className='row'>
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
                              <input type='text' className='form-control form-control-sm'/>
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
                              <input type='text' className='form-control form-control-sm'/>
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
                              <input type='text' className='form-control form-control-sm px-1'/>
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
                  <div className={isColumnVisible ? "col-md-8" : "col-md-12"} id="kbs-content">
                    <div class="nav-align-top nav-tabs-shadow mb-4">
                      <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                          <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-top-files" aria-controls="navs-top-files" aria-selected="true">
                            Files
                          </button>
                        </li>
                        <li class="nav-item">
                          <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-top-url" aria-controls="navs-top-url" aria-selected="false">
                            URLs
                          </button>
                        </li>
                        <li class="nav-item">
                          <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-top-faqs" aria-controls="navs-top-faqs" aria-selected="false">
                            FAQs
                          </button>
                        </li>
                      </ul>
                      <div class="tab-content">
                        <div class="tab-pane fade show active" id="navs-top-files" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header row">
                              <div class="col-8">
                                <h4 class="card-title">Files</h4>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                                  data-bs-target="#newFileModal">
                                  <span class="ti-xs ti ti-plus me-1"></span>New File
                                </button>
                              </div>
                            </div>
                            <div class="card-datatable table-responsive">
                              <div className='results'>
                              <table class="datatables-files table">
                                <thead class="border-top">
                                  <tr>

                                    <th>S.No</th>
                                    <th>URL</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>

                                  {files.map((value, key) => {
                                    console.log("mainvalue", value)

                                    return (
                                      <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                        <td style={{ width: '70px' }}>
                                        <button className='btn px-1 la-lg' data-bs-toggle="modal" data-bs-target="#updateAgentModal">
                                        <i class="ti ti-trash ti-sm mx-2 pointer"></i>
                                        </button>
                                          {/* <div className="d-flex acation-btns">
                                            <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                                          </div> */}
                                        </td>
                                      </tr>
                                    );


                                  })}
                                </tbody>

                              </table>
                              </div>
                              

                              <div class="parent-div text-center mt-2 mb-2" id="empty-files">
                                <label class="empty-files">No Files at the moment.</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade show " id="navs-top-url" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header border-bottom row">
                              <div class="col-8">
                                <h4 class="card-title mb-3">URLS</h4>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                                  data-bs-target="#newUrlModal">
                                  <span class="ti-xs ti ti-plus me-1"></span>New URLS
                                </button>
                              </div>
                            </div>
                            <div class="card-datatable table-responsive">
                              <table class="datatables-files table">
                                <thead class="border-top">
                                  <tr>

                                    <th>S.No</th>
                                    <th>URL</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {urls.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value.url}</td>
                                        <td style={{ width: '70px' }}>
                                        <button className='btn px-1 la-lg' data-bs-toggle="modal" data-bs-target="#updateAgentModal">
                                        <i class="ti ti-trash ti-sm mx-2 pointer"></i>
                                        </button>
                                          {/* <div className="d-flex acation-btns">
                                            <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                                          </div> */}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>

                              </table>

                              <div class="parent-div text-center mt-2 mb-2" id="empty-files">
                                <label class="empty-files">No Files at the moment.</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade show " id="navs-top-faqs" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header border-bottom row">
                              <div class="col-8">
                                <h4 class="card-title mb-3">FAQs</h4>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                                  data-bs-target="#newFaqModal">
                                  <span class="ti-xs ti ti-plus me-1"></span>New FAQ
                                </button>
                              </div>
                            </div>
                            <div class="card-datatable table-responsive">
                              <table class="datatables-files table">
                                <thead class="border-top">
                                  <tr>

                                    <th>S.No</th>
                                    <th>QUESTION</th>
                                    <th>ANSWER</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {faq.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td>{value.sno}</td>
                                        <td>{value.question}</td>
                                        <td>{value.answer}</td>
                                        <td style={{ width: '70px' }}>
                                          <div className="d-flex acation-btns">
                                            <button className='btn px-1'><i className="ti ti-trash ti-sm mx-2"></i></button>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>

                              </table>

                              <div class="parent-div text-center mt-2 mb-2" id="empty-files">
                                <label class="empty-files">No Files at the moment.</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <NewAssistantHelpBar/>
          </div>

          <div class="modal fade" id="createKbsModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Create Knowledge base</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col mb-3">
                      <label for="kbs-name" class="form-label">Name</label>
                      <input type="text" id="kbs-name" class="form-control" placeholder="Enter Name" />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-label-secondary" id="create-kbs-close" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" id="create-kbs-close" data-bs-dismiss="modal">
                  Create Knowledge base
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

{/* modal popup Knowledge delete start*/}
<div class="modal fade" id="updateAgentModal" tabindex="-1" aria-labelledby="VioceEditLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="VioceEditLabel">Delete Knowledge base</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div className="container">

             <p>Are you sure you want to delete this Knowledge base?</p>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Delete Knowledge base</button>
          </div>
        </div>
      </div>
    </div>
    {/* modal popup Knowledge delete end*/}

   {/* modal popup New File Start*/}
       <div class="modal fade" id="newFileModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Add File</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="card">
                    <h5 class="card-header">Upload files</h5>
                    <div class="card-body">
                      <form class="dropzone needsclick" id="kbs-files">
                        <label for="kbs-file" class="pointer dz-message needsclick">
                          Drop file here or click to upload. Limit : 10 MB
                        </label>
                        <div class="fallback">
                          <input id="kbs-file" name="file" type="file" />
                        </div>
                        <div class="parent-div" id="kbs-filename-parent" style={{ 'block' : 'none' }}>
                          <label class="form-label"></label>
                          <i class="ti ti-x pull-right pointer" id="kbs-clear-file"></i>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-label-secondary" id="add-file-close" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" onclick="addFile()"><span id="add-file-button-loader"
                       style={{ 'block' : 'none' }}>
                      <span class="spinner-border" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </span>
                    <span class="ms-2">Add File</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* modal popup New File End*/}
          {/* modal popup New URLs Start*/}
          <div class="modal fade" id="newUrlModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Add URL</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col mb-3">
                      <label for="kbs-url" class="form-label">URL</label>
                      <input type="text" id="kbs-url" class="form-control" placeholder="Enter URL" />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-label-secondary" id="add-url-close" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" onclick="addURL()"><span id="add-url-button-loader"
                      style={{ 'block' : 'none' }}>
                      <span class="spinner-border" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </span>
                    <span class="ms-2">Add URL</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* modal popup New URLs End*/}
          {/* modal popup New Faq Start*/}
          <div class="modal fade" id="newFaqModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Add Faq</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col mb-3">
                      <label for="kbs-faq-question" class="form-label">Question</label>
                      <input type="text" id="kbs-faq-question" class="form-control" placeholder="Enter Question" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col mb-3">
                      <label for="kbs-faq-answer" class="form-label">Answer</label>
                      <input type="text" id="kbs-faq-answer" class="form-control" placeholder="Enter Answer" />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-label-secondary" id="add-faq-close" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary" onclick="addFaq()"><span id="add-faq-button-loader"
                     style={{ 'block' : 'none' }}>
                      <span class="spinner-border" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </span>
                    <span class="ms-2">Add Faq</span></button>
                </div>
              </div>
            </div>
          </div>
          {/* modal popup New Faq End*/}
          

    </>
  )
}

export default Knowledge