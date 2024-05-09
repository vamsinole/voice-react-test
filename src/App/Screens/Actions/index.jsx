/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import Header from "../../Components/Header";
import React, { useState, useEffect } from "react";
import env from "../../../config";
import "./Styles.scss";
import { USER_ENDPOINTS } from "../../../config/enpoints";
// import axios from 'axios';
import axios from "../axiosInterceptor";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Actions = () => {
  const [showToast, setShowToast] = useState(false);
  const [showToastMessge, setShowToastMessge] = useState(false);
  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const [dataFromApi, setDataFromApi] = useState(null);
  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getaction;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseurl + endpoint + "23", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("responceActions", response.data.data);

      setDataFromApi(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [voiceagents, setVoiceAgent] = useState([]);
  const endpointVoice = USER_ENDPOINTS.agentdata;
  useEffect(() => {
    const fetchVoice = async () => {
      try {
        const response = await axios.get(baseurl + endpointVoice, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("responceVoice22", response.data.data);
        setVoiceAgent(response.data.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchVoice();
  }, []);

  const changeVoiceAgent = async (event) => {
    const newValue = event.target.value;

    // Make API call with the new selected value
    try {
      const response = await axios.get(baseurl + endpoint + newValue, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("responceActions", response.data.data);

      setDataFromApi(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [isColumnVisible, setIsColumnVisible] = useState(false);
  const toggleColumn = () => {
    setIsColumnVisible(!isColumnVisible);
  };

  const [Actionobj, setActionobj] = useState("");

  const endpointDelete = USER_ENDPOINTS.getaction;
  const updateActionObj = async (event) => {
    console.log("updatevalorg", event);
    setActionobj(event);

    setFormData(event);

    console.log("updateval", formData);
  };

  const deleteRecord = async (event) => {
    // Make API call with the new selected value
    try {
      const response = await axios.delete(
        baseurl + endpointDelete + Actionobj.agent_id + "/" + Actionobj.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      fetchUsers();
      setShowToast(true);
      setShowToastMessge("Deleted Successfully");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    assistant_id: "",
    name: "",
    action_name: "", // need to get from dilaogflow actions
    type: "",
    to: "", // can be comma seperated values
    cc: null,
    subject: "",
    content: "",
    parameters: ["", ""],
    smstype: "",
    smsto: "",
    smscontent: "",
    smsparameters: [],
    url: "",
    method: "",
    body: {},
    qs: {},
    headers: {},
    parameter: [""],
    response_map: [""],
    status_code_map: [""],
  });

  //unsetformData

  const newActionView = async (event) => {
    setFormData({
      assistant_id: "",
      name: "",
      action_name: "", // need to get from dilaogflow actions
      type: "",
      to: "", // can be comma seperated values
      cc: null,
      subject: "",
      content: "",
      parameters: ["", ""],
      smstype: "",
      smsto: "",
      smscontent: "",
      smsparameters: [],
      url: "",
      method: "",
      body: {},
      qs: {},
      headers: {},
      parameter: [""],
      response_map: [""],
      status_code_map: [""],
    });
  };

  //create action api

  const endpointCreate = USER_ENDPOINTS.getaction;
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formdatausers", formData);
    try {
      const response = await axios.post(
        baseurl + endpointCreate + formData.action_name,
        {
          assistant_id: formData.assistant_id,
          name: formData.name,
          action_name: formData.action_name, // need to get from dilaogflow actions
          type: formData.type,
          email: [
            {
              to: formData.to, // can be comma seperated values
              cc: formData.cc,
              subject: formData.subject,
              content: formData.content,
              parameters: [],
            },
          ],
          sms: [
            {
              type: formData.smstype,
              to: "",
              content: formData.smscontent,
              parameters: [],
            },
          ],
          webhook: [
            {
              url: formData.url,
              method: formData.method,
              body: { key: formData.bodykey, value: formData.bodyvalue },
              qs: {},
              headers: { key: formData.headerkey, value: formData.headervalue },
              parameter: [""],
              response_map: [""],
              status_code_map: [""],
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      fetchUsers();
      setShowToast(true);
      setShowToastMessge("Created Successfully");
    } catch (error) {
      setShowToast(true);
      setShowToastMessge("Error");
      console.error("Error fetching users:", error);
    }
  };

  //UpdateAction

  const endpointUpdate = USER_ENDPOINTS.getaction;
  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("formdatausers", formData);
    try {
      const response = await axios.put(
        baseurl + endpointUpdate + Actionobj.agent_id + "/" + Actionobj.id,
        {
          assistant_id: formData.assistant_id,
          name: formData.name,
          action_name: formData.action_name, // need to get from dilaogflow actions
          type: formData.type,
          email: [
            {
              to: formData.to, // can be comma seperated values
              cc: formData.cc,
              subject: formData.subject,
              content: formData.content,
              parameters: [],
            },
          ],
          sms: [
            {
              type: formData.smstype,
              to: "",
              content: formData.smscontent,
              parameters: [],
            },
          ],
          webhook: [
            {
              url: formData.url,
              method: formData.method,
              body: { key: formData.bodykey, value: formData.bodyvalue },
              qs: {},
              headers: { key: formData.headerkey, value: formData.headervalue },
              parameter: [""],
              response_map: [""],
              status_code_map: [""],
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      fetchUsers();
      setShowToast(true);
      setShowToastMessge("Updated");
    } catch (error) {
      setShowToast(true);
      setShowToastMessge("Error");
      console.error("Error fetching users:", error);
    }
  };
  const modules = {
    toolbar: [
      [{ font: [] }, { size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const [assistData, setAssistData] = useState(null);
  const endpointAssist = USER_ENDPOINTS.getassist;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(baseurl + endpointAssist, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("responceAssist", response.data.data);

        setAssistData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const [apiView, setApiView] = useState(true);
  const [mailview, setMailView] = useState(false);
  const [smsView, setSmsView] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);

    const atype = event.target.value;

    console.log("actionType", atype, event.target.value);

    setFormData({
      ...formData,
      type: event.target.value,
    });

    if (atype === "sms") {
      setMailView(false);
      setApiView(false);
      setSmsView(true);
    } else if (atype === "email") {
      setSmsView(false);
      setApiView(false);
      setMailView(true);
    } else {
      setSmsView(false);
      setMailView(false);
      setApiView(true);
    }
  };

  const handleEditorChange = (content) => {
    // setEditorContent(content);
    setFormData({
      ...formData,
      smscontent: content,
    });
  };

  const handleEmailEditorChange = (content) => {
    // setEditorContent(content);
    setFormData({
      ...formData,
      content: content,
    });
  };

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid">
              <div className="row mt-3">
                <div className="col-md-4">
                  <span class="dropdown FilterDropdown">
                    <button onClick={toggleColumn} class="btn" type="button">
                      <i class="ti ti-filter ti-md"></i>
                    </button>
                  </span>
                  <span class="dropdown">
                    <button
                      class="btn dropdown-toggle border rounded-pill"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      May 2023 Candidates
                    </button>
                    <div class="dropdown-menu" style={{ width: "300px" }}>
                      <ul class="nav nav-tabs">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            data-bs-toggle="tab"
                            href="#AllViews"
                          >
                            All Views
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#Favorites"
                          >
                            Favorites
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content px-3 pb-0">
                        <div class="tab-pane  active" id="AllViews">
                          <input
                            type="text"
                            className="form-control position-relative"
                          />
                          <i class="las la-search la-lg"></i>

                          <div className="SharedWithCard">
                            <h5 className="mb-2 mt-3">Shared with me</h5>
                            <p>
                              <i class="las la-star text-primary"></i> Move to
                              Bench/Training
                            </p>

                            <h5 className="mb-2 mt-3">Public Views</h5>
                            <ul className="list-unstyled ps-3 lh-base">
                              <li>All Consutants</li>
                              <li>Co-Owner Consutants</li>
                              <li>Diwali Build mails</li>
                              <li>Follow up calls</li>
                            </ul>
                          </div>
                          <button className="btn text-primary">
                            <i class="las la-plus la-lg"></i> Create View
                          </button>
                        </div>
                        {/* AllViews tab end */}

                        <div class="tab-pane fade" id="Favorites">
                          2...
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div class="col-4 mb-3"></div>
                <div className="col-md-4 text-end">
                  <button
                    class="btn dropdown-toggle border rounded-pill  me-3"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="las la-bars la-lg"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        List
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Sheet
                      </a>
                    </li>
                  </ul>
                  <button
                    type="button"
                    onClick={newActionView}
                    class="btn btn-primary pull-right"
                    data-bs-toggle="modal"
                    data-bs-target="#createActionModal"
                  >
                    <span class="ti-xs ti ti-plus me-1"></span>New Action
                  </button>
                </div>
              </div>
            </div>
            <div class="content-wrapper">
              <div class="container-fluid flex-grow-1 container-p-y">
                <div className="row">
                  <div className={isColumnVisible ? "col-md-4" : "d-none"}>
                    <div className="card">
                      {/* <h6><i class="las la-angle-left fw-600"></i>  Filter Consultants</h6> */}
                      {/* accourdian start */}
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Filter Consultants
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <div>
                                {/* <h6><i class="las la-angle-left fw-600"></i>  Filter Consultants</h6> */}
                                <input
                                  type="text"
                                  placeholder="Choose a property"
                                  className="form-control form-control-sm mt-2"
                                />

                                <div className="bg-light p-2 my-3">
                                  <div className="row">
                                    <div className="col-3 col-md-4">
                                      <select className="form-select form-select-sm">
                                        <option value="">Is</option>
                                      </select>
                                    </div>
                                    <div className="col-9 col-md-8 ps-0">
                                      <input
                                        type="text"
                                        className="form-control form-control-sm"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <h6 className="mb-1">Email</h6>
                                <div className="row">
                                  <div className="col-3 col-md-4">
                                    <select className="form-select form-select-sm">
                                      <option value="">Is</option>
                                    </select>
                                  </div>
                                  <div className="col-9 col-md-8 ps-0">
                                    <input
                                      type="text"
                                      className="form-control form-control-sm"
                                    />
                                  </div>
                                </div>
                                <div className="border-top my-2"></div>
                                <h6 className="mb-1">Created Time</h6>
                                <div className="row">
                                  <div className="col-4 col-md-5 pe-0">
                                    <select className="form-select form-select-sm ps-1 pe-2">
                                      <option value="">In the Last</option>
                                    </select>
                                  </div>
                                  <div className="col-4 col-md-3">
                                    <input
                                      type="text"
                                      className="form-control form-control-sm px-1"
                                    />
                                  </div>
                                  <div className="col-4 col-md-4 ps-0">
                                    <select className="form-select form-select-sm">
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
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Heading #2
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">Heading content 2</div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingThree">
                            <button
                              class="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Heading #3
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">Heading content 3</div>
                          </div>
                        </div>
                      </div>
                      {/* accourdian end */}
                    </div>
                  </div>
                  <div className={isColumnVisible ? "col-md-8" : "col-md-12"}>
                    <div class="card">
                      <div class="card-header border-bottom">
                        <h4 class="card-title pull-left mb-3">Actions</h4>
                      </div>
                      <div className="row mt-3">
                        <div class="col-4 offset-4 mb-3">
                          <select
                            id="knowledge-base-dd"
                            onChange={changeVoiceAgent}
                            class="form-select"
                          >
                            <option value="" selected>
                              Select Agent
                            </option>
                            {/* <option value="23" selected>gpt</option>
                        <option value="22" selected>alex</option> */}
                            {voiceagents.map((option) => (
                              <option key={option.id} value={option.id}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div class="card-datatable table-responsive">
                        <div className="table-scrollable">
                          <table class="datatables-voice-agents table">
                            <thead class="border-top">
                              <tr>
                                <th className="w-px-14">
                                  <div class="form-check mb-0">
                                    <input
                                      class="email-list-item-input form-check-input"
                                      type="checkbox"
                                      id="email-1"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="email-1"
                                    ></label>
                                  </div>
                                </th>
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
                              {dataFromApi
                                ? dataFromApi.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td className="w-px-14">
                                          <div class="form-check mb-0">
                                            <input
                                              class="email-list-item-input form-check-input"
                                              type="checkbox"
                                              id="email-1"
                                            />
                                            <label
                                              class="form-check-label"
                                              for="email-1"
                                            ></label>
                                          </div>
                                        </td>
                                        <td>{value.name}</td>
                                        <td>{value.type}</td>
                                        <td>{value.assistant}</td>
                                        <td>{value.action_name}</td>
                                        <td>{value.sms.to}</td>
                                        <td>{value.sms.content}</td>
                                        <td style={{ width: "70px" }}>
                                          <div className="d-flex acation-btns">
                                            <button
                                              data-bs-toggle="modal"
                                              onClick={() =>
                                                updateActionObj(value)
                                              }
                                              data-bs-target="#updateUserModal"
                                              className="btn px-1"
                                            >
                                              <i class="ti ti-edit ti-sm me-2"></i>
                                            </button>
                                            <button
                                              data-bs-toggle="modal"
                                              onClick={() =>
                                                updateActionObj(value)
                                              }
                                              data-bs-target="#deleteUserModal"
                                              className="btn px-1"
                                            >
                                              <i className="ti ti-trash ti-sm mx-2"></i>
                                            </button>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })
                                : null}
                            </tbody>
                          </table>
                        </div>
                        <div className="bottom-count">
                          <table className="datatables-voice-agents table">
                            <tfoot className="border-top">
                              <tr>
                                <td>Total NAME: </td>
                                <td>Count of TYPE: </td>
                                <td>Count of ASSISTANT:</td>
                                <td></td>
                                <td>
                                  {/* Pagination */}
                                  {/* {totalItems > itemsPerPage && (
        <ul className="pagination">
          {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      )} */}
                                </td>
                              </tr>
                            </tfoot>
                          </table>
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

      {/* Update User Start */}
      <form
        class="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={handleUpdate}
      >
        <div
          class="modal fade updateaction"
          id="updateUserModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">
                  Update Action
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  id="create-action-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col mb-3">
                    <label for="action-agent" class="form-label">
                      Voice Agent{" "}
                    </label>
                    <select
                      id="action-agent"
                      class="form-select"
                      name="action_name"
                      value={formData.action_name}
                      onChange={handleInputChange}
                    >
                      <option value="">--Select--</option>
                      {voiceagents.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label for="action-assistant" class="form-label">
                      Assistant
                    </label>
                    <select
                      id="action-assistant"
                      name="assistant_id"
                      value={formData.assistant_id}
                      onChange={handleInputChange}
                      class="form-select"
                    >
                      <option value="" selected>
                        Select assistant
                      </option>
                      {assistData?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label for="action-name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="action-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      class="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col mb-3">
                    {/* <label for="select-intent-picker" class="form-label">Select Intents</label>
                                  <select id="select-intent-picker" class="select2 form-select">
                                  </select> */}
                    <label for="action-name" class="form-label">
                      Intents
                    </label>
                    <input
                      type="text"
                      id="action-name"
                      class="form-control"
                      placeholder="Enter Intents"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label class="form-label" for="action-type">
                      Action type
                    </label>
                    <select
                      id="action-type"
                      name="type"
                      onChange={handleSelectChange}
                      value={selectedValue}
                      class="form-select"
                    >
                      {/* <option value="" >Select Type</option> */}
                      <option value="webhook" selected>
                        API
                      </option>
                      <option value="email">Send Email</option>
                      <option value="sms">Send SMS</option>
                    </select>
                  </div>
                </div>
                {/* API SELECT START */}
                {apiView && (
                  <div>
                    <div class="row">
                      <label for="action-subject" class="form-label">
                        API headers
                      </label>
                      <div class="row">
                        <div class="col-5 mb-3">
                          <input
                            type="text"
                            name="headerkey"
                            value={formData.headerkey}
                            onChange={handleInputChange}
                            class="form-control"
                            placeholder="Key"
                          />
                        </div>
                        <div class="col-5 mb-3">
                          <input
                            type="text"
                            name="headervalue"
                            value={formData.headervalue}
                            onChange={handleInputChange}
                            class="form-control"
                            placeholder="Value"
                          />
                        </div>
                        {/* <div class="col-2 mb-3">
                                <button type="button" class="btn btn-icon btn-label-primary">
                                  <span class="ti ti-plus"></span>
                                </button>
                                <button type="button"  class="btn btn-icon btn-label-primary">
                                  <span class="ti ti-trash"></span>
                                </button>
                              </div> */}
                      </div>
                    </div>

                    <div class="row">
                      <label for="action-subject" class="form-label">
                        API body{" "}
                        <i
                          class="ti ti-info-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Please give the API data in application/json format"
                        ></i>
                      </label>
                      <div class="col-5 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="bodykey"
                          value={formData.bodykey}
                          onChange={handleInputChange}
                          placeholder="Key"
                        />
                      </div>

                      <div class="col-5 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="bodyval"
                          value={formData.bodyval}
                          onChange={handleInputChange}
                          placeholder="Value"
                        />
                      </div>
                      {/* <div class="col-2 mb-3">
                              <button type="button" class="btn btn-icon btn-label-primary">
                                <span class="ti ti-plus"></span>
                              </button>
                              <button type="button" class="btn btn-icon btn-label-primary">
                                <span class="ti ti-trash"></span>
                              </button>
                            </div> */}
                    </div>
                  </div>
                )}
                {/* API SELECT END */}

                {/* SEND EMAIL SELECT START */}
                {mailview && (
                  <div>
                    <div class="row">
                      <div class="col mb-3">
                        <label for="action-to-email-inp" class="form-label">
                          To Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="to"
                          value={formData.to}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mb-3">
                        <label for="action-cc-email-inp" class="form-label">
                          CC
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="cc"
                          value={formData.cc}
                          onChange={handleInputChange}
                          placeholder="CC"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mb-3">
                        <label for="action-subject" class="form-label">
                          Email Subject
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="card">
                          <label class="card-header">Email content</label>
                          <div class="card-body">
                            <ReactQuill
                              modules={modules}
                              name="content"
                              value={formData.email[0].content}
                              onChange={handleEmailEditorChange}
                              style={{ minHeight: "300px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* SEND EMAIL SELECT END */}

                {/* SEND SMS START */}
                {smsView && (
                  <div>
                    <div class="row" id="action-to-type">
                      <div class="col mb-3">
                        <label class="form-label" for="action-to-type-dd">
                          To type
                        </label>
                        <select
                          id="action-to-type-dd"
                          name="smstype"
                          value={formData.smstype}
                          onChange={handleInputChange}
                          class="form-select"
                        >
                          <option value="callers" selected>
                            Caller
                          </option>
                          <option value="agents">Agents</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="card">
                          <label class="card-header">SMS content</label>
                          <div class="card-body">
                            <ReactQuill
                              modules={modules}
                              value={formData.smscontent}
                              onChange={handleEditorChange}
                              style={{ minHeight: "300px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* SEND SMS END */}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-label-secondary"
                  id="create-user-modal-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  class="btn btn-primary"
                  onclick="createAction()"
                >
                  <span class="ms-2">Update Action</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Delete User Modal Start */}

      <div
        class="modal fade"
        id="deleteUserModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel1">
                Delete user
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col mb-3">
                  <label for="update-user-name" class="form-label">
                    Are you sure you want to delete this User?
                  </label>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-label-secondary"
                id="delete-user-modal-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={deleteRecord}
              >
                <span id="delete-user-button-loader" style={{ block: "none" }}>
                  <span
                    class="spinner-border"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Loading...</span>
                </span>
                <span class="ms-2">Delete User</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Action */}
      <form
        class="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={handleSubmit}
      >
        <div
          class="modal fade"
          id="createActionModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">
                  Create Action
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  id="create-action-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col mb-3">
                    <label for="action-agent" class="form-label">
                      Voice Agent
                    </label>
                    <select
                      id="action-agent"
                      name="action_name"
                      value={formData.action_name}
                      onChange={handleInputChange}
                      class="form-select"
                    >
                      <option value="">--Select--</option>
                      {voiceagents.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label for="action-assistant" class="form-label">
                      Assistant
                    </label>
                    <select
                      id="action-assistant"
                      name="assistant_id"
                      value={formData.assistant_id}
                      onChange={handleInputChange}
                      class="form-select"
                    >
                      <option value="" selected>
                        Select assistant
                      </option>
                      {assistData?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label for="action-name" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="action-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      class="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col mb-3">
                    {/* <label for="select-intent-picker" class="form-label">Select Intents</label> */}
                    {/* <select id="select-intent-picker" class="select2 form-select">
                                  </select> */}
                    <label for="action-name" class="form-label">
                      Intents
                    </label>
                    <input
                      type="text"
                      id="action-name"
                      class="form-control"
                      placeholder="Enter Intents"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col mb-3">
                    <label class="form-label" for="action-type">
                      Action type
                    </label>
                    <select
                      id="action-type"
                      name="type"
                      onChange={handleSelectChange}
                      value={selectedValue}
                      class="form-select"
                    >
                      {/* <option value="" >Select Type</option> */}
                      <option value="webhook" selected>
                        API
                      </option>
                      <option value="email">Send Email</option>
                      <option value="sms">Send SMS</option>
                    </select>
                  </div>
                </div>
                {/* API SELECT START */}

                {apiView && (
                  <div>
                    <div class="row">
                      <label for="action-subject" class="form-label">
                        API headers
                      </label>
                      <div class="row">
                        <div class="col-5 mb-3">
                          <input
                            type="text"
                            name="headerkey"
                            value={formData.headerkey}
                            onChange={handleInputChange}
                            class="form-control"
                            placeholder="Key"
                          />
                        </div>
                        <div class="col-5 mb-3">
                          <input
                            type="text"
                            name="headervalue"
                            value={formData.headervalue}
                            onChange={handleInputChange}
                            class="form-control"
                            placeholder="Value"
                          />
                        </div>
                        {/* <div class="col-2 mb-3">
                                <button type="button" class="btn btn-icon btn-label-primary">
                                  <span class="ti ti-plus"></span>
                                </button>
                                <button type="button"  class="btn btn-icon btn-label-primary">
                                  <span class="ti ti-trash"></span>
                                </button>
                              </div> */}
                      </div>
                    </div>

                    <div class="row">
                      <label for="action-subject" class="form-label">
                        API body{" "}
                        <i
                          class="ti ti-info-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Please give the API data in application/json format"
                        ></i>
                      </label>
                      <div class="col-5 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="bodykey"
                          value={formData.bodykey}
                          onChange={handleInputChange}
                          placeholder="Key"
                        />
                      </div>

                      <div class="col-5 mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="bodyval"
                          value={formData.bodyval}
                          onChange={handleInputChange}
                          placeholder="Value"
                        />
                      </div>
                      {/* <div class="col-2 mb-3">
                              <button type="button" class="btn btn-icon btn-label-primary">
                                <span class="ti ti-plus"></span>
                              </button>
                              <button type="button" class="btn btn-icon btn-label-primary">
                                <span class="ti ti-trash"></span>
                              </button>
                            </div> */}
                    </div>
                  </div>
                )}
                {/* API SELECT END */}

                {/* SEND EMAIL SELECT START */}
                {mailview && (
                  <div>
                    <div class="row">
                      <div class="col mb-3">
                        <label for="action-to-email-inp" class="form-label">
                          To Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="to"
                          value={formData.to}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mb-3">
                        <label for="action-cc-email-inp" class="form-label">
                          CC
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="cc"
                          value={formData.cc}
                          onChange={handleInputChange}
                          placeholder="CC"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mb-3">
                        <label for="action-subject" class="form-label">
                          Email Subject
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="card">
                          <label class="card-header">Email content</label>
                          <div class="card-body">
                            <ReactQuill
                              modules={modules}
                              value={formData.content}
                              onChange={handleEmailEditorChange}
                              style={{ minHeight: "300px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* SEND EMAIL SELECT END */}

                {/* SEND SMS START */}
                {smsView && (
                  <div>
                    <div class="row" id="action-to-type">
                      <div class="col mb-3">
                        <label class="form-label" for="action-to-type-dd">
                          To type
                        </label>
                        <select
                          id="action-to-type-dd"
                          name="smstype"
                          value={formData.smstype}
                          onChange={handleInputChange}
                          class="form-select"
                        >
                          <option value="callers" selected>
                            Caller
                          </option>
                          <option value="agents">Agents</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <div class="card">
                          <label class="card-header">SMS content</label>
                          <div class="card-body">
                            <ReactQuill
                              modules={modules}
                              value={formData.smscontent}
                              onChange={handleEditorChange}
                              style={{ minHeight: "300px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* SEND SMS END */}
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-label-secondary"
                  id="create-user-modal-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  <span class="ms-2">Create Action</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="container">
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            className={`toast ${showToast ? "show" : ""}`}
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
  );
};

export default Actions;
