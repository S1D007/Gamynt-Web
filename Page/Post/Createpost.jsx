import React from 'react'
import style from "./Styles/createpost.module.scss"

const Createpost = () => {
  return (
    <main className={style.create_post_main}>
      <textarea name="" id="" cols="10" rows="5" placeholder='share your thought'></textarea>
      <section className={style.more_inputs}>
        <div>image</div>
        <div>poll</div>
        <div>post</div>
      </section>
    </main>
  )
}

export default Createpost