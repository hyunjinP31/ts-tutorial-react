import React from 'react';
import { Todo } from '../App'

type TodoProps = {
    todos: Todo[];
    onDelete(id:number): void;
    onToggle(id:number): void;
}

const TodoList = ({todos, onDelete, onToggle}: TodoProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} onClick={()=>onToggle(todo.id)} className={todo.isDone ? 'done' : ''}><span>{todo.text}</span><button onClick={()=>onDelete(todo.id)}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoList;