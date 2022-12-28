import React, { Fragment, useEffect, useState } from 'react'
import ExploreTournament from '../../Page/Tournament/ExploreTournament'
import TopFeaturedtournament from '../../Page/Tournament/TopFeaturedtournament'
import style from "../styles/tournament.module.scss"

function index() {
  const [pageroute, setpageroute] = new useState(1)
  const [pagecompo, setpagecompo] = new useState("loading .. ")
  new useEffect(() => {
    switch (pageroute) {
      case 2:
        setpagecompo(<ExploreTournament/>)
        break;
    
      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  return (
    <Fragment>
      <TopFeaturedtournament/>
       <nav className={style.tournament_nav}>
         <ul onClick={()=>{setpageroute(1)}} className={`${pageroute==1 && style.active_link}`}>
            trending
          </ul>
          <ul onClick={()=>{setpageroute(2)}} className={`${pageroute==2 && style.active_link}`}>
            explore
          </ul>
          <ul>
            filter
          </ul>
        </nav>
        {pagecompo}
    </Fragment>
  )
}

export default index