import React from 'react'
import Tournamentcard from './Tournamentcard'
import style from "./styles/tournamentitem.module.scss"
import { useTournament } from '../../suppliers/zustand/store'

const ExploreTournament = () => {
  const {result} = useTournament()
  return (
           <main className={style.tournament_card_container}>
           {
            result.map(({date,game,PrizePool,slots,bannerImgUrl,mode})=>{
              <>
              <Tournamentcard date={date} game={game} PrizePool={PrizePool} slots={slots} bannerImgUrl={bannerImgUrl} mode={mode} />
              </>
            })
           }
           </main>
  )
}

export default ExploreTournament