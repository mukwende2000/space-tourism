import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Backdrop from '../components/Backdrop'
import { useState } from 'react'

function Root() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { pathname } = useLocation()

  const homeBackground = `
  bg-[url('/background-home-mobile.jpg')] 
  md:bg-[url('/background-home-tablet.jpg')] 
  lg:bg-[url('/background-home-desktop.jpg')]`

  const destinationBackground = `
  bg-[url('/background-destination-mobile.jpg')] 
  md:bg-[url('/background-destination-tablet.jpg')] 
  lg:bg-[url('/background-destination-desktop.jpg')]`

  const techBackground = `
  bg-[url('/background-technology-mobile.jpg')] 
  md:bg-[url('/background-technology-tablet.jpg')] 
  lg:bg-[url('/background-technology-desktop.jpg')]`

  const crewBackground = `
  bg-[url('/background-crew-mobile.jpg')] 
  md:bg-[url('/background-crew-tablet.jpg')] 
  lg:bg-[url('/background-crew-desktop.jpg')]`

  const backgroundImage =
    pathname === '/'
      ? homeBackground
      : pathname === 'destination'
      ? destinationBackground
      : pathname === 'technology'
      ? techBackground
      : crewBackground

  function handleBackdropClick() {
    setMenuIsOpen(false)
  }

  return (
    <div
      className={` ${backgroundImage}
    bg-cover bg-center bg-no-repeat`}
    >
      {menuIsOpen && <Backdrop onBackdropClick={handleBackdropClick} />}
      <Header setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
      <Outlet />
    </div>
  )
}

export default Root
