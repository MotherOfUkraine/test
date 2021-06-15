import {historyAction, historyState, historyType} from "../../types/historyTypes";


const initialState: historyState = {
    history: JSON.parse(<string>localStorage.getItem('history')) ?? []
}

const historyReducer = (state = initialState, action: historyAction): historyState => {
    switch (action.type){
        case historyType.SET_HISTORY: {
            if(state.history.length === 5){
                state.history.pop()
            }
            return {...state, history: [action.payload, ...state.history]}
        }
        default: return state
    }
}

export const setHistory = (history: string) => ({type: historyType.SET_HISTORY, payload: history})

export default historyReducer