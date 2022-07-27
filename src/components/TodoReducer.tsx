import React, { useReducer, useState } from 'react';

type State = {
        id: number;
        text: string;
        isDone: boolean;
    }
type TodoList = State[];
type Action =
{ type: 'CREATE_TODO'; todo: State } |
{ type: 'TOGGLE_DONE'; id: number }

function reducer(state: TodoList, action: Action): TodoList{
    switch(action.type){
        case 'CREATE_TODO':
            return [
                ...state,
                action.todo,
            ]
            case 'TOGGLE_DONE':
                return state.map(item=>
                    item.id === action.id ? {...item, isDone: !item.isDone} : item)
            default:
                throw new Error('There is no Action');
    }
}

const TodoReducer = () => {
    const [todoText, setTodoText] = useState('');
    const onChange = (e:any) => setTodoText(e.target.value);
    const [state, dispatch] = useReducer(reducer, [])
    let nextId = Math.max(...state.map(item=>item.id)) + 1;
    if(nextId === -Infinity){
        nextId = 0;
    }
    const create = ()=> {
        dispatch({type:'CREATE_TODO', todo :{
            id: nextId,
            text: todoText,
            isDone: false
        }});
        setTodoText('');
    }
    
    const itsDone = (id:number) => dispatch({type:'TOGGLE_DONE', id:id})

    return (
        <div>
            <input type='text' name='todo' onChange={onChange} value={todoText}/><button onClick={create}>등록</button>
            <ul>
                {
                    state.map(todo=><li key={todo.id} onClick={()=>itsDone(todo.id)} className={todo.isDone ? 'done' : ''}><p>{todo.text}</p></li>)
                }
            </ul>
        </div>
    );
};

export default TodoReducer;