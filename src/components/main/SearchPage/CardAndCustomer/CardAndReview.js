import React from 'react';
import Review from './Review/Review';
import AllStates from './States/AllStates';
const CardAndReview = () => {
return (
<div>
    <div className='AllStates--- '>
        <AllStates/>
    </div>
    <div className="Cards--- flex justify-center space-x-5 mb-10 mt-10 bg-gray-100 p-10">
        <Review/>
    </div>
</div>
)
}
export default CardAndReview;