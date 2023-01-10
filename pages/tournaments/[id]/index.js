import React from 'react'
import style from "./tournament_id.module.scss"
import InfoIcon from '@mui/icons-material/Info';
import KeyIcon from '@mui/icons-material/Key';
import GavelIcon from '@mui/icons-material/Gavel';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Info from './../../../Page/Tournament/TournamentInfo/Info';
import GroupIcon from '@mui/icons-material/Group';
import millify from "millify"
function index({result}) {
  // const [] = useState(<Info/>)
  return (
    <div className={style.container} >

      <div className={style.banner} >
        <img src={result.bannerImgUrl} />
      </div>
      <div className={style.detailsContainer} >
        <h1>{result.title}</h1>
        <div className={style.items} >
          <div className={style._1} >
          <nav className={style.nav}>
        <ul>
          <InfoIcon />
        </ul>
        <ul>
          <GavelIcon />
        </ul>
        <ul>
          <KeyIcon />
        </ul>
        <ul>
          <EmojiEventsIcon />
        </ul>
      </nav>
        <Info desc={result.desc} />
          </div>
          <div className={style._2} >
          <div className={style.organizer} >
            <h2>Gamynt Esports</h2>
            <button>View Club</button>
          </div>
            <img style={{
              width: "30px",
              borderRadius: "100px"
            }} src="/images/freefire.jpeg" alt="" />
            <div className={style.tournament_info}>
              <p> <img src="/coin.gif" />50 GMT</p>
              <p><img src="/util/prize.webp" alt="" width={35} height={35} />₹ {millify(result.PrizePool)}</p>
              <p> <img src="/util/member.png" alt="" width={35} height={35} />{result.slot}</p>
              <p> <GroupIcon /> {result.mode}</p>
            </div>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index

export const getServerSideProps = async (context) =>{
  const id = context.params.id;
  const res = await fetch(`http://localhost:8080/get-tournament?id=${id}`)
  const result = await res.json()
  // console.log(result)
  return {
    props: {
      result:result
    }
  }
}