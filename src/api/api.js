import axios from "axios";

export const prepareAuthorization = () => {
  let userData_String = window.localStorage.getItem("VANOA_USER");
  const userData = JSON.parse(userData_String);
  API.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
};

const API = axios.create({
  baseURL: "http://localhost:4000/api/",
});

export default API;
