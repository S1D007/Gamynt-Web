import React, { useState } from 'react'
import BannerAndTournamentInfo from '../../Page/Tournament/create-tournaments/BannerAndTournamentInfo/BannerAndTournamentInfo'
import GetStarted from '../../Page/Tournament/create-tournaments/GetStarted/GetStarted'
function CreateTournament() {
  const [next, setNext] = useState(0)
  if(next === 0){
    return <GetStarted setNext={setNext} />
  }else if(next === 1){
    return <BannerAndTournamentInfo/>
  }else if(next === 2){
    return "Hi"
  }
}

export default CreateTournament
