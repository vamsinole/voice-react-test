/* eslint-disable no-unused-vars */
// import React from 'react'
import React, { useState, useRef, useEffect } from "react";
import env from "../../../config";
import "./Styles.scss";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import axios from "axios";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import SettingControls from "../../Components/SettingControls";

const UsersControls = () => {
  const [fileloading, setfileLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [showToastMessge, setShowToastMessge] = useState(false);

  const [knowledge, setKnowledge] = useState([]);
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [faq, setFaq] = useState([]);

  const [selectedValuedrop, setSelectedValuedrop] = useState("");

  const [selectedslno, setSelectedslno] = useState("");

  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getKnowledge;

  const token = localStorage.getItem("token");
  console.log("token", token);

  useEffect(() => {
    fetchVoiceAgents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVoiceAgents = async () => {
    try {
      const response = await axios.get(baseurl + endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("responceorg", response.data.data.urls);
      setKnowledge(response.data.data);
      setFiles(response.data.data[0].files);
      setUrls(response.data.data[0].urls);
      setFaq(response.data.data[0].faqs);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // toggle dropdown menu
  const [show, setShow] = useState(false);
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

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Created");
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
    console.log("selectedValue", selectedValuedrop);
    const addurl = USER_ENDPOINTS.getKnowledge;
    console.log("formdata", formData);
    try {
      const response = await axios.post(
        baseurl + addurl + "/" + selectedValuedrop + "/add_file",
        {
          type: "urls",
          urls: [{ url: formData.url }],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Url Added");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleSubmitfaq = async (event) => {
    event.preventDefault();
    console.log("selectedValue", selectedValuedrop);
    const addurl = USER_ENDPOINTS.getKnowledge;
    console.log("formdata", formData);
    try {
      const response = await axios.post(
        baseurl + addurl + "/" + selectedValuedrop + "/add_file",
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

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Url Added");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [binaryData, setBinaryData] = useState(null);

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

    //const formData = new FormData();
    //formData.append('file', selectedFile);
    console.log("selectedFile", selectedFile);

    console.log("selectedValue", selectedValuedrop);
    const addurl = USER_ENDPOINTS.getKnowledge;
    console.log("formdatafiles", formData);
    try {
      const response = await axios.post(
        baseurl + addurl + "/" + selectedValuedrop + "/add_file",
        {
          type: "files",
          urls: selectedFile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Url Added");
      setfileLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  //selectedslno

  const [expanded, setExpanded] = useState(false);

  const toggleExpandCollapse = () => {
    setExpanded(!expanded);
  };

  // Your actual data structure
  const data = [
    {
      title: "CEO",
      children: [
        {
          title: "Manager",
          children: [{ title: "Team Lead" }, { title: "Recruiter" }],
        },
        { title: "Test" },
      ],
    },
  ];

  const renderTree = (items) => {
    return items.map((item, index) => (
      <div key={index}>
        <div onClick={() => setExpanded(!expanded)}>{item.title}</div>
        {expanded && item.children && <div>{renderTree(item.children)}</div>}
      </div>
    ));
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SettingControls />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="content-wrapper">
              <div className="container-fluid flex-grow-1 container-p-y pt-0">
                <div className="row">
                  <div className=""></div>
                  <div className="py-4">
                    <div className="nav-align-top nav-tabs-shadow mb-4">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link active"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-top-users"
                            aria-controls="navs-top-users"
                            aria-selected="true"
                          >
                            Users
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-top-profiles"
                            aria-controls="navs-top-profiles"
                            aria-selected="false"
                          >
                            Profiles
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-top-roles"
                            aria-controls="navs-top-roles"
                            aria-selected="false"
                          >
                            Roles
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            type="button"
                            className="nav-link"
                            role="tab"
                            data-bs-toggle="tab"
                            data-bs-target="#navs-top-compliance"
                            aria-controls="navs-top-compliance"
                            aria-selected="false"
                          >
                            Compliance
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content setting-controls">
                        <div
                          className="tab-pane fade show active"
                          id="navs-top-users"
                          role="tabpanel"
                        >
                          <div className="col-12">
                            <div className="card-header row">
                              <div className="col-4">
                                <ul className="nav nav-tabs" role="tablist">
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      className="nav-link active"
                                      role="tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#navs-top-usersActive"
                                      aria-controls="navs-top-usersActive"
                                      aria-selected="true"
                                    >
                                      Active{" "}
                                      <span className="badge bg-white rounded-pill ms-auto text-bg-light p-1">
                                        1
                                      </span>
                                    </button>
                                  </li>
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      className="nav-link"
                                      role="tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#navs-top-usersInactive"
                                      aria-controls="navs-top-usersInactiv"
                                      aria-selected="false"
                                    >
                                      Inactive{" "}
                                      <span className="badge bg-info-subtle p-1 rounded-pill ms-auto text-bg-light">
                                        20
                                      </span>
                                    </button>
                                  </li>
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      className="nav-link"
                                      role="tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#navs-top-usersInvited"
                                      aria-controls="navs-top-usersInvited"
                                      aria-selected="false"
                                    >
                                      Invited
                                    </button>
                                  </li>
                                  <li className="nav-item">
                                    <button
                                      type="button"
                                      className="nav-link"
                                      role="tab"
                                      data-bs-toggle="tab"
                                      data-bs-target="#navs-top-deleted"
                                      aria-controls="navs-top-deleted"
                                      aria-selected="false"
                                    >
                                      Deleted{" "}
                                      <span className="badge bg-info-subtle p-1 rounded-pill ms-auto text-bg-light">
                                        20
                                      </span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-4">
                                <button
                                  type="button"
                                  className="btn btn-primary pull-right"
                                  data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasAddAgent"
                                  aria-controls="offcanvasAddAgent"
                                >
                                  <span className="ti-xs ti ti-plus me-1"></span>
                                  New User
                                </button>

                                {/* <button type="button" className="btn btn-primary pull-right rounded-pill" data-bs-toggle="modal"
                                  data-bs-target="#newUser">
                                  <span className="ti-xs ti ti-plus me-1"></span>New User
                                </button> */}
                              </div>
                            </div>
                            <div className="card-datatable table-responsive">
                              <div className="results">
                                <div className="tab-content">
                                  <div
                                    className="tab-pane fade show active"
                                    id="navs-top-usersActive"
                                    role="tabpanel"
                                  >
                                    <div className="col-12">
                                      <div className="card-header row">
                                        <div className="card">
                                          <div className="table-responsive text-nowrap">
                                            <table className="table table-bordered">
                                              <thead>
                                                <tr>
                                                  <th>Full Name</th>
                                                  <th>Email</th>
                                                  <th>Role</th>
                                                  <th>Profile</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                  <td className="justify-content-end d-flex">
                                                    <button
                                                      type="button"
                                                      className="btn pull-right"
                                                      data-bs-toggle="offcanvas"
                                                      data-bs-target="#offcanvasEditUser"
                                                      aria-controls="offcanvasEditUser"
                                                    >
                                                      <i className="ti ti-edit ti-sm me-2"></i>
                                                    </button>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade show "
                                    id="navs-top-usersInactive"
                                    role="tabpanel"
                                  >
                                    <div className="col-12">
                                      <div className="card-header row">
                                        <div className="card">
                                          <div className="table-responsive text-nowrap">
                                            <table className="table table-bordered">
                                              <thead>
                                                <tr>
                                                  <th>Full Name</th>
                                                  <th>Email</th>
                                                  <th>Role</th>
                                                  <th>Profile</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade show "
                                    id="navs-top-usersInvited"
                                    role="tabpanel"
                                  >
                                    <div className="col-12">
                                      <div className="card-header border-bottom row">
                                        <div className="card">
                                          <div className="table-responsive text-nowrap">
                                            <table className="table table-bordered">
                                              <thead>
                                                <tr>
                                                  <th>Full Name</th>
                                                  <th>Email</th>
                                                  <th>Role</th>
                                                  <th>Profile</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="tab-pane fade show "
                                    id="navs-top-deleted"
                                    role="tabpanel"
                                  >
                                    <div className="col-12">
                                      <div className="card-header border-bottom row">
                                        <div className="card">
                                          <div className="table-responsive text-nowrap">
                                            <table className="table table-bordered">
                                              <thead>
                                                <tr>
                                                  <th>Full Name</th>
                                                  <th>Email</th>
                                                  <th>Role</th>
                                                  <th>Profile</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                                <tr>
                                                  <td>
                                                    <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                      K
                                                    </i>
                                                    <span className="fw-medium">
                                                      Kumar
                                                    </span>
                                                  </td>
                                                  <td>
                                                    kumar31@bluespacetech.com
                                                  </td>
                                                  <td>CEO</td>
                                                  <td>Super Admin</td>
                                                </tr>
                                              </tbody>
                                            </table>
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
                        <div
                          className="tab-pane fade show "
                          id="navs-top-profiles"
                          role="tabpanel"
                        >
                          <div className="col-12">
                            <div className="card-header border-bottom row">
                              <div className="col-8">
                                <h4 className="card-title mb-3">Profiles</h4>
                                <p>
                                  Profile help you define a set of permission
                                </p>
                              </div>
                              <div className="col-4">
                                <button
                                  type="button"
                                  className="btn btn-primary pull-right"
                                  data-bs-toggle="modal"
                                  data-bs-target="#newProfile"
                                >
                                  <span className="ti-xs ti ti-plus me-1"></span>
                                  Create New Role
                                </button>
                              </div>
                            </div>
                            <div className="card-datatable table-responsive">
                              <div className="card-header border-bottom row">
                                <div className="card">
                                  <div className="table-responsive text-nowrap">
                                    <div className="table-scrollable">
                                      <table className="table table-bordered">
                                        <thead>
                                          <tr className="position-sticky top-0 z-1 bg-white">
                                            <th>Profile Name</th>
                                            <th>Profile Description</th>
                                            <th>Modified By</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Administrator</td>
                                            <td>
                                              This profile will have all the
                                              permission, Users with
                                              Administrator profile will be a...
                                            </td>
                                            <td>-</td>
                                          </tr>
                                          <tr>
                                            <td>Standard</td>
                                            <td>
                                              This profile will have all the
                                              permission, Users with
                                              Administrator profile will be a...
                                            </td>
                                            <td>-</td>
                                          </tr>
                                          <tr>
                                            <td>Recruiter</td>
                                            <td>
                                              This profile will have all the
                                              permission, Users with
                                              Administrator profile will be a...
                                            </td>
                                            <td>-</td>
                                          </tr>
                                          <tr>
                                            <td>Team Lead</td>
                                            <td>-</td>
                                            <td>
                                              <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                AN
                                              </i>
                                              Alex Noah
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Team Lead</td>
                                            <td>-</td>
                                            <td>
                                              <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                AN
                                              </i>
                                              Alex Noah
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>Team Lead</td>
                                            <td>-</td>
                                            <td>
                                              <i className="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">
                                                AN
                                              </i>
                                              Alex Noah
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade show "
                          id="navs-top-roles"
                          role="tabpanel"
                        >
                          <div className="col-12">
                            <div className="card-header border-bottom row">
                              <div className="col-8">
                                <h4 className="card-title mb-3">Roles</h4>
                                <p>
                                  Roles help you define visiblity levels for
                                  records in your org.
                                </p>
                              </div>
                              <div className="col-4">
                                <button
                                  type="button"
                                  className="btn btn-primary pull-right"
                                  data-bs-toggle="modal"
                                  data-bs-target="#newRole"
                                >
                                  <span className="ti-xs ti ti-plus me-1"></span>
                                  Create New Role
                                </button>
                              </div>
                            </div>
                            <div className="card-datatable table-responsive">
                              <div className="col-md-6 col-12">
                                <div className="card mb-4">
                                  <h5 className="card-header">Basic</h5>
                                  <div className="card-body">
                                    <div id="jstree-basic">
                                      <ul>
                                        <li data-jstree='{"icon" : "ti ti-folder"}'>
                                          css
                                          <ul>
                                            <li data-jstree='{"icon" : "ti ti-folder"}'>
                                              app.css
                                            </li>
                                            <li data-jstree='{"icon" : "ti ti-folder"}'>
                                              style.css
                                            </li>
                                          </ul>
                                        </li>
                                        <li
                                          className="jstree-open"
                                          data-jstree='{"icon" : "ti ti-folder"}'
                                        >
                                          img
                                          <ul data-jstree='{"icon" : "ti ti-folder"}'>
                                            <li data-jstree='{"icon" : "ti ti-folder"}'>
                                              bg.jpg
                                            </li>
                                            <li data-jstree='{"icon" : "ti ti-folder"}'>
                                              logo.png
                                            </li>
                                            <li data-jstree='{"icon" : "ti ti-folder"}'>
                                              avatar.png
                                            </li>
                                          </ul>
                                        </li>
                                        <li
                                          className="jstree-open"
                                          data-jstree='{"icon" : "ti ti-folder"}'
                                        >
                                          js
                                          <ul>
                                            <li data-jstree='{"icon" : "ti ti-folder"}'>
                                              jquery.js
                                            </li>
                                            <li data-jstree='{"icon" : "ti ti-folder"}'>
                                              app.js
                                            </li>
                                          </ul>
                                        </li>
                                        <li data-jstree='{"icon" : "ti ti-file-text"}'>
                                          index.html
                                        </li>
                                        <li data-jstree='{"icon" : "ti ti-file-text"}'>
                                          page-one.html
                                        </li>
                                        <li data-jstree='{"icon" : "ti ti-file-text"}'>
                                          page-two.html
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* <div>
                              <button onClick={toggleExpandCollapse}>
                                  {expanded ? 'Collapse All' : 'Expand All'}
                              </button>
                              <div>
                                  {renderTree(data)}
                              </div>
                          </div> */}
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade show "
                          id="navs-top-compliance"
                          role="tabpanel"
                        >
                          <div className="col-12">
                            <div className="card-header border-bottom row">
                              <div className="col-8">
                                <h4 className="card-title mb-3">Compliance</h4>
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
                              Compliance Main Tab
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

          {/* New User Modal Start */}

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasAddAgent"
            aria-labelledby="offcanvasAddAgentLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasAddAgentLabel" className="offcanvas-title">
                Add User
              </h5>
              <button
                type="button"
                id="close-add-agent-canvas"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
              <form className="add-new-user pt-0" id="addNewUserForm">
                <div className="modal-body">
                  <div className="mb-3 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="add-user-fullname">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      name="userFullname"
                      aria-label="Enter Full Name"
                    />
                  </div>
                  <div className="mb-3 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="add-user-email">
                      Email
                    </label>
                    <input
                      type="text"
                      id="add-user-email"
                      className="form-control"
                      placeholder="john.doe@example.com"
                      aria-label="john.doe@example.com"
                      name="userEmail"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="user-role">
                      User Role
                    </label>
                    <select id="user-role" className="form-select">
                      <option value="subscriber">Subscriber</option>
                      <option value="editor">Editor</option>
                      <option value="maintainer">Maintainer</option>
                      <option value="author">Author</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="mb-3 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="add-user-fullname">
                      Profile
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Profile"
                      name="Profile"
                      aria-label="Enter Profile"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-label-secondary waves-effect"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* New User Modal End */}

          {/* New Edit User  End */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasEditUser"
            aria-labelledby="offcanvasAddAgentLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasAddAgentLabel" className="offcanvas-title">
                Update User
              </h5>
              <button
                type="button"
                id="close-add-agent-canvas"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
              <form className="add-new-user pt-0" id="addNewUserForm">
                <div className="modal-body">
                  <div className="mb-3 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="add-user-fullname">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      name="userFullname"
                      aria-label="Enter Full Name"
                    />
                  </div>
                  <div className="mb-3 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="add-user-email">
                      Email
                    </label>
                    <input
                      type="text"
                      id="add-user-email"
                      className="form-control"
                      placeholder="john.doe@example.com"
                      aria-label="john.doe@example.com"
                      name="userEmail"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="user-role">
                      User Role
                    </label>
                    <select id="user-role" className="form-select">
                      <option value="subscriber">Subscriber</option>
                      <option value="editor">Editor</option>
                      <option value="maintainer">Maintainer</option>
                      <option value="author">Author</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="mb-3 fv-plugins-icon-container">
                    <label className="form-label" htmlFor="add-user-fullname">
                      Profile
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Profile"
                      name="Profile"
                      aria-label="Enter Profile"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light"
                  >
                    Submit
                  </button>
                  <button
                    type="reset"
                    className="btn btn-label-secondary waves-effect"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* New Edit User  End */}

          {/* New Profile Modal Start */}
          <div
            className="modal fade"
            id="newProfile"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header"></div>
                <form className="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework">
                  <div className="modal-body">
                    <div className="mb-3 fv-plugins-icon-container">
                      <label className="form-label" htmlFor="add-user-fullname">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        name="userFullname"
                        aria-label="Enter Full Name"
                      />
                    </div>
                    <div className="mb-3 fv-plugins-icon-container">
                      <label className="form-label" htmlFor="add-user-email">
                        Email
                      </label>
                      <input
                        type="text"
                        id="add-user-email"
                        className="form-control"
                        placeholder="john.doe@example.com"
                        aria-label="john.doe@example.com"
                        name="userEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="user-role">
                        User Role
                      </label>
                      <select id="user-role" className="form-select">
                        <option value="subscriber">Subscriber</option>
                        <option value="editor">Editor</option>
                        <option value="maintainer">Maintainer</option>
                        <option value="author">Author</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="mb-3 fv-plugins-icon-container">
                      <label className="form-label" htmlFor="add-user-fullname">
                        Profile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Profile"
                        name="Profile"
                        aria-label="Enter Profile"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-label-secondary waves-effect"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* New Profile Modal Start */}
          {/* New Role Modal Start */}
          <div
            className="modal fade"
            id="newRole"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header"></div>
                <form className="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework">
                  <div className="modal-body">
                    <div className="mb-3 fv-plugins-icon-container">
                      <label className="form-label" htmlFor="add-user-fullname">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full Name"
                        name="userFullname"
                        aria-label="Enter Full Name"
                      />
                    </div>
                    <div className="mb-3 fv-plugins-icon-container">
                      <label className="form-label" htmlFor="add-user-email">
                        Email
                      </label>
                      <input
                        type="text"
                        id="add-user-email"
                        className="form-control"
                        placeholder="john.doe@example.com"
                        aria-label="john.doe@example.com"
                        name="userEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="user-role">
                        User Role
                      </label>
                      <select id="user-role" className="form-select">
                        <option value="subscriber">Subscriber</option>
                        <option value="editor">Editor</option>
                        <option value="maintainer">Maintainer</option>
                        <option value="author">Author</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                    <div className="mb-3 fv-plugins-icon-container">
                      <label className="form-label" htmlFor="add-user-fullname">
                        Profile
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Profile"
                        name="Profile"
                        aria-label="Enter Profile"
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light"
                    >
                      Submit
                    </button>
                    <button
                      type="reset"
                      className="btn btn-label-secondary waves-effect"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* New Role Modal End */}
        </div>
      </div>
    </>
  );
};

export default UsersControls;
