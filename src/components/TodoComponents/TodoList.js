// your components will all go in this `component` directory.
import React from 'react';

import Todo from './Todo';

 const TodoList = props => {
    return(
        <div>
            This is returning the TodoList component
            <Todo/>
        </div>
    )
}

export default TodoList;
