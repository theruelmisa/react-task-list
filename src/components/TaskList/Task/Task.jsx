import React from 'react'

const Task = ({ task, onRemoveTask }) => {
    return (
        <li onClick={ () => onRemoveTask( task.id )}>
            { task.name }
        </li>
    )
}

export default Task;
