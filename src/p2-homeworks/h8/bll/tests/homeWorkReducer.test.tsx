import {
    CheckAgeAC,
    homeWorkReducer,
    SortDownAC,
    SortUpAC,

} from '../homeWorkReducer'

export type initialStateObjectType = {
    _id: number
    name: string
    age: number
}

export let initialState: initialStateObjectType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortUpAC())
    console.log(initialState)
    console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe("Виктор")
    expect(newState[0].name).not.toBe(initialState[0].name)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortDownAC())
    console.log(newState)
    console.log(initialState)
    expect(newState[0].name).toBe('Кот')
    expect(newState[1].name).toBe("Коля")
    expect(newState[5].name).not.toBe(initialState[5].name)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckAgeAC())
    console.log(newState)
    console.log(initialState)
    expect(newState.length).toBe(4)
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')
    expect(initialState.length).toBe(6)
})
