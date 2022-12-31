import React, { useEffect, useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import style from "./styles/auth.module.scss"


const Authentication = () => {
  
  const [navnumber, setnavnumber] = useState(0)
  const [compo, setcompo] = useState(<Signup/>)

  useEffect(() => {
    {navnumber === 0 ? setcompo(<Signup/>) : setcompo(<Login/>)}
  }, [navnumber])

  return (
    <main className={style.auth_main_container}>
            <section className={style.auth_card_ui}>
                <section className={style.auth_card}>
                    <header>
                <img src="/logo_mini.png" alt="" />
                    </header>
                    <nav>
                        <li className={`${navnumber == 0 && style.active}`} onClick={()=>{setnavnumber(0)}}>Sign up</li>
                        <li className={`${navnumber == 1 && style.active}`} onClick={()=>{setnavnumber(1)}}>Log in</li>
                    </nav>
                    {compo}
                </section>
            </section>
    </main>
  )
}

export default Authentication