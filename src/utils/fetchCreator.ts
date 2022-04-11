import axios from "axios";

import { MARVEL_URL, MARVEL_AUTH } from "../constants";

export interface fetchCreatorParams {}

export default class fetchCreator implements fetchCreatorParams {
  token: string;
  constructor() {
    axios.defaults.baseURL = MARVEL_URL;
    this.token = "";
  }

  async get(url: string | null, params?: any) {
    try {
      const response = await axios.get(`${MARVEL_URL}${url}${MARVEL_AUTH}`, {
        params,
      });
      console.log({ response });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  static async post(url: string, params?: any) {
    try {
      const response = await axios.post(
        `${MARVEL_URL}${url}${MARVEL_AUTH}`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  static async put(url: string, params?: any) {
    try {
      const response = await axios.put(
        `${MARVEL_URL}${url}${MARVEL_AUTH}`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async patch(url: string, params?: any) {
    try {
      const response = await axios.patch(
        `${MARVEL_URL}${url}${MARVEL_AUTH}`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async delete(url: string, params?: any) {
    try {
      const response = await axios.delete(
        `${MARVEL_URL}${url}${MARVEL_AUTH}`,
        params
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
