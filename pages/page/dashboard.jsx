import Link from "next/link";
import Logout from "../../components/buttons/logout"

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <br></br>
      <Link href="/page/about">ABOUT</Link>
      <br></br><br></br>
      <Logout />
    </div>
  );
}

export default Dashboard;
