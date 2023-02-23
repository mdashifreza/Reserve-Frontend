import React, { useState } from 'react';
const ImageWithColor = ({ src, alt, initialColor, onClick }) => {
    const [color, setColor] = useState(initialColor);
    const handleClick = () => {
        const newColor = color === 'blue-500' ? 'white' : 'blue-500'; // toggle between two colors
        setColor(newColor);
        onClick(); // optional: call the onClick prop
    };
return (
    <div className={`bg-${color} hover:bg-${color}-dark cursor-pointer`}>
        <img src={src} alt={alt} className="h-8 w-16" onClick={handleClick}/>
    </div>
)
}
export default ImageWithColor;