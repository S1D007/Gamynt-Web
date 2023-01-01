import React from 'react'
import style from "./Styles/createpost.module.scss"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PollIcon from '@mui/icons-material/Poll';
const Createpost = () => {
  return (
    <main className={style.create_post_main}>
      <textarea name="" id="" cols="10" rows="5" placeholder='share your thought'></textarea>
      <section className={style.more_inputs}>
        <div><PhotoSizeSelectActualIcon/></div>
        <div><PollIcon/></div>
        <div>post</div>
      </section>
    </main>
  )
}

export default Createpost