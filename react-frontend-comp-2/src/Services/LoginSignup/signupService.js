import axios from "axios";
import React from "react";
import baseURL from "../Apis/api";

async function signupService(signupData) {
  try {
    const response = await axios.post(baseURL + "create", signupData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default signupService;
