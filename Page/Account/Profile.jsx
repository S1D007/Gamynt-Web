import React, { useEffect, useState } from 'react'
import Profilecard from './component/Profilecard'
import style from "./styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';
import Friends from "./component/Tournaments"
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Tournaments from "./component/Tournaments"
import Club from "./component/Club"
import Shorts from "./component/Shorts"
import { useUserData } from "../../suppliers/zustand/store"
const Profile = () => {
  const [pageroute, setpageroute] = new useState(1)
  // console.log(pageroute)
  const [pagecompo, setpagecompo] = new useState("loading .. ")
  const result = useUserData((e) => e.result)
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
  return (
    <main className={style.profile_main}>
      <Profilecard username={result.username} followers={result.followCount} posts={result.post} following={result.followingCount} avatar={result.avatar} bio={result.bio} name={result.name} verified={result.isVerified} hisUid={result._id} />
      <nav className={style.nav}>
      {/* <ul onClick={() => { setpageroute(0) }} className={`${pageroute == 4 && style.active_link}`}>
          <Diversity2Icon />
          <li>Team</li>
        </ul> */}
        <ul onClick={() => { setpageroute(1) }} className={`${pageroute == 1 && style.active_link}`}>
          <EmojiEventsIcon />
          <li>Tournaments</li>
        </ul>
        <ul onClick={() => { setpageroute(2) }} className={`${pageroute == 2 && style.active_link}`}>
          <FriendsIcon />
          <li>Clubs</li>
        </ul>
      </nav>
      {pagecompo}
    </main>
  )
}

export default Profile