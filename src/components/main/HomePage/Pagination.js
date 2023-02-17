import React, {useState} from 'react';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs';
const Pagination = () => {
    let [num, setNum] = useState(1);
    let [cur, setCur] = useState(1);
    const pages = [
        { page: num + 0,name:"Mon"},
        { page: num + 1,name:"Tue"},
        { page: num + 2,name:"Thu"},
        { page: num + 3,name:"Fri" },
        { page: num + 4,name:"Sat" },
        { page: num + 5,name:"Thu" },
        { page: num + 6,name:"Fri" },
        { page: num + 7,name:"Sat" },
        { page: num + 8,name:"Sun" },
    ]
    function Next(){
        if(num < 23 )
        {
            setNum(num=num+1)
        }
    }
    function Back (){
        if(num > 1)
        {
            setNum(num=num-1)
        }
    }
return (
    <div>
        <div className="Button--- flex justify-between">
                    <button onClick={Back} className='h-12 w-8 rounded-l-lg hover:bg-gray-600 hover:text-white p-2'>
                    <BsChevronLeft/>
                    </button>
                    {
                        pages.map((items,id)=>{
                            return(
                                <button key={id} onClick={() => setCur(items.page)} className={`h-12 w-12
                                ${cur === items.page && 'bg-gray-600 rounded-sm text-white font-semibold'}`}>
                                {items.page}
                                <br></br>
                                <span className='font-light rounded-md text-sm'>{items.name}</span>
                                </button>
                            )
                        })
                    }
                    <button onClick={Next} className='h-12 w-8 rounded-r-lg hover:bg-gray-600 hover:text-white p-2'>
                    <BsChevronRight/>
                    </button>
                </div>
    </div>
)
}

export default Pagination;