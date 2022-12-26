import React from 'react'
import style from "./styles/clubcard.module.scss"
import VerifiedIcon from '@mui/icons-material/Verified';
import { useRouter } from 'next/router';


const Clubcard = (props) => {
  let router = useRouter()
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
    <p>{props.member} member</p>
    <p>{props.active} active</p>
  </div>
  <button onClick={()=>{router.push("/club/chat")}}>join</button>
</section>
  )
}

export default Clubcard