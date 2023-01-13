import { Checkbox } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useImageUpload, useTournament } from '../../../../suppliers/zustand/store';
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';
import style from "./bannerandtournamentinfo.module.scss"
import { useRouter } from 'next/router';
function BannerAndTournamentInfo() {
  const { image, setImage, uploadImage } = useImageUpload();
  const [disable,setDisable] = useState(false)
  const route = useRouter()
  const [data,setData] = useState({ game:"",title:"",banner:"", mode:"", slot:0, EntryFees:"",description:"",PrizePool:0,tags:[],bannerImgUrl:"",schedule:"" })
  // console.log(image)
  const {createTournament} = useTournament()
  const handleImageUpload = e => {
    // setImage(e.target.files[0]);
    uploadImage({
      image:e.target.files[0]
    })
  };
  const handleClick = () => {
    const { game, title, bannerImgUrl, mode, slot, EntryFees, description, PrizePool, tags,schedule } = data
    createTournament({ game, title, bannerImgUrl:image, mode, slot, EntryFees, description, PrizePool, tags,schedule })
    route.push("/tournaments")
  }
  return (
    <div className={style.container} >
      <div className={style.upload} >
        <h1>Upload Image</h1>
       {image?<img style={{
        width:"26rem",
        marginTop:"15px",
        borderRadius:"10px",
        boxShadow:"0px 0px 20px #000"
       }} src={image} alt="" />: <input type="file" onChange={handleImageUpload} name="" accept='' id="" />}
      </div>
      <div className={style.details} >
        <h1>Tournament Details</h1>
      <input onChange={(e)=>{
        setData({...data,title:e.target.value})
      }} type="text" placeholder='Tournament Title' />
      <textarea onChange={(e)=>{
        setData({...data,description:e.target.value})
      }} placeholder='Tournament Description' name="" id="" cols="20" rows="10"></textarea>
      <input onChange={(e)=>{
        setData({...data,tags:(e.target.value).split(",")})
      }} type="text" placeholder='Tags [seperated by Commas]' />
        <input
          type="datetime-local"
          id="datetime-input"
          // value={this.state.datetime}
          onChange={(e)=>{
            // setData()
            setData({...data,schedule:e.target.value})
          }}
        />
      <select onChange={(e)=>{
        setData({...data,game:e.target.value})
      }} name="" id="">
        <option value="">Choose Game</option>
        <option value="ff">Free Fire</option>
        <option value="pubg">PUBG</option>
        <option value="valo">Valorant</option>
        <option value="coc">Clash Of Clans</option>
      </select>
      <select onChange={(e)=>{
        setData({...data,mode:e.target.value})
      }} name="" id="">
        <option value="">Choose Mode</option>
        <option value="solo">Solo</option>
        <option value="duo">Duo</option>
        <option value="squad">Squad</option>
      </select>
      <input onChange={(e)=>{
        setData({...data,slot:e.target.value})
      }} type="number" placeholder='Slots' />
      <input onChange={(e)=>{
        setData({...data,PrizePool:e.target.value})
      }} type="text" placeholder='Prize Pool' />
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }} >
      <h3>Free<Checkbox onChange={(e)=>{
        const checked = e.target.checked
        checked ? setDisable(true) : setDisable(false)
      }} defaultChecked /></h3>
      <input disabled={disable} onChange={(e)=>{
        setData({...data,EntryFees:disable?"Free":e.target.value})
      }} type="number" placeholder='Entry Fees' />
      </div>
      <button onClick={handleClick}>Post</button>
      <p>*Note: You can <span>Edit</span> or <span>Delete</span> the Tournament in <span>GPanel</span></p>
      </div>
    </div>
  )
}

export default BannerAndTournamentInfo