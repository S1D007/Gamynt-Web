import React, { useEffect, useState } from 'react'
import Image from "next/image"
import style from "./TopNavBar.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useRouter } from 'next/router';
import Modal from '@mui/material/Modal';
import Notifiaction from '../Notification/Notifiaction';
import update from "../data/update.json"
import {useUserData} from "../../suppliers/zustand/store"
import WalletIcon from '@mui/icons-material/Store';
import millify from "millify"
const TopNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let router = useRouter();
  let path = router.pathname;
  const diamonds = useUserData((e)=>e.diamond)
  const coins = useUserData((e)=>e.coin)
  const result = useUserData((e)=>e.result)
  return (
    <nav className={style.top_navbar}>

      <section className={style.page_name}>
        <h2>{path.slice(1, 15)}</h2>
        <h1>{path === "/" ? "home" : path.slice(1, 12)}</h1>
      </section>

      <section className={style.search_box}>
        <input type="text" placeholder='search..' />
        <SearchIcon />
      </section>

      <section className={style.profile_section}>

        <div onClick={()=>{router.push("/wallet")}} className={style.coin_diamond_container}>
          <div className={style.coin_nav}>
            <img style={{
              width:"30px"
            }} src={"/coin.gif"} />
            <p>{millify(coins)}</p>
          </div>
          {/* <div className={style.coin_nav}>
          <img style={{
              width:"30px"
            }} src={"/diamond.gif"} />
            <p>{millify(diamonds)}</p>
          </div> */}
        </div>
        <div className={style.store} >
        <WalletIcon onClick={()=>{
          router.push("/store")
        }} />
        </div>
        <div className={style.notification} onClick={()=>{handleOpen()}}>
          <NotificationsIcon />
          <p>{update.length}</p>
        </div>

        <div className={style.profile_icon}>
         <img onClick={()=>{
          router.push("/account")
         }} style={{
          width:"30px",
          borderRadius:"10px"
         }} src={result.avatar} alt="" />
        </div>
      </section>
      <Modal
        open={open}
        onClose={handleClose}
        className="model"
      >
        <Notifiaction handleClose={handleClose}/>
      </Modal>
    </nav>
  )
}

export default TopNavbar