import { useState } from "react"
import styles from "../styles/SignIn.module.css"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { authenticateUser } from "../redux/actions/authAction";

export const SignIn=()=>{
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    // const {authenticateUser} = useValue()
    const dispatch = useDispatch();

    //navigation
    const navigate = useNavigate()

    //target username
    function handleUsername(e){
        setUsername(e.target.value)
    }

    //target password
    function handlePassword(e){
        setPassword(e.target.value)
    }

    //login
    function login(){
        console.log("function is called successfuly")
            if(username === "" || password === ""){
            toast.error("please enter username and password")
        }else{
            const result = dispatch(authenticateUser(username, password));
            if(!result){
                toast.error("invalid username and password")
            }else{
                console.log("Sucessfully login")
                toast.success("Sucessfully login")
                navigate("/")
            }
        }
    }
    return(
        <>
        <div className={styles.signInContainer}>
            <h1>Sign In</h1>
            <div className={styles.field}>
                <input type="text" 
                placeholder="Enter Email"
                onChange={handleUsername}
                />
                <input type="text" 
                placeholder="Enter Password"
                onChange={handlePassword}
                />
                {/* <button>Sign In</button> */}
                {/* <NavLink onClick={()=>login()} className={styles.button}>
                        sign-in
                </NavLink> */}
                <button className={styles.button} 
                onClick={()=>login()}>Sign-in</button>
            </div>
            <NavLink to="/sigup">
            <h3 className={styles.signUp}>signUp</h3>
            </NavLink>
            
        </div>
        </>
    )
}