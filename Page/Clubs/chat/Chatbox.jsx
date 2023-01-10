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
  const messagesEndRef = useRef(null)
  const {chats,clubResult} = useClub()
  console.log(clubResult)
  const socket = io.connect("https://gamynt-backend-production.up.railway.app/")
  // console.log(route.query.cid)
  const [currChats,setCurrChats] = useState([])
  useEffect(()=>{
    socket.on("chats",(payloads)=>{
      console.log(payloads)
        setCurrChats([...currChats,payloads])
    })
  },[currChats])
  const chatsList = chats.concat(currChats)
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }, [chatsList])
  console.log(currChats)
  // let scrollbottom = useRef(null)
  return (
    <main className={style.chat_container_main}>
      <Chatnav channelName={channelName} />
      <main className={style.member_chat_container}>
      <section className={style.chat_container}>
        {
          chatsList?.map(({username,date,message,avatar,userID},i)=>{
            return <Message key={i} username={username} date={date} message={message} avatar={avatar} />
          })
        }
      <div ref={messagesEndRef} />
       <Inputbox />
        </section> 
      <Memberstatus members={clubResult?.membersList} />
      </main>
    </main>
  )
}

export default Chatbox