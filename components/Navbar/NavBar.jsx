import React, { useState } from 'react'
import Image from "next/image"
import style from "./NavBar.module.scss"
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/ClearAll';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WalletIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DynamicFeedIcon from '@mui/icons-material/Stream';
import { useRouter } from 'next/router';
import { useUserData } from '../../suppliers/zustand/store';

const NavBar = () => {
    let router = useRouter();
    const {result} = useUserData()
    let path = router.pathname
    const [shrikclass, setshrikclass] = useState(null)
    const [shrinkNavAdjust, setShrinkNavAdjust] = useState(null)
    const sidebaradjust = () => {
        if (shrikclass == null) {
            setshrikclass(style.shrink_item)
            setShrinkNavAdjust(style.navbar_adjust)
        }
        else {
            setShrinkNavAdjust(null)
            setshrikclass(null)
        }
    }
    return (
        <nav className={`${style.navbar} ${shrinkNavAdjust}`}>
            <header>
                <MenuIcon onClick={() => sidebaradjust()} />
                <Image className={shrikclass} src="/gamynt_logo.png" alt="" width={200} height={50} />
            </header>
            {/*   -----   links  -----  */}
            <section className={style.nav_link}>

                <li className={`${path == "/" && style.active_link}`} onClick={() => router.push("/")} ><HomeIcon />  <p className={shrikclass}>home</p></li>

                {/* <li className={`${path == "/post" && style.active_link}`} onClick={() => router.push("/post")}><DynamicFeedIcon /> <p className={shrikclass}>Explore</p></li> */}

                <li className={`${path == "/tournaments" && style.active_link}`} onClick={() => router.push("/tournaments")}><EmojiEventsIcon /> <p className={shrikclass}>tournaments</p></li>

                {/* <li className={`${path == "/club" && style.active_link}`} onClick={() => router.push("/club")}><GroupsIcon /> <p className={shrikclass}>clubs</p></li> */}

                <li className={`${style.mob_hiden} ${path == "/store" && style.active_link}`} onClick={() => router.push("/store")}><WalletIcon /> <p className={shrikclass}>store</p></li>
                <li className={`${path == "/account" && style.active_link}`} onClick={() => router.push("/account")}><AccountCircleIcon /> <p className={shrikclass}>profile</p></li>

            </section>

            {/*   -----   mt clubs  -----  */}
            <section className={style.my_clubs}>
                <div>
                    <EmojiEventsIcon />
                    <h2 className={shrikclass}>Joined</h2>
                </div>
                {/* {
                    result?.joinedTou?.map((e,i)=>{
                        {/* console.log(e) */}
                        {/* return <li onClick={()=>router.push(`club/chat/${e.club._id}?cid=0`)} key = {i} > <img src={e?.club?.clubLogo} alt="" width={50} height={50} /> <p className={shrikclass}>{e?.club?.clubName}</p></li>
                    })
                } */}
            </section>

        </nav>
    )
}

export default NavBar