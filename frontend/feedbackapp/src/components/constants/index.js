export const API_BASE_URL = "http://localhost:9022";
export const API_FRONTEND_URL = "http://localhost:3000";
export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

export const SUBMIT_FORM = "/form/submit";
export const SUBMIT_POLL = "/poll/submit";

export const FILL_FORM_PATH = "/form/fill";
export const FILL_POLL_PATH = "/poll/fill";

export const FILL_FORM_URL = API_FRONTEND_URL + "/form/fill";
export const FILL_POLL_URL = API_FRONTEND_URL + "/poll/fill";

export const GET_USER_FORMS = "/user/forms";
export const GET_USER_POLLS = "/user/polls";

export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
