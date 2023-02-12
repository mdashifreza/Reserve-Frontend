import React from 'react'

const CardAndReview = () => {
return (
<div className='CardandReview---'>
    <div className="Cards--- flex justify-center space-x-5 m-2 mt-20">
        <div className='bg-white h-40 w-64 rounded-md shadow-md shadow-gray-500'></div>
        <div className='bg-white h-40 w-64 rounded-md shadow-md shadow-gray-500'></div>
        <div className='bg-white h-40 w-64 rounded-md shadow-md shadow-gray-500'></div>
    </div>
    <div className="flex-col justify-center text-center mt-10 mb-10">
        <p className='font-semibold text-lg'>
            Here's what a few of our customers<br></br>
        </p>
        <p className='font-semibold text-lg'>have to say about us</p>
    </div>
    <div className="Cards--- flex justify-center space-x-5 mb-10 bg-gray-100 p-10">
        <div className='bg-white h-40 w-64 rounded-md shadow-md shadow-gray-500'></div>
        <div className='bg-white h-40 w-64 rounded-md shadow-md shadow-gray-500'></div>
        <div className='bg-white h-40 w-64 rounded-md shadow-md shadow-gray-500'></div>
    </div>
</div>
)
}

export default CardAndReview;