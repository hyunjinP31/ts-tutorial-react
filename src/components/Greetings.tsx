import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
}

const Greetings = ({ name, mark }: GreetingsProps) => {
    return (
        <div>
            Hello, {name} {mark}
        </div>
    );
};

export default Greetings;