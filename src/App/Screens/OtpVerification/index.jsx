import React from "react";
import Logo from "./../../../assets/logo.png";
const OtpVerification = () => {
  return (
    <>
      <div class="authentication-wrapper authentication-cover authentication-bg">
        <div class="authentication-inner row">
          {/* <!-- /Left Text --> */}
          <div class="d-none d-lg-flex col-lg-7 p-0">
            <div class="auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center">
              <img
                src="../../assets/img/illustrations/auth-two-step-illustration-light.png"
                alt="auth-two-steps-cover"
                class="img-fluid my-5 auth-illustration"
                data-app-light-img="illustrations/auth-two-step-illustration-light.png"
                data-app-dark-img="illustrations/auth-two-step-illustration-dark.png"
              />

              <img
                src="../../assets/img/illustrations/bg-shape-image-light.png"
                alt="auth-two-steps-cover"
                class="platform-bg"
                data-app-light-img="illustrations/bg-shape-image-light.png"
                data-app-dark-img="illustrations/bg-shape-image-dark.png"
              />
            </div>
          </div>
          {/* <!-- /Left Text --> */}

          {/* <!-- Two Steps Verification --> */}
          <div class="d-flex col-12 col-lg-5 align-items-center p-4 p-sm-5">
            <div class="w-px-400 mx-auto">
              {/* <!-- Logo --> */}
              <div class="app-brand mb-4">
                <a href="index.html" class="app-brand-link gap-2">
                  <span class="app-brand-logo demo">
                    <img src={Logo} height={32} width={32} alt="" />
                  </span>
                </a>
              </div>
              {/* <!-- /Logo --> */}

              <h4 class="mb-1">OTP Verification 💬</h4>
              <p class="text-start mb-4">
                We sent a verification code to your email. Enter the code from
                the email in the field below.
                {/* <span class="fw-medium d-block mt-2">******1234</span> */}
              </p>
              <p class="mb-0 fw-medium">Type your 6 digit security code</p>
              <form id="twoStepsForm" action="index.html" method="GET">
                <div class="mb-3">
                  <div class="auth-input-wrapper d-flex align-items-center justify-content-sm-between numeral-mask-wrapper">
                    <input
                      type="tel"
                      class="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                      autofocus
                    />
                    <input
                      type="tel"
                      class="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      class="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      class="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      class="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                    <input
                      type="tel"
                      class="form-control auth-input h-px-50 text-center numeral-mask mx-1 my-2"
                      maxlength="1"
                    />
                  </div>
                  {/* <!-- Create a hidden field which is combined by 3 fields above --> */}
                  <input type="hidden" name="otp" />
                </div>
                <button class="btn btn-primary d-grid w-100 mb-3">
                  Verify my account
                </button>
                <div class="text-center">
                  Didn't get the code?
                  <a href="javascript:void(0);"> Resend </a>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- /Two Steps Verification --> */}
        </div>
      </div>
    </>
  );
};

export default OtpVerification;
