import React, { useState } from 'react';
import User from './User';

//배열안에 들어갈 객체 타입을 지정
//자식 컴포넌트로 넘겨주기위해 export
export type UserType = {
    id: number;
    name: string;
    age: number;
    position: string;
}

const UserList = () => {
    const [userList, setUserList] = useState<UserType[]>([
        {
            id: 0,
            name: '김그린',
            age: 24,
            position: 'front-end'
        },
        {
            id: 1,
            name: '이블루',
            age: 32,
            position: 'back-end'
        }
    ])
    return (
        <div>
            {userList.map(user=><User key={user.id} user={user}></User>)}
        </div>
    );
};

export default UserList;