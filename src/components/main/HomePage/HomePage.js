import React from 'react';
import BusDetail from './BusSeatPage/BusDetail';
import Pagination from './Pagination/Pagination';
import { timing,location, rating, busOperator} from './SideFilter/dataSet';
import SideFilter from './SideFilter/SideFilter';
const HomePage = () => {
return (
    <div className='flex'>
        <div className="SIDE-FILTER--- w-1/6 ml-8 mt-12 mb-8 border-2 border-gray-500 rounded-md h-screen">
            <SideFilter title='Departure Time' data={timing} type={'checkbox'}/>
            <SideFilter title='Arrival Time' data={timing} type={'checkbox'}/>
            <SideFilter title='Pickup Point' data={location} type={'radio'}/>
            <SideFilter title='Drop Point' data={location} type={'radio'}/>
            <SideFilter title='Bus Rating ' data={rating} type={'checkbox'}/>
            <SideFilter title='Bus Operator ' data={busOperator} type={'checkbox'}/>
        </div>
        <div className="Pagination--- bg-gray-100 ml-8 mr-10 w-5/6 mt-12 h-12 rounded-md">
            <Pagination/>
                <div className="BusDetail----- mt-5">
                    <BusDetail/>
                </div>
        </div>
    </div>
)
}
export default HomePage;