import React from 'react'
import style from "./styles/clubcard.module.scss"
import VerifiedIcon from '@mui/icons-material/Verified';
import { useRouter } from 'next/router';
import { useClub,useUserData } from '../../suppliers/zustand/store';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


const Clubcard = (props) => {
  let router = useRouter()
  const {addMember} = useClub()
  const {result} = useUserData()
  return (
    <main className={style.club_card}>
  <header>
<img src={props.banner} alt="banner" />
  </header>
  <div className={style.profile_img}>
  <img src={props.logo}  alt="" />
  <h1>{props.name} {props.batch}</h1>
  </div>
  <div className={style.club_info}>
    <p>{props.description}</p>
    <div className={style.user} >
      <p><GroupsIcon/>{props?.membersList?.length}</p>
      <p><EmojiEventsIcon/>{props?.tournaments?.length}</p>
    </div>
  </div>
  <button onClick={()=>{
    addMember({
      userID:result._id,
      _id:props._id,
    })
    router.push(`/club/chat/${props._id}?cid=0`)
  }}>{props.btn}</button>
</main>
  )
}

export default Clubcard