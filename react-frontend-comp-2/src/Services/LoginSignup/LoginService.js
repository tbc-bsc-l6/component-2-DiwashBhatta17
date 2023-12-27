import axios from 'axios'
import React from 'react'
import baseURL from '../api'

async function LoginService(loginData) {
  try {
    const response = await axios.post(baseURL+"create", loginData)
    
  } catch (error) {
    throw error;
  }
}

export default LoginService

