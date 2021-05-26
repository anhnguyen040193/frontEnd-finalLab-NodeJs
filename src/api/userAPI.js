import axios from "axios";
import axiosClient from "./axiosClient";

const userAPI = {
  getAll: (params) => {
    const url = "/users";
    return axiosClient.get(url, { params });
  },
  upImage: (params) => {
    // const url = "https://final-lab-nodejs.herokuapp.com/api/users/uploadImage";
    const url = "http://localhost:3001/api/users/uploadImage";
    return axios.post(url, params, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default userAPI;
