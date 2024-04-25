/**
 * Page User List
 */

'use strict';
let selectedType, selectedAnimation, selectedPlacement, toast, toastAnimation, toastPlacement, toastAnimationExample, toastPlacementExample,
  toastAnimationBtn, toastPlacementBtn, toastHeader, toastBody, assistantsFetched, assistants, emptyAssistantsParent, dropzoneMulti,
  myDropzoneMulti, intervalId, updatingAssistant, deletingAssistant, closeAddAssistantCanvas, testingAssistant, testAssistantResponse,
  modelFile, uploadedFile, fileNameParent, fileClearBtn, modelType, existingCallId, testingAssistantChatHistory, ua, isChrome, recognition,
  microphone, speechInput, openAIModelParent, openAIInstructionsParent, openAIAPIKeyParent, openAIFilesParent, assistantType, assistant_type,
  dialogflowTypeParent;

  useEffect( ()=> {
    document.addEventListener('DOMContentLoaded', function () {
      (function () {
        toastAnimationExample = document.querySelector('.toast-ex'),
          toastPlacementExample = document.querySelector('.toast-placement-ex'),
          toastAnimationBtn = document.querySelector('#showToastAnimation'),
          toastPlacementBtn = document.querySelector('#showToastPlacement');
    
      })
    
      const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
      });
    
      const previewTemplate = `<div class="dz-preview dz-file-preview">
    <div class="dz-details">
      <div class="dz-thumbnail">
        <img data-dz-thumbnail>
        <span class="dz-nopreview">No preview</span>
        <div class="dz-success-mark"></div>
        <div class="dz-error-mark"></div>
        <div class="dz-error-message"><span data-dz-errormessage></span></div>
        <div class="progress">
          <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div>
        </div>
      </div>
      <div class="dz-filename" data-dz-name></div>
      <div class="dz-size" data-dz-size></div>
    </div>
    </div>`;
    
      emptyAssistantsParent = document.getElementById('empty-assistants');
      closeAddAssistantCanvas = document.getElementById('close-add-assistant-canvas');
      testAssistantResponse = document.getElementById('test-assistant-response');
      modelFile = document.getElementById('assistant-file');
      fileNameParent = document.getElementById('filename-parent');
      fileClearBtn = document.getElementById('clear-file');
      modelType = document.getElementById('assistant-model')
      testingAssistantChatHistory = document.getElementById('testing-assistant-chat');
      assistantType = document.getElementById('assistant-type');
      openAIModelParent = document.getElementById('open-ai-model');
      openAIInstructionsParent = document.getElementById('open-ai-instructions');
      openAIAPIKeyParent = document.getElementById('open-ai-api-key');
      openAIFilesParent = document.getElementById('open-ai-files');
      dialogflowTypeParent = document.getElementById('dialogflow-type-parent')
    
      ua = navigator.userAgent.toLowerCase();
      console.log(ua);
      var check = function (r) {
        return r.test(ua);
      };
      isChrome = check(/chrome/);
    
      if (isChrome) {
        try {
          var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
          recognition = new SpeechRecognition();
          recognition.continuous = false;
          recognition.lang = "en-US";
          recognition.interimResults = false;
          recognition.maxAlternatives = 1;
        } catch (e) {
        } finally {
        }
    
        try {
          recognition.onstart = function () {
            microphone.style.pointerEvents = "none";
            microphone.style.opacity = 0;
          };
          recognition.onerror = function (event) {
            console.log(event.error);
          };
          recognition.onspeechend = function () {
            microphone.style.pointerEvents = "auto";
            microphone.style.opacity = 1;
            recognition.stop();
          };
          recognition.onend = function () {
            microphone.style.pointerEvents = "auto";
            microphone.style.opacity = 1;
            recognition.stop();
          };
          recognition.interimResults = false;
          recognition.onresult = function (event) {
            speechInput.value = speechInput.value + " " + event.results[0][0].transcript;
            var transcript = event.results[0][0].transcript;
            var confidence = event.results[0][0].confidence;
            console.log(transcript, confidence);
          };
        } catch (error) { }
      }
    
      fileClearBtn.addEventListener('click', function (k) {
        k.target.parentElement.style.display = 'none';
        k.target.parentElement.parentElement.children[0].style.display = 'flex';
        k.target.parentElement.parentElement.children[1].style.display = 'flex';
      })
    
      modelFile.addEventListener('change', function (k) {
        console.log(k.target.files[0]);
        uploadedFile = k.target.files[0];
        if (uploadedFile.type == 'text/csv' || uploadedFile.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
          if (uploadedFile.size < (100 * 1000 * 1000)) {
            fileNameParent.style.display = 'block';
            fileNameParent.children[0].innerHTML = uploadedFile.name;
            fileNameParent.parentElement.children[0].style.display = 'none';
            fileNameParent.parentElement.children[1].style.display = 'none';
          } else {
            showToaster('Error', 'Please upload a file which is less than 100 MB', 'toast-top-left');
          }
        } else {
          showToaster('Error', 'Please upload either XLSX or CSV file', 'toast-top-left');
        }
      })
    
      function findDropzone() {
        dropzoneMulti = document.querySelector('#dropzone-multi');
        speechInput = document.getElementById('assistant-chat-input');
        microphone = document.getElementById('microphone');
        if (dropzoneMulti && speechInput && microphone) {
          clearInterval(intervalId);
          myDropzoneMulti = new Dropzone(dropzoneMulti, {
            previewTemplate: previewTemplate,
            parallelUploads: 1,
            maxFilesize: 5,
            addRemoveLinks: true,
            maxFiles: 1
          });
        }
      }
    
      intervalId = setInterval(findDropzone, 1000);
    
      getAssistants();
      // getAssistantModels();
    });
    
    },[])



function startListening() {
  try {
    recognition.start();
    showToaster('Sucess', 'Listening now...', 'toast-top-left');
  } catch (error) { }
}

useEffect( ()=> {
function changeAssistantType() {
  assistant_type = assistantType.value;
  if (assistant_type == "dialogflow") {
    openAIModelParent.style.display = 'none';
    openAIInstructionsParent.style.display = 'none';
    openAIAPIKeyParent.style.display = 'none';
    openAIFilesParent.style.display = 'none';
    dialogflowTypeParent.style.display = 'block';
  } else if (assistant_type == "open_ai") {
    openAIModelParent.style.display = 'block';
    openAIInstructionsParent.style.display = 'block';
    openAIAPIKeyParent.style.display = 'block';
    openAIFilesParent.style.display = 'block';
    dialogflowTypeParent.style.display = 'none';
  }
}
  
  },[])



function getAssistants() {
  if (!assistantsFetched) {
    assistantsFetched = true;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          let response_json = JSON.parse(this.responseText);
          if (response_json && response_json.data && response_json.data.length > 0) {
            let assistantsData = response_json.data.map((item) => {
              if (!item.phone_number || item.phone_number == null) {
                item.phone_number = "NA";
              }
              return item;
            })
            response_json.data = response_json.data.filter((item) => {
              return item.status == 'succeeded' || item.status == 'queued' || item.status == 'deleted';
            })
            assistants = response_json.data;
            let assistants_table_body = document.createElement("TBODY");
            let temp_assistants = assistants.map((item) => {
              let tr = document.createElement("TR");
              let first_td = document.createElement("TD");
              first_td.style.display = 'none';
              first_td.classList.add('control');
              // tr.appendChild(first_td);
              let second_td = document.createElement("TD");
              second_td.classList.add('sorting_1');
              second_td.innerHTML = '<span class="fw-medium">' + item.name + '</span>';
              tr.appendChild(second_td);
              let third_td = document.createElement("TD");
              third_td.classList.add('sorting_1');
              third_td.innerHTML = item.model;
              tr.appendChild(third_td);
              let fourth_td = document.createElement("TD");
              fourth_td.classList.add('sorting_1');
              fourth_td.innerHTML = item.instructions;
              tr.appendChild(fourth_td);
              let fifth_td = document.createElement("TD");
              fifth_td.classList.add('sorting_1');
              fifth_td.innerHTML = item.type;
              tr.appendChild(fifth_td);
              let sixth_td = document.createElement("TD");
              sixth_td.classList.add('sorting_1');
              sixth_td.innerHTML = '<div class="d-flex align-items-center"><a data-bs-toggle="modal" data-bs-target="#testAssistantModal" href="javascript:;" class="text-body"><i data-bs-toggle="tooltip" data-bs-placement="left" title="Test this assistant" onclick="testAssistantModal(' + item.id + ')" class="ti ti-player-play ti-sm me-2"></i></a> <a data-bs-toggle="modal" data-bs-target="#deleteAssistantModal" href="javascript:;" class="text-body delete-record"><i onclick="deleteAssistantModal(' + item.id + ')" class="ti ti-trash ti-sm mx-2"></i></a></div>';
              if (item.status == 'queued') {
                sixth_td.innerHTML = '<div class="d-flex align-items-center"><a data-bs-toggle="tooltip" data-bs-placement="left" title="Refresh status" class="text-body delete-record"><i onclick="refreshStatus(' + item.id + ')" class="ti ti-refresh ti-sm mx-2 pointer"></i></a></div>'
              }
              // sixth_td.innerHTML = '<div class="d-flex align-items-center"><a data-bs-toggle="modal" data-bs-target="#updateAssistantModal" href="javascript:;" class="text-body"><i onclick="updateAssistantModal(' + item.id + ')" class="ti ti-edit ti-sm me-2"></i></a> <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasTestAssistant" aria-controls="offcanvasTestAssistant" href="javascript:;" class="text-body"><i data-bs-toggle="tooltip" data-bs-placement="left" title="Test this assistant" onclick="testAssistantModal(' + item.id + ')" class="ti ti-player-play ti-sm me-2"></i></a> <a data-bs-toggle="modal" data-bs-target="#deleteAssistantModal" href="javascript:;" class="text-body delete-record"><i onclick="deleteAssistantModal(' + item.id + ')" class="ti ti-trash ti-sm mx-2"></i></a></div>';
              tr.appendChild(sixth_td);
              assistants_table_body.appendChild(tr);
              return item;
            })
            let table_parent = document.getElementsByClassName('datatables-assistants');
            if (table_parent && table_parent.length > 0) {
              try {
                let loader = document.getElementById('assistants-loader');
                loader.style.display = "none";
              } catch (error) {
              }
              let prev_body = table_parent[0].getElementsByTagName("TBODY")[0];
              try {
                if (prev_body && prev_body.parentElement) {
                  prev_body.parentElement.removeChild(prev_body);
                }
              } catch (error) { }
              table_parent[0].appendChild(assistants_table_body);
            }
            let temp_data = response_json.data.map((item) => {
              let model_option = document.createElement("OPTION");
              model_option.innerHTML = item.name;
              model_option.value = item.model;
              if (item.status == 'succeeded') {
                modelType.appendChild(model_option);
              }
              return item;
            })
          } else {
            try {
              emptyAssistantsParent.style.display = 'block';
              let loader = document.getElementById('assistants-loader');
              loader.style.display = "none";
            } catch (error) {
            }
          }
        } else if (this.status === 401) {
          window.location.href = "/login.html";
        } else {
          try {
            emptyAssistantsParent.style.display = 'block';
            let loader = document.getElementById('assistants-loader');
            loader.style.display = "none";
          } catch (error) {
          }
        }
      }
    });
    xhr.open("GET", "http://34.122.207.207/v1/ai/assistmodels");
    xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
    xhr.send();
  }
}

function updateAssistantModal(id) {
  let main_assistant = assistants;
  main_assistant = main_assistant.filter((item) => {
    return id == item.id;
  })
  updatingAssistant = main_assistant[0];
}

function refreshStatus(id) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        assistantsFetched = false;
        getAssistants();
      } else {
        let response_json = JSON.parse(this.response.body);
        showToaster('Error', response_json.error.message, 'toast-top-left');
      }
    }
  });

  xhr.open("GET", "http://34.122.207.207/v1/ai/finetune/" + id + "/status");
  xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
  xhr.send();
}

function testAssistantModal(id) {
  let main_assistant = assistants;
  main_assistant = main_assistant.filter((item) => {
    return id == item.id;
  })
  testingAssistantChatHistory.innerHTML = "";
  testingAssistant = main_assistant[0];
}

function deleteAssistantModal(id) {
  let main_assistant = assistants;
  main_assistant = main_assistant.filter((item) => {
    return id == item.id;
  })
  deletingAssistant = main_assistant[0];
}

function showToaster(header, body, type) {
  if (!toastAnimationExample) {
    toastAnimationExample = document.querySelector('.toast-ex');
  }
  if (toastAnimation) {
    toastDispose(toastAnimation);
  }
  selectedType = type;
  selectedAnimation = 'animate__pulse';
  toastAnimationExample.classList.add(selectedAnimation);
  toastHeader = toastAnimationExample.querySelector('.me-auto');
  toastBody = toastAnimationExample.querySelector('.toast-body');
  toastHeader.innerHTML = header;
  toastBody.innerHTML = body;
  toastAnimationExample.querySelector('.ti').classList.add(selectedType);
  toastAnimation = new bootstrap.Toast(toastAnimationExample);
  toastAnimation.show();
}

// Dispose toast when open another
function toastDispose(toast) {
  if (toast && toast._element !== null) {
    if (toastPlacementExample) {
      toastPlacementExample.classList.remove(selectedType);
      toastPlacementExample.querySelector('.ti').classList.remove(selectedType);
      DOMTokenList.prototype.remove.apply(toastPlacementExample.classList, selectedPlacement);
    }
    if (toastAnimationExample) {
      toastAnimationExample.classList.remove(selectedType, selectedAnimation);
      toastAnimationExample.querySelector('.ti').classList.remove(selectedType);
    }
    toast.dispose();
  }
}

function updateUserApi() {
  let phone = document.getElementById('update-user-main-phone').value, name = document.getElementById('update-user-main-name').value, email = document.getElementById('update-user-main-email').value, website = document.getElementById('update-user-main-website').value, address = document.getElementById('update-user-main-address').value;
  if (!phone || phone.length == 0) {
    showToaster('Error', 'Phone cannot be empty', 'text-danger');
    return "";
  }
  if (!name || name.length == 0) {
    showToaster('Error', 'Name cannot be empty', 'text-danger');
    return "";
  }
  if (!email || email.length == 0) {
    showToaster('Error', 'Email cannot be empty', 'text-danger');
    return "";
  }
  var data = JSON.stringify({
    phone,
    name,
    email,
    website,
    address,
  });
  let button_loader = document.getElementById('update-user-button-loader');
  button_loader.style.display = 'block';
  button_loader.parentElement.disabled = true;
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response_json = JSON.parse(this.responseText);
      if (this.status === 200 || this.status === 201 || this.status === 202) {
        usersFetched = false;
        getUsers();
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Success', 'User updated successfully', 'text-success');
        document.getElementById('update-user-main-phone').value = '';
        document.getElementById('update-user-main-name').value = '';
        document.getElementById('update-user-main-email').value = '';
        document.getElementById('update-user-main-website').value = '';
        document.getElementById('update-user-main-address').value = '';
        if (document.getElementById('update-user-modal-close')) {
          document.getElementById('update-user-modal-close').click();
        }
      } else if (this.status === 401) {
        window.location.href = "/login.html";
      } else {
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Error', response_json.error.message, 'text-danger');
      }
    }
  });
  xhr.open("PUT", "http://34.122.207.207/v1/users/" + updatingAssistant.id);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
  xhr.send(data);
}

function deleteAssistantApi() {
  let button_loader = document.getElementById('delete-assistant-button-loader');
  button_loader.style.display = 'block';
  button_loader.parentElement.disabled = true;
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response_json = JSON.parse(this.responseText);
      if (this.status === 200 || this.status === 201 || this.status === 202) {
        showToaster('Success', 'Assistant deleted successfully', 'text-success');
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        if (document.getElementById('delete-assistant-modal-close')) {
          document.getElementById('delete-assistant-modal-close').click();
        }
        assistantsFetched = false;
        getAssistants();
      } else if (this.status === 401) {
        window.location.href = "/login.html";
      } else {
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Error', response_json.error.message, 'text-success');
      }
    }
  });
  xhr.open("DELETE", "http://34.122.207.207/v1/ai/assistants/" + deletingAssistant.id);
  xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
  xhr.send();
}

function submitUpload() {
  console.log('test')
}

function createAssistant() {
  if (assistant_type) {
    createDialogflowAgent();
    return "";
  }
  let name = document.getElementById('assistant-name').value, model = modelType.value, instructions = document.getElementById('assistant-instructions').value,
    description = document.getElementById('assistant-description').value, apiKey = document.getElementById('assistant-api-key').value;

  if (!name || name.length === 0) {
    showToaster('Error', 'Name cannot be empty', 'text-danger', 'toast-top-left');
    return "";
  }
  if (!model || model.length === 0) {
    showToaster('Error', 'Select one Model', 'text-danger', 'toast-top-left');
    return "";
  }
  if (!instructions || instructions.length === 0) {
    showToaster('Error', 'Instructions cannot be empty', 'text-danger', 'toast-top-left');
    return "";
  }
  // if (!creativity || creativity.length === 0) {
  //   creativity = 0;
  // }
  if (!uploadedFile || uploadedFile.length == 0) {
    showToaster('Error', 'File cannot be empty', 'text-danger', 'toast-top-left');
    return "";
  }
  if (!apiKey || apiKey.length === 0) {
    apiKey = "";
  }
  if (!description || description.length === 0) {
    description = "";
  }
  let button_loader = document.getElementById('create-assistant-button-loader');
  button_loader.style.display = 'block';
  button_loader.parentElement.disabled = true;
  var data = new FormData();
  data.append("name", name);
  data.append("base_model", model);
  data.append("instructions", instructions);
  // data.append("creativity", creativity);
  data.append("description", description);
  data.append("api_key", apiKey);
  data.append("files", uploadedFile);
  // data.append("website", website);
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response_json = JSON.parse(this.responseText);
      if (this.status === 200 || this.status === 201) {
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Success', 'Agent has been created successfully', 'text-success', 'toast-top-left');
        document.getElementById('assistant-name').value = "";
        document.getElementById('assistant-model').value = "";
        // document.getElementById('assistant-creativity').value = "";
        document.getElementById('assistant-instructions').value = "";
        document.getElementById('assistant-description').value = "";
        document.getElementById('assistant-api-key').value = "";
        // document.getElementById('assistant-website').value = "";
        try {
          closeAddAssistantCanvas.click();
        } catch (error) {
        }
        assistantsFetched = false;
        getAssistants();
      } else if (this.status === 401) {
        window.location.href = "/login.html";
      } else {
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Error', response_json.error.message, 'text-danger', 'toast-top-left');
      }
    }
  });
  xhr.open("POST", "http://34.122.207.207/v1/ai/finetune");
  // xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
  xhr.send(data);
}

function createDialogflowAgent() {
  let name = document.getElementById('assistant-name').value, model = modelType.value, description = document.getElementById('assistant-description').value,
    base_agent = document.getElementById('dialogflow-type').value;
  if (!name || name.length === 0) {
    showToaster('Error', 'Name cannot be empty', 'text-danger', 'toast-top-left');
    return "";
  }
  if (!description || description.length === 0) {
    description = "";
  }
  if (!base_agent || base_agent.length === 0) {
    base_agent = "";
  }
  let button_loader = document.getElementById('create-assistant-button-loader');
  button_loader.style.display = 'block';
  button_loader.parentElement.disabled = true;
  let data = {
    name,
    description,
    type: "import",
    import_agent_name: base_agent
  }
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response_json = JSON.parse(this.responseText);
      if (this.status === 200 || this.status === 201) {
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Success', 'Agent has been created successfully', 'text-success', 'toast-top-left');
        document.getElementById('assistant-name').value = "";
        document.getElementById('assistant-description').value = "";
        document.getElementById('dialogflow-type').value = "";
        try {
          closeAddAssistantCanvas.click();
        } catch (error) {
        }
        assistantsFetched = false;
        getAssistants();
      } else if (this.status === 401) {
        window.location.href = "/login.html";
      } else {
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Error', response_json.error.message, 'text-danger', 'toast-top-left');
      }
    }
  });
  xhr.open("POST", "http://34.122.207.207/v1/dialogflow");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
  xhr.send(JSON.stringify(data));
}

function testAssistantApi() {
  let button_loader = document.getElementById('test-assistant-button-loader'), assistant_chat_input = document.getElementById('assistant-chat-input').value;
  if (!assistant_chat_input || assistant_chat_input.length === 0) {
    showToaster('Error', 'Text cannot be empty', 'toast-top-right');
    return "";
  }
  let our_chat_message = document.createElement('LI');
  our_chat_message.classList.add('chat-message');
  our_chat_message.classList.add('chat-message-right');
  our_chat_message.innerHTML = '<div class="d-flex overflow-hidden"><div class="chat-message-wrapper flex-grow-1"><div class="chat-message-text"><p class="mb-0">' + assistant_chat_input + '</p></div><div class="text-muted mt-1"></div></div></div>';
  testingAssistantChatHistory.appendChild(our_chat_message);
  document.getElementById('assistant-chat-input').value = "";
  let data = {
    model: testingAssistant.model,
    text: assistant_chat_input,
  }
  if (existingCallId && existingCallId.toString().length > 0) {
    data.call_id = existingCallId;
  }
  button_loader.style.display = 'block';
  button_loader.parentElement.disabled = true;
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response_json = JSON.parse(this.responseText);
      if (this.status === 200 || this.status === 201 || this.status === 202) {
        showToaster('Success', 'Response generated successfully', 'text-success');
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        if (response_json.data && response_json.data.message && response_json.data.message.length > 0) {
          let assistant_chat_message = document.createElement('LI');
          assistant_chat_message.classList.add('chat-message');
          assistant_chat_message.innerHTML = '<div class="d-flex overflow-hidden"><div class="chat-message-wrapper flex-grow-1"><div class="chat-message-text"><p class="mb-0">' + response_json.data.message + '</p></div><div class="text-muted mt-1"></div></div></div>';
          testingAssistantChatHistory.appendChild(assistant_chat_message);
        }
        if (response_json.data && response_json.data.call_id && response_json.data.call_id.length > 0) {
          existingCallId = parseInt(response_json.data.call_id);
        }
      } else if (this.status === 401) {
        window.location.href = "/login.html";
      } else {
        button_loader.style.display = 'none';
        button_loader.parentElement.disabled = false;
        showToaster('Error', response_json.error.message, 'text-success');
      }
    }
  });
  xhr.open("POST", "http://34.122.207.207/v1/ai/chat/" + testingAssistant.id);
  xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
}

function getAssistantModels() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      let response_json = JSON.parse(this.responseText);
      if (this.status === 200 || this.status === 201 || this.status === 202) {
        if (response_json.data && response_json.data && response_json.data.length > 0) {
          let temp_data = response_json.data.map((item) => {
            let model_option = document.createElement("OPTION");
            model_option.innerHTML = item.name;
            model_option.value = item.model;
            if (item.status == 'succeeded') {
              modelType.appendChild(model_option);
            }
            return item;
          })
        }
      } else if (this.status === 401) {
        window.location.href = "/login.html";
      } else {
      }
    }
  });
  xhr.open("GET", "http://34.122.207.207/v1/ai/assistmodels");
  xhr.setRequestHeader("Authorization", "Bearer " + window.localStorage.getItem("token"));
  xhr.send();
}