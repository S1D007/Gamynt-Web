import React, { Fragment, useEffect, useRef, useState } from 'react'
import style from "./styles/auth.module.scss"
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import OtpField from 'react-otp-field';
import { useSendOTP } from "../../suppliers/zustand/store"
import { useCookies } from 'react-cookie';
import {useRouter} from 'next/router'


const Signup = () => {
  const [cookies, setCookie] = useCookies(['UserInfo']);
  const route = useRouter()
  let btntxt = "next";
  let inptdiv = useRef()
  let otpdiv = useRef()
  let email = useRef()
  const [value, setValue] = useState('');
  const [emailDone, setEmailDone] = useState(false)
  const uid = useSendOTP((e)=>btoa(e.uid));
  const verified = useSendOTP((e)=>e.verified)
  // useEffect(()=>{
  //   verified === 'true' && route.push("/account")
  // },[verified])
  useEffect(()=>{
    if(uid){
      setCookie('UserID',window.btoa(uid),{
        secure:true,
        maxAge:2.628e+6
      })
      setCookie('LoggedIN',true,{
        secure:true,
        maxAge:2.628e+6
      })
      route.reload()
    }
  },[uid])

  const sendEmail = useSendOTP((e) => e.sendEmail)
  const verifyEmail = useSendOTP((e) => e.verifyEmail)


  const formsubmit = (e) => {
    e.preventDefault();
    // inptdiv
    if (email.current.value.length !== 0) {
      inptdiv.current.setAttribute("class", style.nexttoggle);
      otpdiv.current.setAttribute("class", style.otp_box)
      if (emailDone) {
        verifyEmail({
          email: email.current.value,
          otp: value
        })
      } else {
        sendEmail({
          btnClicked: true,
          email: email.current.value
        })
        setEmailDone(true)
      }
    }
    // console.log(email.current.value)
  }
  return (
    <Fragment>
      <form className={style.auth_form} onSubmit={formsubmit}>
        <div className={`${style.form_input_box}`} ref={inptdiv}>
          <MailIcon />
          <input type="text" placeholder='Email' ref={email} />
        </div>
        <div className={`${style.nexttoggle}`} ref={otpdiv}>
          <div style={{
          }} >
            <OtpField
              value={value}
              onChange={setValue}
              numInputs={5}
              onChangeRegex={/^([0-9]{0,})$/}
              autoFocus
              separator={<span></span>}
              isTypeNumber
              inputProps={{ className: 'otp-field__input', disabled: false }}
              classNames={style.div_otp}
              />
          </div>
        </div>
        <button>{btntxt}</button>
      </form>
    </Fragment>
  )
}

export default Signup
