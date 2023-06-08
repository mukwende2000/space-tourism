import PageHeading from '../../components/PageHeading'
import mark from '../../assets/crew/image-mark-shuttleworth.png'

function Crew() {
  return (
    <main className="lg:overflow-hidden lg:h-screen">
      <div className="container">
        <PageHeading number="02" title="meet your crew" />
        <div className="flex flex-col-reverse md:flex-col lg:grid grid-cols-2">
          <div className="text-center lg:text-left flex flex-col-reverse lg:flex-col py-10">
            <div>
              <h2 className="text-16 lg:text-primary/30 md:text-[24px] lg:text-32 text-secondary uppercase font-bellefair">
                mission specialist
              </h2>
              <h3 className="text-[24px] md:text-[40px] lg:text-56 text-primary font-bellefair uppercase mb-3">
                mark shuttleworth
              </h3>
              <p className="text-16 lg:text-[18px] md:w-[50%] md:m-auto lg:m-0 lg:w-[444px]">
                Mark Richard is the founder and ceo of canonical, the company
                behind the Linux based operating system. Shuttleworth became the
                first south african to travel to Space as a space tourist.
              </p>
            </div>
            <div className="flex gap-3 justify-center lg:justify-start mb-5 lg:mt-10">
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="w-[153px] md:w-[368px] lg:w-[443px] lg:-mt-28 m-auto lg:m-0 border-b border-gray-500">
            <img src={mark} alt="Mark shuttleworth" className="w-full" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Crew
