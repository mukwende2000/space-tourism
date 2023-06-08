import { MouseEventHandler } from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  path: string
  name: string
  number: string
  onClick: MouseEventHandler
}

function LinkItem({ path, name, number, onClick }: Props) {
  return (
    <li
      onClick={onClick}
      className="text-xl py-5 md:mx-3 uppercase tracking-wider"
    >
      <NavLink
        className={`py-10 before:content-[''] relative before:absolute before:-bottom-[0.2rem] before:left-[50%] before:right-[50%] before:h-[.2rem] hover:before:right-0 hover:before:left-0 before:bg-primary before:duration-200`}
        to={path}
      >
        <span className="md:hidden lg:inline text-primary"> {number} </span>
        <span className="ml-2 text-gray-400">{name}</span>
      </NavLink>
    </li>
  )
}

export default LinkItem
