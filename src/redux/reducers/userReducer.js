import { CREATE_USER, SET_AUTHENTICATE} from "../actions/userAction";
const initialState={
    user : [],
    isAuthenticated : false
}
const userReducer=(state=initialState, action)=>{
    switch(action.type){
        case CREATE_USER : {
            return{
                ...state,
                user :[
                    ...state.user,
                    {
                        name: action.payload,
                        username : action.payload,
                        password : action.payload,
                        cart : [],
                        myOrder : []
                    }
                ]

            }
        }
        case SET_AUTHENTICATE : {
            return{
                ...state,
                isAuthenticated : action.payload
            }
        }
        default :
            return state;
    }
}
export default userReducer;