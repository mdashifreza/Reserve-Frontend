import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import MyButton from '../../ReusableButton/MyButton';
import axios from 'axios';
// import Items from './Items';
//
import SelectCity from './SelectCity';
const ItemContainer = () => {
    const stateNames = [
        {
            id: 1,
            name: 'Alabama',
            buses: [
                { id: 1, departureTime: '9:00 AM', name: 'Bus 1' },
                { id: 2, departureTime: '11:00 AM', name: 'Bus 2' },
                { id: 3, departureTime: '1:00 PM', name: 'Bus 3' },
            ],
        },
        {
            name: 'Alaska',
            buses: [
                { id: 4, departureTime: '10:00 AM', name: 'Bus 4' },
                { id: 5, departureTime: '12:00 PM', name: 'Bus 5' },
            ],
        },
        // add more states here
    ];
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const handleFromChange = (e) => {
        setFrom(e.target.value);
    };
    const handleToChange = (e) => {
        setTo(e.target.value);
    };
    const handleSearch = () => {
        console.log(`Search from ${from} to ${to}`);
        // do something with from and to values here
    };

    const fromOptions = stateNames.filter((state) => state.name !== to);
    const toOptions = stateNames.filter((state) => state.name !== from);
    // const handleSearch = (event) => {
    // if (from !== '' && to !== '') {
    //     Navigate('/HomePage');
    // }
    // alert('Hey select below field');
    // };
    return (
        <div className=''>
            <div className='flex'>
                <div className='bg- h-24 w-52 rounded-l-md border-l-2 border-t-2 border-b-2 border-gray-500 p-1'>
                    {/* <label htmlFor="from">From</label> */}
                    <SelectCity
                        data={stateNames}
                        id="from"
                        label="From"
                        value={from}
                        options={fromOptions}
                        onChange={handleFromChange}
                    />
                    {/* <label htmlFor="to" className=''>India</label> */}
                </div>
                <div className='bg- h-24 w-52 border-2 border-gray-500 p-1'>
                    {/* <label htmlFor="to">To</label> */}
                        <SelectCity
                            data={stateNames}
                            id="to"
                            label="To"
                            value={to}
                            options={toOptions}
                            onChange={handleToChange}
                        />
                    {/* <label htmlFor="to" className=''>India</label> */}
                </div>
                <div className="Cal---- ">
                    <div className='Date w-52 h-24 bg-white p-2 rounded-r-md border-r-2 border-t-2 border-b-2 border-gray-500 '>
                        {/* <label htmlFor="fr" className='text-sm text-gray-400 flex justify-between'>
                            Travel Date
                        </label>
                        <div className='text-xl font-bold'>
                            <input type='date' className='h-10' onChange={handleDateValue}></input>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-24'>
                <Link to='/HomePage'><MyButton name='Search' style={`bg-orange-600 rounded-md w-52 h-11 text-white font-bold`} callFunc={handleSearch} /></Link>
            </div>
        </div>
    )
}
// event.preventDefault();
// axios.post('/api/search', {
//     params: {
//         from: from,
//         to: to
//     }
// })
//     .then((response) => {
//         // handle successful response
//         setCityList(response.data); // update the 'buses' state variable with the response data
//     })
//     .catch((error) => {
//         // handle error
//     });
// {/* <Items data={busData} fromdata={'from'} label={'From'} labeltwo={'India'} placeholder={'Select From City'}/>
//                     <Items data={busData} todata={'to'} label={'To'} labeltwo={'India'} placeholder={'Select To City'}/> */}
export default ItemContainer;