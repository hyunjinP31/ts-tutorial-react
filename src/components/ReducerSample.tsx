import React, {useReducer} from 'react';

type Color = 'red' | 'orange' | 'green';
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
}
type Action = 
{ type: 'SET_COUNT'; count: number} | 
{ type: 'SET_TEXT'; text: string } |
{ type: 'SET_COLOR'; color: Color} |
{ type: 'TOGGLE_GOOD' }

function reducer(state: State, action: Action) : State{
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: state.count + action.count
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood
            }
        default:
            throw new Error('There is no action')
    }
}


const ReducerSample = () => {
    const [state, dispatch] = useReducer(reducer,{
        count: 0,
        text: "Hello",
        color: 'red',
        isGood: true
    })

    const setCount = ()=> dispatch({type: 'SET_COUNT', count:5});
    const setText = ()=> dispatch({type: 'SET_TEXT', text: 'bye'});
    const setColor = ()=> dispatch({type: 'SET_COLOR', color: 'orange'});
    const toggleGood = ()=> dispatch({type: 'TOGGLE_GOOD'});
    return (
        <div>
            <p>
                <code>count :</code> {state.count}
            </p>
            <p>
                <code>text :</code> {state.text}
            </p>
            <p>
                <code>color :</code> {state.color}
            </p>
            <p>
                <code>isGood :</code> {state.isGood ? 'true' : 'false'}
            </p>
            <div>
                <button onClick={setCount}>setCount</button>
                <button onClick={setText}>setText</button>
                <button onClick={setColor}>setColor</button>
                <button onClick={toggleGood}>toggleGood</button>
            </div>
        </div>
    );
};

export default ReducerSample;