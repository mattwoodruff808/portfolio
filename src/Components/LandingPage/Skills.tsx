const skills = [
  {
    title: 'Languages',
    skillList: ['TypeScript', 'JavaScript', 'Lua']
  },
  {
    title: 'Libraries and Frameworks',
    skillList: ['React', 'React Native', 'NextJS', 'NodeJS', 'Express'],
  },
  {
    title: 'Styling',
    skillList: ['Tailwind CSS', 'CSS 3', 'JSS'],
  },
  {
    title: 'Game Dev',
    skillList: ['Love2D', 'Playdate SDK', 'Playdate Pulp'],
  },
  {
    title: 'Other',
    skillList: ['Solana-Web3.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Puppeteer', 'Redux', 'REST'],
  }
];

const Skills = () => {
  return (
    <section className="mb-20 mx-auto max-w-5xl text-center">
      <h2 className="text-3xl mb-14 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Technical Skills
      </h2>
      <div className="flex flex-col justify-between md:flex-row">
        {skills.map((skill) => (
          <div key={skill.title} className="mb-10 md:mb-0">
            <h4 className="mb-3 text-lg font-bold tracking-tight text-indigo-600">{skill.title}</h4>
            <ul className="text-gray-500">
              {skill.skillList.map((sk) => <li>{sk}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Skills;
