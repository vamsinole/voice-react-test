/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
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

const Users = () => {
  const [showToast, setShowToast] = useState(false);
  const [showToastMessge, setShowToastMessge] = useState(false);
  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const [users, setUsers] = useState([]);

  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getUsers;

  const token = localStorage.getItem("token");
  console.log("token", token);

  useEffect(() => {
    fetchVoiceAgents();
  }, []);

  const fetchVoiceAgents = async () => {
    try {
      const response = await axios.get(baseurl + endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //console.log("responce22",response.data.data.rows);
      setUsers(response.data.data.rows);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [isColumnVisible, setIsColumnVisible] = useState(false);
  const toggleColumn = () => {
    setIsColumnVisible(!isColumnVisible);
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
    email: "",
    password: "",
    phone: "",
    role: "",
    website: "",
    address: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const createvoiceAgent = USER_ENDPOINTS.getUsers;
    console.log("formdatausers", formData);
    try {
      const response = await axios.post(
        baseurl + createvoiceAgent,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          role: "agent",
          website: formData.website,
          address: formData.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Created");
    } catch (error) {
      setShowToast(true);
      setShowToastMessge("Error");
      console.error("Error fetching users:", error);
    }
  };

  //editdata

  const [editformData, editsetFormData] = useState({
    address: "",
    email: "",
    name: "",
    phone: "",
    website: "",
  });
  const handleClickedit = async (event) => {
    editsetFormData(event);
  };

  const edithandleInputChange = (event) => {
    const { name, value } = event.target;
    editsetFormData({
      ...editformData,
      [name]: value,
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    // Do something with formData, for example, send it to an API
    console.log("formdataedit", editformData);
    const updateUsers = USER_ENDPOINTS.getUsers;
    try {
      const response = await axios.put(
        baseurl + updateUsers + "/" + editformData.id,
        editformData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Updated");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  //Delete Functionality

  const deleteUser = async (event) => {
    event.preventDefault();
    const deleteUser = USER_ENDPOINTS.getUsers;
    console.log("editformData33", editformData);
    try {
      const response = await axios.delete(
        baseurl + deleteUser + "/" + editformData.id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Deleted");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
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
                        {/* AllViews tab end */}

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
                  <button
                    type="button"
                    className="btn btn-primary pull-right"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasAddUser"
                    aria-controls="offcanvasAddUser"
                  >
                    <span className="ti-xs ti ti-plus me-1"></span>New User
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
                      <div className="card-header p-0 px-4 py-2 border-bottom">
                        <h4 className="card-title pull-left">Users</h4>
                        <table></table>
                      </div>
                      <div className="card-datatable table-responsive">
                        <div className="table-scrollable">
                          <table className="datatables-voice-agents table">
                            <thead className="border-top">
                              <tr className="position-sticky top-0 z-1 bg-white">
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
                                <th>USER</th>
                                <th>PHONE</th>
                                <th>ADDRESS</th>
                                <th>ACTIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users.map((value, key) => {
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

                                    <td>
                                      {" "}
                                      <h6 className="mb-0">{value.name}</h6>
                                      <div>{value.email}</div>
                                    </td>
                                    <td>{value.phone}</td>
                                    <td>{value.address}</td>
                                    <td style={{ width: "70px" }}>
                                      <div className="d-flex acation-btns">
                                        <button
                                          data-bs-toggle="modal"
                                          onClick={() => handleClickedit(value)}
                                          data-bs-target="#updateUserModal"
                                          className="btn px-1"
                                        >
                                          <i className="ti ti-edit ti-sm me-2"></i>
                                        </button>
                                        <button
                                          data-bs-toggle="modal"
                                          onClick={() => handleClickedit(value)}
                                          data-bs-target="#deleteUserModal"
                                          className="btn px-1"
                                        >
                                          <i className="ti ti-trash ti-sm mx-2"></i>
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        <div className="bottom-count">
                          <table className="datatables-voice-agents table">
                            <tfoot className="border-top">
                              <tr>
                                <td>Total NAME: </td>
                                <td>Count of TYPE: </td>
                                <td>Count of PHONE:</td>
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
                      <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasAddUser"
                        aria-labelledby="offcanvasAddUserLabel"
                      >
                        <div className="offcanvas-header">
                          <h5
                            id="offcanvasAddUserLabel"
                            className="offcanvas-title"
                          >
                            Add User
                          </h5>
                          <button
                            type="button"
                            id="close-add-user-canvas"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                          <form
                            className="add-new-user pt-0"
                            id="addNewUserForm"
                            onSubmit={handleSubmit}
                          >
                            <div className="row mb-3">
                              <label
                                className="col-sm-12 col-form-label"
                                htmlFor="basic-default-name"
                              >
                                Name
                              </label>
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basic-default-name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  placeholder="John Doe"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="col-sm-12 col-form-label"
                                htmlFor="basic-default-email"
                              >
                                Email
                              </label>
                              <div className="col-sm-12">
                                <div className="input-group input-group-merge">
                                  <input
                                    type="email"
                                    id="basic-default-email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john.doe"
                                    aria-label="john.doe"
                                    aria-describedby="basic-default-email2"
                                  />
                                  <span
                                    className="input-group-text"
                                    id="basic-default-email2"
                                  >
                                    @example.com
                                  </span>
                                </div>
                                <div className="form-text">
                                  You can use letters, numbers & periods
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="col-sm-12 col-form-label"
                                htmlFor="basic-default-phone"
                              >
                                Phone No
                              </label>
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  id="basic-default-phone"
                                  className="form-control phone-mask"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  placeholder="658 799 8941"
                                  aria-label="658 799 8941"
                                  aria-describedby="basic-default-phone"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="col-sm-12 col-form-label"
                                htmlFor="basic-default-password"
                              >
                                Password
                              </label>
                              <div className="col-sm-12">
                                <div className="input-group input-group-merge">
                                  <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    id="password"
                                  />
                                  <span
                                    className="input-group-text cursor-pointer"
                                    id="password"
                                    onClick={handleTogglePassword}
                                  >
                                    <i
                                      className={
                                        showPassword
                                          ? "ti ti-eye"
                                          : "ti ti-eye-off"
                                      }
                                    ></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="col-sm-12 col-form-label"
                                htmlFor="basic-default-website"
                              >
                                Website
                              </label>
                              <div className="col-sm-12">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="basic-default-website"
                                  name="website"
                                  value={formData.website}
                                  onChange={handleInputChange}
                                  placeholder="example.com"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <label
                                className="col-sm-12 col-form-label"
                                htmlFor="basic-default-address"
                              >
                                Address
                              </label>
                              <div className="col-sm-12">
                                <textarea
                                  id="basic-default-address"
                                  className="form-control"
                                  name="address"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                  placeholder=""
                                  aria-label=""
                                  aria-describedby="basic-icon-default-message2"
                                ></textarea>
                              </div>
                            </div>
                            <button
                              type="submit"
                              data-bs-dismiss="offcanvas"
                              className="btn btn-primary me-sm-3 me-1 data-submit"
                              onclick="createUser()"
                            >
                              <span className="ms-2">Submit</span>
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
              <div className="content-backdrop fade"></div>
            </div>
            <NewAssistantHelpBar />
          </div>
        </div>
      </div>
      {/* Update User Start */}
      <div
        className="modal fade"
        id="updateUserModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Update User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              className="add-new-user pt-0"
              id="addNewUserForm"
              onSubmit={handleUpdate}
            >
              <div className="modal-body">
                <div className="row">
                  <div className="col mb-3">
                    <label
                      htmlFor="update-user-main-name"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="update-user-main-name"
                      className="form-control"
                      value={editformData?.name}
                      name="name"
                      onChange={edithandleInputChange}
                      placeholder="Enter Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label
                      htmlFor="update-user-main-email"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="update-user-main-email"
                      value={editformData?.email}
                      name="email"
                      onChange={edithandleInputChange}
                      className="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label
                      htmlFor="update-user-main-phone"
                      className="form-label"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="update-user-main-phone"
                      value={editformData?.phone}
                      name="phone"
                      onChange={edithandleInputChange}
                      className="form-control"
                      placeholder="658 799 8941"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label
                      htmlFor="update-user-main-website"
                      className="form-label"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      id="update-user-main-website"
                      value={editformData?.website}
                      name="website"
                      onChange={edithandleInputChange}
                      className="form-control"
                      placeholder="Enter Webiste"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label
                      htmlFor="update-user-main-address"
                      className="form-label"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="update-user-main-address"
                      value={editformData?.address}
                      name="address"
                      onChange={edithandleInputChange}
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-label-secondary"
                  id="update-user-modal-close"
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
                    id="update-user-button-loader"
                    style={{ display: "none" }}
                  >
                    {/* <span className="spinner-border" role="status" aria-hidden="true"></span>
                              <span className="visually-hidden">Loading...</span> */}
                  </span>
                  <span className="ms-2">Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Delete User Modal Start */}

      <form
        className="add-new-user pt-0"
        id="addNewUserForm"
        onSubmit={deleteUser}
      >
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
                  type="submit"
                  className="btn btn-primary"
                  onclick="deleteUserApi()"
                >
                  <span
                    id="delete-user-button-loader"
                    style={{ display: "none" }}
                  >
                    {/* <span className="spinner-border" role="status" aria-hidden="true"></span>
                              <span className="visually-hidden">Loading...</span> */}
                  </span>
                  <span className="ms-2">Delete User</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="container">
        {/* <div className="bs-toast toast fade show" role="alert" aria-live="assertive" aria-atomic="true">

                  </div> */}

        <div className="toast-container position-fixed top-0 start-0 p-3">
          <div
            className={`toast ${showToast ? "show" : ""}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header">
              <i className="ti ti-bell ti-xs me-2 text-danger"></i>
              {/* <i className="ti ti-bell ti-xs me-2 text-success"></i> */}
              <strong className="me-auto"> {showToastMessge}</strong>
              <button
                type="button"
                className="btn-close"
                onclick={toggleToast}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
