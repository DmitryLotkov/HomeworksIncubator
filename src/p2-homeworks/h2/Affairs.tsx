import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'
import {FilterType} from "./HW2"
import Styles from "./Affairs.module.css"

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")}
    const setHigh = () => {props.setFilter("high")}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    return (
        <div>

            {mappedAffairs}
            <div className={Styles.filteredButtons}>
                <button className={`${Styles.buttonFilter} ${props.filter === 'all' && Styles.buttonUsed}`} onClick={setAll}>All</button>
                <button className={`${Styles.buttonFilter} ${props.filter === "high" && Styles.buttonUsed}`} onClick={setHigh}>High</button>
                <button className={`${Styles.buttonFilter} ${props.filter === "middle" && Styles.buttonUsed}`} onClick={setMiddle}>Middle</button>
                <button  className={`${Styles.buttonFilter} ${props.filter ==="low" && Styles.buttonUsed}`} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
