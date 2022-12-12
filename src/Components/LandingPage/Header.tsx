import linkedinSvg from '../../assets/linkedin.svg';
import githubSvg from '../../assets/github.svg';
import ResumeBtn from '../ResumeBtn/ResumeBtn';

const Header = () => {
  return (
    <section className="bg-gray-50 flex items-center h-screen pb-32">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Software Engineer</h2>
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Matt Woodruff
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            The perfect blend of soft and technical skills
          </p>
          <nav className='flex justify-center mt-7'>
            <a href='https://www.linkedin.com/in/matt-j-woodruff/' target='_blank' rel='noreferrer'>
              <img src={linkedinSvg} 
                    alt='LinkedIn Icon' 
                    className='h-12 mr-3' />
            </a>
            <a href='https://github.com/mattwoodruff808' target='_blank' rel='noreferrer'>
              <img src={githubSvg} 
                    alt='GitHub Icon' 
                    className='h-12 ml-3' />
            </a>
            <ResumeBtn />
          </nav>
        </div>
      </div>
    </section>
  )
}

export default Header;
