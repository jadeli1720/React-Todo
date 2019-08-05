// your components will all go in this `component` directory.
import React from 'react';

import Todo from './Todo';

 const TodoList = props => {
    return(
        <div className="todo-list">
            {props.todoItem.map(item => (
                <Todo key={item.id} item={item}
                toggleTask={props.toggleTask}
                />
            ))}
        </div>
    )
}

export default TodoList;
