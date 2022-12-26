import React from 'react'
import style from "../styles/utils.module.scss"

const Message = () => {
  return (
    <main className={style.message_box_main}>
        <img className={style.sender_img} src="/images/freefire.jpeg" alt="" />
        <section className={style.message_and_detail}>
            <header>
                <p>prince raj</p>
                <span>12:34 , 2 dec</span>
            </header>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur reiciendis labore! Quaerat, quidem doloribus accusamus animi eius quo voluptates et ratione dicta expedita, amet corrupti ab illum laudantium possimus.</p>
                {/* <img src="/images/freefire.jpeg" alt="" /> */}
            </div>
        </section>
    </main>
  )
}

export default Message