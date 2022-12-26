import React from 'react'
import style from "./styles/homeitem.module.scss"
import EastIcon from '@mui/icons-material/East';
import Image from "next/image"

const Topfeaturedgames = () => {
  return (
    <main className={style.top_featured_container}>
      <header className={style.bg_game} >
        <h2>Top featured games</h2>
      </header>
      <section className={style.crausal_container}>
        <div style={{
          margin: "1.2rem 0.2rem"
        }} className={style.item}>
          <div>
          <p>free fire </p>
          < EastIcon/>
          </div>
        <Image src="/images/freefire.jpeg" alt="" width={200} height={200}/>
        </div>

        <div className={style.item}>
          <div>
          <p>pubg </p>
          < EastIcon/>
          </div>
        <Image src="/images/pubg.jpeg" alt="" width={200} height={200}/>
        </div>
        <div className={style.item}>
          <div>
          <p>ludo</p>
          < EastIcon/>
          </div>
        <Image src="/images/ludo.jpeg" alt="" width={200} height={200}/>
        </div>

      </section>
    </main>
  )
}

export default Topfeaturedgames