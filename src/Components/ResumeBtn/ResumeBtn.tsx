import pdf from '../../assets/mattresume.pdf';

const ResumeBtn = () => {
  return (
    <a href={pdf} 
       target='_blank'
       rel='noreferrer'
       className='ml-6 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none'>View My Resume</a>
  )
}

export default ResumeBtn;
