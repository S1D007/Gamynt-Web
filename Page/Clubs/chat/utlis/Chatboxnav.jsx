import React from 'react'
import style from "../styles/chat.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import TagIcon from '@mui/icons-material/Tag';
import MenuIcon from '@mui/icons-material/ClearAll';
import { useDispatch , useSelector } from 'react-redux';
import {closenav , opennav , opensidebar , openmember} from "../../../../reduxstore/clubchatnavslice"

const Chatnav = () => {
  let dispatch = useDispatch()
  let handlenav = useSelector((store)=>store.handlenav)
  const sidebarmenuhandle = ()=>{
    dispatch(opensidebar())
    {
      // handlenav.includes("sidebar") === true ? dispatch(closenav()) : dispatch(opensidebar())

    }
   
  }

  const membermenuhandle = ()=>{
    {
      handlenav.includes("member") === true ?
      dispatch(closenav()) :dispatch(openmember())}
  }
  return (
    <nav className={style.nav_top_chat}>
      <section>
        <div className={style.menu_icon} onClick={()=>{sidebarmenuhandle()}} >
        <MenuIcon/>
        </div>
      <p><span><TagIcon/></span>channel name</p>
      </section>
      <section>
      {/* .open_member */}
      <GroupIcon onClick={()=>{membermenuhandle()}}/>
      </section>
    </nav>
  )
}

export default Chatnav