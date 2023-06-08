import PageHeading from '../../components/PageHeading'
import useFetchData, { CrewMember } from '../../hooks/useFetchData'
import { useEffect, useState } from 'react'

function index() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [CrewMember, setCrewMember] = useState<CrewMember>()
  const data = useFetchData()
  const crew = data?.crew
  const tabButtons: number[] = [0, 1, 2, 3]

  useEffect(() => {
    if (crew!?.length > 0) {
      setCrewMember(crew && crew[0])
    }
  }, [crew])

  function handleClick(tabBtn: number): void {
    setCrewMember(crew && crew[tabBtn])
    tabButtons.map((btn): void => {
      if (btn === tabBtn) {
        setActiveTab(btn)
      }
    })
  }
  return (
    <main className="lg:overflow-hidden lg:h-screen">
      <div className="container">
        <PageHeading number="02" title="meet your crew" />
        <div className="flex flex-col-reverse md:flex-col lg:grid grid-cols-2">
          <div className="text-center lg:text-left flex flex-col-reverse lg:flex-col py-10">
            <div>
              <h2 className="text-16 lg:text-primary/30 md:text-[24px] lg:text-32 text-secondary uppercase font-bellefair">
                {CrewMember?.role}
              </h2>
              <h3 className="text-[24px] md:text-[40px] lg:text-56 text-primary font-bellefair uppercase mb-3">
                {CrewMember?.name}
              </h3>
              <p className="text-16 lg:text-[18px] md:w-[50%] md:m-auto lg:m-0 lg:w-[444px]">
                {CrewMember?.bio}
              </p>
            </div>
            <ul className="flex gap-3 justify-center lg:justify-start mb-5 lg:mt-10">
              {tabButtons.map((tab) => {
                return (
                  <li
                    key={tab}
                    onClick={() => handleClick(tab)}
                    className={`${
                      activeTab === tab ? 'bg-gray-700' : 'bg-primary'
                    } cursor-pointer w-[20px] h-[20px] rounded-full`}
                  ></li>
                )
              })}
            </ul>
          </div>
          <div className="w-[153px] md:w-[368px] lg:w-[443px] lg:-mt-28 m-auto lg:m-0 border-b border-gray-500">
            <img
              src={CrewMember?.images.png}
              alt={CrewMember?.name}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default index
