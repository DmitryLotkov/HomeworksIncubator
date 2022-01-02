
type StateType = {
    themes: string[]
    color: string
}

const initState:StateType = {
    color: 'red',
    themes: []
};

export type ChangeThemeColor = {
    type: "CHANGE-THEME-COLOR",
    color: string;
}

export type ActionType = ChangeThemeColor

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME-COLOR": {
            return {...state, color: action.color  }
        }
        default:
            return state;
    }
};

export const changeThemeAC = (colorValue: string): ChangeThemeColor => {
return {type: "CHANGE-THEME-COLOR", color:colorValue}
}; // fix any