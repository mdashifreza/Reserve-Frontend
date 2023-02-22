import React from 'react'
const SideFilter = ({title,data,type}) => {
return (
<div>
    <div className='p-2 text-sm w-52'>
        <h1 className='font-extrabold'>{title}</h1>
        <div className='p-1 space-y-2 border-b-2 border-b-gray-500'>
        {   
            data.map((items)=>{
                return(
                    <div key={items.id} className='space-x-1 flex '>
                        <input type={type} className='flex' name='name'/>
                        <label>{items.menu}</label>
                    </div>
                )
            })
        }
        </div>
    </div>
</div>
)
}

export default SideFilter;