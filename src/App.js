import React from 'react';

//components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoItem: todoData
    };
  }

  // this.setState({
  //   todoItem: this.state.todoItem.map(item => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         completed: !item.completed
  //       };
  //     } else {
  //       return item;
  //     }
  //   })
  // })

  //Update the todo item on our state object
  //use this.setState
  //loop through the arr
  //find which element we clicked update the ""

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoItem: [...this.state.todoItem, newItem]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
        </div>
        <TodoList
          todoItem={this.state.todoItem}//passing todoItem as props to child components
        />
        <TodoForm
          addItem ={this.addItem}
        />
      </div>
    );
  }
}

export default App;
