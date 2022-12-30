import React , {Fragment, useEffect, useState} from 'react'
import style from "../styles/club.module.scss"
import Topfeaturedclubs from "../../Page/Clubs/Topfeaturedclubs"
import Exploreclub from "../../Page/Clubs/Exploreclub"
import { useRouter } from 'next/router'
import Joinedclub from '../../Page/Clubs/Joinedclub'

const Club = () => {
  let router = useRouter();
  const [pageroute, setpageroute] = useState(1)
  const [pagecompo, setpagecompo] = useState("loading .. ")
  useEffect(() => {
    switch (pageroute) {
      case 1:
        setpagecompo(<Joinedclub/>)
        break;
      case 2:
        setpagecompo(<Exploreclub />)
        break;
    
      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  

  return (
    <Fragment>
      <Topfeaturedclubs/>
      <nav className={style.club_nav}>
          <ul onClick={()=>{setpageroute(1)}} className={`${pageroute==1 && style.active_link}`}>
            joined
          </ul>
          <ul onClick={()=>{setpageroute(2)}} className={`${pageroute==2 && style.active_link}`}>
            explore
          </ul>
          <ul onClick={()=>{setpageroute(3)}} className={`${pageroute==3 && style.active_link}`}>
            <li>club</li>
          </ul>
        </nav>
      {pagecompo}
   {/* <Exploreclub /> */}
    </Fragment>
  )
}

export default Club