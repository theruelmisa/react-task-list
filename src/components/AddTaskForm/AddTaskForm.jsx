import React, { useState } from 'react'

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
        <form onSubmit={ onFormSubmit }>
            <input type="text" value={ textInput } placeholder="Type name of task" autocomplete="false" onChange={ onInputChange }/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTaskForm
