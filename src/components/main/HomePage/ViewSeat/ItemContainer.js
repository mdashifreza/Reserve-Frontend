import React from 'react'
import { selectedDetail, busSeatData } from './dataSet';
import Items from './Items';
import ImageWithColor from './ImageWithColor';
const ItemContainer = () => {
return (
    <div>
            <Items selectedDetail={selectedDetail} busSeatData={busSeatData} title='Select Seat'/>
    </div>
)
}
export default ItemContainer;