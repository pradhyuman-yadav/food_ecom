import axios from "axios";

const instance = axios.create({  
    // Testing API
    baseURL: 
            // ""
        "http://localhost:5001/mini-project-d438f/us-central1/api" //The API (cloud fnc) URL
});

export default instance;
