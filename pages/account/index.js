import React , {useEffect, useState} from 'react'
import Profile from '../../Page/Account/Profile'
import Authentication from '../../Page/Account/Authentication'
import { useCookies } from 'react-cookie'


// if login is true then render profile component else render authentication component
const Index = () => {
    const [logincheck, setlogincheck] = useState(false)
    const [cookie,setCookie] = useCookies(['UserInfo'])
    useEffect(()=>{
      cookie.LoggedIN === 'true' && setlogincheck(true)
    },[])
  return (
    <main>
      {
        logincheck === true ? <Profile /> : <Authentication />
      }
      
    </main>
  )
}

export default Index