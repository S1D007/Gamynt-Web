import React from 'react'
import style from "../styles/profileitem.module.scss"
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const Friends = () => {
  return (
    <main className={style.friends_container}>
      <section className={style.friends_card}>
        <img src="/images/freefire.jpeg" alt="" /> 
        <div>
          <p>name hai mera</p>
          <span>230pt</span>
        </div>
        <PersonAddAlt1Icon/>
        </section>
      <section className={style.friends_card}>
        <img src="/images/freefire.jpeg" alt="" /> 
        <div>
          <p>name hai mera</p>
          <span>230pt</span>
        </div>
        <PersonAddAlt1Icon/>
        </section>
      <section className={style.friends_card}>
        <img src="/images/freefire.jpeg" alt="" /> 
        <div>
          <p>name hai mera</p>
          <span>230pt</span>
        </div>
        <PersonAddAlt1Icon/>
        </section>
      <section className={style.friends_card}>
        <img src="/images/freefire.jpeg" alt="" /> 
        <div>
          <p>name hai mera</p>
          <span>230pt</span>
        </div>
        <PersonAddAlt1Icon/>
        </section>
    </main>
  )
}

export default Friends