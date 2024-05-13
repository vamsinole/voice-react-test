/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import "./Styles.scss";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import env from "../../../config";
import { callAPI, toastr_options } from "../../Components/Utils";
import { WithContext as ReactTags } from "react-tag-input";
import User from "./../../../assets/user.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssistantDashboard = () => {
  const [isColumnVisible] = useState(false);
  const [creatingAssistant, setCreatingAssistant] = useState(false);
  // const toggleColumn = () => {
  //   setIsColumnVisible(!isColumnVisible);
  // };
  // const [isTrainColumnVisible, setIsTrainColumnVisible] = useState(false);
  // const toggleTrainColumn = () => {
  //   setIsTrainColumnVisible(!isTrainColumnVisible);
  // };

  const [intents, setIntents] = useState([]);
  const [newId, setNewId] = useState([]);

  const navigate = useNavigate();

  const handleDelete = (i) => {
    setIntents(intents.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setIntents([...intents, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = intents.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setIntents(newTags);
  };

  const handleTagClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const [entities, setEntities] = useState([]);

  const handleEntityDelete = (i) => {
    setEntities(entities.filter((tag, index) => index !== i));
  };

  const handleEntityAddition = (tag) => {
    setEntities([...entities, tag]);
  };

  const handleEntityDrag = (tag, currPos, newPos) => {
    const newTags = entities.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setEntities(newTags);
  };

  const handleEntityClick = (index) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const baseurl = env.baseUrl;
  const token = localStorage.getItem("token");
  // const endpointmodel = USER_ENDPOINTS.getmodel;

  const [dataModel] = useState([
    {
      model: "gpt-3.5-turbo-0125",
      name: "GPT 3.5",
      disabled: false,
    },
    {
      model: "gpt-4-0125-preview",
      name: "GPT 4",
      disabled: false,
    },
    {
      model: "gemini",
      name: "Gemini",
      disabled: false,
    },
    {
      model: "llama3",
      name: "Llama 3",
      disabled: true,
    },
    {
      model: "claude3",
      name: "Claude 3",
      disabled: true,
    },
  ]);

  const [dataKnowledge, setDataKnowldge] = useState(null);
  const endpointKnowledge = USER_ENDPOINTS.getKnowledge;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let get_kbs_obj = await callAPI(
          "GET",
          baseurl + endpointKnowledge,
          "",
          token
        );
        console.log("responceKnowledge", get_kbs_obj.data);
        setDataKnowldge(get_kbs_obj.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [assistData, setAssistData] = useState(null);
  const endpointAssist = USER_ENDPOINTS.getassist;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let assist_obj = await callAPI(
          "GET",
          baseurl + endpointAssist,
          "",
          token
        );
        console.log("responceAssist", assist_obj.data);
        setAssistData(assist_obj.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

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
    type: "voice_incoming",
    synthesizer: "",
    country: "en-US",
    enable_recordings: false,
    daily_budget: "",
    monthly_budget: "",
    incoming_call_greeting: "",
    outgoing_call_greeting: "",
    ai_type: "",
    phone_number: "",
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
    if (!formData.name || formData.name.length === 0) {
      toast.error("Name cannot be empty", toastr_options);
      return "";
    }
    if (!formData.ai_type || formData.ai_type.length === 0) {
      toast.error("AI type cannot be empty", toastr_options);
      return "";
    }
    if (formData.enable_recordings) {
      formData.enable_recordings = "1";
    } else {
      formData.enable_recordings = "0";
    }
    if (formData.type === "voice_outgoing") {
      formData.outgoing_call_greeting = formData.incoming_call_greeting;
      formData.incoming_call_greeting = "";
    }
    try {
      setCreatingAssistant(true);
      const response = await callAPI(
        "POST",
        baseurl + endpoint,
        JSON.stringify(formData),
        token
      );
      setCreatingAssistant(false);
      if (response.authError) {
        navigate("/login");
      } else if (response.error || response.apiError) {
        if (
          response.error &&
          response.error.message &&
          response.error.message.length > 0
        ) {
          toast.error(response.error.message, toastr_options);
        } else {
          toast.error("Please try again later");
        }
      }
      console.log(response);
      setNewId(response.data.id);
      toast.success("Assistant has been created", toastr_options);
      navigate("/assistants");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  async function uploadFile(e) {
    let file = e.target.files[0];
    console.log(file);
    var data = new FormData();
    data.append("files", file, file.name);
    let upload_image_object = await callAPI(
      "POST",
      baseurl + "/v1/add_file",
      data,
      token,
      "nojson"
    );
    if (
      upload_image_object &&
      upload_image_object.data &&
      upload_image_object.data.path &&
      upload_image_object.data.path.length > 0
    ) {
      setFormData({
        ...formData,
        image_url: upload_image_object.data.path,
      });
    }
    console.log(formData);
  }

  const updatePrompts = async (event) => {
    event.preventDefault();
    if (!newId) {
      toast.error("Configure the assistant first", toastr_options);
      return "";
    }
    if (!formData.instructions || formData.instructions.length === 0) {
      toast.error("Instructions cannot be empty", toastr_options);
      return "";
    }
    let temp_json = {
      instructions: formData.instructions,
    };
    try {
      const response = await callAPI(
        "PUT",
        baseurl + endpoint + "/" + newId,
        JSON.stringify(temp_json),
        token
      );
      console.log(response);
      toast.success("Prompt has been updated", toastr_options);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />

          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid">
              <div className="row mt-1">
                <div className="col-md-12">
                  <ul className="d-flex justify-content-end m-0 p-0 list-unstyled">
                    {/* <li>
                      <button
                        onClick={toggleTrainColumn}
                        className="btn"
                        type="button"
                      >
                        <i className="ti ti-world-share ti-md me-1"></i>
                        Publish
                      </button>
                    </li>
                    <li>
                      {" "}
                      <button
                        onClick={toggleTrainColumn}
                        className="btn"
                        type="button"
                      >
                        <i className="ti ti-settings ti-md me-1"></i>
                        Train Assistant
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={toggleColumn}
                        className="btn"
                        type="button"
                      >
                        <i className="ti ti-messages ti-md me-1"></i>
                        Test Agent
                      </button>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="container-fluid flex-grow-1 pt-2 pb-2">
                <div className="row">
                  <div className={isColumnVisible ? "col-md-8" : "col-md-12"}>
                    <div className="card">
                      <div className="container-fluid pb-3">
                        <div className="dash">
                          {/* new tabs */}
                          <ul className="nav nav-tabs pt-0-i" role="tablist">
                            {/* <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#Dashboard"
                              >
                                Dashboard
                              </a>
                            </li> */}
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#Configure"
                              >
                                Configure
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#Prompt"
                              >
                                Prompt
                              </a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#Deployment">Deployment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#Logs">Logs</a>
                            </li> */}
                          </ul>
                          {/* new tabs */}

                          <div className="tab-content p-0">
                            {/* <div id="Dashboard" className="tab-pane active">
                              <div className="dashboardscroll">
                                <div className="row mt-4">
                                  <div className="col-md-6 mb-3">
                                    <div className="cardDimensions ">
                                      <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">
                                          Calls Made
                                        </h6>
                                        <h2 className="card-text">31</h2>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6 mb-3">
                                    <div className="cardDimensions">
                                      <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">
                                          Actions
                                        </h6>
                                        <h2 className="card-text">0</h2>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6 mb-3">
                                    <div className="cardDimensions">
                                      <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">
                                          Talk Time Average
                                        </h6>
                                        <h2 className="card-text">0.5min</h2>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6 mb-3">
                                    <div className="cardDimensions">
                                      <div className="card-body">
                                        <h6 className="card-subtitle mb-2 text-muted">
                                          Amount spent
                                        </h6>
                                        <h2 className="card-text">$2/$8</h2>

                                        <div className="progress">
                                          <div
                                            className="progress-bar bg-primary"
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

                                <div className="border-top border-bottom">
                                  <h6 className="mt-3">Recent calls</h6>
                                </div>

                                <div className="table-responsive ">
                                  <table className="table">
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
                              </div>
                            </div> */}

                            <div id="Configure" className="tab-pane active">
                              <div className="cofigurescroll">
                                <section className="img-upload">
                                  <div className="mt-2">
                                    <h6>Image (optional)</h6>
                                    <div className="d-flex">
                                      <img
                                        src={
                                          formData.image_url &&
                                          formData.image_url.length > 0
                                            ? formData.image_url
                                            : User
                                        }
                                        alt="img"
                                        className="config-img"
                                      />
                                      <div>
                                        <h6 className="mb-0">
                                          Recommended size 250px - 250px
                                        </h6>

                                        <label
                                          htmlFor="file-upload"
                                          className="custom-file-upload"
                                        >
                                          Custom Upload
                                        </label>
                                        <input
                                          id="file-upload"
                                          style={{ display: "none" }}
                                          onChange={(e) => uploadFile(e)}
                                          type="file"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </section>

                                <section>
                                  <div className="row mt-4">
                                    <div className="col-md-4 col-padding">
                                      <h6 className="mb-0">
                                        Name{" "}
                                        <span className="required-dot">*</span>
                                      </h6>
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
                                    <div className="col-md-4 col-padding">
                                      <h6 className="mb-0">
                                        Assitant Type{" "}
                                        <span className="required-dot">*</span>
                                      </h6>
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
                                        {/* <option value="">--Select--</option> */}
                                        <option value="voice_incoming">
                                          Voice Incoming
                                        </option>
                                        <option value="voice_outgoing">
                                          Voice Outgoing
                                        </option>
                                        <option disabled value="voice_both">
                                          voice both
                                        </option>
                                        <option disabled value="live_agent">
                                          live agent
                                        </option>
                                      </select>
                                    </div>
                                    <div className="col-md-4 col-8 col-padding position-relative disabled-div">
                                      <h6 className="mb-0">
                                        Select Voice (Upcoming Feature)
                                      </h6>
                                      <label htmlFor="" className="mb-2">
                                        How your assistant should speak{" "}
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="nikname"
                                        value={formData.nikname}
                                        onChange={handleInputChange}
                                        placeholder="Paul"
                                      />
                                      <i className="las la-pen config-pen mb-4"></i>
                                    </div>
                                    {/* <div
                                        title="Upcoming Feature"
                                        className="col-md-1 col-4 mt-5 col-xs-padding disabled-div"
                                      >
                                        <button className="form-control">
                                          {" "}
                                          <i className="las la-play-circle la-lg"></i>{" "}
                                          Play{" "}
                                        </button>
                                      </div> */}
                                  </div>
                                  <div className="clearfix"></div> <br />
                                  {/* <hr /> */}
                                  <div className="display-flex">
                                    <div className="col-md-6 col-padding">
                                      <h6 className="mb-0">
                                        AI Model{" "}
                                        <span className="required-dot">*</span>
                                      </h6>
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
                                        {dataModel?.map((option, aiIndex) => (
                                          <option
                                            key={aiIndex}
                                            value={option.model}
                                            disabled={option.disabled}
                                          >
                                            {option.name}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-md-6 col-padding disabled-div">
                                      <h6 className="mb-0">
                                        Voice synthesizer (Upcoming Feature)
                                      </h6>
                                      <label htmlFor="" className="mb-2">
                                        Balance voice quality and response speed
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
                                  </div>
                                  <div className="clearfix"></div> <br />
                                  {/* <hr /> */}
                                  <div className="display-flex">
                                    <div className="col-md-6 col-padding">
                                      <h6 className="mb-0">Language</h6>
                                      <label htmlFor="" className="mb-2">
                                        Choose your assistant's language
                                      </label>
                                      <select
                                        name=""
                                        id=""
                                        className="form-select"
                                        value={formData.country}
                                      >
                                        <option value="en-US">USA en-US</option>
                                      </select>
                                    </div>
                                    <div className="col-md-6 col-padding">
                                      <h6 className="mb-0">Custom greeting</h6>
                                      <label htmlFor="" className="mb-2">
                                        The opening line for your assistant's
                                        call
                                      </label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="incoming_call_greeting"
                                        value={formData.incoming_call_greeting}
                                        onChange={handleInputChange}
                                        placeholder="Hey! Whom am i talkng to?"
                                      />
                                    </div>
                                  </div>
                                  <div className="clearfix"></div> <br />
                                  {/* <hr /> */}
                                  <div className="display-flex">
                                    <div className="col-md-6 col-padding">
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
                                            <div className="form-check form-switch">
                                              <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={
                                                  formData.enable_recordings
                                                }
                                                id="flexSwitchCheckDefault"
                                              />
                                              <label
                                                className="form-check-label"
                                                htmlFor="flexSwitchCheckDefault"
                                              >
                                                {" "}
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-padding">
                                      <h6 className="mb-0">
                                        API KEY{" "}
                                        <i className="las la-info-circle la-lg"></i>
                                      </h6>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="API KEY"
                                      />
                                    </div>
                                  </div>
                                  <div className="clearfix"></div> <br />
                                  {/* <hr /> */}
                                  <div className="display-flex">
                                    <div className="col-md-6 col-padding">
                                      <div className="row">
                                        <div className="col-md-5 mt-3">
                                          <h6 className="mb-0">
                                            Max daily budget{" "}
                                            <i className="las la-info-circle la-lg"></i>
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
                                              When the running cost exceeds this
                                              limit, the campanign will no
                                              longer be active and you will be
                                              notified.
                                            </small>
                                          </p>
                                        </div>
                                        {/* <div className="col-md-5 col-9 mt-3">
                                          <h6 className="mb-0">
                                            Select Phone number{" "}
                                            <i className="las la-info-circle la-lg"></i>
                                          </h6>
                                          <select className="form-select">
                                            <option value="">+987654321</option>
                                          </select>
                                        </div> */}
                                        {/* <div className="col-md-2 col-3 mt-3 pt-1 ps-0">
                                          <button className="btn btn-outline-secondary mt-3 px-2">
                                            <i className="las la-times"></i>{" "}
                                            <small>Detach</small>{" "}
                                          </button>
                                        </div> */}
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-padding">
                                      <h5 className="mb-0">Add Intent</h5>
                                      {/* <h6 className='mb-0'>Intent</h6> */}
                                      <div className="select2-primary">
                                        <div className="position-relative">
                                          {/* <MultipleSelectDropdown
                                            options={options}
                                          /> */}
                                          <ReactTags
                                            tags={intents}
                                            className="form-control"
                                            // suggestions={suggestions}
                                            // delimiters={delimiters}
                                            placeholder="Please enter to add new intent"
                                            handleDelete={handleDelete}
                                            handleAddition={handleAddition}
                                            handleDrag={handleDrag}
                                            handleTagClick={handleTagClick}
                                            inputFieldPosition="bottom"
                                            // autocomplete
                                          />
                                        </div>
                                      </div>

                                      {/* <input type="text" className='form-control' placeholder='Enter Intent' /> */}
                                    </div>
                                  </div>
                                  <div className="clearfix"></div> <br />
                                  {/* <hr /> */}
                                  <div className="display-flex">
                                    <div className="col-md-6 col-padding">
                                      <h5 className="mb-0">Add Entity</h5>
                                      {/* <h6 className='mb-0'>Intent</h6> */}
                                      <div className="select2-primary">
                                        <div className="position-relative">
                                          {/* <MultipleSelectDropdown
                                            options={options}
                                          /> */}
                                          <ReactTags
                                            tags={entities}
                                            className="form-control"
                                            // suggestions={suggestions}
                                            // delimiters={delimiters}
                                            handleDelete={handleEntityDelete}
                                            handleAddition={
                                              handleEntityAddition
                                            }
                                            placeholder="Please enter to add new entity"
                                            handleDrag={handleEntityDrag}
                                            handleTagClick={handleEntityClick}
                                            inputFieldPosition="bottom"
                                            // autocomplete
                                          />
                                        </div>
                                      </div>

                                      {/* <input type="text" className='form-control' placeholder='Enter Intent' /> */}
                                    </div>
                                    <div className="col-md-6 col-padding">
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
                                  </div>
                                  <div className="col-md-12 my-3 text-center col-padding">
                                    <a
                                      href="/assistants"
                                      type="button"
                                      className="btn btn-outline-secondary me-3 "
                                    >
                                      Back
                                    </a>
                                    <button
                                      type="submit"
                                      disabled={creatingAssistant}
                                      className="btn btn-primary"
                                      onClick={handleSubmit}
                                    >
                                      {creatingAssistant && (
                                        <span id="create-kbs-button-loader">
                                          <span
                                            class="spinner-border"
                                            role="status"
                                            aria-hidden="true"
                                          ></span>
                                          <span class="visually-hidden">
                                            Loading...
                                          </span>
                                        </span>
                                      )}
                                      Create Assistant
                                    </button>
                                  </div>
                                </section>
                              </div>
                            </div>
                            {/* Configure end  */}

                            {/* Prompt start  */}
                            <div id="Prompt" className="tab-pane fade">
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
                                      <i className="las la-folder-open la-lg"></i>{" "}
                                      Use a Template
                                    </button>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <textarea
                                    name="instructions"
                                    placeholder="Fill your instructions here"
                                    value={formData.instructions}
                                    className="form-control"
                                    rows={12}
                                    onChange={handleInputChange}
                                    id=""
                                  ></textarea>
                                </div>

                                {/* <h6 className="mt-4">1. Set up your action</h6>
                                <div className="row">
                                  <div className="col-md-4 col-lg-3">
                                    <div className="form-control p-lg-3">
                                      <h6>
                                        <i className="las la-comment-dots la-lg text-primary"></i>{" "}
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
                                        <i className="las la-calendar-check la-lg text-primary"></i>{" "}
                                        SCHEDULING
                                      </h6>
                                      <h6 className="mb-1">Call Transfer</h6>
                                      <p>Transfer the call live to a human</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4 col-lg-3">
                                    <div className="form-control p-lg-3">
                                      <h6>
                                        <i className="las la-exchange-alt la-lg text-primary"></i>{" "}
                                        IN-CALL
                                      </h6>
                                      <h6 className="mb-1">
                                        Send SMS{" "}
                                        <i className="las la-info-circle la-lg"></i>
                                      </h6>
                                      <p>Send a custom sms after the call</p>
                                    </div>
                                  </div>
                                </div> */}

                                <div className="col-md-12 my-3 text-center col-padding">
                                  <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={updatePrompts}
                                  >
                                    Update Prompts
                                  </button>
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
                      <div className="col app-chat-history bg-body">
                        <div className="chat-history-wrapper">
                          <div className="chat-history-header border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="d-flex overflow-hidden align-items-center">
                                <i
                                  className="ti ti-menu-2 ti-sm cursor-pointer d-lg-none d-block me-2"
                                  data-bs-toggle="sidebar"
                                  data-overlay
                                  data-target="#app-chat-contacts"
                                ></i>
                                <div className="flex-shrink-0 avatar">
                                  <img
                                    src="../../assets/img/avatars/2.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                    data-bs-toggle="sidebar"
                                    data-overlay
                                    data-target="#app-chat-sidebar-right"
                                  />
                                </div>
                                <div className="chat-contact-info flex-grow-1 ms-2">
                                  <h6 className="m-0">Felecia Rower</h6>
                                  <small className="user-status text-muted">
                                    NextJS developer
                                  </small>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="ti ti-phone-call cursor-pointer d-sm-block d-none me-3"></i>
                                {/* <i className="ti ti-video cursor-pointer d-sm-block d-none me-3"></i> */}
                                <i className="ti ti-search cursor-pointer d-sm-block d-none me-3"></i>
                                <div className="dropdown d-flex align-self-center">
                                  <button
                                    className="btn p-0"
                                    type="button"
                                    id="chat-header-actions"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical"></i>
                                  </button>
                                  <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="chat-header-actions"
                                  >
                                    {/* <a className="dropdown-item" href="javascript:void(0);">View Contact</a>
                                <a className="dropdown-item" href="javascript:void(0);">Mute Notifications</a>
                                <a className="dropdown-item" href="javascript:void(0);">Block Contact</a> */}
                                    <a
                                      className="dropdown-item"
                                      href="javascript:void(0);"
                                    >
                                      Clear Chat
                                    </a>
                                    {/* <a className="dropdown-item" href="javascript:void(0);">Report</a> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="chat-history-body bg-body">
                            <ul className="list-unstyled chat-history">
                              <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        How can we help? We're here for you! 😄
                                      </p>
                                    </div>
                                    <div className="text-end text-muted mt-1">
                                      <i className="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:00 AM</small>
                                    </div>
                                  </div>
                                  <div className="user-avatar flex-shrink-0 ms-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src={
                                          formData.image_url &&
                                          formData.image_url.length > 0
                                            ? formData.image_url
                                            : User
                                        }
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                  <div className="user-avatar flex-shrink-0 me-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        Hey John, I am looking for the best
                                        admin template.
                                      </p>
                                      <p className="mb-0">
                                        Could you please help me to find it out?
                                        🤔
                                      </p>
                                    </div>
                                    <div className="chat-message-text mt-2">
                                      <p className="mb-0">
                                        It should be Bootstrap 5 compatible.
                                      </p>
                                    </div>
                                    <div className="text-muted mt-1">
                                      <small>10:02 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        Vuexy has all the components you'll ever
                                        need in a app.
                                      </p>
                                    </div>
                                    <div className="text-end text-muted mt-1">
                                      <i className="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:03 AM</small>
                                    </div>
                                  </div>
                                  <div className="user-avatar flex-shrink-0 ms-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src={
                                          formData.image_url &&
                                          formData.image_url.length > 0
                                            ? formData.image_url
                                            : User
                                        }
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                  <div className="user-avatar flex-shrink-0 me-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        Looks clean and fresh UI. 😃
                                      </p>
                                    </div>
                                    <div className="chat-message-text mt-2">
                                      <p className="mb-0">
                                        It's perfect for my next project.
                                      </p>
                                    </div>
                                    <div className="chat-message-text mt-2">
                                      <p className="mb-0">
                                        How can I purchase it?
                                      </p>
                                    </div>
                                    <div className="text-muted mt-1">
                                      <small>10:05 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        Thanks, you can purchase it.
                                      </p>
                                    </div>
                                    <div className="text-end text-muted mt-1">
                                      <i className="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:06 AM</small>
                                    </div>
                                  </div>
                                  <div className="user-avatar flex-shrink-0 ms-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src={
                                          formData.image_url &&
                                          formData.image_url.length > 0
                                            ? formData.image_url
                                            : User
                                        }
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                  <div className="user-avatar flex-shrink-0 me-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        I will purchase it for sure. 👍
                                      </p>
                                    </div>
                                    <div className="chat-message-text mt-2">
                                      <p className="mb-0">Thanks.</p>
                                    </div>
                                    <div className="text-muted mt-1">
                                      <small>10:08 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        Great, Feel free to get in touch.
                                      </p>
                                    </div>
                                    <div className="text-end text-muted mt-1">
                                      <i className="ti ti-checks ti-xs me-1 text-success"></i>
                                      <small>10:10 AM</small>
                                    </div>
                                  </div>
                                  <div className="user-avatar flex-shrink-0 ms-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src={
                                          formData.image_url &&
                                          formData.image_url.length > 0
                                            ? formData.image_url
                                            : User
                                        }
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message">
                                <div className="d-flex overflow-hidden">
                                  <div className="user-avatar flex-shrink-0 me-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src="../../assets/img/avatars/2.png"
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                  <div className="chat-message-wrapper flex-grow-1">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        Do you have design files for Vuexy?
                                      </p>
                                    </div>
                                    <div className="text-muted mt-1">
                                      <small>10:15 AM</small>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="chat-message chat-message-right">
                                <div className="d-flex overflow-hidden">
                                  <div className="chat-message-wrapper flex-grow-1 w-50">
                                    <div className="chat-message-text">
                                      <p className="mb-0">
                                        Yes that's correct documentation file,
                                        Design files are included with the
                                        template.
                                      </p>
                                    </div>
                                    <div className="text-end text-muted mt-1">
                                      <i className="ti ti-checks ti-xs me-1"></i>
                                      <small>10:15 AM</small>
                                    </div>
                                  </div>
                                  <div className="user-avatar flex-shrink-0 ms-3">
                                    <div className="avatar avatar-sm">
                                      <img
                                        src={
                                          formData.image_url &&
                                          formData.image_url.length > 0
                                            ? formData.image_url
                                            : User
                                        }
                                        alt="Avatar"
                                        className="rounded-circle"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Chat message form --> */}
                          <div className="chat-history-footer shadow-sm">
                            <form className="form-send-message d-flex justify-content-between align-items-center">
                              <input
                                className="form-control message-input border-0 me-3 shadow-none"
                                placeholder="Type your message here"
                              />
                              <div className="message-actions d-flex align-items-center">
                                <i className="speech-to-text ti ti-microphone ti-sm cursor-pointer"></i>
                                <label
                                  htmlFor="attach-doc"
                                  className="form-label mb-0"
                                >
                                  <i className="ti ti-photo ti-sm cursor-pointer mx-3"></i>
                                  <input type="file" id="attach-doc" hidden />
                                </label>
                                <button className="btn btn-primary d-flex send-msg-btn">
                                  <i className="ti ti-send me-md-1 me-0"></i>
                                  <span className="align-middle d-md-inline-block d-none">
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
                </div>
              </div>
            </div>
            <NewAssistantHelpBar />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AssistantDashboard;
