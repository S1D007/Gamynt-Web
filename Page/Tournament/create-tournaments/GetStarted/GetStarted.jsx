import React, { useState, useEffect } from 'react'
import style from "./get_started.module.scss"
import { useCashfree, useUserData } from '../../../../suppliers/zustand/store';
function GetStarted({ setNext }) {
  const [tick, setTick] = useState(0);
  const { createOrder,resultFromCashfree } = useCashfree()
  const { result } = useUserData()
      
  return (
    <div className={style.container}>
      <div className={style.club_details}>
        <div style={{
          display: "flex",
          justifyContent: "center",
        }} >
          <div className={style.logo} >
          </div>
        </div>
        <div className={style.club_name} >
          <h1>Gamynt Esports</h1>
        </div>
        <div className={style.available_tournaments} >
          <h1>Free Tournament Available: <span>2</span></h1>
        </div>
        <div className={style.types_of_tournaments} >
        <h4>No tournament Created</h4>
        </div>
        <div className={style.next} >
          <button onClick={() => {
            setNext(1)
          }} >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default GetStarted