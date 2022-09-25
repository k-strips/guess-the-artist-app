import axios from "axios";

export const appleMusic = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  baseURL: process.env.REACT_APP_BASE_URL,
});
