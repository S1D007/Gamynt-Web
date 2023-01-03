import React from 'react'
import style from "./coinCard.module.scss"
function DiamondCard() {
  return (
    <div className={style.container} >
    <div>
        <img src="./coin.gif" alt="" />
        <h1>Coins</h1>
        <input type="number" placeholder='Buy it Custom' />
        <button>Buy GMT</button>
    </div>
    </div>
  )
}

export default DiamondCard