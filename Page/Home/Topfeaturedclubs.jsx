import React from 'react'
import Image from "next/image"
import style from "./styles/homeitem.module.scss"
import GroupsIcon from '@mui/icons-material/Groups';

const Topfeaturedclubs = () => {
  return (
  <main className={style.top_featured_container}>
<header >
  <h2  style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"5px",
    marginBottom:"-50px"
}}>Top Feadtured Clubs  <img src={"/club.gif"} style={{
    width:"100px",
  }} />
</h2>
</header>

      <section className={style.crausal_container}>

        <div className={style.club_item}>
        <Image src="/images/freefire.jpeg" alt="" width={200} height={200}/>
        <div>
          <h1>bull ka group</h1>
          <p><GroupsIcon/> 250</p>
          <button>join</button>
        </div>
        </div>

        <div className={style.club_item}>
        <Image src="/images/freefire.jpeg" alt="" width={200} height={200}/>
        <div>
          <h1>bull ka group</h1>
          <p><GroupsIcon/> 250</p>
          <button>join</button>
        </div>
        </div>

        <div className={style.club_item}>
        <Image src="/images/freefire.jpeg" alt="" width={200} height={200}/>
        <div>
          <h1>bull ka group</h1>
          <p><GroupsIcon/> 250</p>
          <button>join</button>
        </div>
        </div>

      </section>

  </main>
  )
}

export default Topfeaturedclubs