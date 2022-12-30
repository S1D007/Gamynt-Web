import React from 'react'
import style from "./styles/tournamentcard.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import { useRouter } from 'next/router';


const Tournamentcard = () => {
  let router = useRouter()
  return (
    <main className={style.tournament_item}>
    <div className={style.image_space}>
      <img src="/images/freefire.jpeg" alt="" width={200} height={200}/>
      <span>2 thu 2:50 pm</span>
    </div>
    <div className={style.admin_detail}>
      <img src="/images/freefire.jpeg" alt="" width={50} height={50}/>
      <h3>gamynt admin</h3>
    </div>
      <div className={style.tournament_info}>
      
     <p> <img src="/images/freefire.jpeg" alt="" width={25} height={25}/>  free fire</p>
     <p><img src="/util/prize.webp" alt="" width={35} height={35}/>₹ 250</p>
     <p> <img src="/util/member.png" alt="" width={35} height={35}/>7/14</p>
     <p><GroupIcon/> duo</p>
      </div>
      <button onClick={()=>{router.push("/tournaments/register")}}>join tournament</button>
      </main>

  )
}

export default Tournamentcard