import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Task = ({ task, handleDelete }) => {
    const { _id, title, description } = task;
    const [lineThrough, setLineThrough] = useState(false);
    const handleComplete = () => {
        setLineThrough(true);
        toast("Congratulations, you have completed your task.")
    };
    return (
        <div className="card bg-base-100 shadow-xl mb-20">
            <div className="flex justify-between p-10">
                <div>
                    <h2 className={lineThrough ? "card-title text-xl font-bold line-through" : "card-title text-xl font-bold no-underline"}>{title}</h2>
                    <p className={lineThrough ? 'text-lg line-through' : 'text-lg no-underline'}>Description: {description}</p>
                </div>
                <div className="">
                    <button onClick={handleComplete} className="btn btn-outline btn-success">Complete</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error ml-5">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;