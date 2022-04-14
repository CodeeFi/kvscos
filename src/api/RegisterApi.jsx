import axios, { Axios } from "axios";

const server = axios.create({
    // baseURL: "http://13.235.135.48/api/v0"
    baseURL: "http://localhost:3000/api/v0"
})

function registration(data) {
    const config = {
        headers: {
            'content-type': "application.json"
        }
    }
    server.post("/auth/register", payload, config)




}