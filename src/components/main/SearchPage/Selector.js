import React,{useState} from 'react';
import bg from '../../../assets/bg.jpeg';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from "react-icons/ai";
const Selector = () => {
    const defaultDate = new Date();
    // const defaultDate = new Date("Mar 25 2015");
    const [date, setDate] = useState(defaultDate);
    defaultDate.setDate(defaultDate.getDate());//if add +1 means current date +day
    const onSetDate = (event) => {
        setDate(new Date(event.target.value))
    }
    //trying alternative
    // const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);
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
    return (
        <div>
            <div className="From--- font-medium h-auto bg-yellow-30">
                <div className="Parent-To--- w-56 h-20 font-medium z-10">
                    <div className={`FromAndArrow bg-white p-2 border-r-2 border-t-2 border-b-2  border-gray-500 ${!selected && "text-gray-500"}`}
                        onClick={() => setOpen(!open)}
                    >
                        <label htmlFor="fr" className='text-sm text-gray-400 flex justify-between'>To<br></br>
                            <BiChevronDown size={22} className={`${open && "rotate-180"}`} />
                        </label>
                        <div className='text-xl font-bold'>
                            {
                                selected
                                    ? selected?.length > 17
                                        ? selected?.substring(0, 17) + "..."
                                        : selected
                                    : "Select To City"
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
                                    className={`p-2 text-sm hover:bg-gray-600 hover:text-white ${items.name.toLowerCase() === selected?.toLowerCase() && "bg-gray-600 text-white"}
                            ${items.name.toLowerCase().startsWith(inputValue)
                                            ? "block"
                                            : "hidden"
                                        }`}
                                    onClick={() => {
                                        if (items.name.toLowerCase() !== selected.toLowerCase()) {
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
            </div>
        </div>
    )
}

export default Selector;