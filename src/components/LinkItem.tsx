import { NavLink } from 'react-router-dom'

type Props = {
  path: string
  name: string
  number: string
}

function LinkItem({ path, name, number }: Props) {
  return (
    <li className="text-xl py-5 md:mx-3 uppercase tracking-wider">
      <NavLink
        className="border-b-4 border-transparent hover:border-primary py-10 duration-300"
        to={path}
      >
        <span className="md:hidden lg:inline text-primary"> {number} </span>
        <span className="ml-2 text-gray-400">{name}</span>
      </NavLink>
    </li>
  )
}

export default LinkItem
