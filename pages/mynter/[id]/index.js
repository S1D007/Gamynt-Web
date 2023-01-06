import React, { useEffect, useState } from 'react'
import Profilecard from '../../../Page/Account/component/Profilecard'
import style from "../../../Page/Account/styles/profile.module.scss"
import FriendsIcon from '@mui/icons-material/Diversity3';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import DynamicFeedIcon from '@mui/icons-material/Stream';
import Post from "../../../Page/Account/component/Post"
import Friends from "../../../Page/Account/component/Post"
import Club from "../../../Page/Account/component/Club"
import Shorts from "../../../Page/Account/component/Shorts"
const index = ({result}) => {
  const [pageroute, setpageroute] = new useState(1)
  // console.log(pageroute)
  const [pagecompo, setpagecompo] = new useState("loading .. ")
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
      <Profilecard followersList={result.followers} followingList={result.following}  email={result.email} username={result.username} followers={result.followCount} posts={result.post} following={result.followingCount} avatar={result.avatar} bio={result.bio} name={result.name} verified={result.isVerified} />
      <nav className={style.nav}>
        <ul onClick={() => { setpageroute(1) }} className={`${pageroute == 1 && style.active_link}`}>
          <DynamicFeedIcon posts={result.post} />
          <li>Posts</li>
        </ul>
        <ul onClick={() => { setpageroute(2) }} className={`${pageroute == 2 && style.active_link}`}>
          <PlayCircleIcon />
          <li>Shorts</li>
        </ul>
        <ul onClick={() => { setpageroute(3) }} className={`${pageroute == 3 && style.active_link}`}>
          <FriendsIcon />
          <li>Clubs</li>
        </ul>
        <ul onClick={() => { setpageroute(4) }} className={`${pageroute == 4 && style.active_link}`}>
          <Diversity2Icon />
          <li>Team</li>
        </ul>
      </nav>
      {pagecompo}
    </main>
  )
}

export default index

export const getServerSideProps = async (context) =>{
    const username = context.params.id;
    const res = await fetch(`https://gamynt-backend.onrender.com/get-user-by-username?username=${username}`)
    const result = await res.json()
    // console.log(result)
    return {
      props: {
        result:result
      }
    }
  }