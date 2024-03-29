import React, { useEffect, useState } from 'react'
import Profilecard from '../../../Page/Account/component/Profilecard'
import style from "../../../Page/Account/styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';
import Club from "../../../Page/Account/component/Club"
import Tournaments from './../../../Page/Account/component/Tournaments';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { useUserData } from "../../../suppliers/zustand/store"
const index = ({result}) => {
  const [pageroute, setpageroute] = new useState(1)
  console.log(result  )
  const [pagecompo, setpagecompo] = new useState("loading .. ")
  new useEffect(() => {
    switch (pageroute) {
      case 1:
        setpagecompo(<Tournaments tournaments={result.joinedTournaments} />)
        break;
      case 2:
        setpagecompo(<Club clubs={result.joinedClubs} />)
        break;
      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  // console.log(result.following)
  return (
    <main data={result} className={style.profile_main}>
      <Profilecard followersList={result.followers} followers={result.followCount} posts={result.post} following={result.followingCount} avatar={result.avatar} followingsList={result.following} name={result.name} verified={result.isVerified} hisUid={result._id} username={result.username} bio={result.bio} />
      <nav className={style.nav} >
      {/* <ul onClick={() => { setpageroute(0) }} className={`${pageroute == 4 && style.active_link}`}>
          <Diversity2Icon />
          <li>Team</li>
        </ul> */}
        {/* <ul onClick={() => { setpageroute(1) }} className={`${pageroute == 1 && style.active_link}`}>
          <EmojiEventsIcon />
          <li>Tournaments</li>
        </ul> */}
        {/* <ul onClick={() => { setpageroute(2) }} className={`${pageroute == 2 && style.active_link}`}>
          <FriendsIcon />
          <li>Team</li>
        </ul> */}
      </nav>
      {pagecompo}
    </main>
  )
}
export default index

export const getServerSideProps = async (context) =>{
    const username = context.params.id;
    const res = await fetch(`https://gamynt-backend-production.up.railway.app/get-user-by-username?username=${username}`)
    const result = await res.json()
    // console.log(result)
    return {
      props: {
        result:result
      }
    }
  }