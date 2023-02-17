import React from 'react';
import { image1, image2, image3 } from './dataSet';
import ItemsContainer from './ItemsContainer';
const AllStates = () => {
return (
    <div className='flex justify-center space-x-10 rounded-md mt-10'>
        <div className='h-48 w-64 rounded-md border-2 border-gray-500'>
            <ItemsContainer data={image1}/>
        </div>
        <div className='h-48 w-64 rounded-md border-2 border-gray-500'>
            <ItemsContainer data={image2}/>
        </div>
        <div className='h-48 w-64 rounded-md border-2 border-gray-500'>
            <ItemsContainer data={image3}/>
        </div>
    </div>
)
}

export default AllStates;