import React from 'react'
import style from "../styles/welcome.module.scss"

function Welcomechat(props) {
  return (
    <main className={style.welcome_message_main}>
        <header>
        <h1>welcome to the {props.clubname}</h1>
        <p>please maintain proper decipline and follow clubs rule , and also be friendly with other members</p>
        </header>
    </main>
  )
}

export default Welcomechat