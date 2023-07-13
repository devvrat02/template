import item from '../../Assets/video.webp'
function InfoSection() {
  return (
    <div className="custom-background  flex flex-col items-center mt-10">
      <div className='w-8/12 sm:w-5/12 m-auto text-center text-3xl sm:text-5xl font-semibold mt-10 sm:mt-20 mb-1 '>
        Show visitor what they're signing up for
      </div>
      <div className='w-11/12 sm:w-10/12 m-auto text-center my-2 text-base sm:text-lg font-normal'>
        Include a video or photo from one of your sessions to help people understand your service (or just to hype 'em up).
      </div>
      <div className='w-11/12 sm:w-10/12 m-auto my-4'>
        <picture className=''>
          <img src={item} />
        </picture>
      </div>
      <div className=' text-secondory w-11/12 m-auto text-center text-xs font-semibold my-10'>
        DON'T JUST TAKE OUT WORD FOR IT
      </div>
    </div>
  );
}

export default InfoSection;
