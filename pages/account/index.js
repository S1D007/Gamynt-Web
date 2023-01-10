import React , {useEffect, useState,Suspense} from 'react'
import Profile from '../../Page/Account/Profile'
import Authentication from '../../Page/Account/Authentication'
import { useCookies } from 'react-cookie'
import ReactLoading from 'react-loading';
// if login is true then render profile component else render authentication component
const Index = () => {
    const [logincheck, setlogincheck] = useState(false)
    const [loading,setLoading] = useState(true)
    const [cookie,setCookie] = useCookies(['UserInfo'])
    useEffect(()=>{
      setLoading(false)
      cookie.LoggedIN === 'true' && setlogincheck(true)
    },[])
  return (
    <>
      {loading ? <h1></h1>:logincheck === true ? <Profile /> : <Authentication />}
    </>
  )
}

export default Index