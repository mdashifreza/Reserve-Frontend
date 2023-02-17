import StarAndName from './StarAndName'
import React from 'react'
const Feedback = ({data,title}) => {
return (
    <div className='p-2'>
        <div className='flex justify-between p-2'>
            <div>
                <StarAndName/>
            </div>
            <div>
                <h1 className='font-bold'>{title}</h1>
                <h1 className='text-xs font-sans text-gray-400 font-bold'>
                    {
                        data.map((items)=>{
                            return(
                                <span key={items.id}>{items.CusSince}</span>
                            )
                        })}
                </h1>
            </div>
        </div>
        <div className='text-gray-500 text-sm'>
        {
            data.map((items)=>{
                return(
                    <div key={items.id} className='p-1'>{items.text}</div>
                )
            })
        }
        </div>
    </div>
)
}
export default Feedback;