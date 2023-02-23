import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    // add more cities as needed
];
const Search = () => {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [showFromOptions, setShowFromOptions] = useState(false);
    const [showToOptions, setShowToOptions] = useState(false);
    const handleSearch = () => {
        // Do something with fromLocation and toLocation when search button is clicked
    };
    const handleFromCityClick = (city) => {
        setFromLocation(city);
        setShowFromOptions(false);
    };

    const handleToCityClick = (city) => {
        setToLocation(city);
        setShowToOptions(false);
    };
    return (
        <div className="m-20 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-8">Travel Planner</h1>
            <div className="relative flex w-1/2">
                <input
                    className="border border-gray-300 rounded-lg px-4 py-2 w-1/2"
                    type="text"
                    placeholder="From"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    onFocus={() => setShowFromOptions(true)}
                    onClick={() => setShowFromOptions(false)}
                />
                {showFromOptions && (
                    <ul className="absolute z-10 w-1/4 bg-white border border-gray-300 rounded-lg mt-1 overflow-y-scroll max-h-48">
                        {cities
                            .filter((city) =>
                                city.toLowerCase().includes(fromLocation.toLowerCase())
                            )
                            .map((city) => (
                                <li
                                    key={city}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleFromCityClick(city)}
                                >
                                    {city}
                                </li>
                            ))}
                    </ul>
                )}
                <input
                    className="relative border border-gray-300 rounded-lg px-4 py-2 w-1/2"
                    type="text"
                    placeholder="To"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    onFocus={() => setShowToOptions(true)}
                />
                {showToOptions && (
                    <ul className="absolute z-10 w-1/4 bg-white border border-gray-300 rounded-lg mt-1 overflow-y-scroll max-h-48">
                        {cities
                            .filter((city) =>
                                city.toLowerCase().includes(toLocation.toLowerCase())
                            )
                            .map((city) => (
                                <li
                                    key={city}
                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleToCityClick(city)}
                                >
                                    {city}
                                </li>
                            ))}
                    </ul>
                )}
                <button className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-2">
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
