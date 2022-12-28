import React from 'react'
import Historyusercard from '../../Page/Wallet/Historyusercard';
import Walletcard from '../../Page/Wallet/Walletcard'
import style from "./styles/wallet.module.scss";
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';

const Index = () => {
  let router = useRouter()
  return (
    <main className={style.wallet_page_cotainer}>
    <Walletcard/>
    <nav className={style.navigate_history} onClick={()=>{router.push("/wallet/History")}}>
      <h2>latest transcations</h2>
      <NextIcon/>
    </nav>
  <Historyusercard/>
  <Historyusercard/>
  <Historyusercard/>
  <Historyusercard/>
  <Historyusercard/>
</main>
  )
}

export default Index