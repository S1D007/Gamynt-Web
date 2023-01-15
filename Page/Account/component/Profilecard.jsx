import React, { useState, useEffect } from 'react'
import style from "../styles/profilecard.module.scss"
import CreateIcon from '@mui/icons-material/Create';
import { useRouter } from 'next/router';
import millify from "millify"
import VerifiedIcon from "../../../public/verified.png"
import { useUserData } from '../../../suppliers/zustand/store';
import LogoutIcon from '@mui/icons-material/Logout';
import { useCookies } from 'react-cookie';
const Profilecard = ({ email, username, followers, following, posts, avatar, bio, name, verified, followersList, hisUid, followingsList }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['UserInfo']);

    const { followOrUnFollow } = useUserData()
    const { result, reload } = useUserData()
    let router = useRouter()
    const [follow, setFollow] = useState(followersList?.some(user => user?.user?._id !== result?._id) ? -1 : 1)
    console.log(follow)
    const [disable, setDisable] = useState(false)
    useEffect(() => {
        if (reload) {
            router.reload()
        }
    }, [reload])
    return (
        <main className={style.profile_container}>
            <header>
                {
                    !router.pathname.includes("mynter") &&
                    <div style={{
                        display: "flex",
                        gap: "20px"
                    }} >
                        <button onClick={() => { router.push("/account/editprofile") }}><CreateIcon /></button><button onClick={() => {
                            removeCookie(['UserInfo'])
                            removeCookie('UserID',{path:'/'});
                            removeCookie('LoggedIN',{path:'/'});
                            router.reload()
                        }}><LogoutIcon /></button>
                    </div>
                }
            </header>
            <div className={style.container} >
                <section>
                    <div className={style.stats} >
                        <img src={avatar} style={{
                            boxShadow: `0px 0px 60px ${""}`,
                            outline: `4px solid ${""} `,
                            outlineOffset: "2px",
                            borderRadius: "100px",
                            width: "6rem",
                            height: "6rem",
                            marginRight: "1rem"
                        }} alt="" />
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
                        <h2>{name} {router.pathname.includes("mynter") && username !== result.username && <span style={{
                            fontSize: "1rem",
                            display: "inline-block",
                            // alignItems:"center",
                            // flexDirection:"row",
                            marginLeft: "5px",
                            borderRadius: "10px"
                            // textAlign:"center"
                        }} >
                            <button disabled={disable} onClick={() => {
                                setFollow(follow === 1 ? -1 : 1)
                                setDisable(true)
                                followOrUnFollow({
                                    value: follow,
                                    hisUid,
                                    myUid: result._id
                                })
                            }} style={{
                                padding: "5px 10px",
                                alignself: "center",
                                backgroundColor: `${follow === -1 ? "#000" : "var(--primary-color)"}`,
                            }} >{follow === -1 ? "Following" : "Follow"}</button>
                        </span>} </h2>
                        <h4 style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                            marginTop: "10px"
                        }} >@{username} {verified && <img src={"https://www.pngkey.com/png/full/662-6622005_verified-icon-trust-transparent-pictures-png-verified.png"} width={20} alt="" />} </h4>
                        <p>{bio}
                        </p>
                    </div>
                </section>
            </div >
        </main >

    )
}

export default Profilecard