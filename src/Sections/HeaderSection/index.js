import { Logo } from '../../Assets/img/svg'
import background1 from "../../Assets/img/jpg/multor-heroshot.jpg"
function HeaderSection() {
  return (
    <div className={`h-screen w-screen bg-no-repeat bg-left bg-cover sm:bg-center `} style={{ backgroundImage: `url(${background1})` }}>
      <div className='flex flex-start w-11/12 md:w-10/12 m-auto'>
        <div className='w-full p-4 mt-4 sm:mt-10' >
          <Logo />
        </div>
      </div>
      <div className='w-11/12 md:w-10/12  p-4 sm:pl-2 m-auto'>
        <div className='w-full md:w-6/12 flex flex-col pt-5 sm:pt-10'>
          <div className='text-5xl sm:text-7xl text-primary text-left font-semibold leading-10'>
            Describe the value of booking an appointment
          </div>
          <div className='text-xl sm:text-xl font-normal text-primary text-left leading-7 mt-4'>
            No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
