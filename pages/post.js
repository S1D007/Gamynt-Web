import React from 'react'
import style from "./styles/post.module.scss"
import Stories from "../Page/Post/Stories"
import Createpost from "../Page/Post/Createpost"
import Postfeed from "../Page/Post/Postfeed"

const Post = () => {
  return(
    <main className={style.post_main}>
      <Stories/>
      <Createpost/>
      <Postfeed/>
    </main>
  )
}

export default Post