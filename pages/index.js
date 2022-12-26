import React , {Fragment, useState} from 'react'
import NavBar from '../components/Navbar/NavBar'
import TopNavBar from '../components/Navbar/TopNavBar'
import Crausal from '../Page/Home/Crausal'
import Topfeaturedclubs from "../Page/Home/Topfeaturedclubs"
import Topfeaturedgames from "../Page/Home/Topfeaturedgames"
import Topfeaturedtournament from '../Page/Home/Topfeaturedtournament'
import TopPlayer from '../Page/Home/TopPlayer'

export default function index() {

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
