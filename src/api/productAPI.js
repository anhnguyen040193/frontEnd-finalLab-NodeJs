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
};

export default productAPI;
