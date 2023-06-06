import logo from '../../assets/shared/logo.svg'
import close from '../../assets/shared/icon-close.svg'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import { useState } from 'react'
import LinkItem from '../LinkItem'

function index() {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className="relative flex justify-between items-center p-8 md:py-0 lg:py-10 md:pr-0">
      <div>
        <img src={logo} alt="Space logo" />
      </div>
      <div className="absolute z-10 border-b top-[50%] left-[5%] border-green-800 ml-5 w-[33%] hidden lg:block" />
      <div>
        <button>
          <img
            onClick={() => setIsActive(true)}
            src={hamburger}
            alt="hamburger"
            className="md:hidden"
          />
        </button>
      </div>
      <ul
        className={`${
          isActive ? 'right-0' : 'right-[-100%]'
        } px-10 py-32 md:py-5 fixed md:static top-0 bottom-0 md:bottom-[90%] md:flex justify-evenly bg-gray-800/20 w-8/12 max-w-[1000px] backdrop-blur-lg duration-300`}
      >
        <li className="absolute top-10 right-10">
          <button>
            <img
              className="md:hidden"
              onClick={() => setIsActive(false)}
              src={close}
              alt="close menu button icon"
            />
          </button>
        </li>
        <LinkItem path="/" name="Home" number="00" />
        <LinkItem path="destination" name="Destination" number="01" />
        <LinkItem path="crew" name="Crew" number="02" />
        <LinkItem path="technology" name="Technology" number="03" />
      </ul>
    </nav>
  )
}

export default index
