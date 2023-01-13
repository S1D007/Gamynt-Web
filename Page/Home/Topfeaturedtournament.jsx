import Image from 'next/image'
import React from 'react'
import style from "./styles/homeitem.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import { useTournament } from '../../suppliers/zustand/store';
import Tournamentcard from './../Tournament/Tournamentcard';

const Topfeaturedtournament = () => {
  const {result} = useTournament()
  return (
    <main className={style.top_featured_container}>
<header >
  <h2  style={{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"1px",
    marginBottom:"-30px"
}}>Top Tournaments  <img src={"/tournament.gif"} style={{
    width:"100px",
  }} />
</h2>
</header>
    <section className={style.crausal_container}>
    {
      result?.map(({date,game,PrizePool,slot,bannerImgUrl,mode,id,participiants},i)=>{
        {/* console.log(e) */}
        return <Tournamentcard date={date} game={game} PrizePool={PrizePool} slots={slot} bannerImgUrl={bannerImgUrl} mode={mode} id={id} key={i} left={participiants.length}/>
      })
    }
    </section>

    </main>
  )
}

export default Topfeaturedtournament