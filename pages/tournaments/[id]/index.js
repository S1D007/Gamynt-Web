import React from 'react'
import style from "./tournament_id.module.scss"
function index() {
  return (
    <div>
    
      <div className={style.banner} >
      <img src={"/banner_1.png"} />
      </div>
      <div style={{
          display:"flex",
          justifyContent:"center"
        }} >
        <div>
          <h1>Free Fire T3 Championship 2023</h1>
        </div>
        </div>
      <section className={style.container_info} >
      <div className={style.tournament_info} >
        <div className={style.organizer_info} >
          <img src={"/logo_mini.png"} />
          <div className={style.info}><h1>Organised By <strong>Gamynt</strong></h1></div>
          <button>View Club</button>
        </div>
        <div className={style.tournament_details} >
          <div>
            <img src={"/util/member.png"} alt="" />
            <h1>50/120</h1>
          </div>
          <div>
            <img src={"/util/prize.webp"} alt="" />
            <h1>Rs.5000</h1>
          </div>
        </div>
          <div className={style.description} >
            <h1>Description</h1><span>Play and Earn thousands of Rs. Just by Joining Our Tournament. This Tournament is Free to Join</span>
          </div>
          <div className={style.tags} >
            <div>#Free Fire</div>
            <div>#Tournament</div>
            <div>#Gameplay</div>
          </div>
        <div className={style.top_player_joined} >
        <h1>Players Joined</h1>
          <div>
          <img src={"/logo_mini.png"} alt="" />
          <h1>Siddhant</h1>
          </div>
          <div>
          <img src={"/logo_mini.png"} alt="" />
          <h1>Prince Raj</h1>
          </div>
          <div>
          <img src={"/logo_mini.png"} alt="" />
          <h1>Raj Gupta</h1>
          </div>
          <span>
            View More
          </span>
        </div>
        <div className={style.ads} >
        <h1>Banner Ads</h1>
</div>
        <div>
          <button className={style.join} >Join Tournament</button>
        </div>
      </div>
      </section>
    </div>
  )
}

export default index