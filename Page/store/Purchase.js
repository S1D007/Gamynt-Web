import React from 'react'
import DiamondCard from './components/DiamondCard';
import CoinCard from "./components/CoinCard"
import style from "./purchase.module.scss"
function Purchase() {
  return (
    <div className={style.container}>
        <div className={style.coinsAndDiamonds} >
        {/* <DiamondCard/> */}
        <CoinCard/>
        </div>
    </div>
  )
}

export default Purchase