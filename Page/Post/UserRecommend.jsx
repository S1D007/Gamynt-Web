import React from 'react'
import { useUserData } from '../../suppliers/zustand/store';
import UserCard from './UserCard';
import style from "./userStyle.module.scss"
function UserRecommend() {
  const {users} = useUserData()
  return (
    <div className={style.container} >
        {
          users?.map(({avatar,username,isVerified})=>{
            return <UserCard key={Math.random() * 10} avatar={avatar} username={username} />
          })
        }
    </div>
  )
}

export default UserRecommend