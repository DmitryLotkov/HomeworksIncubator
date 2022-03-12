import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import style from "./request.module.css"
import {RequestAPI} from "./RequestAPI";


export const Request = () => {
    const [status, setStatus] = useState<boolean>(true);
    const [error, setError] = useState<string|null>("");
    let postInfo = () => {
        RequestAPI.postInform(status).then((resolve) => {
            console.log(resolve.data.yourBody);
        })
        .catch((error)=>{
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setError(error.response.data.errorText);
        })
    }

    const onclickHandler = () => {
        postInfo();
    }

    const checkBoxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.checked);
        if(e.currentTarget.checked){
            setError("");
        }
    }

    return (
        <div>
            <SuperButton className={style.onlyMargin} onClick={onclickHandler}>
                to sent server request
            </SuperButton>
            <input checked={status} type={"checkbox"} onChange={checkBoxOnChange}/>
            <div className={style.onlyMargin}>{error}</div>
        </div>
    );
};

export default Request;