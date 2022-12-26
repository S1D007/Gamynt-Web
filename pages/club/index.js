import React , {Fragment} from 'react'
import style from "../styles/club.module.scss"
import Topfeaturedclubs from "../../Page/Clubs/Topfeaturedclubs"
import Exploreclub from "../../Page/Clubs/Exploreclub"

const Club = () => {
  return (
    <Fragment>
      <Topfeaturedclubs/>
      <nav className={style.club_nav}>
          <ul className={style.active_link}>
            joined
          </ul>
          <ul>
            explore
          </ul>
          <ul>
            <li>club</li>
          </ul>
        </nav>
      
      {/* <Joindclub /> */}
   <Exploreclub />
    </Fragment>
  )
}

export default Club