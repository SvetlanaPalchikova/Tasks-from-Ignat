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
const Greeting: FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error.length ? s.error : s.someClass;

    return (
        <div className={s.someClass}>
            <div className={s.textContainer}>
                <div>
                    <input value={name} onChange={setNameCallback} className={inputClass}/>
                </div>
                <div>
                    <button className={s.button} onClick={addUser}>Добавить</button>
                </div>
                <span className={s.totalUser}>{totalUsers}</span>
            </div>
            <div>
                <div className={s.textError}>{error}</div>
            </div>
        </div>


    )
}

export default Greeting
