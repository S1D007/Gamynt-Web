import React, { useState } from 'react'
import style from "./get_started.module.scss"
function GetStarted({setNext}) {
    const [tick, setTick] = useState(0)
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
          <div style={{
            boxShadow: `${tick === 1 ? "1px 1px 40px 4px rgba(80, 248, 108,0.8)" : ""}`
          }} onClick={() => {
            tick === 1 ? setTick(0) : setTick(1)
          }}>
            <span style={{
              backgroundColor: `${tick === 1 ? "rgb(80, 248, 108)" : ""}`,
            }} className={style.tick} ></span>
            <h3>Boost Tournament</h3>
            <h1> ₹60 </h1>
            <ul>
              <li>Get Players Fast</li>
              <li>Featured in Boosted Tournament</li>
              <li>Valid For 1 Hours*</li>
            </ul>
          </div>
          <div style={{
            boxShadow: `${tick === 2 ? "1px 1px 40px 4px rgba(80, 248, 108,0.8)" : ""}`
          }} onClick={() => {
            tick === 2 ? setTick(0) : setTick(2)

          }}>
            <span style={{
              backgroundColor: `${tick === 2 ? "rgb(80, 248, 108)" : ""}`
            }} className={style.tick} ></span>
            <h3>Rank Tournament</h3>
            <h1> ₹30 </h1>
            <ul>
              <li>Be on Top of Ranked Tournament </li>
              <li>Get Free Promotion of Your Club</li>
              <li>Valid For 30 minutes*</li>
            </ul>
          </div>
          <div style={{
            boxShadow: `${tick === 3 ? "1px 1px 40px 4px rgba(80, 248, 108,0.8)" : ""}`
          }} onClick={() => {
            tick === 3 ? setTick(0) : setTick(3)
          }}>
            <span style={{
              backgroundColor: `${tick === 3 ? "rgb(80, 248, 108)" : ""}`
            }} className={style.tick} ></span>
            <h3>Advertise</h3>
            <h1> ₹450 </h1>
            <ul>
              <li>Advertise Tournaments in Crousel</li>
              <li>Get Customized Click Button</li>
              <li>Valid for 1 Day*</li>
            </ul>
          </div>
        </div>
        <div className={style.next} >
          <button onClick={()=>{
            setNext(1)
          }} >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default GetStarted