import React from 'react'
import Walletnav from '../../Page/Wallet/Walletnav'
import wallet from "./styles/wallet.module.scss"
import style from "./styles/walletitem.module.scss"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Withdraw = () => {
  return (
    <main className={wallet.moneyaction_container_main}>
    <Walletnav tittle={"withdraw"}/>
<header className={style.header_message}>
<small>you can directly withdraw your money to bank account</small>
</header>

<section className={style.withdraw_container}>
  <div className={style.withdrwa_acc_input}>
    <span>account number</span>
    <input type="text" placeholder='account number'/>
  </div>
  <div className={style.withdraw_coin_detail}>
  <p>available ammout : $3455</p>
  </div>
  <div className={style.withdraw_input}>
    <span>enter amout</span>
    <div>
      <CurrencyRupeeIcon/>
    <input type="text" placeholder='amount'/>
    </div>
  </div>
  <button className={style.withdrwa_btn}>withdraw</button>
</section>
  </main>
  )
}

export default Withdraw