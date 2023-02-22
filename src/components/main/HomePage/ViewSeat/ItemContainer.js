import React from 'react'
import { price,detail,seatData, book} from './dataSet';
import Items from './Items';
const ItemContainer = () => {
return (
    <div>
        <Items data={price} detail={detail} book={book} seatData={seatData} title='Select Seat' />
    </div>
)
}
export default ItemContainer;