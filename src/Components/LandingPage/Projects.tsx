import portfolioPic from '../../assets/portfolio.png';
import lightCrashPic from '../../assets/light-crash.png';
import recipeSitePic from '../../assets/simple-things-screen.png';
import gitHubIcon from '../../assets/github.svg';

const projects = [
  {
    title: 'Portfolio',
    href: 'https://github.com/mattwoodruff808/portfolio',
    category: 'Frontend Development',
    description:
      'You are experiencing it! Lovingly crafted with TypeScript, React, and Tailwind CSS.',
    imageUrl: portfolioPic,
  },
  {
    title: 'Light Crash',
    href: 'https://github.com/mattwoodruff808/light-crash',
    category: 'Game Development',
    description:
      'Have you ever played TRON? This TRON-clone is made with Lua, Love2D, and hand-crafted pixel art by Matt himself.',
    imageUrl: lightCrashPic,
  },
  {
    title: 'The Simple Things',
    href: 'https://github.com/mattwoodruff808/personal-project',
    category: 'Full Stack Development',
    description:
      'Full Stack never looked so delicious! This meal consists of JavaScript, React, Express, and PostgreSQL.',
    imageUrl: recipeSitePic,
  },
];

const Projects = () => {
  return (
    <section className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Sample some of the code that Matt has written, from Web Development to Game Development!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg border border-gray-300">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover object-top" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {project.category}
                  </p>
                  <div className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a className="flex items-center cursor-pointer" href={project.href} target='_blank' rel='noreferrer'>
                      <img className="h-9 w-9" src={gitHubIcon} alt="Github Logo" />
                      <p className="ml-2 text-lg text-gray-500">Repository</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Projects;
