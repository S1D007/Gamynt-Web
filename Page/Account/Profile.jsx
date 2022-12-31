import React, { useEffect, useState } from 'react'
import Profilecard from './component/Profilecard'
import style from "./styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';
import Friends from "./component/Friends"
import Post from "./component/Post"
import Club from "./component/Club"
import Shorts from "./component/Shorts"
import { useUserData } from "../../suppliers/zustand/store"
import { useCookies } from 'react-cookie';
const Profile = () => {
  const [pageroute, setpageroute] = new useState(1)
  const [pagecompo, setpagecompo] = new useState("loading .. ")
  const [cookie, setCookie] = useCookies(['UserInfo'])
  const sendData = useUserData((e) => e.sendDetailstoServer)
  const result = useUserData((e) => e.result)
  console.log(result)
  const uid1 = atob(cookie.UserID)
  const uid = atob(uid1)
  new useEffect(() => {
    sendData({
      loaded: true,
      uid
    })
  }, [])

  new useEffect(() => {
    switch (pageroute) {
      case 1:
        setpagecompo(<Friends />)
        break;
      case 2:
        setpagecompo(<Club />)
        break;
      case 3:
        setpagecompo(<Post />)
        break;
      case 4:
        setpagecompo(<Shorts />)
        break;

      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  return (
    <main className={style.profile_main}>
      <Profilecard username={result.username} followers={result.followCount} posts={result.post} following={result.followingCount} avatar={result.avatar} bio={result.bio} />
      <nav className={style.nav}>
        <ul onClick={() => { setpageroute(1) }} className={`${pageroute == 1 && style.active_link}`}>
          <FriendsIcon />
          <li>friends</li>
        </ul>

        <ul onClick={() => { setpageroute(2) }} className={`${pageroute == 2 && style.active_link}`}>
          <FriendsIcon />
          <li>clubs</li>
        </ul>
        <ul onClick={() => { setpageroute(3) }} className={`${pageroute == 3 && style.active_link}`}>
          <FriendsIcon />
          <li>post</li>
        </ul>
        <ul onClick={() => { setpageroute(4) }} className={`${pageroute == 4 && style.active_link}`}>
          <FriendsIcon />
          <li>shorts</li>
        </ul>
      </nav>
      {pagecompo}
    </main>
  )
}

export default Profile