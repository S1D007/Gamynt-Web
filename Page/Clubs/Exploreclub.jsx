import React,{useState,useEffect} from 'react'
import Clubcard from './Clubcard'
import style from "./styles/clubitem.module.scss"
import VerifiedIcon from '@mui/icons-material/Verified';
import { useUserData } from '../../suppliers/zustand/store';

const Exploreclub = ({data}) => {
    const {result} = useUserData()
    console.log(data)
    const [clubs,setClubs] = useState([])
    // useEffect(()=>{
    //   const filtered = result?.joinedClubs.filter((e)=>{
    //     return e !== !data._id
    //   })
    //   // console.log(filtered)
    //   setClubs(filtered)
    // },[data])
  return (
    <main className={style.club_card_container}>
    {
      data?.map((e,i)=>{
        {/* console.log(e) */}
          return <Clubcard key={i} logo={e?.clubLogo} banner={e?.clubBanner} description={e?.description} membersList={e?.membersList} tournaments={e?.tournaments} _id={e?._id} btn={"Join Club"} />
        })
    }
    </main>
  )
}

export default Exploreclub