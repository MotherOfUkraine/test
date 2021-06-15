import {listAction, listState, listTypes} from "../../types/listTypes"

const initialState: listState = {
    list: [],
    searchValue: ''
}

const listReducer = (state = initialState, action: listAction): listState => {
    switch (action.type){
        case listTypes.SET_LIST: return {...state, list: action.payload}
        default: return state
    }
}

export const setList = (list: object) => ({type: listTypes.SET_LIST, payload: list})

export default listReducer