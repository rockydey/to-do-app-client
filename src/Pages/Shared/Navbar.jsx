import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='text-lg' to='/home'>Home</Link></li>
                        <li><Link className='text-lg' to='/todo'>ToDo</Link></li>
                        {
                            user ? <li><Link className='text-lg' to='/mytask'>My Task</Link></li> : ''
                        }
                        <li>{user ? <button onClick={logout} className='btn btn-ghost'>Sign Out</button> : <Link className='text-lg' to='/signin'>SignIn</Link>}</li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl">Daily <span className='text-green-500 ml-2'>Activity</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='text-lg' to='/home'>Home</Link></li>
                    <li><Link className='text-lg' to='/todo'>ToDo</Link></li>
                    {
                        user ? <li><Link className='text-lg' to='/mytask'>My Task</Link></li> : ""
                    }
                    <li>{user ? <button onClick={logout} className='btn btn-ghost text-lg font-normal'>Sign Out</button> : <Link className='text-lg' to='/signin'>SignIn</Link>}</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;