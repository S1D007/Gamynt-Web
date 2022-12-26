import React, { Fragment, useRef, useState, useEffect } from 'react'
import style from "./styles/auth.module.scss"
import EmailIcon from '@mui/icons-material/EmailTwoTone';
import { useRouter } from 'next/router';
const Signup = () => {
  const router = useRouter()
  let btntxt = "next";
  let inptdiv = useRef()
  let otpdiv = useRef()
  let email = useRef()
  const [otp, setOtp] = useState([])
  const [emailDone, setEmailDone] = useState(false)
  // console.log(typeof otp.join(""))
  const formsubmit = (e) => {
    e.preventDefault();
    if (email.current.value.length !== 0) {
      inptdiv.current.setAttribute("class", style.nexttoggle);
      otpdiv.current.setAttribute("class", style.otp_box);
      if (emailDone) {
        const url = `https://gamynt-backend.onrender.com/otp-verify?email=${email.current.value}&otp=${otp.join("")}`
        // console.log(url)
        fetch(url).then((e) => {
          // setEmailDone(true)
          // console.log(e)
          // alert("OTP PLease")
          console.log(e)
          router.push("/")
        }).then((e) => {
        })
      } else {
        const url = `https://gamynt-backend.onrender.com/otp?email=${email.current.value}`
        console.log(url)
        fetch(url).then((e) => {
          setEmailDone(true)
          console.log(e)
          // alert("OTP PLease")
        })
      }
    }
    else {
      console.log("please enter correct number")
    }
    console.log(email.current.value)
  }
  return (
    <Fragment>
      <form className={style.auth_form} onSubmit={formsubmit}>
        <div className={`${style.form_input_box}`} ref={inptdiv}>
          <EmailIcon />
          <input type="text" placeholder='Email Address'
            ref={email} />
        </div>
        <div className={`${style.nexttoggle}`} ref={otpdiv}>
          <input onChange={(e) => {
            setOtp([...otp, e.target.value])
          }} type="text" placeholder='0' />
          <input onChange={(e) => {
            setOtp([...otp, e.target.value])
          }} type="text" placeholder='0' />
          <input onChange={(e) => {
            setOtp([...otp, e.target.value])
          }} type="text" placeholder='0' />
          <input onChange={(e) => {
            setOtp([...otp, e.target.value])
          }} type="text" placeholder='0' />
          <input onChange={(e) => {
            setOtp([...otp, e.target.value])
          }} type="text" placeholder='0' />
        </div>
        <button>{btntxt}</button>
      </form>
    </Fragment>
  )
}

export default Signup