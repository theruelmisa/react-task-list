import React, { useState } from 'react';
import styles from './Task.module.css'; 

const Task = ({ task, onRemoveTask }) => {
    const [ done, setDone ] = useState(false);

    const onToggleDone = () => {
        setDone(!done);
    }

    return (
        <li className={ styles.Task } title="Click to mark as done" onClick={ onToggleDone }>
            <p className={ `${ done && styles.Done }` }>{ task.name }</p>
            <div className={ styles.Delete } onClick={ () => onRemoveTask( task.id )} title="Click to remove">Delete</div>
        </li>
    )
}

export default Task;
