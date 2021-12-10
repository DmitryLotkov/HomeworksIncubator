import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'


type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<string>
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        value,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((option, index) => {
        return (
                <option key={index} value={option} >
                    {option}

                </option>

        )
    }): []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value)

    }

    return (
        <select onChange={onChangeCallback} {...restProps} value={value}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
