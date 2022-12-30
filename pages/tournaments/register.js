import React from 'react'
import style from "./styles/register.module.scss"
import { useRouter } from 'next/router'

const Register = () => {
    let router = useRouter()
  return (
    <main className={style.register_main_page_container}>
       
            <button onClick={()=>{router.back(-1)}} className={style.back_btn}>back</button>
<main className={style.hero_section}>

        <section className={style.organizer_info}>
        <img src="/images/freefire.jpeg" alt="" />
        <h2>phalana dhimkana tournament </h2>
        <p>bhai tera hero jo na tournament na khele wo zero lol🤣</p>
        <div>
            $400 money
        </div>
        </section>

        <section className={style.tournament_info_container}>
            <header>
            <h1>tournament info</h1>
            </header>
            <section>

            <div className={style.big_info_div}>
                <p>game</p>
                <h1>free fire</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>Mode</p>
                <h1>solo</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>slot</p>
                <h1>12/50 <b>{50-2}left</b></h1>
            </div>
            <div className={style.mini_info_div}>
                <p>entry fee</p>
                <h1>150</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>1st rank</p>
                <h1>150</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>2nd rank</p>
                <h1>150</h1>
            </div>
            <div className={style.mini_info_div}>
                <p>3nd rank</p>
                <h1>150</h1>
            </div>

            </section>
    <button className={style.register_btn}>join</button>
        </section>


</main>



    <section className={style.bg}>
            <img src="/images/freefire.jpeg" alt="" />
        </section>

    </main>
  )
}

export default Register