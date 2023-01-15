import React from 'react'
import style from "../styles/profileitem.module.scss"
import Tournamentcard from './../../Tournament/Tournamentcard';

const Tournaments = ({tournaments}) => {
  // console.log(tournaments)
  return (
    <main className={style.tournament_container}>
      {tournaments?.map(({tournament},i)=>{
        return <section key={Math.random()*10}>
        <Tournamentcard date={tournament.date} game={tournament.game} PrizePool={tournament.PrizePool} slots={tournament.slot} bannerImgUrl={tournament.bannerImgUrl} mode={tournament.mode} id={tournament.id} key={i} left={tournament?.participiants?.length}/>
      </section>
      })}
    </main>
  )
}

export default Tournaments