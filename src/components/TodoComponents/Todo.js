import React from 'react';

const Todo = props => {
    console.log("Todo.js",props.toggleTask);
    return (
        <div
            className={`item${props.item.completed ? 'completed': ''}`}
            onClick={() => props.toggleTask(props.item.id)}
        >
            
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo