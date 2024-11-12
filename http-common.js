import axios from "axios";

export default axios.create({
  baseURL: "http://34.95.249.49",
  headers: {
    "Content-type": "application/json",
  },
});
