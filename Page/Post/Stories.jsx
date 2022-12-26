import React from 'react'
import style from "./Styles/stories.module.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Stories = () => {
  return (
    <main className={style.stories_main}>
      <div className={style.scroll_btn}> <ArrowForwardIosIcon/> </div>
      <section className={style.stories_container}>

        <div className={style.single_storie_box}>
        <img src="/images/freefire.jpeg" alt="free" />
        <p>lorem hu mai lorem</p>
        </div>
      </section>

      <div className={style.scroll_btn}> <ArrowForwardIosIcon/> </div>
    </main>
  )
}

export default Stories