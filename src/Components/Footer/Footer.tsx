import linkedInIcon from '../../assets/linkedin.svg';
import githubIcon from '../../assets/github.svg';

const navigation = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matt-j-woodruff/',
    icon: linkedInIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/mattwoodruff808',
    icon: githubIcon,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500" target='_blank' rel='noreferrer'>
              <span className="sr-only">{item.name}</span>
              <img src={item.icon} alt={item.name} className="h-12 w-12" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">&copy; 2023 Matt J. Woodruff, All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
