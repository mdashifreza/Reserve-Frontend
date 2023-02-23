import React from 'react';
import {data} from './dataSet';
import {BsCheckLg} from 'react-icons/bs';
import Search from './Search';
const PaymentPage = () => {
return (
    <div>
        {/* <Search /> */}
        <div className='border-2 border-gray-500 w-1/2 rounded-md m-56 p-2 items-center text-center'>
            <div className='text-center items-center'>
                <div className='text-green-500'><BsCheckLg/></div>
                <h1 className='font-extrabold text-xl'>Booking has been confirmed</h1>
            </div>
            <div className='flex-col justify-between items-center'>
                {
                    data.map((items)=>{
                        return(
                            <div className='flex justify-center space-x-6'>
                                <div>{items.tid}</div>
                                <div>{items.value}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
)
}
export default PaymentPage;