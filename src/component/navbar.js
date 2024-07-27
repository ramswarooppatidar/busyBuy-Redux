import { Outlet } from "react-router-dom"
import styles from "../styles/Navbar.module.css"
import { NavLink } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux"
import { logout} from "../redux/actions/authAction"

export const Navbar = ()=>{
    // const {authenticate, logout} = useValue()

    const {isAuthenticated} = useSelector((state) => state.user)
    console.log("isAuthenticate ", isAuthenticated)
    const dispatch = useDispatch();
    return(
        <>
            <div className={styles.navbar}>
                <div className={styles.icon}>
                    <h1>BusyBuy</h1>
                </div>
              { isAuthenticated ? (<div className={styles.pages}>
                   <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/609/609803.png"/>  
                        </div>
                        <div>
                            <NavLink to="/">
                                <h2>Home</h2>
                            </NavLink>
                           
                        </div>
                                            
                    </div>
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/10951/10951869.png"/>  
                        </div>
                        <div>
                        <NavLink to="order">
                            <h2>My order</h2>
                        </NavLink>
                        </div>
                                            
                    </div>
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/4290/4290854.png"/>  
                        </div>
                        <div>

                             <NavLink to="cart">
                                <h2>Cart</h2>
                            </NavLink>
                        </div>
                                            
                    </div>
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/1716/1716282.png"/>  
                        </div>
                        <div>
                           <NavLink onClick={() =>{dispatch(logout())}} to='/' >
                                <h2>Logout</h2>
                           </NavLink>
                        </div>
                                            
                    </div>
                </div> ) : (
                    <>
                    <div className={styles.pages}>
                   <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/609/609803.png"/>  
                        </div>
                        <div>
                            <NavLink to="/">
                                <h2>Home</h2>
                            </NavLink>                           
                        </div>                                          
                    </div>
                    <div className={styles.field}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/2050/2050106.png"/>  
                        </div>
                        <div>
                        <NavLink to="sigin">
                            <h2>Login</h2>
                        </NavLink>
                        </div>                                           
                    </div>
                    </div>
                    </>
                )}
                {/* <Outlet/> */}
            </div>
            <Outlet/>
        </>
    )
}