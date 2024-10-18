import { ToDo } from '../interfaces/ToDo';

interface TodoListProps {
    todos: ToDo[];
    toggleTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    toggleTodo,
    deleteTodo,
}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed
                                    ? 'line-through'
                                    : 'none',
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
