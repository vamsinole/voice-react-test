// import React from 'react'
import React, { useState, useRef, useEffect } from 'react'
import env from '../../../config';
import './Styles.scss';
import { USER_ENDPOINTS } from '../../../config/enpoints';
import axios from 'axios';
import { Link } from 'react-router-dom'
import NewAssistantBar from '../../Components/NewAssistantBar';
import NewAssistantHelpBar from '../../Components/NewAssistantHelpBar';
import SettingControls from '../../Components/SettingControls';



const UsersControls = () => {

  const [fileloading, setfileLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [showToastMessge, setShowToastMessge] = useState(false);
  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const [knowledge, setKnowledge] = useState([]);
  const [files, setFiles] = useState([]);
  const [urls, setUrls] = useState([]);
  const [faq, setFaq] = useState([]);



  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValuedrop, setSelectedValuedrop] = useState('');

  const [selectedslno, setSelectedslno] = useState('');
  


  const baseurl = env.baseUrl;
  const endpoint = USER_ENDPOINTS.getKnowledge;

  const token = localStorage.getItem('token');
  console.log("token", token);

  useEffect(() => {

    fetchVoiceAgents();
  }, []);
  
    const fetchVoiceAgents = async () => {
      try {
        const response = await axios.get(baseurl + endpoint, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("responceorg", response.data.data.urls);
        setKnowledge(response.data.data);
        setFiles(response.data.data[0].files)
        setUrls(response.data.data[0].urls)
        setFaq(response.data.data[0].faqs)


      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };


  const handleSelectChange = (event) => {
    
     setSelectedValue(event.target.value)
    let obj = JSON.parse(event.target.value);
    setSelectedValuedrop(obj.id)
    console.log("selectedvalue",obj.id);
    setFiles(obj.files)
    setUrls(obj.urls)
    setFaq(obj.faqs)
  };


  const TblData = [
    {
      sno: "1",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
    {
      sno: "2",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
  ];
  const UrlTblData = [
    {
      sno: "1",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
    {
      sno: "2",
      url: "https://storage.googleapis.com/voice-knowledge-base/voice-knowledge-base/user-2/kb-2/1713890809351-Screenshot_20230114_133403.png",
      action: ''
    },
  ];
  const FaqTblData = [
    {
      sno: "1",
      question: "What is your name",
      answer: "Mumtaz",
      action: ''
    },
    {
      sno: "1",
      question: "What is your name",
      answer: "Mumtaz",
      action: ''
    },
  ];

 
 

// toggle dropdown menu
const [show, setShow] = useState(false);
const dropdownRef = useRef(null);


// This hook handles clicks outside of the dropdown to close it
useEffect(() => {
    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShow(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [dropdownRef]);



const [isColumnVisible, setIsColumnVisible] = useState(false);

// Toggle the visibility and adjust classes
const toggleColumn = () => {
  setIsColumnVisible(!isColumnVisible);
};



const [formData, setFormData] = useState({
  knowledgename: '',
  url:'',
  question:'',
  answer:'',
  urls:''
});


const handleSubmit = async (event) => {
  event.preventDefault();
  // Do something with formData, for example, send it to an API
  console.log("formdata",formData);

  const createKnowledge = USER_ENDPOINTS.getKnowledge;
  console.log("formdata",formData);
  try {
    const response =  await axios.post(baseurl+createKnowledge,{"name": formData.knowledgename},
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

const data = response.data.data.token;

      fetchVoiceAgents();
      setShowToast(true);
      setShowToastMessge("Created");
console.log("dataapi",data)
//localStorage.setItem('token', token);

//navigate('/assistant');

  } catch (error) {
    console.error('Error fetching users:', error);
  }


};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleClick = async (value) => {
  // Do something with the value, like sending it to an API or updating state
  console.log('Clicked with value:', value);
  setSelectedslno(value.sno)
  const createKnowledge = USER_ENDPOINTS.getKnowledge;

  try {
    const response =  await axios.post(baseurl+createKnowledge+'/'+value.sno,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

const data = response.data.data.token;
console.log("dataapi",data)
//localStorage.setItem('token', token);

//navigate('/assistant');

  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


const handleSubmitUrl = async (event) => {
  event.preventDefault();
console.log("selectedValue",selectedValuedrop)
  const addurl = USER_ENDPOINTS.getKnowledge;
  console.log("formdata", formData);
  try {
    const response = await axios.post(baseurl + addurl+'/'+selectedValuedrop+'/add_file', {
      type:'urls',
      urls:[{url:formData.url}]
    },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      fetchVoiceAgents();
    setShowToast(true);
    setShowToastMessge("Url Added");
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const handleSubmitfaq = async (event) => {
  event.preventDefault();
console.log("selectedValue",selectedValuedrop)
  const addurl = USER_ENDPOINTS.getKnowledge;
  console.log("formdata", formData);
  try {
    const response = await axios.post(baseurl + addurl+'/'+selectedValuedrop+'/add_file', {
      type:'faqs',
      faqs:[{question:formData.question,answer:formData.answer}]
    },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      fetchVoiceAgents();
    setShowToast(true);
    setShowToastMessge("Url Added");
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const [selectedFile, setSelectedFile] = useState(null);
const [binaryData, setBinaryData] = useState(null);

const handleFileChange = (event) => {
  setSelectedFile(event.target.files[0]);
  // const reader = new FileReader();

  // reader.onload = (event) => {
  //   const result = event.target.result;
  //   setBinaryData(result); // Store the binary data in state
  // };
};

const handleSubmitfile = async (event) => {
  event.preventDefault();
  setfileLoading(true)
  if (!selectedFile) {
    console.error('No file selected');
    return;
  }

  //const formData = new FormData();
 //formData.append('file', selectedFile);
console.log("selectedFile",selectedFile);

console.log("selectedValue",selectedValuedrop)
  const addurl = USER_ENDPOINTS.getKnowledge;
  console.log("formdatafiles", formData);
  try {
    const response = await axios.post(baseurl + addurl+'/'+selectedValuedrop+'/add_file', {
      type:'files',
      urls:selectedFile
    },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      fetchVoiceAgents();
    setShowToast(true);
    setShowToastMessge("Url Added");
    setfileLoading(false)
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
//selectedslno

const [expanded, setExpanded] = useState(false);

    const toggleExpandCollapse = () => {
        setExpanded(!expanded);
    };

    // Your actual data structure
    const data = [
        {
            title: 'CEO',
            children: [
                {
                    title: 'Manager',
                    children: [
                        { title: 'Team Lead' },
                        { title: 'Recruiter' }
                    ]
                },
                { title: 'Test' }
            ]
        }
    ];

    const renderTree = (items) => {
        return items.map((item, index) => (
            <div key={index}>
                <div onClick={() => setExpanded(!expanded)}>
                    {item.title}
                </div>
                {expanded && item.children && (
                    <div>{renderTree(item.children)}</div>
                )}
            </div>
        ));
        }

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
        <SettingControls />
          <div className="layout-page">
          <NewAssistantBar/>
            <div class="content-wrapper">
              <div class="container-fluid flex-grow-1 container-p-y pt-0">
                
                <div className='row'>
                  <div className=''>
                      
                  </div>
                  <div className='py-4'>
                    <div class="nav-align-top nav-tabs-shadow mb-4">
                      <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                          <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-top-users" aria-controls="navs-top-users" aria-selected="true">
                            Users
                          </button>
                        </li>
                        <li class="nav-item">
                          <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-top-profiles" aria-controls="navs-top-profiles" aria-selected="false">
                            Profiles
                          </button>
                        </li>
                        <li class="nav-item">
                          <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-top-roles" aria-controls="navs-top-roles" aria-selected="false">
                            Roles
                          </button>
                        </li>
                        <li class="nav-item">
                          <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                            data-bs-target="#navs-top-compliance" aria-controls="navs-top-compliance" aria-selected="false">
                            Compliance
                          </button>
                        </li>
                      </ul>
                      <div class="tab-content setting-controls">
                        <div class="tab-pane fade show active" id="navs-top-users" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header row">
                              <div class="col-4">
                                <ul class="nav nav-tabs" role="tablist">
                                  <li class="nav-item">
                                    <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab"
                                      data-bs-target="#navs-top-usersActive" aria-controls="navs-top-usersActive" aria-selected="true">
                                      Active <span className='badge bg-white rounded-pill ms-auto text-bg-light p-1'>1</span>
                                    </button>
                                  </li>
                                  <li class="nav-item">
                                    <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                      data-bs-target="#navs-top-usersInactive" aria-controls="navs-top-usersInactiv" aria-selected="false">
                                      Inactive <span className='badge bg-info-subtle p-1 rounded-pill ms-auto text-bg-light'>20</span>
                                    </button>
                                  </li>
                                  <li class="nav-item">
                                    <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                      data-bs-target="#navs-top-usersInvited" aria-controls="navs-top-usersInvited" aria-selected="false">
                                      Invited
                                    </button>
                                  </li>
                                  <li class="nav-item">
                                    <button type="button" class="nav-link" role="tab" data-bs-toggle="tab"
                                      data-bs-target="#navs-top-deleted" aria-controls="navs-top-deleted" aria-selected="false">
                                      Deleted <span className='badge bg-info-subtle p-1 rounded-pill ms-auto text-bg-light'>20</span>
                                    </button>
                                  </li>
                                </ul>
                              </div>
                              <div class="col-4">

                              <button type="button" class="btn btn-primary pull-right" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasAddAgent" aria-controls="offcanvasAddAgent">
                    <span class="ti-xs ti ti-plus me-1" ></span>New User
                  </button>


                                {/* <button type="button" class="btn btn-primary pull-right rounded-pill" data-bs-toggle="modal"
                                  data-bs-target="#newUser">
                                  <span class="ti-xs ti ti-plus me-1"></span>New User
                                </button> */}
                              </div>
                            </div>
                            <div class="card-datatable table-responsive">
                              <div className='results'>
                              <div class="tab-content">
                                <div class="tab-pane fade show active" id="navs-top-usersActive" role="tabpanel">
                                <div class="col-12">
                                <div class="card-header row">
                                <div class="card">
                                <div class="table-responsive text-nowrap">
                                  <table class="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Profile</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                          <span class="fw-medium">Kumar</span>
                                        </td>
                                        <td>kumar31@bluespacetech.com</td>
                                        <td>
                                          CEO
                                        </td>
                                        <td>Super Admin</td>
                                        <td className='justify-content-end d-flex'>
                                        <button type="button" class="btn pull-right" data-bs-toggle="offcanvas"
                                          data-bs-target="#offcanvasEditUser" aria-controls="offcanvasEditUser">
                                          <i class="ti ti-edit ti-sm me-2"></i>
                                        </button>
                                          </td>
                                      </tr>
                                      <tr>
                                      <td>
                                          <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                          <span class="fw-medium">Kumar</span>
                                        </td>
                                        <td>kumar31@bluespacetech.com</td>
                                        <td>
                                          CEO
                                        </td>
                                        <td>Super Admin</td>
                                      </tr>
                                      <tr>
                                      <td>
                                          <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                          <span class="fw-medium">Kumar</span>
                                        </td>
                                        <td>kumar31@bluespacetech.com</td>
                                        <td>
                                          CEO
                                        </td>
                                        <td>Super Admin</td>
                                      </tr>
                                      <tr>
                                      <td>
                                          <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                          <span class="fw-medium">Kumar</span>
                                        </td>
                                        <td>kumar31@bluespacetech.com</td>
                                        <td>
                                          CEO
                                        </td>
                                        <td>Super Admin</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div class="tab-pane fade show " id="navs-top-usersInactive" role="tabpanel">
                                  <div class="col-12">
                                    <div class="card-header row">
                                    <div class="card">
                                    <div class="table-responsive text-nowrap">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Profile</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-pane fade show " id="navs-top-usersInvited" role="tabpanel">
                                  <div class="col-12">
                                    <div class="card-header border-bottom row">
                                    <div class="card">
                                    <div class="table-responsive text-nowrap">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Profile</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="tab-pane fade show " id="navs-top-deleted" role="tabpanel">
                                  <div class="col-12">
                                    <div class="card-header border-bottom row">
                                    <div class="card">
                                    <div class="table-responsive text-nowrap">
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr>
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Profile</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                          <tr>
                                          <td>
                                              <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">K</i>
                                              <span class="fw-medium">Kumar</span>
                                            </td>
                                            <td>kumar31@bluespacetech.com</td>
                                            <td>
                                              CEO
                                            </td>
                                            <td>Super Admin</td>
                                          </tr>
                                        </tbody>
                                      </table>
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
                        <div class="tab-pane fade show " id="navs-top-profiles" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header border-bottom row">
                              <div class="col-8">
                                <h4 class="card-title mb-3">Profiles</h4>
                                <p>Profile help you define a set of permission</p>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                                  data-bs-target="#newProfile">
                                  <span class="ti-xs ti ti-plus me-1"></span>Create New Role
                                </button>
                              </div>
                            </div>
                            <div class="card-datatable table-responsive">
                            <div class="card-header border-bottom row">
                                    <div class="card">
                                    <div class="table-responsive text-nowrap">
                                      <div className='table-scrollable'>
                                      <table class="table table-bordered">
                                        <thead>
                                          <tr className='position-sticky top-0 z-1 bg-white'>
                                            <th>Profile Name</th>
                                            <th>Profile Description</th>
                                            <th>Modified By</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                            Administrator
                                            </td>
                                            <td>This profile will have all the permission, Users with Administrator  profile will be a...</td>
                                            <td>
                                              -
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                            Standard
                                            </td>
                                            <td>This profile will have all the permission, Users with Administrator  profile will be a...</td>
                                            <td>
                                              -
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                            Recruiter
                                            </td>
                                            <td>This profile will have all the permission, Users with Administrator  profile will be a...</td>
                                            <td>
                                              -
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                            Team Lead
                                            </td>
                                            <td>-</td>
                                            <td>
                                            <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">AN</i>
                                              Alex Noah
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                            Team Lead
                                            </td>
                                            <td>-</td>
                                            <td>
                                            <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">AN</i>
                                              Alex Noah
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                            Team Lead
                                            </td>
                                            <td>-</td>
                                            <td>
                                            <i class="badge px-2 py-2 bg-primary rounded-pill ms-auto me-2">AN</i>
                                              Alex Noah
                                            </td>
                                          </tr>
                                          
                                        </tbody>
                                      </table>
                                      </div>


                                      
                                    </div>
                                    </div>
                                    </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade show " id="navs-top-roles" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header border-bottom row">
                              <div class="col-8">
                                <h4 class="card-title mb-3">Roles</h4>
                                <p>Roles help you define visiblity levels for records in your org.</p>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                                  data-bs-target="#newRole">
                                  <span class="ti-xs ti ti-plus me-1"></span>Create New Role
                                </button>
                                </div>
                            </div>
                            <div class="card-datatable table-responsive">

                            <div class="col-md-6 col-12">
                  <div class="card mb-4">
                    <h5 class="card-header">Basic</h5>
                    <div class="card-body">
                      <div id="jstree-basic">
                        <ul>
                          <li data-jstree='{"icon" : "ti ti-folder"}'>
                            css
                            <ul>
                              <li data-jstree='{"icon" : "ti ti-folder"}'>app.css</li>
                              <li data-jstree='{"icon" : "ti ti-folder"}'>style.css</li>
                            </ul>
                          </li>
                          <li class="jstree-open" data-jstree='{"icon" : "ti ti-folder"}'>
                            img
                            <ul data-jstree='{"icon" : "ti ti-folder"}'>
                              <li data-jstree='{"icon" : "ti ti-folder"}'>bg.jpg</li>
                              <li data-jstree='{"icon" : "ti ti-folder"}'>logo.png</li>
                              <li data-jstree='{"icon" : "ti ti-folder"}'>avatar.png</li>
                            </ul>
                          </li>
                          <li class="jstree-open" data-jstree='{"icon" : "ti ti-folder"}'>
                            js
                            <ul>
                              <li data-jstree='{"icon" : "ti ti-folder"}'>jquery.js</li>
                              <li data-jstree='{"icon" : "ti ti-folder"}'>app.js</li>
                            </ul>
                          </li>
                          <li data-jstree='{"icon" : "ti ti-file-text"}'>index.html</li>
                          <li data-jstree='{"icon" : "ti ti-file-text"}'>page-one.html</li>
                          <li data-jstree='{"icon" : "ti ti-file-text"}'>page-two.html</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>












                            {/* <div>
                              <button onClick={toggleExpandCollapse}>
                                  {expanded ? 'Collapse All' : 'Expand All'}
                              </button>
                              <div>
                                  {renderTree(data)}
                              </div>
                          </div> */}
           
                            </div>
                          </div>
                        </div>
                        <div class="tab-pane fade show " id="navs-top-compliance" role="tabpanel">
                          <div class="col-12">
                            <div class="card-header border-bottom row">
                              <div class="col-8">
                                <h4 class="card-title mb-3">Compliance</h4>
                              </div>
                              <div class="col-4">
                                <button type="button" class="btn btn-primary pull-right" data-bs-toggle="modal"
                                  data-bs-target="#newFaqModal">
                                  <span class="ti-xs ti ti-plus me-1"></span>New FAQ
                                </button>
                              </div>
                            </div>
                            <div class="card-datatable table-responsive">
                                Compliance Main Tab
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <NewAssistantHelpBar/>
          </div>

         {/* New User Modal Start */}


         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasAddAgent"
                        aria-labelledby="offcanvasAddAgentLabel">
                        <div class="offcanvas-header">
                          <h5 id="offcanvasAddAgentLabel" class="offcanvas-title">Add User</h5>
                          <button type="button" id="close-add-agent-canvas" class="btn-close text-reset"
                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                          <form class="add-new-user pt-0" id="addNewUserForm">
                          <div class="modal-body">
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Full Name</label>
                <input type="text" class="form-control" placeholder="Enter Full Name" name="userFullname" aria-label="Enter Full Name" />
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-email">Email</label>
                <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" aria-label="john.doe@example.com" name="userEmail" />
                </div>
                <div class="mb-3">
                <label class="form-label" for="user-role">User Role</label>
                <select id="user-role" class="form-select">
                  <option value="subscriber">Subscriber</option>
                  <option value="editor">Editor</option>
                  <option value="maintainer">Maintainer</option>
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </select>
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Profile</label>
                <input type="text" class="form-control" placeholder="Profile" name="Profile" aria-label="Enter Profile" />
                </div>
                </div>
                <div class="modal-footer">
                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light">Submit</button>
                <button type="reset" class="btn btn-label-secondary waves-effect" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                  
                </div>
                          </form>
                        </div>
                      </div>
         
 
          {/* New User Modal End */}

          {/* New Edit User  End */}
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEditUser"
                        aria-labelledby="offcanvasAddAgentLabel">
                        <div class="offcanvas-header">
                          <h5 id="offcanvasAddAgentLabel" class="offcanvas-title">Update User</h5>
                          <button type="button" id="close-add-agent-canvas" class="btn-close text-reset"
                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                          <form class="add-new-user pt-0" id="addNewUserForm">
                          <div class="modal-body">
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Full Name</label>
                <input type="text" class="form-control" placeholder="Enter Full Name" name="userFullname" aria-label="Enter Full Name" />
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-email">Email</label>
                <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" aria-label="john.doe@example.com" name="userEmail" />
                </div>
                <div class="mb-3">
                <label class="form-label" for="user-role">User Role</label>
                <select id="user-role" class="form-select">
                  <option value="subscriber">Subscriber</option>
                  <option value="editor">Editor</option>
                  <option value="maintainer">Maintainer</option>
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </select>
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Profile</label>
                <input type="text" class="form-control" placeholder="Profile" name="Profile" aria-label="Enter Profile" />
                </div>
                </div>
                <div class="modal-footer">
                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light">Submit</button>
                <button type="reset" class="btn btn-label-secondary waves-effect" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                  
                </div>
                          </form>
                        </div>
                      </div>

          {/* New Edit User  End */}




          {/* New Profile Modal Start */}
          <div class="modal fade" id="newProfile" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  
                </div>
                <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework">
                <div class="modal-body">
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Full Name</label>
                <input type="text" class="form-control" placeholder="Enter Full Name" name="userFullname" aria-label="Enter Full Name" />
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-email">Email</label>
                <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" aria-label="john.doe@example.com" name="userEmail" />
                </div>
                <div class="mb-3">
                <label class="form-label" for="user-role">User Role</label>
                <select id="user-role" class="form-select">
                  <option value="subscriber">Subscriber</option>
                  <option value="editor">Editor</option>
                  <option value="maintainer">Maintainer</option>
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </select>
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Profile</label>
                <input type="text" class="form-control" placeholder="Profile" name="Profile" aria-label="Enter Profile" />
                </div>
                </div>
                <div class="modal-footer">
                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light">Submit</button>
                <button type="reset" class="btn btn-label-secondary waves-effect" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                  
                </div>
                </form>

              </div>
            </div>
          </div>
          {/* New Profile Modal Start */}
          {/* New Role Modal Start */}
          <div class="modal fade" id="newRole" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  
                </div>
                <form class="add-new-user pt-0 fv-plugins-bootstrap5 fv-plugins-framework">
                <div class="modal-body">
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Full Name</label>
                <input type="text" class="form-control" placeholder="Enter Full Name" name="userFullname" aria-label="Enter Full Name" />
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-email">Email</label>
                <input type="text" id="add-user-email" class="form-control" placeholder="john.doe@example.com" aria-label="john.doe@example.com" name="userEmail" />
                </div>
                <div class="mb-3">
                <label class="form-label" for="user-role">User Role</label>
                <select id="user-role" class="form-select">
                  <option value="subscriber">Subscriber</option>
                  <option value="editor">Editor</option>
                  <option value="maintainer">Maintainer</option>
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </select>
                </div>
                <div class="mb-3 fv-plugins-icon-container">
                <label class="form-label" for="add-user-fullname">Profile</label>
                <input type="text" class="form-control" placeholder="Profile" name="Profile" aria-label="Enter Profile" />
                </div>
                </div>
                <div class="modal-footer">
                <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit waves-effect waves-light">Submit</button>
                <button type="reset" class="btn btn-label-secondary waves-effect" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
                  
                </div>
                </form>

              </div>
            </div>
          </div>
          {/* New Role Modal End */}
          
        </div>
      </div>

    </>
  )
}

export default UsersControls