import React from 'react'
// Benefit component this can help call a function repeatively 
function Benefit({ img = () => { }, title = '', description = '' }) {
    return (
        <div className='flex w-11/12'>
            <div className='p-2'>
                {img()}
            </div>
            <div className='p-2'>
                <div className=' text-xl font-semibold '>
                    {title}
                </div>
                <div className=' text-base font-normal'>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Benefit
