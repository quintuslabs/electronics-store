import Localstorage from "../utils/LocalStorage";
// import jumpTo from "../modules/Navigation";
import axios from "axios";
const URL = process.env.REACT_APP_API_ENDPOINT;

const API = (config) => {
  //header authorization
  if (Localstorage.user_token) {
    const token = Localstorage.getToken();
    config.headers = {
      authorization: "Bearer " + token,
    };
  }
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: "net work error",
          status: 500,
        };
      }
      if (error.response.status === 401) {
        Localstorage.logout();
        // jumpTo("/login");
        throw error;
      }
      return Promise.reject(error);
    }
  );
  config.baseURL = URL;
  return axios(config);
};
export default API;
