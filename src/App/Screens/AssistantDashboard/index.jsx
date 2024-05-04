import React, { useState } from "react";
import Header from "../../Components/Header";
import "./Styles.scss";
import MultipleSelectDropdown from "../../Components/MultipleSelectDropdown";

// sorting table start
const tableData = [
  {
    name: "John",
    model: "Lorem Ipsum is1",
    instruc: "adfdf Lorem Ipsum is simply dummy text of the printing",
    type: "Dialogdlow4",
    action: "",
  },
  {
    name: "Alice",
    model: "Lorem Ipsum is2",
    instruc: "dfdfa Lorem Ipsum is simply dummy text of the printing",
    type: "Dialogdlow2",
    action: "",
  },
  {
    name: "Bob",
    model: "Lorem Ipsum is3",
    instruc: "iuychn Lorem Ipsum is simply dummy text of the printing",
    type: "Dialogdlow3",
    action: "",
  },
  {
    name: "Rob",
    model: "Lorem Ipsum is4",
    instruc: "uiivdn Lorem Ipsum is simply dummy text of the printing",
    type: "Dialogdlow1",
    action: "",
  },
  // Add more data as needed
];
const AssistantDashboard = () => {
  const options = ["Christmas Island", "South Sudan", "Jamaica", "Kenya"];

  // sorting table here
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...tableData].sort((a, b) => {
    if (sortConfig.key && a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (sortConfig.key && a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Header />

          <div className="layout-page">
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="card">
                  <div class="container pb-3">
                    <div className="dash">
                      {/* new tabs */}
                      <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            data-bs-toggle="tab"
                            href="#Dashboard"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#Configure"
                          >
                            Configure
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            data-bs-toggle="tab"
                            href="#Prompt"
                          >
                            Prompt
                          </a>
                        </li>
                        {/* <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#Deployment">Deployment</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#Logs">Logs</a>
        </li> */}
                      </ul>
                      {/* new tabs */}

                      <div class="tab-content p-0">
                        <div id="Dashboard" class="tab-pane active">
                          <div class="row mt-4">
                            <div class="col-md-6 mb-3">
                              <div class="cardDimensions ">
                                <div class="card-body">
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    Calls Made
                                  </h6>
                                  <h2 class="card-text">31</h2>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6 mb-3">
                              <div class="cardDimensions">
                                <div class="card-body">
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    Actions
                                  </h6>
                                  <h2 class="card-text">0</h2>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6 mb-3">
                              <div class="cardDimensions">
                                <div class="card-body">
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    Talk Time Average
                                  </h6>
                                  <h2 class="card-text">0.5min</h2>
                                </div>
                              </div>
                            </div>

                            <div class="col-md-6 mb-3">
                              <div class="cardDimensions">
                                <div class="card-body">
                                  <h6 class="card-subtitle mb-2 text-muted">
                                    Amount spent
                                  </h6>
                                  <h2 class="card-text">$2/$8</h2>

                                  <div class="progress">
                                    <div
                                      class="progress-bar bg-primary"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow="25"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* table start */}

                          <div className="border-top border-bottom">
                            <h6 className="mt-3">Recent calls</h6>
                          </div>

                          <div className="table-responsive ">
                            <table class="table">
                              <tbody>
                                <tr>
                                  <td>
                                    Completed{" "}
                                    <span className="completed"></span>
                                  </td>
                                  <td>Feb 17, 2024</td>
                                  <td>
                                    <button className="deploy-btn">
                                      Deployment
                                    </button>
                                  </td>
                                  <td>+1234567890</td>
                                </tr>
                                <tr>
                                  <td>
                                    Pedding <span className="pedding"></span>
                                  </td>
                                  <td>Feb 17, 2024</td>
                                  <td>
                                    <button className="deploy-btn">
                                      Deployment
                                    </button>
                                  </td>
                                  <td>+1234567890</td>
                                </tr>
                                <tr>
                                  <td>
                                    Completed{" "}
                                    <span className="completed"></span>
                                  </td>
                                  <td>Feb 17, 2024</td>
                                  <td>
                                    <button className="deploy-btn">
                                      Deployment
                                    </button>
                                  </td>
                                  <td>+1234567890</td>
                                </tr>
                                <tr>
                                  <td>
                                    Completed{" "}
                                    <span className="completed"></span>
                                  </td>
                                  <td>Feb 17, 2024</td>
                                  <td>
                                    <button className="deploy-btn">
                                      Deployment
                                    </button>
                                  </td>
                                  <td>+1234567890</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* table end */}
                        </div>

                        {/* Configure start  */}
                        <div id="Configure" class="tab-pane fade">
                          <section className="img-upload">
                            <div className="imgMain">
                              <h6>Image (optional)</h6>
                              <div className="d-flex">
                                <img
                                  src="assets/img/avatars/1.png"
                                  alt="img"
                                  className="config-img"
                                />
                                <div>
                                  <h6 className="mb-0">
                                    Recommended size 250px - 250px
                                  </h6>

                                  <label
                                    for="file-upload"
                                    class="custom-file-upload"
                                  >
                                    Custom Upload
                                  </label>
                                  <input id="file-upload" type="file" />
                                </div>
                              </div>
                            </div>
                          </section>

                          <section>
                            <div className="row mt-4">
                              <div className="col-md-6">
                                <h6 className="mb-0">Name</h6>
                                <label htmlFor="" className="mb-2">
                                  What name will your assistant go by{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Bright Horizons Realty"
                                />
                              </div>
                              <div className="col-md-5 col-8 position-relative">
                                <h6 className="mb-0">Name</h6>
                                <label htmlFor="" className="mb-2">
                                  What name will your assistant go by{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Paul"
                                />
                                <i class="las la-pen config-pen mb-4"></i>
                              </div>
                              <div className="col-md-1 col-4 px-lg-0 mt-5">
                                <button className="form-control">
                                  {" "}
                                  <i class="las la-play-circle la-lg"></i> Play{" "}
                                </button>
                              </div>
                              <div className="clearfix"></div> <br />
                              <hr /> <br />
                              <div className="col-md-6">
                                <h6 className="mb-0">AI Model</h6>
                                <label htmlFor="" className="mb-2">
                                  Opt for speed or depth to suit your
                                  assistant's role
                                </label>
                                <select name="" id="" className="form-select">
                                  <option value="">
                                    <div>
                                      GPT-4 Turbo <small> Open AI </small>
                                    </div>
                                  </option>
                                </select>
                              </div>
                              <div className="col-md-6">
                                <h6 className="mb-0">Voice synthesizer</h6>
                                <label htmlFor="" className="mb-2">
                                  Balance voice quality and response speed
                                </label>
                                <select name="" id="" className="form-select">
                                  <option value="">Standard</option>
                                </select>
                              </div>
                              <div className="col-md-6 mt-3">
                                <h6 className="mb-0">Language</h6>
                                <label htmlFor="" className="mb-2">
                                  Choose your assistant's language
                                </label>
                                <select name="" id="" className="form-select">
                                  <option value="">USA en-US</option>
                                </select>
                              </div>
                              <div className="col-md-6 mt-3">
                                <h6 className="mb-0">Custom greeting</h6>
                                <label htmlFor="" className="mb-2">
                                  The opening line for your assistant's call
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Hey! Whom am i talkng to?"
                                />
                              </div>
                              <div className="col-md-6 mt-3">
                                <div className="form-control">
                                  <div className="d-flex">
                                    <div className=" ">
                                      <h6 className="mb-0">
                                        Enable recordings
                                      </h6>
                                      <p>
                                        Toggle to record calls for playback and
                                        easy reveiw in the logs.
                                      </p>
                                    </div>
                                    <div className=" d-flex justify-content-center ps-3 pt-1 mt-4">
                                      <div class="form-check form-switch">
                                        <input
                                          class="form-check-input"
                                          type="checkbox"
                                          id="flexSwitchCheckDefault"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="flexSwitchCheckDefault"
                                        >
                                          {" "}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 mt-3">
                                <h6 className="mb-0">
                                  API KEY{" "}
                                  <i class="las la-info-circle la-lg"></i>
                                </h6>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="API KEY"
                                />
                              </div>
                              <div className="col-md-6 mt-3">
                                <div className="row">
                                  <div className="col-md-5 mt-3">
                                    <h6 className="mb-0">
                                      Max daily budget{" "}
                                      <i class="las la-info-circle la-lg"></i>
                                    </h6>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="USD 6"
                                    />
                                    <p className="lh-sm">
                                      <small>
                                        When the running cost exceeds this
                                        limit, the campanign will no longer be
                                        active and you will be notified.
                                      </small>
                                    </p>
                                  </div>
                                  <div className="col-md-5 col-9 mt-3">
                                    <h6 className="mb-0">
                                      Select Phone number{" "}
                                      <i class="las la-info-circle la-lg"></i>
                                    </h6>
                                    <select className="form-select">
                                      <option value="">+987654321</option>
                                    </select>
                                  </div>
                                  <div className="col-md-2 col-3 mt-3 pt-1 ps-0">
                                    <button className="btn btn-outline-secondary mt-3 px-2">
                                      <i class="las la-times"></i>{" "}
                                      <small>Detach</small>{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6 mt-3">
                                <h5 className="mb-0">Add Intent</h5>
                                {/* <h6 className='mb-0'>Intent</h6> */}
                                <div className="select2-primary">
                                  <div className="position-relative">
                                    <MultipleSelectDropdown options={options} />
                                  </div>
                                </div>

                                {/* <input type="text" className='form-control' placeholder='Enter Intent' /> */}
                              </div>
                              <div className="col-md-6 mt-3">
                                <h5 className="mb-0">Add Knowledge base</h5>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Knowlege base"
                                />
                              </div>
                              <div className="col-md-12 my-3 text-center">
                                <button
                                  type="button"
                                  class="btn btn-outline-secondary me-3 "
                                >
                                  Close
                                </button>
                                <button type="button" class="btn btn-primary ">
                                  Add intent
                                </button>
                              </div>
                            </div>
                          </section>
                        </div>
                        {/* Configure end  */}

                        {/* Prompt start  */}
                        <div id="Prompt" class="tab-pane fade">
                          <div className="d-flex justify-content-between mt-3">
                            <div>
                              <h6 className="mb-1">2. Write your prompt</h6>
                              <p className="text-primary">
                                Promting guidelines
                              </p>
                            </div>
                            <div className="mt-2">
                              <button className="btn btn-outline-secondary">
                                <i class="las la-folder-open la-lg"></i> Use a
                                Template
                              </button>
                            </div>
                          </div>

                          <div className="form-control">
                            <ol className="ps-3 promt-ol-list">
                              <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer
                                <p>
                                  * galley of type and scrambled it to make a
                                  type specimen book.*
                                </p>
                              </li>

                              <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer
                                <p>
                                  * galley of type and scrambled it to make a
                                  type specimen book.*
                                </p>
                              </li>

                              <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer
                                <p>
                                  * galley of type and scrambled it to make a
                                  type specimen book.*
                                </p>
                              </li>

                              <li>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer
                                <p>
                                  * galley of type and scrambled it to make a
                                  type specimen book.*
                                </p>
                              </li>
                            </ol>
                          </div>

                          <h6 className="mt-4">1. Set up your action</h6>
                          <div className="row">
                            <div className="col-md-4 col-lg-3">
                              <div className="form-control p-lg-3">
                                <h6>
                                  <i class="las la-comment-dots la-lg text-primary"></i>{" "}
                                  SMS
                                </h6>
                                <h6 className="mb-1">Real Time Booking</h6>
                                <p>
                                  Schedule live appointments during the call
                                </p>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                              <div className="form-control p-lg-3">
                                <h6>
                                  <i class="las la-calendar-check la-lg text-primary"></i>{" "}
                                  SCHEDULING
                                </h6>
                                <h6 className="mb-1">Call Transfer</h6>
                                <p>Transfer the call live to a human</p>
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                              <div className="form-control p-lg-3">
                                <h6>
                                  <i class="las la-exchange-alt la-lg text-primary"></i>{" "}
                                  IN-CALL
                                </h6>
                                <h6 className="mb-1">
                                  Send SMS{" "}
                                  <i class="las la-info-circle la-lg"></i>
                                </h6>
                                <p>Send a custom sms after the call</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Prompt end  */}

                        {/* table start */}

                        <div className="border-top border-bottom">
                          <h6 className="mt-3">Recent calls</h6>
                        </div>

                        <table className="table">
                          <thead>
                            <tr>
                              <th onClick={() => handleSort("name")}>
                                Name{" "}
                                {sortConfig.key === "name" &&
                                  (sortConfig.direction === "asc" ? "↑" : "↓")}
                              </th>
                              <th onClick={() => handleSort("model")}>
                                Model{" "}
                                {sortConfig.key === "model" &&
                                  (sortConfig.direction === "asc" ? "↑" : "↓")}
                              </th>
                              <th onClick={() => handleSort("instruc")}>
                                INSTRUCTIONS{" "}
                                {sortConfig.key === "instruc" &&
                                  (sortConfig.direction === "asc" ? "↑" : "↓")}
                              </th>
                              <th onClick={() => handleSort("type")}>
                                Type{" "}
                                {sortConfig.key === "type" &&
                                  (sortConfig.direction === "asc" ? "↑" : "↓")}
                              </th>
                              <th>ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            {sortedData.map((row) => (
                              <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.model}</td>
                                <td>{row.instruc}</td>
                                <td>{row.type}</td>
                                <td style={{ width: "70px" }}>
                                  <div className="d-flex acation-btns">
                                    <button className="acation-btns">
                                      <i className="las la-play la-lg"></i>
                                    </button>
                                    <button className="acation-btns">
                                      <i className="las la-trash-alt la-lg"></i>
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        {/* table end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssistantDashboard;
