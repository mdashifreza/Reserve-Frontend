import React, {useState} from 'react';
import {BsChevronLeft, BsChevronRight, BsStar} from 'react-icons/bs';
import {BiRupee} from 'react-icons/bi';
const HomePage = () => {
    let [num, setNum] = useState(1);
    let [cur, setCur] = useState(1);
    const pages = [
        { page: num + 0, name:"Mon"},
        { page: num + 1,name:"Tue"},
        { page: num + 2,name:"Thu"},
        { page: num + 3,name:"Fri" },
        { page: num + 4,name:"Sat" },
        { page: num + 5,name:"Thu" },
        { page: num + 6,name:"Fri" },
        { page: num + 7,name:"Sat" },
        { page: num + 8,name:"Sun" },
    ]
    function Next(){
        if(num < 23 )
        {
            setNum(num=num+1)
        }
    }
    function Back (){
        if(num > 1)
        {
            setNum(num=num-1)
        }
    }
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
                <div className="Button--- flex justify-between">
                    <button onClick={Back} className='h-12 w-8 rounded-l-lg hover:bg-gray-600 hover:text-white p-2'>
                    <BsChevronLeft/>
                    </button>
                    {
                        pages.map((items,id)=>{
                            return(
                                <button key={id} onClick={() => setCur(items.page)} className={`h-12 w-12
                                ${cur === items.page && 'bg-gray-600 rounded-sm text-white font-semibold'}`}>
                                {items.page}
                                <br></br>
                                <span className='font-light rounded-md text-sm'>{items.name}</span>
                                </button>
                            )
                        })
                    }
                    <button onClick={Next} className='h-12 w-8 rounded-r-lg hover:bg-gray-600 hover:text-white p-2'>
                    <BsChevronRight/>
                    </button>
                </div>
                <div className="Bus----- mt-5">
                    <div className='flex'>
                    <div className=" border-l-2 border-t-2 border-b-2 border-gray-500 rounded-l-md border-r-2 p-2 w-3/4 flex">
                        <h1 className='font-semibold'>InterCity Smart Bus</h1>
                        <div className='flex space-x-2 mx-2 h-6 '>
                            <div className='bg-green-500 w-14 rounded-md flex items-center text-white'>
                                <span className='mx-1'><BsStar/></span>
                                <span className='mx-1'>4.0</span>
                            </div>
                            <span className='text-sm mt-1 text-gray-400'>Ratings</span>   
                        </div>
                    </div>
                    <div className="border-r-2 border-t-2 border-b-2 border-gray-500 rounded-r-md p-2 w-1/4">
                        <div className='flex flex-col text-center items-center font-bold text-md'>
                            <h1 className='font-serif'>Trip Cost</h1>
                            <div className='font-normal mb-2'>
                                <h1 className='mt-2 -mb-1 text-sm text-gray-500'>Per Ticket Fee</h1>
                                    <ul className='flex'>
                                        <li className='text-3xl'><BiRupee/></li>
                                        <li className='font-extrabold text-2xl'>899</li>
                                    </ul>
                            </div>
                            <button className='bg-orange-500 text-white font-bold rounded-md h-9 w-1/2'>View Seat</button>
                        </div>
                    </div>
                    </div>
                </div> 
        </div>
    </div>
)
}

export default HomePage;