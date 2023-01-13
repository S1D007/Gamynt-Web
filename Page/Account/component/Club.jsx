import React from 'react'
import Clubcard from './../../Clubs/Clubcard';

const Club = ({clubs}) => {
  console.log(clubs)
  return (
    <div>
      {
        clubs.map(({club},i)=>{
          return <Clubcard key={i} logo={club.clubLogo} banner={club.clubBanner} description={club.description} membersList={club?.membersList} tournaments={club?.tournaments} btn={"View Club"} />
        })
      }
    </div>
  )
}

export default Club