import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
const Items = ({data,label,labeltwo,placeholder,fromdata,todata}) => {
    const [searchFromValue, setsearchFromValue] = useState("");
    const [selectedFrom, setselectedFrom] = useState("");
    const [open, setOpen] = useState(false);
    console.log(selectedFrom, searchFromValue);
    return (
        <div className="bg-red-500">
            <div className="Parent-From--- w-64 h-20 font-medium">
                <div
                    className={`FromAndArrow bg-white p-2 rounded-l-sm border-2 border-gray-500 ${!selectedFrom && "text-gray-500"
                        }`}
                    onClick={() => setOpen(!open)}
                >
                    <label
                        htmlFor="fr"
                        className="text-sm text-gray-400 flex justify-between"
                    >
                        {label}<br></br>
                        <BiChevronDown size={22} className={`${open && "rotate-180"}`} />
                    </label>
                    <div className="text-xl font-bold">
                        {selectedFrom ? (
                            selectedFrom.length > 17 ? (
                                selectedFrom.substring(0, 17) + "..."
                            ) : (
                                selectedFrom
                            )
                        ) : (
                            <span>{placeholder}</span>
                        )}
                    </div>
                    <span className="text-black font-serif text-sm">{labeltwo}</span>
                </div>
                <ul
                    className={`bg-white mt-2 border-2 border-gray-500 rounded-md overflow-y-auto ${open ? "max-h-60" : "max-h-0 border-0"
                        } `}
                >
                    <div className="flex items-center px-2 sticky top-0 bg-white">
                        <AiOutlineSearch size={20} className="text-gray-500" />
                        <input
                            type="text"
                            value={searchFromValue}
                            onChange={(e) => setsearchFromValue(e.target.value.toLowerCase())}
                            placeholder="Enter City Name"
                            className="placeholder:text-gray-700 p-2 outline-none"
                        />
                    </div>
                    {
                        data.map((items) => (
                        <li
                            key={items.id}
                            className={`p-2 text-sm hover:bg-gray-600 hover:text-white ${items.from.toLowerCase() === selectedFrom?.toLowerCase() &&
                                "bg-gray-600 text-white"
                                }
                            ${items.from
                                    .toLowerCase()
                                    .startsWith(searchFromValue)
                                    ? "block"
                                    : "hidden"
                                }`}
                            onClick={() => {
                                if (items.from.toLowerCase() !== selectedFrom.toLowerCase()) {
                                    setselectedFrom(items.from);
                                    setOpen(false);
                                    setsearchFromValue("");
                                }
                            }}
                        >
                            {items.from}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Items;
