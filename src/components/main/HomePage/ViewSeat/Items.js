import React, { useState } from 'react';
import Button from '../../../ReusableButton/MyButton';
import {Link} from 'react-router-dom';
import ImageWithColor from './ImageWithColor';
const Items = ({ title, selectedDetail ,busSeatData }) => {
    const seatInfo = [
    { id: 1, value: "Vacant Seats", selected: false },
    { id: 2, value: "Reserved Seats", selected: false },
    { id: 3, value: "Selexted Seats", selected: false },
];
    const handleClick = () => {
        console.log('Image clicked');
    };
    const price = 8;
return (
    <div>
        <h1 className='font-extrabold'>{title}</h1>
        <div className='bg-green-500 flex justify-between p-2'>
            <div className='flex justify-start mt-5 space-x-5'>
                <div><h1>Select Price</h1></div>
                <div className='flex space-x-5'>
                    {
                        busSeatData.map((items,index)=>{
                            return(
                                <div>
                                    <span><input type='radio' name='price' />{items.prices}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mr-10'>
                {
                    seatInfo.map((items,index)=>{
                        return(
                            <div>
                                <span><input type="checkbox" />{items.value}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='flex'>
        <div className='bg-white p-2 w-3/4 border-l-2 border-t-2 border-b-2 border-gray-500 rounded-l-md'>
            <div className='flex-col space-y-5 '>
                {
                    busSeatData.seatLeft.map((image,index) => (
                        <div key={index} className='flex space-x-2'>
                            <span>{image}</span>
                            {/* {
                                image.seatLeft.map((items,index)=>{
                                    return(
                                        <div key={index}>
                                            <ImageWithColor
                                            src={items.value}
                                            alt={items.alt}
                                            initialColor={items.initialColor}
                                            onClick={handleClick}
                                            />
                                        </div>
                                    )
                                })
                            } */}
                        </div>
                    ))
                }
            </div>
            <div className='flex space-x-5 mx-20 mt-5'>
                {

                }
            </div>
            <div className='flex justify-end space-x-5 mx-20 mt-10'>
                {

                }
            </div>
        </div>
        <div className='bg-white p-2 w-1/3 border-l-2 border-r-2 border-t-2 border-b-2 border-gray-500 rounded-r-md flex-col items-center text-center'>
            {
                selectedDetail.map((items,index)=>{
                    return(
                        <div key={index}>
                            <div className='font-bold flex'>{items.title}</div>
                            <div className='flex justify-between'>
                                <div>
                                    {items.departureLocation}
                                        <div className='text-gray-400 text-sm'>{items.busType}</div>
                                </div>
                                <div>{items.departureTime}</div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                        {items.arrivalLocation}
                                    <div className='text-gray-400 text-sm'>{items.busType}</div>
                                </div>
                                <div>{items.arrivalTime}</div>
                            </div>
                            <div className='flex justify-between border-b-2 '>
                                <div>
                                    {items.name}
                                </div>
                                <div>{price}</div>
                            </div>
                        </div>
                    )
                })
            }
            <Link to='/infoPage'><Button name='Proceed To Boook' style='bg-orange-500 text-white rounded-sm mt-1 p-1'/></Link>
        </div>
        </div>
    </div>
)
}
export default Items;