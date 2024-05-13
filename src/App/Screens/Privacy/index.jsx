/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
import React, { useEffect } from "react";
import "./privacy.scss";
import Logo from "./../../../assets/logo.png";
const Privacy = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-12">
            <nav className="layout-navbar shadow-none py-0">
              <div className="container">
                <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-4">
                  <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4">
                    <button
                      className="navbar-toggler border-0 px-0 me-2"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="ti ti-menu-2 ti-sm align-middle"></i>
                    </button>
                    <a href="/landing" className="app-brand-link">
                      <span className="app-brand-logo demo">
                        <img src={Logo} height={32} width={32} alt="" />
                      </span>
                      <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1">
                        ContactSwing
                      </span>
                    </a>
                  </div>

                  <div
                    className="collapse navbar-collapse landing-nav-menu"
                    id="navbarSupportedContent"
                  >
                    <button
                      className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="ti ti-x ti-sm"></i>
                    </button>
                    <ul className="navbar-nav me-auto">
                      <li className="nav-item">
                        <a
                          className="nav-link fw-medium"
                          aria-current="page"
                          href="/landing"
                        >
                          Home
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link fw-medium"
                          href="/landing#landingFeatures"
                        >
                          Features
                        </a>
                      </li>
                      {/* <li className="nav-item">
                        <a
                          className="nav-link fw-medium"
                          aria-current="page"
                          href="/landing#landingPricing"
                        >
                          Pricing
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a
                          className="nav-link fw-medium"
                          href="/landing#landingContact"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="landing-menu-overlay d-lg-none"></div>

                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                      <a
                        className="nav-link dropdown-toggle hide-arrow"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                      >
                        <i className="ti ti-sm"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="light"
                          >
                            <span className="align-middle">
                              <i className="ti ti-sun me-2"></i>Light
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="dark"
                          >
                            <span className="align-middle">
                              <i className="ti ti-moon me-2"></i>Dark
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-theme="system"
                          >
                            <span className="align-middle">
                              <i className="ti ti-device-desktop me-2"></i>
                              System
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        href="/login"
                        className="btn btn-primary mx-1"
                        target="_blank"
                      >
                        <span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                        <span className="d-none d-md-block">Login</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/register"
                        className="btn btn-primary mx-1"
                        target="_blank"
                      >
                        <span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                        <span className="d-none d-md-block">Register</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-4">
            <div className="container inner-container">
              <header>
                <h1>Privacy Policy</h1>
              </header>
              <section>
                <p>
                  ContactSwing operates the website{" "}
                  <a href="https://contactswing.com">
                    https://contactswing.com
                  </a>{" "}
                  (the "Service").
                </p>
                <p>
                  This page informs you of our policies regarding the
                  collection, use, and disclosure of personal data when you use
                  our Service and the choices you have associated with that
                  data. We use your data to provide and improve the Service
                  strictly in accordance with the provisions of the USA data
                  privacy laws and the General Data Protection Regulation (GDPR)
                  of the EU. By using the Service, you consent to the collection
                  and use of information in line with this policy.
                </p>
                <h4>Information Collection And Use</h4>
                <p>
                  We gather several types of information for various purposes to
                  offer and enhance our Service to you.
                </p>
              </section>
              <section>
                <h2>**Types of Data Collected</h2>
                <h4>**Personal Data</h4>
                <p>
                  While utilizing our Service, we may ask you to supply us with
                  certain personally identifiable information that can be used
                  to contact or identify you ("Personal Data"). Personally
                  identifiable information may include, but is not limited to:
                </p>
                <h4>**Email address</h4>
                <ul>
                  <li>First name and last name</li>
                  <li>Cookies and Usage Data</li>
                </ul>
                <h4>**Usage Data</h4>
                <p>
                  We may also collect information on how the Service is accessed
                  and used ("Usage Data"). This Usage Data may comprise details
                  such as your computer's Internet Protocol address (e.g., IP
                  address), browser type, browser version, our Service's pages
                  that you visit, the time and date of your visit, the time
                  spent on those pages, unique device identifiers, and other
                  diagnostic data.
                </p>
                <h4>**Tracking & Cookies Data</h4>
                <p>
                  We use cookies and similar tracking technologies to monitor
                  the activity on our Service and hold certain information.
                </p>
                <p>
                  Cookies are files with a small amount of data which may
                  include an anonymous unique identifier. Cookies are sent to
                  your browser from a website and stored on your device.
                  Tracking technologies also used are beacons, tags, and scripts
                  to collect and track information and to improve and analyze
                  our Service.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to
                  indicate when a cookie is being sent. However, if you do not
                  accept cookies, you might not be able to use some portions of
                  our Service.
                </p>
                <h4>Examples of Cookies we use:</h4>
                <ul>
                  <li>
                    Session Cookies. We use Session Cookies to operate our
                    Service.
                  </li>
                  <li>
                    Preference Cookies. We use Preference Cookies to remember
                    your preferences and various settings.
                  </li>
                  <li>
                    Security Cookies. We use Security Cookies for security
                    purposes.
                  </li>
                </ul>
                <h2>Use of Data</h2>
                <p>
                  ContactSwing uses the collected data for various purposes:
                </p>
                <ul>
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To provide customer care and support</li>
                  <li>
                    To provide analysis or valuable information so that we can
                    improve the Service
                  </li>
                  <li>To monitor the usage of the Service</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
                <h2>Transfer Of Data</h2>
                <p>
                  Your information, including Personal Data, may be transferred
                  to — and maintained on — computers located outside of your
                  state, province, country, or other governmental jurisdiction
                  where the data protection laws may differ from those of your
                  jurisdiction.Your information, including Personal Data, may be
                  transferred to — and maintained on — computers located outside
                  of your state, province, country, or other governmental
                  jurisdiction where the data protection laws may differ from
                  those of your jurisdiction.
                </p>
                <p>
                  If you are located outside the USA and choose to provide
                  information to us, please note that we transfer the data,
                  including Personal Data, to the USA and process it there.
                </p>
                <p>
                  Your consent to this Privacy Policy followed by your
                  submission of such information represents your agreement to
                  that transfer.
                </p>
                <p>
                  ContactSwing will take all steps reasonably necessary to
                  ensure that your data is treated securely and in accordance
                  with this Privacy Policy and no transfer of your Personal Data
                  will take place to an organization or a country unless there
                  are adequate controls in place including the security of your
                  data and other personal information.
                </p>
                <h2>**Disclosure Of Data**</h2>
                <strong>Legal Requirements</strong>
                <p>
                  ContactSwing may disclose your Personal Data in the good faith
                  belief that such action is necessary to:
                </p>
                <ul>
                  <li>Comply with a legal obligation</li>
                  <li>
                    Protect and defend the rights or property of ContactSwing
                  </li>
                  <li>
                    Prevent or investigate possible wrongdoing in connection
                    with the Service
                  </li>
                  <li>
                    Protect the personal safety of users of the Service or the
                    public
                  </li>
                  <li>Protect against legal liability</li>
                </ul>
                <h2>Security Of Data</h2>
                <p>
                  The security of your data is crucial to us, but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we aim to use
                  commercially acceptable means to protect your Personal Data,
                  we cannot guarantee its absolute security.
                </p>
                <h2>Service Providers</h2>
                <p>
                  We may employ third-party companies and individuals to
                  facilitate our Service ("Service Providers"), to provide the
                  Service on our behalf, to perform Service-related services, or
                  to assist us in analyzing how our Service is used.
                </p>
                <p>
                  These third parties have access to your Personal Data only to
                  perform these tasks on our behalf and are obligated not to
                  disclose or use it for any other purpose.
                </p>
                <h2>Analytics</h2>
                <p>
                  We use Google Analytics to monitor and analyze the use of our
                  Service. Google Analytics is a web analytics service offered
                  by Google that tracks and reports website traffic. Google uses
                  the data collected to track and monitor the use of our
                  Service. This data is shared with other Google services.
                  Google may use the collected data to contextualize and
                  personalize the ads of its own advertising network. Opting out
                  of making your activity on the Service available to Google
                  Analytics may be done by installing the Google Analytics
                  opt-out browser add-on.
                </p>
                <h2>Links To Other Sites</h2>
                <p>
                  Our Service may contain links to other sites not operated by
                  us. If you click on a third-party link, you will be directed
                  to that third-party's site. We strongly advise you to review
                  the Privacy Policy of every site you visit.
                </p>
                <p>
                  We have no control over and assume no responsibility for the
                  content, privacy policies, or practices of any third-party
                  sites or services.
                </p>
                <h2>Changes To This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "effective date."
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes to this Privacy Policy are effective when
                  they are posted on this page.
                </p>
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us by email:{" "}
                  <a href="mailto:info@contactswing.com">
                    info@contactswing.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
        {/* --footer-- */}
        <div className="footer-top-0 row mt-4">
          <div className="footer-top-1 col-12 mt-4">
            <footer className="landing-footer bg-body footer-text">
              <div className="footer-top position-relative overflow-hidden z-1">
                <img
                  src="../../assets/img/front-pages/backgrounds/footer-bg-light.png"
                  alt="footer bg"
                  className="footer-bg banner-bg-img z-n1"
                  data-app-light-img="front-pages/backgrounds/footer-bg-light.png"
                  data-app-dark-img="front-pages/backgrounds/footer-bg-dark.png"
                />
                <div className="container">
                  <div className="row gx-0 gy-4 g-md-5">
                    <div className="col-lg-5">
                      <a href="/landing" className="app-brand-link mb-4">
                        <span className="app-brand-logo demo">
                          <img src={Logo} height={32} width={32} alt="" />
                        </span>
                        <span className="app-brand-text demo footer-link fw-bold ms-2 ps-1">
                          ContactSwing
                        </span>
                      </a>
                      <p
                        className="footer-class"
                        style={{
                          color: "white",
                          marginLeft: "49px",
                          marginTop: "-20px",
                        }}
                      >
                        Engage Better, Grow Faster
                      </p>
                      {/* <form className="footer-form">
                        <label htmlFor="footer-email" className="small">
                          Subscribe to newsletter
                        </label>
                        <div className="d-flex mt-1">
                          <input
                            type="email"
                            className="form-control rounded-0 rounded-start-bottom rounded-start-top"
                            id="footer-email"
                            placeholder="Your email"
                          />
                          <button
                            type="submit"
                            className="btn btn-primary shadow-none rounded-0 rounded-end-bottom rounded-end-top"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form> */}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <a href="/terms" className="footer-link">
                            Terms & Conditions
                          </a>
                        </li>
                        <li className="mb-3">
                          <a href="/privacy" className="footer-link">
                            Privacy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-around align-items-center">
                  {/* <div className="text-center"></div> */}
                  <div className="text-center" style={{ marginLeft: "30%" }}>
                    <span className="footer-text">
                      Copyright
                      <script>document.write(new Date().getFullYear());</script>
                    </span>{" "}
                    <a href="/landing" target="_blank">
                      Contact Swing 2024
                    </a>
                  </div>
                  <div className="social-logos row justify-content-center">
                    <div className="col-1">
                      <a
                        href="https://www.linkedin.com/company/contactswing"
                        className="footer-link "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="footer-social-logo"
                          src="../../assets/img/front-pages/icons/linkedin.png"
                          alt="linkedin icon"
                        />
                      </a>
                    </div>
                    <div className="col-1">
                      <a
                        href="https://www.facebook.com/ContactSwinginc"
                        className="footer-link "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="footer-social-logo"
                          src="../../assets/img/front-pages/icons/facebook.png"
                          alt="facebook icon"
                        />
                      </a>
                    </div>
                    {/* <div className="col-1">
                      <a
                        href="https://twitter.com/pixinvents"
                        className="footer-link me-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="../../assets/img/front-pages/icons/twitter-light.png"
                          alt="twitter icon"
                        />
                      </a>
                    </div> */}
                    <div className="col-1 footer-social-logo">
                      <a
                        href="https://www.instagram.com/ContactSwing/"
                        className="footer-link "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="footer-social-logo"
                          src="../../assets/img/front-pages/icons/instagram2.png"
                          alt="instagram icon"
                        />
                      </a>
                    </div>
                    <div className="col-1">
                      <a
                        href="https://www.youtube.com/@ContactSwing"
                        className="footer-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="footer-social-logo"
                          src="../../assets/img/front-pages/icons/youtube.png"
                          alt="youtube icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="footer-bottom py-3">
                <div className="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
                  <div className="mb-2 mb-md-0">
                    <span className="footer-text">
                      ©
                      <script>document.write(new Date().getFullYear());</script>
                    </span>
                    <a
                      href="/"
                      target="_blank"
                      className="fw-medium footer-link"
                      rel="noreferrer"
                    >
                      ContactSwing
                    </a>
                    <span className="footer-text"> </span>
                  </div>
                  <div>
                    <a
                      href="https://github.com/pixinvent"
                      className="footer-link me-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/github-light.png"
                        alt="github icon"
                        data-app-light-img="front-pages/icons/github-light.png"
                        data-app-dark-img="front-pages/icons/github-dark.png"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/pixinvents/"
                      className="footer-link me-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/facebook-light.png"
                        alt="facebook icon"
                        data-app-light-img="front-pages/icons/facebook-light.png"
                        data-app-dark-img="front-pages/icons/facebook-dark.png"
                      />
                    </a>
                    <a
                      href="https://twitter.com/pixinvents"
                      className="footer-link me-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/twitter-light.png"
                        alt="twitter icon"
                        data-app-light-img="front-pages/icons/twitter-light.png"
                        data-app-dark-img="front-pages/icons/twitter-dark.png"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/pixinvents/"
                      className="footer-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="../../assets/img/front-pages/icons/instagram-light.png"
                        alt="google icon"
                        data-app-light-img="front-pages/icons/instagram-light.png"
                        data-app-dark-img="front-pages/icons/instagram-dark.png"
                      />
                    </a>
                  </div>
                </div>
              </div> */}
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Privacy;
