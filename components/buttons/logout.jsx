import Cookies from "js-cookie"
import { useRouter } from "next/router";

const Logout = () => {

    const router = useRouter()
    const handleLogout = () => {
      Cookies.remove("loggedin")
      alert("Logged out")
      router.push("/login")
    }

    return ( 
        <>
            <div>
                <button onClick={handleLogout}>LOG OUT</button>
            </div>
        </>
     );
}
 
export default Logout;