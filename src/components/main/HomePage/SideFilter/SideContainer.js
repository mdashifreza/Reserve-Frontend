import React from 'react';
import {time,operator} from './Data';
import SideFilter from './SideFilter';
const SideContainer = () => {
return (
    // // <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:px-8 py-8">
    // <Items Links={Reserve} title="Reserve"/>
    // <Items Links={about} title="About"/>
    <div>
        <SideFilter time={time} title="Departure Time"/>
    </div>
)
}

export default SideContainer;