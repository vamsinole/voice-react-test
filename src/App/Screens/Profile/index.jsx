import { useState } from "react";
import Header from "../../Components/Header";
import NewAssistantBar from "../../Components/NewAssistantBar";
import NewAssistantHelpBar from "../../Components/NewAssistantHelpBar";
import ProfileSettings from "../../Components/ProfileSettings";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USER_ENDPOINTS } from "../../../config/enpoints";
import env from "../../../config";
import { callAPI, toastr_options } from "../../Components/Utils";
import axios from "axios";

const Profile = () => {
  const [userObject, setUserObject] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    type: "",
    role: "",
    department: "",
    notes: "",
    livestatus: "",
    status: "",
    image_url: "",
    country: "",
    currency: "",
    language: "",
    timezone: "",
    firstName: "",
    lastName: "",
    company: {
      name: "",
    },
    state: "",
    zipCode: "",
  });

  const [inputErrors, setInputErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    zipCode: "",
    country: "",
    currency: "",
    language: "",
    timezone: "",
  });

  const baseurl = env.baseUrl;
  const token = localStorage.getItem("token");

  const handleSelectChange = (event) => {
    const { name, value } = event.target;

    // Check if 'name' is defined before accessing it
    if (name) {
      setUserObject({
        ...userObject,
        [name]: value,
      });
    } else {
      console.error("Name is undefined in handleSelectChange");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserObject({
      ...userObject,
      [name]: value,
    });
    // Clear error for the current input
    setInputErrors({
      ...inputErrors,
      [name]: "",
    });
  };

  async function submitProfileChanges() {
    let name = userObject.firstName + " " + userObject.lastName,
      address =
        userObject.address +
        " , " +
        userObject.state +
        " , " +
        userObject.zipCode;

    // Validate each input
    const errors = {};
    if (!userObject.firstName || userObject.firstName.length === 0) {
      errors.firstName = "First name cannot be empty";
    }
    if (!userObject.lastName || userObject.lastName.length === 0) {
      errors.lastName = "Last name cannot be empty";
    }
    if (!userObject.email || userObject.email.length === 0) {
      errors.email = "Email cannot be empty";
    }
    if (!userObject.phone || userObject.phone.length === 0) {
      errors.phone = "Phone cannot be empty";
    }
    if (!address || address.length === 0) {
      errors.address = "Address cannot be empty";
    }
    if (!userObject.state || userObject.state.length === 0) {
      errors.state = "State cannot be empty";
    }
    if (!userObject.zipCode || userObject.zipCode.length === 0) {
      errors.zipCode = "Zip code cannot be empty";
    }
    if (!userObject.country || userObject.country.length === 0) {
      errors.country = "Country cannot be empty";
    }
    if (!userObject.language || userObject.language.length === 0) {
      errors.language = "Language cannot be empty";
    }
    if (!userObject.timezone || userObject.timezone.length === 0) {
      errors.timezone = "Timezone cannot be empty";
    }
    if (!userObject.currency || userObject.currency.length === 0) {
      errors.currency = "Currency cannot be empty";
    }

    // Update input errors state
    setInputErrors(errors);

    // If there are any errors, don't proceed with submission
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Proceed with submission
    const baseurl = env.baseUrl;
    const endpoint = USER_ENDPOINTS.updateprofile;
    const token = localStorage.getItem("token");

    try {
      const response = await axios.put(baseurl + endpoint, userObject, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 200) {
        toast.success("Profile updated successfully", toastr_options);
        // Optionally, you can update the local storage or any state
      } else {
        toast.error(
          response.data.message || "Failed to update profile",
          toastr_options
        );
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating profile", toastr_options);
    }
  }

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <NewAssistantBar />
            <div className="container-fluid">
              <div className="row mt-3">
                <ProfileSettings />
              </div>
            </div>

            <div className="content-wrapper">
              <div className="container-fluid flex-grow-1 container-p-y pt-0">
                <div className="row">
                  <div
                    className="col-md-12  overflow-auto"
                    style={{ maxHeight: "70vh" }}
                  >
                    <div className="card  mb-4">
                      <h5 className="card-header">Profile Details</h5>

                      {/* <!-- Account --> */}
                      <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="../../assets/img/avatars/14.png"
                            alt="user-avatar"
                            className="d-block w-px-100 h-px-100 rounded"
                            id="uploadedAvatar"
                          />
                          <div className="button-wrapper">
                            <label
                              for="upload"
                              className="btn btn-primary me-2 mb-3"
                              tabindex="0"
                            >
                              <span className="d-none d-sm-block">
                                Upload new photo
                              </span>
                              <i className="ti ti-upload d-block d-sm-none"></i>
                              <input
                                type="file"
                                id="upload"
                                className="account-file-input"
                                hidden
                                accept="image/png, image/jpeg"
                              />
                            </label>
                            <button
                              type="button"
                              className="btn btn-label-secondary account-image-reset mb-3"
                            >
                              <i className="ti ti-refresh-dot d-block d-sm-none"></i>
                              <span className="d-none d-sm-block">Reset</span>
                            </button>

                            <div className="text-muted">
                              Allowed JPG, GIF or PNG. Max size of 800K
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-0" />
                      <div className="card-body">
                        <div className="col-12">
                          <div className="row">
                            <div className="mb-3 col-md-6">
                              <label for="firstName" className="form-label">
                                First Name
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={userObject.firstName}
                                onChange={handleInputChange}
                                autoFocus
                              />
                              {inputErrors.firstName && (
                                <div className="text-danger">
                                  {inputErrors.firstName}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="lastName" className="form-label">
                                Last Name
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                name="lastName"
                                value={userObject.lastName}
                                onChange={handleInputChange}
                                id="lastName"
                              />
                              {inputErrors.lastName && (
                                <div className="text-danger">
                                  {inputErrors.lastName}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="email" className="form-label">
                                E-mail
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                                value={userObject.email}
                                onChange={handleInputChange}
                                disabled
                                placeholder="john.doe@example.com"
                              />
                              {inputErrors.email && (
                                <div className="text-danger">
                                  {inputErrors.email}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="organization" className="form-label">
                                Organization
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="organization"
                                name="organization"
                                value={userObject.company.name}
                                disabled
                              />
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label" for="phoneNumber">
                                Phone Number
                              </label>
                              <div className="input-group input-group-merge">
                                <span className="input-group-text">
                                  US (+1)
                                </span>
                                <input
                                  type="text"
                                  id="phoneNumber"
                                  name="phone"
                                  className="form-control"
                                  placeholder="202 555 0111"
                                  value={userObject.phone}
                                  onChange={handleInputChange}
                                />
                              </div>
                              {inputErrors.phone && (
                                <div className="text-danger">
                                  {inputErrors.phone}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="address" className="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={userObject.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                              />
                              {inputErrors.address && (
                                <div className="text-danger">
                                  {inputErrors.address}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="state" className="form-label">
                                State
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                id="state"
                                name="state"
                                value={userObject.state}
                                onChange={handleInputChange}
                                placeholder="California"
                              />
                              {inputErrors.state && (
                                <div className="text-danger">
                                  {inputErrors.state}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="zipCode" className="form-label">
                                Zip Code
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="zipCode"
                                name="zipCode"
                                placeholder="231465"
                                value={userObject.zipCode}
                                onChange={handleInputChange}
                                maxLength="6"
                              />
                              {inputErrors.zipCode && (
                                <div className="text-danger">
                                  {inputErrors.zipCode}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label className="form-label" for="country">
                                Country
                              </label>
                              <select
                                name="country"
                                id="country"
                                className="select2 form-select"
                                value={userObject.country}
                                onChange={handleSelectChange}
                              >
                                <option value="">Select</option>
                                <option value="Australia">Australia</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Canada">Canada</option>
                                <option value="China">China</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Japan">Japan</option>
                                <option value="Korea">
                                  Korea, Republic of
                                </option>
                                <option value="Mexico">Mexico</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Russia">
                                  Russian Federation
                                </option>
                                <option value="South Africa">
                                  South Africa
                                </option>
                                <option value="Thailand">Thailand</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">
                                  United Arab Emirates
                                </option>
                                <option value="United Kingdom">
                                  United Kingdom
                                </option>
                                <option value="United States">
                                  United States
                                </option>
                              </select>

                              {inputErrors.country && (
                                <div className="text-danger">
                                  {inputErrors.country}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="language" className="form-label">
                                Language
                              </label>
                              <select
                                id="language"
                                name="language"
                                className="select2 form-select"
                                value={userObject.language}
                                onChange={handleSelectChange}
                              >
                                <option value="">Select Language</option>
                                <option value="">Select Language</option>
                                <option value="en">English</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="pt">Portuguese</option>
                              </select>
                              {inputErrors.language && (
                                <div className="text-danger">
                                  {inputErrors.language}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="timeZones" className="form-label">
                                Timezone
                              </label>
                              <select
                                id="timeZones"
                                className="select2 form-select"
                                name="timezone"
                                value={userObject.timezone}
                                onChange={handleSelectChange}
                              >
                                <option value="">Select Timezone</option>
                                <option value="">Select Timezone</option>
                                <option value="-12">
                                  (GMT-12:00) International Date Line West
                                </option>
                                <option value="-11">
                                  (GMT-11:00) Midway Island, Samoa
                                </option>
                                <option value="-10">(GMT-10:00) Hawaii</option>
                                <option value="-9">(GMT-09:00) Alaska</option>
                                <option value="-8">
                                  (GMT-08:00) Pacific Time (US & Canada)
                                </option>
                                <option value="-8">
                                  (GMT-08:00) Tijuana, Baja California
                                </option>
                                <option value="-7">(GMT-07:00) Arizona</option>
                                <option value="-7">
                                  (GMT-07:00) Chihuahua, La Paz, Mazatlan
                                </option>
                                <option value="-7">
                                  (GMT-07:00) Mountain Time (US & Canada)
                                </option>
                                <option value="-6">
                                  (GMT-06:00) Central America
                                </option>
                                <option value="-6">
                                  (GMT-06:00) Central Time (US & Canada)
                                </option>
                                <option value="-6">
                                  (GMT-06:00) Guadalajara, Mexico City,
                                  Monterrey
                                </option>
                                <option value="-6">
                                  (GMT-06:00) Saskatchewan
                                </option>
                                <option value="-5">
                                  (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                                </option>
                                <option value="-5">
                                  (GMT-05:00) Eastern Time (US & Canada)
                                </option>
                                <option value="-5">
                                  (GMT-05:00) Indiana (East)
                                </option>
                                <option value="-4">
                                  (GMT-04:00) Atlantic Time (Canada)
                                </option>
                                <option value="-4">
                                  (GMT-04:00) Caracas, La Paz
                                </option>
                              </select>
                              {inputErrors.timezone && (
                                <div className="text-danger">
                                  {inputErrors.timezone}
                                </div>
                              )}
                            </div>
                            <div className="mb-3 col-md-6">
                              <label for="currency" className="form-label">
                                Currency
                              </label>
                              <select
                                id="currency"
                                className="select2 form-select"
                                name="currency"
                                value={userObject.currency}
                                onChange={handleSelectChange}
                              >
                                <option value="">Select Currency</option>
                                <option value="usd">USD</option>
                                <option value="euro">Euro</option>
                                <option value="pound">Pound</option>
                                <option value="bitcoin">Bitcoin</option>
                              </select>
                              {inputErrors.currency && (
                                <div className="text-danger">
                                  {inputErrors.currency}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="mt-2">
                            <button
                              type="submit"
                              className="btn btn-primary me-2"
                              onClick={submitProfileChanges}
                            >
                              Save changes
                            </button>
                            {/* <button
                              type="reset"
                              className="btn btn-label-secondary"
                            >
                              Reset
                            </button> */}
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Account --> */}
                    </div>
                    {false && (
                      <div className="card">
                        <h5 className="card-header">Delete Account</h5>
                        <div className="card-body">
                          <div className="mb-3 col-12 mb-0">
                            <div className="alert alert-warning">
                              <h5 className="alert-heading mb-1">
                                Are you sure you want to delete your account?
                              </h5>
                              <p className="mb-0">
                                Once you delete your account, there is no going
                                back. Please be certain.
                              </p>
                            </div>
                          </div>
                          <form
                            id="formAccountDeactivation"
                            onSubmit={(e) => e.preventDefault()}
                          >
                            <div className="form-check mb-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="accountActivation"
                                id="accountActivation"
                              />
                              <label
                                className="form-check-label"
                                for="accountActivation"
                              >
                                I confirm my account deactivation
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn btn-danger deactivate-account"
                            >
                              Deactivate Account
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <NewAssistantHelpBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
