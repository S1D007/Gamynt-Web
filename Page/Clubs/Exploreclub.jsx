import React,{useState,useEffect} from 'react'
import Clubcard from './Clubcard'
import style from "./styles/clubitem.module.scss"
import VerifiedIcon from '@mui/icons-material/Verified';
import { useUserData } from '../../suppliers/zustand/store';

const Exploreclub = ({data}) => {
    const {result} = useUserData()
    // console.log(result)
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
      data?.map(({clubName,description,_id,clubBanner,clubLogo})=>{
        return <Clubcard key={_id} uid={_id} banner={clubBanner} logo={clubLogo} name={clubName} description={description} batch={<VerifiedIcon/>} />
      })
    }
    </main>
  )
}

export default Exploreclub