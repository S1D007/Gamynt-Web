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
    {
      loading && <ReactLoading style={{
        display:"flex",
        justifyContent:"center",
        aligntItems:"center"
      }} type={"spin"} color={"blue"} height={67} width={35} />
    }
    <Suspense fallback={<div>Loading...</div>}>
      {logincheck === true ? <Profile /> : <Authentication />}
    </Suspense>
    </>
  )
}

export default Index