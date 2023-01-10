import React from 'react'
import style from "./styles/clubcard.module.scss"
import VerifiedIcon from '@mui/icons-material/Verified';
import { useRouter } from 'next/router';
import { useClub,useUserData } from '../../suppliers/zustand/store';


const Clubcard = (props) => {
  let router = useRouter()
  const {addMember} = useClub()
  const {result} = useUserData()
  return (
    <section className={style.club_card}>
  <header>
<img src={props.banner} alt="banner" />
  </header>
  <div className={style.profile_img}>
  <img src={props.logo}  alt="" />
  <h1>{props.name} {props.batch}</h1>
  </div>
  <div className={style.club_info}>
    <p>{props.description}</p>
  </div>
  <button onClick={()=>{
    addMember({
      username:result.username,
      _id:props.uid,
      avatar:result.avatar
    })
    router.push(`/club/chat/${props.uid}`)
  }}>join</button>
</section>
  )
}

export default Clubcard