
import styles from "../styles/MyOrder.module.css"
import { useState } from "react"


import {useSelector, useDisptch} from "react-redux"
import { addToCart, decreseQty, removeFromCart} from "../redux/actions/cartAction"

// export const MyOrder=({cart, total, myOrder})=>{
    export const MyOrder=()=>{

    // const {total,cart, myOrder} = useValue()
    
    const { total, cart, myOrder} = useSelector((state) => state.auth)
    console.log("myOrder components :",myOrder)
    if(!myOrder){
        return
    }
   
    return(
        <>
       
        <div className={styles.orderContainer}>
            {myOrder.map((order)=>(
            <>
            <h1>CREATE ORDER ON : {order.date.substring(0, 25)} </h1>
            <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>price</th>
                        <th>qty</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                {order.items.map((crt, index)=>{
               return <tr key={index}>
                        <td>{crt.description}</td>
                        <td>{crt.price}</td>
                        <td>{crt.qty}</td>
                        <td>{crt.price* crt.qty}</td>
                        <hr/>
                     </tr>
            })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Grand-Total</td>
                        <td>{order.items.reduce((total, item)=>total + item.qty *item.price,0)}</td>
                    </tr>
                </tfoot>
            </table>
            </div>
            </>
            ))}   
        </div>
        </>
    )
    // return(
    //     <>
    //     <div className={styles.orderContainer}>
    //         {myOrder.map((order, ordrIndex) =>(
    //             <> 
    //              <h1>CREATE ORDER ON : {new Date().toString()} </h1>
    //              <div>
    //              <table className={styles.table}>
    //                  <thead>
    //                      <tr>
    //                          <th>Name</th>
    //                          <th>qty</th>
    //                          <th>price</th>
    //                          <th>amount</th>
    //                      </tr>
    //                  </thead>
    //                  <tbody>
    //                  {order.items.map((crt, index)=>{
    //                 return <tr key={index}>
    //                          <td>{crt.description}</td>
    //                          <td>{crt.price}</td>
    //                          <td>{crt.qty}</td>
    //                          <td>{crt.price* crt.qty}</td>
    //                          <hr/>
    //                       </tr>
    //              })}
    //                  </tbody>
    //                  <tfoot>
    //                      <tr>
    //                          <td colSpan="3">Grand-Total</td>
    //                          <td>{myOrder.reduce((total, item)=>total + item.qty *item.price,0)}</td>
    //                      </tr>
    //                  </tfoot>
    //              </table>
    //              </div>
    //              </>
    //         )
                
    //         )}
           
    //     </div>
    //     </>
    // )
}