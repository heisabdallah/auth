import Link from "next/link";
import Logout from "../../components/buttons/logout"

const About = () => {

    return ( 
        <>
            <h1>About</h1>
            <p>This is about page</p>
            <Link href="/page/dashboard">DASHBOARD</Link>
            <br></br><br></br>
            <Logout />
        </>
     );
}
 
export default About;