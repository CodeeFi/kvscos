import axios from "axios";

const server = axios.create({
    // baseURL: "http://13.235.135.48/api/v0"
    baseURL: "http://localhost:3000/api/v0"
})


export default function registration(data) {
    console.log(process.env.REACT_APP_API_HOST);
    const config = {
        headers: {
            'content-type': "application.json"
        }
    }
    server.post("/auth/register", config)




}

