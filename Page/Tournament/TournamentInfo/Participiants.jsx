import React from 'react'
import style from "./info.module.scss"
import {useRouter} from "next/router"
// import Participiants from './Participiants';
function Participiants({participiants}) {
    const router = useRouter()
  return (
    <div className={style.container} >
        {participiants?.map(({user},i)=>{
            return <div key={i} className={style.card} >
            <img src={user?.avatar} alt="" />
            <h2> {user?.username} </h2>
            <button onClick={()=>{
                router.push(`/mynter/${user?.username}`)
            }} >View</button>
        </div>
        })}
    </div>
  )
}

export default Participiants