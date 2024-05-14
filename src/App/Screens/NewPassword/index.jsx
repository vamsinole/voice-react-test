import React from "react";
import Logo from "./../../../assets/logo.png";
const NewPassword = () => {
  return (
    <>
      {" "}
      <div className="authentication-wrapper authentication-cover authentication-bg">
        <div className="authentication-inner row">
          {/* <!-- /Left Text --> */}
          <div className="d-none d-lg-flex col-lg-7 p-0">
            <div className="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-reset-password-illustration-light.png"
                alt="auth-reset-password-cover"
                className="img-fluid my-5 auth-illustration"
                data-app-light-img="illustrations/auth-reset-password-illustration-light.png"
                data-app-dark-img="illustrations/auth-reset-password-illustration-dark.png"
              />

              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-reset-password-cover"
                className="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>
          {/* <!-- /Left Text --> */}

          {/* <!-- Reset Password --> */}
          <div className="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
            <div className="w-px-400 mx-auto">
              {/* <!-- Logo --> */}
              <div className="app-brand mb-4">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <img src={Logo} height={32} width={32} alt="" />
                  </span>
                </a>
              </div>
              {/* <!-- /Logo --> */}
              <h4 className="mb-1">Reset Password 🔒</h4>
              <p className="mb-4">
                for <span className="fw-medium">john.doe@email.com</span>
              </p>
              <form
                id="formAuthentication"
                className="mb-3"
                action="auth-login-cover.html"
                method="GET"
              >
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" htmlFor="password">
                    New Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="ti ti-eye-off"></i>
                    </span>
                  </div>
                </div>
                <div className="mb-3 form-password-toggle">
                  <label className="form-label" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="confirm-password"
                      className="form-control"
                      name="confirm-password"
                      placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                      aria-describedby="password"
                    />
                    <span className="input-group-text cursor-pointer">
                      <i className="ti ti-eye-off"></i>
                    </span>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100 mb-3">
                  Set new password
                </button>
                <div className="text-center">
                  <a href="auth-login-cover.html">
                    <i className="ti ti-chevron-left scaleX-n1-rtl"></i>
                    Back to login
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- /Reset Password --> */}
        </div>
      </div>
    </>
  );
};

export default NewPassword;
