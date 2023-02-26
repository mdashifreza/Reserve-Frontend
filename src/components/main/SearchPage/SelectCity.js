import React from 'react';
const SelectCity = ({ id, label, value, options, onChange ,data}) => {
    console.log('data',data);
    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <select id={id} value={value} onChange={onChange}>
                <option value="">Select a state</option>
                {
                    options.map((state) => (
                        <option key={state.id} value={state.name}>
                            {state.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
export default SelectCity;