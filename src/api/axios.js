import axios from "axios";

const instance = axios.create({
  baseURL: "https://auth-development-690fe-default-rtdb.firebaseio.com/",
});

export default instance;
