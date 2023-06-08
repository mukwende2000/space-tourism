import PageHeading from '../../components/PageHeading'
import l from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import p from '../../assets/technology/image-launch-vehicle-portrait.jpg'

function index() {
  return (
    <main className="min-h-screen">
      <div className="container">
        <PageHeading number="03" title="space launch 101" />
      </div>
      <div className="flex flex-col-reverse lg:grid grid-cols-2">
        <div className="lg:ml-28 lg:flex items-start gap-10">
          <ul className="flex lg:flex-col my-5 lg:my-0 justify-center gap-5">
            <li className="w-[2.5rem] lg:w-[5rem] md:w-[3.6rem] aspect-square grid place-content-center rounded-full bg-primary">
              1
            </li>
            <li className="w-[2.5rem] lg:w-[5rem] md:w-[3.6rem] aspect-square grid place-content-center rounded-full text-primary outline-1 outline outline-neutral-500">
              2
            </li>
            <li className="w-[2.5rem] lg:w-[5rem] md:w-[3.6rem] aspect-square grid place-content-center rounded-full text-primary outline-1 outline outline-neutral-500">
              3
            </li>
          </ul>
          <div className="text-center lg:text-left">
            <h2 className="text-secondary text[1rem] uppercase">
              the terminology...
            </h2>
            <h3 className="text-primary text-[1.5rem] lg:text-56 md:text-[2.5rem] font-bellefair uppercase">
              launch vehicle
            </h3>
            <p className="text[1rem] lg:text-[20px] w-[90%] m-auto lg:m-0">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an awe
              inspiring site on the launch pad!
            </p>
          </div>
        </div>
        <picture className="lg:w-[515px] lg:ml-auto">
          <source media="(max-width: 1020px)" srcSet={l} className="w-full" />
          <img src={p} alt="this" className="w-full" />
        </picture>
      </div>
    </main>
  )
}

export default index
