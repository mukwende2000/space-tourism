import { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'
import useFetchData, { Destination } from '../../hooks/useFetchData'

function index() {
  const [destination, setDestination] = useState<Destination>()
  const [activeLink, setActiveLink] = useState(0)
  const data = useFetchData()

  const destinations = data?.destinations

  useEffect(() => {
    if (destinations!?.length > 0) {
      setDestination(destinations && destinations[0])
    }
  }, [destinations])

  const links = ['moon', 'mars', 'europa', 'titan']

  function handleClick(index: number): void {
    setDestination(destinations && destinations[index])
    links.map((link, i) => {
      if (i === index) {
        setActiveLink(i)
      }
    })
  }

  return (
    <main>
      <div className="grid gap-10 lg:grid-cols-2 container">
        <div>
          <PageHeading number="01" title="pick your destination" />
          <div className="w-[70%] m-auto grid place-items-center md:w-full">
            <img src={destination?.images?.png} alt={destination?.name} />
          </div>
        </div>
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
          <ul className="flex gap-10 mt-32">
            {links.map((link, index) => {
              return (
                <li
                  onClick={() => {
                    handleClick(index)
                  }}
                  className={`cursor-pointer text-primary text-16 md:text-16 ${
                    activeLink === index ? 'border-b-4 border-primary' : null
                  }`}
                  key={index}
                >
                  {link.toUpperCase()}
                </li>
              )
            })}
          </ul>
          <h2 className="font-bellefair text-56 md:text-[5rem] uppercase text-primary">
            {destination?.name}
          </h2>
          <p className="md:w-[70%] text-[1.13rem] border-b border-gray-400 pb-10">
            {destination?.description}
          </p>
          <div className="my-8 md:flex gap-20">
            <div>
              <p className="uppercase text-[.88rem]">agv. distance</p>
              <p className="distance lg:text-28">{destination?.distance}</p>
            </div>
            <div>
              <p className="uppercase text-[.88rem]">est. travel time</p>
              <p className="distance lg:text-28">{destination?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
