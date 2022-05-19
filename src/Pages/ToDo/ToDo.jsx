import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ToDo = () => {
    const taskNameRef = useRef('');
    const taskDesRef = useRef('');

    const navigate = useNavigate();

    const handleTaskAdd = event => {
        event.preventDefault();

        const task = taskNameRef.current.value;
        const description = taskDesRef.current.value;

        const myTask = {
            title: task,
            description: description
        };

        fetch('https://evening-springs-85561.herokuapp.com/task', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    navigate('/mytask');
                }
            });

        taskNameRef.current.value = '';
        taskDesRef.current.value = '';
    };
    return (
        <div className='h-[80vh] flex items-center justify-center'>
            <div className="card bg-green-900 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleTaskAdd}>
                        <label className='text-base font-semibold mb-2' htmlFor="task-name">Title</label> <br />
                        <input ref={taskNameRef} className='border-0 pl-5 py-2 pr-14 rounded text-black' type="text" id='task-name' placeholder='Your Task Title' />
                        <br /><br />
                        <label className='text-base font-semibold mb-2' htmlFor="task-des">Task Description</label><br />
                        <textarea ref={taskDesRef} className='border-0 pl-5 pt-3 rounded text-black' name="task-des" id="task-des" placeholder='Your Task Description' cols="30" rows="5"></textarea>
                        <br />
                        <input className='btn btn-success w-full mt-4 font-bold' type="submit" value="Add Task" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToDo;