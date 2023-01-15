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
import Winner from '../../../Page/Tournament/TournamentInfo/Winner';
import PeopleIcon from '@mui/icons-material/People';
import {useRouter} from "next/router"
import { useTournament, useUserData } from '../../../suppliers/zustand/store';
import Participiants from '../../../Page/Tournament/TournamentInfo/Participiants';
function Index({tournament}) {
  const {joinTournament,isDone} = useTournament();
  const {result} = useUserData()
  const route = useRouter()
  const [joined, setJoined] =  useState(false)
  // console.log(t)
  useEffect(()=>{
    tournament.participiants.some(e=>e?.user?._id === result?._id)?setJoined(true):setJoined(false)
  },[tournament,result._id])
  useEffect(()=>{
    isDone && route.reload()
  },[isDone])
  const [pageroute, setpageroute] =  useState(1)
  console.log()
  const [pagecompo, setpagecompo] =  useState("loading .. ")
  new useEffect(() => {
    switch (pageroute) {
      case 1:
        setpagecompo(<Info description={tournament.description} tags={tournament.tags} />)
        break;
      case 2:
        setpagecompo(<Rule rules={tournament.rules} />)
        break;
      case 3:
        setpagecompo(<Creds creds={tournament.creds} />)
        break;
      case 4:
        setpagecompo(<Winner />)
        break;
      case 5:
        setpagecompo(<Participiants participiants={tournament.participiants} />)
        break;
      default:
        setpagecompo("page not found")
        break;
    }
  }, [pageroute])
  return (
    <div className={style.container} >

      <div className={style.banner} >
        <img src={tournament?.bannerImgUrl} />
      </div>
      <div className={style.detailsContainer} >
        <h1>{tournament.title}</h1>
        <div className={style.items} >
          <div className={style._1} >
          <nav className={style.nav}>
        <ul onClick={()=>{setpageroute(1)}}>
          <InfoIcon  />
        </ul>
        <ul onClick={()=>{setpageroute(2)}}>
          <GavelIcon />
        </ul>
        <ul onClick={()=>{setpageroute(3)}}>
          <KeyIcon />
        </ul>
        <ul>
          <EmojiEventsIcon onClick={()=>{setpageroute(4)}} />
        </ul>
        <ul>
          <PeopleIcon onClick={()=>{setpageroute(5)}} />
        </ul>
      </nav>
      {pagecompo}
        {/* <Info desc={tournament.desc} /> */}
          </div>
          <div className={style._2} >
          <div className={style.organizer} >
            <h2>Gamynt Esports</h2>
            {/* <button>View Club</button> */}
          </div>
            <img style={{
              width: "30px",
              borderRadius: "100px"
            }} src="/images/freefire.jpeg" alt="" />
            <div className={style.tournament_info}>
              {tournament?.EntryFees === ""?<p> <img src="/coin.gif" />Free</p>:<p> <img src="/coin.gif" />{EntryFees} GMT</p>}
              <p><img src="/util/prize.webp" alt="" width={35} height={35} />₹ {millify(tournament.PrizePool)}</p>
              <p> <img src="/util/member.png" alt="" width={35} height={35} />{tournament.slot}</p>
              <p> <GroupIcon /> {tournament.mode}</p>
            </div>
            <button disabled={joined} style={{
              backgroundColor:joined&&"#15151a",
              boxShadow:joined&&"0px 0px 10px #000"
            }} onClick={()=>{
              if(!result?.name){
                alert("Please Add a IGN in Profile")
              }else{
                joinTournament({
                _id:result._id,
                idTournament:tournament._id,
                email:result.email,
                amount:tournament.EntryFees === "" ? "-0": `${-parseInt(tournament.Entryfees)}`
              })
              }
            }} >{joined?"Joined":"Join"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

export const getServerSideProps = async (context) =>{
  const id = context.params.id;
  const res = await fetch(`https://gamynt-backend-production.up.railway.app/get-tournament?id=${id}`)
  const tournament = await res.json()
  console.log(tournament)
  return {
    props: {
      tournament:tournament
    }
  }
}