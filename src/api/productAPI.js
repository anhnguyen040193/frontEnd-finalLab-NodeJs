import axios from "axios";
import axiosClient from "./axiosClient";

const productAPI = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getOne: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  update: (params) => {
    const url = "/products/update";
    return axiosClient.patch(url, { params });
  },
  upImage: (params) => {
    const url =
      "https://final-lab-nodejs.herokuapp.com/api/products/uploadImage";
    // const url = "http://localhost:3001/api/products/uploadImage";
    return axios.post(url, params, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  addProduct: (params) => {
    const url = "/products/add";
    return axiosClient.post(url, { params });
  },
};

export default productAPI;
