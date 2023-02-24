import React from 'react';
import { busData } from './dataSet';
import Items from './Items'
const ItemContainer = () => {
return (
<div className=''>
    <div className='flex'>
        <Items data={busData} fromdata={'from'} label={'From'} labeltwo={'India'} placeholder={'Select From City'}/>
        <Items data={busData} todata={'to'} label={'To'} labeltwo={'India'} placeholder={'Select To City'}/>
    </div>
</div>
)
}

export default ItemContainer;