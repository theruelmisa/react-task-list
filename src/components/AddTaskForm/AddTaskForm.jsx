import React, { useState } from 'react';
import styles from './AddTaskForm.module.css';

const AddTaskForm = ({ addTaskHandler }) => {
    const [ textInput, setTextInput ] = useState("");

    const onInputChange = e => {
        setTextInput(e.target.value);
    }

    const onFormSubmit = e => {
        e.preventDefault();

        if (textInput !== "") {
            addTaskHandler(textInput);
        }

        setTextInput("");
    }

    return (
        <form className={ styles.FormContainer } onSubmit={ onFormSubmit }>
            <input className={ styles.TextField } type="text" value={ textInput } placeholder="Type name of task" autocomplete="false" onChange={ onInputChange }/>
            <button className={ styles.Button } type="submit">Add</button>
        </form>
    )
}

export default AddTaskForm
