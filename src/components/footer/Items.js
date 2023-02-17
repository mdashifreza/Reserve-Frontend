import React from 'react'
const Items = ({data,title}) => {
return (
    <div>
        <ul>
            <h1 className='mb-1 font-extrabold'>{title}</h1>
            {
                data.map((items)=>{
                    return (
                        <li key={items.id} className='text-black text-xs leading-5'>
                            <a href={items.data} className='cursor-pointer'>{items.name}</a>
                            <span className='text-gray-600'>{items.text}</span>
                            <a href={items.email} className='text-orange-600 font-semibold'>{items.email}</a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)
}

export default Items