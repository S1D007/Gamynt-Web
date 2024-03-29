import React, { Fragment, useEffect, useState } from 'react'
import ExploreTournament from '../../Page/Tournament/ExploreTournament'
import TopFeaturedtournament from '../../Page/Tournament/TopFeaturedtournament'
import Trendingtournament from '../../Page/Tournament/Trendingtournament'
import { useTournament } from '../../suppliers/zustand/store'
import style from "../styles/tournament.module.scss"

function Index() {
  const [pageroute, setpageroute] = new useState(1)
  const [pagecompo, setpagecompo] = new useState("loading .. ")
  new useEffect(() => {
    switch (pageroute) {
      case 1:
        setpagecompo(<Trendingtournament/>)
        break;
      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  return (
    <Fragment>
      {/* <TopFeaturedtournament/> */}
       <nav className={style.tournament_nav}>
         <ul onClick={()=>{setpageroute(1)}} className={`${pageroute==1 && style.active_link}`}>
            trending
          </ul>
          {/* <ul onClick={()=>{setpageroute(2)}} className={`${pageroute==2 && style.active_link}`}>
            explore
          </ul> */}
          <ul>
            filter
          </ul>
        </nav>
        {pagecompo}
    </Fragment>
  )
}

export default Index