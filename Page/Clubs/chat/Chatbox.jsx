import React from 'react'
import Chatnav from './utlis/Chatboxnav'
import style from "./styles/chat.module.scss"
import Memberstatus from "./Memberstatus"
import Welcomechat from './utlis/Welcomechat'
import Inputbox from './utlis/Inputbox'
import Message from './utlis/Message'


const Chatbox = () => {
  return (
    <main className={style.chat_container_main}>
      <Chatnav/>
      <main className={style.member_chat_container}>
      <section className={style.chat_container}>
        <Welcomechat clubname={"gamynt"}/>
        <Message/>
        <Message/>
        <Message/>
        
       <Inputbox/>
        </section> 
      <Memberstatus />
      </main>
    </main>
  )
}

export default Chatbox