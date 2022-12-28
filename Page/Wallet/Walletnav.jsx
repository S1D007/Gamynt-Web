import React from 'react'
import style from "./styles/walletitem.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

const Walletnav = (props) => {
    let router = useRouter();

  return (
    <nav className={style.wallet_nav}>
        <ArrowBackIcon onClick={() => router.back(-1)}/>
        <h1>{props.tittle}</h1>
        <section></section>
    </nav>
  )
}

export default Walletnav