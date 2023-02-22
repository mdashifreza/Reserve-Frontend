import React from 'react'
import BusDetail from '../HomePage/BusSeatPage/BusDetail';
const InfoPage = () => {
return (
    <div>
        <div><BusDetail/></div>
        <div className="Detail m-20">
            <h1>Enter Traveller Detail</h1>
            <div className='border-2 border-gray-500 p-10'>
                <label htmlFor="name">Name</label><br></br>
                <input type="text" id='name'className='border-2 border-gray-500 rounded-sm'/>
            </div>
        </div>
    </div>
)
}
export default InfoPage;