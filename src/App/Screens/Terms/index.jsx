/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from 'react'
import React, { useEffect } from "react";
import "./terms.scss";
import Logo from "./../../../assets/logo.png";

const Terms = () => {
  const token = localStorage.getItem("token");
  console.log("landing page token", token);
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
            <div className="container mt-4">
              <header>
                <h1>
                  Welcome and thank you for your interest in ContactSwing.
                </h1>
              </header>
              <section>
                <p>
                  These Terms of Service ("Terms") govern the use of the Service
                  (defined in Section 1.1) provided by ContactSwing. These Terms
                  are a legally binding contract between ContactSwing
                  ('ContactSwing") and [________________________________]
                  ("Customer") regarding your use of the Service.
                </p>
                <p>
                  By accessing or using the service the Customer agrees that it
                  has read, understood, and as a condition to Customer’s use of
                  the service the Customer agrees to be bound by these terms. If
                  you are not eligible or do not agree to the Terms then you do
                  not have our permission to use the Service.
                </p>
                <p>
                  Customer’s use of the service and ContactSwing’s provision of
                  the service to Customer constitutes an agreement by
                  ContactSwing and Customer to be bound by these terms.
                </p>
                <strong>Arbitration NOTICE.</strong>
                <p>
                  Except for certain kinds of disputes described in Section 14,
                  the Customer agrees that disputes arising under these Terms
                  will be resolved by binding individual arbitration and by
                  accepting these terms, the Customer and ContactSwing are each
                  waiving the right to a trial by jury or to participate in any
                  class action or representative proceeding. The Customer agrees
                  to give up its right to go to court to assert or defend your
                  rights under this contract (except for matters that may be
                  taken to small claims court). The Customer’s rights will be
                  determined by a NEUTRAL ARBITRATOR and NOT a judge or jury
                  (See Section 14).
                </p>
              </section>
              <section>
                <h2>Overview</h2>
                <p>
                  <strong>1.1.</strong> As used throughout these Terms,
                  "Service" means all portions of the product offered by
                  ContactSwing (including all related subdomains) and all
                  results or output derived from the operation or use of the
                  product (including Email/Chat/Voice/Calls bots) except as set
                  forth in Section 4.4).
                </p>
                <p>
                  <strong>1.2.</strong> The Service provides the Customer with
                  general information about our products and services and
                  includes a platform that is accessible through unique access
                  credentials designed to enable users to access and utilize our
                  product.
                </p>
                <p>
                  <strong>1.3.</strong> The Customer’s use of the
                  Service/Product is subject to all additional terms applicable
                  to specific portions or features of the Service/Product that
                  we may post on the Service/Product, link to on the
                  Service/Product, or otherwise make available to you
                  (collectively the "Additional Terms"), provided that the
                  "Additional Terms" exclude the ContactSwing’s Privacy Policy
                  referenced in Section 15.3. Unless the Additional Terms
                  expressly state otherwise: (a) all Additional Terms are
                  incorporated by this reference into these Terms as if the
                  Additional Terms were set forth in this document; and (b) if
                  there is any conflict or inconsistency between these Terms and
                  any Additional Terms, then these Terms will control to the
                  extent of such conflict or inconsistency.
                </p>
              </section>
              <section>
                <h2>Eligibility</h2>
                <p>
                  The Customer’s users must be at least 18 years old to use the
                  Service/Product. By agreeing to these Terms, you represent and
                  warrant to us that: (a) The Customer’s users are at least 18
                  years of age or have been authorized to use the Service by
                  their parent or legal guardian who is at least 18 years of age
                  and who will supervise your use of the Service; (b) you have
                  not previously been suspended or removed from the Service; and
                  (c) your registration and your use of the Service is in
                  compliance with any and all applicable laws and regulations.
                  If you are an entity, organization, or company, the individual
                  accepting these Terms on your behalf represents and warrants
                  that they have the authority to bind you to these Terms and
                  you agree to be bound by these Terms.
                </p>
              </section>
              <section>
                <h2>Accounts and Registration.</h2>
                <p>
                  {" "}
                  To access certain features of the Product, users must register
                  for an account. When a user registers for an account, they may
                  be required to provide us with some information about
                  themselves. The Customer agrees that the information its users
                  will provide to ContactSwing will be accurate and that the
                  Customer will keep it accurate and up-to-date at all times.
                  The Customer is solely responsible for maintaining the
                  confidentiality of its account and any access credentials that
                  it needs to access the account, and it accepts responsibility
                  for all activities that occur under your account. If you
                  believe that your account is no longer secure, then you must
                  immediately notify us at support@contactswing.com.
                </p>
              </section>
              <section>
                <h2>Licenses</h2>
                <p>
                  {" "}
                  4.1. Limited License. Subject to the Customer’s complete and
                  ongoing compliance with these Terms, ContactSwing grants you,
                  solely for your personal use, a limited, revocable,
                  non-exclusive, non-transferable, non-sublicensable, and
                  worldwide license to access and use the Service solely through
                  the permitted functionalities on the Service and for your
                  non-commercial, informational purposes only.
                </p>
                <p>
                  {" "}
                  4.2. License Restrictions. Except and solely to the extent
                  such a restriction is impermissible under applicable law, you
                  may not: (a) reproduce, distribute, publicly display, or
                  publicly perform the Service; (b) make modifications to the
                  Service; (c) commercially exploit the Service in any manner;
                  or (d) interfere with or circumvent any feature of the
                  Service, including any security or access control mechanism.
                  If you are prohibited under applicable law from using the
                  Service, you may not use it.
                </p>
                <p>
                  {" "}
                  4.3. Feedback. If you choose to provide input or suggestions
                  regarding problems with or proposed modifications or
                  improvements to any aspect of the Service ("Feedback"), then
                  you hereby grant ContactSwing an unrestricted, perpetual,
                  irrevocable, non-exclusive, fully-paid, royalty-free right to
                  exploit the Feedback in any manner and for any purpose,
                  without any limitations, credit, or fees due to you
                  whatsoever.
                </p>
                <p>
                  {" "}
                  4.4. AI Platform. Notwithstanding anything in these Terms to
                  the contrary and for the avoidance of doubt, this Section 4
                  does not apply to the AI Platform and any results or output
                  derived or generated from use or operation of that platform
                  (including any AI models). Any rights that we may grant you to
                  the same will be set forth in the applicable Additional Terms.
                </p>
                <p>
                  {" "}
                  4.5. White Label License. Under the Agency Plan, ContactSwing
                  grants you a white label license, subject to your complete and
                  ongoing compliance with these Terms, including without
                  limitation, all payment obligations. This license allows you,
                  solely in connection with your direct business activities, to
                  sublicense and commercially exploit the Service under your own
                  brand. This white label license is revocable, non-exclusive,
                  transferable solely to your sublicensees within the scope of
                  this license, and worldwide. It permits you to (a) use,
                  reproduce, distribute, publicly display, and perform the
                  Service under your own branding; (b) modify the Service to the
                  extent necessary to rebrand it, provided that such
                  modifications do not materially diminish the quality or
                  functionality of the Service; and (c) grant sublicenses to
                  your own customers for the commercial use of the Service,
                  under the terms that are consistent with, and not less
                  restrictive than, those set forth in these Terms. All
                  sublicensing arrangements must expressly acknowledge
                  ContactSwing 's underlying ownership of the Service, and you
                  agree to require your sublicensees to comply with all
                  applicable terms and conditions of these Terms, including but
                  not limited to the restrictions set forth in Section 4.2.
                </p>
              </section>
              <section>
                <h2>Ownership</h2>
                <p>
                  {" "}
                  Proprietary Rights. The Service is owned and operated by
                  ContactSwing. The visual interfaces, graphics, design,
                  compilation, information, data, computer code (including
                  source code or object code), products, software, services, and
                  all other elements of the Service ("Materials") are protected
                  by intellectual property and other laws. As between you and
                  ContactSwing, the Materials are the sole property of
                  ContactSwing. Except as expressly authorized by ContactSwing,
                  you may not make use of the Materials. ContactSwing reserves
                  all rights to the Materials not granted expressly in these
                  Terms.
                </p>
              </section>
              <section>
                <h2>Third Party Terms</h2>
                <p>
                  The Service may contain links to other websites or online
                  properties that are not owned or controlled by ContactSwing
                  (collectively, "External Sites"). The content of External
                  Sites is not developed or provided by ContactSwing.
                  ContactSwing is not responsible for the content of any
                  External Sites and does not make any representations regarding
                  the content or accuracy of materials on External Sites. You
                  should contact the site administrator or Webmaster for
                  External Sites if you have any concerns regarding content
                  located on those External Sites. If you decide to access any
                  External Sites, you do so at your own risk. Further, you will
                  be solely responsible for compliance with any terms of service
                  or similar terms imposed by any External Site in connection
                  with your use of External Sites.
                </p>
              </section>
              <section>
                <h2>Prohibited Conduct</h2>
                <p>
                  WITHOUT LIMITING ANY OTHER TERMS OF THESE TERMS, WHEN USING
                  THE SERVICE, YOU AGREE NOT TO :{" "}
                </p>
                <p>
                  a. Violate any local, state, national, or international law,
                  or any third-party rights;
                </p>
                <p>
                  b. Interfere with security-related features of the Service,
                  including by: (i) disabling or circumventing features that
                  prevent or limit use or copying of any content or materials;
                  or (ii) reverse engineering or otherwise attempting to
                  discover the source code of any portion of the Service except
                  to the extent that the activity is expressly permitted by
                  applicable law;
                </p>
                <p>
                  c. Interfere with the operation of the Service or any user's
                  enjoyment of the Service, including by: (i) uploading or
                  otherwise disseminating any virus, adware, spyware, worm, or
                  other malicious code; or (ii) interfering with or disrupting
                  any network, equipment, or server connected to or used to
                  provide the Service;
                </p>
                <p>
                  d. Perform any fraudulent activity including impersonating any
                  person or entity, claiming a false affiliation, accessing any
                  other Service account without permission; or
                </p>
                <p>
                  e. Attempt to do any of the acts described in this Section 7
                  or assist or permit any party in engaging in any of the acts
                  described in this Section 7. You agree to confirm thatyou have
                  obtained explicit written permission from all contacts you
                  import for outreach via artificial and pre-recorded voice
                  calls. You also agree to comply with all relevant regulations
                  and guidelines under the TCPA, TSR, and other applicable laws
                  in your communications with these contacts.
                </p>
              </section>
              <section>
                <p>
                  Notice and Procedure for Making Claims of Intellectual
                  Property Infringement. ContactSwing respects the intellectual
                  property of others and takes the protection of intellectual
                  property very seriously. If you believe that any materials
                  made available on the Service have been used or exploited in a
                  manner that infringes an intellectual property right you own
                  or control, then please promptly send an email to
                  info@contactswing.com. Any notice alleging that materials on
                  the Service infringe intellectual property rights must include
                  the following information:
                </p>
                <p>
                  8.1. An electronic or physical signature of the person
                  authorized to act on behalf of the owner of the right being
                  infringed;
                </p>
                <p>
                  8.2. A description of the intellectual property that you claim
                  has been infringed;
                </p>
                <p>
                  8.3. A description of the material that you claim is
                  infringing and where it is located on the Service;
                </p>
                <p>8.4. Your address, telephone number, and email address;</p>
                <p>
                  8.5. A statement by you that you have a good faith belief that
                  the use of the materials on the Service of which you are
                  complaining is not authorized by the owner of the right being
                  infringed, its agent, or the law; and
                </p>
                <p>
                  8.6. A statement by you that the above information in your
                  notice is accurate and that, under penalty of perjury, you are
                  the intellectual property owner or authorized to act on the
                  intellectual property owner's behalf.
                </p>
              </section>
              <section>
                <h2>Modification of these Terms.</h2>
                <p>
                  {" "}
                  We reserve the right to change these Terms on a going-forward
                  basis at any time. Please check these Terms periodically for
                  changes. If a change to these Terms materially modifies your
                  rights or obligations, we may require that you accept the
                  modified Terms in order to continue to use the Service.
                  Material modifications are effective upon your acceptance of
                  the modified Terms. Immaterial modifications are effective
                  upon publication. Except as permitted in this Section 9, these
                  Terms may be amended only by a written agreement signed by
                  authorized representatives of the parties to these Terms.
                  Disputes arising under these Terms will be resolved in
                  accordance with the version of these Terms that was in effect
                  at the time the dispute arose.
                </p>
              </section>
              <section>
                <h2>Term, Termination, and Modification of the Service.</h2>
                <p>
                  10.1. Term. These Terms are effective beginning when you
                  accept the Terms or first access or use the Service, whichever
                  occurs first, and end when terminated as described in Section
                  10.2.
                </p>
                <p>
                  10.2. Termination. If you violate any provision of these
                  Terms, your authorization to access the Service and these
                  Terms automatically terminates. In addition, ContactSwing may,
                  at its sole discretion, terminate these Terms or your account
                  on the Service, or suspend or terminate your access to the
                  Service, at any time for any reason or no reason, with or
                  without notice. You may terminate your account and these Terms
                  at any time by contacting customer service at
                  info@contactswing.com or following any other procedures
                  pursuant to the functionalities and/or information available
                  on the Service.
                </p>
                <p>
                  10.3. Effect of Termination. Upon termination of these Terms:
                  (a) your license rights will terminate and you must
                  immediately cease all use of the Service; (b) you will no
                  longer be authorized to access your account or the Service;
                  and (c) all terms and provisions in these Terms (including the
                  provisions and terms above that appear before Section 1)
                  except for Section 4.1 will survive.
                </p>
                <p>
                  10.4. Modification of the Service. ContactSwing reserves the
                  right to modify or discontinue the Service at any time,
                  temporarily or permanently, without notice to you.
                  ContactSwing will have no liability for any change to the
                  Service or any suspension or termination of your access to or
                  use of the Service.
                </p>
              </section>
              <section>
                <h2>Indemnity</h2>
                <p>
                  To the fullest extent permitted by law, you are responsible
                  for your use of the Service, and you will defend and indemnify
                  ContactSwing and its officers, directors, employees,
                  consultants, affiliates, subsidiaries, and agents from and
                  against every claim brought or threatened by a third party,
                  and any related liability, damage, loss, and expense,
                  including reasonable attorneys' fees and costs, arising out of
                  or connected with: (a) your unauthorized use of, or misuse of,
                  the Service; (b) your violation of any portion of these Terms,
                  any representation, warranty, or agreement referenced in these
                  Terms, or any applicable law or regulation; (c) your violation
                  of any third-party right, including any intellectual property
                  right or publicity, confidentiality, other property, or
                  privacy right; or (d) any dispute or issue between you and any
                  third party. We reserve the right, at our own expense, to
                  assume the exclusive defense and control of any matter
                  otherwise subject to indemnification by you (without limiting
                  your indemnification obligations with respect to that matter),
                  and in that case, you agree to cooperate with our defense of
                  those claims.
                </p>
              </section>
              <section>
                <h2>Disclaimers</h2>
                <p>
                  No Warranties. WITHOUT LIMITING ANY OTHER TERMS IN THIS
                  DOCUMENT AND TO THE FULLEST EXTENT PERMITTED BY LAW: THE
                  SERVICE IS PROVIDED "AS IS" AND ON AN "AS AVAILABLE" BASIS.
                  ContactSwing AND ITS CURRENT AND FUTURE AFFILIATES
                  (COLLECTIVELY, THE "ContactSwing entities") DISCLAIM ALL
                  WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, RELATING
                  TO THE SERVICE, INCLUDING: (A) ANY IMPLIED WARRANTY OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
                  QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTY
                  ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. THE
                  ContactSwing ENTITIES DO NOT WARRANT THAT THE SERVICE WILL BE
                  UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER
                  HARMFUL COMPONENTS, AND THE ContactSwing ENTITIES DO NOT
                  WARRANT THAT ANY OF THOSE ISSUES WILL BE CORRECTED. THE
                  ContactSwing ENTITIES ARE NOT RESPONSIBLE FOR ANY DAMAGE OF
                  ANY KIND THAT MAY RESULT FROM THE SERVICE OR YOUR DEALING WITH
                  ANY OTHER SERVICE USER.
                </p>
              </section>
              <section>
                <h2>Limitation of Liability.</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE
                  ContactSwing entities BE LIABLE TO YOU FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES
                  (INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER
                  INTANGIBLE LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO
                  OR USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICE,
                  WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
                  NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER
                  OR NOT ANY ContactSwing entity HAS BEEN INFORMED OF THE
                  POSSIBILITY OF DAMAGE. TO THE FULLEST EXTENT PERMITTED BY LAW,
                  THE AGGREGATE LIABILITY OF THE ContactSwing entities TO YOU
                  FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY
                  INABILITY TO USE THE SERVICE, WHETHER IN CONTRACT, TORT, OR
                  OTHERWISE, IS LIMITED TO $100.
                </p>
              </section>
              <section>
                <h2>Miscellaneous.</h2>
                <p>
                  14.1. General Terms. These Terms, together with the Additional
                  Terms, are the entire and exclusive understanding and
                  agreement between you and ContactSwing regarding your use of
                  the Service. You may not assign or transfer these Terms or
                  your rights under these Terms, in whole or in part, by
                  operation of law or otherwise, without our prior written
                  consent. We may assign these Terms at any time without notice
                  or consent. The failure to require performance of any
                  provision will not affect our right to require performance at
                  any other time after that, nor will a waiver by us of any
                  breach or default of these Terms, or any provision of these
                  Terms, be a waiver of any subsequent breach or default or a
                  waiver of the provision itself. Use of section headers in
                  these Terms is for convenience only and will not have any
                  impact on the interpretation of any provision. Throughout
                  these Terms the use of the word "including" means "including
                  but not limited to," and references to "Section" means
                  Sections in these Terms. If any part of these Terms is held to
                  be invalid or unenforceable, the unenforceable part will be
                  given effect to the greatest extent possible, and the
                  remaining parts will remain in full force and effect.
                </p>
                <p>
                  14.2. Governing Law. These Terms are governed by the laws of
                  Germany without regard to conflict of law principles. You and
                  ContactSwing submit to the personal and exclusive jurisdiction
                  of the state courts and federal courts located in Berlin,
                  Germany, for resolution of any lawsuit or court proceeding
                  permitted under these Terms. We operate the Service from our
                  offices in Berlin, and we make no representation that
                  Materials included in the Service are appropriate or available
                  for use in other locations.
                </p>
                <p>
                  14.3. Privacy Policy. Please read the ContactSwing Privacy
                  Policy carefully for information relating to our collection,
                  use, storage, disclosure of your personal information.
                </p>
                <p>
                  14.4. Consent to Electronic Communications. By using the
                  Service, you consent to receiving certain electronic
                  communications from us as further described in our Privacy
                  Policy. Please read our Privacy Policy to learn more about our
                  electronic communications practices. You agree that any
                  notices, agreements, disclosures, or other communications that
                  we send to you electronically will satisfy any legal
                  communication requirements, including that those
                  communications be in writing.
                </p>
                <p>
                  14.5. Contact Information. The Service is offered by
                  ContactSwing, located in Berlin, Germany. You may contact us
                  by sending correspondence to that address or by emailing us at
                  info@contactswing.com.
                </p>
                <p>
                  14.6. No Support. We are under no obligation to provide
                  support for the Service. In instances where we may offer
                  support, the support will be subject to published policies.
                </p>
              </section>
              <section>
                <p>APP TERMS</p>
                <p>Effective Date: May 1, 2024</p>
                <p>
                  These AI Platform Terms of Service ("AI Platform Terms")
                  constitute a binding contract between Licensee (defined in
                  Section 1) and ContactSwing ("ContactSwing") that govern
                  Licensee's use of the AI Platform (defined in Section 1).
                </p>
                <p>
                  BY ACCEPTING THESE AI PLATFORM TERMS THROUGH THE REQUIRED
                  PROCESS OR OTHERWISE ACCESSING OR USING THE AI PLATFORM,
                  LICENSEE REPRESENTS AND WARRANTS THAT: (1) LICENSEE HAS READ
                  AND UNDERSTANDS THESE AI PLATFORM TERMS, AND AGREES TO BE
                  BOUND LEGALLY BY THESE AI PLATFORM TERMS; (2) LICENSEE IS
                  EITHER AT LEAST 18 YEARS OF AGE OR HAS THE CONSENT OF A PARENT
                  OR LEGAL GUARDIAN WHO IS AT LEAST 18 YEARS OF AGE TO USE THE
                  AI PLATFORM AND WHO WILL SUPERVISE LICENSEE'S USE; AND (3) IF
                  LICENSEE IS ACCESSING THE AI PLATFORM ON BEHALF OF A LEGAL
                  ENTITY, THEN LICENSEE HAS THE AUTHORITY TO AND HEREBY DOES
                  BIND SUCH LEGAL ENTITY TO THESE AI PLATFORM TERMS. IF LICENSEE
                  DOES NOT AGREE WITH THESE AI PLATFORM TERMS OR OTHERWISE HAVE
                  THE AUTHORITY TO ACCEPT THEM, THEN LICENSEE MUST REJECT THESE
                  AI PLATFORM TERMS THROUGH THE REQUIRED PROCESS.
                </p>
                <p>
                  NO END USER MAY ENTER INTO THESE AI PLATFORM TERMS IN
                  CONNECTION WITH ANY USE OF THE AI PLATFORM BY OR FOR THE
                  BENEFIT OF ANY AGENCY OR INSTRUMENTALITY OF ANY GOVERNMENT. IF
                  YOU ARE SEEKING TO ACCESS THE AI PLATFORM ON BEHALF OF ANY
                  SUCH ENTITY, THEN YOU MUST CONTACT ContactSwing AT
                  info@contactswing.com AND ENTER INTO A SEPARATELY NEGOTIATED
                  LICENSE AGREEMENT WITH ContactSwing. ALL USE OF THE AI
                  PLATFORM IN VIOLATION OF THE PRECEDING SENTENCES IN THIS
                  PARAGRAPH CONSTITUTES A MATERIAL BREACH OF THIS AGREEMENT.
                </p>
              </section>
              <section>
                <h2>Definitions.</h2>
                <p>
                  a. "AI Platform" means ContactSwing's proprietary web-based
                  software platform available at www.ContactSwing (each a,
                  "Licensee Site") that has been programmed to help end-users
                  build and deploy artificial intelligence models and to
                  implement improvements upon itself, based in Berlin, Germany.
                </p>
                <p>
                  b. "AI Platform Arising IP" means all Technology, other than
                  the Licensee AI Agents, that: (i) is or has been generated,
                  developed, fixed in a tangible medium, conceived or reduced to
                  practice by or on behalf of either party before, on or after
                  the date these AI Platform Terms take effect; and (ii) arises
                  from or in connection with any execution, operation or use of
                  the AI Platform (including the AI Platform processing,
                  storing, organizing, arranging, selecting, aggregating,
                  adapting or otherwise using or exploiting any data (including
                  Licensee Data), content, information, materials or other
                  inputs transmitted, submitted or uploaded to the AI Platform).
                  Without limiting the foregoing and for clarity, the AI
                  Platform Arising IP includes any updates, error corrections,
                  bug fixes, enhancements or improvements to the AI Platform
                  developed by or on behalf of ContactSwing
                </p>
                <p>
                  c. "ContactSwing Confidential Information" means any
                  information ContactSwing or any party acting on its behalf
                  discloses to Licensee, whether in writing or orally, and
                  whether before, on or after the date the AI Platform Terms
                  take effect, which is either designated as "confidential" at
                  the time of disclosure or reasonably should be considered
                  confidential given the nature of the information and the
                  circumstances of disclosure. For the avoidance of doubt and
                  notwithstanding the foregoing, ContactSwing Confidential
                  Information includes the AI Platform and all information about
                  its performance.
                </p>
                <p>
                  d. "Intellectual Property Rights" means all intellectual
                  property or industrial rights arising anywhere throughout the
                  world, including: (i) all patents and patent applications;
                  (ii) all rights associated with the protection of trade
                  secrets and confidential information; (iii) all copyrights and
                  mask work rights, and all rights of paternity, integrity,
                  attribution and any other rights of authors; (iv) all rights
                  in trademarks and other indicators of origin, and all rights
                  to goodwill related thereto; (v) all rights in databases, data
                  collections and data; (vi) all rights in registrations and
                  applications to any of the foregoing; and (vii) any similar,
                  corresponding or equivalent rights to any of the foregoing.
                </p>
                <p>
                  e. "Licensee" means: (i) in the case of an individual who
                  accepts these AI Platform Terms or otherwise accesses or uses
                  the AI Platform on his or her own behalf, such individual; or
                  (ii) in the case of an individual who accepts these AI
                  Platform Terms or otherwise accesses or uses the AI Platform
                  on behalf of a legal entity, the legal entity.
                </p>
                <p>
                  f. "Licensee Data" means any table, video, image, audio, text,
                  sequence data or other content that Licensee: (i) owns or
                  controls prior to entering into these AI Platform Terms or on
                  or after that date but independent of any access to or use of
                  the AI Platform; and (ii) uploads to the AI Platform.
                </p>
                <p>
                  g. "Licensee AI Agent" means the specific instance of an AI
                  agent that: (i) Licensee creates on the AI Platform by
                  clicking on the "Create AI Agent" button of the AI Platform,
                  thereby prompting the AI Platform to process and analyze
                  Licensee Data; and (ii) is visually presented to Licensee in
                  digital format on the AI Platform's user interface.
                  Notwithstanding the foregoing and for clarity, (1) Licensee AI
                  Agents are deemed to exclude any Technology and Intellectual
                  Property Rights therein that are identified as owned by
                  ContactSwing in these AI Platform Terms and that are in whole
                  or in part incorporated into or embodied by the AI agents as
                  described in the immediately preceding sentence in this
                  Section; (2) all such Technology and Intellectual Property
                  Rights remain ContactSwing's exclusive property; and (3)
                  Licensee's rights to such Technology and Intellectual Property
                  Rights are exclusively governed by these AI Platform Terms.
                </p>
                <p>
                  h. "Order" means the order Licensee places to obtain access to
                  the AI Platform on a Licensee Site through the required
                  process, including any order details as reflected in any
                  electronic confirmation transmitted to Licensee.
                </p>
                <p>
                  i. "Technology" means any or all embodiments of Intellectual
                  Property Rights, including: (i) works of authorship (including
                  software and documentation); (ii) inventions (whether or not
                  patentable), discoveries and improvements; (iii) proprietary
                  and confidential information, trade secrets and know-how; (iv)
                  databases, data compilations, and data (including technical
                  data); (v) tools, methods, techniques, processes, procedures,
                  algorithms and models; and (vi) all instantiations or
                  embodiments of any of the foregoing in (i) through (v)
                  inclusive.
                </p>
              </section>
              <section>
                <h2>Scope.</h2>
                <p>
                  a. Free Tier; Free Trial; Paid Plans. ContactSwing may make
                  the AI Platform available to Licensee for free subject to
                  certain monthly usage limitations ("Free Tier") or on a trial
                  basis for the period specified in an Order ("Free Trial").
                  ContactSwing also offers paid access to the AI Platform under
                  various different paid plans as further specified in an Order
                  (each, a "Paid Plan"). These AI Platform Terms govern
                  Licensee's access to the AI Platform.
                </p>
                <p>
                  b. Accounts. To access the AI Platform in all cases, Licensee
                  must register for an account on a Licensee Site. To access a
                  Free Trial or a Paid Plan, Licensee must enter into an Order.
                  The information that Licensee provides to ContactSwing to
                  register an account must be accurate and up-to-date, and
                  Licensee will keep it accurate and up-to-date at all times.
                  Licensee is solely responsible for maintaining the
                  confidentiality of its account and any access credentials that
                  Licensee needs to access the account, and Licensee accepts
                  responsibility for all activities that occur under its
                  account.
                </p>
              </section>
              <section>
                <h2>Proprietary Rights.</h2>
                <p>
                  a. Ownership. As between the parties: (i) Licensee solely owns
                  the Licensee Data and Licensee AI Agent, subject to the
                  provisions of Section 3.b.iii; and (ii) ContactSwing solely
                  owns all rights, title, and interest (including all
                  Intellectual Property Rights) in and to all: (1) AI Platform
                  Arising IP; and (2) Technology that ContactSwing owns or
                  controls prior to when these AI Platform Terms take effect or
                  on or after that date but independent of these AI Platform
                  Terms (including all data, models, algorithms, software,
                  know-how, trade secrets, and other Technology that constitutes
                  or embodies the AI Platform in whole or part) ((1) and (2)
                  collectively, the "ContactSwing IP"). If any ownership rights
                  in or to any aspect of the ContactSwing IP vests in Licensee
                  under any circumstances, then Licensee will, and hereby does,
                  irrevocably and unconditionally assign to ContactSwing all
                  such rights (without any further consideration due to
                  ContactSwing, where the rights granted to Licensee under these
                  AI Platform Terms are agreed to constitute sufficient
                  consideration for such assignment). If any such rights are not
                  assignable under applicable law, then Licensee hereby waives
                  all such rights to the fullest extent permitted under
                  applicable law. Licensee acknowledges that: (A) Licensee's
                  rights to any Licensee AI Agent are limited to the specific
                  copy presented to Licensee on the AI Platform's user
                  interface, and Licensee has no rights to any other copies or
                  versions of the Licensee AI Agents; and (B) other AI Platform
                  users may generate agents using the AI Platform that are the
                  same as or similar to the Licensee AI Agent under certain
                  circumstances, such as when other AI Platform users provide
                  input that is the same as or similar to the Licensee Data to
                  generate models on the AI Platform. Licensee hereby
                  irrevocably and unconditionally waives all rights to directly
                  or indirectly challenge, or assist any third party in
                  challenging, the rights of ContactSwing or any third party in
                  or to any ContactSwing IP.
                </p>
                <p>
                  (1) ContactSwing hereby grants to Licensee during the Term
                  (defined in Section 5(a)) a non-exclusive, non-transferable,
                  non-sublicensable, worldwide and irrevocable (subject to
                  ContactSwing's right to terminate this Agreement) license to
                  access and use the AI Platform subject to any Usage Caps
                  solely for: (I) in the case of a Paid Plan, Licensee's
                  internal business purposes to enable its products and services
                  with artificial intelligence capabilities in accordance with
                  these AI Platform Terms; (II) in the case of a Free Trial or
                  access to the Free Tier, Licensee's internal, non-commercial
                  evaluation purposes to determine whether Licensee desires to
                  seek paid access to the AI Platform in accordance with these
                  AI Platform Terms. If, and only if, ContactSwing incorporates
                  any AI Platform Arising IP into the AI Platform during the
                  Term, then such incorporated AI Platform Arising IP are deemed
                  included in all references to the "AI Platform" in these AI
                  Platform Terms and will be subject to these AI Platform Terms
                  for so long as such AI Platform Arising IP remains so
                  incorporated into the AI Platform.
                </p>
                <p>
                  (2) If, and only if, any ContactSwing IP is incorporated into
                  or embodied by any Licensee AI Agents, then ContactSwing will,
                  and hereby does, grant to Licensee a non-exclusive, perpetual,
                  irrevocable, transferable, sublicensable, worldwide and
                  royalty-free license to use and exploit such incorporated or
                  embodied ContactSwing IP solely as and to the extent so
                  incorporated into or embodied by the Licensee AI Agents;
                  provided, for clarity, the foregoing does not provide Licensee
                  with any rights to use or exploit any such incorporated or
                  embodied ContactSwing IP on a standalone basis or otherwise
                  separate from the Licensee AI Agents into which such
                  ContactSwing IP is incorporated or by which such ContactSwing
                  IP is embodied.
                </p>
                <p>
                  ii. Restrictions. Licensee will not, and will not authorize
                  any third party to: (i) reverse engineer, decompile,
                  disassemble or otherwise attempt to reconstruct, identify or
                  discover any source code, underlying ideas, models, underlying
                  user interface techniques, or algorithms of the AI Platform;
                  (ii) modify the AI Platform, or sell, lease, license or
                  otherwise commercialize or distribute the AI Platform; (iii)
                  interfere with or disrupt the performance of the AI Platform;
                  (iv) gain unauthorized access to the AI Platform or its
                  related systems or networks; (v) use any portion of the AI
                  Platform in connection with or related to any efforts to
                  develop a competitive product or service to those being
                  developed or offered by ContactSwing; (vi) use the AI Platform
                  in a manner that violates any Usage Caps or otherwise in any
                  manner that is not expressly authorized in these AI Platform
                  Terms; (vii) remove, alter, or obscure in any way any
                  proprietary rights notices of ContactSwing or its suppliers on
                  or within the AI Platform; (viii) transmit to the AI Platform
                  any virus, worm, spyware or other software code, file or
                  program intended to impair, alter or damage the operation of
                  the AI Platform or its related systems or networks; and (ix)
                  use the AI Platform in any manner that violates any applicable
                  laws, rules or regulations or infringes any third party
                  Intellectual Property Rights or other rights, including any
                  use that would be libelous or defamatory, or discriminatory
                  based on race, color, sex, gender identity, religion,
                  nationality, ethnic or national origin, marital status,
                  disability, sexual orientation, age or any other protected
                  class pursuant to German federal or state laws. During a Free
                  Trial or access to the Free Tier, Licensee will not, and will
                  not authorize any third party to, implement, deploy or
                  otherwise use any Licensee AI Agent in connection with any
                  product or service that is distributed, made available or
                  commercialized in any manner (including on a
                  software-as-a-service or hosted basis) to any third party
                  outside of Licensee's business.
                </p>
                <p>
                  iii. Licensee Data and Licensee AI Agents. (1) As between the
                  parties, Licensee retains all right, title and interest
                  (including any and all intellectual property rights) in and to
                  the Licensee Data and any modifications made thereto in the
                  course of using the AI Platform. Subject to the terms of this
                  Agreement, Licensee hereby grants to ContactSwing a
                  non-exclusive, worldwide, royalty-free right, during the term
                  of this Agreement, to process the Licensee Data solely to the
                  extent necessary to provide the services contemplated by the
                  AI Platform, to prevent or address service or technical
                  problems therein, or as may be required by law. (2) As between
                  the parties, Licensee owns the Licensee AI Agents, but
                  Licensee acknowledges that ContactSwing is in the business of
                  improving and making enhancements to the AI Platform,
                  partially through learnings generated by training Licensee AI
                  Agents. Accordingly, Licensee hereby grants to ContactSwing a
                  non-exclusive, perpetual, irrevocable, transferable, worldwide
                  and royalty-free license to use, reproduce, modify and
                  otherwise exploit the Licensee AI Agents for the following
                  purposes: to operate, train, modify, maintain, support,
                  update, enhance, exploit, and otherwise use and improve the AI
                  Platform, ContactSwing IP and all current or future
                  ContactSwing products, services and technology. ContactSwing
                  has the right to grant and authorize sublicenses (through
                  multiple tiers) to the foregoing licenses in this Section
                  3(b)(iii)(2) in its sole discretion. ContactSwing remains
                  liable for ensuring sublicensees comply with the scope of the
                  licenses in this Section 3(b)(iii)(2).
                </p>
                <p>
                  iv. Feedback. Licensee may provide ContactSwing with feedback
                  about Licensee's use of and experience with any aspect of the
                  AI Platform or Licensee AI Agents ("Feedback"). Licensee
                  hereby grants to ContactSwing a non-exclusive, perpetual,
                  irrevocable, transferable, worldwide and royalty-free license,
                  with the right to grant and authorize sublicenses (through
                  multiple tiers), to use and exploit such Feedback in any
                  manner without any restriction or any payment or credit due to
                  Licensee.
                </p>
                <p>
                  v. Reservation of Rights. All rights that a party does not
                  expressly grant to the other in these AI Platform Terms are
                  hereby reserved and neither party grants to the other any
                  implied licenses in these AI Platform Terms under any theory.
                </p>
              </section>
              <section>
                <h2>Fees and Payment Terms.</h2>
                <p>
                  a. Fees. Licensee will pay all fees set forth in each Order in
                  accordance with all payment terms set forth in each Order. All
                  fees due and payable under these AI Platform Terms are
                  referred to as the "Fees." Licensee authorizes ContactSwing to
                  charge all sums for the Paid Plan that Licensee selects as
                  described in an Order, including all applicable taxes, to the
                  payment method specified in Licensee's account. If Licensee
                  pays any Fees with a credit card, ContactSwing may seek
                  pre-authorization of Licensee's credit card account prior to
                  Licensee's purchase to verify that the credit card is valid
                  and has the necessary funds or credit available to cover
                  Licensee's purchase. Licensee authorizes ContactSwing to
                  periodically charge, on a going-forward basis and until
                  termination of these AI Platform Terms or the applicable
                  Order, all accrued sums on or before the payment due date for
                  the accrued sums as described in the Order.
                </p>
                <p>
                  b. Taxes. Licensee shall be responsible for the payment of all
                  sales, use, excise, value-added and/or any other taxes,
                  duties, or charges imposed by any federal, state or local
                  governmental or regulatory authority in connection with the
                  Fees, excluding any taxes imposed on ContactSwing's net
                  income. To the extent required by relevant federal, state or
                  local regulations, ContactSwing shall be entitled to collect
                  and remit any such taxes with each payment of Fees.
                </p>
              </section>
              <section>
                <h2>Term and Termination.</h2>
                <p>
                  a. Term. These AI Platform Terms will commence on the date
                  when the first Order has been completed by Licensee, and these
                  AI Platform Terms will continue, unless terminated earlier in
                  accordance with these AI Platform Terms, until all Orders have
                  expired or been terminated (the "Term").The term of each Order
                  will begin on the date when the Order has been completed by
                  Licensee, and each Order will continue, unless terminated
                  earlier in accordance with these AI Platform Terms, until the
                  end of the term specified in the applicable Order. The term of
                  each Order will automatically renew for additional periods
                  equal in length to the expiring term unless either party
                  provides notice of non-renewal at least thirty (30) days prior
                  to commencement of the next renewal term.
                </p>
                <p>
                  b. Termination. Either party may terminate these AI Platform
                  Terms or any Order by written notice: (i) if the other party
                  is in material breach of these AI Platform Terms or such
                  Order, where such material breach is not cured within thirty
                  (30) days after written notice of such breach from the
                  non-breaching party; and (ii) at any time upon written notice
                  to the other for any or no reason; provided that, if Licensee
                  terminates these AI Platform Terms or any Order pursuant to
                  this Section 5(b)(ii), then Licensee will not be entitled to a
                  refund for any Fees that have been paid prior to termination.
                </p>
                <p>
                  c. Effects of Termination. Upon any expiration or termination
                  of the AI Platform Terms: (i) the license granted to Licensee
                  in Section 3(b)(i)(1) will immediately terminate;(ii) Licensee
                  must permanently delete all copies of ContactSwing
                  Confidential Information within Licensee's possession or
                  control, if any, and certify the same has been completed upon
                  request by ContactSwing; and (iii) the following Sections, and
                  any defined terms and provisions required to interpret or
                  enforce those Sections (but only to the extent required for
                  such interpretation or enforcement), will survive: 1, 2, 3(a),
                  3(b)(i)(2), 3(b)(ii), 3(b)(iii), 3(b)(iv), 3(b)(v), 4, 5(c),
                  6, 7, 8, 9, and 10.
                </p>
              </section>
              <section>
                <h2>Confidentiality.</h2>
                <p>
                  Licensee agrees that the ContactSwing Confidential Information
                  constitutes and embodies valuable ContactSwing trade secrets.
                  Licensee may use the ContactSwing Confidential Information
                  only as necessary to exercise Licensee's express rights under
                  these AI Platform Terms and Licensee may not disclose any
                  ContactSwing Confidential Information to any third party
                  without ContactSwing's prior written consent. Licensee agrees
                  that Licensee will protect the ContactSwing Confidential
                  Information from unauthorized access, use and disclosure in
                  the same manner that Licensee would use to protect Licensee's
                  own confidential and proprietary information of a similar
                  nature and in no event with less than a reasonable degree of
                  care.
                </p>
              </section>
              <section>
                <h2>Representations and Warranties.</h2>
                <p>
                  {" "}
                  Licensee represents, warrants and covenants that: (a) the
                  Licensee Data and the Licensee AI Agents do not, and
                  ContactSwing's use of the Licensee Data and Licensee AI Agents
                  as permitted in these AI Platform Terms will not, infringe,
                  misappropriate or violate the Intellectual Property Rights or
                  other rights of any third party or any applicable laws, rules
                  or regulations; (b) Licensee will not use the Licensee AI
                  Agents in violation of any applicable law, rule or regulation,
                  any third party rights or in any manner that could subject
                  ContactSwing to any laws, rules or regulations that otherwise
                  would not apply to ContactSwing; (c) Licensee has, and will
                  continue to have, all necessary rights to grant ContactSwing
                  the rights set forth in these AI Platform Terms; (d) entering
                  into these AI Platform Terms and performing Licensee's
                  obligations under these AI Platform Terms do not, and will
                  not, breach or otherwise conflict with Licensee's obligations
                  to any third party under any contract, court order or
                  otherwise; (e) Licensee has had the opportunity to consult
                  with independent legal counsel prior to accepting these AI
                  Platform Terms even if Licensee has chosen not to do so; (f)
                  if Licensee is accessing and using the AI Platform in
                  Licensee's individual capacity, Licensee is doing so for
                  business purposes and not as a "consumer" as that concept is
                  defined under applicable laws, rules and regulations; and (g)
                  Licensee is not seeking to, and will not, access or use the AI
                  Platform for or on behalf of any agency or instrumentality of
                  any government. LICENSEE FURTHER REPRESENTS, WARRANTS AND
                  COVENANTS THAT IT WILL NOT DEPLOY, IMPLEMENT OR OTHERWISE USE
                  THE LICENSEE AGENTS IN CONNECTION WITH ANY PRODUCTS, SERVICES
                  OR APPLICATIONS THAT COULD CONTRIBUTE (IN WHOLE OR PART) TO
                  ANY PHYSICAL OR EMOTIONAL HARM TO ANY PERSON OR ANY DAMAGE TO
                  TANGIBLE PROPERTY (INCLUDING IN CONNECTION WITH ANY PRODUCTS,
                  SERVICES OR APPLICATIONS RELATED TO THE HEALTHCARE,
                  TRANSPORTATION, MILITARY AND/OR LAW ENFORCEMENT AND ENERGY
                  INDUSTRIES).
                </p>
              </section>
              <section>
                <h2>Indemnification.</h2>
                <p>
                  {" "}
                  To the fullest extent permitted by applicable laws, rules and
                  regulations, Licensee will defend, indemnify and hold harmless
                  the ContactSwing Parties (defined in Section 9) and their
                  respective officers, directors, employees, consultants,
                  agents, licensors and suppliers (each, an "Indemnified
                  Party"), from and against any action, claim, investigation or
                  other proceeding brought against an Indemnified Party by a
                  third party, and any related liability, damage, loss, and
                  expense, including reasonable attorneys' fees and costs,
                  arising from or in connection with: (a) Licensee's use or
                  misuse of the AI Platform; (b) Licensee's breach of these AI
                  Platform Terms; (c) any Licensee Data (including any
                  allegation that any Licensee Data and/or any use of the same
                  in accordance with these AI Platform Terms infringes or
                  misappropriates any third party's rights or violates any
                  applicable laws, rules and regulations, rules or regulations);
                  (d) any Licensee AI Agents (including any use, deployment,
                  implementation or other exploitation of Licensee AI Agents in
                  any manner); or (e) any dispute between Licensee and any third
                  party covered by Section 9. The Indemnified Party reserves the
                  right, at Licensee's sole expense, to assume the exclusive
                  defense and control of any matter covered by this Section 8
                  (without limiting Licensee's indemnification obligations with
                  respect to that matter), and in that case, Licensee agrees to
                  cooperate with the Indemnified Party's defense of those
                  claims.
                </p>
              </section>
              <section>
                <h2>Disclaimers; Limitation of Liability.</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, AND WITHOUT
                  LIMITING ANY OTHER TERMS IN THESE AI PLATFORM TERMS, THE
                  FOLLOWING TERMS APPLY:
                </p>
                <p>
                  ContactSwing DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS,
                  IMPLIED OR STATUTORY, INCLUDING ANY AND ALL WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                  NON-INFRINGEMENT, LOSS OF DATA, ACCURACY OF RESULTS, OR
                  OTHERWISE, ARISING FROM OR RELATING TO THESE AI PLATFORM TERMS
                  AND THE ContactSwing IP. WITHOUT LIMITING THE FOREGOING:
                </p>
                <p>
                  (1) ContactSwing DOES NOT REPRESENT OR WARRANT THAT: (a) THE
                  AI PLATFORM WILL BE ERROR-FREE OR UNINTERRUPTED; (b) THE AI
                  PLATFORM WILL BE COMPATIBLE WITH ANY PARTICULAR DEVICE; (c)
                  ANY DATA PROVIDED BY OR THROUGH THE AI PLATFORM (INCLUDING ANY
                  THIRD PARTY CONTENT AND LICENSEE AGENTS) WILL BE ACCURATE OR
                  COMPLETE OR FIT FOR ANY PURPOSE OR USE THAT LICENSEE PLANS TO
                  MAKE OF THE SAME; OR (d) SECURITY MEASURES WILL BE SUFFICIENT
                  TO PREVENT THIRD PARTY ACCESS TO LICENSEE DATA OR LICENSEE'S
                  DEVICES OR ANY THIRD PARTY TECHNOLOGY USED IN CONNECTION WITH
                  THE AI PLATFORM; AND
                </p>
                <p>
                  (2) NEITHER ContactSwing NOR ANY OF ITS CURRENT OR FUTURE
                  AFFILIATES (collectively, the "ContactSwing Parties") NOR ANY
                  OF THEIR RESPECTIVE LICENSORS WILL HAVE ANY LIABILITY TO
                  LICENSEE IN CONNECTION WITH ANY: (a) DATA MADE AVAILABLE TO
                  LICENSEE BY OR THROUGH THE AI PLATFORM, INCLUDING LICENSEE
                  AGENTS (collectively, "Covered Data") OR ANY RESULTS OR OUTPUT
                  DERIVED FROM, BASED UPON OR OTHERWISE ARISING FROM OR IN
                  CONNECTION WITH ANY ACCESS TO, REVIEW, PROCESSING, DEPLOYMENT,
                  IMPLEMENTATION OR OTHER USE OR EXPLOITATION OF THE COVERED
                  DATA (collectively, "Results"); OR (b) DISPUTE LICENSEE MAY
                  HAVE WITH ANY THIRD PARTY PERSON OR ENTITY ARISING FROM OR IN
                  CONNECTION WITH THE AI PLATFORM OR ANY COVERED DATA OR
                  RESULTS. ALL SUCH DISPUTES COVERED BY THE FOREGOING CLAUSE (b)
                  ARE BETWEEN LICENSEE AND ANY SUCH THIRD PARTIES. ACCORDINGLY,
                  LICENSEE HEREBY IRREVOCABLY RELEASES THE ContactSwing PARTIES
                  AND ALL OF THEIR LICENSORS FROM ANY AND ALL CLAIMS, DEMANDS
                  AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF EVERY KIND AND
                  NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY
                  CONNECTED WITH SUCH DISPUTES.
                </p>
                <p>
                  IN NO EVENT WILL ContactSwing BE LIABLE FOR ANY INDIRECT,
                  SPECIAL, INCIDENTAL, EXEMPLARY, PUNITIVE, TREBLE, OR
                  CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF BUSINESS, REVENUE,
                  PROFITS, GOODWILL, DATA, OR ECONOMIC ADVANTAGE, AND COSTS OF
                  SUBSTITUTE GOODS OR SERVICES) ARISING OUT OF OR RELATING TO
                  THESE AI PLATFORM TERMS, HOWEVER CAUSED, AND BASED ON ANY
                  THEORY OF LIABILITY, WHETHER FOR BREACH OF CONTRACT, BREACH OF
                  WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR
                  OTHERWISE, EVEN IF ContactSwing HAS BEEN ADVISED OF THE
                  POSSIBILITY OF SUCH DAMAGES. AND ContactSwing'S TOTAL
                  LIABILITY (INCLUDING ATTORNEYS' FEES) ARISING OUT OF OR
                  RELATED TO THESE AI PLATFORM TERMS WILL NOT EXCEED THE AMOUNT
                  PAID BY LICENSEE UNDER THE ORDER(S) GIVING RISE TO THE CLAIM
                  DURING THE 12-MONTH PERIOD PRIOR TO THE DATE THE CLAIM AROSE
                  OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER. THESE
                  LIMITATIONS WILL APPLY NOTWITHSTANDING ANY FAILURE OF THE
                  ESSENTIAL PURPOSE OF ANY LIMITED OR EXCLUSIVE REMEDY.
                </p>
              </section>
              <section>
                <h2>GENERAL PROVISIONS.</h2>
                <p>
                  a. Privacy and Communications. Licensee's use of the AI
                  Platform is also subject to ContactSwing privacy policy, which
                  is incorporated into these Terms by this reference. By using
                  the AI Platform, Licensee consents to receiving certain
                  electronic communications from ContactSwing as further
                  described in the Privacy Policy. Please read the Privacy
                  Policy to learn more about Licensee's choices regarding
                  ContactSwing's electronic communications practices. Licensee
                  agrees that any notices, agreements, disclosures, or other
                  communications that ContactSwing sends to Licensee
                  electronically will satisfy any legal communication
                  requirements, including that such communications be in
                  writing.
                </p>
                <p>
                  b. Modification of these Terms. ContactSwing reserves the
                  right to change these AI Platform Terms on a going-forward
                  basis at any time. Please check these AI Platform Terms
                  periodically for changes. If a change to these AI Platform
                  Terms materially modifies Licensee's rights or obligations,
                  ContactSwing may require that Licensee accept the modified AI
                  Platform Terms in order to continue to use AI Platform.
                  Material modifications are effective upon Licensee's
                  acceptance of the modified AI Platform Terms. Immaterial
                  modifications are effective upon publication. Except as
                  expressly permitted in this Section 10(b), these AI Platform
                  Terms may be amended only by a written agreement signed by
                  authorized representatives of the parties to these AI Platform
                  Terms. Disputes arising under these AI Platform Terms will be
                  resolved in accordance with the version of these AI Platform
                  Terms that was in effect at the time the dispute arose.
                </p>
                <p>
                  c. Interpretation. Unless a clear contrary intention appears:
                  (i) any term defined in the singular includes the plural when
                  required by the applicable context; (ii) the headings in these
                  AI Platform Terms are for convenience of reference only, will
                  not be deemed to be a part of these AI Platform Terms, and
                  will not be referred to in connection with the interpretation
                  of these AI Platform Terms; and (iii) uses of "including" mean
                  "including, without limitation." Any ambiguity in these AI
                  Platform Terms will be interpreted without regard to which
                  party drafted these AI Platform Terms or any part thereof.
                </p>
                <p>
                  d. Changes. ContactSwing may make changes or updates to the AI
                  Platform during the Term, including to reflect changes in
                  technology, industry practices and patterns of system use;
                  however, any such changes will not result in a material
                  reduction in the level of performance or availability of the
                  AI Platform provided to Licensee during the Term. If any
                  changes to the AI Platform do result in a material reduction
                  in the level of performance or availability for the AI
                  Platform, then Licensee's sole remedy in connection with the
                  same is to terminate these AI Platform Terms and to cease all
                  use of the AI Platform.
                </p>
                <p>
                  e. Assignment; Subcontractors. Neither party may assign these
                  AI Platform Terms or any of its rights under these AI Platform
                  Terms without the prior written consent of the other party,
                  except that ContactSwing may assign these AI Platform Terms
                  without the consent of Licensee as part of a corporate
                  reorganization, to any ContactSwing affiliate, or in
                  connection with any change of control, consolidation, merger,
                  sale of assets or any similar transaction or series of
                  transactions. Subject to the foregoing, these AI Platform
                  Terms will be binding upon and inure to the benefit of the
                  parties and their respective successors and permitted assigns.
                  ContactSwing in its sole discretion may from time-to-time
                  engage third parties to perform any of its obligations under
                  these AI Platform Terms, including hosting or other services.
                  ContactSwing will be responsible for ensuring all such parties
                  comply with these AI Platform Terms.
                </p>
                <p>
                  f. Force Majeure. Neither party will be liable for any failure
                  or delay in its performance under these AI Platform Terms due
                  to any cause beyond its reasonable control, including an act
                  of war, terrorism, act of God, earthquake, flood, pandemic,
                  epidemic, embargo, riot, sabotage, labor shortage or dispute,
                  governmental act or failure or degradation of the Internet,
                  but in all cases excluding the payment of Fees (each, a "Force
                  Majeure"). The delayed party must give the other party notice
                  of such Force Majeure and use commercially reasonable efforts
                  to correct such failure or delay in performance.
                </p>
                <p>
                  g. Governing Law. These AI Platform Terms will be interpreted,
                  construed, and enforced in all respects in accordance with the
                  local laws of Berlin, Germany.
                </p>
                <p>h. Arbitration.</p>
                <p>
                  i. Any dispute with respect to these AI Platform Terms will be
                  settled by binding arbitration in Berlin, Germany, under the
                  Rules of the International Chamber of Commerce by three
                  arbitrators appointed in accordance with such rules. Judgment
                  upon the award rendered by the arbitrators may be entered in
                  any court of competent jurisdiction. The prevailing party will
                  be entitled to receive from the other party its attorneys'
                  fees and costs incurred in connection with any arbitration or
                  litigation instituted in connection with these AI Platform
                  Terms. LICENSEE UNDERSTANDS AND AGREES THAT, BY ENTERING INTO
                  THESE AI PLATFORM TERMS, LICENSEE AND ContactSwing ARE EACH
                  WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A
                  CLASS ACTION.
                </p>
                <p>
                  ii. Notwithstanding the foregoing in Section 10(h)(i),
                  Licensee acknowledges and agrees that a breach or threatened
                  breach of these AI Platform Terms would cause ContactSwing
                  irreparable harm for which monetary damages would not be an
                  adequate remedy and agrees that, in the event of such breach
                  or threatened breach, ContactSwing will be entitled to
                  equitable relief and any other relief that may be available
                  from any court of competent jurisdiction, without any
                  requirement to post a bond or other security, or to prove
                  actual damages or that monetary damages are not an adequate
                  remedy. Such remedies are not exclusive and are in addition to
                  all other remedies that may be available at law, in equity, or
                  otherwise.
                </p>
                <p>
                  i. Publicity. ContactSwing may use Licensee's name as a
                  reference for marketing or promotional purposes on
                  ContactSwing's website and in other communications with
                  existing or potential ContactSwing customers, investors or
                  acquirers, subject to any written trademark policies Licensee
                  may provide ContactSwing in writing, with reasonable advanced
                  notice.
                </p>
                <p>
                  j. Entire Agreement; Order of Precedence. All Orders are
                  incorporated by reference into these AI Platform Terms. In the
                  event of a conflict between the terms of these AI Platform
                  Terms and any Order, the terms in these AI Platform Terms will
                  prevail. These AI Platform Terms, including all Orders, is the
                  sole agreement of the parties concerning the subject matter
                  hereof, and supersedes all prior or contemporaneous agreements
                  and understandings with respect to said subject matter. No
                  terms of any purchase order, acknowledgement, or other form
                  provided by Licensee will modify these AI Platform Terms,
                  regardless of any failure of ContactSwing to object to such
                  terms.
                </p>
                <p>
                  k. Third Party Beneficiaries. These AI Platform Terms only
                  benefit the parties and their respective permitted successors
                  and assigns and no third party has any rights arising under
                  these AI Platform Terms, provided that the parties hereby
                  designate Indemnified Parties as third party beneficiaries of
                  Section 8 with the right to enforce such Section 8.
                </p>
                <p>
                  l. Relationship of the parties. The relationship between the
                  parties is that of independent contractors. Nothing contained
                  in these AI Platform Terms will be construed as creating any
                  agency, partnership, joint venture or other form of joint
                  enterprise, employment or fiduciary relationship between the
                  parties, and neither party will have authority to contract for
                  or bind the other party in any manner whatsoever.
                </p>
                <p>
                  m. Waivers; Severability. All waivers of rights arising under
                  these AI Platform Terms must be made in writing by the party
                  waiving rights. If any provision in these AI Platform Terms is
                  held to be unenforceable by a court of competent jurisdiction
                  or the arbitrators (as applicable, based on the dispute
                  resolution proceeding under Section 10(h)), then: (i) it will
                  be severed from these AI Platform Terms; (ii) the court of
                  competent jurisdiction or arbitrators (as applicable) will
                  replace the severed provision with another provision that most
                  closely reflects the parties' original intent to the fullest
                  extent permitted by applicable law; and (iii) these AI
                  Platform Terms will remain in full force and effect.
                </p>
                <p>
                  n. Export Regulations. Licensee agrees to comply with all
                  applicable export and re-export control laws and regulations,
                  including the Export Administration Regulations ("EAR")
                  maintained by the U.S. Department of Commerce Bureau of
                  Industry and Security, in connection with the AI Platform.
                  Specifically, Licensee covenants that Licensee will not
                  directly or indirectly sell, export, re-export, transfer,
                  divert, or otherwise dispose of any products, service, or
                  technology (including products derived from or based on such
                  technology) received from ContactSwing under these AI Platform
                  Terms to any destination, entity, or person or for any use
                  prohibited by the export control laws or regulations of
                  Germany.
                </p>
                <p>
                  o. Contact Information. The AI Platform is offered by
                  ContactSwing, located in Berlin, Germany. Licensee may contact
                  us by sending correspondence to that address or by emailing us
                  at info@contactswing.com
                </p>
              </section>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 mt-4">
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
                      <p className="footer-text footer-logo-description mb-4">
                        Transform Your Customer Interactions with Contact
                        Swing's Advanced Communication Solutions!
                      </p>
                      <form className="footer-form">
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
                      </form>
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
              </div>
              <div className="footer-bottom py-3">
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
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Terms;
