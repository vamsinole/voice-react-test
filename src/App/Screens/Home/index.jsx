/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./home-style.scss";
import env from "../../../config";
import Header from "../../Components/Header";
import NewAssistantBar from "../../Components/NewAssistantBar";
// import axios from 'axios';
import axios from "../axiosInterceptor";
import { Link } from "react-router-dom";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showToast, setShowToast] = useState(false);
  const [showToastMessge, setShowToastMessge] = useState(false);
  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const [dataFromApi, setDataFromApi] = useState(null);
  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getassist;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // If token is not available, redirect to login page
  if (token === null) {
    navigate("/login");
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseurl + endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDataFromApi(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [parentValue, setParentValue] = useState("");
  const [childValue, setChildValue] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const parentOptions = [
    { label: "Open AI GPT", value: "openai" },
    { label: "Dilogflow", value: "dilogflow" },
    // { label: 'Parent 3', value: 'parent3' }
  ];

  const getChildOptions = (parentValue) => {
    switch (parentValue) {
      case "dilogflow":
        return [
          { label: "Dining Out", value: "dining-out" },
          { label: "Banking", value: "banking" },
          { label: "Job Interview", value: "job-interview" },
          { label: "Hotel Booking", value: "hotel-booking" },
          { label: "Support", value: "support" },
          { label: "Flight Reservations", value: "flights" },
        ];

      default:
        return [];
    }
  };
  // Event handler for parent dropdown change
  const handleParentChange = (event) => {
    const selectedParentValue = event.target.value;
    setParentValue(selectedParentValue);
    // Reset child value when parent changes
    setChildValue("");
    setShowAdditionalFields(selectedParentValue === "openai");
  };

  // Event handler for child dropdown change
  const handleChildChange = (event) => {
    const selectedChildValue = event.target.value;
    setChildValue(selectedChildValue);
  };
  const TblData = [
    {
      name: "Akram",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Jhon",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Rahul",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Syam",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Ved",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Nag",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Mum",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Akram",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Jhon",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Rahul",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Syam",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Ved",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Nag",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
    {
      name: "Mum",
      model: "Lorem Ipsum is",
      instruc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      type: "Dialogdlow",
      action: "",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust as needed
  const totalItems = TblData.length;

  // Calculate total counts
  const totalCountName = TblData.length;
  const totalCountModel = TblData.reduce((total, item) => total + 1, 0); // Assuming each item has a model
  const totalCountInstruc = TblData.reduce((total, item) => total + 1, 0); // Assuming each item has instructions

  // Pagination logic
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = TblData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [isColumnVisible, setIsColumnVisible] = useState(false);

  // Toggle the visibility and adjust classes
  const toggleColumn = () => {
    setIsColumnVisible(!isColumnVisible);
  };

  const [formData] = useState({
    name: "",
  });

  const handleInputChangecall = (event) => {
    const { name, value } = event.target;
    editsetFormData({
      ...editformData,
      [name]: value,
    });
  };
  const [editformData, editsetFormData] = useState({
    address: "",
    text: "",
  });

  const handleClickedit = async (event) => {
    console.log("event", event);
    editsetFormData(event);
  };

  const createChatHandle = async (event) => {
    event.preventDefault();
    const createChat = USER_ENDPOINTS.createChat;
    console.log("editformData33", editformData);
    try {
      const response = await axios.post(
        baseurl + createChat + "/" + editformData.id,
        { model: "null", text: editformData.text },
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
      setShowToastMessge("Added Responce successfully");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteAssist = async (event) => {
    event.preventDefault();
    const deleteassist = USER_ENDPOINTS.getassist;
    console.log("editformData33", editformData);
    try {
      const response = await axios.delete(
        baseurl + deleteassist + "/" + editformData.id,
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
      setShowToastMessge("Deleted");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setSelectedItems(isChecked ? dataFromApi.map((item) => item.id) : []);
  };
  const handleCheckboxChange = (e, id) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedItems((prev) => [...prev, id]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== id));
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
              <div className="row my-3">
                <div className="col-md-4">
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
                </div>
                <div className="col-4 mb-3"></div>
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
                  {/* <a className="btn btn-primary pull-right text-white" data-bs-toggle="modal"
                      data-bs-target="#createKbsModal">
                    <span className="ti-xs ti ti-plus me-1"></span> Create Assistant
                    </a> */}
                  <Link
                    className="btn btn-primary pull-right text-white"
                    to="/assistant-dashboard"
                  >
                    <span className="ti-xs ti ti-plus me-1"></span> Create
                    Assistant
                  </Link>
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
                  <div
                    className={isColumnVisible ? "col-md-8" : "col-md-12"}
                    id="kbs-content"
                  >
                    <div className="card">
                      <div className="card-header p-0 px-4 py-2 border-bottom">
                        <h4 className="card-title pull-left">Assistants</h4>
                      </div>
                      <div className="card-datatable table-responsive">
                        <div className="table-scrollable">
                          <table className="table">
                            <thead>
                              <tr className="position-sticky top-0 z-1 bg-white">
                                <th className="w-px-14">
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      checked={selectAll}
                                      onChange={handleSelectAll}
                                    />
                                    {/* <input className="email-list-item-input form-check-input" type="checkbox" id="email-1" /> */}
                                    <label
                                      className="form-check-label"
                                      htmlFor="email-1"
                                    ></label>
                                  </div>
                                </th>
                                <th>NAME</th>
                                <th>MODEL</th>
                                <th>INSTRUCTIONS</th>
                                <th>TYPE</th>
                                <th style={{ width: "70px" }}>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dataFromApi &&
                                dataFromApi.map((value, key) => (
                                  <tr key={key}>
                                    <td className="w-px-14">
                                      <div className="form-check mb-0">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          checked={selectedItems.includes(
                                            value.id
                                          )}
                                          onChange={(e) =>
                                            handleCheckboxChange(e, value.id)
                                          }
                                        />
                                        <label className="form-check-label"></label>
                                      </div>
                                    </td>
                                    <td>{value.name}</td>
                                    <td>{value.model}</td>
                                    <td>{value.instruc}</td>
                                    <td>{value.type}</td>
                                    <td style={{ width: "70px" }}>
                                      <div className="d-flex action-btns">
                                        <button
                                          data-bs-toggle="modal"
                                          onClick={() => handleClickedit(value)}
                                          data-bs-target="#testAssistantModal"
                                          className="btn px-1"
                                        >
                                          <i className="ti ti-player-play ti-sm me-2"></i>
                                        </button>
                                        <button
                                          data-bs-toggle="modal"
                                          onClick={() => handleClickedit(value)}
                                          data-bs-target="#deleteAssistantModal"
                                          className="btn px-1"
                                        >
                                          <i className="ti ti-trash ti-sm mx-2"></i>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              {/* {dataFromApi ? dataFromApi.map((value, key) => {
                                        return (
                                          <tr key={key}>
                                            <td className='w-px-14'>
                                            <div className="form-check mb-0">
                                  <input className="email-list-item-input form-check-input" type="checkbox" id="email-1" />
                                  <label className="form-check-label" htmlFor="email-1"></label>
                                </div>
                                            </td>
                                            <td>{value.name}</td>
                                            <td>{value.model}</td>
                                            <td>{value.instruc}</td>
                                            <td>{value.type}</td>
                                            <td style={{ width: '70px' }}>
                                              <div className="d-flex acation-btns">
                                              
                                                <button  data-bs-toggle="modal" onClick={() => handleClickedit(value)}
                                  data-bs-target="#testAssistantModal" className='btn px-1'><i className="ti ti-player-play ti-sm me-2"></i></button>
                                                <button data-bs-toggle="modal" onClick={() => handleClickedit(value)}
                                  data-bs-target="#deleteAssistantModal" className='btn px-1'><i className="ti ti-trash ti-sm mx-2"></i></button>
                                              </div>
                                            </td>
                                          </tr>
                                        );
                                      }) : null} */}
                            </tbody>
                          </table>
                        </div>
                        <div className="bottom-count">
                          <table className="datatables-voice-agents table">
                            <tfoot className="border-top">
                              <tr>
                                <td>Total Count: {totalCountName}</td>
                                <td>Count of Model: {totalCountModel}</td>
                                <td>
                                  Count of INSTRUCTIONS: {totalCountInstruc}
                                </td>
                                <td className="d-flex justify-content-end align-items-center">
                                  Records per page:
                                  <select
                                    name=""
                                    id=""
                                    className="form-select w-px-75"
                                  >
                                    <option value="">50</option>
                                    <option value="">100</option>
                                    <option value="">150</option>
                                    <option value="">200</option>
                                  </select>
                                </td>
                                <td>
                                  {/* Pagination */}
                                  {totalItems > itemsPerPage && (
                                    <ul className="pagination mb-0">
                                      {Array.from({
                                        length: Math.ceil(
                                          totalItems / itemsPerPage
                                        ),
                                      }).map((_, index) => (
                                        <li
                                          key={index}
                                          className={`page-item ${
                                            currentPage === index + 1
                                              ? "active"
                                              : ""
                                          }`}
                                        >
                                          <button
                                            className="page-link"
                                            onClick={() => paginate(index + 1)}
                                          >
                                            {index + 1}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>

                      <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasAddAssistant"
                        aria-labelledby="offcanvasAddAssistantLabel"
                      >
                        <div className="offcanvas-header">
                          <h5
                            id="offcanvasAddAssistantLabel"
                            className="offcanvas-title"
                          >
                            Add Assistant
                          </h5>
                          <button
                            type="button"
                            className="btn-close text-reset"
                            id="close-add-assistant-canvas"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                          <form
                            className="add-new-assistant pt-0"
                            id="addNewAssistantForm"
                            onsubmit="return false"
                          >
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="assistant-name"
                              >
                                Assistant Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="assistant-name"
                                placeholder="John Doe"
                                name="name"
                                aria-label="John Doe"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="assistant-description"
                              >
                                Assistant description
                              </label>
                              <textarea
                                type="text"
                                className="form-control"
                                id="assistant-description"
                                placeholder="Hello"
                                name="description"
                                aria-label="Hello"
                              ></textarea>
                            </div>
                            <div>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="assistant-type"
                                >
                                  Type
                                </label>
                                <select
                                  value={parentValue}
                                  onChange={handleParentChange}
                                  className="form-select"
                                >
                                  <option value="">Select Type</option>
                                  {parentOptions.map((option) => (
                                    <option
                                      key={option.value}
                                      value={option.value}
                                    >
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              {parentValue && (
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="dialogflow-type"
                                  >
                                    Base Type
                                  </label>
                                  <select
                                    value={childValue}
                                    onChange={handleChildChange}
                                    className="form-select"
                                  >
                                    <option value="">Select Type</option>
                                    {getChildOptions(parentValue).map(
                                      (option) => (
                                        <option
                                          key={option.value}
                                          value={option.value}
                                        >
                                          {option.label}
                                        </option>
                                      )
                                    )}
                                  </select>

                                  {/* <select value={childValue} onChange={handleChildChange}>
            <option value="">Select Child</option>
            {getChildOptions(parentValue).map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select> */}
                                </div>
                              )}
                              {showAdditionalFields && (
                                <>
                                  <div
                                    className="mb-3"
                                    id="open-ai-instructions"
                                  >
                                    <label
                                      className="form-label"
                                      htmlFor="assistant-instructions"
                                    >
                                      Instructions
                                    </label>
                                    <textarea
                                      id="assistant-instructions"
                                      className="form-control"
                                      placeholder="Act as a Maths teacher"
                                      aria-label="Act as a Maths teacher"
                                      name="instructions"
                                    ></textarea>
                                  </div>
                                  <div className="mb-3" id="open-ai-api-key">
                                    <label
                                      className="form-label"
                                      htmlFor="assistant-api-key"
                                    >
                                      API Key{" "}
                                      <span
                                        className="ti ti-info-circle tf-icons"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="right"
                                        title="This is optional, we will use our key if you leave this empty"
                                      ></span>
                                    </label>
                                    <input
                                      type="text"
                                      id="assistant-api-key"
                                      className="form-control"
                                      placeholder="API key"
                                      aria-label="API key"
                                      name="apiKey"
                                    />
                                  </div>
                                  <div className="mb-3" id="open-ai-files">
                                    <div className="card">
                                      <h5 className="card-header">
                                        Upload files
                                      </h5>
                                      <div className="card-body">
                                        <form
                                          className="dropzone needsclick"
                                          id="dropzone-multi"
                                        >
                                          <label
                                            htmlFor="assistant-file"
                                            className="pointer dz-message needsclick"
                                          >
                                            Drop file here or click to upload
                                            (CSV or XLSX file only). Limit : 100
                                            MB
                                          </label>
                                          <div className="fallback">
                                            <input
                                              id="assistant-file"
                                              name="file"
                                              type="file"
                                            />
                                          </div>
                                          <div
                                            className="parent-div"
                                            id="filename-parent"
                                          >
                                            <label className="form-label"></label>
                                            <i
                                              className="ti ti-x pull-right pointer"
                                              id="clear-file"
                                            ></i>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>

                            {/* <div className="mb-3">
                      <label className="form-label" htmlFor="assistant-type">Type</label>
                      <select id="assistant-type" onchange="changeAssistantType()"
                       className="form-select">
                        <option value="">Select Type</option>
                        <option value="open_ai">Open AI GPT</option>
                        <option value="dialogflow">Dilogflow</option>
                      </select>
                    </div> */}
                            {/* <div className="mb-3" id="dialogflow-type-parent" style={{ display: 'none' }}>
                      <label className="form-label" htmlFor="dialogflow-type">Base Type</label>
                      <select id="dialogflow-type" onchange="changeAssistantType()" className="form-select">
                        <option value="">Select Type</option>
                        <option value="dining-out">Dining Out</option>
                        <option value="banking">Banking</option>
                        <option value="job-interview">Job Interview</option>
                        <option value="hotel-booking">Hotel Booking</option>
                        <option value="support">Support</option>
                        <option value="flights">Flight Reservations</option>
                      </select>
                    </div> */}
                            <div
                              className="mb-3"
                              id="open-ai-model"
                              style={{ display: "none" }}
                            >
                              <label
                                className="form-label"
                                htmlFor="assistant-model"
                              >
                                Model type
                              </label>
                              <select
                                id="assistant-model"
                                className="form-select"
                              >
                                <option value="">Select Model</option>
                                <option value="gpt-3.5-turbo-0125">
                                  GPT-3.5-turbo-0125 (Recommended)
                                </option>
                                <option value="gpt-3.5-turbo-0613">
                                  GPT-3.5-turbo-0613
                                </option>
                                <option value="gpt-3.5-turbo-1106">
                                  GPT-3.5-turbo-1106
                                </option>
                              </select>
                            </div>

                            <div
                              className="mb-3"
                              id="open-ai-instructions"
                              style={{ display: "none" }}
                            >
                              <label
                                className="form-label"
                                htmlFor="assistant-instructions"
                              >
                                Instructions
                              </label>
                              <textarea
                                type="text"
                                id="assistant-instructions"
                                className="form-control"
                                placeholder="Act as a Maths teacher"
                                aria-label="Act as a Maths teacher"
                                name="instructions"
                              ></textarea>
                            </div>
                            <div
                              className="mb-3"
                              id="open-ai-api-key"
                              style={{ display: "none" }}
                            >
                              <label
                                className="form-label"
                                htmlFor="assistant-api-key"
                              >
                                API Key{" "}
                                <span
                                  className="ti ti-info-circle tf-icons"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="right"
                                  title="This is optional, we will use our key if you leave this empty"
                                ></span>
                              </label>
                              <input
                                type="text"
                                id="assistant-api-key"
                                className="form-control"
                                placeholder="API key"
                                aria-label="API key"
                                name="apiKey"
                              />
                            </div>

                            <div
                              className="mb-3"
                              id="open-ai-files"
                              style={{ display: "none" }}
                            >
                              <div className="card">
                                <h5 className="card-header">Upload files</h5>
                                <div className="card-body">
                                  <form
                                    className="dropzone needsclick"
                                    id="dropzone-multi"
                                  >
                                    <label
                                      htmlFor="assistant-file"
                                      className="pointer dz-message needsclick"
                                    >
                                      Drop file here or click to upload (CSV or
                                      XLSX file only). Limit : 100 MB
                                    </label>
                                    <div className="fallback">
                                      <input
                                        id="assistant-file"
                                        name="file"
                                        type="file"
                                      />
                                    </div>
                                    <div
                                      className="parent-div"
                                      id="filename-parent"
                                      style={{ display: "none" }}
                                    >
                                      <label className="form-label"></label>
                                      <i
                                        className="ti ti-x pull-right pointer"
                                        id="clear-file"
                                      ></i>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary me-sm-3 me-1 data-submit"
                              onClick="createAssistant()"
                            >
                              <span
                                id="create-assistant-button-loader"
                                style={{ display: "none" }}
                              >
                                <span
                                  className="spinner-border"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </span>
                              <span className="ms-2">Create Assistant</span>
                            </button>
                            <button
                              type="reset"
                              className="btn btn-label-secondary"
                              data-bs-dismiss="offcanvas"
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      </div>

                      <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasTestAssistant"
                        aria-labelledby="offcanvasTestAssistantLabel"
                      >
                        <div className="offcanvas-header">
                          <h5
                            id="offcanvasTestAssistantLabel"
                            className="offcanvas-title"
                          >
                            Test Assistant
                          </h5>
                          <button
                            type="button"
                            className="btn-close text-reset"
                            id="close-test-assistant-canvas"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                          <form
                            className="add-new-assistant pt-0"
                            id="addNewAssistantForm"
                          >
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="test-instruction"
                              >
                                Instruction
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="test-instruction"
                                placeholder="Ask me anything"
                                name="text"
                                aria-label="Ask me anything"
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                className="form-label"
                                id="test-assistant-response"
                              ></label>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary me-sm-3 me-1 data-submit"
                            >
                              <span
                                id="test-assistant-button-loader"
                                style={{ display: "none" }}
                              >
                                <span
                                  className="spinner-border"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </span>
                              <span className="ms-2">Test</span>
                            </button>
                            <button
                              type="reset"
                              className="btn btn-label-secondary"
                              data-bs-dismiss="offcanvas"
                            >
                              Cancel
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NewAssistantHelpBar />
          </div>
        </div>
      </div>

      <form className="mb-3" onSubmit={createChatHandle}>
        <div
          className="modal fade"
          id="testAssistantModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Test assistant
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body app-chat">
                <div className="col app-chat-history">
                  <div className="chat-history-wrapper">
                    <div className="chat-history-body bg-body">
                      <ul
                        className="list-unstyled chat-history"
                        id="testing-assistant-chat"
                      ></ul>
                    </div>
                    <div className="chat-history-footer shadow-sm">
                      <div className="form-send-message d-flex justify-content-between align-items-center">
                        <div className="col-sm-9 pull-left">
                          <input
                            id="assistant-chat-input"
                            name="text"
                            value={editformData.text}
                            onChange={handleInputChangecall}
                            className="form-control message-input border-0 me-3 shadow-none"
                            placeholder="Type your message here"
                          />
                        </div>
                        <div className="col-sm-3 pull-right">
                          <div className="message-actions d-flex align-items-center">
                            <i
                              className="speech-to-text ti ti-microphone ti-sm cursor-pointer me-3"
                              id="microphone"
                              onClick="startListening()"
                            ></i>
                            <button
                              type="submit"
                              data-bs-dismiss="modal"
                              className="btn btn-primary d-flex send-msg-btn pull-right"
                            >
                              <span
                                id="test-assistant-button-loader"
                                style={{ display: "none" }}
                              >
                                <span
                                  className="spinner-border"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </span>
                              <span className="ms-2">
                                <i className="ti ti-send me-md-1 me-0"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      </form>

      <div
        className="modal fade"
        id="updateAssistantModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Add intent
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
                  <label htmlFor="new-intent" className="form-label">
                    Intent
                  </label>
                  <input
                    type="text"
                    id="new-intent"
                    className="form-control"
                    name="text"
                    value={formData.text}
                    onChange={handleInputChangecall}
                    placeholder="Enter intent"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-label-secondary"
                id="new-intent-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                <span id="new-intent-button-loader" style={{ display: "none" }}>
                  <span
                    className="spinner-border"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Loading...</span>
                </span>
                <span className="ms-2">Add intent</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <form
        className="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={deleteAssist}
      >
        <div
          className="modal fade"
          id="deleteAssistantModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Delete assistant
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
                    <label
                      htmlFor="update-assistant-name"
                      className="form-label"
                    >
                      Are you sure you want to delete this Assistant?
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  id="delete-assistant-modal-close"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  <span
                    id="delete-assistant-button-loader"
                    style={{ display: "none" }}
                  >
                    {/* <span className="spinner-border" role="status" aria-hidden="true"></span>
                              <span className="visually-hidden">Loading...</span> */}
                  </span>
                  <span className="ms-2">Delete Assistant</span>
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

export default Home;
