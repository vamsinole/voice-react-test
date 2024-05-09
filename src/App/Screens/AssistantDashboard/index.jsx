/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import "./Styles.scss";
import MultipleSelectDropdown from "../../Components/MultipleSelectDropdown";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import { USER_ENDPOINTS } from "../../../config/enpoints";
// import axios from 'axios';
import axios from "../axiosInterceptor";
import env from "../../../config";

const AssistantDashboard = () => {
  const options = ["Christmas Island", "South Sudan", "Jamaica", "Kenya"];
  const [isColumnVisible, setIsColumnVisible] = useState(false);
  const toggleColumn = () => {
    setIsColumnVisible(!isColumnVisible);
  };
  const [isTrainColumnVisible, setIsTrainColumnVisible] = useState(false);
  const toggleTrainColumn = () => {
    setIsTrainColumnVisible(!isTrainColumnVisible);
  };

  const baseurl = env.baseUrl;
  const token = localStorage.getItem("token");
  const endpointmodel = USER_ENDPOINTS.getmodel;

  const [dataModel, setDataModel] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(baseurl + endpointmodel, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("responceModel", response.data.data);

        setDataModel(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const [dataKnowledge, setDataKnowldge] = useState(null);
  const endpointKnowledge = USER_ENDPOINTS.getKnowledge;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(baseurl + endpointKnowledge, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("responceKnowledge", response.data.data);

        setDataKnowldge(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

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
        console.log(assistData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const [showToast, setShowToast] = useState(false);
  const [showToastMessge, setShowToastMessge] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    nikname: "",
    description: "",
    image_url: "",
    type: "",
    synthesizer: "",
    country: "",
    enable_recordings: "",
    daily_budget: "",
    monthly_budget: "",
    incoming_call_greeting: "",
    outgoing_call_greeting: "",
    ai_type: "",
    temperature: 1,
    instructions: "",
    intents: [""],
    entities: [""],
    ai_api_key: "",
    kbs_id: 1,
  });

  const endpoint = USER_ENDPOINTS.addIntent;
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("formdataaddinc", formData);
    try {
      const response = await axios.post(baseurl + endpoint, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      setShowToast(true);
      setShowToastMessge("Created");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
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
                <div className="col-md-12">
                  <ul className="d-flex justify-content-end m-0 p-0 list-unstyled">
                    <li>
                      <button
                        onClick={toggleTrainColumn}
                        class="btn"
                        type="button"
                      >
                        <i class="ti ti-world-share ti-md me-1"></i>
                        Publish
                      </button>
                    </li>
                    <li>
                      {" "}
                      <button
                        onClick={toggleTrainColumn}
                        class="btn"
                        type="button"
                      >
                        <i class="ti ti-settings ti-md me-1"></i>
                        Train Assistant
                      </button>
                    </li>
                    <li>
                      <button onClick={toggleColumn} class="btn" type="button">
                        <i class="ti ti-messages ti-md me-1"></i>
                        Test Agent
                      </button>
                    </li>
                  </ul>
                </div>
                {/* <div className='col-md-4'>
                  </div> */}
                {/* <div class="col-md-2 offset-2 text-end">
                        <button onClick={toggleTrainColumn} class="btn" type="button">
                        <i class="ti ti-settings ti-md me-1"></i>
                        Publish
                      </button>
                  </div>
                  <div class="col-md-2 offset-1 text-end">
                        <button onClick={toggleTrainColumn} class="btn" type="button">
                        <i class="ti ti-settings ti-md me-1"></i>
                        Train Assistant
                      </button>
                  </div>
                  <div className='col-md-2 text-end'>
                  <span class="dropdown FilterDropdown">
                      <button onClick={toggleColumn} class="btn" type="button">
                        <i class="ti ti-messages ti-md me-1"></i>
                        Test Agent
                      </button>
                    </span>
                  </div> */}
              </div>
            </div>
            <div class="content-wrapper">
              <div class="container-fluid flex-grow-1 container-p-y">
                <div className="row">
                  <div className={isColumnVisible ? "col-md-8" : "col-md-12"}>
                    <div class="card">
                      <div class="container-fluid pb-3">
                        <div className="dash">
                          {/* new tabs */}
                          <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                              <a
                                class="nav-link active"
                                data-bs-toggle="tab"
                                href="#Dashboard"
                              >
                                Dashboard
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                data-bs-toggle="tab"
                                href="#Configure"
                              >
                                Configure
                              </a>
                            </li>
                            <li class="nav-item">
                              <a
                                class="nav-link"
                                data-bs-toggle="tab"
                                href="#Prompt"
                              >
                                Prompt
                              </a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#Deployment">Deployment</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#Logs">Logs</a>
                            </li> */}
                          </ul>
                          {/* new tabs */}

                          <div class="tab-content p-0">
                            <div id="Dashboard" class="tab-pane active">
                              <div className="dashboardscroll">
                                <div class="row mt-4">
                                  <div class="col-md-6 mb-3">
                                    <div class="cardDimensions ">
                                      <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-muted">
                                          Calls Made
                                        </h6>
                                        <h2 class="card-text">31</h2>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-6 mb-3">
                                    <div class="cardDimensions">
                                      <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-muted">
                                          Actions
                                        </h6>
                                        <h2 class="card-text">0</h2>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-6 mb-3">
                                    <div class="cardDimensions">
                                      <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-muted">
                                          Talk Time Average
                                        </h6>
                                        <h2 class="card-text">0.5min</h2>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-6 mb-3">
                                    <div class="cardDimensions">
                                      <div class="card-body">
                                        <h6 class="card-subtitle mb-2 text-muted">
                                          Amount spent
                                        </h6>
                                        <h2 class="card-text">$2/$8</h2>

                                        <div class="progress">
                                          <div
                                            class="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: "25%" }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* table start */}

                                <div className="border-top border-bottom">
                                  <h6 className="mt-3">Recent calls</h6>
                                </div>

                                <div className="table-responsive ">
                                  <table class="table">
                                    <tbody>
                                      <tr>
                                        <td>
                                          Completed{" "}
                                          <span className="completed"></span>
                                        </td>
                                        <td>Feb 17, 2024</td>
                                        <td>
                                          <button className="deploy-btn">
                                            Deployment
                                          </button>
                                        </td>
                                        <td>+1234567890</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Pedding{" "}
                                          <span className="pedding"></span>
                                        </td>
                                        <td>Feb 17, 2024</td>
                                        <td>
                                          <button className="deploy-btn">
                                            Deployment
                                          </button>
                                        </td>
                                        <td>+1234567890</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Completed{" "}
                                          <span className="completed"></span>
                                        </td>
                                        <td>Feb 17, 2024</td>
                                        <td>
                                          <button className="deploy-btn">
                                            Deployment
                                          </button>
                                        </td>
                                        <td>+1234567890</td>
                                      </tr>
                                      <tr>
                                        <td>
                                          Completed{" "}
                                          <span className="completed"></span>
                                        </td>
                                        <td>Feb 17, 2024</td>
                                        <td>
                                          <button className="deploy-btn">
                                            Deployment
                                          </button>
                                        </td>
                                        <td>+1234567890</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                {/* table end */}
                              </div>
                            </div>

                            {/* Configure start  */}
                            <form
                              class="add-new-user pt-0"
                              id="addNewUserForm"
                              onSubmit={handleSubmit}
                            >
                              <div id="Configure" class="tab-pane fade">
                                <div className="cofigurescroll">
                                  <section className="img-upload">
                                    <div className="imgMain">
                                      <h6>Image (optional)</h6>
                                      <div className="d-flex">
                                        <img
                                          src="assets/img/avatars/1.png"
                                          alt="img"
                                          className="config-img"
                                        />
                                        <div>
                                          <h6 className="mb-0">
                                            Recommended size 250px - 250px
                                          </h6>

                                          <label
                                            for="file-upload"
                                            class="custom-file-upload"
                                          >
                                            Custom Upload
                                          </label>
                                          <input id="file-upload" type="file" />
                                        </div>
                                      </div>
                                    </div>
                                  </section>

                                  <section>
                                    <div className="row mt-4">
                                      <div className="col-md-4">
                                        <h6 className="mb-0">Name</h6>
                                        <label htmlFor="" className="mb-2">
                                          What name will your assistant go by{" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="name"
                                          value={formData.name}
                                          onChange={handleInputChange}
                                          placeholder="Bright Horizons Realty"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <h6 className="mb-0">Assitant Type</h6>
                                        <label htmlFor="" className="mb-2">
                                          assistant's role
                                        </label>

                                        <select
                                          id=""
                                          name="type"
                                          value={formData.type}
                                          onChange={handleInputChange}
                                          className="form-select"
                                        >
                                          <option value="">--Select--</option>
                                          <option value="voice_incoming">
                                            voice incoming
                                          </option>
                                          <option value="voice_outgoing">
                                            voice outgoing
                                          </option>
                                          <option value="voice_both">
                                            voice both
                                          </option>
                                          <option value="live_agent">
                                            live agent
                                          </option>

                                          {/* {assistData?.map(option => (
                                              <option key={option.id} value={option.id}>
                                                {option.name}
                                              </option>
                                              ))} */}
                                        </select>
                                      </div>
                                      <div className="col-md-3 col-8 position-relative">
                                        <h6 className="mb-0">Name</h6>
                                        <label htmlFor="" className="mb-2">
                                          What name will your assistant go by{" "}
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="nikname"
                                          value={formData.nikname}
                                          onChange={handleInputChange}
                                          placeholder="Paul"
                                        />
                                        <i class="las la-pen config-pen mb-4"></i>
                                      </div>
                                      <div className="col-md-1 col-4 px-lg-0 mt-5">
                                        <button className="form-control">
                                          {" "}
                                          <i class="las la-play-circle la-lg"></i>{" "}
                                          Play{" "}
                                        </button>
                                      </div>
                                      <div className="clearfix"></div> <br />
                                      <hr /> <br />
                                      <div className="col-md-6">
                                        <h6 className="mb-0">AI Model</h6>
                                        <label htmlFor="" className="mb-2">
                                          Opt for speed or depth to suit your
                                          assistant's role
                                        </label>
                                        <select
                                          name="ai_type"
                                          value={formData.ai_type}
                                          onChange={handleInputChange}
                                          id=""
                                          className="form-select"
                                        >
                                          <option value="">--Select--</option>
                                          {dataModel?.map((option) => (
                                            <option
                                              key={option.id}
                                              value={option.model}
                                            >
                                              {option.model}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                      <div className="col-md-6">
                                        <h6 className="mb-0">
                                          Voice synthesizer
                                        </h6>
                                        <label htmlFor="" className="mb-2">
                                          Balance voice quality and response
                                          speed
                                        </label>
                                        <select
                                          id=""
                                          name="synthesizer"
                                          value={formData.synthesizer}
                                          onChange={handleInputChange}
                                          className="form-select"
                                        >
                                          <option value="Standard">
                                            Standard
                                          </option>
                                        </select>
                                      </div>
                                      <div className="col-md-6 mt-3">
                                        <h6 className="mb-0">Language</h6>
                                        <label htmlFor="" className="mb-2">
                                          Choose your assistant's language
                                        </label>
                                        <select
                                          name=""
                                          id=""
                                          className="form-select"
                                        >
                                          <option value="">USA en-US</option>
                                        </select>
                                      </div>
                                      <div className="col-md-6 mt-3">
                                        <h6 className="mb-0">
                                          Custom greeting
                                        </h6>
                                        <label htmlFor="" className="mb-2">
                                          The opening line for your assistant's
                                          call
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          name="incoming_call_greeting"
                                          value={
                                            formData.incoming_call_greeting
                                          }
                                          onChange={handleInputChange}
                                          placeholder="Hey! Whom am i talkng to?"
                                        />
                                      </div>
                                      <div className="col-md-6 mt-3">
                                        <div className="form-control">
                                          <div className="d-flex">
                                            <div className=" ">
                                              <h6 className="mb-0">
                                                Enable recordings
                                              </h6>
                                              <p>
                                                Toggle to record calls for
                                                playback and easy reveiw in the
                                                logs.
                                              </p>
                                            </div>
                                            <div className=" d-flex justify-content-center ps-3 pt-1 mt-4">
                                              <div class="form-check form-switch">
                                                <input
                                                  class="form-check-input"
                                                  type="checkbox"
                                                  id="flexSwitchCheckDefault"
                                                />
                                                <label
                                                  class="form-check-label"
                                                  for="flexSwitchCheckDefault"
                                                >
                                                  {" "}
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6 mt-3">
                                        <h6 className="mb-0">
                                          API KEY{" "}
                                          <i class="las la-info-circle la-lg"></i>
                                        </h6>
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder="API KEY"
                                        />
                                      </div>
                                      <div className="col-md-6 mt-3">
                                        <div className="row">
                                          <div className="col-md-5 mt-3">
                                            <h6 className="mb-0">
                                              Max daily budget{" "}
                                              <i class="las la-info-circle la-lg"></i>
                                            </h6>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="monthly_budget"
                                              value={formData.monthly_budget}
                                              onChange={handleInputChange}
                                              placeholder="USD 6"
                                            />
                                            <p className="lh-sm">
                                              <small>
                                                When the running cost exceeds
                                                this limit, the campanign will
                                                no longer be active and you will
                                                be notified.
                                              </small>
                                            </p>
                                          </div>
                                          <div className="col-md-5 col-9 mt-3">
                                            <h6 className="mb-0">
                                              Select Phone number{" "}
                                              <i class="las la-info-circle la-lg"></i>
                                            </h6>
                                            <select className="form-select">
                                              <option value="">
                                                +987654321
                                              </option>
                                            </select>
                                          </div>
                                          <div className="col-md-2 col-3 mt-3 pt-1 ps-0">
                                            <button className="btn btn-outline-secondary mt-3 px-2">
                                              <i class="las la-times"></i>{" "}
                                              <small>Detach</small>{" "}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-md-6 mt-3">
                                        <h5 className="mb-0">Add Intent</h5>
                                        {/* <h6 className='mb-0'>Intent</h6> */}
                                        <div className="select2-primary">
                                          <div className="position-relative">
                                            <MultipleSelectDropdown
                                              options={options}
                                            />
                                          </div>
                                        </div>

                                        {/* <input type="text" className='form-control' placeholder='Enter Intent' /> */}
                                      </div>
                                      <div className="col-md-6 mt-3">
                                        <h5 className="mb-0">
                                          Add Knowledge base
                                        </h5>

                                        <select
                                          name="kbs_id"
                                          value={formData.kbs_id}
                                          onChange={handleInputChange}
                                          id=""
                                          className="form-select"
                                        >
                                          <option value="">--Select--</option>
                                          {dataKnowledge?.map((option) => (
                                            <option
                                              key={option.id}
                                              value={option.id}
                                            >
                                              {option.name}
                                            </option>
                                          ))}
                                        </select>
                                        {/* <input type="text" className='form-control' placeholder='Enter Knowlege base' /> */}
                                      </div>
                                      <div className="col-md-12 my-3 text-center">
                                        <button
                                          type="button"
                                          class="btn btn-outline-secondary me-3 "
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="submit"
                                          class="btn btn-primary "
                                        >
                                          Add intent
                                        </button>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </form>
                            {/* Configure end  */}

                            {/* Prompt start  */}
                            <div id="Prompt" class="tab-pane fade">
                              <div className="promptscroll">
                                <div className="d-flex justify-content-between mt-3">
                                  <div>
                                    <h6 className="mb-1">
                                      2. Write your prompt
                                    </h6>
                                    <p className="text-primary">
                                      Promting guidelines
                                    </p>
                                  </div>
                                  <div className="mt-2">
                                    <button className="btn btn-outline-secondary">
                                      <i class="las la-folder-open la-lg"></i>{" "}
                                      Use a Template
                                    </button>
                                  </div>
                                </div>

                                <div className="form-control">
                                  <ol className="ps-3 promt-ol-list">
                                    <li>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer
                                      <p>
                                        * galley of type and scrambled it to
                                        make a type specimen book.*
                                      </p>
                                    </li>

                                    <li>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer
                                      <p>
                                        * galley of type and scrambled it to
                                        make a type specimen book.*
                                      </p>
                                    </li>

                                    <li>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer
                                      <p>
                                        * galley of type and scrambled it to
                                        make a type specimen book.*
                                      </p>
                                    </li>

                                    <li>
                                      Lorem Ipsum is simply dummy text of the
                                      printing and typesetting industry. Lorem
                                      Ipsum has been the industry's standard
                                      dummy text ever since the 1500s, when an
                                      unknown printer
                                      <p>
                                        * galley of type and scrambled it to
                                        make a type specimen book.*
                                      </p>
                                    </li>
                                  </ol>
                                </div>

                                <h6 className="mt-4">1. Set up your action</h6>
                                <div className="row">
                                  <div className="col-md-4 col-lg-3">
                                    <div className="form-control p-lg-3">
                                      <h6>
                                        <i class="las la-comment-dots la-lg text-primary"></i>{" "}
                                        SMS
                                      </h6>
                                      <h6 className="mb-1">
                                        Real Time Booking
                                      </h6>
                                      <p>
                                        Schedule live appointments during the
                                        call
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-lg-3">
                                    <div className="form-control p-lg-3">
                                      <h6>
                                        <i class="las la-calendar-check la-lg text-primary"></i>{" "}
                                        SCHEDULING
                                      </h6>
                                      <h6 className="mb-1">Call Transfer</h6>
                                      <p>Transfer the call live to a human</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-lg-3">
                                    <div className="form-control p-lg-3">
                                      <h6>
                                        <i class="las la-exchange-alt la-lg text-primary"></i>{" "}
                                        IN-CALL
                                      </h6>
                                      <h6 className="mb-1">
                                        Send SMS{" "}
                                        <i class="las la-info-circle la-lg"></i>
                                      </h6>
                                      <p>Send a custom sms after the call</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Prompt end  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={isColumnVisible ? "col-md-4" : "d-none"}>
                    <div className="card">
                      <div class="col app-chat-history bg-body">
                        <div class="chat-history-wrapper">
                          <div class="chat-history-header border-bottom">
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="d-flex overflow-hidden align-items-center">
                                <i
                                  class="ti ti-menu-2 ti-sm cursor-pointer d-lg-none d-block me-2"
                                  data-bs-toggle="sidebar"
                                  data-overlay
                                  data-target="#app-chat-contacts"
                                ></i>
                                <div class="flex-shrink-0 avatar">
                                  <img
                                    src="../../assets/img/avatars/2.png"
                                    alt="Avatar"
                                    class="rounded-circle"
                                    data-bs-toggle="sidebar"
                                    data-overlay
                                    data-target="#app-chat-sidebar-right"
                                  />
                                </div>
                                <div class="chat-contact-info flex-grow-1 ms-2">
                                  <h6 class="m-0">Felecia Rower</h6>
                                  <small class="user-status text-muted">
                                    NextJS developer
                                  </small>
                                </div>
                              </div>
                              <div class="d-flex align-items-center">
                                <i class="ti ti-phone-call cursor-pointer d-sm-block d-none me-3"></i>
                                {/* <i class="ti ti-video cursor-pointer d-sm-block d-none me-3"></i> */}
                                <i class="ti ti-search cursor-pointer d-sm-block d-none me-3"></i>
                                <div class="dropdown d-flex align-self-center">
                                  <button
                                    class="btn p-0"
                                    type="button"
                                    id="chat-header-actions"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i class="ti ti-dots-vertical"></i>
                                  </button>
                                  <div
                                    class="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="chat-header-actions"
                                  >
                                    {/* <a class="dropdown-item" href="javascript:void(0);">View Contact</a>
                                <a class="dropdown-item" href="javascript:void(0);">Mute Notifications</a>
                                <a class="dropdown-item" href="javascript:void(0);">Block Contact</a> */}
                                    <a
                                      class="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Clear Chat
                                    </a>
                                    {/* <a class="dropdown-item" href="javascript:void(0);">Report</a> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="chat-history-body bg-body">
                            <ul class="list-unstyled chat-history">
                              <li class="chat-message chat-message-right">
                                <div class="d-flex overflow-hidden">
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        How can we help? We're here for you! 😄
                                      </p>
                                    </div>
                                    <div class="text-end text-muted mt-1">
                                      <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:00 AM</small>
                                    </div>
                                  </div>
                                  <div class="user-avatar flex-shrink-0 ms-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message">
                                <div class="d-flex overflow-hidden">
                                  <div class="user-avatar flex-shrink-0 me-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        Hey John, I am looking for the best
                                        admin template.
                                      </p>
                                      <p class="mb-0">
                                        Could you please help me to find it out?
                                        🤔
                                      </p>
                                    </div>
                                    <div class="chat-message-text mt-2">
                                      <p class="mb-0">
                                        It should be Bootstrap 5 compatible.
                                      </p>
                                    </div>
                                    <div class="text-muted mt-1">
                                      <small>10:02 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message chat-message-right">
                                <div class="d-flex overflow-hidden">
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        Vuexy has all the components you'll ever
                                        need in a app.
                                      </p>
                                    </div>
                                    <div class="text-end text-muted mt-1">
                                      <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:03 AM</small>
                                    </div>
                                  </div>
                                  <div class="user-avatar flex-shrink-0 ms-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message">
                                <div class="d-flex overflow-hidden">
                                  <div class="user-avatar flex-shrink-0 me-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        Looks clean and fresh UI. 😃
                                      </p>
                                    </div>
                                    <div class="chat-message-text mt-2">
                                      <p class="mb-0">
                                        It's perfect for my next project.
                                      </p>
                                    </div>
                                    <div class="chat-message-text mt-2">
                                      <p class="mb-0">How can I purchase it?</p>
                                    </div>
                                    <div class="text-muted mt-1">
                                      <small>10:05 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message chat-message-right">
                                <div class="d-flex overflow-hidden">
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        Thanks, you can purchase it.
                                      </p>
                                    </div>
                                    <div class="text-end text-muted mt-1">
                                      <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:06 AM</small>
                                    </div>
                                  </div>
                                  <div class="user-avatar flex-shrink-0 ms-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message">
                                <div class="d-flex overflow-hidden">
                                  <div class="user-avatar flex-shrink-0 me-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        I will purchase it for sure. 👍
                                      </p>
                                    </div>
                                    <div class="chat-message-text mt-2">
                                      <p class="mb-0">Thanks.</p>
                                    </div>
                                    <div class="text-muted mt-1">
                                      <small>10:08 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message chat-message-right">
                                <div class="d-flex overflow-hidden">
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        Great, Feel free to get in touch.
                                      </p>
                                    </div>
                                    <div class="text-end text-muted mt-1">
                                      <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:10 AM</small>
                                    </div>
                                  </div>
                                  <div class="user-avatar flex-shrink-0 ms-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message">
                                <div class="d-flex overflow-hidden">
                                  <div class="user-avatar flex-shrink-0 me-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div class="chat-message-wrapper flex-grow-1">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        Do you have design files for Vuexy?
                                      </p>
                                    </div>
                                    <div class="text-muted mt-1">
                                      <small>10:15 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="chat-message chat-message-right">
                                <div class="d-flex overflow-hidden">
                                  <div class="chat-message-wrapper flex-grow-1 w-50">
                                    <div class="chat-message-text">
                                      <p class="mb-0">
                                        Yes that's correct documentation file,
                                        Design files are included with the
                                        template.
                                      </p>
                                    </div>
                                    <div class="text-end text-muted mt-1">
                                      <i class="ti ti-checks ti-xs me-1"></i>
                                      <small>10:15 AM</small>
                                    </div>
                                  </div>
                                  <div class="user-avatar flex-shrink-0 ms-3">
                                    <div class="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/1.png"
                                        alt="Avatar"
                                        class="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Chat message form --> */}
                          <div class="chat-history-footer shadow-sm">
                            <form class="form-send-message d-flex justify-content-between align-items-center">
                              <input
                                class="form-control message-input border-0 me-3 shadow-none"
                                placeholder="Type your message here"
                              />
                              <div class="message-actions d-flex align-items-center">
                                <i class="speech-to-text ti ti-microphone ti-sm cursor-pointer"></i>
                                <label for="attach-doc" class="form-label mb-0">
                                  <i class="ti ti-photo ti-sm cursor-pointer mx-3"></i>
                                  <input type="file" id="attach-doc" hidden />
                                </label>
                                <button class="btn btn-primary d-flex send-msg-btn">
                                  <i class="ti ti-send me-md-1 me-0"></i>
                                  <span class="align-middle d-md-inline-block d-none">
                                    Send
                                  </span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Train Assistant */}

                  {/* <div className={isTrainColumnVisible ? "col-md-4" : "d-none"}>
                  <div className='card'>
                  <div class="col app-chat-history bg-body">
                    <div class="chat-history-wrapper">
                      <div class="chat-history-header border-bottom">
                        <div class="d-flex justify-content-between align-items-center">
                          <div class="d-flex overflow-hidden align-items-center">
                            <i
                              class="ti ti-menu-2 ti-sm cursor-pointer d-lg-none d-block me-2"
                              data-bs-toggle="sidebar"
                              data-overlay
                              data-target="#app-chat-contacts"></i>
                            <div class="flex-shrink-0 avatar">
                              <img
                                src="../../assets/img/avatars/2.png"
                                alt="Avatar"
                                class="rounded-circle"
                                data-bs-toggle="sidebar"
                                data-overlay
                                data-target="#app-chat-sidebar-right" />
                            </div>
                            <div class="chat-contact-info flex-grow-1 ms-2">
                              <h6 class="m-0">Felecia Rower</h6>
                              <small class="user-status text-muted">NextJS developer</small>
                            </div>
                          </div>
                          <div class="d-flex align-items-center">
                            <i class="ti ti-phone-call cursor-pointer d-sm-block d-none me-3"></i>
                            <i class="ti ti-video cursor-pointer d-sm-block d-none me-3"></i>
                            <i class="ti ti-search cursor-pointer d-sm-block d-none me-3"></i>
                            <div class="dropdown d-flex align-self-center">
                              <button
                                class="btn p-0"
                                type="button"
                                id="chat-header-actions"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                <i class="ti ti-dots-vertical"></i>
                              </button>
                              <div class="dropdown-menu dropdown-menu-end" aria-labelledby="chat-header-actions">
                                <a class="dropdown-item" href="javascript:void(0);">View Contact</a>
                                <a class="dropdown-item" href="javascript:void(0);">Mute Notifications</a>
                                <a class="dropdown-item" href="javascript:void(0);">Block Contact</a>
                                <a class="dropdown-item" href="javascript:void(0);">Clear Chat</a>
                                <a class="dropdown-item" href="javascript:void(0);">Report</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="chat-history-body bg-body">
                        <ul class="list-unstyled chat-history">
                          <li class="chat-message chat-message-right">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">How can we help? We're here for you! 😄</p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                  <small>10:00 AM</small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message">
                            <div class="d-flex overflow-hidden">
                              <div class="user-avatar flex-shrink-0 me-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/2.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">Hey John, I am looking for the best admin template.</p>
                                  <p class="mb-0">Could you please help me to find it out? 🤔</p>
                                </div>
                                <div class="chat-message-text mt-2">
                                  <p class="mb-0">It should be Bootstrap 5 compatible.</p>
                                </div>
                                <div class="text-muted mt-1">
                                  <small>10:02 AM</small>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message chat-message-right">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">Vuexy has all the components you'll ever need in a app.</p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                  <small>10:03 AM</small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message">
                            <div class="d-flex overflow-hidden">
                              <div class="user-avatar flex-shrink-0 me-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/2.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">Looks clean and fresh UI. 😃</p>
                                </div>
                                <div class="chat-message-text mt-2">
                                  <p class="mb-0">It's perfect for my next project.</p>
                                </div>
                                <div class="chat-message-text mt-2">
                                  <p class="mb-0">How can I purchase it?</p>
                                </div>
                                <div class="text-muted mt-1">
                                  <small>10:05 AM</small>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message chat-message-right">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">Thanks, you can purchase it.</p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                  <small>10:06 AM</small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message">
                            <div class="d-flex overflow-hidden">
                              <div class="user-avatar flex-shrink-0 me-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/2.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">I will purchase it for sure. 👍</p>
                                </div>
                                <div class="chat-message-text mt-2">
                                  <p class="mb-0">Thanks.</p>
                                </div>
                                <div class="text-muted mt-1">
                                  <small>10:08 AM</small>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message chat-message-right">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">Great, Feel free to get in touch.</p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="ti ti-checks ti-xs me-1 text-success"></i>
                                  <small>10:10 AM</small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message">
                            <div class="d-flex overflow-hidden">
                              <div class="user-avatar flex-shrink-0 me-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/2.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                              <div class="chat-message-wrapper flex-grow-1">
                                <div class="chat-message-text">
                                  <p class="mb-0">Do you have design files for Vuexy?</p>
                                </div>
                                <div class="text-muted mt-1">
                                  <small>10:15 AM</small>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li class="chat-message chat-message-right">
                            <div class="d-flex overflow-hidden">
                              <div class="chat-message-wrapper flex-grow-1 w-50">
                                <div class="chat-message-text">
                                  <p class="mb-0">
                                    Yes that's correct documentation file, Design files are included with the template.
                                  </p>
                                </div>
                                <div class="text-end text-muted mt-1">
                                  <i class="ti ti-checks ti-xs me-1"></i>
                                  <small>10:15 AM</small>
                                </div>
                              </div>
                              <div class="user-avatar flex-shrink-0 ms-3">
                                <div class="avatar avatar-sm">
                                  <img src="../../assets/img/avatars/1.png" alt="Avatar" class="rounded-circle" />
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div class="chat-history-footer shadow-sm">
                        <form class="form-send-message d-flex justify-content-between align-items-center">
                          <input
                            class="form-control message-input border-0 me-3 shadow-none"
                            placeholder="Type your message here" />
                          <div class="message-actions d-flex align-items-center">
                            <i class="speech-to-text ti ti-microphone ti-sm cursor-pointer"></i>
                            <label for="attach-doc" class="form-label mb-0">
                              <i class="ti ti-photo ti-sm cursor-pointer mx-3"></i>
                              <input type="file" id="attach-doc" hidden />
                            </label>
                            <button class="btn btn-primary d-flex send-msg-btn">
                              <i class="ti ti-send me-md-1 me-0"></i>
                              <span class="align-middle d-md-inline-block d-none">Send</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                   </div>
                  </div>         */}
                </div>
              </div>
            </div>
            <NewAssistantHelpBar />
          </div>
        </div>
      </div>
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

export default AssistantDashboard;
