// actionTypes.js
import { toast } from "react-toastify";
import { db } from "../../firebaseinit";
import { collection, getDocs} from "firebase/firestore/lite";
import { SET_CART_CART, ADD_TO_CART } from "./cartAction";

export const SET_USER = 'SET_USER';
export const SET_AUTHENTICATE = 'SET_AUTHENTICATE';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_MY_ORDER = 'SET_MY_ORDER';
export const SET_CART = 'SET_CART';

export const setUser = (users) => ({
  type: SET_USER,
  payload: users,
});

export const setAuthenticate = (status) => ({
  type: SET_AUTHENTICATE,
  payload: status,
});

export const setUserId = (id) => ({
  type: SET_USER_ID,
  payload: id,
});

export const setMyOrder = (order) => ({
  type: SET_MY_ORDER,
  payload: order,
});

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

export const authenticateUser = (username, password) => {
  return async (dispatch, getState) => {
    const docRef = collection(db, 'user');
    const docSnap = await getDocs(docRef);
    const allUsers = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // dispatch(setUser(allUsers));

    const foundUser = allUsers.find(
      (usr) => usr.username === username && usr.password === password
    );

    if (foundUser) {
      console.log("userDtaa : ", foundUser)
      dispatch(setAuthenticate(true));
      console.log("foundUser_id", foundUser.id)
      dispatch(setUserId(foundUser.id));
      console.log("foundUser_cart", foundUser.cart)
      // dispatch(setMyOrder(foundUser.myOrder || []));
       dispatch({
        type: SET_MY_ORDER,
        payload: { order: foundUser.myOrder || [] }
      });
      // dispatch(setCart(foundUser.cart || []));
      dispatch({
        type: SET_CART,
        payload: { cart: foundUser.cart || [] }
      });

      //calling methos of cart action
      dispatch({
        type: SET_CART_CART,
        payload: { cart: foundUser.cart || [] }
      });
      // return true;
    } else {
      dispatch(setAuthenticate(false));
      // return false;
    }
  };
};

export const logout = () => async (dispatch) => {
  // dispatch(setMyOrder([]));
  dispatch(setAuthenticate(false));
  // dispatch(setUserId(0));
};



