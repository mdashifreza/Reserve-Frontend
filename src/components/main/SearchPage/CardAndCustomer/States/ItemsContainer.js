import React from 'react'
const ItemsContainer = ({data}) => {
return (
    <div className='items-center text-center justify-center flex text-xs mt-2 text-gray-400'>
        {
            data.map((items)=>{
                return(
                    <div key={items.id} className=''>
                        <img src={items.image} alt="image.png" className='h-36 w-60'/>
                        <div>{items.name}</div>
                        <div>{items.clas}</div>
                    </div>
                )
            })
        }
    </div>
)
}
export default ItemsContainer