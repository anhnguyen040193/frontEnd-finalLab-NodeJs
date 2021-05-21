import axiosClient from "./axiosClient";

const productAPI = {
  getAll: (params) => {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
};

export default productAPI;
