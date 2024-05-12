export async function readFileDataAsBinary(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.onerror = (err) => {
      reject(err);
    };

    reader.readAsArrayBuffer(file);
  });
}

export const toastr_options = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function callAPI(
  api_method,
  api_endpoint,
  api_data,
  userToken,
  type
) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200 || this.status === 201) {
          var response_json = JSON.parse(this.responseText);
          resolve(response_json);
        } else if (this.status === 401) {
          resolve({ authError: true });
        } else {
          var response_json_error = JSON.parse(this.responseText);
          if (!response_json_error.error) {
            response_json_error.error = true;
          } else {
            response_json_error.apiError = true;
          }
          resolve(response_json_error);
        }
      }
    });
    xhr.open(api_method, api_endpoint);
    if (api_method !== "GET") {
      if (type && type === "nojson") {
      } else {
        xhr.setRequestHeader("Content-Type", "application/json");
      }
    }
    if (userToken && userToken.length > 0) {
      xhr.setRequestHeader("Authorization", "Bearer " + userToken);
    }
    xhr.send(api_data);
  });
}
