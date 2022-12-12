import ResumeBtn from "../ResumeBtn/ResumeBtn";

const CTA = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Want to work together?</span>
          <span className="block">Message me on LinkedIn, or check out my resume!</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md">
            <ResumeBtn />
          </div>
        </div>
      </div>
    </div>
  )
};

export default CTA;
