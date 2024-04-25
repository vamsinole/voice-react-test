// import React from 'react'
import Header from '../../Components/Header'
import React, { useState } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';

const Actions = () => {
  const TblData = [
    {
      name: "Akram",
      type: "Lorem Ipsum is",
      assistant: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      intent: "Dialogdlow",
      to:"",
      content:"",
      action:''
    },
    { 
      name: "Akram",
      type: "Lorem Ipsum is",
      assistant: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      intent: "Dialogdlow",
      to:"",
      content:"",
      action:''
    },
    
  ];
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
                <h4 class="card-title pull-left mb-3">Actions</h4>
                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                  data-bs-target="#createActionModal">
                  <span class="ti-xs ti ti-plus me-1"></span>New Action
                </button>
                
              </div>
              <div className='row mt-3'>
              <div class="col-4 offset-4 mb-3">
                <select id="knowledge-base-dd" onchange="changeKbs()" class="form-select">
                <option value="gpt">gpt</option>
                          <option value="alex">alex</option>
                </select>
              </div>
              </div>
              <div class="card-datatable table-responsive">
                <table class="datatables-voice-agents table">
                  <thead class="border-top">
                    <tr>
                      
                      <th>Name</th>
                      <th>Type</th>
                      <th>Assistant</th>
                      <th>Intent</th>
                      <th>To</th>
                      <th>Content</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
              {TblData.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>{value.name}</td>
                    <td>{value.type}</td>
                    <td>{value.assistant}</td>
                    <td>{value.intent}</td>
                    <td>{value.to}</td>
                    <td>{value.content}</td>
                    <td style={{ width: '70px' }}>
                      <div className="d-flex acation-btns">
                        <button className='btn px-1'><i class="lar la-edit"></i></button>
                        <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
                  <div class="modal fade" id="createActionModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel1">Create Action</h5>
                          <button type="button" class="btn-close" id="create-action-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="col mb-3">
                              <label for="action-agent" class="form-label">Voice Agent</label>
                              <select id="action-agent" class="form-select">
                                
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="action-assistant" class="form-label">Assistant</label>
                              <select id="action-assistant" onchange="changeActionAssistant()" class="form-select">
                                <option value="" selected>Select assistant</option>
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label for="action-name" class="form-label">Name</label>
                              <input type="text" id="action-name" class="form-control" placeholder="Enter Name" />
                            </div>
                          </div>
                         
                          <div class="row">
                            <div class="col mb-3">
                              <label for="select-intent-picker" class="form-label">Select Intents</label>
                              <select id="select-intent-picker" class="select2 form-select">
                              </select>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mb-3">
                              <label class="form-label" for="action-type">Action type</label>
                              <select id="action-type" onchange="changeActionType()" class="form-select">
                                <option value="" selected>Select Type</option>
                                <option value="webhook">API</option>
                                <option value="email">Send Email</option>
                                <option value="sms">Send SMS</option>
                              </select>
                            </div>
                          </div>
                          {/* <div class="row" style="display: none;" id="action-to-email">
                            <div class="col mb-3">
                              <label for="action-to-email-inp" class="form-label">To Email</label>
                              <input type="text" id="action-to-email-inp" class="form-control"
                                placeholder="Enter Email" />
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-cc-email">
                            <div class="col mb-3">
                              <label for="action-cc-email-inp" class="form-label">CC</label>
                              <input type="text" id="action-cc-email-inp" class="form-control" placeholder="CC" />
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-to-type">
                            <div class="col mb-3">
                              <label class="form-label" for="action-to-type-dd">To type</label>
                              <select id="action-to-type-dd" onchange="changeToNumberType()" class="form-select">
                                <option value="callers" selected>Caller</option>
                                <option value="agents">Agents</option>
                              </select>
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-to-number">
                            <div class="col mb-3">
                              <label for="action-to-number-inp" class="form-label">To Number</label>
                              <input type="text" id="action-to-number-inp" class="form-control"
                                placeholder="Enter number" />
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-email-subject">
                            <div class="col mb-3">
                              <label for="action-subject" class="form-label">Email Subject</label>
                              <input type="text" id="action-subject" class="form-control" placeholder="Enter Name" />
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-email-content">
                            <div class="col-12">
                              <div class="card">
                                <label class="card-header">Email content</label>
                                <div class="card-body">
                                  <div id="email-content-editor">
                                    <h6>Quill Rich Text Editor</h6>
                                    <p>
                                      Cupcake ipsum dolor sit amet. Halvah cheesecake chocolate bar gummi bears cupcake.
                                      Pie
                                      macaroon bear claw. Soufflé I love candy canes I love cotton candy I love.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-sms-content">
                            <div class="col-12">
                              <div class="card">
                                <label class="card-header">SMS content</label>
                                <div class="card-body">
                                  <div id="sms-content-editor">
                                    <h6>Quill Rich Text Editor</h6>
                                    <p>
                                      Cupcake ipsum dolor sit amet. Halvah cheesecake chocolate bar gummi bears cupcake.
                                      Pie
                                      macaroon bear claw. Soufflé I love candy canes I love cotton candy I love.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-api-main">
                            <label for="action-subject" class="form-label">API details</label>
                            <div class="col-3 mb-3">
                              <select id="api-type" onchange="changeActionType()" class="form-select">
                                <option value="get" selected>GET</option>
                                <option value="post">POST</option>
                              </select>
                            </div>
                            <div class="col-9 mb-3">
                              <input type="text" class="form-control" id="api-endpoint" placeholder="Endpoint" />
                            </div>
                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-api-headers">
                            <label for="action-subject" class="form-label">API headers</label>
                            <div class="row">
                              <div class="col-5 mb-3">
                                <input type="text" class="form-control" id="api-header-key-1" placeholder="Key" />
                              </div>
                              <div class="col-5 mb-3">
                                <input type="text" class="form-control" id="api-header-value-1" placeholder="Value" />
                              </div>
                              <div class="col-2 mb-3">
                                <button type="button" id="add-api-header-1" class="btn btn-icon btn-label-primary"
                                  onclick="addAPIHeaderCreate()">
                                  <span class="ti ti-plus"></span>
                                </button>
                                <button type="button" id="delete-api-header-1" style="display: none;"
                                  class="btn btn-icon btn-label-primary" onclick="deleteAPIHeaderCreate(1)">
                                  <span class="ti ti-trash"></span>
                                </button>
                              </div>
                            </div>

                          </div> */}
                          {/* <div class="row" style="display: none;" id="action-api-body">
                            <label for="action-subject" class="form-label">API body <i class="ti ti-info-circle"
                                data-bs-toggle="tooltip" data-bs-placement="right"
                                title="Please give the API data in application/json format"></i></label>
                            <div class="col-5 mb-3">
                              <input type="text" class="form-control" id="api-body-key-1" placeholder="Key" />
                            </div>
                            <div class="col-5 mb-3">
                              <input type="text" class="form-control" id="api-body-value-1" placeholder="Value" />
                            </div>
                            <div class="col-2 mb-3">
                              <button type="button" id="add-api-body-1" class="btn btn-icon btn-label-primary"
                                onclick="addAPIBodyCreate()">
                                <span class="ti ti-plus"></span>
                              </button>
                              <button type="button" id="delete-api-body-1" style="display: none;"
                                class="btn btn-icon btn-label-primary" onclick="deleteAPIBodyCreate(1)">
                                <span class="ti ti-trash"></span>
                              </button>
                            </div>
                          </div> */}
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-label-secondary" id="create-user-modal-close"
                            data-bs-dismiss="modal">
                            Close
                          </button>
                          <button type="button" class="btn btn-primary" onclick="createAction()">
                            {/* <span id="create-action-button-loader" style="display: none;">
                              <span class="spinner-border" role="status" aria-hidden="true"></span>
                              <span class="visually-hidden">Loading...</span>
                            </span> */}
                            <span class="ms-2">Create Action</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </table>
              </div>
            </div>
          </div>
          <div class="content-backdrop fade"></div>
        </div>
        </div>
    </div>
    </div>
        
    </>
  )
}

export default Actions