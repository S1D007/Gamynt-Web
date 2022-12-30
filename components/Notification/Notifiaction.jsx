import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import style from "./notify.module.scss"
import data from "../data/update.json"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Notifiaction = ({handleClose}) => {
  return (
    <main className={style.notification_main_container}>
        <header>
        <ArrowBackIcon onClick={()=>handleClose()}/>
            <h1>notification</h1>
        </header>
        {
            data.map((item)=>{
                return(
                    <section className={style.notification} key={item.id}>
            <img src="/images/freefire.jpeg" alt="img" />
            <div>
                <p><b>{item.user}</b></p>
                <p>{item.tittle}</p>
                <span>{item.time}</span>
            </div>
        </section>
                )
            })
        }
{/* clear all btn */}
        <div className={style.clearnotification}>
        <CloseIcon/> clear All
        </div>
    </main>
  )
}

export default Notifiaction