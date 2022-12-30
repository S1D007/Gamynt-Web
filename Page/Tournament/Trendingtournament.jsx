import React from 'react'
import style from "./styles/tournamentitem.module.scss"
import Tournamentcard from './Tournamentcard'

const Trendingtournament = () => {
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
export default Trendingtournament