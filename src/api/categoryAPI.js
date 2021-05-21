import axiosClient from "./axiosClient";

const categoryAPI = {
  getAll: (params) => {
    const url = "/category";
    return axiosClient.get(url, { params });
  },
};

export default categoryAPI;
