import React from 'react'
import style from "./styles/walletcard.module.scss"
import AddIcon from '@mui/icons-material/Add';
import TransferIcon from '@mui/icons-material/IosShare';
import HistoryIcon from '@mui/icons-material/History';

import { useRouter } from 'next/router';
import millify from "millify"
import {useUserData} from "../../suppliers/zustand/store"
const Walletcard = () => {
    let router = useRouter();
    const diamonds = useUserData((e)=>e.diamond)
    const coins = useUserData((e)=>e.coin)
  return (
    <main className={style.wallet_card}>
        <header>
            <small>Balance</small>
            <div className={style.money_div}>
            <img src={"./coin.gif"} alt="" />
                <h1>{millify(coins)}</h1>
            <img src={"./diamond.gif"} alt="" />
                <h1>{millify(diamonds)}</h1>
            </div>
        </header>

        <section className={style.money_share_section}>
        <ul onClick={()=>{router.push("/wallet/Transfer")}}>
                <TransferIcon/>
                <li>transfer</li>
            </ul>
            <ul onClick={()=>{router.push("/wallet/Withdraw")}}>
                <TransferIcon style={{rotate:"180deg"}}/>
                <li>withdraw</li>
            </ul>
            <ul onClick={()=>{router.push("/wallet/Topup")}}>
                <AddIcon/>
                <li>top-up</li>
            </ul>
            <ul onClick={()=>{router.push("/wallet/History")}}>
                <HistoryIcon/>
                <li>history</li>
            </ul>
        </section>

    </main>
  )
}

export default Walletcard