import PageHeading from '../../components/PageHeading'
import mark from '../../assets/crew/image-mark-shuttleworth.png'

function Crew() {
  return (
    <main>
      <div className="container">
        <PageHeading number="02" title="meet your crew" />
        <div className="flex flex-col-reverse">
          <div className="text-center flex flex-col-reverse">
            <div>
              <h2 className="text-16 text-secondary uppercase font-bellefair">
                mission specialist
              </h2>
              <h3 className="text-[24px] text-primary font-bellefair uppercase mb-3">
                mark shuttleworth
              </h3>
              <p className="text-16">
                Mark Richard is the founder and ceo of canonical, the company
                behind the Linux based operating system. Shuttleworth became the
                first south african to travel to Space as a space tourist.
              </p>
            </div>
            <div className="flex gap-3 justify-center my-8">
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
              <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
            </div>
          </div>
          <div className="w-[153px] m-auto border-b border-gray-500">
            <img src={mark} alt="Mark shuttleworth" className="w-full" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Crew
