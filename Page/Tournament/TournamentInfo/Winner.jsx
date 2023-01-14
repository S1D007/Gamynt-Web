import React from 'react'
import style from "./info.module.scss"
function Winner() {
  return (
    <div className={style.container} >
    <div className={style.winner} >
        <h1>No Winners Yet</h1>
    </div>
    </div>
  )
}

export default Winner