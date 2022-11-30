import React , {useState} from 'react'
import NavBar from '../components/Navbar/NavBar'


// if login is true then render profile component else render authentication component
const account = () => {
    const [logincheck, setlogincheck] = useState(true)
  return (
    <main>
        {
            logincheck == true ? <h1>logines</h1>:<h1>signup</h1>
        }
    </main>
  )
}

export default account