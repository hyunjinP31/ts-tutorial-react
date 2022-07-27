import React from 'react';

type InsertProps = {
    inputText: string;
    onChange(text: string): void;
    onCreate(): void;
}

const InsertTodo = ({inputText, onChange, onCreate}: InsertProps) => {
    return (
        <div>
            <input type='text' value={inputText} onChange={(e)=>onChange(e.target.value)}/>
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default InsertTodo;