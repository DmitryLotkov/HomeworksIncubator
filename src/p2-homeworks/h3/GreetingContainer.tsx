import React, {ChangeEvent,KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string|null>("") // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const value = e.currentTarget.value
        setError(null)
        if(value.trim() === '') {
            setError('name is require');
            setName(value);
        }
        if (value){
            setError(null);
            setName(value);
        }
        else{
            setError(null);
            setName(value);
        }
    }
    // 'string'
    const addUser = () => {
        if (name.trim() === '') {
            console.log('name.trim() === "" ')
            setError('name is require')
        }
        if (name.trim()) {
            console.log('name.trim()')
            addUserCallback(name.trim());
            setName("");
            setError(null);
            alert(`Hello, ${name.trim()}!`);
            console.log(users);
        }
    }
     const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13){
            addUser();
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}

        />
    )
}

export default GreetingContainer
