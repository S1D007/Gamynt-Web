import React from 'react'
import style from "../styles/utils.module.scss"

const Message = ({username,date,message,avatar}) => {
  return (
    <main className={style.message_box_main}>
        <img className={style.sender_img} src={avatar} alt="" />
        <section className={style.message_and_detail}>
            <header>
                <p>{username}</p>
                <span>{date}</span>
            </header>
            <div>
                <p>{message}</p>
            </div>
        </section>
    </main>
  )
}

export default Message