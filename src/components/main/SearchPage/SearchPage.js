import React from 'react';
// import { Link } from 'react-router-dom';
import bg from '../../../assets/bg.jpeg';
import CardAndReview from './CardAndCustomer/CardAndReview';
// import MyButton from '../../ReusableButton/MyButton';
import ItemContainer from './ItemContainer';
const SearchPage = () => {
  return (
    <div>
      <div className='bg-cover object-cover opacity-90 h-[80vh] w-full bg-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className="From--- font-medium h-auto p-64 flex mx-10">
        <ItemContainer />
      </div>
            {/* <div className="Button--- text-white font-bold text-center mx-48 ">
                    <Link to='/HomePage'><MyButton name='Search' style={`bg-orange-600 rounded-md w-52 h-11`}/></Link>
            </div> */}
      </div>  
            <div className="Review--- ">
                <CardAndReview />
            </div>
  </div>
  )
}
export default SearchPage;