import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/bg.jpeg';
import CardAndReview from './CardAndCustomer/CardAndReview';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from "react-icons/ai";
import { BsCalendar2Minus } from 'react-icons/bs';
import Selector from './Selector';
import MyButton from '../../ReusableButton/MyButton';
const SearchPage = () => {
  // const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [visible,setVisible]=useState(false);
  //For Api Purpose
  // useEffect(() => {
  //     fetch("https://restcountries.com/v2/all?fields=name")
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setCountries(data);
  //     });
  // }, []);
  //self
  const data = [
    { name: "Delhi, New Delhi", id: 1 },
    { name: "Kanpur, Utter Pradesh", id: 2 },
    { name: "Gurgaon, Haryana", id: 3 },
    { name: "Jaipur, Rajasthan", id: 4 },
    { name: "Indore, Madhya Pradesh", id: 5 },
    { name: "Hubli, Karnataka", id: 6 },
    { name: "Jamshedpur, Jharkhand", id: 7 },
    { name: "Kolkata, West Bengal", id: 8 },
    { name: "Leh, Jammu & Kashmir", id: 9 },
    { name: "Ludhiana, Punjab", id: 10 },
    { name: "Mumbai, Maharashtra", id: 11 },
    { name: "Palampur, Himachal Pradesh", id: 12 },
  ]
  // function iterate() {
  //   data.map((item) => {
  //     setCountries(data);
  //     console.log(item);
  //   })
  // }
    //Date
  return (
    <div>
      <div className='bg-cover object-cover opacity-60 h-[80vh] w-full bg-center' style={{ backgroundImage: `url(${bg})` }}>
      <div className="From--- font-medium h-auto p-72 bg-yellow-30 flex z-10">
        <div className="Parent-From--- w-64 h-20 font-medium bg-yellow-200">
          <div className={`FromAndArrow bg-white p-2 rounded-l-md border-2 border-gray-500 ${!selected && "text-gray-500"}`}
            onClick={() => setOpen(!open)}
          >
            <label htmlFor="fr" className='text-sm text-gray-400 flex justify-between'>
              From<br></br>
              <BiChevronDown size={22} className={`${open && "rotate-180"}`} />
            </label>
            <div className='text-xl font-bold'>
            {
              selected
                ? selected.length > 17
                  ? selected.substring(0, 17) + "..."
                  : selected
                  : <span>Select From City</span>
            }
            </div>
            <span className='text-black font-serif text-sm'>India</span>
          </div>
          <ul
            className={`bg-white mt-2 border-2 border-gray-500 rounded-md overflow-y-auto ${open ? "max-h-60" : "max-h-0 border-0"
              } `}
          >
            <div className="flex items-center px-2 sticky top-0 bg-white">
              <AiOutlineSearch size={18} className="text-gray-700 z-10" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                placeholder="Enter City Name"
                className="placeholder:text-gray-700 p-2 outline-none"
              />
            </div>
            {
              data.map((items) => (
              <li
                key={items.id}
                className={`p-2 text-sm hover:bg-gray-600 hover:text-white ${items.name.toLowerCase() === selected?.toLowerCase() &&"bg-gray-600 text-white"}
                            ${items.name.toLowerCase().startsWith(inputValue)
                            ? "block"
                            : "hidden"
                          }`}
                onClick={()=>{
                  if(items.name.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(items.name);
                    setOpen(false);
                    setInputValue("");
                  }
                }}
              >
              {items.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="To---" onClick={() => setVisible(!visible)}><Selector/></div>
        <div className='Date w-64 h-24  bg-white p-2 rounded-r-md border-r-2 border-t-2 border-b-2 border-gray-500 '>
            <label htmlFor="fr" className='text-sm text-gray-400 flex justify-between'>
              Travel Date
              {/* <BsCalendar2Minus size={18} className={`${open && "rotate-180"}`} /> */}
            </label>
            <div className='text-xl font-bold'>
              <input type='date' className='h-10'></input>
            </div>
          </div>
      </div>
      <div className="Button--- text-white font-semibold p-2 -my-60 text-center z-0">
          {/* <Link to='/HomePage'><button className={`bg-orange-500 rounded-md w-44 h-11 z-0 ${visible || open ? 'invisible' : 'visible'}`}>Search</button></Link> */}
          <Link to='/HomePage'><MyButton name='Search' style={`bg-orange-500 rounded-md w-44 h-11 ${visible || open ? 'invisible' : 'visible'}`}/></Link>
      </div>
    </div>  
            <div className="Review--- ">
                <CardAndReview />
            </div>
  </div>
  )
}
export default SearchPage;