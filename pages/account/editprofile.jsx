import React,{useState} from 'react'
import style from "./styles/editprofile.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import CameraIcon from '@mui/icons-material/CameraAlt';
import FolderIcon from '@mui/icons-material/Folder';
import { useUserData } from '../../suppliers/zustand/store';

const Editprofile = () => {
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("")
    let router = useRouter()
    const editProfile = useUserData((e)=>e.editProfile)
    const result = useUserData((e)=>e.result)
    const handleClick = () => {
        editProfile({
            username,
            bio,
            email:result.email
        })
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
                    <img src="/images/freefire.jpeg" alt="" />
                    <div>
                        <label htmlFor="imgfromcamera"><CameraIcon />camera</label>
                        <input type="file" id='imgfromcamera' capture="user" accept='image/*' />

                        <label htmlFor="imgfromdevice"><FolderIcon /> choose image</label>
                        <input type="file" id='imgfromdevice' />
                    </div>
                </div>

                <div className={style.input_box}>
                    <p>username :</p>
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text" placeholder='username' />
                </div>
                <div className={style.input_box}>
                    <p>bio :</p>
                    <textarea onChange={(e) => {
                        setBio(e.target.value)
                    }} cols="30" rows="10" placeholder='something special about you :)'></textarea>
                </div>

                <button onClick={handleClick} >update</button>
            </div>


        </main>
    )
}

export default Editprofile