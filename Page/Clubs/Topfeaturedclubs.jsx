import React from 'react'
import style from "./styles/clubitem.module.scss"
import Clubcard from "./Clubcard"

const Topfeaturedclubs = () => {
  return (
    <main className={style.top_featured_club}>
      <Clubcard />
      <Clubcard />
      <Clubcard />
    </main>
  )
}

export default Topfeaturedclubs