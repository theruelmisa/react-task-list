import React, { useState } from 'react';
import {
    TaskList
} from './components';


const App = () => {
    const [ tasks, setTasks ] = useState([
        {
            id: 1,
            name: "Water Plants"
        },
        {
            id: 2,
            name: "Cook Meal"
        },
        {
            id: 3,
            name: "Code!"
        }
    ]);

    const addTaskHandler = () => {

    }

    const removeTaskHandler = id => {
        const filteredTasks = tasks.filter( task => task.id !== id );
        setTasks(filteredTasks);
    }


    return (
        <div>
            <h1>React To DO!</h1>
            <TaskList tasks={ tasks } removeTaskHandler={ removeTaskHandler } />
        </div>
    )
};

export default App;
