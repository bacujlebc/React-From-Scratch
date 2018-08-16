import React, { Component } from 'react';

let todoList = [
    { id: 1, title: 'Todo text 1', done: false },
    { id: 2, title: 'Todo text 2', done: false },
    { id: 3, title: 'Todo text 3', done: false },
    { id: 4, title: 'Todo text 4', done: false },
    { id: 5, title: 'Todo text 5', done: false },
    { id: 6, title: 'Todo text 6', done: false },
    { id: 7, title: 'Todo text 7', done: false },
    { id: 8, title: 'Todo text 8', done: false },
    { id: 9, title: 'Todo text 9', done: false },
    { id: 10, title: 'Todo text 10', done: false },
    { id: 11, title: 'Todo text 11', done: false }
];

let TodoList = props => {
    let todoList = props.data
        ? props.data.map(todo => (
              <TodoItem key={todo.id}>{todo.title}</TodoItem>
          ))
        : [];

    return (
        <div className="">
            <ul>{todoList}</ul>;
        </div>
    );
};

let TodoItem = props => {
    return <li>{props.children}</li>;
};

let SearchBar = props => {
    return <input type="text" onChange={props.handleChange} />;
};

export default class TodoWrapper extends Component {
    state = {
        value: ''
    };

    componentWillMount() {
        for (let i = 12; i < 1000; ++i) {
            todoList.push({
                id: i,
                title: `Todo text ${i}`,
                done: false
            });
        }
    }

    componentWillUnmount() {
        todoList = [];
    }

    onChangeHandler = value => {
        this.setState({
            value: value
        });
    };

    render() {
        let todos = todoList.filter(todo =>
            todo.title.toLocaleLowerCase().includes(this.state.value)
        );

        return (
            <React.Fragment>
                <SearchBar
                    handleChange={e => this.onChangeHandler(e.target.value)}
                />

                {todos && <TodoList data={todos} />}
            </React.Fragment>
        );
    }
}
