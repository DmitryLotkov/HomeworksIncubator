import React, {ChangeEvent} from 'react'
import {createStyles, makeStyles, Slider} from "@material-ui/core";
import {ValuesType} from "../../HW11";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value:ValuesType) => void
    value: ValuesType
    min: number
    max: number
    step: number
    disable:boolean
}
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            color: '#385898',
            height: 8,
            width: 250,
            "box-sizing": "border-box",
            margin: 2,
            "vertical-align": "middle",
            padding: 0,
        },
        active: {},
        thumb: {
            height: 18,
            width: 18,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -5,
            '&:focus, &:hover, &$active': {
                boxShadow: 'inherit',
            },
            "&.Mui-disabled":{
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '2px solid currentColor',
                    marginTop: -5,
                    '&:focus, &:hover, &$active': {
                        boxShadow: 'inherit',
                },
            },
        },
        valueLabel: {
            left: 'calc(-50%)',
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        }
    }),
);


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
         min, max, step, disable,
    }
) => {
    const onChangeCallback = (event: ChangeEvent<{}>,value: ValuesType) =>{
        onChangeRange && onChangeRange(value);
    }

    const classes = useStyles();
    return (
        <>
            <Slider
                classes={{
                    root:classes.root,
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track,
                    valueLabel: classes.valueLabel,
                }}
                max={max}
                min={min}
                step={step}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                track={"inverted"}
                disabled={disable}
            />
        </>
    )
}

export default SuperDoubleRange
