// import React from 'react'
import Header from "../../Components/Header";
import React, { useState, useEffect } from "react";

import "./Styles.scss";
import TopMenu from "../../Components/TopMenu";
import { USER_ENDPOINTS } from "../../../config/enpoints";
// import axios from 'axios';
import axios from "../axiosInterceptor";
import env from "../../../config";
import { json } from "react-router-dom";

const Calls = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [dataFromApi, setDataFromApi] = useState(null);
  const [textMessge, setTextmessege] = useState(null);

  const [messagename, setMessage] = useState("");
  const [messagetime, setmessagetime] = useState("");

  const baseurl = env.baseUrl;
  const token = localStorage.getItem("token");
  const endpointVoice = USER_ENDPOINTS.agentdata;

  const [dataAgent, setVoiceAgent] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(baseurl + endpointVoice, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("responceVoice", response.data.data);

        setVoiceAgent(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  console.log("baseurl", baseurl);

  useEffect(() => {
    // Fetch initial data when component mounts
    fetchVoicecalls();
  }, []);

  const endpoint = USER_ENDPOINTS.getvoicecall;
  const fetchVoicecalls = async () => {
    try {
      const response = await axios.get(
        baseurl + endpoint + selectedValue + "?pagenumber=0&pagesize=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDataFromApi(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const changeVoiceAgent = async (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);

    // Make API call with the new selected value
    try {
      const response = await axios.get(
        baseurl + endpoint + newValue + "?pagenumber=0&pagesize=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("responce", response.data.data);

      setDataFromApi(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCellClick = async (value) => {
    // alert(`Clicked on cell with value: ${value.from}  ${value.start_time}`);

    let resutmessge = JSON.stringify(value.from);
    let jsonStringmessge = resutmessge.replace(/"/g, "");

    setMessage(jsonStringmessge);

    let resutmessgetime = JSON.stringify(value.start_time);
    let jsonStringtime = resutmessgetime.replace(/"/g, "");
    setmessagetime(jsonStringtime);

    try {
      const response = await axios.get(
        baseurl +
          endpoint +
          value.agent_id +
          "/conversations/" +
          value.id +
          "?pagenumber=0&pagesize=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("responcedddd", response.data.data);

      let sortdata = response.data.data.sort((a, b) =>
        a.id.localeCompare(b.id)
      );
      setTextmessege(sortdata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <TopMenu />
            <div className="content-wrapper">
              <div className="parent-div mt-2">
                <div className="parent-div">
                  <div className="row mb-3 select2-primary">
                    <div className="col-sm-4 offset-4">
                      <select
                        id="voice-agent-call"
                        value={selectedValue}
                        onChange={changeVoiceAgent}
                        className="select2 form-select"
                      >
                        <option value="" selected>
                          Select Agent
                        </option>
                        {dataAgent?.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="no-agent-text">
                <div className="chat-parent mt-2">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="col-12 text-center mb-3">
                        <div className="parent-div">
                          <div className="row" id="main-chat-container">
                            <div className="chat-parent mt-2">
                              <div className="row mb-3">
                                <div className="app-chat card overflow-hidden">
                                  <div className="row g-0 mt-2 mb-2">
                                    <div className="col app-chat-contacts app-sidebar flex-grow-0 overflow-hidden border-end">
                                      <div className="sidebar-body ps ps--active-y">
                                        <div className="chat-contact-list-item-title">
                                          <h5 className="text-primary mb-0 px-4 pt-3 pb-2">
                                            Chats
                                          </h5>
                                        </div>
                                        <ul
                                          className="list-unstyled chat-contact-list listpointer"
                                          id="chat-list"
                                        >
                                          <li className="chat-contact-list-item chat-list-item-0">
                                            <h6 className="text-muted mb-0">
                                              No Chats Found
                                            </h6>
                                          </li>

                                          {dataFromApi
                                            ? dataFromApi.map((value, key) => {
                                                return (
                                                  <li
                                                    className="chat-contact-list-item "
                                                    className={
                                                      activeItem === value
                                                        ? "active"
                                                        : ""
                                                    }
                                                    onClick={() =>
                                                      handleItemClick(value)
                                                    }
                                                  >
                                                    <a className="d-flex align-items-center">
                                                      <div className="chat-contact-info flex-grow-1 ms-2">
                                                        <div
                                                          key={key}
                                                          onClick={() =>
                                                            handleCellClick(
                                                              value
                                                            )
                                                          }
                                                        >
                                                          <h6 className="chat-contact-name text-truncate m-0 text-lg-start ">
                                                            {value.to}
                                                            <p className="chat-contact-status text-truncate mb-0 text-end">
                                                              {value.end_time}
                                                            </p>
                                                          </h6>
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </li>
                                                );
                                              })
                                            : null}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col app-chat-history bg-body">
                                      <div className="chat-history-wrapper">
                                        <div className="chat-history-header border-bottom">
                                          <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex overflow-hidden align-items-center">
                                              <i
                                                className="ti ti-menu-2 ti-sm cursor-pointer d-lg-none d-block me-2"
                                                data-bs-toggle="sidebar"
                                                data-overlay
                                                data-target="#app-chat-contacts"
                                              ></i>
                                              <div className="flex-shrink-0 avatar">
                                                <img
                                                  src="../../assets/img/avatars/2.png"
                                                  alt="Avatar"
                                                  className="rounded-circle"
                                                  data-bs-toggle="sidebar"
                                                  data-overlay
                                                  data-target="#app-chat-sidebar-right"
                                                />
                                              </div>
                                              <div className="chat-contact-info flex-grow-1 ms-2">
                                                <h6 className="m-0">
                                                  {messagename}
                                                </h6>
                                                <small className="user-status text-muted">
                                                  {messagetime}
                                                </small>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="chat-history-body bg-body">
                                          <ul
                                            className="list-unstyled chat-history"
                                            id="chat-history"
                                          >
                                            <li className="chat-message chat-message-right">
                                              <div className="d-flex overflow-hidden">
                                                <div className="chat-message-wrapper text-white flex-grow-1">
                                                  {textMessge
                                                    ? textMessge.map(
                                                        (value, key) => {
                                                          return (
                                                            <div
                                                              key={key}
                                                              onClick={() =>
                                                                handleCellClick(
                                                                  value
                                                                )
                                                              }
                                                              className={
                                                                key % 2 === 0
                                                                  ? "chat-message-text my-2"
                                                                  : "left-content"
                                                              }
                                                            >
                                                              <p className="mb-0">
                                                                {value.text}
                                                              </p>
                                                            </div>
                                                          );
                                                        }
                                                      )
                                                    : null}
                                                </div>
                                                <div className="user-avatar flex-shrink-0 ms-3">
                                                  <div className="avatar avatar-sm">
                                                    <img
                                                      src="../../assets/img/avatars/1.png"
                                                      alt="Avatar"
                                                      className="rounded-circle"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-xxl flex-grow-1 container-p-y"></div>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calls;
