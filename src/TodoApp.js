import React from 'react'
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import VisivilityFilters from './components/VisibilityFilters';
import './styles.css';

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisivilityFilters />
        </div>
    );
}
