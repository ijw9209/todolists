import React, { Component } from 'react';
import TodoItem from './TodoItem'
class TodoLists extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        return (
            <div className="TodoList">
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    ></TodoItem>
                ))}
            </div>
        );
    }
}

export default TodoLists;