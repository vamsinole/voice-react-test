// import React from 'react'
import React, { useState } from "react";
// import "./Styles.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from '../axiosInterceptor';
import env from "../../../config";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import { useNavigate } from "react-router-dom";

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
                    <svg
                      width="32"
                      height="22"
                      viewBox="0 0 32 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                        fill="#7367F0"
                      />
                      <path
                        opacity="0.06"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                        fill="#161616"
                      />
                      <path
                        opacity="0.06"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                        fill="#161616"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                        fill="#7367F0"
                      />
                    </svg>
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
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      marginBottom: "32px",
                      padding: "12px",
                      borderRadius: "6px",
                      backgroundColor: "#7367F0",
                      color: "#FFFFFF",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
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
                      color: "#7367F0",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    <svg
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
                    </svg>
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
