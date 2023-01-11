import React, { useEffect, useState } from 'react'
import Chatsidebar from '../../../Page/Clubs/chat/Chatsidebar'
import Chatbox from '../../../Page/Clubs/chat/Chatbox'
import style from "../../styles/clubchat.module.scss"
import { useRouter } from 'next/router';
import { useClub } from '../../../suppliers/zustand/store';
const Index = () => {
  const router = useRouter()
  const {getClubByID,clubResult,getChats,clubIO,channelCreated,getChannels,channels} = useClub()
  const { id,cid } = router.query
  // console.log(channelCreated)
  useEffect(()=>{
    clubIO()
    id && getClubByID({
      _id:id
    })
  },[id])
  useEffect(()=>{
    cid && getChats({
      _id:id,
      index:cid
    })
  },[cid])  
  useEffect(()=>{
    id&&getChannels({
      _id:id
    })
  },[channelCreated,id])
  return (
    <main className={style.chat_page_container_main}>
        <Chatsidebar clubName={clubResult.clubName} id={id} channels={channels} avatar={clubResult.clubLogo} />
        <Chatbox channelName={channels[cid]?.name} />
    </main>
  )
}

export default Index