import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeatFinal  from '../../../assets/SeatFinal.png';
import {TbCurrencyRupee} from 'react-icons/tb';
const SeatSelection = () => {
    const [isActive,setisActive]=useState(false);
    const imageClick = () => {
        setisActive(cur => !cur);
    }
return (
    <div className='border-l-2 border-r-2 border-b-2 rounded-b-md border-gray-500 p-2 mb-2 '>
        <div className='flex justify-between'>
            <div className="price">
                <div className='font-semibold'><h1>Select Seat</h1>
                </div>
                    <div className='flex mt-2 text-gray-400'>
                        <h1>Select Price</h1>
                        <div>
                            <ul className='mx-10 flex space-x-5'>
                                <li className=' w-14 h-6 items-center text-center rounded-sm border-2 border-gray-400'><input type="radio" value='Select'/>All</li>
                                <li className='border-2 border-gray-400 w-16 h-6 rounded-sm text-gray-400'><span className='flex items-center text-center justify-between pb-1'><input type="radio" name='price'/><TbCurrencyRupee/> 699</span></li>
                                <li className='border-2 border-gray-400 w-16 h-6 rounded-sm text-gray-400'><span className='flex items-center text-center justify-between pb-1'><input type="radio" name='price'/><TbCurrencyRupee/> 799</span></li>
                                <li className='border-2 border-gray-400 w-16 h-6 rounded-sm text-gray-400'><span className='flex items-center text-center justify-between pb-1'><input type="radio" name='price'/><TbCurrencyRupee/> 899</span></li>
                                <li className='border-2 border-gray-400 w-16 h-6 rounded-sm text-gray-400'><span className='flex items-center text-center justify-between pb-1'><input type="radio" name='price'/><TbCurrencyRupee/> 950</span></li>
                                <li className='border-2 border-gray-400 w-16 h-6 rounded-sm text-gray-400'><span className='flex items-center text-center justify-between pb-1'><input type="radio" name='price'/><TbCurrencyRupee/> 999</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <div className='flex-col space-y-1 mr-10 text-sm'>
                <div className='flex space-x-2'><input type="checkbox" className='w-5 h-5'/><span>Vaccant Seat</span></div>
                <div className='flex space-x-2'><input type="checkbox" className='w-5 h-5'/><span>Reserved Seat</span></div>
                <div className='flex space-x-2'><input type="checkbox" className='w-5 h-5'/><span>Your Selected Seat</span></div>
            </div>
        </div>
        <div className='flex bg-white mt-3 space-x-2'>
            <div className='flex-col border-2 rounded-md border-gray-500  w-3/4 p-2 space-y-2'>
                <div>
                    <div className="Seat-Image--- flex space-x-6">
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                </div>
                <div className="Seat-Image--- flex space-x-6 mt-3">
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-blue-500 h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                </div>
                <div className="Seat-Image--- flex justify-end space-x-6 p-1 mt-10">
                    <img src={SeatFinal} alt="no.jpg" className='bg-gray-500 h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-gray-500 h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-gray-500 h-8 w-20 rounded-sm'/>
                    <img src={SeatFinal} alt="no.jpg" className='bg-white h-8 w-20 rounded-sm'/>
                </div>
            </div>
        </div>
            <div className="Pay-Detail border-2 rounded-md border-gray-600 w-1/4 p-2">
                <h1 className='font-semibold'>Dropping</h1>
                <div className='flex justify-between'>
                    <span className='text-gray-400'>Gurgaon</span>
                    <span className='text-gray-400'>22:45</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-400'>Delhi</span>
                    <span className='text-gray-400'>22:45</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Seat No</span>
                    <span className=''>7</span>
                </div>
                <div className='flex justify-between'>
                    <span className=''>Fare Details</span>
                    <span className=''>INR 999</span>
                </div>
                <Link to='/InfoPage'><button className='bg-orange-500 font-bold rounded-sm text-white p-1 mx-5 mt-1'>Proceed To Book</button></Link>
            </div>
        </div>
    </div>
)
}
export default SeatSelection;