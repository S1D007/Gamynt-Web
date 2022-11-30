import React from 'react'
import style from "./TopNavBar.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const TopNavbar = () => {
  return (
    <nav className={style.top_navbar}>
        <section className={style.search_box}>
        <input type="text" placeholder='search..'/>
        <SearchIcon/>
        </section>

        <section>
          <div className={style.notification}>
            <NotificationsIcon/>
            <p>34</p>
          </div>
            <div className={style.profile_icon}>
              <h1>p</h1>
            </div>
        </section>
    </nav>
  )
}

export default TopNavbar