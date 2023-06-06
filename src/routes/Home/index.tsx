function index() {
  return (
    <main className={`bg-center py-5 md:py-28 md:mt-40 min-h-screen`}>
      <div className="container text-center lg:text-left grid gap-20 lg:grid-cols-2">
        <section className="max-w-[500px] m-auto">
          <p
            className={`text-16 md:text-32 leading-[19px] tracking-widest uppercase `}
          >
            so you want to travel to
          </p>
          <h1
            className={`my-3 md:my-16 text-[80px] md:text-150 leading-[100px] text-primary font-bellefair uppercase`}
          >
            space
          </h1>
          <p className="text-2xl">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </section>
        <button
          className={`m-auto text-28 font-bellefair bg-primary text-tertiary uppercase rounded-full grid place-content-center w-5/12 max-w-[374px] min-w-[150px] aspect-square`}
        >
          explore
        </button>
      </div>
    </main>
  )
}

export default index
