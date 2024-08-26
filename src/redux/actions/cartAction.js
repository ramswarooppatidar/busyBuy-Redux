import { toast } from "react-toastify";
import { db } from "../../firebaseinit";
import { getDoc, doc, updateDoc } from "firebase/firestore/lite";

//import action from auth
import { setCart } from "./authAction";
import { SET_MY_ORDER } from "./authAction";


export const ADD_TO_CART = "ADD_TO_CART";
export const DECRESE_QTY = "DECRESE_QTY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_TOTAL = "SET_TOTAL"
export const SET_CART_CART = "SET_CART_CART"

export const addToCart_action = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const decreseQty_acton = (item) => ({
  type: DECRESE_QTY,
  payload: item
});

export const removeFromCart_action = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item
});
export const set_total = (total)=>({
  type : SET_TOTAL,
  payload : total
})
export const set_cart_cart = (items)=>({
  type : SET_CART_CART,
  payload : items
})

const updateFireStoreCart = async (userId, updatedCart) => {
  const docRef = doc(db, "user", userId);
  await updateDoc(docRef, { cart: updatedCart });
  console.log("Cart updated in Firestore");
};

export const addToCart = (item, userId) => async (dispatch, getState) => {
//   const {cart} = getState().cart
  const state = getState();
  const cart = state.cart.cart; 
  console.log("add to cart , cart", cart)
  console.log("add to cart-type , cart", typeof(cart))
  console.log("add to cart, item value ", item);
  console.log(" add to cart, userid ", userId)
  if (!Array.isArray(cart)) {
    console.error("cart is not an array");
    return;
  }
  const index = cart.findIndex((crt) => crt.id === item.id);
  let updatedCart;
  if (index === -1) {
    updatedCart = [...cart, { ...item, qty: 1 }];
  } else {
    updatedCart = [...cart];
    updatedCart[index] = { ...updatedCart[index], qty: updatedCart[index].qty + 1 };
  }
  try {
    console.log("userid is :", userId)
    await updateFireStoreCart(userId, updatedCart);
    dispatch({
      type: ADD_TO_CART,
      payload: { cart: updatedCart, itemPrice: item.price }
    });
  } catch (error) {
    console.log("Failed to update(add to cart) cart in Firestore", error);
    toast.error("Failed to update (add to cart) cart in Firestore");
  }
};

export const decreseQty = (item, userId) => async (dispatch, getState) => {
  const { cart } = getState().cart;
  const index = cart.findIndex((crt) => crt.id === item.id);
  let updatedCart;
  if (cart[index].qty <= 1) {
    dispatch(removeFromCart(item, userId));
    return;
  }
  if (index !== -1) {
    updatedCart = [...cart];
    updatedCart[index] = { ...updatedCart[index], qty: updatedCart[index].qty - 1 };
  }
  try {
    await updateFireStoreCart(userId, updatedCart);
    dispatch({
      type: DECRESE_QTY,
      payload: { cart: updatedCart, itemPrice: item.price }
    });
  } catch (error) {
    console.log("Failed to update(decrese qty) cart in Firestore", error);
    toast.error("Failed to update(decrese qty) cart in Firestore");
  }
};

export const removeFromCart = (item, userId) => async (dispatch, getState) => {
  const { cart } = getState().cart;
  const index = cart.findIndex((crt) => crt.id === item.id);
  const itemCost = cart[index].qty * item.price;
  const updatedCart = cart.filter((crt) => crt.id !== item.id);

  try {
    await updateFireStoreCart(userId, updatedCart);
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { cart: updatedCart, itemPrice: itemCost }
    });
  } catch (error) {
    console.log("Failed to update(remove from cart) cart in Firestore", error);
    toast.error("Failed to update(remove from) cart in Firestore");
  }
};
export const purchase=(userId, cart)=>async (dispatch, getState)=>{
  // const { cart } = getState().cart;
  try{
    const docRef = doc(db, "user", userId)
    const docSnap = await getDoc(docRef)
    if(docSnap.exists()){
        const userData = docSnap.data();
        console.log("inside purchse cartAction, userId ", userId)
        console.log("user data in purchase ", userData.myOrder)
        const currentMyOrder = userData.myOrder || []

         // Create a new order with the current cart
         const newOrder = {
            date: new Date().toString(),
            items: [...cart],
        };

        const updatedMyOrder = [...currentMyOrder, newOrder]
      //  dispatch(setMyOrder(updatedMyOrder)) ;
        dispatch({
          type: SET_MY_ORDER,
          payload: { order: updatedMyOrder }
        });

        dispatch(setCart([]))
        //inside cart
        // dispatch(set_cart_cart([]));
        dispatch({
          type: SET_CART_CART,
          payload: { cart: [] }
        });
        
        // dispatch(set_total(0))  
        dispatch({
          type: SET_TOTAL,
          payload: { total: 0 }
        });

        // const updatedMyOrder = [...cart]
        await updateDoc(docRef,{cart : []})
        await updateDoc(docRef, {myOrder : updatedMyOrder})
        console.log("purchse completed successfuly ")
    }else{
        console.error("User document not found");
    }
    
}catch(error){
    console.error("Failed to complete purchase:", error);
}
}


