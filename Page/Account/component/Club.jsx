import React from 'react'
import Clubcard from './../../Clubs/Clubcard';
import style from "../styles/profileitem.module.scss"

const Club = ({clubs}) => {
  console.log(clubs)
  return (
    <div className={style.club_container_in_profile}>
      {
        clubs.map(({club},i)=>{
          return <Clubcard key={i} logo={club.clubLogo} banner={club.clubBanner} description={club.description} membersList={club?.membersList} tournaments={club?.tournaments} btn={"View Club"} />
        })
      }
      {/* <Clubcard /> */}
    </div>
  )
}

export default Club