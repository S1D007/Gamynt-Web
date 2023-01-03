import React from 'react'
import Historyusercard from '../../Page/Wallet/Historyusercard';
import Walletcard from '../../Page/Wallet/Walletcard'
import style from "./styles/store.module.scss";
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';
import Purchase from './../../Page/store/Purchase';

const Index = () => {
  let router = useRouter()
  return (
    <main className={style.wallet_page_cotainer}>
    <Walletcard/>
    <nav className={style.navigate_history} onClick={()=>{router.push("/wallet/History")}}>
      <h2>Purchase</h2>
      <NextIcon/>
    </nav>
    <Purchase/>
</main>
  )
}

export default Index