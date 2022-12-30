import React, { useEffect, useState } from 'react'
import Profile from '../Page/Account/Profile'
import Authentication from '../Page/Account/Authentication'
import { useCookies } from 'react-cookie';
import { useUserData } from '../suppliers/zustand/store';


// if login is true then render profile component else render authentication component
const Account = () => {
  const sendDetailstoServer = useUserData((e) => e.sendDetailstoServer)
  const result = useUserData((e) => e.result)
  // console.log(result)
  const [cookies, setCookie, removeCookie] = useCookies();
  // console.log(cookies)
  const [logincheck, setlogincheck] = useState(true)
  useEffect(() => {
    cookies.zxcvbn === 'true' ? setlogincheck(true) : setlogincheck(false)
    cookies.qlmna !== null ? sendDetailstoServer({
      loaded: true,
      uid: cookies.qlmna
    }) : ""
  }, [])
  return (
    <main>
      {
        logincheck ? <Profile /> : <Authentication />
      }
    </main>
  )
}

export default Account