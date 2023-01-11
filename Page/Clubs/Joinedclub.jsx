import React from 'react'
import Clubcard from './Clubcard'
import style from "./styles/clubitem.module.scss"
import VerifiedIcon from '@mui/icons-material/Verified';
import {useClub,useUserData} from "../../suppliers/zustand/store"

const Joinedclub = () => {
  const {getClubByID} = useClub()
  const {result} = useUserData()
  // let testimg = "/images/freefire.jpeg"
  console.log(result?.joinedClubs)
  return (
    <main className={style.club_card_container}>
  {
    result?.joinedClubs?.map(({banner,logo,clubID,name})=>{
      console.log(banner)
      return <Clubcard key={clubID} banner={banner} logo={logo} name={name} uid={clubID}/>
    })
  }
    </main>
  )
}

export default Joinedclub