import React, { useEffect, useState } from 'react'
import Profilecard from './component/Profilecard'
import style from "./styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Friends from "./component/Post"
import Diversity2Icon from '@mui/icons-material/Diversity2';
import DynamicFeedIcon from '@mui/icons-material/Stream';
import Post from "./component/Post"
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
        setpagecompo(<Post />)
        break;
      case 2:
        setpagecompo(<Shorts />)
        break;
      case 3:
        setpagecompo(<Club />)
        break;
      case 4:
        setpagecompo(<Friends />)
        break;

      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  return (
    <main className={style.profile_main}>
      <Profilecard username={result.username} followers={result.followCount} posts={result.post} following={result.followingCount} avatar={result.avatar} bio={result.bio} name={result.name} verified={result.isVerified} />
      <nav className={style.nav}>
      <ul onClick={() => { setpageroute(3) }} className={`${pageroute == 4 && style.active_link}`}>
          <Diversity2Icon />
          <li>Team</li>
        </ul>
        <ul onClick={() => { setpageroute(1) }} className={`${pageroute == 1 && style.active_link}`}>
          <DynamicFeedIcon posts={result.post} />
          <li>Posts</li>
        </ul>
        <ul onClick={() => { setpageroute(2) }} className={`${pageroute == 3 && style.active_link}`}>
          <FriendsIcon />
          <li>Clubs</li>
        </ul>
      </nav>
      {pagecompo}
    </main>
  )
}

export default Profile