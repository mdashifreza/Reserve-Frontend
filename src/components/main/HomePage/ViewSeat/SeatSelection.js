import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeatFinal  from '../../../../assets/SeatFinal.png';
import {TbCurrencyRupee} from 'react-icons/tb';
import ItemContainer from './ItemContainer';
const SeatSelection = () => {
    const [isActive,setisActive]=useState(false);
    const imageClick = () => {
        setisActive(cur => !cur);
    }
return (
    <div className='border-l-2 border-r-2 border-b-2 rounded-b-md border-gray-500 p-2 mb-2 bg-green-400'>
        <ItemContainer />
    </div>
)
}
export default SeatSelection;