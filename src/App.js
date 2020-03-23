import React, { Component } from 'react';
import CreateForm from './Components/CreateForm';
import TodoLists from './Components/TodoLists';

class App extends Component {
  state = {
    todos: [],
    mode: 'editing'
  };

  id = 1;
  selected_id = 0;
  handleCreate = text => {
    this.setState({
      todos: this.state.todos.concat({
        id: this.id, text, checked: false
      })
    })
    this.id++;
  }

  handleToggle = id => {
    const { todos } = this.state;
    this.selected_id = id;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked }
        }
        return todo;
        //   else {
        //   console.log('여기2', todo.id, id);
        //   return todo;
        // }
      })
    })
  }
  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };



  render() {
    return (
      <div className="app">
        <h3>todo-list</h3>
        <nav>
          <button>team</button>
          <button>my</button>
        </nav>
        <CreateForm onCreate={this.handleCreate} ></CreateForm>
        <TodoLists
          todos={this.state.todos}
          onToggle={this.handleToggle}
          onRemove={this.handleRemove}
        ></TodoLists>
      </div>
    );
  }
}

export default App;