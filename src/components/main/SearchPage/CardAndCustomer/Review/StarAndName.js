import React from 'react';
import { BsStar } from 'react-icons/bs';
const StarAndName = () => {
return (
<div>
    <div className='text-white text-3xl  font-extrabold bg-red-500 opacity-50 h-12 w-12 rounded-full items-center flex justify-center'>
        <span>V</span>
    </div>
    <div className='bg-green-500 text-white mt-2 rounded-sm w-12 text-sm'>
        <ul className='flex justify-center space-x-1'>
            <li className='flex justify-between items-center'><BsStar/></li>
            <li className='flex justify-between items-center'>4.0</li>
        </ul>
    </div>
</div>
)
}
export default StarAndName;