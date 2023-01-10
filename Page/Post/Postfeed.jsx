import React,{useEffect} from 'react'
import { usePost } from '../../suppliers/zustand/store'
import PostCard from './PostCard'
import style from "./Styles/post.module.scss"
import UserRecommend from './UserRecommend';


const Postfeed = () => {
  const result = usePost((e)=>e.result)
  // console.log(result)
  return (
    <main className={style.post_main_container}>
    <UserRecommend/>
         {
          result?.map((e)=>{
            return<PostCard username={e.username} image={e.image} date={e.date} message={e.message} uid={e.uid} key={e.uid} avatar={e.avatar} />
          })
         }
    </main>
  )
}

export default Postfeed