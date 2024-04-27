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
      to: "",
      content: "",
      action: ''
    },
    {
      name: "Akram",
      type: "Lorem Ipsum is",
      assistant: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      intent: "Dialogdlow",
      to: "",
      content: "",
      action: ''
    },

  ];
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />
          <div className='layout-page'>
            <TopMenu />
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
                             
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-label-secondary" id="create-user-modal-close"
                                data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="btn btn-primary" onclick="createAction()">
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