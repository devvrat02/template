import React from 'react'
// feature showing a image , title and description
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
