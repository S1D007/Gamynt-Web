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
    result?.joinedClubs?.map((e,i)=>{
        {/* console.log(e) */}
          return <Clubcard key={i} logo={e?.club?.clubLogo} banner={e?.club?.clubBanner} description={e?.club?.description} membersList={e?.club?.membersList} tournaments={e?.club?.tournaments} _id={e?.club?._id} btn={"View Club"} />
        })
  }
    </main>
  )
}

export default Joinedclub