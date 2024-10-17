import './styles.css';
import { useState } from 'react';

export const ToDo = () => {
    // 一覧で表示するものはステートを使え
    // 入力
    const [todoText, setTodoText] = useState('');
    // 表示
    const [incompleteTodos, setIncompleteTodos] = useState([] as string[]);
    const [completeTodos, setCompleteTodos] = useState([] as string[]);

    // textに入力するときはこのフレーズを使う。 これはめんどくさいので
    const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) =>
        setTodoText(event.target.value);
    // hookを使うよ。

    const onClickAdd = () => {
        if (!todoText) return;
        // spread構文
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText('');
    };

    const onclickDelete = (index: number) => {
        // 何番目かを取得
        // リストからその何番目かを消す
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    const onclickComplete = (index: number) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    const onClickBack = (index: number) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };
    return (
        <div>
            <div className="input-area">
                <input
                    placeholder="ToDo"
                    value={todoText}
                    onChange={onChangeTodoText}
                />
                <button onClick={onClickAdd}>Add</button>
            </div>
            <div className="incomplete-area">
                <h1>未完了のToDo</h1>
                <ul>
                    {incompleteTodos.map((todo, index) => (
                        <li>
                            <div className="list-row">
                                <p>{todo}</p>
                                <button onClick={() => onclickComplete(index)}>
                                    complete
                                </button>
                                <button onClick={() => onclickDelete(index)}>
                                    delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="complete-area">
                <h1>完了のToDo</h1>
                <ul>
                    {completeTodos.map((todo, index) => (
                        <li>
                            <div className="list-row">
                                <p>{todo}</p>
                                <button onClick={() => onClickBack(index)}>
                                    back
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
