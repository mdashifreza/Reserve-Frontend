import React from 'react'
const SideFilter = ({title,data}) => {
return (
<div>
    <div className='p-2 text-sm w-64'>
        <h1 className='font-extrabold'>{title}</h1>
        {   
            data.map((items)=>{
                return(
                    <div key={items.id} className='flex-col mt-2'>
                        <div className='space-x-2'>
                        <input type="checkbox" />
                            <label htmlFor="input">
                                {items.menu1}
                            </label>
                        </div>
                        <div className='space-x-2'>
                        <input type="checkbox" />
                            <label htmlFor="input">
                                {items.menu2}
                            </label>
                        </div>
                        <div className='space-x-2'>
                        <input type="checkbox" />
                            <label htmlFor="input">
                                {items.menu3}
                            </label>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
)
}

export default SideFilter