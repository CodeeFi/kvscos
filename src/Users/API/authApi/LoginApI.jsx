
import Notification from "../../components/Notification";
import api from "../../../API/useApi"
export default async function login(data) {
    const ApiHost = process.env.REACT_APP_API_HOST
    const res = await fetch(`${ApiHost}/auth/login`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const resp = await res.json();
    if (res.ok) {
        Notification("Authorazition", "login Sucessfully", "success")
        localStorage.setItem("userInfo", JSON.stringify(resp));
        api.setheader(resp.token);
        return resp;
    }
    if (res.status > 200) {
        Notification("Authorazition", resp.msg, "danger");
        console.log(resp);
        return false
    }

}

