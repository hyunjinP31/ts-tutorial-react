import React, { useReducer, useState } from 'react';

export type State = {
    id: number;
    text: string;
    isDone: boolean;
}
type Action =
{ type: 'CREATE', todo: State } |
{ type: 'TOGGLE', id: number } |
{ type: 'DELETE', id: number };

function reducer(state:State[], action: Action): State[]{
    switch (action.type) {
        case 'CREATE':
            return [
                ...state,
                action.todo
            ]
            case 'TOGGLE':
                return state.map(item=>item.id === action.id ?
                    {...item, isDone: !item.isDone} : item);
            case 'DELETE':
                return state.filter(item=>item.id !== action.id);
        default:
            throw new Error('There is no Action');
    }
}

const TodoPropsCom = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState('');
    const onChange = (e:any) => setText(e.target.value);
    return (
        <div>
            {/* <input type='text' value={text} onChange={onChange}/><button onClick={create}>등록</button>
            {state.map(todo=><Todo todo={todo} key={todo.id} dispatch={dispatch} />)} */}
        </div>
    );
};

export default TodoPropsCom;