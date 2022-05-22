
import Notification from "../../components/conf/Notification"
import { useNavigate } from "react-router-dom";
function Logout() {

    const navigate = useNavigate();
    function out() {
        localStorage.removeItem("admin-auth");
        const logout = localStorage.getItem("admin-auth");
        if (!logout) {
            Notification("Logout", "Logout SuccessFull", "success");
            navigate("/admin/login");
        }
    }


    return (
        <>
            <button onClick={out} id='actionbtn' className='btn-delete'>Log Out </button>
        </>
    )



}

export default Logout