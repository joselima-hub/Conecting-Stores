import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const loginRequest = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data; // a resposta do backend { token, user }
};
