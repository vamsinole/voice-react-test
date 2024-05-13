// import React from 'react'
import React, { useState } from "react";
// import "./Styles.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from '../axiosInterceptor';
import env from "../../../config";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import { useNavigate } from "react-router-dom";
import Logo from "./../../../assets/logo.png";
const ForgetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <>
      <div class="authentication-wrapper authentication-cover authentication-bg">
        <div class="authentication-inner row">
          <div class="d-none d-lg-flex col-lg-7 p-0">
            <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-forgot-password-illustration-light.png"
                alt="auth-login-cover"
                class="img-fluid my-5 auth-illustration"
                data-app-light-img="illustrations/auth-login-illustration-light.png"
                data-app-dark-img="illustrations/auth-login-illustration-dark.png"
              />

              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-login-cover"
                class="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>

          <div class="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
            <div class="w-px-400 mx-auto">
              <div class="app-brand mb-4">
                <a href="#" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo">
                    <img src={Logo} height={32} width={32} alt="" />
                  </span>
                </a>
              </div>

              <h3 class="mb-1">Forgot Password? 🔒</h3>
              <p class="mb-4">
                Enter your email and we&prime;ll send you instructions to reset
                your password
              </p>

              <form class="mb-3">
                <div class="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    // value={email}
                    name="email-username"
                    placeholder="Enter your email or username"
                    required
                    autoFocus
                    //   onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Link to="/otp-verification">
                  <button class="btn btn-primary d-grid w-100 mb-3">
                    Send OTP
                  </button>
                </Link>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="/login"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {/* <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        d="M10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929C12.0976 17.9024 12.0976 17.2692 11.7071 16.8787L7.41421 12.5858L17 12.5858C17.5523 12.5858 18 12.1381 18 11.5858C18 11.0335 17.5523 10.5858 17 10.5858L7.41421 10.5858L11.7071 6.29289C12.0976 5.90237 12.0976 5.2692 11.7071 4.87868C11.3166 4.48815 10.6834 4.48815 10.2929 4.87868L4.29289 10.8787C3.90237 11.2692 3.90237 11.9024 4.29289 12.2929L10.2929 18.2929Z"
                        fill="#7367F0"
                      />
                    </svg> */}
                    <span>Back to login</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
