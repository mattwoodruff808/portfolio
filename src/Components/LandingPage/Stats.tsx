const Stats = () => {
  const today = new Date();
  const codeBegin = new Date('2019-11-30');
  const codeProfBegin = new Date('2020-11-30');
  const sinceCoding = today.getMonth() - codeBegin.getMonth() + 12 * (today.getFullYear() - codeBegin.getFullYear());
  const sinceCodingProf = today.getMonth() - codeProfBegin.getMonth() + 12 * (today.getFullYear() - codeProfBegin.getFullYear());

  return (
    <section className="bg-gray-50 pt-12 mb-24 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Matt at a Glance
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            "Culturally, a home run hit" - Technical Recruiter, describing Matt's fit within any company
          </p>
        </div>
      </div>
      <div className="mt-10 bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Years Coding</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{(sinceCoding / 12).toFixed(1)}</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Years Coding Professionally</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">{(sinceCodingProf / 12).toFixed(1)}</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Preferred Language</dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-indigo-600">TS</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Stats;
