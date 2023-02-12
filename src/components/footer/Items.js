import React from 'react'
const Items = ({Links,title}) => {
return (
    <div>
        <ul>
            <h1 className='mb-1 font-extrabold'>{title}</h1>
            {
                Links.map((link)=>{
                    return (
                        <li key={link.name} className='text-black text-xs leading-5'>
                            <a href={link.Links} className='cursor-pointer'>{link.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    </div>
)
}

export default Items