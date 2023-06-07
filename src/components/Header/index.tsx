import { Dispatch, SetStateAction } from 'react'
import Navbar from '../Navbar'

type Props = {
  menuIsOpen: boolean
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>
}
function index({ menuIsOpen, setMenuIsOpen }: Props) {
  return (
    <header>
      <Navbar setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
    </header>
  )
}

export default index
