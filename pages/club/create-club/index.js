import { useRouter } from 'next/router'
import React,{useEffect,useState} from 'react'
import style from "./styles/createclub.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoIcon from '@mui/icons-material/Photo';
import { useClub, useImageUpload,useUserData } from '../../../suppliers/zustand/store';
const Index = () => {
  const {createClub,isCreated} = useClub();
  const {result} = useUserData()
  const {uploadImage,image,imageFor} = useImageUpload()
  const [banner,setBanner] = useState("")
  const [logo,setLogo] = useState("")
  const [name,setName] = useState("")
  const [desc,setDescription] = useState("")
    let router = new useRouter()
    useEffect(()=>{
      imageFor === "banner" &&setBanner(image)              
      imageFor === "logo" && setLogo(image)               
    },[image,imageFor])
  return (
    <main className={style.create_club_container}>
        {
          !isCreated?
          <div>
          <nav>
            <div onClick={()=>{router.push("/club")}}><ArrowBackIcon/></div>
        </nav>
        <div className={style.form_container}>
            <header className={style.images_section}>
        <div className={style.image_banner}>
        {banner !== "" ?<img src={banner}/>: <label htmlFor="banenrimg"><PhotoIcon/>choose banner</label>}
        <input onChange={(e)=>{
          uploadImage({
            image:e.target.files[0],
            imageFor:"banner"
          })
        }} type="file" id="banenrimg"/>
        </div>
        <div className={style.image_logo}>
        {logo !==""?<img src={logo}/>:<label htmlFor="logoimg"><PhotoIcon/>logo</label>}
        <input onChange={(e)=>{
          uploadImage({
            image:e.target.files[0],
            imageFor:"logo"
          })
        }} type="file" id="logoimg"/>
        </div>
            </header>
            <section className={style.input_section}>
                <div>
                    {/* <p>club name</p> */}
                    <input onChange={(e)=>{
                      setName(e.target.value)
                    }} type="text" placeholder='Name'/>
                </div>
                <div>
                    {/* <p>description</p> */}
                    <textarea onChange={(e)=>{
                      setDescription(e.target.value)
                    }} type="text" placeholder='Description'/>
                </div>
            </section>
            <button onClick={()=>{
              createClub({ clubName:name, clubOwner:result.name, clubLogo:logo, clubBanner:banner, description:desc })
            }} >create</button>
        </div>
          </div>: 
        <div>
            <h1>Wow You have succesfully Created Your {name}</h1>
            <p>Please Until We Verify You! </p>
            <div onClick={()=>{router.push("/club")}}><ArrowBackIcon/></div>
        </div>
        }
    </main>
  )
}

export default Index
