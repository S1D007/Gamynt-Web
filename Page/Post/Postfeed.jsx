import React,{useEffect} from 'react'
import { usePost } from '../../suppliers/zustand/store'
import PostCard from './PostCard'
import style from "./Styles/post.module.scss"


const Postfeed = () => {
  const result = usePost((e)=>e.result)
  const getPosts = usePost((e)=>e.getPosts)
  useEffect((e)=>{
    getPosts()
  })
  console.log(result)
  return (
    <main className={style.post_main_container}>
         {
          result?.map((e)=>{
            return<PostCard username={e.username} image={e.image} date={e.date} message={e.message} uid={e.uid} key={e.uid} />
          })
         }
    </main>
  )
}

export default Postfeed