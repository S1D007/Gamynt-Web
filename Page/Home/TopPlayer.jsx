import React from 'react'
import Image from "next/image"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import style from "./styles/leader.module.scss"

const TopPlayer = () => {
  return (
    <main className={style.top_leaderboard_main}>
<header >
  <h2  style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"10px"
}}>top player of the weak   <img src={"/trophy.gif"} style={{
    width:"50px",
  }} />
</h2>
</header>
<section className={style.crausal_container}>
    <fieldset className={style.player_box}>
<legend><EmojiEventsIcon/> 1 <span>st</span></legend>
<div>
    <Image src="/images/pubg.jpeg" alt="" width={200} height={200}/>
    <h2>name is name </h2>
</div>
    <p>1300 point</p>
    <button>view profile</button>
    </fieldset>
    <fieldset className={style.player_box}>
<legend><EmojiEventsIcon/> 1 <span>st</span></legend>
<div>
    <Image src="/images/pubg.jpeg" alt="" width={200} height={200}/>
    <h2>name is name</h2>
</div>
    <p>1300 point</p>
    <button>view profile</button>
    </fieldset>
    <fieldset className={style.player_box}>
<legend><EmojiEventsIcon/> 1 <span>st</span></legend>
<div>
    <Image src="/images/pubg.jpeg" alt="" width={200} height={200}/>
    <h2>name is name</h2>
</div>
    <p>1300 point</p>
    <button>view profile</button>
    </fieldset>
</section>
    </main>
  )
}

export default TopPlayer