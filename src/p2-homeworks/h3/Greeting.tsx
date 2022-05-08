import React, {ChangeEvent, ChangeEventHandler, FC} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string;
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void; // need to fix any
    addUser: () => void;
    error: string;
    totalUsers: number;
}

// презентационная компонента (для верстальщика)
const Greeting:FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error.length ? s.error : s.someClass;

    return (
        <div>
            <div><input value={name} onChange={setNameCallback} className={inputClass}/>
                <button onClick={addUser}>add</button>
            </div>
            <div className={s.textError}>{error}</div>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
