import React, { useState,useEffect } from 'react'
import style from "./styles/editprofile.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import CameraIcon from '@mui/icons-material/CameraAlt';
import FolderIcon from '@mui/icons-material/Folder';
import { useImageUpload, useUserData } from '../../suppliers/zustand/store';

const Editprofile = () => {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    const [disabled, setDisabled] = useState("")
    let router = useRouter()
    const editProfile = useUserData((e) => e.editProfile)
    const done = useUserData((e) => e.done)
    const result = useUserData((e) => e.result)
    const {uploadImage,image} = useImageUpload()
    const handleClick = () => {
        editProfile({
            username,
            bio,
            email: result.email,
            avatar:image,
            name:name
        })
        router.push("/account")
    }
    return (
        <main className={style.edit_profile}>
            <nav className={style.nav}>
                <div className={style.back} onClick={() => { router.back(-1) }}>
                    <ArrowBackIcon />
                    back
                </div>
            </nav>

            <div className={style.edit_profile_container}>
                <div className={style.edit_image}>
                    <img src={`${image?image:result.avatar}`} alt="" accept=".jpg,.jpeg,.png,.gif"/>
                    <div>
                        <label htmlFor="imgfromdevice"><FolderIcon /> choose image</label>
                        <input onChange={(e)=>{
                            uploadImage({
                                image:e.target.files[0]
                            })
                            setDisabled(true)
                        }} type="file" id='imgfromdevice' />
                    </div>
                </div>

                <div className={style.input_box}>
                    <p>Name :</p>
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" placeholder='name' />
                </div>
                <div className={style.input_box}>
                    <p>Username :</p>
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text" placeholder={`${result.username}`} />
                </div>
                <div className={style.input_box}>
                    <p>bio :</p>
                    <textarea onChange={(e) => {
                        setBio(e.target.value)
                    }} cols="30" rows="10" placeholder={`${result.bio}`}></textarea>
                </div>
                <button disabled={image=== null && disabled  ? true : false} onClick={handleClick} >update</button>
            </div>
        </main>
    )
}

export default Editprofile