import axios from "axios";

export default axios.create({
    baseURL: "https://nse-stocks-test.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});

// const baseURL = "http://localhost:3001/";

//const baseURL = https://nse-stocks-test.herokuapp.com