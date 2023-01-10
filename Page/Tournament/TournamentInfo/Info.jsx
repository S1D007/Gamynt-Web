import React from 'react'
import style from "./info.module.scss"
function Info() {
  return (
    <div className={style.container} >
        <div className={style.info} >
            <p className={style.desc} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus doloribus natus sint non a, odit maxime labore dignissimos vitae. Perspiciatis qui illo culpa vero voluptatum fugiat pariatur aut nihil quia enim?
            </p>
            <div className={style.tagsContainer} >
                <span className={style.tags} >#TGF</span>
                <span className={style.tags} >#TVF</span>
                <span className={style.tags} >#FF</span>
            </div>
        </div>
    </div>
  )
}

export default Info