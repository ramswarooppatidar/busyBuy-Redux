import { addToCart } from "../actions/cartAction";
import { 
    SET_AUTHENTICATE,
    SET_CART, 
    SET_MY_ORDER, 
    SET_USER
    ,SET_USER_ID

 } from "../actions/authAction";

 const initialstate = {
    user : [],
    cart : [],
    myOrder : [],
    userId : null,
    isAuthenticate : false
 }
  const authReducer=(state = initialstate, action)=>{
        switch(action.type){
            case SET_AUTHENTICATE : {
                return{
                    ...state,
                    isAuthenticate : action.payload.status
                }
            }
            case SET_USER : {
                return{
                    ...state,
                    user : action.payload.users
                }
            }
            case SET_CART : {
                return{
                    ...state,
                    cart : action.payload.cart
                }
            }
            case  SET_MY_ORDER : {
                const {order} = action.payload
                console.log("order in side Authreducer ", order)
                return{
                    ...state,
                    myOrder : action.payload.order
                }
            }
            case SET_USER_ID : {
                return{
                    ...state,
                    userId : action.payload
                }
            }
            default :
                return state;
        }
  }
  export default authReducer;