import React from 'react'
import style from "./styles/walletcard.module.scss"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import TransferIcon from '@mui/icons-material/IosShare';
import HistoryIcon from '@mui/icons-material/History';

import { useRouter } from 'next/router';

const Walletcard = () => {
    let router = useRouter();
  return (
    <main className={style.wallet_card}>
        <header>
            <small>total balance</small>
            <div className={style.money_div}>
                <CurrencyRupeeIcon/>
                <h1>522,3434</h1>
                <div><VisibilityIcon/></div>
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