import React, {ChangeEvent, ChangeEventHandler, FC, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>;
    addUserCallback: (name: string) => void;
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer:FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.value;
        if (name.length !== 0) {
           setError("")
        }

        setName(name)
    }

    const addUser = () => {
        if (name.length === 0) {
            setError("Введите имя")
        } else {
            alert(`Hello ${name}  ! `)
            addUserCallback(name)
            setName("")
        }

    }

    const totalUsers: number = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
