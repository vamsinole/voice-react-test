// import React from 'react'
import React, { useState } from "react";
import "./Styles.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// import axios from '../axiosInterceptor';
import env from "../../../config";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import { useNavigate } from "react-router-dom";

const AuthLogin = () => {
  localStorage.removeItem("token");

  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.login;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can implement your sign-in logic, like sending the data to a server or authenticating locally
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(baseurl + endpoint, {
        email: email,
        password: password,
      });

      const token = response.data.data.token;
      localStorage.setItem("token", token);

      navigate("/assistant");
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="authentication-wrapper authentication-cover authentication-bg">
        <div className="authentication-inner row">
          <div className="d-none d-lg-flex col-lg-7 p-0">
            <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-login-illustration-light.png"
                alt="auth-login-cover"
                className="img-fluid my-5 auth-illustration"
                data-app-light-img="illustrations/auth-login-illustration-light.png"
                data-app-dark-img="illustrations/auth-login-illustration-dark.png"
              />

              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-login-cover"
                className="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>

          <div className="d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4">
            <div className="w-px-400 mx-auto">
              <div className="app-brand mb-4">
                <a href="#" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <svg
                      width="32"
                      height="22"
                      viewBox="0 0 32 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                        fill="#7367F0"
                      />
                      <path
                        opacity="0.06"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                        fill="#161616"
                      />
                      <path
                        opacity="0.06"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                        fill="#161616"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                        fill="#7367F0"
                      />
                    </svg>
                  </span>
                </a>
              </div>

              <h3 className="mb-1">Welcome to Contact Swing 👋</h3>
              <p className="mb-4">
                Please sign-in to your account and start the adventure
              </p>

              <form className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email or Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    name="email-username"
                    placeholder="Enter your email or username"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autofocus
                  />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" for="password">
                      Password
                    </label>
                    <a href="#">
                      <small>Forgot Password?</small>
                    </a>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder=""
                      aria-describedby="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />

                    <span
                      className="input-group-text cursor-pointer"
                      id="password"
                      onClick={handleTogglePassword}
                    >
                      <i
                        className={showPassword ? "ti ti-eye" : "ti ti-eye-off"}
                      ></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="remember-me"
                    />
                    <label className="form-check-label" for="remember-me">
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-grid w-100">
                  Sign in
                </button>
              </form>

              <p className="text-center">
                <span>New on our platform?</span>
                {/* connected the login page with registration page */}
                <a href="/register">
                  <span>Create an account</span>
                </a>
              </p>

              <div className="divider my-4">
                <div className="divider-text">or</div>
              </div>

              <div className="d-flex justify-content-center">
                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-facebook me-3"
                >
                  <i className="tf-icons fa-brands fa-facebook-f fs-5"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-google-plus me-3"
                >
                  <i className="tf-icons fa-brands fa-google fs-5"></i>
                </a>

                <a
                  href="javascript:;"
                  className="btn btn-icon btn-label-twitter"
                >
                  <i className="tf-icons fa-brands fa-twitter fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
