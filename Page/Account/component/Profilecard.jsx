import React from 'react'
import style from "../styles/profilecard.module.scss"
import CreateIcon from '@mui/icons-material/Create';

const Profilecard = () => {
  return (
    <main className={style.profile_container}>
        <header>
            <button><CreateIcon/> edit</button>
        </header>
        <section className={style.user_info}>
            <div className={style.user_img_follow}>
            <img src="/images/freefire.jpeg" alt="" />
            <div>
                <ul>
                    24
                    <li>post</li>
                </ul>
                <ul>
                    2444
                    <li>follow</li>
                </ul>
                <ul>
                    24
                    <li>follwer</li>
                </ul>
            </div>
            </div>
            <div className={style.user_name_bio}>
                <h1>name is name</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero saepe eaque incidunt officiis ratione illum, aperiam quaerat quasi velit! Inventore tenetur commodi</p>
            </div>
        </section>
    </main>
  )
}

export default Profilecard