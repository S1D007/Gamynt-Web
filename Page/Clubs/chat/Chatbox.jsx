import React, { useEffect, useState, useRef, useCallback } from 'react'
import Chatnav from './utlis/Chatboxnav'
import style from "./styles/chat.module.scss"
import Memberstatus from "./Memberstatus"
import Welcomechat from './utlis/Welcomechat'
import Inputbox from './utlis/Inputbox'
import Message from './utlis/Message'
import Router, { useRouter } from "next/router"
import { useClub } from '../../../suppliers/zustand/store'
import io from 'socket.io-client'
// import ScrollToBottom from 'react-scroll-to-bottom';
const Chatbox = ({ channelName }) => {
  const route = useRouter()
  const messagesEndRef = useRef(null)
  const {clubResult,chats } = useClub()
  // console.log(chats)
  // console.log(clubResult)
  const socket = io.connect("http://localhost:8080")
  // console.log(route.query.cid)
  // const [currChats,setCurrChats] = useState([])
  const [newChats, setNewChats] = useState([]); // new chats from Socket.io
  // const [chats,setChats] = useState([])
  const handleNewChat = useCallback((payload) => {
    setNewChats((prevChats) => [...prevChats, payload]);
  }, []);
  useEffect(() => {
    socket.on("chats", handleNewChat);
    return () => {
      socket.off("chats", handleNewChat)
    }
}, [handleNewChat]);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }, [newChats,chats])
  return (
    <main className={style.chat_container_main}>
      <Chatnav channelName={channelName} />
      <main className={style.member_chat_container}>
        <section className={style.chat_container}>
          {
            chats?.map(({user,message,date}, i) => {
              {/* console.log(e) */}
              return <Message key={i} username={user?.username} date={date} message={message} avatar={user?.avatar} />
            })
          }
          {
            newChats?.map(({username,message,date,avatar}, i) => {
              {/* console.log(e) */}
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