import React from 'react'

function Rating({ stars = () => { }, img, comment = ``, location = ``, name = `` }) {

    return (
        <div className=''>
            <div>
                {stars()}
            </div>
            <div className=' text-2xl'>
                {comment}
            </div>
            <div className='flex flex-row mt-4'>
                <div className='mr-4'>
                    <img src={img} width={50} height={50} />
                </div>
                <div>
                    <div className=' font-semibold'>
                        {name}
                    </div>
                    <div className=' font-normal'>
                        {location}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating
