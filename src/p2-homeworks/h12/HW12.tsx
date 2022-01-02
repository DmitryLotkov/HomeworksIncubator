import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'green'];

export function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.themes.color)
    const dispatch = useDispatch();
    const onChangeCallback = (colorValue: string)=>{
        let action = changeThemeAC(colorValue);
        dispatch(action);
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <div>
                <SuperRadio  onChangeOption={onChangeCallback}
                             value = {theme}
                             options={themes} name={'radio'}/>
            </div>

            <hr/>
        </div>
    );
}

export default HW12;
