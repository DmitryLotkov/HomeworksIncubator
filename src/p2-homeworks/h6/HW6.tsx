import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
    const [value, setValue] = useState<string>('')
    /*useEffect(()=>
            localStorage.setItem('editable-span-value',value),
        [value]);

    useEffect(()=>{
        let newStringValue = localStorage.getItem('editable-span-value');
        if(newStringValue){
            setValue(newStringValue);
        }
    },  [])*/

    const save = () => {
        saveState<string>('editable-span-value', value)


    }
    const restore = () => {
        if (value !== null) {
            setValue(restoreState<string>('editable-span-value', JSON.stringify(value)))
        }
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : ' Enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
