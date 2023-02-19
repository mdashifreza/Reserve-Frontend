import React from 'react';
import BusDetail from './BusSeatPage/BusDetail';
import Pagination from './Pagination';
import { dataA, dataB, rating, busOperator} from './SideFilter/dataSet';
import SideFilter from './SideFilter/SideFilter';
const HomePage = () => {
return (
    <div className='flex'>
        <div className="SIDE-FILTER--- w-1/6 ml-8 mt-12 mb-8 border-2 border-gray-500 rounded-md h-auto">
            <SideFilter title='Departure Time' data={dataA} />
            <SideFilter title='Arrival Time' data={dataA} />
            <SideFilter title='Bus Rating Time' data={rating} />
            <SideFilter title='Bus Operator' data={busOperator} />
        </div>
        <div className="Pagination--- bg-gray-100 ml-8 mr-10 w-5/6 mt-12 h-12 rounded-md">
            <Pagination/>
                <div className="BusDetail----- mt-5">
                    <BusDetail/>
                    <BusDetail/>
                    <BusDetail/>
                </div>
        </div>
    </div>
)
}

export default HomePage;