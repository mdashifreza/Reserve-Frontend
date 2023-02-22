import React from 'react'
import { Link } from 'react-router-dom'
const Items = ({data,loginRegister}) => {
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
    <ul className='flex mr-20 space-x-6'>
            {
                loginRegister.map((items)=>{
                    return(
                        <Link to={items.link} key={items.id}>
                            <li
                                className='hover:bg-orange-400 p-1 w-20 text-center rounded-md
                                font-semibold hover:text-white'>
                                {items.name}
                            </li>
                        </Link>
                    )
                })
            }
    </ul>
    </div>
</div>
)
}

export default Items