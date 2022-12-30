import React from 'react'
import Tournamentcard from './Tournamentcard'
import style from "./styles/tournamentitem.module.scss"

const ExploreTournament = () => {
  return (
           <main className={style.tournament_card_container}>
           <Tournamentcard />
           <Tournamentcard />
           <Tournamentcard />
           <Tournamentcard />
           <Tournamentcard />
           <Tournamentcard />
           </main>
  )
}

export default ExploreTournament