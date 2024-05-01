// import React from 'react'
import Header from '../../Components/Header'
import React, { useState,useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import axios from 'axios';
import { USER_ENDPOINTS } from '../../../config/enpoints';

const Voice = () => {

  const [voiceagents, setVoiceAgent] = useState([]);

  const baseurl=env.baseUrl;
  const endpoint=USER_ENDPOINTS.agentdata;

  const token=localStorage.getItem('token');
  console.log("token",token);

  useEffect(() => {
    const fetchVoiceAgents = async () => {
      try {
        const response = await axios.get(baseurl+endpoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("responce",response.data.data);
        setVoiceAgent(response.data.data);
        
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchVoiceAgents();
  }, []);
  // const TblData = [
  //   {
  //     name: "gpt",
  //     type: "voice",
  //     phone_number: "1234567895",
  //     status: "Active",
  //     action:''
  //   },
  //   {
  //     name: "gpt",
  //     type: "voice",
  //     phone: "1234567895",
  //     status: "Active",
  //     action:''
  //   },
  //   { 
  //     name: "gpt",
  //     type: "voice",
  //     phone: "1234567895",
  //     status: "Active",
  //     action:''
  //   },
    
  // ];
  return (
    <>
        <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
        <Header/>
        <div className='layout-page'>
            <TopMenu/>
            <div class="content-wrapper">
          

          <div class="container-xxl flex-grow-1 container-p-y">
            <div class="card">
              <div class="card-header border-bottom">
                <h4 class="card-title pull-left mb-3">Voice Agents</h4>
                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasAddAgent" aria-controls="offcanvasAddAgent">
                  <span class="ti-xs ti ti-plus me-1"></span>New Agent
                </button>
                
              </div>
              <div class="card-datatable table-responsive">
                <table class="datatables-voice-agents table">
                  <thead class="border-top">
                    <tr>
                      
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
                    <td>{value.name}</td>
                    <td>{value.type}</td>
                    <td>{value.phone_number}</td>
                    <td>{value.status}</td>
                    <td style={{ width: '70px' }}>
                      <div className="d-flex acation-btns">
                        <button className='btn px-1 la-lg' data-bs-toggle="modal" data-bs-target="#VioceEdit"><i class="lar la-edit"></i></button>
                        <button className='btn px-1 la-lg'><i class="las la-phone-volume"></i></button>
                        <button className='btn px-1 la-lg'><i className="las la-trash-alt"></i></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
                </table>
              </div>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddAgent"
                aria-labelledby="offcanvasAddAgentLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasAddAgentLabel" class="offcanvas-title">Add Agent</h5>
                  <button type="button" id="close-add-agent-canvas" class="btn-close text-reset"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                  <form class="add-new-user pt-0" id="addNewUserForm" onsubmit="return false">
                    <div class="row mb-3">
                      <label class="col-sm-12 col-form-label" for="basic-default-agent-name">Name</label>
                      <div class="col-sm-12">
                        <input type="text" class="form-control" id="basic-default-agent-name" placeholder="John Doe" />
                      </div>
                    </div>
                    <div class="row mb-3 select2-primary">
                      <label class="col-sm-12 col-form-label" for="agent-type">Type</label>
                      <div class="col-sm-12">
                        <select id="agent-type" class="form-select">
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
                        <select id="agent-assistant" class="form-select">
                          <option value="" selected>Select Assistant</option>
                        </select>
                      </div>
                    </div>
                    {/* <div class="row mb-3" id="incoming-greeting" style="display: none;">
                      <label class="col-sm-12 col-form-label" for="basic-default-incoming-greeting">Incoming Greeting
                        Text</label>
                      <div class="col-sm-12">
                        <input type="text" class="form-control" id="basic-default-incoming-greeting"
                          placeholder="Hello! Welcome to ContactsSwing" />
                      </div>
                    </div>
                    <div class="row mb-3" id="outgoing-greeting" style="display: none;">
                      <label class="col-sm-12 col-form-label" for="basic-default-outgoing-greeting">Outgoing Greeting
                        Text</label>
                      <div class="col-sm-12">
                        <input type="text" class="form-control" id="basic-default-outgoing-greeting"
                          placeholder="Hello! Welcome to ContactsSwing" />
                      </div>
                    </div> */}
                    <button type="submit" onclick="createAgent()" class="btn btn-primary me-sm-3 me-1 data-submit">
                      {/* <span id="create-agent-button-loader" style="display: none;">
                        <span class="spinner-border" role="status" aria-hidden="true"></span>
                        <span class="visually-hidden">Loading...</span>
                      </span> */}
                      <span class="ms-2">Create Agent</span>
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

    {/* modal popup */}
    <div class="modal fade" id="VioceEdit" tabindex="-1" aria-labelledby="VioceEditLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="VioceEditLabel">Update Agent</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div className="container">

          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" className='form-control' />
          </div>

          <div className="mb-3">
            <label htmlFor="name">Phone number</label>
            <input type="text" className='form-control' />
          </div>

          <div className="mb-3">
            <label htmlFor="name">Attach Assistant</label>
            <select className='form-select'>
              <option value="">Select</option>
            </select>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Voice