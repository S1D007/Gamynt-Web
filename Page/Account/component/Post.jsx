import React from 'react'
import style from "../styles/profileitem.module.scss"

const Post = ({posts}) => {
  return (
    <main className={style.post_container}>
      {posts?.map(()=>{
        return <section key={Math.random()*10} className={style.post_box}>
        <img src="/images/freefire.jpeg" alt="" />
        <div>
          <p>22k views</p>
          <p>22k views</p>
        </div>
      </section>
      })}
    </main>
  )
}

export default Post