import { API_BASE_URL, ACCESS_TOKEN } from "../constants";

const request = async (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return await fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/user/me",
    method: "GET",
  });
}

export function doHttpRequest(urlVal, requestType, requestBody) {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  if (requestType === "GET") {
    return request({
      url: API_BASE_URL + urlVal,
      method: requestType,
    });
  }

  return request({
    url: API_BASE_URL + urlVal,
    method: requestType,
    body: JSON.stringify(requestBody),
  });
}
