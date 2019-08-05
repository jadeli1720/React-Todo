import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    //event handlers:

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log("handleChange", e.target.name, e.target.value)//logging changes when user is typing in the input field
    }

    submitItem = e => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.submitItem}>
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