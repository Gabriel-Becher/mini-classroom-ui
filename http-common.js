import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/Aluno",
    headers: {
        "Content-type": "application/json"
    }

});