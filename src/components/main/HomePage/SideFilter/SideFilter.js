import React from 'react';
const SideFilter = ({time,title}) => {
return (
    <div>
        <h1>{title}</h1>
        {   
            time.map((items,id)=>{
                return (
                    <input type="checkbox" className='border-2 border-green-500' key={id}>{items.time}</input>
                )
            })
        }
    </div>
)
}
export default SideFilter;