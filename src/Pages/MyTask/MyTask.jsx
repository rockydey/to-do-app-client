import React, { useEffect, useState } from 'react';
import Task from './Task';

const MyTask = () => {
    const [myTask, setMyTask] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/mytask')
            .then(res => res.json())
            .then(data => {
                setMyTask(data);
            })
    }, []);
    const handleDelete = id => {
        const url = `http://localhost:5000/mytask/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => {
                if (json.deletedCount > 0) {
                    const remain = myTask.filter(item => item._id !== id);
                    setMyTask(remain);
                }
            });
    };
    return (
        <div>
            <h1 className='text-center text-2xl font-bold text-green-500 mb-10'>All My Task</h1>
            <div className=''>
                {
                    myTask.map(task => <Task
                        key={task._id}
                        task={task}
                        handleDelete={handleDelete}
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default MyTask;