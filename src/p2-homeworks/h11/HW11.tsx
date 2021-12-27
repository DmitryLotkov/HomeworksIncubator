import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "./common/c7-SuperRange/SuperRange.module.css"

export type ValuesType = number | Array<number>;

function HW11() {

    const [value1, setValue1] = useState<number>(20);
    const [value2, setValue2] = useState<number>(100);

    let onChangeRange = (currentValue: number) => {
        setValue1(currentValue);
    }
    let onChangeSuperRange = (values: ValuesType) => {
        if(typeof values === "object"){
            setValue1(values[0]);
            setValue2(values[1]);
        }
    }

    const disableCondition = value1 === 18;
    return (
        <div>
            <hr/>
            homeworks 11
            <div>
                <span className={s.leftValue}>{value1}</span>
                <SuperRange value={value1} onChangeRange={onChangeRange}

                />
            </div>

            <div>
                <span className={s.leftValueCustom}>{value1}</span>
                <SuperDoubleRange value={[value1, value2]}
                                  onChangeRange={onChangeSuperRange}
                                  max={100}
                                  min={0}
                                  step={2}
                                  disable={disableCondition}
                />
                <span className={s.rightValue}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
