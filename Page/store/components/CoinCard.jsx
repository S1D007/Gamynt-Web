import React, { useEffect } from 'react'
import style from "./coinCard.module.scss"
import {useCashfree, useUserData} from "../../../suppliers/zustand/store";
import { axios } from 'axios';
import {useRouter} from "next/router"
function DiamondCard() {
  const route = useRouter()
  const createOrder  = useCashfree((e)=>e.createOrder)
  const getOrder  = useCashfree((e)=>e.getOrder)
  const result  = useUserData((e)=>e.result)
  const resultFromCashfree  = useCashfree((e)=>e.result)
  console.log(resultFromCashfree.link_url)
  if(resultFromCashfree.link_url){
    console.log('present')
    window.open(resultFromCashfree.link_url, '_blank');
    // route.push(resultFromCashfree.link_url)
  }
  // console.log(resultFromCashfree !== {})
  const handleClick = () => {
    createOrder({
      amount:320,
      username:result.username,
      phone:"9905833824",
      email:result.email,
      details:"Purchase of Rs.320 for 80 GMT"
    })
  }
  useEffect((e)=>{
    document.addEventListener('visibilitychange', function(){
      // console.log(document.visibilityState)  
      if(resultFromCashfree.link_url && document.visibilityState === "visible"){
        getOrder({
          link_id:resultFromCashfree.link_id,
          email:result.email,
          amount:80
        })
      }
  //  document.title = document.visibilityState;
  //  console.log(document.visibilityState);
});
  },[resultFromCashfree])
  return (
    <div className={style.container} >
    <div>
        <img src="./diamond.gif" alt="" />
        <h1>Coins</h1>
        {/* <input type="number" placeholder={""} /> */}
        <button onClick={handleClick} >Buy Coins</button>
    </div>
    </div>
  )
}

export default DiamondCard