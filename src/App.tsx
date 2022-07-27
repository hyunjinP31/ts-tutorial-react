import { useReducer } from 'react';
import './App.css';
import InsertTodo from './components/InsertTodo';
import TodoList from './components/TodoList';

//상태관리할 데이터
//1. input의 값
//2. 할 일 목록
//액션
//input값이 변경될 때 inputText 변경 - INPUT_CHANGE
//등록버튼 누르면 할 일 추가 - CREATE_TODO
//삭제버튼 누르면 할 일 삭제 - DELETE_TODO
//할 일 항목 클릭하면 isDone값을 반전 - DONE_TODO

type Action = {type: 'INPUT_CHANGE', inputText: string} |
{type: 'CREATE_TODO', todo : Todo} |
{ type: 'DELETE_TODO', id: number} |
{type: 'TOGGLE_TODO', id:number};

function reducer(state:State, action: Action) : State {
  switch(action.type){
    case 'INPUT_CHANGE':
      return {
        ...state,
        inputText: action.inputText
      }
      case 'CREATE_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            action.todo
          ]
        }
        case 'DELETE_TODO':
          return {
            ...state,
            todos:state.todos.filter(todo=> todo.id !== action.id)
          }
          case 'TOGGLE_TODO':
            return{
              ...state,
              todos:state.todos.map(todo=> todo.id === action.id ? {...todo, isDone: !todo.isDone} : todo)
            }
            default:
              throw new Error('There is no Action');
  }
}

export type Todo = {
  id: number;
  text: string;
  isDone: boolean;
}


type State = {
  inputText: string;
  todos: Todo[];
}

function App() {
  const [state, dispatch] = useReducer(reducer,{
    inputText:"",
    todos:[{
        id: 1,
        text: '졸려',
        isDone: false
      }]
  })
  let nextId = Math.max(...state.todos.map(item=>item.id)) + 1;
    if(nextId === -Infinity){
        nextId = 0;
    }
  const { inputText, todos } = state;
  const onChange = (text:string) => dispatch({type:'INPUT_CHANGE', inputText: text});
  const onCreate = () => {
    dispatch({type:'CREATE_TODO', todo: {
      id:nextId,
      text:state.inputText,
      isDone: false
    }})
    dispatch({type:'INPUT_CHANGE', inputText: ""})
  }
  const onDelete = (id:number) => dispatch({type:'DELETE_TODO', id:id})
  const onToggle = (id: number) => dispatch({type:'TOGGLE_TODO', id: id})
  return (
    <div className="App">
      <InsertTodo inputText={inputText} onChange={onChange} onCreate={onCreate}/>
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
