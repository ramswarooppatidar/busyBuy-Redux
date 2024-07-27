import { toast } from "react-toastify";
import { db } from "../../firebaseinit";
import { collection, addDoc, getDoc,doc, getDocs, updateDoc } from "firebase/firestore/lite";
import { authenticateUser } from "./authAction";
import { useDispatch } from "react-redux";

//action costant
export const CREATE_USER = "CREATE_USER";

export const SET_AUTHENTICATE ="SET_AUTHENTICATE"

//action creater
export const create_user_action = (user)=>({
    payload : user,
    type : CREATE_USER 
})

export const setAuthenticate = (isAuthenticated)=>({
    type : SET_AUTHENTICATE,
    payload : isAuthenticated
})

export const userCreate=(name, email, password)=>async (dispatch)=>{
    try {
        const docRef = await addDoc(collection(db, "user"), {
          name: name,
          username: email,
          password: password,
          cart: [],
          myOrder: []
        });
        dispatch(create_user_action({name, email, password}))
        dispatch(setAuthenticate(true))
        dispatch(authenticateUser(email, password))
        console.log("User registered successfull");
    }catch(error){
        console.log("failed to register user", error.message)
    }
}

