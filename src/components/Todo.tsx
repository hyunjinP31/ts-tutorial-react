import React from 'react';
import { State } from './TodoPropsCom';
type TodoProps = {
    todo: State;
}

const Todo = ({todo}:TodoProps) => {
    console.log(todo, 'dddd');
    return (
        <div>
            
        </div>
    );
};

export default Todo;