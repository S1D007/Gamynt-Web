import React,{useEffect,useRef,useState} from 'react'
import style from "./styles/crausal.module.scss"
import Image from "next/image"

const Crausal = () => {
  const [index,setIndex] = useState(0)
  const data = [
    {
      img:"http://res.cloudinary.com/dd2rk71gb/image/upload/v1673514921/bbcfslgy8kge1x2kmwho.gif",
      text:"Welcome To Gamynt",
    },
    {
      img:"/banner2.jpeg",
      text:"GMT? What is this?"
    },
    {
      img:"/banner3.jpeg",
      text:"24/7 Support Contact gamynt.app@gmail.com"
    },
    {
      img:"/banner1.jpeg",
      text:"How To use GMT Coins"
    }
  ]
  useEffect(()=>{
    const randIndex = Math.floor(Math.random() * data.length);
    setIndex(randIndex)
    // setTimeout(()=>{
    // },2000)
  },[index])
  return (
    <main className={style.main_crausal}>
      <section className={style.auto_scroll_crausal}>
      <img src={data[index].img} alt="" width={1000} height={500}/>
        <div>
          <h1>{data[index]?.text}</h1>
          {/* <button>check out</button> */}
        </div>
      </section>

<section className={style.crausal_mini_scrollable}>
  {
    data.map(({img,text},i)=>{
      return <div key={i} onClick={()=>setIndex(i)} >
    <p>{text}</p>
  <img src={img} alt="" width={200} height={100}/>
  </div>
    })
  }
</section>

    </main>
  )
}

export default Crausal