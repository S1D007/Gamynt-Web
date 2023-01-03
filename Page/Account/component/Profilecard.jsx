import React, { useState } from 'react'
import style from "../styles/profilecard.module.scss"
import CreateIcon from '@mui/icons-material/Create';
import { useRouter } from 'next/router';
import millify from "millify"
const Profilecard = ({username,followers,following,posts,avatar,bio}) => {
    let router = useRouter()
  return (
    <main className={style.profile_container}>
        <header>
            <button onClick={()=>{router.push("/account/editprofile")}}><CreateIcon/> edit</button>
        </header>
        <div className={style.container} >
            <section>
            <div className={style.stats} >
            <img src={avatar} alt="" />
            <span>
                    <h1>{millify(+followers)}</h1>
                        Followers
                    </span>
                    <span>
                    <h1>{millify(+following)}</h1>
                        Following
                    </span>
                    <span>
                    <h1>{millify(+posts?.length)}</h1>
                        Posts
                    </span>
                </div>
        <div className={style.userInfo} >
            <h2>{username}</h2>
            <p>{bio}</p>
        </div>
            </section>
        </div>
    </main>

  )
}

export default Profilecard