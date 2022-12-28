import React, { useEffect, useRef, useState } from 'react'
import style from "./styles/member.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import {closenav , opennav , opensidebar} from "../../../reduxstore/clubchatnavslice"
import { useSelector , useDispatch} from 'react-redux';

const Memberstatus = () => {
  let dispatch = useDispatch()
  let handlenav = useSelector((store)=>store.handlenav)
  const [classtoggle, setclasstoggle] = new useState(style.member_container_main)

  useEffect(() => {
    console.log("handle nav =>" , handlenav)
    {handlenav.includes("member") == true ? setclasstoggle(style.open_member):setclasstoggle(style.member_container_main)}
}, [handlenav])

  return (
    <main className={classtoggle}>
      {/* <header className={style.search_member_input}>
        <input type="text" placeholder='search'/>
        <SearchIcon/>
      </header> */}
      {/* <header className={style.total_member}>
        <h1>total member - </h1>
        <h2>34</h2>
      </header> */}

      <section className={style.member_container}>
        <h2>founders - 4</h2>

        <div className={style.member}>
          <img src="/images/freefire.jpeg" alt="" />
          <p>sidhhant sid </p>
          <div className={style.online_member}></div>
        </div>

        <div className={style.member}>
          <img src="/images/freefire.jpeg" alt="" />
          <p>raj</p>
          <div className={style.online_member}></div>
        </div>
      </section>

      <section className={style.member_container}>
        <h2>co - founders - 4</h2>

        <div className={style.member}>
          <img src="/images/freefire.jpeg" alt="" />
          <p>prince</p>
          <div className={style.online_member}></div>
        </div>
        <div className={style.member}>
          <img src="/images/freefire.jpeg" alt="" />
          <p>bigger name look like this how is this</p>
          <div className={style.online_member}></div>
        </div>

      </section>
    </main>
  )
}

export default Memberstatus