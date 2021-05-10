import React, { useState } from 'react';
import {
    TaskList,
    AddTaskForm
} from './components';
import "./App.css";

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

    const addTaskHandler = task => {
        if (task !== "") {
            setTasks([
                ...tasks, { id: 4, name: task }
            ])
        }
    }

    const removeTaskHandler = id => {
        const filteredTasks = tasks.filter( task => task.id !== id );
        setTasks(filteredTasks);
    }


    return (
        <div className="MainContainer" >
            <h1 className="Title" >React Task Master!</h1>
            <AddTaskForm addTaskHandler={ addTaskHandler } />
            <TaskList tasks={ tasks } removeTaskHandler={ removeTaskHandler } />
        </div>
    )
};

export default App;
