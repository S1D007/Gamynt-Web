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
                        <h1>Welcome Mynter!</h1>
                        <h4>Let us Verify You.😊</h4>
                    </nav>
                    {compo}
                    <span>Need Help?</span>
                </section>
            </section>
    </main>
  )
}

export default Authentication