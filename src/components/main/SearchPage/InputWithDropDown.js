import React, { useState } from 'react';
const stateNames = [
    'New Delhi',
    'Mumbai',
    'Hyderabad',
    'Pune',
    'Bangaluru',
];

const InputWithDropDown = ({ value, onChange, options, selectedOption }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const handleInputChange = (e) => {
        onChange(e.target.value);
        setShowDropdown(true);
    };

    const handleOptionClick = (option) => {
        onChange(option);
        setShowDropdown(false);
    };

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
    );

    return (
        <div className="input-with-dropdown">
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder="Search for a state"
            />
            {showDropdown && (
                <ul className="dropdown">
                    {filteredOptions.map((option) => (
                        <li
                            key={option}
                            className={option === selectedOption ? 'selected' : ''}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default InputWithDropDown