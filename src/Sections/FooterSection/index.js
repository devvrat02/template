import { Logow } from '../../Assets/img/svg'
// footer of the website is described here
function FooterSection() {
  return (
    <div className='h-36 bg-primary w-full flex items-center'>
      <div className='w-11/12 sm:w-10/12 m-auto flex flex-col sm:flex-row  items-center sm:justify-between'>
        <div className=' h-6 my-2'>
          <Logow />
        </div>
        <div className=' text-white text-center'>
          © 2022 Insert Name Here. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
