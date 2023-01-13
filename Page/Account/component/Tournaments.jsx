import React from 'react'
// import style from "../styles/profileitem.module.scss"
import Tournamentcard from './../../Tournament/Tournamentcard';

const Tournaments = ({tournaments}) => {
  console.log(tournaments)
  return (
    <main>
      {tournaments?.map(({tournament})=>{
        return <section key={Math.random()*10}>
        <Tournamentcard date={tournament.date} game={tournament.game} PrizePool={tournament.PrizePool} slots={tournament.slot} bannerImgUrl={tournament.bannerImgUrl} mode={tournament.mode} id={tournament.id} key={tournament.i} left={tournament.participiants.length}/>
      </section>
      })}
    </main>
  )
}

export default Tournaments