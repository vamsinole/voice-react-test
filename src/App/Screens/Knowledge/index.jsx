// import React from 'react'
import Header from '../../Components/Header'
import React, { useState, useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import TopMenu from '../../Components/TopMenu';
import { USER_ENDPOINTS } from '../../../config/enpoints';
import axios from 'axios';

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
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />
          <div className="layout-page">
            <TopMenu />
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div className='row'>
                  <div class="col-4 offset-2 mb-3">
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
                                <tbody>

                                  {files.map((value, key) => {
                                    console.log("mainvalue", value)

                                    return (
                                      <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value}</td>
                                        <td style={{ width: '70px' }}>
                                          <div className="d-flex acation-btns">
                                            <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
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
                        <div class="tab-pane fade show " id="navs-top-url" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header border-bottom row">
                              <div class="col-8">
                                <h4 class="card-title mb-3">URLS</h4>
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
                                <tbody>
                                  {urls.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td>{key}</td>
                                        <td>{value.url}</td>
                                        <td style={{ width: '70px' }}>
                                          <div className="d-flex acation-btns">
                                            <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
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
                        <div class="tab-pane fade show " id="navs-top-faqs" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header border-bottom row">
                              <div class="col-8">
                                <h4 class="card-title mb-3">FAQs</h4>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                                  data-bs-target="#newFileModal">
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
                                            <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
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