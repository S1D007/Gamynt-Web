import React , {Fragment, useState} from 'react'
import Crausal from '../Page/Home/Crausal'
import Topfeaturedclubs from "../Page/Home/Topfeaturedclubs"
import Topfeaturedgames from "../Page/Home/Topfeaturedgames"
import Topfeaturedtournament from '../Page/Home/Topfeaturedtournament'
import TopPlayer from '../Page/Home/TopPlayer'

export default function Index() {
  return (
       <Fragment>
     <Crausal/>
     <TopPlayer/>
     <Topfeaturedtournament/>
     <Topfeaturedclubs />
     <Topfeaturedgames />
     </Fragment>
  )
}
