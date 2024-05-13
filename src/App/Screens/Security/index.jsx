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
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid">
              <div className="row mt-3">
                <ProfileSettings />
              </div>
            </div>
            <div class="container-fluid flex-grow-1  container-p-y pt-0">
              <div class="row overflow-auto" style={{ maxHeight: "70vh" }}>
                <div class="col-md-12">
                  <div class="card mb-4">
                    <h5 class="card-header">Change Password</h5>
                    <div class="card-body">
                      <div class="alert alert-warning" role="alert">
                        <h5 class="alert-heading mb-2">
                          Ensure that these requirements are met
                        </h5>
                        <span>
                          Minimum 8 characters long, uppercase & symbol
                        </span>
                      </div>
                      <div class="row">
                        <div class="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label class="form-label" for="newPassword">
                            Current Password
                          </label>
                          <div class="input-group input-group-merge">
                            <input
                              class="form-control"
                              type="password"
                              id="oldPassword"
                              name="oldPassword"
                              value={oldPassword}
                              onChange={(e) => setOldPassword(e.target.value)}
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span class="input-group-text cursor-pointer">
                              <i class="ti ti-eye-off"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label class="form-label" for="newPassword">
                            New Password
                          </label>
                          <div class="input-group input-group-merge">
                            <input
                              class="form-control"
                              type="password"
                              id="newPassword"
                              name="newPassword"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span class="input-group-text cursor-pointer">
                              <i class="ti ti-eye-off"></i>
                            </span>
                          </div>
                        </div>

                        <div class="mb-3 col-12 col-sm-6 form-password-toggle">
                          <label class="form-label" for="confirmPassword">
                            Confirm New Password
                          </label>
                          <div class="input-group input-group-merge">
                            <input
                              class="form-control"
                              type="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            />
                            <span class="input-group-text cursor-pointer">
                              <i class="ti ti-eye-off"></i>
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            onClick={submitChangePassword}
                            disabled={submittingPassword}
                            class="btn btn-primary me-2"
                          >
                            {submittingPassword && (
                              <span id="create-kbs-button-loader">
                                <span
                                  class="spinner-border"
                                  role="status"
                                  aria-hidden="true"
                                ></span>
                                <span class="visually-hidden">Loading...</span>
                              </span>
                            )}
                            Change Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Two-steps verification --> */}
                  <div class="card mb-4">
                    <h5 class="card-header pb-2">Two-steps verification</h5>
                    <div class="d-flex flex-column gap-4 card-body">
                      <span class="fs-5">
                        Two-steps authentication is not enabled yet.
                      </span>
                      <span class="">
                        Two-steps authentication adds an additional layer of
                        security to your account by requiring more than just a
                        password to log in.
                      </span>
                      {/* <h6 class="mt-3 mb-2">SMS</h6>
                      <div class="d-flex justify-content-between border-bottom mb-3 pb-2">
                        <span>+1(968) 945-8832</span>
                        <div class="action-icons">
                          <a
                            href="javascript:;"
                            class="text-body me-1"
                            data-bs-target="#enableOTP"
                            data-bs-toggle="modal"
                          >
                            <i class="ti ti-edit ti-sm"></i>
                          </a>
                          <a href="javascript:;" class="text-body">
                            <i class="ti ti-trash ti-sm"></i>
                          </a>
                        </div>
                      </div>
                      <p class="mb-0">
                        Two-factor authentication adds an additional layer of
                        security to your account by requiring more than just a
                        password to log in.
                        <a href="javascript:void(0);" class="text-body">
                          Learn more.
                        </a>
                      </p> */}
                      <div>
                        <button type="submit" class="btn btn-primary me-2">
                          {/* Enable Two-factor Authentication */}
                          Coming Soon
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Recent Devices --> */}
                  {/* <div class="card mb-4">
                    <h5 class="card-header">Recent Devices</h5>
                    <div class="table-responsive">
                      <table class="table border-top">
                        <thead>
                          <tr>
                            <th class="text-truncate">Browser</th>
                            <th class="text-truncate">Device</th>
                            <th class="text-truncate">Location</th>
                            <th class="text-truncate">Recent Activities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-truncate">
                              <i class="ti ti-brand-windows text-info ti-xs me-2"></i>
                              <span class="fw-medium">Chrome on Windows</span>
                            </td>
                            <td class="text-truncate">HP Spectre 360</td>
                            <td class="text-truncate">Switzerland</td>
                            <td class="text-truncate">10, July 2021 20:07</td>
                          </tr>
                          <tr>
                            <td class="text-truncate">
                              <i class="ti ti-device-mobile text-danger ti-xs me-2"></i>
                              <span class="fw-medium">Chrome on iPhone</span>
                            </td>
                            <td class="text-truncate">iPhone 12x</td>
                            <td class="text-truncate">Australia</td>
                            <td class="text-truncate">13, July 2021 10:10</td>
                          </tr>
                          <tr>
                            <td class="text-truncate">
                              <i class="ti ti-brand-android text-success ti-xs me-2"></i>
                              <span class="fw-medium">Chrome on Android</span>
                            </td>
                            <td class="text-truncate">Oneplus 9 Pro</td>
                            <td class="text-truncate">Dubai</td>
                            <td class="text-truncate">14, July 2021 15:15</td>
                          </tr>
                          <tr>
                            <td class="text-truncate">
                              <i class="ti ti-brand-apple ti-xs me-2"></i>
                              <span class="fw-medium">Chrome on MacOS</span>
                            </td>
                            <td class="text-truncate">Apple iMac</td>
                            <td class="text-truncate">India</td>
                            <td class="text-truncate">16, July 2021 16:17</td>
                          </tr>
                          <tr>
                            <td class="text-truncate">
                              <i class="ti ti-brand-windows text-info ti-xs me-2"></i>
                              <span class="fw-medium">Chrome on Windows</span>
                            </td>
                            <td class="text-truncate">HP Spectre 360</td>
                            <td class="text-truncate">Switzerland</td>
                            <td class="text-truncate">20, July 2021 21:01</td>
                          </tr>
                          <tr>
                            <td class="text-truncate border-bottom-0">
                              <i class="ti ti-brand-android text-success ti-xs me-2"></i>
                              <span class="fw-medium">Chrome on Android</span>
                            </td>
                            <td class="text-truncate border-bottom-0">
                              Oneplus 9 Pro
                            </td>
                            <td class="text-truncate border-bottom-0">Dubai</td>
                            <td class="text-truncate border-bottom-0">
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
