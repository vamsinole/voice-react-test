/**
 * Main
 */

'use strict';

window.isRtl = window.Helpers.isRtl();
window.isDarkStyle = window.Helpers.isDarkStyle();
let menu,
  animate,
  isHorizontalLayout = false;

let voiceAgents = [],
  selectedAgent = null,
  calls = [],
  messages = [],
  newMessage = '',
  gettingMesages = '',
  activeCallIndex = null,
  activeCall = null, submitLoader = false, users = [], updatingAgent, updatingUser, usersFetched = false, agentsFetched = false;

if (document.getElementById('layout-menu')) {
  isHorizontalLayout = document.getElementById('layout-menu').classList.contains('menu-horizontal');
}


function logout() {
  window.localStorage.removeItem("token");
  window.location.href = "/login.html"
}

let token = window.localStorage.getItem("token");
if (!token || token.length === 0) {
  // if (window.location.href.indexOf('login.html') == -1 && window.location.href.indexOf('register.html') == -1) {
  //   window.location.href = "/login.html";
  // }
} else {
  if (window.location.href.indexOf('index.html') == -1) {
    if (window.location.href.indexOf('calls.html') > -1) {
      // getAgents();
    } else if (window.location.href.indexOf('users.html') > -1) {
      // getUsers();
    } else if (window.location.href.indexOf('voice-agents.html') > -1) {
      // getAgents();
    }
    // window.location.href = "/index.html";
  }
}
