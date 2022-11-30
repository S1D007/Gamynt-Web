import '../styles/globals.scss'
import '../styles/app.scss'
import NavBar from '../components/Navbar/NavBar'
import TopNavBar from '../components/Navbar/TopNavBar'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [isnav, setisnav] = useState(0)
  let router = useRouter()
  let path = router.pathname;
  // condition for not showing nav
  useEffect(() => {
    if (path == "/account") {
      setisnav(1)
    }
    else{
      setisnav(0)
    }
  }, [path])
  return (
    <>
    {
      isnav === 0?
    <main className='page_view'>
    <NavBar/>
    <section className="page_view_section">
      <TopNavBar/>
      <Component {...pageProps} />
    </section>
</main>
       :
       <Component {...pageProps} />
    }
    </>
  )
}

export default MyApp
