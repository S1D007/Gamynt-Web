import React from 'react'
import style from "./styles/tournamentcard.module.scss"
import GroupIcon from '@mui/icons-material/Group';
import { useRouter } from 'next/router';
import millify from "millify"

const Tournamentcard = ({date,game,PrizePool,slots,bannerImgUrl,mode,id,left}) => {
  let router = useRouter()
  return (
    <main className={style.tournament_item}>
      <div className={style.image_space}>
        <img src={bannerImgUrl} alt="" width={200} height={200} />
        <span>{date}</span>
      </div>
      <div className={style.admin_detail}>
        <img src="/images/freefire.jpeg" alt="" width={50} height={50} />
        <h3>gamynt admin</h3>
      </div>
      <div className={style.tournament_info}>

        <p> <img src="/images/freefire.jpeg" alt="" width={25} height={25} />{game === "ff"&& "Free Fire" ||
        game === "pubg"&& "PUBG"
        }</p>
        <p><img src="/util/prize.webp" alt="" width={35} height={35} />₹ {millify(PrizePool)}</p>
        <p> <img src="/util/member.png" alt="" width={35} height={35} />{left}/{slots}</p>
        <p><GroupIcon /> {mode}</p>
      </div>
      <button onClick={() => { router.push(`/tournaments/${id}`) }}>join tournament</button>
    </main>

  )
}

export default Tournamentcard