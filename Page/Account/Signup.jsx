import React, { Fragment, useRef, useState, useEffect } from 'react'
import style from "./styles/auth.module.scss"
import MailIcon from '@mui/icons-material/Mail';
import { useSendOTP } from "../../suppliers/zustand/store"
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie';
const Signup = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const route = useRouter()
  // useEffect(() => {
  //   if (cookies.zxcvbn === 'true') {
  //     route.push("/account")
  //   }
  // }, [cookies.zxcvbn, route])
  const sendEmail = useSendOTP((e) => e.sendEmail)
  const verifyEmail = useSendOTP((e) => e.verifyEmail)
  useSendOTP((e) => e.verified && setCookie('zxcvbn', e.verified, { path: '/', maxAge: 2.628e+6 }))
  useSendOTP((e) => e.uid && setCookie('qlmna', e.uid, {
    maxAge: 2.628e+6
  }))
  // verified?route.push("/account"):null
  let btntxt = "next";
  let inptdiv = useRef()
  let otpdiv = useRef()
  let email = useRef()
  const [otp, setOtp] = useState([])
  const [emailDone, setEmailDone] = useState(false)
  // console.log(process.env.API_URL)
  const formsubmit = (e) => {
    e.preventDefault();
    // inptdiv
    if (email.current.value.length !== 0) {
      inptdiv.current.setAttribute("class", style.nexttoggle);
      otpdiv.current.setAttribute("class", style.otp_box)
      if (emailDone) {
        verifyEmail({
          email: email.current.value,
          otp: otp.join("")
        })
      } else {
        sendEmail({
          btnClicked: true,
          email: email.current.value
        })
        setEmailDone(true)
      }
    }
    else {
      console.log("please enter correct number")
    }
    // console.log(email.current.value)
  }
  return (
    <Fragment>
      <form className={style.auth_form} onSubmit={formsubmit}>
        <div className={`${style.form_input_box}`} ref={inptdiv}>
          <MailIcon />
          {/* <EmailIcon /> */}
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
          {/* {result} */}
        </div>
        <button>{btntxt}</button>
      </form>
    </Fragment>
  )
}

export default Signup