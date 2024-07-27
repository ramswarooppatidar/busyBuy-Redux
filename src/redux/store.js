import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import { cartReducer } from './reducers/cartReducer';

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  auth: authReducer,
});

// Create a store with middleware applied
export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);







// import { createStore, combineReducers } from 'redux';
// import authReducer from './reducers/authReducer';
// import userReducer from './reducers/userReducer';
// import { cartReducer } from './reducers/cartReducer';

// const rootReducer = combineReducers({
//   user: userReducer,
//   cart: cartReducer,
//   auth: authReducer,
// });

// export const store = createStore(rootReducer);




// import { createStore, combineReducers } from "redux";
// import authReducer from "./reducers/authReducer";
// import userReducer from "./reducers/userReducer";
// import { cartReducer } from "./reducers/cartReducer";

// const rootReducer = combineReducers({
//      userReducer,
//     cartReducer,
//     authReducer
// });

// export const store = createStore(rootReducer);





// import redux from "redux"
// import { combineReducers , createStore} from "redux";


// import userReducer from "./reducer/userReducer"
// import cartReducer from "./reducer/cartReducer";
// import authReducer from "./reducer/authReducer";

// // export const store = redux.createStore(useReducer);

// // const result = combineReducers({
// //     usersR : userReducer,
// //     cartR : cartReducer,
// //     authR : authReducer
// // })
// const result = combineReducers({
//     userReducer,
//     cartReducer,
//     authReducer
// })
// export const store = redux.createStore(result);