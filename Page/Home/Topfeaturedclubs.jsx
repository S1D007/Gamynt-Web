import React from 'react'
// import Image from "next/image"
import style from "./styles/homeitem.module.scss"
import GroupsIcon from '@mui/icons-material/Groups';
import { useClub } from '../../suppliers/zustand/store';
import {useRouter} from "next/router"
const Topfeaturedclubs = () => {
  const {result} = useClub()
  console.log(result)
  const route = useRouter()
  return (
    <main className={style.top_featured_container}>
      <header >
        <h2 style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          marginBottom: "-50px"
        }}>Top Feadtured Clubs  <img src={"/club.gif"} style={{
          width: "100px",
        }} />
        </h2>
      </header>
      <section className={style.crausal_container}>
        {
          result?.map(({membersList,clubLogo,clubName,_id},i)=>{
            return <div key={i} className={style.club_item}>
          <img src={clubLogo} alt="" width={200} height={200} />
          <div>
            <h1>{clubName}</h1>
            <p><GroupsIcon /> {membersList.length}</p>
            <button onClick={()=>{
              route.push(`club/chat/${_id}`)
            }} >join</button>
          </div>
        </div>
          })
        }
      </section>

    </main>
  )
}

export default Topfeaturedclubs