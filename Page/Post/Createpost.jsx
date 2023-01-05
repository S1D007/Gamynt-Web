import React, { useState,useEffect } from 'react'
import style from "./Styles/createpost.module.scss"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PollIcon from '@mui/icons-material/Poll';
import { usePost, useUserData } from '../../suppliers/zustand/store';
import { useRouter } from 'next/router';
const Createpost = () => {
  const route = useRouter()
  const createPost = usePost((e)=>e.createPost)
  const userData = useUserData((e)=>e.result)
  const posted = usePost((e)=>e.posted)
  // useEffect((e)=>{
  //   posted && route.reload()
  // },[posted,route])
  // console.log(posted)
  const [message,setMessage] = useState("")
  const handleClick= () => {
    createPost({
      type:"message",
      uid:userData.uid,
      message,
      username:userData.username,
      avatar:userData.avatar
    })
  }
  return (
    <main className={style.create_post_main}>
      <textarea name="" onChange={(e)=>{
        setMessage(e.target.value)
      }} id="" cols="10" rows="5" placeholder='share your thought'></textarea>
      <section className={style.more_inputs}>
        <div><PhotoSizeSelectActualIcon/></div>
        <div><PollIcon/></div>
        <div ><button onClick={handleClick} >Post</button></div>
      </section>
    </main>
  )
}

export default Createpost