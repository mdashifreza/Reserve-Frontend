import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Items = ({data,loginRegister,onlyRegister}) => {
    const location = useLocation();
return (
<div className='flex justify-between items-center'>
    <div>
    <ul className='flex mx-20 space-x-6 text-lg'>
        {
            data.map((items)=>{
                return( 
                        <Link to={items.link} key={items.id}>
                        <li className='flex items-center'>
                            <img src={items.pic} alt="" className='h-10 items-center'/>
                            {items.name}
                        </li>
                        </Link>
                )
            })
        }
    </ul>
    </div>
    <div>
    {
        location.pathname ==='/' ?
        (<div className='flex mr-20 space-x-6'>
                {   
                    loginRegister.map((items)=>{
                        return(
                            <Link to={items.link} key={items.id}>
                                <div
                                    className='hover:bg-orange-400 p-1 w-20 text-center rounded-md
                                    font-semibold hover:text-white'
                                >
                                    {items.name}
                                </div>
                            </Link>
                        )
                    })
                }
        </div>
        )
        :
        (
            onlyRegister.map((items)=>{
                return(
                    <Link to={items.link} key={items.id}>
                        <div
                            className='hover:bg-orange-400 p-1 text-center rounded-md
                            font-semibold hover:text-white mr-20 w-36 flex items-center space-x-1'>
                            <span className='bg-gray-500 rounded-full h-10 w-10 flex'></span>
                            <span className='flex'>{items.name}</span>
                        </div>
                    </Link>
                )
            })
        )
    }
    </div>
</div>
)
}

export default Items;