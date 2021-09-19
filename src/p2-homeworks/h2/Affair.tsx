import React from 'react'
import {AffairType} from "./HW2";
import Styles from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}
    const priorityColor = props.affair.priority === "high" ? Styles.priorityRed
        : props.affair.priority === "middle" ? Styles.priorityYellow
            : Styles.priorityGreen
    return (
        <div className={Styles.main}>
            <span className={Styles.affairName}>{props.affair.name}</span>
            <span className={priorityColor}>[{props.affair.priority}]</span>
            <button className={Styles.buttonDel} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
