import React from 'react';
import Task from './Task/Task';

const TaskList = ({ tasks, removeTaskHandler }) => {
    return (
        <>
            <h1> Tasks </h1>
            <ul>
                {
                    tasks && tasks.map( task => ( <Task key={ task.id } task={ task } onRemoveTask={ removeTaskHandler } /> ))
                }
            </ul>
        </>
    )
};

export default TaskList;