/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
import Header from "../../Components/Header";
import React, { useState, useRef, useEffect } from "react";
import env from "../../../config";
import "./Styles.scss";
import { USER_ENDPOINTS } from "../../../config/enpoints";
// import axios from 'axios';
import axios from "../axiosInterceptor";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import { callAPI, toastr_options } from "../../Components/Utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Knowledge = () => {
  const [fileloading, setfileLoading] = useState(false);
  const [addingFaq, setAddingFaq] = useState(false);
  const [addingUrl, setAddingUrl] = useState(false);
  const [addingFile, setAddingFile] = useState(false);

  const [knowledge, setKnowledge] = useState([]);
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [faq, setFaq] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");

  const [selectedslno, setSelectedslno] = useState("");

  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getKnowledge;

  const token = localStorage.getItem("token");
  console.log("token", token);

  const navigate = useNavigate();

  useEffect(() => {
    fetchKbs();
  }, []);

  const fetchKbs = async (id) => {
    try {
      // const response = await axios.get(baseurl + endpoint, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      setFaq([]);
      setFiles([]);
      setUrls([]);
      let response = await callAPI("GET", baseurl + endpoint, "", token);
      console.log(response);
      if (response.authError) {
        navigate("/login");
      }
      console.log("responceorg", response.data.urls);
      setKnowledge(response.data);
      let temp = response.data.map((item) => {
        if (item.id === id) {
          setSelectedValue(item.id);
          setFiles(item.files);
          setUrls(item.urls);
          setFaq(item.faqs);
        }
        return item;
      });
      // if (!id) {
      //   setSelectedValue(response.data[0].id);
      //   setFiles(response.data[0].files);
      //   setUrls(response.data[0].urls);
      //   setFaq(response.data[0].faqs);
      // }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    let temmp_kb = knowledge.map((item) => {
      if (event.target.value === item.id) {
        setFiles(item.files);
        setUrls(item.urls);
        setFaq(item.faqs);
      }
      return item;
    });
  };

  const handleDropdownClick = (event) => {
    // This stops the dropdown from closing when the dropdown content is clicked
    event.stopPropagation();
  };

  // toggle dropdown menu
  const [show, setShow] = useState(false);
  const [deletingKbs, setDeletingKbs] = useState(false);
  const dropdownRef = useRef(null);

  // This hook handles clicks outside of the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const [isColumnVisible, setIsColumnVisible] = useState(false);

  // Toggle the visibility and adjust classes
  const toggleColumn = () => {
    setIsColumnVisible(!isColumnVisible);
  };

  const [formData, setFormData] = useState({
    knowledgename: "",
    url: "",
    question: "",
    answer: "",
    urls: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Do something with formData, for example, send it to an API
    console.log("formdata", formData);

    const createKnowledge = USER_ENDPOINTS.getKnowledge;
    console.log("formdata", formData);
    if (!formData.knowledgename || formData.knowledgename.length === 0) {
      toast.error("Name cannot be empty", toastr_options);
      return "";
    }
    try {
      const response = await axios.post(
        baseurl + createKnowledge,
        { name: formData.knowledgename },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data.data.token;
      setFormData({
        ...formData,
        knowledgename: "",
      });
      fetchKbs();
      toast.success("Knowledge base has been created", toastr_options);
      console.log("dataapi", data);
      //localStorage.setItem('token', token);

      //navigate('/assistants');
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = async (value) => {
    // Do something with the value, like sending it to an API or updating state
    console.log("Clicked with value:", value);
    setSelectedslno(value.sno);
    const createKnowledge = USER_ENDPOINTS.getKnowledge;

    try {
      const response = await axios.post(
        baseurl + createKnowledge + "/" + value.sno,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data.data.token;
      console.log("dataapi", data);
      //localStorage.setItem('token', token);

      //navigate('/assistants');
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmitUrl = async (event) => {
    event.preventDefault();
    console.log("selectedValue", selectedValue);
    const addurl = USER_ENDPOINTS.getKnowledge;
    console.log("formdata", formData);
    if (!selectedValue) {
      toast.error("Select a knowledge base first", toastr_options);
      return "";
    }
    if (!formData.url || formData.url.length === 0) {
      toast.error("URL cannot be empty");
      return "";
    }
    try {
      setAddingUrl(true);
      const response = await axios.post(
        baseurl + addurl + "/" + selectedValue + "/add_file",
        {
          type: "urls",
          urls: [formData.url],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setFormData({
        ...formData,
        url: "",
      });
      setAddingUrl(false);
      fetchKbs(selectedValue);
      toast.success("Url Added", toastr_options);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmitfaq = async (event) => {
    event.preventDefault();
    console.log("selectedValue", selectedValue);
    const addurl = USER_ENDPOINTS.getKnowledge;
    console.log("formdata", formData);
    if (!selectedValue) {
      toast.error("Select a knowledge base first", toastr_options);
      return "";
    }
    if (!formData.question || formData.question.length === 0) {
      toast.error("Question cannot be empty");
      return "";
    }
    if (!formData.answer || formData.answer.length === 0) {
      toast.error("Answer cannot be empty");
      return "";
    }
    try {
      setAddingFaq(true);
      const response = await axios.post(
        baseurl + addurl + "/" + selectedValue + "/add_file",
        {
          type: "faqs",
          faqs: [{ question: formData.question, answer: formData.answer }],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      setAddingFaq(false);
      setFormData({
        knowledgename: formData.knowledgename,
        url: "",
        question: "",
        answer: "",
        urls: "",
      });
      fetchKbs(selectedValue);
      toast.success("FAQ has been added successfully", toastr_options);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // const reader = new FileReader();

    // reader.onload = (event) => {
    //   const result = event.target.result;
    //   setBinaryData(result); // Store the binary data in state
    // };
  };

  const handleSubmitfile = async (event) => {
    event.preventDefault();
    setfileLoading(true);
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }
    let formData = new FormData();
    formData.append("type", "files");
    formData.append("files", selectedFile);
    const addurl = USER_ENDPOINTS.getKnowledge;
    if (!selectedValue) {
      toast.error("Select a knowledge base first", toastr_options);
      return "";
    }
    try {
      setAddingFile(true);
      let upload_image_object = await callAPI(
        "POST",
        baseurl + addurl + "/" + selectedValue + "/add_file",
        formData,
        token,
        "nojson"
      );
      setAddingFile(false);
      fetchKbs(selectedValue);
      toast.success("File has been added successfully", toastr_options);
      setfileLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  //selectedslno

  async function deleteKbs() {
    if (!selectedValue) {
      toast.error("Select a knowledge base first", toastr_options);
      return "";
    }
    setDeletingKbs(true);
    let delete_kbs_obj = await callAPI(
      "DELETE",
      baseurl + USER_ENDPOINTS.getKnowledge + "/" + selectedValue,
      "",
      token
    );
    setDeletingKbs(false);
    if (document.getElementById("close-kbs")) {
      document.getElementById("close-kbs").click();
    }
    fetchKbs();
  }

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid">
              <div className="row my-3">
                <div className="col-md-4" onClick={handleDropdownClick}>
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
                        {/* AllViews tab end */}

                        <div className="tab-pane fade" id="Favorites">
                          2...
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
                <div className="col-3 mb-3">
                  <select
                    id="knowledge-base-dd"
                    value={selectedValue}
                    onChange={handleSelectChange}
                    className="form-select"
                  >
                    <option value="">Select Knowledge base</option>
                    {knowledge.map((option, index) => (
                      <option key={index} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-1 mb-3">
                  <button
                    // onClick={() => handleClickedit(value)}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteKbsModal"
                    className="btn px-1"
                  >
                    <i className="ti ti-trash ti-sm mx-2"></i>
                  </button>
                </div>
                <div className="col-md-4 text-end">
                  <button
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
                  </ul>
                  <a
                    className="btn btn-primary pull-right text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#createKbsModal"
                  >
                    <span className="ti-xs ti ti-plus me-1"></span> New
                    Knowledge base
                  </a>
                </div>
              </div>
            </div>

            <div className="content-wrapper">
              <div className="container-fluid flex-grow-1 container-p-y pt-0">
                {/* <div className='row'>
                  <div className="col-4 offset-3 mb-3">
                    <label className="form-label" htmlFor="knowledge-base-dd">Select Knowledge base</label>

                    <select id="knowledge-base-dd" value={selectedValue} onChange={handleSelectChange} className="form-select">

                      <option value="">Select an option</option>
                      {console.log("knowledge", knowledge)}
                      {knowledge.map(option => (

                        <option key={option.id} value={JSON.stringify(option)}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-1 mb-3">
                    <div className="d-flex align-items-center mt-4">
                    <button className='btn px-1 la-lg' data-bs-toggle="modal" data-bs-target="#deleteKbsModal">
                    <i className="ti ti-trash ti-sm mx-2 pointer"></i>
                    </button>
                      
                    </div>
                  </div>
                  <div className="col-4 mb-3">
                    <button type="button" className="btn btn-primary pull-left mt-4" data-bs-toggle="modal"
                      data-bs-target="#createKbsModal">
                      <span className="ti-xs ti ti-plus me-1"></span>New Knowledge base
                    </button>
                  </div>
                </div> */}
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
                  <div
                    className={
                      isColumnVisible
                        ? "col-md-8 kbs-height"
                        : "col-md-12 kbs-height"
                    }
                    id="kbs-content"
                  >
                    <div className="nav-align-top nav-tabs-shadow mb-4">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-top-files"
                            aria-controls="navs-top-files"
                            aria-selected="true"
                          >
                            Files
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-top-url"
                            aria-controls="navs-top-url"
                            aria-selected="false"
                          >
                            URLs
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-top-faqs"
                            aria-controls="navs-top-faqs"
                            aria-selected="false"
                          >
                            FAQs
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="navs-top-files"
                          role="tabpanel"
                        >
                          <div className="col-12">
                            <div className="card-header row">
                              <div className="col-8">
                                <h4 className="card-title">Files</h4>
                              </div>
                              <div className="col-4">
                                <button
                                  type="button"
                                  className="btn btn-primary pull-right"
                                  data-bs-toggle="modal"
                                  data-bs-target="#newFileModal"
                                >
                                  <span className="ti-xs ti ti-plus me-1"></span>
                                  New File
                                </button>
                              </div>
                            </div>
                            <div className="card-datatable table-responsive">
                              <div className="results">
                                <table className="datatables-files table">
                                  <thead className="border-top">
                                    <tr>
                                      <th>S.No</th>
                                      <th>URL</th>
                                      {/* <th>Actions</th> */}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {files.map((value, key) => {
                                      return (
                                        <tr key={key}>
                                          <td>{key + 1}</td>
                                          <td>{value}</td>
                                          {/* <td style={{ width: "70px" }}> */}
                                          {/* <button className='btn px-1 la-lg' onClick={() => handleClick(value.sno)} data-bs-toggle="modal" data-bs-target="#deleteKbsModal">
                                        <i className="ti ti-trash ti-sm mx-2 pointer"></i>
                                        </button> */}
                                          {/* <div className="d-flex acation-btns">
                                            <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                                          </div> */}
                                          {/* </td> */}
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                              {!files ||
                                (files.length === 0 && (
                                  <div
                                    className="parent-div text-center mt-2 mb-2"
                                    id="empty-files"
                                  >
                                    <label className="empty-files">
                                      No Files at the moment.
                                    </label>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade show "
                          id="navs-top-url"
                          role="tabpanel"
                        >
                          <div className="col-12">
                            <div className="card-header border-bottom row">
                              <div className="col-8">
                                <h4 className="card-title mb-3">URLS</h4>
                              </div>
                              <div className="col-4">
                                <button
                                  type="button"
                                  className="btn btn-primary pull-right"
                                  data-bs-toggle="modal"
                                  data-bs-target="#newUrlModal"
                                >
                                  <span className="ti-xs ti ti-plus me-1"></span>
                                  New URLS
                                </button>
                              </div>
                            </div>
                            <div className="card-datatable table-responsive">
                              <table className="datatables-files table">
                                <thead className="border-top">
                                  <tr>
                                    <th>S.No</th>
                                    <th>URL</th>
                                    {/* <th>Actions</th> */}
                                  </tr>
                                </thead>
                                <tbody>
                                  {urls.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.url}</td>
                                        {/* <td style={{ width: "70px" }}> */}
                                        {/* <button className='btn px-1 la-lg' onClick={() => handleClick(value)} data-bs-toggle="modal" data-bs-target="#deleteKbsModal">
                                        <i className="ti ti-trash ti-sm mx-2 pointer"></i>
                                        </button> */}
                                        {/* <div className="d-flex acation-btns">
                                            <button className='btn px-1'><i className="las la-trash-alt la-lg"></i></button>
                                          </div> */}
                                        {/* </td> */}
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                              {!urls ||
                                (urls.length === 0 && (
                                  <div
                                    className="parent-div text-center mt-2 mb-2"
                                    id="empty-files"
                                  >
                                    <label className="empty-files">
                                      No URLs at the moment.
                                    </label>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade show "
                          id="navs-top-faqs"
                          role="tabpanel"
                        >
                          <div className="col-12">
                            <div className="card-header border-bottom row">
                              <div className="col-8">
                                <h4 className="card-title mb-3">FAQs</h4>
                              </div>
                              <div className="col-4">
                                <button
                                  type="button"
                                  className="btn btn-primary pull-right"
                                  data-bs-toggle="modal"
                                  data-bs-target="#newFaqModal"
                                >
                                  <span className="ti-xs ti ti-plus me-1"></span>
                                  New FAQ
                                </button>
                              </div>
                            </div>
                            <div className="card-datatable table-responsive">
                              <table className="datatables-files table">
                                <thead className="border-top">
                                  <tr>
                                    <th>S.No</th>
                                    <th>QUESTION</th>
                                    <th>ANSWER</th>
                                    {/* <th>Actions</th> */}
                                  </tr>
                                </thead>
                                <tbody>
                                  {faq.map((value, key) => {
                                    return (
                                      <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.question}</td>
                                        <td>{value.answer}</td>
                                        {/* <td style={{ width: "70px" }}>
                                          <div className="d-flex acation-btns">
                                            <button
                                              className="btn px-1"
                                              onClick={() => handleClick(value)}
                                            >
                                              <i className="ti ti-trash ti-sm mx-2"></i>
                                            </button>
                                          </div>
                                        </td> */}
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                              {!faq ||
                                (faq.length === 0 && (
                                  <div
                                    className="parent-div text-center mt-2 mb-2"
                                    id="empty-files"
                                  >
                                    <label className="empty-files">
                                      No FAQs at the moment.
                                    </label>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NewAssistantHelpBar />
          </div>

          <div
            className="modal fade"
            id="createKbsModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel1">
                    Create Knowledge base
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <form className="mb-3" onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col mb-3">
                        <label htmlFor="kbs-name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          id="kbs-name"
                          className="form-control"
                          placeholder="Enter Name"
                          name="knowledgename"
                          value={formData.knowledgename}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-label-secondary"
                      id="create-kbs-close"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="create-kbs-close"
                      data-bs-dismiss="modal"
                    >
                      Create Knowledge base
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal popup Knowledge delete start*/}
      <div
        className="modal fade"
        id="deleteKbsModal"
        tabIndex="-1"
        aria-labelledby="VioceEditLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="VioceEditLabel">
                Delete Knowledge base
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="pull-left p-3">
                <p>Are you sure you want to delete this Knowledge base?</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                id="close-kbs"
              >
                Close
              </button>
              <button
                onClick={deleteKbs}
                disabled={deletingKbs}
                type="button"
                className="btn btn-primary"
              >
                {deletingKbs && (
                  <span id="create-kbs-button-loader">
                    <span
                      class="spinner-border"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Loading...</span>
                  </span>
                )}
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal popup Knowledge delete end*/}

      {/* modal popup New File Start*/}
      <form
        className="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={handleSubmitfile}
      >
        <div
          className="modal fade"
          id="newFileModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Add File
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <h5 className="card-header">Upload files</h5>
                  <div className="card-body">
                    <label
                      htmlFor="kbs-file"
                      className="pointer dz-message needsclick"
                    >
                      Drop file here or click to upload. Limit : 10 MB
                    </label>
                    <div className="fallback">
                      <input
                        id="kbs-file"
                        name="file"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div
                      className="parent-div"
                      id="kbs-filename-parent"
                      // style={{ display: "none" }}
                    >
                      <label className="form-label">
                        {selectedFile && selectedFile.name}
                      </label>
                      <i
                        className="ti ti-x pull-right pointer"
                        id="kbs-clear-file"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  id="add-file-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                  onclick="addFile()"
                >
                  {addingFile && (
                    <span id="add-file-button-loader">
                      <span
                        className="spinner-border"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </span>
                  )}
                  <span className="ms-2">Add File</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* modal popup New File End*/}
      {/* modal popup New URLs Start*/}
      <form
        className="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={handleSubmitUrl}
      >
        <div
          className="modal fade"
          id="newUrlModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Add URL
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
                    <label htmlFor="kbs-url" className="form-label">
                      URL
                    </label>
                    <input
                      type="text"
                      id="kbs-url"
                      className="form-control"
                      name="url"
                      value={formData.url}
                      onChange={handleInputChange}
                      placeholder="Enter URL"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  id="add-url-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  {addingUrl && (
                    <span id="add-url-button-loader">
                      <span
                        className="spinner-border"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Loading...</span>
                    </span>
                  )}
                  <span className="ms-2">Add URL</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* modal popup New URLs End*/}
      {/* modal popup New Faq Start*/}

      <form
        className="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={handleSubmitfaq}
      >
        <div
          className="modal fade"
          id="newFaqModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Add Faq
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
                    <label htmlFor="kbs-faq-question" className="form-label">
                      Question
                    </label>
                    <input
                      type="text"
                      id="kbs-faq-question"
                      className="form-control"
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      placeholder="Enter Question"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label htmlFor="kbs-faq-answer" className="form-label">
                      Answer
                    </label>
                    <input
                      type="text"
                      id="kbs-faq-answer"
                      name="answer"
                      value={formData.answer}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Enter Answer"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  id="add-faq-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  {addingFaq && (
                    <span id="add-faq-button-loader">
                      <span
                        className="spinner-border"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Loading...</span>
                    </span>
                  )}
                  <span className="ms-2">Add Faq</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* modal popup New Faq End*/}

      <ToastContainer />
    </>
  );
};

export default Knowledge;
