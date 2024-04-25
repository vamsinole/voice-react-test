import React, { useState,useEffect } from 'react'
import './home-style.scss';
import env from '../../../config';
import Header from '../../Components/Header';
import TopMenu from '../../Components/TopMenu';
import axios from 'axios';



const Home = () => {


  
  
  


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response =  await axios.post('http://146.148.89.120/v1/login', {
    "email": "vamsi@voice.com",
    "password": "password",
  });

  const token = response.data.data.token;
  localStorage.setItem('token', token);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const [parentValue, setParentValue] = useState('');
  const [childValue, setChildValue] = useState('');
  const [showAdditionalFields, setShowAdditionalFields] = useState(false); 

  const parentOptions = [
    { label: 'Open AI GPT', value: 'openai' },
    { label: 'Dilogflow', value: 'dilogflow' },
    // { label: 'Parent 3', value: 'parent3' }
  ];


  const getChildOptions = (parentValue) => {
    switch(parentValue) {
      
        case 'dilogflow':
        return [
        { label: 'Dining Out', value: 'dining-out' },
        { label: 'Banking', value: 'banking' },
        { label: 'Job Interview', value: 'job-interview' },
        { label: 'Hotel Booking', value: 'hotel-booking' },
        { label: 'Support', value: 'support' },
        { label: 'Flight Reservations', value: 'flights' }
        ];
      
      default:
        return [];
    }
  };
 // Event handler for parent dropdown change
 const handleParentChange = (event) => {
  const selectedParentValue = event.target.value;
  setParentValue(selectedParentValue);
  // Reset child value when parent changes
  setChildValue('');
  setShowAdditionalFields(selectedParentValue === 'openai');
};

// Event handler for child dropdown change
const handleChildChange = (event) => {
  const selectedChildValue = event.target.value;
  setChildValue(selectedChildValue);
};
  const TblData = [
    {
      name: "Akram",
      model: "Lorem Ipsum is",
      instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action:''
    },
    {
      name: "Jhon",
      model: "Lorem Ipsum is",
      instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action:''
    },
    { 
      name: "Rahul",
      model: "Lorem Ipsum is",
      instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action:''
    },
    { 
      name: "Syam",
      model: "Lorem Ipsum is",
      instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action:''
    },
    { 
      name: "Ved",
      model: "Lorem Ipsum is",
      instruc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action:''
     },
  ];
  return (
    <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Header/>

                    <div className="layout-page">
                        <TopMenu/>
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="card">
                                <div class="card-header border-bottom">
                <h4 class="card-title pull-left mb-3">Assistants</h4>
                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasAddAssistant" aria-controls="offcanvasAddAssistant">
                  <span class="ti-xs ti ti-plus me-1"></span>New Assistant
                </button>
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

        </div>
                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddAssistant"
                aria-labelledby="offcanvasAddAssistantLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasAddAssistantLabel" class="offcanvas-title">Add Assistant</h5>
                  <button type="button" class="btn-close text-reset" id="close-add-assistant-canvas"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                  <form class="add-new-assistant pt-0" id="addNewAssistantForm" onsubmit="return false">
                    <div class="mb-3">
                      <label class="form-label" for="assistant-name">Assistant Name</label>
                      <input type="text" class="form-control" id="assistant-name" placeholder="John Doe" name="name"
                        aria-label="John Doe" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="assistant-description">Assistant description</label>
                      <textarea type="text" class="form-control" id="assistant-description" placeholder="Hello"
                        name="description" aria-label="Hello"></textarea>
                    </div>
                    <div>

                    <div class="mb-3">
                    <label class="form-label" for="assistant-type">Type</label>
                    <select value={parentValue} onChange={handleParentChange} class="form-select">
                        <option value="">Select Type</option>
                        {parentOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                      </select>
                      </div>
      
                      {parentValue && (
                      <div  class="mb-3">
                        <label class="form-label" for="dialogflow-type">Base Type</label>
                        <select value={childValue} onChange={handleChildChange} class="form-select">
                        <option value="">Select Type</option>
                        {getChildOptions(parentValue).map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>

          {/* <select value={childValue} onChange={handleChildChange}>
            <option value="">Select Child</option>
            {getChildOptions(parentValue).map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select> */}
        </div>
      )}
      {showAdditionalFields && (
      <>
        <div className="mb-3" id="open-ai-instructions">
          <label className="form-label" htmlFor="assistant-instructions">Instructions</label>
          <textarea id="assistant-instructions" className="form-control" placeholder="Act as a Maths teacher" aria-label="Act as a Maths teacher" name="instructions"></textarea>
        </div>
        <div className="mb-3" id="open-ai-api-key">
          <label className="form-label" htmlFor="assistant-api-key">API Key <span className="ti ti-info-circle tf-icons" data-bs-toggle="tooltip" data-bs-placement="right" title="This is optional, we will use our key if you leave this empty"></span></label>
          <input type="text" id="assistant-api-key" className="form-control" placeholder="API key" aria-label="API key" name="apiKey" />
        </div>
        <div class="mb-3" id="open-ai-files">
                      <div class="card">
                        <h5 class="card-header">Upload files</h5>
                        <div class="card-body">
                          <form class="dropzone needsclick" id="dropzone-multi">
                            <label for="assistant-file" class="pointer dz-message needsclick">
                              Drop file here or click to upload (CSV or XLSX file only). Limit : 100 MB
                            </label>
                            <div class="fallback">
                              <input id="assistant-file" name="file" type="file" />
                            </div>
                            <div class="parent-div" id="filename-parent">
                              <label class="form-label"></label>
                              <i class="ti ti-x pull-right pointer" id="clear-file"></i>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    
                    
      </>
    )}
    </div>

                  
      
                    {/* <div class="mb-3">
                      <label class="form-label" for="assistant-type">Type</label>
                      <select id="assistant-type" onchange="changeAssistantType()"
                       class="form-select">
                        <option value="" selected>Select Type</option>
                        <option value="open_ai">Open AI GPT</option>
                        <option value="dialogflow">Dilogflow</option>
                      </select>
                    </div> */}
                    {/* <div class="mb-3" id="dialogflow-type-parent" style={{ display: 'none' }}>
                      <label class="form-label" for="dialogflow-type">Base Type</label>
                      <select id="dialogflow-type" onchange="changeAssistantType()" class="form-select">
                        <option value="" selected>Select Type</option>
                        <option value="dining-out">Dining Out</option>
                        <option value="banking">Banking</option>
                        <option value="job-interview">Job Interview</option>
                        <option value="hotel-booking">Hotel Booking</option>
                        <option value="support">Support</option>
                        <option value="flights">Flight Reservations</option>
                      </select>
                    </div> */}
                    <div class="mb-3" id="open-ai-model" style={{ display: 'none' }}>
                      <label class="form-label" for="assistant-model">Model type</label>
                      <select id="assistant-model" class="form-select">
                        <option value="" selected>Select Model</option>
                        <option value="gpt-3.5-turbo-0125">GPT-3.5-turbo-0125 (Recommended)</option>
                        <option value="gpt-3.5-turbo-0613">GPT-3.5-turbo-0613</option>
                        <option value="gpt-3.5-turbo-1106">GPT-3.5-turbo-1106</option>
                      </select>
                    </div>
                    
                    <div class="mb-3" id="open-ai-instructions" style={{ display: 'none' }}>
                      <label class="form-label" for="assistant-instructions">Instructions</label>
                      <textarea type="text" id="assistant-instructions" class="form-control"
                        placeholder="Act as a Maths teacher" aria-label="Act as a Maths teacher"
                        name="instructions"></textarea>
                    </div>
                    <div class="mb-3" id="open-ai-api-key" style={{ display: 'none' }}>
                      <label class="form-label" for="assistant-api-key">API Key <span class="ti ti-info-circle tf-icons"
                          data-bs-toggle="tooltip" data-bs-placement="right"
                          title="This is optional, we will use our key if you leave this empty"></span></label>
                      <input type="text" id="assistant-api-key" class="form-control" placeholder="API key"
                        aria-label="API key" name="apiKey" />
                    </div>
                    
                    <div class="mb-3" id="open-ai-files" style={{ display: 'none' }}>
                      <div class="card">
                        <h5 class="card-header">Upload files</h5>
                        <div class="card-body">
                          <form class="dropzone needsclick" id="dropzone-multi">
                            <label for="assistant-file" class="pointer dz-message needsclick">
                              Drop file here or click to upload (CSV or XLSX file only). Limit : 100 MB
                            </label>
                            <div class="fallback">
                              <input id="assistant-file" name="file" type="file" />
                            </div>
                            <div class="parent-div" id="filename-parent" style={{ display: 'none' }}>
                              <label class="form-label"></label>
                              <i class="ti ti-x pull-right pointer" id="clear-file"></i>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit" onclick="createAssistant()">
                      <span id="create-assistant-button-loader" style={{ display: 'none' }}>
                        <span class="spinner-border" role="status" aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                      </span>
                      <span class="ms-2">Create Assistant</span>
                    </button>
                    <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                  </form>
                </div>
                                    </div>
                                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTestAssistant"
                                      aria-labelledby="offcanvasTestAssistantLabel">
                                      <div class="offcanvas-header">
                                        <h5 id="offcanvasTestAssistantLabel" class="offcanvas-title">Test Assistant</h5>
                                        <button type="button" class="btn-close text-reset" id="close-test-assistant-canvas"
                                          data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                      </div>
                                      <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                                        <form class="add-new-assistant pt-0" id="addNewAssistantForm" onsubmit="return false">
                                          <div class="mb-3">
                                            <label class="form-label" for="test-instruction">Instruction</label>
                                            <input type="text" class="form-control" id="test-instruction" placeholder="Ask me anything"
                                              name="name" aria-label="Ask me anything" />
                                          </div>
                                          <div class="mb-3">
                                            <label class="form-label" id="test-assistant-response"></label>
                                          </div>
                                          <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit" onclick="testAssistant()">
                                            <span id="test-assistant-button-loader" style={{ display: 'none' }}>
                                              <span class="spinner-border" role="status" aria-hidden="true"></span>
                                              <span class="visually-hidden">Loading...</span>
                                            </span>
                                            <span class="ms-2">Test</span>
                                          </button>
                                          <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                        </form>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

         
        </>
  )
}

export default Home