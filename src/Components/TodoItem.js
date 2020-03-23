import React, { Component } from 'react';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.todo !== this.props.todo
    }

    render() {
        const { todo, onToggle, onRemove } = this.props;
        return (
            <div className="TodoItem"
                onClick={() => onToggle(todo.id)}>
                <ul>
                    <li className="text">{todo.text}
                        <button onClick={e => {
                            e.stopPropagation();
                            onRemove(todo.id)
                        }}>삭제</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TodoItem;