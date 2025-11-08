import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-ea4d5/us-central1/api",
// deployed amazon clone api rendered link
  baseURL: "https://amazone-api-deploy-84t3.onrender.com",
});

export { axiosInstance };