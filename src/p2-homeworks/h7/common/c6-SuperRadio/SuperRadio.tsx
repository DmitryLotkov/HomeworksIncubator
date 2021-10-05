import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./superRadio.module.css"


type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void

}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }


    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key

        <p>
            <label key={name + '-' + i} className={s.customRadioLabel}>
                <input
                    className={s.radio}
                    type={"radio"}
                    name={name}
                    value={o}
                    checked={o === value}
                    // name, checked, value, onChange
                    onChange={onChangeCallback}
                    {...restProps}
                />

                <span className={s.span}>
                    {o}
                </span>
            </label>
        </p>

            )) : []

            return (
            <div>
                {mappedOptions}
                {console.log(`value для radio = ${value}`)}

            </div>
            )
            }

            export default SuperRadio
