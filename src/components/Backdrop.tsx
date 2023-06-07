import { MouseEventHandler } from 'react'

function Backdrop({ onBackdropClick }: { onBackdropClick: MouseEventHandler }) {
  return (
    <div
      onClick={onBackdropClick}
      className={`cursor-pointer absolute top-0 bottom-0 left-0 right-0 bg-black/30`}
    />
  )
}

export default Backdrop
