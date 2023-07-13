import React from 'react'

function Feature({ imgsrc = {}, title = ``, desc = `` }) {
    return (
        <div>
            <div>
                <img src={imgsrc} />
            </div>
            <div className=' text-lg font-semibold py-2'>
                {title}
            </div>
            <div className='text-lg font-normal'>
                {desc}
            </div>
        </div>
    )
}

export default Feature
