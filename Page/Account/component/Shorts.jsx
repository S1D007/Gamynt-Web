import React from 'react'
import style from "../styles/profileitem.module.scss"
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const Shorts = () => {
  return (
    <main className={style.shorts_container}>
      <section className={style.shorts_box}>
        <img src="/images/freefire.jpeg" alt="" />
        <MovieFilterIcon />
        <div>
          <p>22k views</p>
          <p>22k like</p>
        </div>
      </section>
      <section className={style.shorts_box}>
        <img src="/images/freefire.jpeg" alt="" />
        <MovieFilterIcon />
        <div>
          <p>22k views</p>
          <p>22k like</p>
        </div>
      </section>
      <section className={style.shorts_box}>
        <img src="/images/freefire.jpeg" alt="" />
        <MovieFilterIcon />
        <div>
          <p>22k views</p>
          <p>22k like</p>
        </div>
      </section>
      <section className={style.shorts_box}>
        <img src="/images/freefire.jpeg" alt="" />
        <MovieFilterIcon />
        <div>
          <p>22k views</p>
          <p>22k like</p>
        </div>
      </section>
      <section className={style.shorts_box}>
        <img src="/images/freefire.jpeg" alt="" />
        <MovieFilterIcon />
        <div>
          <p>22k views</p>
          <p>22k like</p>
        </div>
      </section>
      <section className={style.shorts_box}>
        <img src="/images/freefire.jpeg" alt="" />
        <MovieFilterIcon />
        <div>
          <p>22k views</p>
          <p>22k like</p>
        </div>
      </section>
    </main>
  )
}

export default Shorts