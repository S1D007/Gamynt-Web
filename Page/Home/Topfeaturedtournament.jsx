import Image from 'next/image'
import React from 'react'
import style from "./styles/homeitem.module.scss"
import GroupIcon from '@mui/icons-material/Group';

const Topfeaturedtournament = () => {
  return (
    <main className={style.top_featured_container}>
<header >
  <h2  style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"1px",
    marginBottom:"-30px"
}}>Top Feadtured Clubs  <img src={"/tournament.gif"} style={{
    width:"100px",
  }} />
</h2>
</header>
    <section className={style.crausal_container}>


    <div className={style.tournament_item}>
      <div className={style.image_space}>
        <img src="/images/freefire.jpeg" alt="" width={200} height={200}/>
        <span>2 thu 2:50 pm</span>
      </div>
      <div className={style.admin_detail}>
        <img src="/images/freefire.jpeg" alt="" width={50} height={50}/>
        <h3>gamynt admin</h3>
      </div>
        <div className={style.tournament_info}>
        
       <p> <img src="/images/freefire.jpeg" alt="" width={25} height={25}/>  free fire</p>
       <p><img src="/util/prize.webp" alt="" width={35} height={35}/>₹ 250</p>
       <p> <img src="/util/member.png" alt="" width={35} height={35}/>7/14</p>
       <p><GroupIcon/> duo</p>
        </div>
        <button>join tournament</button>
        </div>


    </section>

    </main>
  )
}

export default Topfeaturedtournament