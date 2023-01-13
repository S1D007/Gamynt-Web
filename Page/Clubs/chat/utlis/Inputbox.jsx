import React,{useState} from 'react'
import style from "../styles/utils.module.scss"
import SendIcon from '@mui/icons-material/Send';
import EmojiIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {useClub,useUserData} from '../../../../suppliers/zustand/store'
import  {useRouter} from "next/router"
import { io } from 'socket.io-client';
const Inputbox = () => {
  const {result} = useUserData()
  const socket = io.connect("http://localhost:8080")
  const router = useRouter()
  let clubname = "gamynt" 
  const [sendMessage, setSendMessage] = useState("")
  // console.log(sendMessage)
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const today = new Date();
      socket.emit("club-chat", {
      message: sendMessage,
      username: result.username,
      user:result._id,
      avatar:result.avatar,
      date: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
      index: router.query.cid,
      _id: router.query.id
    })
    setSendMessage("")
    }
  }
  return (
    <main className={style.send_message_input}>
  <label htmlFor="file">
  <AttachFileIcon/>
  </label>
  <input style={{
    display:"none"
  }} type="file" name="" id="file" />
  <EmojiIcon/>
  <input value={sendMessage} onKeyDown={handleKeyDown} type="text" onChange={(e)=>{
    setSendMessage(e.target.value)
  }} rows={"1"} placeholder={`message ${clubname}`}/> 
  <SendIcon/>
</main>
  )
}

export default Inputbox