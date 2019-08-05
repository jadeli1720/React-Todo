import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.item}
                    name="item"
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        );
    }

}

export default TodoForm;