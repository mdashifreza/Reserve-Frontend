import React from 'react';
import {fare} from './dataSet';
import MyButton from '../../ReusableButton/MyButton';
import {Link} from 'react-router-dom';
import {passengerData} from './dataSet';
import PassDetail from './PassDetail';
const InfoPage = () => {
return (
    <div className='flex'>
        <div className="Detail m-20 w-1/2">
            <h1 className='font-semibold text-xl mb-2'>Enter Traveller Details</h1>
            <div>
                <PassDetail data={passengerData}/>
            </div>
        </div>
        <div className="Fare---- w-1/4 m-20 border-2 border-gray-500 rounded-md p-2 items-center text-center">
            <h1 className='text-left'>Fare Detail</h1>
            <div className='border-b-2 items-center text-center'>
            {
                fare.map((items)=>{
                    return(
                        <div className='flex justify-between'>
                            <div className=''>{items.fare}<span className='font-semibold'>{items.fareTotal}</span></div>
                            <div className='flex items-center'>{items.icon}{items.value}<span className='text-xl'>{items.iconTotal}</span><span className='font-semibold'>{items.valueTotal}</span></div>
                        </div>
                    )
                })
            }
            </div>
            <Link to='/PaymentPage'><MyButton name='Proceed To Payment' style='bg-orange-500 font-semibold text-white p-1 mt-1 rounded-sm'/></Link>
        </div>
    </div>
)
}
export default InfoPage;