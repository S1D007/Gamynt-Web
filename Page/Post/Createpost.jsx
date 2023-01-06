import React, { useState,useEffect } from 'react'
import style from "./Styles/createpost.module.scss"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PollIcon from '@mui/icons-material/Poll';
import { usePost, useUserData,useImageUpload } from '../../suppliers/zustand/store';
import { useRouter } from 'next/router';
const Createpost = () => {
  const route = useRouter()
  const {createPost,posted} = usePost()
  const userData = useUserData((e)=>e.result)
  const {uploadImage,image} = useImageUpload()
  const [message,setMessage] = useState("")
  useEffect(()=>{
    posted && route.reload()
  },[posted])
  const handleClick= () => {
    setMessage("")
    createPost({
      type:"message",
      uid:userData.uid,
      message,
      username:userData.username,
      avatar:userData.avatar,
      image:image ? image : ""
    })
  }
  return (
    <main className={style.create_post_main}>
        {image?<img src={image} />:""}
      <textarea name="" onChange={(e)=>{
        setMessage(e.target.value)
      }} id="" cols="10" rows="5" placeholder='share your thought'></textarea>
      <section className={style.more_inputs}>
        <div>
        {/* <PhotoSizeSelectActualIcon /> */}
        <input type="file" onChange={(e)=>{
          uploadImage({
            image:e.target.files[0]
          })
        }} name="" id="" /></div>
        
        <div ><button onClick={handleClick} >Post</button></div>
      </section>
    </main>
  )
}

export default Createpost