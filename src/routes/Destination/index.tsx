import { useEffect, useState } from 'react'
import PageHeading from '../../components/PageHeading'

interface DestinationProps {
  name: string
  description: string
  distance: string
  travel: string
  images: { png: string; webp: string }
}

function Destination() {
  const [destinations, setDestinations] = useState<DestinationProps[]>([])
  const [destination, setDestination] = useState<DestinationProps>(
    destinations[1]
  )
  const [activeLink, setActiveLink] = useState(0)
  useEffect(() => {
    async function getData() {
      const data = await fetch('/data.json')
      const res = await data.json()
      setDestinations(res.destinations)
    }

    getData()

    return () => {}
  }, [])

  useEffect(() => {
    if (destinations.length > 0) {
      setDestination(destinations[0])
    }
  }, [destinations])

  const links = ['moon', 'mars', 'europa', 'titan']
  function handleClick(index: number): void {
    setDestination(destinations[index])
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
                  className={`cursor-pointer text-primary text-[20px] ${
                    activeLink === index ? 'border-b-4 border-primary' : null
                  }`}
                  key={index}
                >
                  {link.toUpperCase()}
                </li>
              )
            })}
          </ul>
          <h2 className="font-bellefair text-100 uppercase text-primary">
            {destination?.name}
          </h2>
          <p className="md:w-[70%] text-[1.4rem] border-b border-gray-400 pb-10">
            {destination?.description}
          </p>
          <div className="my-8 md:flex gap-20">
            <div>
              <p className="uppercase">agv. distance</p>
              <p className="distance">{destination?.distance}</p>
            </div>
            <div>
              <p className="uppercase">est. travel time</p>
              <p className="distance">{destination?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Destination
