
import Notification from "../../components/Notification";
const Apihost = process.env.REACT_APP_API_HOST;

async function registration(data) {

    console.log(Apihost);
    const res = await fetch(`${Apihost}/auth/register`, {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)

    });
    const resData = await res.json();
    if (res.ok) {
        Notification("Authrozition", "Registration Sucessfull..", "success");
        console.log(resData);
        return true;
    }
    if (res.status > 200 && res.status <= 405) {
        Notification("Auth fail", "Registration fail", "danger");
        return false;
    }
    if (res.status > 405) {
        Notification("Fail", resData.msg, "warning")
        return false;
    }



}

export default registration;