import React, {useState} from 'react'
import {
    CheckAgeAC,
    homeWorkReducer,
    SortDownAC,
    SortUpAC,

} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {initialStateObjectType} from "./bll/tests/homeWorkReducer.test";
import s from "./HW8.module.css"
// export type UserType =

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<initialStateObjectType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: initialStateObjectType) => (

            <div className={s.Container} key={p._id}>
                <span className={s.SpanName}>{p.name}</span>
                <span className={s.SpanAge}>{p.age}</span>
            </div>


    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortUpAC()))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortDownAC()))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, CheckAgeAC()))
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <div className={s.Buttons}>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={sortAge}>check 18</SuperButton>
            </div>



            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
