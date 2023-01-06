import React, { useEffect, useState,useCallback } from 'react'
import Signup from './Signup'
import Login from './Login'
import style from "./styles/auth.module.scss"


const Authentication = () => {
  // useCallback(()=>{
  //   function json(url) {
  //     return fetch(url).then(res => res.json());
  //   }
  //   let apiKey = '3d9b84697e4455eacb3a36a2dca1db9f8c5f76fe7a133b762b0cc2ed';
  //   json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  //     console.log(data.ip);
  //     console.log(data);
  //     // console.log(data.country_code);
  //     // so many more properties
  //   });
  // },[])  
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