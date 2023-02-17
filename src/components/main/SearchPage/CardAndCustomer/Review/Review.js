import React from 'react';
import {data1,data2,data3} from './dataSet';
import Feedback from './Feedback';
const Review = () => {
return (
    <div className='flex space-x-6'>
        <div className='bg-white w-72 rounded-md'>
            <Feedback title="Vatsal Agarwal" data={data1}/>
        </div>
        <div className='bg-white w-72 rounded-md'>
            <Feedback title="Vanya Agarwal" data={data2}/>
        </div>
        <div className='bg-white w-72 rounded-md'>
            <Feedback title="Seema Agarwal" data={data3}/>
        </div>
    </div>
)
}
export default Review;