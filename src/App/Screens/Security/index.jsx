import React, { useState } from "react";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import NewAssistantBar from "../../Components/NewAssistantBar";
import ProfileSettings from "../../Components/ProfileSettings";
import Header from "../../Components/Header";
import {
  callAPI,
  toastr_options,
  validatePassword,
} from "../../Components/Utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { USER_ENDPOINTS } from "../../../config/enpoints";

const Security = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submittingPassword, setSubmittingPassword] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token", token);
  async function submitChangePassword() {
    if (!oldPassword || oldPassword.length === 0) {
      toast.error("Old password cannot be empty", toastr_options);
      return "";
    }
    if (!newPassword || newPassword.length === 0) {
      toast.error("New password cannot be empty", toastr_options);
      return "";
    }
    if (!validatePassword(newPassword)) {
      toast.error(
        "Make sure your password is 8 chars long, and has an uppercase letter and a special character",
        toastr_options
      );
      return "";
    }
    if (newPassword !== confirmPassword) {
      toast.error("Confirm password is not matching", toastr_options);
      return "";
    }
    setSubmittingPassword(true);
    let password_data = {
      old_password: oldPassword,
      new_password: newPassword,
    };
    let password_obj = await callAPI(
      "PUT",
      USER_ENDPOINTS.profile,
      JSON.stringify(password_data),
      token
    );
    setSubmittingPassword(false);
    if (password_obj.authError) {
      navigate("/login");
    } else if (password_obj.error) {
      if (
        password_obj.error &&
        password_obj.error.message &&
        password_obj.error.message.length > 0
      ) {
        toast.error(password_obj.error.message, toastr_options);
      } else {
        toast.error("Please try again later", toastr_options);
      }
    } else {
      toast.success("Password has been updated successfully", toastr_options);
    }
  }

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid">
              <div className="row mt-3">
                <ProfileSettings />
              </div>
            </div>
            <div className="container-fluid flex-grow-1  container-p-y pt-0">
              <div className="row overflow-auto" style={{ maxHeight: "70vh" }}>
                <div className="col-md-12">
                  <div className="card mb-4">
                    <h5 className="card-header">Change Password</h5>
                    <div className="card-body">
                      <div className="alert alert-warning" role="alert">
                        <h5 className="alert-heading mb-2">
                          Ensure that these requirements are met
                        </h5>
                        <span>
                          Minimum 8 characters long, uppercase & symbol
                        </span>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label className="form-label" htmlFor="newPassword">
                            Current Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              type="password"
                              id="oldPassword"
                              name="oldPassword"
                              value={oldPassword}
                              onChange={(e) => setOldPassword(e.target.value)}
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span className="input-group-text cursor-pointer">
                              <i className="ti ti-eye-off"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label className="form-label" htmlFor="newPassword">
                            New Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              type="password"
                              id="newPassword"
                              name="newPassword"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span className="input-group-text cursor-pointer">
                              <i className="ti ti-eye-off"></i>
                            </span>
                          </div>
                        </div>

                        <div className="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label
                            className="form-label"
                            htmlFor="confirmPassword"
                          >
                            Confirm New Password
                          </label>
                          <div className="input-group input-group-merge">
                            <input
                              className="form-control"
                              type="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span className="input-group-text cursor-pointer">
                              <i className="ti ti-eye-off"></i>
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            onClick={submitChangePassword}
                            disabled={submittingPassword}
                            className="btn btn-primary me-2"
                          >
                            {submittingPassword && (
                              <span id="create-kbs-button-loader">
                                <span
                                  className="spinner-border"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </span>
                            )}
                            Change Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Two-steps verification --> */}
                  <div className="card mb-4">
                    <h5 className="card-header pb-2">Two-steps verification</h5>
                    <div className="d-flex flex-column gap-4 card-body">
                      <span className="fs-5">
                        Two-steps authentication is not enabled yet.
                      </span>
                      <span className="">
                        Two-steps authentication adds an additional layer of
                        security to your account by requiring more than just a
                        password to log in.
                      </span>
                      {/* <h6 className="mt-3 mb-2">SMS</h6>
                      <div className="d-flex justify-content-between border-bottom mb-3 pb-2">
                        <span>+1(968) 945-8832</span>
                        <div className="action-icons">
                          <a
                            href="javascript:;"
                            className="text-body me-1"
                            data-bs-target="#enableOTP"
                            data-bs-toggle="modal"
                          >
                            <i className="ti ti-edit ti-sm"></i>
                          </a>
                          <a href="javascript:;" className="text-body">
                            <i className="ti ti-trash ti-sm"></i>
                          </a>
                        </div>
                      </div>
                      <p className="mb-0">
                        Two-factor authentication adds an additional layer of
                        security to your account by requiring more than just a
                        password to log in.
                        <a href="javascript:void(0);" className="text-body">
                          Learn more.
                        </a>
                      </p> */}
                      <div>
                        <button type="submit" className="btn btn-primary me-2">
                          {/* Enable Two-factor Authentication */}
                          Coming Soon
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Recent Devices --> */}
                  {/* <div className="card mb-4">
                    <h5 className="card-header">Recent Devices</h5>
                    <div className="table-responsive">
                      <table className="table border-top">
                        <thead>
                          <tr>
                            <th className="text-truncate">Browser</th>
                            <th className="text-truncate">Device</th>
                            <th className="text-truncate">Location</th>
                            <th className="text-truncate">Recent Activities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-truncate">
                              <i className="ti ti-brand-windows text-info ti-xs me-2"></i>
                              <span className="fw-medium">Chrome on Windows</span>
                            </td>
                            <td className="text-truncate">HP Spectre 360</td>
                            <td className="text-truncate">Switzerland</td>
                            <td className="text-truncate">10, July 2021 20:07</td>
                          </tr>
                          <tr>
                            <td className="text-truncate">
                              <i className="ti ti-device-mobile text-danger ti-xs me-2"></i>
                              <span className="fw-medium">Chrome on iPhone</span>
                            </td>
                            <td className="text-truncate">iPhone 12x</td>
                            <td className="text-truncate">Australia</td>
                            <td className="text-truncate">13, July 2021 10:10</td>
                          </tr>
                          <tr>
                            <td className="text-truncate">
                              <i className="ti ti-brand-android text-success ti-xs me-2"></i>
                              <span className="fw-medium">Chrome on Android</span>
                            </td>
                            <td className="text-truncate">Oneplus 9 Pro</td>
                            <td className="text-truncate">Dubai</td>
                            <td className="text-truncate">14, July 2021 15:15</td>
                          </tr>
                          <tr>
                            <td className="text-truncate">
                              <i className="ti ti-brand-apple ti-xs me-2"></i>
                              <span className="fw-medium">Chrome on MacOS</span>
                            </td>
                            <td className="text-truncate">Apple iMac</td>
                            <td className="text-truncate">India</td>
                            <td className="text-truncate">16, July 2021 16:17</td>
                          </tr>
                          <tr>
                            <td className="text-truncate">
                              <i className="ti ti-brand-windows text-info ti-xs me-2"></i>
                              <span className="fw-medium">Chrome on Windows</span>
                            </td>
                            <td className="text-truncate">HP Spectre 360</td>
                            <td className="text-truncate">Switzerland</td>
                            <td className="text-truncate">20, July 2021 21:01</td>
                          </tr>
                          <tr>
                            <td className="text-truncate border-bottom-0">
                              <i className="ti ti-brand-android text-success ti-xs me-2"></i>
                              <span className="fw-medium">Chrome on Android</span>
                            </td>
                            <td className="text-truncate border-bottom-0">
                              Oneplus 9 Pro
                            </td>
                            <td className="text-truncate border-bottom-0">Dubai</td>
                            <td className="text-truncate border-bottom-0">
                              21, July 2021 12:22
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            <NewAssistantHelpBar />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Security;
