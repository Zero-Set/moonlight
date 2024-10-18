import './styles.css';
import React, { useState } from 'react';
import { ToDo } from './interfaces/ToDo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
    // 表示
    const [todos, setTodos] = useState<ToDo[]>([
        { id: 1, text: '梶原善', completed: false },
    ]);
    const [newTodoText, setNewTodoText] = useState<string>('');

    const toggleTodo = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleAddTodo = () => {
        if (newTodoText.trim() == '') return;

        const newTodo: ToDo = {
            id: todos.length + 1,
            text: newTodoText,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container">
            <div className="input-area">
                <h1>To Do List</h1>
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button onClick={handleAddTodo}>add</button>
            </div>
            <div className="todo-area">
                <TodoList
                    todos={todos}
                    toggleTodo={toggleTodo}
                    deleteTodo={handleDeleteTodo}
                />
            </div>
        </div>
    );
};

export default App;
