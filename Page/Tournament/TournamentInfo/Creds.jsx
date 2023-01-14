import React from 'react'
import style from "./info.module.scss"
function Creds({creds}) {
  console.log(creds)
  return (
    <div className={style.h1_head} style={{
      // display:"flex",
      // justifyContent:"center",
    }}>
        {
          creds.id && creds.pass !== "" ?<div style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          gap:"5px",
          marginTop:"30px"
        }} >
            <div style={{
              // backgroundColor:"#000",
              width:"100%",
              height:"3rem"
            }} >
                <h1  style={
              {
                fontSize:"1rem"
              }
            }>ID: ABC 123</h1>
            </div>
            <div style={{
              // backgroundColor:"#000",
              width:"100%",
              height:"3rem"
            }} >
            <h1 style={
              {
              }
            } >Pass: gamynt@123 </h1>
            </div>
        </div>:<h1>No ID Pass available</h1>
        }
    </div>
  )
}

export default Creds