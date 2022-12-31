import React from 'react'
import style from "../styles/profilecard.module.scss"
import CreateIcon from '@mui/icons-material/Create';

const Profilecard = ({username,followers,following,posts,avatar,bio}) => {
  return (
    <main className={style.profile_container}>
        <header>
            <button><CreateIcon/> edit</button>
        </header>
        <section className={style.user_info}>
            <div className={style.user_img_follow}>
            <img src={avatar} alt="" />
            <div>
                <ul>
                    {posts?.length}
                    <li>Post</li>
                </ul>
                <ul>
                    {followers}
                    <li>Followers</li>
                </ul>
                <ul>
                    {following}
                    <li>Following</li>
                </ul>
            </div>
            </div>
            <div className={style.user_name_bio}>
                <h1>{username}</h1>
                <p>{bio}</p>
            </div>
        </section>
    </main>
  )
}

export default Profilecard