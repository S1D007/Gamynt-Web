import { CookiesProvider } from "react-cookie";
import React, { useState, useEffect } from 'react';
import '../styles/globals.scss'
import '../styles/app.scss'
import NavBar from '../components/Navbar/NavBar'
import TopNavBar from '../components/Navbar/TopNavBar'
import { useRouter } from 'next/router'
import { store } from '../suppliers/reduxstore/store'
import { Provider } from 'react-redux'

import "nprogress/nprogress.css";
import NProgress from 'nprogress';
NProgress.configure({ showSpinner: false })
import {useUserData} from "../suppliers/zustand/store"
import {useCookies} from "react-cookie"
function MyApp({ Component, pageProps }) {
  const [isnav, setisnav] = useState(1)
  let router = useRouter()
  let path = router.pathname;

  // condition for not showing nav
  // http://localhost:3000/club/chat
  useEffect(() => {
    switch (path) {
      case ("/club/chat"):
        setisnav(1);
        break;
      case ("/tournaments/register"):
        setisnav(1);
        break;
      case ("/account/editprofile"):
        setisnav(1);
        break;

      default:
        setisnav(0)
        break;
    }
  }, [path])

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, []);
  const [cookie, setCookie] = useCookies(['UserInfo'])
  const sendData = useUserData((e) => e.sendDetailstoServer)
  useEffect(() => {
if(cookie.UserID){
  const uid1 = atob(cookie.UserID)
  const uid = atob(uid1)
  sendData({
    loaded: true,
    uid
  })
}
    console.log(".......")
  }, [cookie.UserID,sendData])
  return (
    <>
    <CookiesProvider>
      <Provider store={store}>
        {
          isnav === 0 ?
            <main className='page_view'>
              <NavBar />
              <section className="page_view_section">
                <TopNavBar />
                <Component {...pageProps} />
              </section>
            </main>
            :
            <Component {...pageProps} />
        }
      </Provider>
    </CookiesProvider>
    </>
  )
}


// for maintain speed of application
// const appwithmainnav = ({ Component, pageProps })=>{

// }

export default MyApp
