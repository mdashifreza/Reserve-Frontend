import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/bg.jpeg';
import CardAndReview from './CardAndCustomer/CardAndReview';
import MyButton from '../../ReusableButton/MyButton';
import ItemContainer from './ItemContainer';
const SearchPage = () => {
  return (
    <div>
      <div className='bg-cover object-cover opacity-90 h-[80vh] w-full bg-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className="From--- font-medium h-auto p-52 flex">
        <ItemContainer />
        <div className='Date w-64 h-24 bg-white p-2 rounded-r-md border-r-2 border-t-2 border-b-2 border-gray-500 '>
            <label htmlFor="fr" className='text-sm text-gray-400 flex justify-between'>
              Travel Date
            </label>
            <div className='text-xl font-bold'>
              <input type='date' className='h-10'></input>
            </div>
        </div>
      </div>
            <div className="Button--- text-white font-bold text-center mx-48 ">
                    <Link to='/HomePage'><MyButton name='Search' style={`bg-orange-600 rounded-md w-52 h-11`}/></Link>
            </div>
      </div>  
            <div className="Review--- ">
                <CardAndReview />
            </div>
  </div>
  )
}
export default SearchPage;