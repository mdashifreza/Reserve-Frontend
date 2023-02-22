import React from 'react';
const MyButton = ({name,style,callFunc}) => {
return (
    <div>
        <button className={`${style}`} onClick={callFunc}>{name}</button>
    </div>
)
}
export default MyButton;