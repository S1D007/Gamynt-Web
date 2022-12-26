import React, { useEffect, useState } from 'react'
import Chatsidebar from '../../Page/Clubs/chat/Chatsidebar'
import Chatbox from '../../Page/Clubs/chat/Chatbox'
import style from "../styles/clubchat.module.scss"

const chat = () => {
  const [h, seth] = new useState(0)
  
  new useEffect(() => {
  let hg = window.innerHeight;
  console.log(h)
  seth(hg)
  console.log("hello world")
}, [h])


  return (
    <main className={style.chat_page_container_main}>
        <Chatsidebar/>
        <Chatbox/>
    </main>
  )
}

export default chat