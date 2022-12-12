const Testimonial = () => {
  return (
    <section className="overflow-hidden mb-32 bg-gray-50 py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>

        <div className="flex flex-col items-center">
          <img className="h-20 w-20" src="https://assets.mx.com/images/home2022/mx-logo.svg" alt="mx logo" />
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
              <div className="text-lg md:text-2xl">
                <p>
                &ldquo;This is Matt's first engineering role. It's unfair to all other entry level engineers how quickly Matt has delivered value to the company. . .
                </p>
                <br></br>
                <p>
                You couldn't hope for a better learner and willing contributor. . . he has a high bar for himself and pushes himself a lot. . .
                </p>
                <br></br>
                <p>
                Matt is clearly killing it as a fresh bootcamp grad. His ability to ship software and deliver results is far beyond what I'd expect for someone just out of a bootcamp.&rdquo;
                </p>
              </div>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Direct Manager</div>

                  <svg className="mx-1 hidden h-5 w-5 text-indigo-600 md:block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">MX Technologies - Annual Review</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
};

export default Testimonial;
