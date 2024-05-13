import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "./../../../assets/logo.png";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerAsCompany, setRegisterAsCompany] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitRegister = () => {
    // Handle form submission logic here
  };

  const toggleRegisterAsCompany = () => {
    // console.log(registerAsCompany);
    setRegisterAsCompany((prev) => !prev);
  };
  console.log(registerAsCompany);

  return (
    // <div className="authentication-wrapper-outer bg-white">
    <div className="authentication-wrapper authentication-cover authentication-bg">
      <div className="authentication-inner row">
        <div className="d-none d-lg-flex col-lg-7 p-0">
          <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
            <img
              src="assets/img/illustrations/auth-register-illustration-light.png"
              alt="register"
              className="img-fluid my-5 auth-illustration"
              data-app-light-img="illustrations/auth-register-illustration-light.png"
              data-app-dark-img="illustrations/auth-register-illustration-dark.png"
            />
            <img
              src="assets/img/illustrations/bg-shape-image-light.png"
              alt="register"
              className="platform-bg"
              data-app-light-img="illustrations/bg-shape-image-light.png"
              data-app-dark-img="illustrations/bg-shape-image-dark.png"
            />
          </div>
        </div>

        <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
          <div className="w-px-400 mx-auto">
            <div className="app-brand mb-4">
              <a href="index.html" className="app-brand-link gap-2">
                <span className="app-brand-logo demo">
                  <img src={Logo} height={32} width={32} alt="" />
                </span>
              </a>
            </div>
            <h3 className="mb-1">Adventure starts here 🚀</h3>
            <p className="mb-4">Make your app management easy and fun!</p>

            <div className="mb-3">
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  Firstname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your first name"
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Lastname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your last name"
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label for="basic-default-phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control phone-mask"
                  id="basic-default-phone"
                  name="basic-default-phone"
                  placeholder="658 799 8941"
                />
              </div>
              <div className="mb-3">
                <label for="website" className="form-label">
                  Website
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="website"
                  name="website"
                  placeholder="Enter your website"
                />
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  placeholder="Enter your address"
                />
              </div>
              <div className="mb-3 form-password-toggle">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <div className="input-group input-group-merge">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="••••••••••••"
                    aria-describedby="password"
                  />
                  <span
                    className="input-group-text cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={`ti ${showPassword ? "ti-eye" : "ti-eye-off"}`}
                    ></i>
                  </span>
                </div>
              </div>
              {/* <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="register-company-switch"
                    checked={registerAsCompany}
                    onChange={toggleRegisterAsCompany}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="register-company-switch"
                  >
                    Register as company
                  </label>
                </div>
              </div> */}
              <div className="mb-3">
                <div className="text-light small fw-medium mb-3">
                  Register as company
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="register-company-switch"
                    className="switch-input"
                    onChange={toggleRegisterAsCompany}
                  />
                  <span className="switch-toggle-slider">
                    <span className="switch-on"></span>
                    <span className="switch-off"></span>
                  </span>
                  <span className="switch-label">Register as company</span>
                </label>
              </div>
              {registerAsCompany && (
                <div className="mb-3" id="register-company-details">
                  <div className="mb-3">
                    <label for="companyname" className="form-label">
                      Company name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="companyname"
                      name="companyname"
                      placeholder="Enter your company name"
                      autofocus
                    />
                  </div>
                  <div className="mb-3">
                    <label for="companyemail" className="form-label">
                      Company email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="companyemail"
                      name="companyemail"
                      placeholder="Enter your company email"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="companyindustry" className="form-label">
                      Company industry
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="companyindustry"
                      name="companyindustry"
                      placeholder="Enter your company industry"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="companyfedid" className="form-label">
                      Company fed id
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="companyfedid"
                      name="companyfedid"
                      placeholder="Enter your company fed id"
                    />
                  </div>
                </div>
              )}
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms-conditions"
                    name="terms"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terms-conditions"
                  >
                    I agree to{" "}
                    <a href="javascript:void(0);">privacy policy & terms</a>
                  </label>
                </div>
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={submitRegister}
              >
                <span
                  id="create-user-button-loader"
                  style={{ display: "none" }}
                >
                  <span
                    className="spinner-border"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Loading...</span>
                </span>
                <span className="ms-2">Sign Up</span>
              </button>
            </div>

            <p className="text-center">
              <span>Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p>

            <div className="divider my-4">
              <div className="divider-text">or</div>
            </div>

            <div className="d-flex justify-content-center">
              {/* <a
                href="javascript:;"
                className="btn btn-icon btn-label-facebook me-3"
              >
                <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
              </a> */}

              <a
                href="javascript:;"
                className="btn btn-icon btn-label-google-plus me-3"
              >
                <i className="tf-icons fa-brands fa-google fs-5"></i>
              </a>

              {/* <a href="javascript:;" className="btn btn-icon btn-label-twitter">
                <i className="tf-icons fa-brands fa-twitter fs-5"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Toast with Animation */}
      <div
        className="bs-toast toast toast-ex animate__animated my-2"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-delay="2000"
      >
        <div className="toast-header">
          <i className="ti ti-bell ti-xs me-2"></i>
          <div className="me-auto fw-medium">Bootstrap</div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
      {/*/ Toast with Animation */}
    </div>
    // </div>
  );
};

export default Register;
