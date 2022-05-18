import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <header className='h-[80vh] flex items-center justify-center'>
            <div className='text-center'>
                <h1 className='lg:text-5xl text-3xl font-bold text-green-500'>Welcome to ToDo Apps!</h1>
                <Link to='/todo' className='btn btn-success btn-outline uppercase mt-5'>Add a Task</Link>
            </div>
        </header>
    );
};

export default Home;