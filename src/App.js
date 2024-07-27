
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createHashRouter, RouterProvider , createBrowserRouter} from 'react-router-dom';

import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import { Cart } from './component/Cart';
import { SignUp } from './component/SignUp';
import { SignIn } from './component/SignIn';
import { MyOrder } from './component/MyOrder';

function App() {
  // const router = createHashRouter([
  //   {
  //     path: '/',
  //     element: <Navbar />,
  //     children: [
  //       { index: true, element: <Home /> },
  //       { path: 'signin', element: <SignIn /> },
  //       { path: 'signup', element: <SignUp /> },
  //       { path: 'cart', element: <Cart /> },
  //       { path: 'order', element: <MyOrder /> },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {index : true, element : <Home/>},
      { path: "/sigin", element: <SignIn/> } ,
      {path : "/sigup", element : <SignUp/>},
      { path : "/cart", element: <Cart/>},
      {path : "/order", element : <MyOrder/>} 
    ]
  }
]);

 
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;


// import { Home } from './component/Home';
// import { Navbar } from './component/navbar';
// import { Cart } from './component/Cart';
// // import CustomItemContext from './itemContext';
// import { SignUp } from './component/SignUp';
// import { SignIn } from './component/signIn';

// import {Provider} from "react/redux"
// // import store from './redux/store';
// import { store } from './redux/store';

// import { createBrowserRouter,BrowserRouter as Router, Outlet, Routes,Route, RouterProvider } from "react-router-dom";
// import { createHashRouter} from 'react-router-dom';
// import { MyOrder } from './component/MyOrder';
// function App() {
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       {index : true, element : <Home/>},
//       { path: "/sigin", element: <SignIn/> } ,
//       {path : "/sigup", element : <SignUp/>},
//       { path : "/cart", element: <Cart/>},
//       {path : "/order", element : <MyOrder/>} 
//     ]
//   }
// ]);

// //for hosting
// const router = createHashRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "sigin", element: <SignIn /> },
//       { path: "sigup", element: <SignUp /> },
//       { path: "cart", element: <Cart /> },
//       { path: "order", element: <MyOrder /> },
//     ]
//   }
// ]);

// return (
//   <Provider store={store}>
//       <div className="App">
//         {/* <CustomItemContext> */}
//             <RouterProvider router={router} >
            
//             </RouterProvider>
//         {/* </CustomItemContext> */}
      
//       </div>
//   </Provider>
// );
// }
//   // return (
//   //   <>
//   //   <CustomItemContext>
//   //     <Navbar/>
//   //     <Home/>
//   //     <br/>
//   //     <Cart/>
//   //     {/* <MyOrder/> */}
//   //   </CustomItemContext>
//   //   </>
//   // );
// //   return(
// //       <div>
// //         <CustomItemContext>
// //           <header>
// //              <Navbar/>
// //           </header>
// //           <Router>
// //             <Routes>         
// //               <Route path="/" element ={<Home/>}/>
// //               <Route path="/cart" element ={<Cart/>}/>
// //            </Routes>
          
// //           </Router>
          
// //         </CustomItemContext>
// //       </div>
// //   )
// //}

// export default App;
