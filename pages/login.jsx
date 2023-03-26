import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/login.module.css"; 
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const userInput = { email, password }
    
    try {
      const response = await axios.post("/api/user/login", userInput )

      if(response.status === 200) {
        const data = response.data
        alert("logged in")
        Cookies.set("loggedin", "true")
        router.push("/page/dashboard")
      }


    } catch (error) {
      const ErrorMessage = error.response.data
      if(ErrorMessage === "Invalid password"){
        alert("Password sio sahihi");
      }else if(ErrorMessage === "User not found"){
        alert("Email sio sahihi");
      }else if (ErrorMessage === `ValidationError: "password" length must be at least 6 characters long`){
        alert("password length must be at least 6 characters long")
      }else if (ErrorMessage === `ValidationError: "email" must be a valid email`){
        alert("Email must be a valid email")
      }else if (ErrorMessage === `ValidationError: "email" is not allowed to be empty`){
        alert("email is not allowed to be empty")
      }else if (ErrorMessage === `ValidationError: "email" is not allowed to be empty. "password" length must be at least 6 characters long`){
        alert("Enter Email first")
      }else if (ErrorMessage === `ValidationError: "email" must be a valid email. "password" length must be at least 6 characters long`){
        alert("Email must be a valid email !")
      }else if (`ValidationError: "email" must be a valid email. "password" is not allowed to be empty`){
        alert("Password is not allowed to be empty")
      }
      console.log(error);
    }

  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <form
            className={styles.form}
            onSubmit={submitHandler}
          >
            <h1 className={styles.heading}>Login</h1>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className={styles.button}
            >
              Sign in
            </button>

            <div className={styles.textCenter}>
              <p>
                Not a member? <Link href="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
