import React from 'react'
import Tournamentcard from './Tournamentcard'
import style from "./styles/tournamentitem.module.scss"
import { useTournament } from '../../suppliers/zustand/store'

const ExploreTournament = () => {
  const {result} = useTournament()
  console.log(result)
  return (
           <main className={style.tournament_card_container}>
           {
            result.map(({date,game,PrizePool,slots,bannerImgUrl,mode,participiants})=>{
              <>
              <Tournamentcard date={date} game={game} PrizePool={PrizePool} slots={slots} bannerImgUrl={bannerImgUrl} mode={mode} left={participiants.length} />
              </>
            })
           }
           </main>
  )
}

export default ExploreTournament