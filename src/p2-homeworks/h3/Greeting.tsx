import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'



type GreetingPropsType = {
    name:  string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void
    error: string| null
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error: s.errorCommon; // need to fix with (?:)
    const buttonAddClass = `${s.buttonAdd} `
    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onKeyPressHandler}
            />


            <button onClick={addUser}
                    disabled={name === ''} className={buttonAddClass}>add</button>
            <span>{totalUsers}</span><br/>
            <span className={s.errorTitle}>{error}</span>
        </div>
    )
}

export default Greeting


