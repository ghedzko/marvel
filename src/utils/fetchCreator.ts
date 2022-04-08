import axios from "axios";

import { API_URL } from "../constants";

export interface fetchCreatorParams {}

export default class fetchCreator implements fetchCreatorParams {
  token: string;
    constructor() {
    axios.defaults.baseURL = API_URL;
    this.token= "";
  }

  static async get(url: string, params?: any) {
    try {
      const response = await axios.get(`${API_URL}${url}`, { params });
      return response.data;
    } catch (error) {
        console.error(error);
      throw error;
    }
  }
  static async post(url: string, params?: any) {
    try {
      const response = await axios.post(`${API_URL}${url}`, params);
      return response.data;
    } catch (error) {
        console.error(error);
      throw error;
    }
  }
  static async put(url: string, params?: any) {
    try {
      const response = await axios.put(`${API_URL}${url}`, params);
      return response.data;
    } catch (error) {
        console.error(error);
      throw error;
    }
  }
  static async patch(url: string, params?: any) {
    try {
      const response = await axios.patch(`${API_URL}${url}`, params);
      return response.data;
    } catch (error) {
        console.error(error);
      throw error;
    }
  }
  static async delete(url: string, params?: any) {
    try {
      const response = await axios.delete(`${API_URL}${url}`, params);
      return response.data;
    } catch (error) {
        console.error(error);
      throw error;
    }
  }
}
