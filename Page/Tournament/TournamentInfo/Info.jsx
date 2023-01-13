import React from 'react'
import style from "./info.module.scss"
function Info({description,tags}) {
  const tagsList = tags[0].split(",")
  return (
    <div className={style.container} >
        <div className={style.info} >
            <p className={style.desc} >
                {description}
            </p>
            <div className={style.tagsContainer} >
                {
                  tagsList?.map((e,i)=>{
                    return <span key={i} className={style.tags} >#{e}</span>
                  })
                }
            </div>
        </div>
    </div>
  )
}

export default Info