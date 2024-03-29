import React from 'react'
import Tournamentcard from './Tournamentcard'
import style from "./styles/tournamentitem.module.scss"
import { useTournament } from '../../suppliers/zustand/store'

const Trendingtournament = () => {
  const {result} = useTournament()
  // console.log({
  //   res:result
  // })
  return (
           <main className={style.tournament_card_container}>
           {
            result.map(({date,game,PrizePool,slot,bannerImgUrl,mode,id,participiants})=>{
              return <>
              <Tournamentcard date={date} game={game} PrizePool={PrizePool} slots={slot} bannerImgUrl={bannerImgUrl} mode={mode} id={id} left={participiants.length} />
              </>
            })
           }
           </main>
  )
}

export default Trendingtournament