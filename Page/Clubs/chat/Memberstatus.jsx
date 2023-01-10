import React, { useEffect, useRef, useState } from 'react'
import style from "./styles/member.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import {closenav , opennav , opensidebar} from "../../../suppliers/reduxstore/reducers/clubchatnavslice"
import { useSelector , useDispatch} from 'react-redux';

const Memberstatus = ({members}) => {
  let dispatch = useDispatch()
  let handlenav = useSelector((store)=>store.handlenav)
  const [classtoggle, setclasstoggle] = new useState(style.member_container_main)

  useEffect(() => {
    {handlenav?.includes("member") == true ? setclasstoggle(style.open_member):setclasstoggle(style.member_container_main)}
}, [handlenav])

  return (
    <main className={classtoggle}>

      <section className={style.member_container}>
        <h2>Online</h2>
        {
          members?.map(({username,avatar},i)=>{
            return <div key={i} className={style.member}>
          <img src={avatar} alt="" />
          <p>{username}</p>
          <div className={style.online_member}></div>
        </div>
          })
        }
      </section>
    </main>
  )
}

export default Memberstatus