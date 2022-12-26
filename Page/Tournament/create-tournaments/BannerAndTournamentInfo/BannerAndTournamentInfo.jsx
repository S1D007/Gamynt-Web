import React from 'react'
import style from "./bannerandtournamentinfo.module.scss"
function BannerAndTournamentInfo() {
  return (
    <div className={style.container} >
      <div className={style.upload} >
        <h1>Upload Image</h1>
        <input type="file" name="" accept='' id="" />
      </div>
      <div className={style.details} >
        <h1>Tournament Details</h1>
      <input type="text" placeholder='Tournament Title' />
      <textarea placeholder='Tournament Description' name="" id="" cols="20" rows="10"></textarea>
      <input type="text" placeholder='Tags [seperated by Commas]' />
      <select name="" id="">
        <option value="ff">Free Fire</option>
        <option value="pubg">PUBG</option>
        <option value="valo">Valorant</option>
        <option value="coc">Clash Of Clans</option>
      </select>
      <input type="text" placeholder='Slots' />
      <input type="text" placeholder='Prize Pool' />
      <input type="text" placeholder='Entry Fees' />
      <button>Next</button>
      </div>
    </div>
  )
}

export default BannerAndTournamentInfo