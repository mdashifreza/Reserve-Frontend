import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/bg.jpeg';
const SearchPage = () => {
    const defaultDate = new Date();
    // const defaultDate = new Date("Mar 25 2015");
    const [date, setDate] = useState(defaultDate);
    defaultDate.setDate(defaultDate.getDate());//if add +1 means current date +day
    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
return (
<div className='object-contain bg-cover bg-center h-[75vh]' style={{backgroundImage: `url(${bg})`}}>
    <div className="FROPM--- flex justify-center items-center p-24">
        <div className="h-[13vh] w-60 bg-white mt-60 rounded-l-md border-2 border-gray-400 p-1">
            <div className='mx-2 mb-2 mt-1'>
                <label htmlFor="fr" className='text-sm text-gray-400'>From<br></br>
                <span className='font-extrabold text-black text-lg cursor-pointer'>Delhi, New Delhi,</span><br></br>
                <span className='text-sm text-black'>India</span>
                </label>
            </div>
        </div>
        <div className="TO---  h-[13vh] w-56 bg-white mt-60 border-t-2 border-b-2 border-gray-400 p-1">
            <div className='mx-2 mb-2 mt-1'>
                <label htmlFor="fr" className='text-sm text-gray-400'>To<br></br>
                <span className='font-extrabold text-black text-lg cursor-pointer'>Kanpur, Uttar Pradesh</span><br></br>
                <span className='text-sm text-black'>India</span>
                </label>
            </div>
        </div>
        <div className="DATE---  h-[13vh] w-56 bg-white mt-60 border-l-2 border-b-2 border-r-2 border-t-2 rounded-r-md border-gray-400 p-1">
            <div className='mx-2 mb-2 mt-1'>
                <label htmlFor="fr" className='text-sm text-gray-400 '>Travel Date<br></br>
                <input type="date" value={date.toLocaleDateString('en-CA')} onChange={onSetDate} className='font-extrabold text-black text-lg cursor-pointer'/>
                </label>
            </div>
        </div>
    </div>
    <div className='flex justify-center -my-16'><Link to='/HomePage'><button className='bg-orange-500 text-white font-extrabold text-lg rounded-md w-40 h-11'>Search</button></Link></div>
</div>
)
}
export default SearchPage;