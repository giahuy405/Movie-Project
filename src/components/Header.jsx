import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-slate-800 text-white p-2 font-bold'>
            <div className="container mx-auto flex justify-between items-center">
                <NavLink to='/' className='text-2xl'>BRAND</NavLink>
                <nav>
                    <NavLink
                        className={param => param.isActive ? `mr-6 text-yellow-300` : `mr-6`}
                        to='/signin'>Sign in</NavLink>
                    <NavLink
                        className={param => param.isActive ? ` text-yellow-300` : ``}
                        to='/signup'>Sign up</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;