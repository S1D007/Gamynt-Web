import React from 'react'
import style from "./styles/crausal.module.scss"
import Image from "next/image"

const Crausal = () => {
  return (
    <main className={style.main_crausal}>
      <section className={style.auto_scroll_crausal}>
        <Image src="/banner_1.png" alt="" width={1000} height={500}/>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ut obcaecati eaque iusto! Doloribus, repudiandae sint ab perspiciatis explicabo </p>
          <button>check out</button>
        </div>
      </section>

<section className={style.crausal_mini_scrollable}>
  <div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
  <Image src="/banner_1.png" alt="" width={200} height={100}/>
  </div>
  <div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
  <Image src="/banner_1.png" alt="" width={200} height={100}/>
  </div>
  <div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
  <Image src="/banner_1.png" alt="" width={200} height={100}/>
  </div>
  <div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
  <Image src="/banner_1.png" alt="" width={200} height={100}/>
  </div>
  <div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
  <Image src="/banner_1.png" alt="" width={200} height={100}/>
  </div>
</section>

    </main>
  )
}

export default Crausal