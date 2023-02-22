import React from 'react';
const Container = ({title, data, links}) => {
return (
    <div>
        <h1 className='font-bold'>{title}</h1>
        <div>
        {
            data.map((items)=>{
                return(
                    <div className='text-sm text-gray-400' key={items.id}>
                        <div className='text-xs'>{items.detail}</div>
                        <div className='text-black text-sm font-bold mt-1 flex justify-between'>
                            <span>{items.arrTime}</span>
                            <span>{items.journeyTime}</span>
                            <span>{items.depTime}</span>
                        </div>
                        <div className='flex justify-between text-xs'>
                            <div>{items.boarding}</div>
                            <div>{items.deboarding}</div>
                        </div>
                    </div>
                )
            })
        }
        </div>
        <div className='flex space-x-4 mt-5'>
        {
            links.map((items)=>{
                return(
                    <div className='text-sm text-blue-500' key={items.id}>
                        <a href={items.link}>{items.name}</a>
                        
                    </div>
                )
            })
        }
        </div>
    </div>
)
}

export default Container