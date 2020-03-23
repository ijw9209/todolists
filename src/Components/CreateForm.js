import React, { Component } from 'react';

class CreateForm extends Component {
    state = {
        input: ''
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        })
    }
    handleInsert = text => {
        this.props.onCreate(text);
        this.setState({
            input: ''
        })
    }
    render() {
        return (
            <div className="CreateForm">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        this.handleInsert(this.state.input);
                    }}
                >
                    <input
                        type="text"
                        value={this.state.input}
                        placeholder="todos ?"
                        onChange={this.handleChange}></input>
                    <button type="submit">입력</button>
                </form>
            </div>
        );
    }
}

export default CreateForm;