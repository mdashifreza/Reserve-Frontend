import React, { useState } from 'react';
import { BsStar } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import SeatSelection from '../SeatSelection';
const BusDetail = () => {
    const [view, setView] = useState(false);
    return (
        <div>
            <div className='flex'>
                <div className=" border-l-2 border-t-2 border-b-2 border-gray-500 border-r-2 p-2 w-3/4 flex">
                    <h1 className='font-semibold'>InterCity Smart Bus</h1>
                    <div className='flex space-x-2 mx-2 h-6 '>
                        <div className='bg-green-500 w-14 rounded-md flex items-center text-white'>
                            <span className='mx-1'><BsStar /></span>
                            <span className='mx-1'>4.0</span>
                        </div>
                        <span className='text-sm mt-1 text-gray-400'>Ratings</span>
                    </div>
                </div>
                <div className="border-r-2 border-t-2 border-b-2 border-gray-500 p-2 w-1/4">
                    <div className='flex flex-col text-center items-center font-bold text-md'>
                        <h1 className='font-serif'>Trip Cost</h1>
                        <div className='font-normal mb-2'>
                            <h1 className='mt-2 -mb-1 text-sm text-gray-500'>Per Ticket Fee</h1>
                            <ul className='flex'>
                                <li className='text-3xl'><BiRupee /></li>
                                <li className='font-extrabold text-2xl'>899</li>
                            </ul>
                        </div>
                        <button className='bg-orange-500 text-white font-bold rounded-md h-9 w-1/2'
                        onClick={() => setView(!view)}>View Seat</button>
                    </div>
                </div>
            </div>
            <div className=''>
                {
                    view ? <SeatSelection/> : null
                }
            </div>
        </div>
    )
}

export default BusDetail