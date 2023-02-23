import React from 'react';

const PassDetail = ({data}) => {
return (
    <div className='border-2 border-gray-500 p-2 rounded-md'>
        {
            data.map((items,index)=>{
                return(
                    <div key={index} className='flex space-x-5'>
                        <div>
                            <label htmlFor="name">{items.name}</label>
                            <input type='text' className='border-2 border-gray-500 rounded-sm'/>
                            <div className='mt-5'>
                                <label htmlFor="name">{items.email}</label>
                                <input type='text' className='border-2 border-gray-500 rounded-sm'/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">{items.gender}</label>
                            <input type='text' className='border-2 border-gray-500 rounded-sm'/>
                            <div className='mt-5'>
                                <label htmlFor="name">{items.mobile}</label>
                                <input type='text' className='border-2 border-gray-500 rounded-sm'/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">{items.age}</label>
                            <input type='text' className='border-2 border-gray-500 rounded-sm'/>
                        </div>
                        
                    </div>
                )
            })
        }
    </div>
)
}

export default PassDetail