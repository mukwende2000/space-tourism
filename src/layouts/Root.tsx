import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import example from '../../public/background-home-desktop.jpg'

function Root() {
  return (
    <div
      className="
    bg-[url('/background-home-mobile.jpg')] 
    md:bg-[url('/background-home-tablet.jpg')] 
    lg:bg-[url('/background-home-desktop.jpg')] 
    bg-cover bg-center bg-no-repeat"
    >
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
