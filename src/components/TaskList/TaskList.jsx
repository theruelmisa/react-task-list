import React from 'react';
import Task from './Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, removeTaskHandler }) => {
    return (
        <div className={ styles.Container }>
            <h1 className={ styles.Title }> Tasks </h1>
            {
                tasks.length > 0 ? (
                <ul>
                    { tasks.map( task => ( <Task key={ task.id } task={ task } onRemoveTask={ removeTaskHandler } /> )) }
                </ul> ) : (
                    <p className={ styles.EmptyListText }>No more tasks. Add more!</p>
                )
            }
            
        </div>
    )
};

export default TaskList;