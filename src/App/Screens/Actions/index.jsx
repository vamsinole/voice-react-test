/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import Header from "../../Components/Header";
import React, { useState, useEffect } from "react";
import env from "../../../config";
import "./Styles.scss";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { callAPI, toastr_options } from "../../Components/Utils";
// import { MultiSelect } from "react-multi-select-component";

const Actions = () => {
  const [dataFromApi, setDataFromApi] = useState(null);
  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getaction;
  const token = localStorage.getItem("token");
  const [fetchingActions, setFetchingActions] = useState(false);
  const [currentAssistantId, setCurrentAssistantId] = useState("");
  const [currentAssistant, setCurrentAssistant] = useState(null);
  const [totalLength, setTotalLength] = useState(0);

  useEffect(() => {
    // fetchUsers();
  }, []);

  const fetchUsers = async (id) => {
    try {
      setFetchingActions(true);
      let actions_obj = await callAPI(
        "GET",
        baseurl + endpoint + id,
        "",
        token
      );
      console.log("responceActions", actions_obj.data);
      setFetchingActions(false);
      setDataFromApi(actions_obj.data);
      setTotalLength(actions_obj.data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [voiceagents, setVoiceAgent] = useState([]);
  const endpointVoice = USER_ENDPOINTS.getassist;
  useEffect(() => {
    const fetchVoice = async () => {
      try {
        setFetchingActions(true);
        let voice_agents_obj = await callAPI(
          "GET",
          baseurl + endpointVoice,
          "",
          token
        );
        console.log("responceVoice22", voice_agents_obj.data);
        setVoiceAgent(voice_agents_obj.data);
        setCurrentAssistantId(voice_agents_obj.data[0].id);
        setFormData({ ...formData, assistant_id: voice_agents_obj.data[0].id });
        fetchUsers(voice_agents_obj.data[0].id);
        setCurrentAssistant(voice_agents_obj.data[0]);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchVoice();
  }, []);

  const changeVoiceAgent = async (event) => {
    const newValue = event.target.value;
    setCurrentAssistantId(newValue);
    setFormData({ ...formData, assistant_id: newValue });
    let temp_data = voiceagents.map((item) => {
      if (item.id === newValue) {
        setCurrentAssistant(item);
      }
      return item;
    });
    try {
      setFetchingActions(true);
      let fetch_actions_obj = await callAPI(
        "GET",
        baseurl + endpoint + newValue,
        "",
        token
      );
      setFetchingActions(false);
      console.log("responceActions", fetch_actions_obj.data);
      setDataFromApi(fetch_actions_obj.data);
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
      let delete_action_obj = await callAPI(
        "DELETE",
        baseurl + endpointDelete + Actionobj.agent_id + "/" + Actionobj.id,
        "",
        token
      );
      console.log(delete_action_obj);
      fetchUsers();
      toast.success("Action has been deleted successfully", toastr_options);
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
      let create_action_data = {
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
      };
      let create_action_obj = await callAPI(
        "POST",
        baseurl + endpointCreate + formData.assistant_id,
        JSON.stringify(create_action_data),
        token
      );
      console.log(create_action_obj);
      fetchUsers();
      toast.success("Action has been created successfully", toastr_options);
    } catch (error) {
      toast.error("Please try again later", toastr_options);
      console.error("Error fetching users:", error);
    }
  };

  //UpdateAction

  const endpointUpdate = USER_ENDPOINTS.getaction;
  const handleUpdate = async (event) => {
    event.preventDefault();
    console.log("formdatausers", formData);
    try {
      let update_action_data = {
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
      };
      let update_action_obj = await callAPI(
        "PUT",
        baseurl + endpointUpdate + Actionobj.agent_id + "/" + Actionobj.id,
        JSON.stringify(update_action_data),
        token
      );
      console.log(update_action_obj);
      fetchUsers();
      toast.success("Action has been updated successfully", toastr_options);
    } catch (error) {
      toast.success("Please try again later", toastr_options);
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
        let get_assista_obj = await callAPI(
          "GET",
          baseurl + endpointAssist,
          "",
          token
        );
        console.log("responceAssist", get_assista_obj.data);
        setAssistData(get_assista_obj.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const [apiView, setApiView] = useState(false);
  const [mailview, setMailView] = useState(true);
  const [smsView, setSmsView] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const atype = event.target.value;
    let type = event.target.name;

    console.log("actionType", atype, event.target.value);

    setFormData({
      ...formData,
      [type]: event.target.value,
    });

    if (type === "assistant_id") {
      setCurrentAssistantId(event.target.value);
      let temp_data = voiceagents.map((item) => {
        if (item.id === event.target.value) {
          item.intents = item.intents.filter((innerIntent) => {
            return innerIntent && innerIntent.length > 0;
          });
          setCurrentAssistant(item);
          if (!item.intents || item.intents.length === 0) {
            toast.info(
              "There are no intents for this assistant",
              toastr_options
            );
          }
        }
        return item;
      });
    }

    if (type === "type") {
      setSelectedValue(event.target.value);
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
        setApiView(false);
        setMailView(true);
      }
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
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid">
              <div className="row mt-3">
                {/* <div className="col-md-4">
                  <span className="dropdown FilterDropdown">
                    <button
                      onClick={toggleColumn}
                      className="btn"
                      type="button"
                    >
                      <i className="ti ti-filter ti-md"></i>
                    </button>
                  </span>
                  <span className="dropdown">
                    <button
                      className="btn dropdown-toggle border rounded-pill"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      May 2023 Candidates
                    </button>
                    <div className="dropdown-menu" style={{ width: "300px" }}>
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            data-bs-toggle="tab"
                            href="#AllViews"
                          >
                            All Views
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#Favorites"
                          >
                            Favorites
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content px-3 pb-0">
                        <div className="tab-pane  active" id="AllViews">
                          <input
                            type="text"
                            className="form-control position-relative"
                          />
                          <i className="las la-search la-lg"></i>

                          <div className="SharedWithCard">
                            <h5 className="mb-2 mt-3">Shared with me</h5>
                            <p>
                              <i className="las la-star text-primary"></i> Move
                              to Bench/Training
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
                            <i className="las la-plus la-lg"></i> Create View
                          </button>
                        </div>
                        <div className="tab-pane fade" id="Favorites">
                          2...
                        </div>
                      </div>
                    </div>
                  </span>
                </div> */}
                <div className="col-4 offset-4 mb-3">
                  <select
                    id="knowledge-base-dd"
                    value={currentAssistantId}
                    onChange={changeVoiceAgent}
                    className="form-select"
                  >
                    <option value="">Select Assistant</option>
                    {voiceagents.map((option, assistIndex) => (
                      <option key={assistIndex} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 text-end">
                  {/* <button
                    className="btn dropdown-toggle border rounded-pill  me-3"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="las la-bars la-lg"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sheet
                      </a>
                    </li>
                  </ul> */}
                  <button
                    type="button"
                    onClick={newActionView}
                    className="btn btn-primary pull-right"
                    data-bs-toggle="modal"
                    data-bs-target="#createActionModal"
                  >
                    <span className="ti-xs ti ti-plus me-1"></span>New Action
                  </button>
                </div>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="container-fluid flex-grow-1 container-p-y">
                <div className="row">
                  <div className={isColumnVisible ? "col-md-4" : "d-none"}>
                    <div className="card">
                      {/* <h6><i className="las la-angle-left fw-600"></i>  Filter Consultants</h6> */}
                      {/* accourdian start */}
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
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
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              <div>
                                {/* <h6><i className="las la-angle-left fw-600"></i>  Filter Consultants</h6> */}
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
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
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
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Heading content 2
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
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
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Heading content 3
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* accourdian end */}
                    </div>
                  </div>
                  <div className={isColumnVisible ? "col-md-8" : "col-md-12"}>
                    <div className="card">
                      <div className="p-3">
                        <h4 className="card-title pull-left">Actions</h4>
                      </div>
                      {/* <div className="row mt-3"></div> */}
                      <div className="card-datatable table-responsive">
                        <div className="table-scrollable">
                          <table className="datatables-voice-agents table">
                            <thead className="border-top">
                              <tr>
                                <th className="w-px-14">
                                  <div className="form-check mb-0">
                                    <input
                                      className="email-list-item-input form-check-input"
                                      type="checkbox"
                                      id="email-1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="email-1"
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
                              {!fetchingActions &&
                              dataFromApi &&
                              dataFromApi.length > 0
                                ? dataFromApi.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td className="w-px-14">
                                          <div className="form-check mb-0">
                                            <input
                                              className="email-list-item-input form-check-input"
                                              type="checkbox"
                                              id="email-1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="email-1"
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
                                              <i className="ti ti-edit ti-sm me-2"></i>
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
                        {fetchingActions && (
                          <div className="parent-div text-center mt-2 mb-2">
                            <span
                              className="spinner-border"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        )}
                        {!fetchingActions &&
                          (!dataFromApi ||
                            (dataFromApi.length === 0 && (
                              <div
                                className="parent-div text-center mt-2 mb-2"
                                id="empty-files"
                              >
                                <label className="empty-files">
                                  No Actions at the moment.
                                </label>
                              </div>
                            )))}
                        <div className="bottom-count">
                          <table className="datatables-voice-agents table">
                            <tfoot className="border-top">
                              <tr>
                                <td>Total NAME: {totalLength}</td>
                                <td>Count of TYPE: {totalLength}</td>
                                <td>Count of ASSISTANT: {totalLength}</td>
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
              <div className="content-backdrop fade"></div>
            </div>
            <NewAssistantHelpBar />
          </div>
        </div>
      </div>

      {/* Update User Start */}
      <form
        className="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={handleUpdate}
      >
        <div
          className="modal fade updateaction"
          id="updateUserModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Update Action
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  id="create-action-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-agent" className="form-label">
                      Voice Assistant{" "}
                    </label>
                    <select
                      id="action-agent"
                      className="form-select"
                      name="assistant_id"
                      value={formData.assistant_id}
                      onChange={handleSelectChange}
                    >
                      <option value="">--Select--</option>
                      {voiceagents.map((option, assistIndex) => (
                        <option key={assistIndex} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-assistant" className="form-label">
                      Assistant
                    </label>
                    <select
                      id="action-assistant"
                      name="assistant_id"
                      value={formData.assistant_id}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select assistant</option>
                      {assistData?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="action-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-name" className="form-label">
                      Intents
                    </label>
                    <select
                      name="action_name"
                      value={formData.action_name}
                      className="form-select"
                      onChange={handleSelectChange}
                      id="intent"
                    >
                      {currentAssistant &&
                        currentAssistant.intents &&
                        currentAssistant.intents.length > 0 &&
                        currentAssistant.intents.map((intent) => {
                          return <option value={intent}>{intent}</option>;
                        })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label className="form-label" htmlFor="action-type">
                      Action type
                    </label>
                    <select
                      id="action-type"
                      name="type"
                      onChange={handleSelectChange}
                      value={selectedValue}
                      className="form-select"
                    >
                      {/* <option value="" >Select Type</option> */}
                      {/* <option value="webhook" selected>
                        API
                      </option> */}
                      <option value="email" selected>
                        Send Email
                      </option>
                      <option value="sms">Send SMS</option>
                    </select>
                  </div>
                </div>
                {/* API SELECT START */}
                {/* {apiView && (
                  <div>
                    <div className="row">
                      <label htmlFor="action-subject" className="form-label">
                        API headers
                      </label>
                      <div className="row">
                        <div className="col-5 mb-3">
                          <input
                            type="text"
                            name="headerkey"
                            value={formData.headerkey}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Key"
                          />
                        </div>
                        <div className="col-5 mb-3">
                          <input
                            type="text"
                            name="headervalue"
                            value={formData.headervalue}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Value"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label htmlFor="action-subject" className="form-label">
                        API body{" "}
                        <i
                          className="ti ti-info-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Please give the API data in application/json format"
                        ></i>
                      </label>
                      <div className="col-5 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="bodykey"
                          value={formData.bodykey}
                          onChange={handleInputChange}
                          placeholder="Key"
                        />
                      </div>

                      <div className="col-5 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="bodyval"
                          value={formData.bodyval}
                          onChange={handleInputChange}
                          placeholder="Value"
                        />
                      </div>
                    </div>
                  </div>
                )} */}
                {/* API SELECT END */}

                {/* SEND EMAIL SELECT START */}
                {mailview && (
                  <div>
                    <div className="row">
                      <div className="col mb-3">
                        <label
                          htmlFor="action-to-email-inp"
                          className="form-label"
                        >
                          To Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="to"
                          value={formData.to}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mb-3">
                        <label
                          htmlFor="action-cc-email-inp"
                          className="form-label"
                        >
                          CC
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="cc"
                          value={formData.cc}
                          onChange={handleInputChange}
                          placeholder="CC"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mb-3">
                        <label htmlFor="action-subject" className="form-label">
                          Email Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <label className="card-header">Email content</label>
                          <div className="card-body">
                            <ReactQuill
                              modules={modules}
                              name="content"
                              value={formData.content}
                              onChange={handleEmailEditorChange}
                              style={{ minHeight: "300px" }}
                              preserveWhitespace={true}
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
                    <div className="row" id="action-to-type">
                      <div className="col mb-3">
                        <label
                          className="form-label"
                          htmlFor="action-to-type-dd"
                        >
                          To type
                        </label>
                        <select
                          id="action-to-type-dd"
                          name="smstype"
                          value={formData.smstype}
                          onChange={handleSelectChange}
                          className="form-select"
                        >
                          <option value="callers" selected>
                            Caller
                          </option>
                          <option value="agents">Agents</option>
                        </select>
                      </div>
                    </div>
                    {formData.smstype === "agents" && (
                      <div className="row" id="action-to-type">
                        <div className="col mb-3">
                          <label
                            className="form-label"
                            htmlFor="action-to-type-dd"
                          >
                            To number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="smsto"
                            value={formData.smsto}
                            onChange={handleInputChange}
                            placeholder="To number"
                          />
                        </div>
                      </div>
                    )}

                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <label className="card-header">SMS content</label>
                          <div className="card-body">
                            <ReactQuill
                              modules={modules}
                              value={formData.smscontent}
                              onChange={handleEditorChange}
                              style={{ minHeight: "300px" }}
                              preserveWhitespace={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* SEND SMS END */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  id="create-user-modal-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                  onclick="createAction()"
                >
                  <span className="ms-2">Update Action</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Delete User Modal Start */}

      <div
        className="modal fade"
        id="deleteUserModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Delete user
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col mb-3">
                  <label htmlFor="update-user-name" className="form-label">
                    Are you sure you want to delete this User?
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-label-secondary"
                id="delete-user-modal-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={deleteRecord}
              >
                <span
                  id="delete-user-button-loader"
                  style={{ display: "none" }}
                >
                  <span
                    className="spinner-border"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Loading...</span>
                </span>
                <span className="ms-2">Delete User</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Action */}
      <form
        className="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={handleSubmit}
      >
        <div
          className="modal fade"
          id="createActionModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Create Action
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  id="create-action-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-agent" className="form-label">
                      Voice Assistant
                    </label>
                    <select
                      id="action-agent"
                      name="assistant_id"
                      value={formData.assistant_id}
                      onChange={handleSelectChange}
                      className="form-select"
                    >
                      <option value="">--Select--</option>
                      {voiceagents.map((option, assistIndex) => (
                        <option key={assistIndex} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-assistant" className="form-label">
                      Assistant
                    </label>
                    <select
                      id="action-assistant"
                      name="assistant_id"
                      value={formData.assistant_id}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Select assistant</option>
                      {assistData?.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="action-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="action-name" className="form-label">
                      Intents
                    </label>
                    <select
                      name="action_name"
                      value={formData.action_name}
                      className="form-select"
                      onChange={handleSelectChange}
                      id="intent"
                    >
                      {currentAssistant &&
                        currentAssistant.intents &&
                        currentAssistant.intents.length > 0 &&
                        currentAssistant.intents.map((intent) => {
                          return <option value={intent}>{intent}</option>;
                        })}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label className="form-label" htmlFor="action-type">
                      Action type
                    </label>
                    <select
                      id="action-type"
                      name="type"
                      onChange={handleSelectChange}
                      value={selectedValue}
                      className="form-select"
                    >
                      {/* <option value="" >Select Type</option> */}
                      {/* <option value="webhook" selected>
                        API
                      </option> */}
                      <option value="email" selected>
                        Send Email
                      </option>
                      <option value="sms">Send SMS</option>
                    </select>
                  </div>
                </div>
                {/* API SELECT START */}

                {/* {apiView && (
                  <div>
                    <div className="row">
                      <label htmlFor="action-subject" className="form-label">
                        API headers
                      </label>
                      <div className="row">
                        <div className="col-5 mb-3">
                          <input
                            type="text"
                            name="headerkey"
                            value={formData.headerkey}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Key"
                          />
                        </div>
                        <div className="col-5 mb-3">
                          <input
                            type="text"
                            name="headervalue"
                            value={formData.headervalue}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Value"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <label htmlFor="action-subject" className="form-label">
                        API body{" "}
                        <i
                          className="ti ti-info-circle"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Please give the API data in application/json format"
                        ></i>
                      </label>
                      <div className="col-5 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="bodykey"
                          value={formData.bodykey}
                          onChange={handleInputChange}
                          placeholder="Key"
                        />
                      </div>

                      <div className="col-5 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="bodyval"
                          value={formData.bodyval}
                          onChange={handleInputChange}
                          placeholder="Value"
                        />
                      </div>
                    </div>
                  </div>
                )} */}
                {/* API SELECT END */}

                {/* SEND EMAIL SELECT START */}
                {mailview && (
                  <div>
                    <div className="row">
                      <div className="col mb-3">
                        <label
                          htmlFor="action-to-email-inp"
                          className="form-label"
                        >
                          To Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="to"
                          value={formData.to}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mb-3">
                        <label
                          htmlFor="action-cc-email-inp"
                          className="form-label"
                        >
                          CC
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="cc"
                          value={formData.cc}
                          onChange={handleInputChange}
                          placeholder="CC"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mb-3">
                        <label htmlFor="action-subject" className="form-label">
                          Email Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <label className="card-header">Email content</label>
                          <div className="card-body">
                            <ReactQuill
                              modules={modules}
                              value={formData.content}
                              onChange={handleEmailEditorChange}
                              style={{ minHeight: "300px" }}
                              preserveWhitespace={true}
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
                    <div className="row" id="action-to-type">
                      <div className="col mb-3">
                        <label
                          className="form-label"
                          htmlFor="action-to-type-dd"
                        >
                          To type
                        </label>
                        <select
                          id="action-to-type-dd"
                          name="smstype"
                          value={formData.smstype}
                          onChange={handleSelectChange}
                          className="form-select"
                        >
                          <option value="callers" selected>
                            Caller
                          </option>
                          <option value="agents">Agents</option>
                        </select>
                      </div>
                    </div>
                    {formData.smstype === "agents" && (
                      <div className="row" id="action-to-type">
                        <div className="col mb-3">
                          <label
                            className="form-label"
                            htmlFor="action-to-type-dd"
                          >
                            To number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="smsto"
                            value={formData.smsto}
                            onChange={handleInputChange}
                            placeholder="To number"
                          />
                        </div>
                      </div>
                    )}
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                          <label className="card-header">SMS content</label>
                          <div className="card-body">
                            <ReactQuill
                              modules={modules}
                              value={formData.smscontent}
                              onChange={handleEditorChange}
                              style={{ minHeight: "300px" }}
                              preserveWhitespace={true}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* SEND SMS END */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  id="create-user-modal-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  <span className="ms-2">Create Action</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <ToastContainer />
    </>
  );
};

export default Actions;