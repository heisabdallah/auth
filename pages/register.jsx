import React, { useState } from "react";
import styles from "../styles/register.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault();

    const userInput = { fname, lname, email, password, confirmPassword }
    
    try {
      const response = await axios.post("/api/user/register", userInput);
      if(response.status === 200) {
        router.push("/login")
      }
    } catch (error) {
        console.log(error);
        
    }
    
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col10}>
          <form className={styles.form} onSubmit={submitHandler}>
                <h1 className="mb-4">Register</h1>

                <div className={styles.formOutline}>
                <label className={styles.formLabel} htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    className={styles.fonrmControl}
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                </div>
                <div className={styles.formOutline}>
                <label className={styles.formLabel} htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    className={styles.fonrmControl}
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                </div>

                <div className={styles.formOutline}>
                <label className={styles.formLabel} htmlFor="email">Email address</label>
                <input
                    type="email"
                    id="email"
                    className={styles.formControl}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className={styles.formOutline}>
                <label className={styles.formLabel} htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className={styles.formContro}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className={styles.formOutline}>
                <label className={styles.formLabel} htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    className={styles.formContro}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </div>

                <button
                type="submit"
                className={styles.btn}
                >
                Register
                </button>
          </form>
        </div>
      </div>
    </div>
)}
export default Register;