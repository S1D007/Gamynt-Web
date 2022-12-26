import React, { useState } from 'react'
import Profilecard from './component/Profilecard'
import style from "./styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';
import Friends from "./component/Friends"
import Post from "./component/Post"
import Club from "./component/Club"
import Shorts from "./component/Shorts"

const Profile = () => {
  return (
    <main className={style.profile_main}>
        <Profilecard/>
        <nav className={style.nav}>
          <ul>
            <FriendsIcon/>
            <li>friends</li>
          </ul>

          <ul>
            <FriendsIcon/>
            <li>clubs</li>
          </ul>
          <ul>
            <FriendsIcon/>
            <li>post</li>
          </ul>
          <ul>
            <FriendsIcon/>
            <li>shorts</li>
          </ul>
        </nav>
        <Friends />
        <Club />
        <Post />
        <Shorts />
    </main>
  )
}

export default Profile