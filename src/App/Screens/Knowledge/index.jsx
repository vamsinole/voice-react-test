// import React from 'react'
import Header from '../../Components/Header'
import React, { useState } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';

const Knowledge = () => {
  return (
    <>
        <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
        <Header/>
        <div className="layout-page">
            <TopMenu/>
            <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div className='row'>
              <div class="col-4 offset-2 mb-3">
                <label class="form-label" for="knowledge-base-dd">Select Knowledge base</label>
                <select id="knowledge-base-dd" onchange="changeKbs()" class="form-select">
                </select>
              </div>
              <div class="col-1 mb-3">
                <div class="d-flex align-items-center mt-4">
                  <a data-bs-toggle="modal" data-bs-target="#deleteKbsModal" class="text-body delete-record">
                    <i class="ti ti-trash ti-sm mx-2 pointer"></i>
                  </a>
                </div>
              </div>
              <div class="col-4 mb-3">
                <button type="button" class="btn btn-primary pull-left mt-4" data-bs-toggle="modal"
                  data-bs-target="#createKbsModal">
                  <span class="ti-xs ti ti-plus me-1"></span>New Knowledge base
                </button>
              </div>
              </div>
              <div className='row'>
              <div class="col-12" id="kbs-content">
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
                  <div class="card-header border-bottom row">
                  <div class="col-8">
                            <h4 class="card-title mb-3">Files</h4>
                          </div>
                          <div class="col-4">
                            <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                              data-bs-target="#newFileModal">
                              <span class="ti-xs ti ti-plus me-1"></span>New File
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
                  {/* <button type="button" class="btn btn-primary" onclick="createKnowledgeBase()"><span
                      id="create-kbs-button-loader" style="display: none;">
                      <span class="spinner-border" role="status" aria-hidden="true"></span>
                      <span class="visually-hidden">Loading...</span>
                    </span>
                    <span class="ms-2">Create Knowledge base</span></button> */}
                </div>
              </div>
            </div>
          </div>
    </div>
    </div>
        
    </>
  )
}

export default Knowledge