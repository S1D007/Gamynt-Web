import React from 'react'
import style from "./userStyle.module.scss"
import { useRouter } from 'next/router';
function UserCard({username,avatar,isVerified}) {
  const route = useRouter()
  return (
    <div  onClick={()=>{
      route.push(`mynter/${username}`)
    }} className={style.userContainer} >
        <img src={avatar} alt="" />
        <h1>@{username}</h1>
        <button >View Profile</button>
    </div>
  )
}

export default UserCard