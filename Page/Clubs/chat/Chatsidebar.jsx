import React, { useEffect, useRef, useState } from 'react'
import style from "./styles/sidebar.module.scss"
import Clubnav from './utlis/Clubnav'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import TagIcon from '@mui/icons-material/Tag';
import {closenav , opennav , opensidebar} from "../../../suppliers/reduxstore/reducers/clubchatnavslice"
import { useClub } from '../../../suppliers/zustand/store';
import { useSelector , useDispatch} from 'react-redux';
import { useRouter } from 'next/router';
import DoneIcon from '@mui/icons-material/Done';
const Chatsidebar = ({clubName,channels,id,avatar}) => {
  let dispatch = useDispatch()
  let handlenav = useSelector((store)=>store.handlenav)
  let menumainref = useRef();
  const [name,setName] = useState("")
  const [classtoggle, setclasstoggle] = new useState(style.sidebar_main)
  const route = useRouter()
  const {createChannel} = useClub()
  useEffect(() => {
    {handlenav?.includes("sidebar") == true ? setclasstoggle(style.open_nav):setclasstoggle(style.sidebar_main)}
}, [handlenav])

return (
  <main  className={classtoggle}>
      <Clubnav />
      <section className={style.sidebar_container}>
        <header className={style.club_logo}>
          <img src={avatar} alt="" />
          <h1>{clubName}</h1>
          <ArrowDownIcon />
        </header>
        <main className={style.channel_list}>
        <div className={style.addChannel} >
        <input onChange={(e)=>{
          setName(e.target.value)
        }} type="text" />
          <DoneIcon onClick={()=>{
            name&&createChannel({
              _id:route.query.id,
              name:name
            })
            setName("")
          }} />
        </div>
          {
            channels?.map(({name,_id},i)=>{
              return <ul onClick={()=>{
                route.push(`${id}?cid=${i}`)
              }} key={name} ><TagIcon/><li>{name}</li></ul>
            })
          }
        </main>
      </section>
    </main>
  )
}

export default Chatsidebar