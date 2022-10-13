import {createReducer, createAction} from '@reduxjs/toolkit'


type TState = {
    count: number,
    todo: Array<string>
}

const initialState: TState = {
    count: 2,
    todo: ['привет','пока']
}

export const increment:any = createAction('INCREMENT')
export const decrement:any = createAction('DECREMENT')

export default createReducer(initialState, {
    [increment]: function (state:any) {
        state.count = state.count + 1
    },
    [decrement]: function (state:any) {
        state.count = state.count - 1
    }
})