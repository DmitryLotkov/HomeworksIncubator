import React from 'react'
import Styles from "./Message.module.css"


type MessagePropsType = {
    avatar: any
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {

    return (
        <div className={Styles.wrapper}>

            <img className={Styles.userImage} src={props.avatar} alt="avatar"/>
            <div className={Styles.message}>
                <div className={Styles.nameUserAndMessageText}>
                    <span className={Styles.nameUser}> {props.name} </span>
                    <span className={Styles.messageText}> {props.message} </span>
                </div>
                <span className={Styles.time}> {props.time} </span>



            </div>

        </div>
    )
}


