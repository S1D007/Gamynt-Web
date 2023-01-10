import React, { useEffect, useState,useRef } from 'react'
import Chatnav from './utlis/Chatboxnav'
import style from "./styles/chat.module.scss"
import Memberstatus from "./Memberstatus"
import Welcomechat from './utlis/Welcomechat'
import Inputbox from './utlis/Inputbox'
import Message from './utlis/Message'
import {useRouter} from "next/router"
import { useClub } from '../../../suppliers/zustand/store'
import io from 'socket.io-client'
// import ScrollToBottom from 'react-scroll-to-bottom';
const Chatbox = ({channelName}) => {
  const route = useRouter()
  const {chats,clubResult} = useClub()
  console.log(clubResult)
  const socket = io.connect("https://gamynt-backend.onrender.com/")
  // console.log(route.query.cid)
  const [currChats,setCurrChats] = useState([])
  useEffect(()=>{
    socket.on("chats",(payloads)=>{
      // setsocChats([...socchats,payloads])
      setCurrChats([...currChats,payloads])
      console.log("chat")
    })
  }, [currChats])
  const chatsList = [chats,currChats].flat(Infinity)
  console.log(chatsList)
  // let scrollbottom = useRef(null)
  return (
    <main className={style.chat_container_main}>
      <Chatnav channelName={channelName} />
      <main className={style.member_chat_container}>
      <section className={style.chat_container}>
      {/* <ScrollToBottom > */}
        {
          chatsList?.map(({username,date,message,avatar,userID},i)=>{
            return <Message key={i} username={username} date={date} message={message} avatar={avatar} />
          })
        }
        {/* <Welcomechat clubname={"gamynt"}/> */}
      {/* </ScrollToBottom> */}
      {/* <div ref={scrollbottom}>scroll to bottom div</div> */}

       <Inputbox  onChange={(e) => setSendMessage(e.target.value)} />
        </section> 
      <Memberstatus members={clubResult?.membersList} />
      </main>
    </main>
  )
}

export default Chatbox