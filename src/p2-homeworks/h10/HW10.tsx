import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW10.module.css"
import {useDispatch, useSelector} from "react-redux";
import {DisableLoadingAC, EnableLoadingAC} from "./bll/loadingReducer";
import store, {AppStoreType} from "./bll/store";
function HW10() {

    const loading = useSelector<AppStoreType>(state => state.loading.buttonIsVisible)
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(EnableLoadingAC());
        setTimeout(() => dispatch(DisableLoadingAC()) , 1500)
    };
    //@ts-ignore
    window.store=store;
    console.log(store.getState());
    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? <div className={s.loader}/>
                 :
                <div>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>
            }

            <hr/>

        </div>
    )
}

export default HW10
