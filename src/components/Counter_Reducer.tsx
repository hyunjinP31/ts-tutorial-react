import React, {useReducer} from 'react';

//액션타입, 리듀서 함수 생성
// 액션을 | 로 연달아서 쭉 나열함
type Action = { type: 'INCREASE' } | { type: 'DECREASE' }

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('없는 액션 타입입니다.');
    }
}

const Counter_Reducer = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = ()=> dispatch({type: 'INCREASE'});
    const onDecrease = ()=> dispatch({type: 'DECREASE'});
    return (
        <div>
            <h1>{count}</h1>        
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter_Reducer;