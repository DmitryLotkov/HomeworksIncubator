import React, {useState} from 'react'
import Affairs from './Affairs'
import Styles from "./Affairs.module.css"

// types
export type AffairPriorityType = 'high' | "low" | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType


// constants defaultAffairs
const defaultAffairs: AffairType[] = ([
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
])


// Array<AffairType>
// AffairType[] +++

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'low') {
        return affairs.filter(a => a.priority === 'low')
    }
    if (filter === 'middle'){
        return affairs.filter(a => a.priority === 'middle')
    }
    if (filter === 'high'){
        return affairs.filter(a => a.priority === 'high')
    }
    return affairs
}

export const deleteAffair = (a: AffairType[], _id: number): AffairType[] => {
    debugger
    console.log(a.filter((a) => a._id !== _id))
    return a.filter((a) => a._id !== _id)

}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            <div className={Styles.title}>homeworks 2</div>

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}

        </div>
    )
}

export default HW2


// remove rep in git
// git clone ignat rep
// init commit + push in git rep
// in first hw copy your work 1 copy + push
// in second hw copy your work 2 copy + push

// you have ine link => cabinet