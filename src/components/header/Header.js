import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import reser from '../../assets/reser.png';
const Header = () => {
return (
    <div className='p-3 text-black border-b-2 border-gray-500'>
        <nav className='md:flex md:items-center md:justify-between ml-16 mr-16 '>
        <div className='md:flex md:items-center md:justify-between'>
            <Link to='/'>
            <span className='font-extrabold text-xl text-orange-400 mr-8 cursor-pointer'>
                <img src={reser} alt="notfound.jpg" className='inline rounded-md mr-1 w-8 h-8 cursor-pointer'></img>
                RESERVE
            </span>
            </Link>
            <ul className='md:flex md:items-center md:justify-between text-lg'>
                <li className='mx-4 cursor-pointer'>Ticket</li>
                <li className='mx-4 cursor-pointer'>Contact us</li>
            </ul>
        </div>
            <ul className='md:flex md:items-center cursor-pointer z-[-1] md:z-auto md:static '>
                <li className='text-lg text-white mx-4 font-semibold bg-orange-400 w-28 h-8 rounded-sm text-center'>Login</li>
                <li className='text-lg mx-4 hover:text-white hover:bg-orange-400 w-28 h-8 rounded-sm hover:text-center'>Register</li>
            </ul>
        </nav>
    </div>
)
}
export default Header;