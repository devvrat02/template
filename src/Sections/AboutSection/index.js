import about from '../../Assets/img/jpg/multor-about.jpg'
function AboutSection() {
    return (
        <div className="w-11/12 sm:w-10-12 m-auto my-20">
            <div className='w-full sm:w-11/12 m-auto flex flex-col sm:flex-row items-center'>
                <div className='w-11/12 sm:6/12'>
                    <img src={about} />
                </div>
                <div className='w-11/12 sm:5/12 p-5 sm:p-10 text-left '>
                    <div className='py-2 text-xs text-secondory font-semibold   '>
                        ABOUT
                    </div>
                    <div className='py-2 text-3xl font-semibold'>
                        Some more information about your business
                    </div>
                    <div className='py-2 text-base font-normal'>
                        Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutSection;