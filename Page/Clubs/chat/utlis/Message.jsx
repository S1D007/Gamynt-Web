import React from 'react'
import style from "../styles/utils.module.scss"
import { useRouter } from 'next/router';
// import { usePalette } from 'color-thief-react';
const Message = ({username,date,message,avatar}) => {
  const route = useRouter()
  const numColours = 3;
  const colourFormat = 'hex';

  // const { data, loading, error } = usePalette(avatar, numColours, colourFormat);
  // console.log(data)
  return (
    <main className={style.message_box_main}>
        <img className={style.sender_img} src={avatar} alt="" />
        <section className={style.message_and_detail}>
            {
            "loading" 
          ? <p></p>
          :
            <header>
                <p onClick={()=>{
                  route.push(`/mynter/${username}`)
                }} >{username}</p>
                <span>{date}</span>
            </header>
      }
            <div>
                <p>{message}</p>
            </div>
        </section>
    </main>
  )
}

export default Message