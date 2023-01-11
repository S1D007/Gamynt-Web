import React,{useState,useEffect} from 'react'
import style from "./tournament_id.module.scss"
import InfoIcon from '@mui/icons-material/Info';
import KeyIcon from '@mui/icons-material/Key';
import GavelIcon from '@mui/icons-material/Gavel';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Info from './../../../Page/Tournament/TournamentInfo/Info';
import GroupIcon from '@mui/icons-material/Group';
import millify from "millify"
import Rule from './../../../Page/Tournament/TournamentInfo/Rule';
import Creds from '../../../Page/Tournament/TournamentInfo/Creds';
function index({result}) {
  // const [] = useState(<Info/>)
  const [pageroute, setpageroute] = new useState(1)
  // console.log(pageroute)
  const [pagecompo, setpagecompo] = new useState("loading .. ")
  // const result = useUserData((e) => e.result)
  new useEffect(() => {
    switch (pageroute) {
      case 1:
        setpagecompo(<Info />)
        break;
      case 2:
        setpagecompo(<Rule />)
        break;
      case 3:
        setpagecompo(<Creds />)
        break;
      case 4:
        // setpagecompo(<Friends />)
        break;

      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
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
        <ul onClick={()=>{setpageroute(1)}}>
          <InfoIcon  />
        </ul>
        <ul onClick={()=>{setpageroute(2)}}>
          <GavelIcon  />
        </ul>
        <ul onClick={()=>{setpageroute(3)}}>
          <KeyIcon  />
        </ul>
        <ul>
          <EmojiEventsIcon />
        </ul>
      </nav>
      {pagecompo}
        {/* <Info desc={result.desc} /> */}
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
  const res = await fetch(`https://gamynt-backend-production.up.railway.app/get-tournament?id=${id}`)
  const result = await res.json()
  // console.log(result)
  return {
    props: {
      result:result
    }
  }
}