import { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import useFetchData from '../../hooks/useFetchData'
import { Tech } from '../../hooks/useFetchData'

function index() {
  const [activeLink, setActiveLink] = useState<number>(0)
  const [technology, setTechnology] = useState<Tech>()
  const data = useFetchData()
  const technologies = data?.technology
  const tabButtons: number[] = [0, 1, 2]

  useEffect(() => {
    if (technologies!?.length > 0) {
      setTechnology(technologies && technologies[0])
    }
  }, [technologies])

  function handleClick(btnNumber: number): void {
    setTechnology(technologies && technologies[btnNumber])
    tabButtons.map((btn): void => {
      if (btn === btnNumber) {
        setActiveLink(btn)
      }
    })
  }
  return (
    <main className="min-h-screen">
      <div className="container">
        <PageHeading number="03" title="space launch 101" />
      </div>
      <div className="flex flex-col-reverse lg:grid grid-cols-2">
        <div className="lg:ml-28 lg:flex items-start gap-10">
          <ul className="flex lg:flex-col my-5 lg:my-0 justify-center gap-5">
            {tabButtons.map((btn) => {
              return (
                <li
                  key={btn}
                  onClick={() => handleClick(btn)}
                  className={`${
                    activeLink === btn
                      ? 'bg-primary hover:text-primary hover:bg-transparent hover:border-gray-400'
                      : 'border-secondary text-primary hover:bg-primary hover:text-tertiary'
                  } border-2 cursor-pointer md:text-16 lg:text-28 w-[2.5rem] lg:w-[5rem] md:w-[3.6rem] aspect-square grid place-content-center rounded-full duration-300`}
                >
                  {btn + 1}
                </li>
              )
            })}
          </ul>
          <div className="text-center lg:text-left">
            <h2 className="text-secondary text[1rem] uppercase">
              the terminology...
            </h2>
            <h3 className="text-primary text-[1.5rem] lg:text-56 md:text-[2.5rem] font-bellefair uppercase">
              {technology?.name}
            </h3>
            <p className="text[1rem] lg:text-[20px] w-[90%] m-auto lg:m-0">
              {technology?.description}
            </p>
          </div>
        </div>
        <picture className="lg:w-[515px] lg:ml-auto">
          <source
            media="(max-width: 1020px)"
            srcSet={technology?.images.landscape}
            className="w-full"
          />
          <img
            src={technology?.images.portrait}
            alt="this"
            className="w-full"
          />
        </picture>
      </div>
    </main>
  )
}

export default index
