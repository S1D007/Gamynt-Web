import React, { Fragment, useState, useRef } from 'react'
import style from "./styles/auth.module.scss"
import PhoneIcon from '@mui/icons-material/Phone';

const Login = () => {
  let btntxt = "next";
  let inptdiv = useRef()
  let otpdiv = useRef()
  let phonenumber = useRef()

  const formsubmit = (e) => {
    e.preventDefault();
    if (phonenumber.current.value.length === 0) {
      inptdiv.current.setAttribute("class", style.nexttoggle);
      otpdiv.current.setAttribute("class", style.otp_box)
    }
    else {
      console.log("please enter correct number")
    }
  }
  return (
    <Fragment>
      <form className={style.auth_form} onSubmit={formsubmit}>
        <div className={`${style.form_input_box}`} ref={inptdiv}>
          <PhoneIcon />
          <input type="text" placeholder='phone number'
            ref={phonenumber} />
        </div>
        <div className={`${style.nexttoggle}`} ref={otpdiv}>
          <input type="text" placeholder='0' />
          <input type="text" placeholder='0' />
          <input type="text" placeholder='0' />
          <input type="text" placeholder='0' />
          <input type="text" placeholder='0' />
        </div>
        <button>{btntxt}</button>
      </form>
    </Fragment>
  )
}

export default Login