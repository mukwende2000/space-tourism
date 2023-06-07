type Props = {
  title: string
  number: string
}

function PageHeading({ title, number }: Props) {
  return (
    <h1 className="text-[20px] text-center md:text-left md:text-32 my-10 tracking-widest uppercase">
      <span className="text-primary/30 mr-2">{number}</span>
      <span className="text-primary">{title}</span>
    </h1>
  )
}

export default PageHeading
