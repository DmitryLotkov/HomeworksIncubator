const initState = {
    buttonIsVisible:false
}
export type ActionsType = LoadingType

export type LoadingType = {
    type: "CHANGE-LOADING"
    buttonIsVisible: boolean
}
export type LoadingReducerStateType = {
    buttonIsVisible: boolean
}

export const loadingReducer = (state = initState, action: ActionsType): LoadingReducerStateType => { // fix any
    switch (action.type) {
        case "CHANGE-LOADING": {
            const stateCopy = {...state};
            stateCopy.buttonIsVisible = action.buttonIsVisible;
            return stateCopy;
        }
        default:
            return state
    }
}

export const EnableLoadingAC = (): LoadingType => {
    return {type:"CHANGE-LOADING", buttonIsVisible: true }
}
export const DisableLoadingAC = (): LoadingType => {
    return {type:"CHANGE-LOADING", buttonIsVisible: false }
}