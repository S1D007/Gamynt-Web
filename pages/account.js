import React , {useState} from 'react'
import Profile from '../Page/Account/Profile'
import Authentication from '../Page/Account/Authentication'


// if login is true then render profile component else render authentication component
const account = () => {
    const [logincheck, setlogincheck] = new useState(false)

  return (
    <main>
      {
        logincheck === true ? <Profile /> : <Authentication />
      }
      
    </main>
  )
}

export default account