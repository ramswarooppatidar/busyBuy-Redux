
import { ADD_TO_CART, REMOVE_FROM_CART, DECRESE_QTY, SET_TOTAL, SET_CART_CART } from "../actions/cartAction";
// // import { db } from "./firebaseinit";
// import { collection, addDoc, getDoc,doc, getDocs, updateDoc } from "firebase/firestore/lite";

const initialstate={
    cart :[],
    total : 0
}
export const cartReducer=(state=initialstate, action)=>{
    
    switch(action.type){
        case ADD_TO_CART:{
            const { cart, itemPrice } = action.payload;
            console.log('inside reducer Updating Cart:', cart, typeof(cart));
            console.log('inside reducer, Item Price:', itemPrice);
            return{
                ...state,
                cart : action.payload.cart,
                total : state.total + action.payload.itemPrice
            }
        }
        case DECRESE_QTY : {
            return{ 
                ...state,
                cart : action.payload.cart,
                total : state.total - action.payload.itemPrice
            }
        }
        case REMOVE_FROM_CART : {
            return {
                ...state,
                cart : action.payload.cart,
                total : state.total - action.payload.itemPrice
            }
        }
        case SET_TOTAL : {
            return {
                ...state,
                total : action.payload.total
            }
        }
        case SET_CART_CART : {
            const { items} = action.payload;
            console.log("set cart in cart :", items)
            return {
                ...state,
                cart : action.payload.cart
            }
        }
        default :
            return state;
    }
}