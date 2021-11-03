import {initialStateObjectType} from "./tests/homeWorkReducer.test";

export type SortUpTypeTypeAC = {
    type: "sortUp",
}
export type SortDownTypeAC = {
    type: "sortDown",
}
export type CheckAgeTypeAC = {
    type: 'check',
    payload: 18
}
export type ActionType = SortUpTypeTypeAC | SortDownTypeAC | CheckAgeTypeAC


export const homeWorkReducer = (state: initialStateObjectType[], action: ActionType): initialStateObjectType[] => { // need to fix any
    switch (action.type) {
        case 'sortUp':

            return [...state].sort((a, b) => a.name > b.name ? 1 : -1)
        case 'sortDown':
            return [...state].sort((a, b) => a.name < b.name ? 1 : -1)
        case 'check':
            return state.filter(a => a.age > action.payload)
        default:
            return state
    }
}

export const SortUpAC = (): SortUpTypeTypeAC => {
    return {type: "sortUp"}
}
export const SortDownAC = (): SortDownTypeAC => {
    return {type: "sortDown"}
}
export const CheckAgeAC = (): CheckAgeTypeAC => {
    return {type: 'check', payload: 18}
}