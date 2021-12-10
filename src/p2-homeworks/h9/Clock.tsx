import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW9.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    const [show, setShow] = useState<boolean>(false);
    const [showTimer, setShowTimer] = useState<boolean>(false);

    const stop = () => {
        clearTimeout(timerId);
    }
    const start = () => {
        setShowTimer(true);
        stop();
        const id: number = window.setInterval(() => {
            setDate(new Date());
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }


    /* const addZeroToSeconds = () =>
         date.getSeconds()<10 ? `0${date.getSeconds()}`:`${date.getSeconds()}`;
     const addZeroToMinutes = () =>
         date.getMinutes()<10 ? `0${date.getMinutes()}`:`${date.getMinutes()}`;
     const addZeroToHours = () =>
         date.getHours()<10 ? `0${date.getHours()}` : `${date.getHours()}`;
     let stringTime = `${addZeroToHours()}:${addZeroToMinutes()}:${addZeroToSeconds()}`;*/

    const addZeroToDay = () =>
        date.getDay() < 10 ? `0${date.getDay()}` : `${date.getDay()}`;
    const addZeroToMonth = () =>
        date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;

    let stringTime = date.toLocaleTimeString();

    let stringDate = `${addZeroToDay()}.${addZeroToMonth()}.${date.getFullYear()}`;

    return (
        <div>
            <div className={showTimer ? s.stringTime: s.hidden}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            <div className={show ? s.visible : s.hidden}>
                {stringDate}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
