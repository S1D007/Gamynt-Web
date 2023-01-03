import React from 'react'
import Historyusercard from '../../Page/Wallet/Historyusercard'
import Walletnav from '../../Page/Wallet/Walletnav'
import style from "./styles/wallet.module.scss"

const history = () => {
  return (
    <main className={style.moneyaction_container_main}>
    <Walletnav tittle={"history"}/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
    <Historyusercard/>
  </main>
  )
}

export default history