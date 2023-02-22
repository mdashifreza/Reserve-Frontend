import React, { useState } from 'react';
import Button from '../../../ReusableButton/MyButton';
import {Link} from 'react-router-dom';
const Items = ({data,detail,title,book,seatData}) => {
    const [seatColor,setSeatColor]=useState(false);
    function handleImage(){
        setSeatColor(!seatColor)
        console.log('chekin')
    }
return (
    <div className='bg-yellow-300'>
        <h1 className='font-extrabold'>{title}</h1>
        <div className='flex space-x-6'>
            <div className='flex w-3/4 items-center p-2'>
                <h1 className='font-bold'>Select Price</h1>
                <div className='flex mx-16 space-x-2'>
                {
                    data.map((items)=>{
                        return(
                            <ul key={items.id} className=''>
                                <li>
                                    <span className='flex border-2 rounded-sm border-gray-500 items-center'>
                                        <input type="radio" name='price'/>
                                        <span>{items.rup}</span>
                                        <span>{items.p}</span>
                                    </span>
                                </li>
                            </ul>
                        )
                    })
                }
                </div>
            </div>  
            <div className='flex-col w-1/4'>
                {
                    detail.map((items)=>{
                        return(
                            <div key={items.id} className='text-black space-x-2 flex items-center'> 
                                <input type='checkbox' name='name' className='w-5 h-5'/>
                                <label htmlFor="">{items.name}</label>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
        <div className='flex'>
        <div className='bg-white p-2 w-3/4 border-l-2 border-t-2 border-b-2 border-gray-500 rounded-l-md'>
            <div className='flex space-x-5 mx-20'>
                {
                    seatData.map((items)=>{
                        return(
                            <div key={items.id}>
                                <img src={items.seat} alt="" className={`h-6 w-16 ${(setSeatColor==true) ? "bg-green-500" :"bg-whi"}`} onClick={handleImage}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='bg-white p-2 w-1/3 border-l-2 border-r-2 border-t-2 border-b-2 border-gray-500 rounded-r-md'>
            {
                book.map((items)=>{
                    return(
                        <div key={items.id} className=''>
                            <h1 className='font-extrabold'>{items.heading}</h1>
                            <div className='flex justify-between'>
                                <div>
                                    <div>{items.from}</div>
                                    <div className='text-xs text-gray-400'>{items.detail}</div>
                                </div>
                                <div>
                                    {items.timefr}
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <div>{items.to}</div>
                                    <div className='text-xs text-gray-400'>{items.detailto}</div>
                                </div>
                                <div>
                                    {items.timeto}
                                </div>
                            </div>
                            <div className='flex justify-between border-b-2'>
                                <span>{items.seat}</span>
                                <span>{items.number}</span>
                            </div>
                            <div className='border-b-2 border-gray-200'>
                                <span className='font-bold'>{items.detailfair}</span>
                                <div className='flex justify-between'>
                                    <h1>{items.text}</h1>
                                    <div className='flex items-center'>
                                        <div>{items.rup}</div>
                                        <div>{items.fare}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Link to='/infoPage'><Button name='Proceed To Boook' style='bg-orange-500 text-white rounded-sm mx-14 mt-1 p-1'/></Link>
        </div>
        </div>
    </div>
)
}
export default Items;