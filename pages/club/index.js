import React , {Fragment, useEffect, useState} from 'react'
import style from "../styles/club.module.scss"
import Topfeaturedclubs from "../../Page/Clubs/Topfeaturedclubs"
import Exploreclub from "../../Page/Clubs/Exploreclub"
import { useRouter } from 'next/router'
import Joinedclub from '../../Page/Clubs/Joinedclub'
import {useClub} from "../../suppliers/zustand/store"
const Club = () => {
  const {getClubs,result} = useClub()
  let router = useRouter();
  const [pageroute, setpageroute] = useState(1)
  const [pagecompo, setpagecompo] = useState("loading .. ")
  useEffect(() => {
    getClubs()
    switch (pageroute) {
      case 1:
        setpagecompo(<Joinedclub/>)
        break;
      case 2:
        setpagecompo(<Exploreclub data={result} />)
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

// export const getServerSideProps = async (context) =>{
//   // const username = context.params.id;
//   const res = await fetch(`http://localhost:8080/all-clubs`)
//   const result = await res.json()
//   console.log(result)
//   return {
//     props: {
//       result:result
//     }
//   }
// }