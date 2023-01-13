import React from 'react'
import style from "./info.module.scss"
function Rule({rules}) {
  console.log(rules)
  return (
    <div className={style.container} >
        <div className={style.info} >
            <p className={style.rules} >
                {
                  rules? rules : <div>
                    <ul>
                      <li><span>➥ </span>Be Ready 10 min before Match Starts because ID and Password will be Given</li>
                      <li><span>➥ </span>Dont use Any type of Hack</li>
                      <li><span>➥ </span>Dont leave the Match before it Ends.Our Mods will Watch you</li>
                    </ul>
                  </div>
                }
            </p>
        </div>
    </div>
  )
}

export default Rule