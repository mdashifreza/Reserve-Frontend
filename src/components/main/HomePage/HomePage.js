import React from 'react';
import BusDetail from './BusSeatPage/BusDetail';
import Pagination from './Pagination';
const HomePage = () => {
return (
    <div className='flex'>
        <div className="SIDE-FILTER--- w-1/6 ml-8 mt-12">
            <div className="filter flex justify-between p-2 border-2 rounded-md border-gray-500 mb-2">
                <span>Filter</span>
                <span>Clear All</span>
            </div>
            <div className="menu p-2 border-2 rounded-md border-gray-500 mb-6">
                <div className='Dearture-Time '>
                    <h1 className='font-semibold'>Departure Time</h1>
                    <div className="depar mt-2">
                        <ul className='text-sm'>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Morning session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Afernoon session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Evening session</label></li>
                        </ul>
                        <p className='border-1 border-b-2 border-gray-600 mt-4'></p>
                    </div>
                </div>
                <div className='Arrival-Time'>
                    <h1 className='mt-2 font-semibold'>Arrival Time</h1>
                    <div className="depar mt-2">
                        <ul className='text-sm'>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Morning session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Afernoon session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Evening session</label></li>
                        </ul>
                        <p className='border-1 border-b-2 border-gray-600 mt-4'></p>
                    </div>
                </div>
                <div className='Pickup-Point'>
                    <h1 className='mt-2 font-semibold'>Pickup Point</h1>
                    <div className="depar mt-2">
                        <ul className='text-sm'>
                            <li className='md:space-x-2 inline-flex'><input type="radio" className='w-4 h-6' id='ms'  value='morning' name="contact" /><label htmlFor='ms'>Morning session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="radio" className='w-4 h-6' id='as' value='afternoon' name="contact" /><label htmlFor='as'>Afernoon session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="radio" className='w-4 h-6' id='es' value='evening' name="contact" /><label htmlFor='es'>Evening session</label></li>
                        </ul>
                        <p className='border-1 border-b-2 border-gray-600 mt-4'></p>
                    </div>
                </div>
                <div className='Drop-Point'>
                    <h1 className='mt-2 font-semibold'>Drop Point</h1>
                    <div className="depar mt-2">
                        <ul className='text-sm'>
                            <li className='md:space-x-2 inline-flex'><input type="radio" className='w-4 h-6' id='ms'  value='morning' name="drop" /><label htmlFor='ms'>Morning session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="radio" className='w-4 h-6' id='as' value='afternoon' name="drop" /><label htmlFor='as'>Afernoon session</label></li>
                            <li className='md:space-x-2 inline-flex'><input type="radio" className='w-4 h-6' id='es' value='evening' name="drop" /><label htmlFor='es'>Evening session</label></li>
                        </ul>
                        <p className='border-1 border-b-2 border-gray-600 mt-4'></p>
                    </div>
                </div>
                <div className='Bus Operator'>
                    <h1 className='mt-2 font-semibold'>Bus Operator</h1>
                    <div className="depar mt-2">
                        <ul className='text-sm'>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Zig Bus</label></li><br></br>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Intercity Smart</label></li><br></br>
                            <li className='md:space-x-2 inline-flex'><input type="checkbox" id='ms'/><label htmlFor='ms'>Safar Express</label></li>
                        </ul>
                        <p className='border-1 border-b-2 border-gray-600 mt-4'></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Pagination--- bg-gray-100 ml-8 mr-10 w-5/6 mt-12 h-12 rounded-md">
            <Pagination/>
                <div className="BusDetail----- mt-5">
                    <BusDetail/>
                    <BusDetail/>
                    <BusDetail/>
                    <BusDetail/>
                </div>
        </div>
    </div>
)
}

export default HomePage;