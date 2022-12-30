import React from 'react'
import Tournamentcard from './Tournamentcard'
import style from "./styles/tournamentitem.module.scss"


const TopFeaturedtournament = () => {
  return (
    <main className={style.top_featured_tournament}>
    <Tournamentcard />
    <Tournamentcard />
    <Tournamentcard />
    <Tournamentcard />
    <Tournamentcard />
    <Tournamentcard />
    </main>
  )
}

export default TopFeaturedtournament