import Link from "next/link";

const Home = () => {

  return (
    <>
      <div>
          <h1>AUTHENTICATION</h1>
          <br></br>
          <Link href="/register">REGISTER</Link>
          <br></br>
          <Link href="/login">LOGIN</Link>
          <br></br>
          <Link href="/page/dashboard">DASHBOARD</Link>
          <br></br>
          <Link href="/page/about">ABOUT</Link>
      </div>
    </>
   );
}

export default Home;